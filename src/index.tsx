import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'

import { AppWrapper } from './components/styles/AppStyles'
import PageTitle from './components/PageTitle'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SearchPage from './pages/SearchPage'
import GamePage from './pages/GamePage'

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <PageTitle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AppWrapper>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
