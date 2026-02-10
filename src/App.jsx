import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage' // Add this import
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage' // Add this import
import TermsPage from './pages/TermsPage' // Add this import
import NotFoundPage from './pages/NotFoundPage'
import TestPage from './pages/TestPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} /> {/* Add this route */}
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} /> {/* Add this route */}
        <Route path="terms" element={<TermsPage />} /> {/* Add this route */}
        <Route path="test" element={<TestPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App