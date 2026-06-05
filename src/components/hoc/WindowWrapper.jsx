import { useContext, useRef } from 'react';
import Draggable from 'react-draggable';
import { WindowContext } from '../../context/WindowContext';
import './WindowWrapper.css';

const WindowWrapper = ({ id, title, children }) => {
    const { openApps, closeApp } = useContext(WindowContext);
    const nodeRef = useRef(null);

    if (!openApps[id]) return null;

    return (
        <Draggable handle=".window-header" nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                className="window-container absolute top-20 left-20 w-[600px] h-[400px] bg-white/90 backdrop-blur-md rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
            >
                {/* Barra de título */}
                <div className="window-header group flex items-center px-4 py-3 bg-gray-100/80 border-b border-gray-200 cursor-move select-none">

                    {/* Botones de control macOS */}
                    <div className="traffic-lights flex gap-2 w-16 items-center">

                        {/* Rojo — Cerrar */}
                        <button
                            onClick={() => closeApp(id)}
                            className="traffic-btn traffic-red"
                            title="Cerrar"
                            aria-label="Cerrar ventana"
                        >
                            {/* Ícono × — solo visible en hover del grupo */}
                            <svg
                                className="traffic-icon"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="2.5" y1="2.5" x2="7.5" y2="7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                <line x1="7.5" y1="2.5" x2="2.5" y2="7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>

                        {/* Amarillo — Minimizar */}
                        <button
                            className="traffic-btn traffic-yellow"
                            title="Minimizar"
                            aria-label="Minimizar ventana"
                        >
                            {/* Ícono — guión horizontal */}
                            <svg
                                className="traffic-icon"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="2.5" y1="5" x2="7.5" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>

                        {/* Verde — Maximizar */}
                        <button
                            className="traffic-btn traffic-green"
                            title="Pantalla completa"
                            aria-label="Pantalla completa"
                        >
                            {/* Ícono + */}
                            <svg
                                className="traffic-icon"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="5" y1="2.5" x2="5" y2="7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                <line x1="2.5" y1="5" x2="7.5" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Título centrado */}
                    <p className="flex-1 text-center text-sm font-semibold text-gray-600 select-none">
                        {title}
                    </p>

                    {/* Espacio compensador para centrar el título */}
                    <div className="w-16" />
                </div>

                {/* Contenido */}
                <div className="flex-1 p-4 overflow-y-auto">
                    {children}
                </div>
            </div>
        </Draggable>
    );
};

export default WindowWrapper;