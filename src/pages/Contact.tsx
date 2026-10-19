import { ArrowUpRight, Github, Instagram, Mail, Phone } from 'lucide-react'
import { siteConfig } from '../config'

const contactItems = [
  { title:'Email', Icon:Mail, value:siteConfig.contactEmail, href:`mailto:${siteConfig.contactEmail}` },
  { title:'Phone', Icon:Phone, value:siteConfig.contactPhone, href:`tel:${siteConfig.contactPhone.replace(/\s/g, '')}` },
  { title:'Instagram', Icon:Instagram, value:`https://www.instagram.com/${siteConfig.instagramHandle}/`, href:siteConfig.instagramUrl, external:true },
  { title:'GitHub', Icon:Github, value:siteConfig.githubUrl, href:siteConfig.githubUrl, external:true },
]

export function Contact() {
  return <main className="page-main"><section className="page-hero content-width"><span className="eyebrow">CONTACT &amp; SUPPORT</span><h1>Get in touch<br/><em>with AIZA.</em></h1><p>Choose a contact method for general enquiries and support.</p></section><section className="page-content content-width"><div className="contact-grid">{contactItems.map(({title,Icon,value,href,external})=><article className="contact-card" key={title}><span className="detail-icon"><Icon size={19}/></span><h2>{title}</h2><a href={href} {...(external ? {target:'_blank',rel:'noopener noreferrer'} : {})} aria-label={`${title}: ${value}${external ? ' (opens in a new tab)' : ''}`}>{value} <ArrowUpRight size={14}/></a></article>)}</div><p className="contact-note">Do not include passwords, private keys, precise location, or personal emergency records in general enquiries.</p></section></main>
}
