/**
 * WindowTitleBar.jsx — Barra de título macOS
 *
 * Compone: TrafficLights + título centrado + spacer compensador.
 * Reutilizable en cualquier ventana del portafolio.
 *
 * Props:
 *   title      {string}   — Texto del título (se muestra en el centro)
 *   icon       {string}   — Emoji o carácter del ícono antes del título
 *   onClose    {function} — Se pasa a TrafficLights
 *   onMinimize {function} — Se pasa a TrafficLights (opcional)
 *   onExpand   {function} — Se pasa a TrafficLights (opcional)
 */
import TrafficLights from './TrafficLights';

const WindowTitleBar = ({ title, icon = '🗂', onClose, onMinimize, onExpand }) => (
    <div className="window-titlebar">

        <TrafficLights
            onClose={onClose}
            onMinimize={onMinimize}
            onExpand={onExpand}
        />

        <div className="window-title">
            <span className="window-title-icon">{icon}</span>
            <span>{title}</span>
        </div>

        {/* Spacer que balancea el ancho de los traffic lights (56px) */}
        <div className="window-title-spacer" />

    </div>
);

export default WindowTitleBar;
