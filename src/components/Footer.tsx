import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { siteConfig } from '../config'

export function Footer() {
  return <footer className="footer"><div className="footer-inner"><div className="footer-brand-block"><Logo/><p>Women’s safety and emergency communication, with a focus on post-quantum cryptographic research.</p></div><nav className="footer-nav" aria-label="Footer navigation"><Link to="/about">About AIZA</Link><Link to="/features">Safety Features</Link><Link to="/security">PQC &amp; Security</Link><Link to="/how-it-works">How It Works</Link><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/contact">Contact &amp; Support</Link></nav><div className="footer-release"><span className="status-pip"/>Mobile App — {siteConfig.releaseStatus}<span className="footer-contact-links"><a href={`tel:${siteConfig.contactPhone.replace(/\s/g, '')}`}>{siteConfig.contactPhone}</a><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></span></div><div className="footer-bottom"><span>© {siteConfig.copyrightYear} AIZA</span><span>For immediate danger, contact official emergency services.</span></div></div></footer>
}
