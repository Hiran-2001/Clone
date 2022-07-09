import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NoOrder from './components/NoOrder'
import Wallet from './components/Wallet'
import Help from './components/Help'
import Promotion from './components/Promotion'
import Invite from './components/Invite'


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<NoOrder />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="help" element={<Help />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="invite" element={<Invite />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    </div>
  )
}

export default App
