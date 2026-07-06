/**
 * FinderContent.jsx — Área de contenido del Finder (Grid y Lista)
 *
 * Props:
 *   items    {Array}  — Lista de archivos/carpetas a mostrar
 *   viewMode {string} — 'grid' | 'list'
 *
 * Cada item tiene: { id, name, type, date }
 * type: 'folder' | 'pdf' | 'image'
 */
import { getFileIcon } from '../../../../common/icons/FileIcons';
import { useContext } from 'react';
import { WindowContext } from '../../../../../context/WindowContext';
import './FinderContent.css';

/* ── Vista Cuadrícula ── */
const GridView = ({ items, onDoubleClick }) => (
    <div className="finder-grid">
        {items.map((item) => (
            <div 
                key={item.id} 
                className="finder-file-item cursor-pointer hover:bg-blue-100/20 rounded-md"
                onDoubleClick={() => onDoubleClick(item)}
            >
                {getFileIcon(item.type)}
                <span className="finder-file-name">{item.name}</span>
            </div>
        ))}
    </div>
);

/* ── Vista Lista ── */
const ListView = ({ items, onDoubleClick }) => (
    <table className="finder-list">
        <thead>
            <tr className="finder-list-header">
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Tipo</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
                <tr 
                    key={item.id} 
                    className="finder-list-row cursor-pointer hover:bg-blue-100/20"
                    onDoubleClick={() => onDoubleClick(item)}
                >
                    <td className="finder-list-name">
                        <span className="finder-list-icon">
                            {getFileIcon(item.type)}
                        </span>
                        {item.name}
                    </td>
                    <td>{item.date}</td>
                    <td style={{ textTransform: 'capitalize' }}>{item.type}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

/* ── Componente principal ── */
const FinderContent = ({ items, viewMode }) => {
    const { openApp } = useContext(WindowContext);

    const handleDoubleClick = (item) => {
        if (item.type === 'pdf') {
            openApp('preview');
        } else if (item.type === 'folder' && item.name === 'Terminal') {
            openApp('terminal');
        }
    };

    return (
        <div className="finder-content">
            {viewMode === 'grid'
                ? <GridView items={items} onDoubleClick={handleDoubleClick} />
                : <ListView items={items} onDoubleClick={handleDoubleClick} />
            }
        </div>
    );
};

export default FinderContent;
