/**
 * FileIcons.jsx — Íconos de archivos estilo macOS
 * Reutilizables en cualquier ventana / app del portafolio.
 *
 * Exports:
 *   FolderIcon       — Carpeta azul con gradiente
 *   PdfIcon          — Documento PDF rojo
 *   ImageFileIcon    — Archivo de imagen con paisaje
 *   getFileIcon(type) — Helper que retorna el ícono según el tipo
 */

// ── Carpeta azul macOS (gradiente) ──────────────────────────────
export const FolderIcon = () => (
    <svg width="52" height="44" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fi-folder-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#67b8f7"/>
                <stop offset="100%" stopColor="#1a8cef"/>
            </linearGradient>
            <linearGradient id="fi-folder-tab" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#89ccff"/>
                <stop offset="100%" stopColor="#4db0f5"/>
            </linearGradient>
        </defs>
        <path d="M2 10 C2 8.9 2.9 8 4 8 L18 8 C19 8 19.8 8.5 20.2 9.3 L22 12 L48 12 C49.1 12 50 12.9 50 14 L50 40 C50 41.1 49.1 42 48 42 L4 42 C2.9 42 2 41.1 2 40 Z"
              fill="url(#fi-folder-body)"/>
        <path d="M2 14 L50 14 L50 40 C50 41.1 49.1 42 48 42 L4 42 C2.9 42 2 41.1 2 40 Z"
              fill="url(#fi-folder-body)" opacity="0.95"/>
        <path d="M2 10 C2 8.9 2.9 8 4 8 L19 8 L22 12 L2 12 Z"
              fill="url(#fi-folder-tab)"/>
        <path d="M4 14 L48 14 L48 16 Q26 18 4 16 Z"
              fill="white" opacity="0.18"/>
    </svg>
);

// ── PDF rojo macOS ───────────────────────────────────────────────
export const PdfIcon = () => (
    <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fi-pdf-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b6b"/>
                <stop offset="100%" stopColor="#d63031"/>
            </linearGradient>
        </defs>
        <rect x="2" y="2" width="40" height="48" rx="4" fill="white" stroke="#e0e0e0" strokeWidth="1"/>
        <path d="M30 2 L42 14 L30 14 Z" fill="#ffd3d3"/>
        <path d="M30 2 L30 14 L42 14" fill="none" stroke="#e0e0e0" strokeWidth="1"/>
        <rect x="2" y="30" width="40" height="14" fill="url(#fi-pdf-bg)"/>
        <rect x="2" y="42" width="40" height="8" rx="4" fill="url(#fi-pdf-bg)"/>
        <text x="22" y="40" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui">PDF</text>
        <line x1="8" y1="20" x2="36" y2="20" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="24" x2="28" y2="24" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// ── Archivo de imagen macOS ──────────────────────────────────────
export const ImageFileIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="44" height="44" rx="4" fill="white" stroke="#e0e0e0" strokeWidth="1"/>
        <rect x="3" y="3" width="42" height="28" rx="3" fill="#b3d9ff"/>
        <circle cx="36" cy="14" r="6" fill="#FFD700" opacity="0.9"/>
        <path d="M3 31 L18 16 L30 28 L38 20 L45 31 Z" fill="#4CAF50" opacity="0.85"/>
        <path d="M3 38 L45 38 L45 45 L3 45 Z" fill="#8BC34A" opacity="0.7"/>
    </svg>
);

// ── Helper: retorna el ícono según el tipo de archivo ────────────
export const getFileIcon = (type) => {
    if (type === 'pdf')   return <PdfIcon />;
    if (type === 'image') return <ImageFileIcon />;
    return <FolderIcon />;
};
