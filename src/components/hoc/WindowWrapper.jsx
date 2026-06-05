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
import { useContext, useRef } from 'react';
import Draggable from 'react-draggable';
import { WindowContext } from '../../context/WindowContext';
import WindowTitleBar from '../common/window/WindowTitleBar';
import '../common/window/window.css';

const WindowWrapper = ({ id, title, icon, children, width = 740, height = 480 }) => {
    const { openApps, closeApp } = useContext(WindowContext);
    const nodeRef = useRef(null);

    // No renderiza nada si la app no está abierta en el contexto
    if (!openApps[id]) return null;

    return (
        <Draggable
            handle=".window-titlebar"
            nodeRef={nodeRef}
            bounds="parent"
            defaultPosition={{
                x: Math.round((window.innerWidth  - width)  / 2),
                y: Math.round((window.innerHeight - height) / 2),
            }}
        >
            <div
                ref={nodeRef}
                className="window-frame"
                style={{ width, height }}
            >
                <WindowTitleBar
                    title={title}
                    icon={icon}
                    onClose={() => closeApp(id)}
                />

                <div className="window-body">
                    {children}
                </div>
            </div>
        </Draggable>
    );
};

export default WindowWrapper;