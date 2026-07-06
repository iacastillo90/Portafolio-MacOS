/**
 * DockItem.jsx
 * Componente atómico: representa un único ítem del Dock.
 * Recibe los datos del ítem y si está activo; notifica el click al padre.
 */
import './DockItem.css';

const DockItem = ({ id, name, icon, isOpen, onClick }) => {
    return (
        <div className="dock-item">

            {/* Tooltip con el nombre de la app */}
            <span className="dock-item__tooltip">{name}</span>

            {/* Botón con el ícono */}
            <button
                className="dock-item__btn"
                onClick={() => onClick(id)}
                aria-label={`Abrir ${name}`}
            >
                <img
                    src={icon}
                    alt={name}
                    className="dock-item__icon"
                    draggable={false}
                />
            </button>

            {/* Punto indicador de app abierta */}
            <div className="dock-item__indicator">
                <div className={`dock-item__dot ${isOpen ? 'dock-item__dot--active' : ''}`} />
            </div>

        </div>
    );
};

export default DockItem;
