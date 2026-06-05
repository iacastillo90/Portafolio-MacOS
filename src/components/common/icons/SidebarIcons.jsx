/**
 * SidebarIcons.jsx — Íconos del sidebar estilo macOS
 * Reutilizables en cualquier panel lateral del portafolio.
 *
 * Todos usan `currentColor` para heredar el color del padre,
 * lo que permite cambiarlos al azul activo (#3478f6) o blanco
 * simplemente con CSS en el elemento contenedor.
 *
 * Exports:
 *   RecentIcon       — Reloj (Recientes)
 *   DesktopIcon      — Monitor (Escritorio)
 *   FolderSideIcon   — Carpeta outline (Proyectos)
 *   DownloadSideIcon — Flecha descarga (Descargas)
 *   GitHubIcon       — Octocat (GitHub)
 *   AirDropIcon      — AirDrop
 *   AppIcon          — Cuadrícula (Aplicaciones)
 */

export const RecentIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M8 4.5 L8 8 L10.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const DesktopIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1.5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6 13.5 L10 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M8 11.5 L8 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
);

export const FolderSideIcon = () => (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 3.5 C1 2.95 1.45 2.5 2 2.5 L5.8 2.5 C6.15 2.5 6.45 2.7 6.6 3 L7.2 4 L14 4 C14.55 4 15 4.45 15 5 L15 12 C15 12.55 14.55 13 14 13 L2 13 C1.45 13 1 12.55 1 12 Z"
            stroke="currentColor" strokeWidth="1.2" fill="none"
        />
    </svg>
);

export const DownloadSideIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2 L8 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M4.5 7 L8 10.5 L11.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 13 L14 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
);

// Octocat simplificado — compatible con lucide-react que no lo incluye
export const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
               0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
               -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
               .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
               -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
               .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
               .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
               0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8
               c0-4.42-3.58-8-8-8z"/>
    </svg>
);

export const AirDropIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10 L5 13 L11 13 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M5.5 9 A3.5 3.5 0 1 1 10.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M3 7 A5 5 0 1 1 13 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
    </svg>
);

export const AppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="9.5" y="1" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="1" y="9.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
);
