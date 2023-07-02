import Auth from './pages/Auth';
import Weather from './pages/Weather'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/weather' element={<Weather />}/>
    </Routes>
  )
}

export default App;
