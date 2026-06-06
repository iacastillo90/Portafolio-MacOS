import Navbar from './components/layout/Navbar/Navbar';
import Finder from './components/apps/Finder/Finder';
import { WindowProvider } from './context/WindowContext';
import Dock from './components/layout/Footer/Dock';

function App() {
  return (
    <WindowProvider>
      <div className="w-screen h-screen overflow-hidden relative">
        
        <Navbar />
      
        <Finder />

        <Dock />
        
      </div>
    </WindowProvider>
  );
}

export default App;