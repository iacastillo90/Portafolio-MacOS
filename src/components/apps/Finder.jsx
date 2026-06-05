import { Folder } from 'lucide-react';
import WindowWrapper from '../hoc/WindowWrapper';

const Finder = () => {

  const projects = [
    { id: 1, name: 'E-commerce React' },
    { id: 2, name: 'API Spring Boot' },
    { id: 3, name: 'App Vue.js' },
    { id: 4, name: 'Petcare Platform' }
  ];

  const handleOpenProject = (name) => {
    alert(`Abriendo el proyecto: ${name} (Pronto haremos que abra otra ventana)`);
  };

  return (
    <WindowWrapper id="finder" title="Archivos - Proyectos">
      <div className="grid grid-cols-4 gap-6 p-2">
        {projects.map((project) => (
          <div 
            key={project.id}
            onDoubleClick={() => handleOpenProject(project.name)}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-blue-100/50 cursor-pointer transition-colors group"
          >
            <Folder 
              size={50} 
              className="text-blue-400 group-hover:text-blue-500 fill-blue-100 transition-colors" 
              strokeWidth={1}
            />
            <span className="text-xs text-center font-medium text-gray-700 select-none">
              {project.name}
            </span>
          </div>
        ))}
      </div>
    </WindowWrapper>
  );
};

export default Finder;