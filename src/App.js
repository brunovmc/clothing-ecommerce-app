import { Routes, Route, Outlet } from  'react-router-dom'

import Home from  './routes/home/home.component'

const NavBar = () => {
  return (
    <div>
      <div>
        <h1>Brand</h1>
      </div>
      <Outlet />
    </div>
  );
}

const Shop = () => {
  return (
    <h1>Shop Page!</h1>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
