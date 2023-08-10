import { Route, Routes } from 'react-router-dom';

import Auth from './Auth';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
