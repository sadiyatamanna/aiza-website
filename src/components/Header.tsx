import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { DownloadButton } from './DownloadButton'

const items = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'PQC & Security', to: '/security' },
  { label: 'Privacy & Terms of Use', to: '/privacy' },
  { label: 'Contact & Support', to: '/contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  return <header className="site-header"><div className="nav-wrap"><Logo/><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(value => !value)}>{open ? <X/> : <Menu/>}</button><nav id="site-navigation" className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">{items.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>{item.label}</NavLink>)}<Link className="mobile-nav-download" to="/#download" onClick={() => setOpen(false)}>Download AIZA for Android</Link></nav><DownloadButton className="nav-download"/></div></header>
}
