import { useState, useEffect, useContext } from "react";
import { WindowContext } from "../../../context/WindowContext";
import { Wifi, Search, BatteryFull, SlidersHorizontal, CircleUser } from "lucide-react";
import './Navbar.css'

const ControlCenterIcon = ({ size }) => {
    return (
        <svg
            viewBox="0 0 29 29"
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z" />
        </svg>
    );
};

function Navbar() {
    const [time, setTime] = useState(new Date());
    const base = import.meta.env.BASE_URL;

    useEffect(() => {
        // Corregido: la función setInterval no toma el tiempo dentro del Date
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('es-ES', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const { openApp } = useContext(WindowContext);

    return (
        <nav className="navbar">
            <div className="navbar-section">
                <span className="navbar-item navbar-icon">
                    <img
                        src={`${base}logo/favicon.ico`}
                        alt="Logo"
                        className="navbar-logo"
                        draggable="false"
                    />
                </span>
                <span className="navbar-item navbar-brand">Portafolio</span>
                <span
                    onClick={() => openApp('finder')}
                    className="navbar-item hidden sm:block cursor-pointer"
                >
                    Archivo
                </span>
                <span className="navbar-item sm:block">Edición</span>
                <span className="navbar-item sm:block">Visualización</span>
            </div>
            <div className="navbar-section">
                <span className="navbar-item navbar-icon" title="Búsqueda"><Search size={16} strokeWidth={2.5} /></span>
                <span className="navbar-item navbar-icon" title="Wi-Fi"><Wifi size={16} strokeWidth={2.5} /></span>
                <span className="navbar-item navbar-icon" title="Batería"><BatteryFull size={18} strokeWidth={2} /></span>
                <span className="navbar-item navbar-icon" title="Mi Perfil"><CircleUser size={16} strokeWidth={2.5} /></span>
                <span className="navbar-item navbar-icon" title="Centro de Control">
                    <ControlCenterIcon size={16} />
                </span>
                <span className="navbar-item">{formatTime(time)}</span>
            </div>
        </nav>
    )
}

export default Navbar;