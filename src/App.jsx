import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home'
import Collections from "./components/pages/Collections";


function App() {


  return (
    <div className="App font-QuickSand bg-bgDarkPrimary w-full h-screen p-6">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my collections" element={<Collections />} />
      </Routes>
    </div>
  );
}

export default App
