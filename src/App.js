import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Events } from './pages/Events';
import { EventDetails } from './pages/EventDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Events/>}></Route>
        <Route path='/details/:eventId' element={<EventDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
