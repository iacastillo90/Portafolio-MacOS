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
import { getFileIcon } from '../../../common/icons/FileIcons';

/* ── Vista Cuadrícula ── */
const GridView = ({ items }) => (
    <div className="finder-grid">
        {items.map((item) => (
            <div key={item.id} className="finder-file-item">
                {getFileIcon(item.type)}
                <span className="finder-file-name">{item.name}</span>
            </div>
        ))}
    </div>
);

/* ── Vista Lista ── */
const ListView = ({ items }) => (
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
                <tr key={item.id} className="finder-list-row">
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
const FinderContent = ({ items, viewMode }) => (
    <div className="finder-content">
        {viewMode === 'grid'
            ? <GridView items={items} />
            : <ListView items={items} />
        }
    </div>
);

export default FinderContent;
