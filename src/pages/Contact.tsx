import { ArrowUpRight, Headphones, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { siteConfig } from '../config'

const contactItems = [
  { title:'General Enquiries', Icon:Mail, value:siteConfig.supportEmail },
  { title:'Technical Support', Icon:Headphones, value:siteConfig.supportEmail },
  { title:'Privacy Questions', Icon:ShieldCheck, value:siteConfig.privacyContact },
  { title:'Security-Related Disclosures', Icon:LockKeyhole, value:siteConfig.securityContact },
]

export function Contact() {
  return <main className="page-main"><section className="page-hero content-width"><span className="eyebrow">CONTACT & SUPPORT</span><h1>Get in touch<br/><em>with AIZA.</em></h1><p>Choose the appropriate channel for general enquiries, support, privacy questions, or security disclosures.</p></section><section className="page-content content-width"><div className="contact-grid">{contactItems.map(({title,Icon,value})=><article className="contact-card" key={title}><span className="detail-icon"><Icon size={19}/></span><h2>{title}</h2>{value ? <a href={`mailto:${value}`}>{value} <ArrowUpRight size={14}/></a> : <p>Official support details will be published here.</p>}</article>)}</div><p className="contact-note">Do not include passwords, private keys, precise location, or personal emergency records in general enquiries.</p></section></main>
}
