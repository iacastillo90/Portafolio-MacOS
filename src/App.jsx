import Navbar from './components/layout/Navbar/index';
import Finder from './components/apps/Finder/Finder';
import Terminal from './components/apps/Terminal/Terminal';
import Preview from './components/apps/Preview/Preview';
import Safari from './components/apps/Safari/Safari';
import { WindowProvider } from './context/WindowContext';
import Footer from './components/layout/Footer/index';
import MobileHomeScreen from './components/layout/MobileHomeScreen/index';

function App() {
  return (
    <WindowProvider>
      <div className="w-screen h-screen overflow-hidden relative">
        
        <Navbar />
        <MobileHomeScreen />
      
        <Finder />
        <Terminal />
        <Preview />
        <Safari />

        <Footer />
        
      </div>
    </WindowProvider>
  );
}

export default App;