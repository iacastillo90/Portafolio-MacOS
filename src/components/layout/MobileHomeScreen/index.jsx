import { useContext } from 'react';
import { WindowContext } from '../../../context/WindowContext';
import { dockItems } from '../Footer/dockItems';

const MobileHomeScreen = () => {
    const { openApp } = useContext(WindowContext);

    // Filter out items that we want to keep exclusively in the Dock on iOS
    // (e.g. Phone, Safari, Messages, Music)
    // For this portfolio: Safari, Terminal, Archivos, Correo will be in Dock.
    // The rest will be on the Home Screen.
    const homeScreenItems = dockItems.filter(item => !['safari', 'terminal', 'finder', 'mail'].includes(item.id));

    return (
        <div className="flex sm:hidden flex-wrap content-start pt-20 px-6 gap-6 h-full w-full absolute inset-0 z-10">
            {homeScreenItems.map(item => (
                <div 
                    key={item.id} 
                    className="flex flex-col items-center w-16 cursor-pointer"
                    onClick={() => {
                        if (item.id === 'github') window.open('https://github.com/iacastillo90', '_blank');
                        else openApp(item.id);
                    }}
                >
                    <img src={item.icon} alt={item.name} className="w-14 h-14 rounded-2xl shadow-sm mb-1 object-cover" />
                    <span className="text-white text-xs font-medium text-center shadow-black drop-shadow-md">{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default MobileHomeScreen;
