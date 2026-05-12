import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HubPage from './pages/HubPage'
import LunaPage from './pages/LunaPage'
import SolPage from './pages/SolPage'
import AuraPage from './pages/AuraPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HubPage />} />
        <Route path="/fine-dining" element={<LunaPage />} />
        <Route path="/villa-chef" element={<SolPage />} />
        <Route path="/events" element={<AuraPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
