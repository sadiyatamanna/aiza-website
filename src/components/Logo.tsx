import { Link } from 'react-router-dom'
import { siteConfig } from '../config'

/** The supplied AIZA mark is used by default and can be replaced through siteConfig.logoUrl. */
export function Logo() {
  return <Link to="/" className="brand" aria-label="AIZA home"><img className="brand-image" src={siteConfig.logoUrl} alt="" aria-hidden="true"/><span className="brand-wordmark">AIZA</span></Link>
}
