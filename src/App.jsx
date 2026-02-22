import React from 'react'
import Login from './pages/Login'
import Navbar from './components/navbar'
import Footer from './components/footer'
import "./styles/layout.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Login />
      </main>

      <Footer />
    </div>
  )
}

export default App