/**
 * dockItems.js
 * Datos estáticos de los ítems del Dock.
 * Se usa import.meta.env.BASE_URL para que las rutas funcionen
 * tanto en local (/) como en GitHub Pages (/Portafolio-MacOS/).
 */

const base = import.meta.env.BASE_URL;

export const dockItems = [
    {
        id: 'finder',
        name: 'Archivos',
        icon: `${base}img/icons/launchpad.png`,
    },
    {
        id: 'terminal',
        name: 'Terminal',
        icon: `${base}img/icons/terminal.png`,
    },
    {
        id: 'safari',
        name: 'Safari',
        icon: `${base}img/icons/safari.png`,
    },
    {
        id: 'github',
        name: 'Github',
        icon: `${base}img/icons/github.png`,
    },
    {
        id: 'mail',
        name: 'Correo',
        icon: `${base}img/icons/mail.png`,
    },
    {
        id: 'about',
        name: 'Acerca de mí',
        icon: `${base}img/icons/vscode.png`,
    },
];
