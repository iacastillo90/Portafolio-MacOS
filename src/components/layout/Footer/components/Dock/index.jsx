/**
 * Dock.jsx
 * Componente orquestador del Dock de macOS.
 * Solo gestiona el contexto y renderiza la lista de DockItems.
 */

import { useContext, useEffect, useState } from 'react';
import { WindowContext } from '../../../../../context/WindowContext';
import DockItem from '../DockItem/index';
import { dockItems } from '../../dockItems';
import './Dock.css';

const Dock = () => {
    const { openApps, openApp } = useContext(WindowContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayedItems = isMobile 
        ? dockItems.filter(item => ['safari', 'terminal', 'finder', 'mail'].includes(item.id))
        : dockItems;

    return (
        <div className="dock-wrapper">
            <div className="dock-bar">
                {displayedItems.map((item) => (
                    <DockItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        icon={item.icon}
                        isOpen={!!openApps[item.id]}
                        onClick={(id) => {
                            if (id === 'github') {
                                window.open('https://github.com/iacastillo90', '_blank');
                            } else {
                                openApp(id);
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dock;