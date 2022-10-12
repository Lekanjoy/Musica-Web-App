import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Collections from "./components/pages/Collections";
import Layout from './components/Layout';


function App() {

return (
  <>
    <Routes>
      <Route path="/">
        <Route element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="my collections" element={<Collections />} />
        </Route>
      </Route>
    </Routes>
  </>
);

}

export default App
