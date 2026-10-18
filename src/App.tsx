import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { HowItWorks } from './pages/HowItWorks'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { SafetyFeatures } from './pages/SafetyFeatures'
import { Security } from './pages/Security'
import { Terms } from './pages/Terms'

function PageEffects() {
  const location = useLocation()
  useEffect(() => {
    const title = ({ '/': 'Women’s Safety & PQC Research', '/about': 'About AIZA', '/features': 'Safety Features', '/security': 'PQC & Security', '/how-it-works': 'How It Works', '/privacy': 'Privacy Policy', '/terms': 'Terms of Use', '/contact': 'Contact & Support' } as Record<string, string>)[location.pathname] ?? 'AIZA'
    document.title = `${title} | AIZA`
    if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView())
    else window.scrollTo(0, 0)
  }, [location.pathname, location.hash])
  return null
}

export default function App() {
  return <><PageEffects/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/features" element={<SafetyFeatures/>}/><Route path="/security" element={<Security/>}/><Route path="/how-it-works" element={<HowItWorks/>}/><Route path="/privacy" element={<PrivacyPolicy/>}/><Route path="/terms" element={<Terms/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></>
}
