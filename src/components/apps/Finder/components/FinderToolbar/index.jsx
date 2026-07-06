/**
 * FinderToolbar.jsx — Barra de herramientas del Finder
 *
 * Props:
 *   activeTab   {string}   — Nombre de la sección activa (breadcrumb)
 *   viewMode    {string}   — 'grid' | 'list'
 *   onViewChange{function} — Callback para cambiar la vista
 */
import { ChevronLeft, ChevronRight, LayoutGrid, List, Search } from 'lucide-react';
import './FinderToolbar.css';

const FinderToolbar = ({ activeTab, viewMode, onViewChange }) => (
    <div className="finder-toolbar">

        {/* ── Izquierda: navegación + breadcrumb ── */}
        <div className="finder-toolbar-left">
            <button className="finder-nav-btn" aria-label="Atrás">
                <ChevronLeft size={18} />
            </button>
            <button className="finder-nav-btn" aria-label="Adelante">
                <ChevronRight size={18} />
            </button>
            <span className="finder-breadcrumb">{activeTab}</span>
        </div>

        {/* ── Derecha: toggle de vista + buscador ── */}
        <div className="finder-toolbar-right">

            {/* Toggle Grid / Lista */}
            <div className="finder-view-toggle">
                <button
                    onClick={() => onViewChange('grid')}
                    className={`finder-view-btn ${viewMode === 'grid' ? 'finder-view-btn--active' : ''}`}
                    aria-label="Vista cuadrícula"
                >
                    <LayoutGrid size={15} />
                </button>
                <button
                    onClick={() => onViewChange('list')}
                    className={`finder-view-btn ${viewMode === 'list' ? 'finder-view-btn--active' : ''}`}
                    aria-label="Vista lista"
                >
                    <List size={15} />
                </button>
            </div>

            {/* Buscador */}
            <div className="finder-search">
                <Search size={12} className="finder-search-icon" />
                <input
                    type="text"
                    placeholder="Buscar"
                    className="finder-search-input"
                    aria-label="Buscar archivos"
                />
            </div>
        </div>
    </div>
);

export default FinderToolbar;
