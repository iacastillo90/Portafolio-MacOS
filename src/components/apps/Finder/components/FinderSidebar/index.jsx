/**
 * FinderSidebar.jsx — Panel lateral del Finder
 *
 * Props:
 *   activeTab   {string}   — Sección activa actualmente
 *   onTabChange {function} — Callback al cambiar de sección
 */
import {
    RecentIcon,
    DesktopIcon,
    FolderSideIcon,
    DownloadSideIcon,
    GitHubIcon,
} from '../../../../common/icons/SidebarIcons';
import './FinderSidebar.css';

const FAVORITES = [
    { label: 'Recientes',  Icon: RecentIcon       },
    { label: 'Escritorio', Icon: DesktopIcon      },
    { label: 'Proyectos',  Icon: FolderSideIcon   },
    { label: 'Descargas',  Icon: DownloadSideIcon },
];

const LOCATIONS = [
    { label: 'GitHub', Icon: GitHubIcon },
];

const SidebarSection = ({ title, items, activeTab, onTabChange }) => (
    <>
        <p className="finder-sidebar-label">{title}</p>
        <nav className="finder-sidebar-nav">
            {items.map(({ label, Icon }) => (
                <button
                    key={label}
                    onClick={() => onTabChange?.(label)}
                    className={`finder-sidebar-item ${activeTab === label ? 'active' : ''}`}
                >
                    <span className="finder-sidebar-icon"><Icon /></span>
                    {label}
                </button>
            ))}
        </nav>
    </>
);

const FinderSidebar = ({ activeTab, onTabChange }) => (
    <aside className="finder-sidebar">
        <SidebarSection
            title="FAVORITOS"
            items={FAVORITES}
            activeTab={activeTab}
            onTabChange={onTabChange}
        />
        <SidebarSection
            title="UBICACIONES"
            items={LOCATIONS}
            activeTab={activeTab}
            onTabChange={onTabChange}
        />
    </aside>
);

export default FinderSidebar;
