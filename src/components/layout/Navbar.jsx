import { useState, useEffect } from "react";
import { Wifi, Search, BatteryFull, SlidersHorizontal, CircleUser } from "lucide-react";
import './Navbar.css'

function Navbar() {

    const [time, setTime] = useState(new Date());

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

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(), 1000));
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

    return (
        <nav className="navbar">
            <div className="navbar-section">
                <span className="navbar-item navbar-icon">
                    <img
                        src="../../public/logo/favicon.ico"
                        alt="Logo"
                        className="navbar-logo"
                        draggable="false"
                    />
                </span>
                <span className="navbar-item navbar-brand">Portafolio</span>
                <span className="navbar-item sm:block">Archivo</span>
                <span className="navbar-item sm:block">Edicion</span>
                <span className="navbar-item sm:block">Visualizacion</span>
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