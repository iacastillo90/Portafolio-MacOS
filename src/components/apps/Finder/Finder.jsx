/**
 * Finder.jsx — Ventana principal del Finder macOS
 *
 * Este componente actúa como orquestador:
 *   - Gestiona el estado (activeTab, viewMode)
 *   - Provee los datos (projects)
 *   - Compone los sub-componentes: Sidebar, Toolbar, Content, StatusBar
 */
import { useState } from 'react';
import WindowWrapper   from '../../hoc/WindowWrapper';
import FinderSidebar   from './components/FinderSidebar';
import FinderToolbar   from './components/FinderToolbar';
import FinderContent   from './components/FinderContent';
import FinderStatusBar from './components/FinderStatusBar';
import './Finder.css';

/* ── Datos de los proyectos ─────────────────────────────────────
   En el futuro esto puede venir de un contexto o una API.
   ─────────────────────────────────────────────────────────────── */
const PROJECTS = [
    { id: 1, name: 'E-commerce React',    type: 'folder', date: 'Hoy, 10:42 AM' },
    { id: 2, name: 'API Spring Boot',     type: 'folder', date: 'Ayer, 4:15 PM' },
    { id: 3, name: 'App Vue.js',          type: 'folder', date: '12 May, 2023'  },
    { id: 4, name: 'Petcare Platform',    type: 'folder', date: '8 Abr, 2023'   },
    { id: 5, name: 'CV_Ivan Castillo.pdf',type: 'pdf',    date: '1 Ene, 2024'   },
    { id: 6, name: 'diseño_ui.png',       type: 'image',  date: '15 Mar, 2024'  },
];

const Finder = () => {
    const [activeTab, setActiveTab] = useState('Proyectos');
    const [viewMode,  setViewMode]  = useState('grid');

    return (
        <WindowWrapper id="finder" title={activeTab} width={740} height={480}>
            <div className="finder-layout">

                <FinderSidebar
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <main className="finder-main">
                    <FinderToolbar
                        activeTab={activeTab}
                        viewMode={viewMode}
                        onViewChange={setViewMode}
                    />
                    <FinderContent
                        items={PROJECTS}
                        viewMode={viewMode}
                    />
                    <FinderStatusBar
                        count={PROJECTS.length}
                        available="142 GB"
                    />
                </main>

            </div>
        </WindowWrapper>
    );
};

export default Finder;
