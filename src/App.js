import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import MaterialListing from './MaterialListing';
import MaterialCreate from './MaterialCreate';
import MaterialDetail from './MaterialDetail';
import MaterialEdit from './MaterialEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MaterialListing />}></Route>
          <Route path='/material/create' element={<MaterialCreate />}></Route>
          <Route path='/material/detail/:id' element={<MaterialDetail />}></Route>
          <Route path='/material/edit/:id' element={<MaterialEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
