import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import BookShelf from './components/BookShelf'
import BookDetail from './components/BookDetail'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<BookShelf />} />
          <Route path='/book/:id' exact element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
