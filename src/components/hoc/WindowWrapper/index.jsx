/**
 * WindowWrapper.jsx — HOC de ventana macOS
 *
 * Higher-Order Component que envuelve cualquier app del portafolio
 * con el chrome de ventana macOS (titlebar, traffic lights, drag).
 *
 * Props:
 *   id       {string}    — Identificador único de la ventana en WindowContext
 *   title    {string}    — Título que aparece en el titlebar
 *   icon     {string}    — Emoji/ícono junto al título (default: '🗂')
 *   width    {number}    — Ancho en px (default: 740)
 *   height   {number}    — Alto en px (default: 480)
 *   children {ReactNode} — Contenido de la ventana
 *
 * Uso:
 *   <WindowWrapper id="terminal" title="Terminal" icon="💻">
 *     <TerminalContent />
 *   </WindowWrapper>
 */
import { useContext, useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { WindowContext } from '../../../context/WindowContext';
import WindowTitleBar from '../../common/window/WindowTitleBar';
import './WindowWrapper.css';

const WindowWrapper = ({ id, title, icon, children, width = 740, height = 480 }) => {
    const { openApps, minimizedApps, closeApp, minimizeApp } = useContext(WindowContext);
    const nodeRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // No renderiza nada si la app no está abierta en el contexto
    if (!openApps[id]) return null;

    const isMinimized = minimizedApps[id];

    // MODO IOS (Móvil)
    if (isMobile) {
        return (
            <div className="fixed inset-0 z-[9999] bg-white flex flex-col w-screen h-screen">
                {/* iOS Header */}
                <div className="flex items-center justify-between px-4 pt-12 pb-3 bg-[#f8f8f8] border-b border-gray-300 shadow-sm backdrop-blur-md">
                    <button onClick={() => closeApp(id)} className="text-[#007aff] text-lg flex items-center bg-transparent border-none outline-none cursor-pointer p-0 font-medium">
                        <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        Inicio
                    </button>
                    <span className="font-semibold text-gray-900 text-lg">{title}</span>
                    <div className="w-20"></div> {/* Espaciador para centrar el título */}
                </div>
                {/* Contenido de la App */}
                <div className="flex-1 overflow-auto bg-white relative">
                    {children}
                </div>
            </div>
        );
    }

    // MODO MACOS (Desktop)
    const expandedStyle = {
        width: '100vw',
        height: 'calc(100vh - 24px - 80px)', // navbar + dock aprox
        top: '24px', // navbar
        left: '0px',
        transform: 'translate(0px, 0px)'
    };

    const regularStyle = {
        width,
        height
    };

    return (
        <Draggable
            handle=".window-titlebar"
            nodeRef={nodeRef}
            bounds="parent"
            disabled={isExpanded} // deshabilitar drag si está fullscreen
            defaultPosition={{
                x: Math.round((window.innerWidth  - width)  / 2),
                y: Math.round((window.innerHeight - height) / 2),
            }}
        >
            <div
                ref={nodeRef}
                className={`window-frame ${isExpanded ? 'expanded' : ''}`}
                style={{
                    ...(isExpanded ? expandedStyle : regularStyle),
                    display: isMinimized ? 'none' : 'flex'
                }}
            >
                <WindowTitleBar
                    title={title}
                    icon={icon}
                    onClose={() => closeApp(id)}
                    onMinimize={() => minimizeApp(id)}
                    onExpand={() => setIsExpanded(!isExpanded)}
                />

                <div className="window-body">
                    {children}
                </div>
            </div>
        </Draggable>
    );
};

export default WindowWrapper;