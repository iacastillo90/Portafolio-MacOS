/**
 * FinderStatusBar.jsx — Barra de estado inferior del Finder
 *
 * Props:
 *   count     {number} — Cantidad de elementos visibles
 *   available {string} — Espacio disponible (ej: "142 GB")
 */
const FinderStatusBar = ({ count, available = '142 GB' }) => (
    <div className="finder-statusbar">
        {count} {count === 1 ? 'elemento' : 'elementos'}
        &nbsp;·&nbsp;
        {available} disponibles
    </div>
);

export default FinderStatusBar;
