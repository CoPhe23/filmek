import { Route, Routes } from 'react-router'
import './App.css'
import { Movies } from './pages/Movies'
import { TVSeries } from './pages/TVSeries'
import { Searchpage } from './pages/Searchpage'
import { MyLayout } from './components/MyLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <Routes>
      <Route path='/' element={<MyLayout/>}>
        <Route path='/' element={<Movies />} />
        <Route path='/tvseries' element={<TVSeries />} />
        <Route path='/search' element={<Searchpage />} />
      </Route>
    </Routes>
  )
}
export default App
