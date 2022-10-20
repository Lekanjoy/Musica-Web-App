import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Layout from "./components/Layout";
import Collections from "./components/pages/Collections";
import Tunes from './components/pages/Tunes';


function App() {

return (
  <>
    <Routes>

      <Route path="/">

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="tunes" element={<Tunes />} />
        </Route>
        
      </Route>

    </Routes>
  </>
);

}

export default App
