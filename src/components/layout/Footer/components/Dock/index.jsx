/**
 * Dock.jsx
 * Componente orquestador del Dock de macOS.
 * Solo gestiona el contexto y renderiza la lista de DockItems.
 */

import { useContext } from 'react';
import { WindowContext } from '../../../../../context/WindowContext';
import DockItem from '../DockItem/index';
import { dockItems } from '../../dockItems';
import './Dock.css';

const Dock = () => {
    const { openApps, openApp } = useContext(WindowContext);

    return (
        <div className="dock-wrapper">
            <div className="dock-bar">
                {dockItems.map((item) => (
                    <DockItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        icon={item.icon}
                        isOpen={!!openApps[item.id]}
                        onClick={openApp}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dock;