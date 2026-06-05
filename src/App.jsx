import Navbar from './components/layout/Navbar';
import Finder from './components/apps/Finder';
import { WindowProvider } from './context/WindowContext';

function App() {
  return (
    <WindowProvider>
      <div className="w-screen h-screen overflow-hidden relative">
        
        <Navbar />
      
        <Finder />
        
      </div>
    </WindowProvider>
  );
}

export default App;