/**
 * TrafficLights.jsx — Botones de control de ventana macOS
 *
 * Los tres botones (rojo, amarillo, verde) que aparecen en el
 * titlebar de CUALQUIER ventana del sistema.
 * Los íconos (×, −, ▲▲) se revelan al hacer hover sobre el titlebar
 * mediante la clase `.window-titlebar:hover .traffic-icon` en CSS.
 *
 * Props:
 *   onClose    {function} — Callback al presionar el botón rojo
 *   onMinimize {function} — Callback al presionar el botón amarillo (opcional)
 *   onExpand   {function} — Callback al presionar el botón verde (opcional)
 */

const TrafficLights = ({ onClose, onMinimize, onExpand }) => (
    <div className="traffic-lights">

        {/* 🔴 Cerrar */}
        <button
            className="traffic-btn traffic-red"
            onClick={onClose}
            aria-label="Cerrar ventana"
        >
            <svg className="traffic-icon" viewBox="0 0 10 10" fill="none">
                <line x1="2.5" y1="2.5" x2="7.5" y2="7.5"
                      stroke="rgba(90,0,0,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
                <line x1="7.5" y1="2.5" x2="2.5" y2="7.5"
                      stroke="rgba(90,0,0,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
        </button>

        {/* 🟡 Minimizar */}
        <button
            className="traffic-btn traffic-yellow"
            onClick={onMinimize}
            aria-label="Minimizar ventana"
        >
            <svg className="traffic-icon" viewBox="0 0 10 10" fill="none">
                <line x1="2" y1="5" x2="8" y2="5"
                      stroke="rgba(80,50,0,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
        </button>

        {/* 🟢 Pantalla completa */}
        <button
            className="traffic-btn traffic-green"
            onClick={onExpand}
            aria-label="Pantalla completa"
        >
            <svg className="traffic-icon" viewBox="0 0 10 10" fill="none">
                {/* Flechas diagonales de expand — igual que macOS real */}
                <path d="M2 2 L4.5 2 L2 4.5 Z" fill="rgba(0,60,0,0.7)"/>
                <path d="M8 8 L5.5 8 L8 5.5 Z" fill="rgba(0,60,0,0.7)"/>
            </svg>
        </button>

    </div>
);

export default TrafficLights;
