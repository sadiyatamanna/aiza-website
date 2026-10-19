import { siteConfig } from '../config'
import { Link } from 'react-router-dom'

const sections = [
  ['Acceptance of Terms', '[Describe how terms are presented and accepted before use.]'],
  ['Purpose of the Application', 'AIZA is a women’s safety and emergency-communication application project. Features and availability depend on the current release.'],
  ['Emergency-Feature Limitations', 'AIZA is not a replacement for official emergency services. Do not rely on the application as the sole means of obtaining emergency assistance.'],
  ['Device Permissions and Connectivity', 'Some functions may require device permissions, compatible device capabilities, network access, or configured services. Availability may vary.'],
  ['User Responsibilities', '[Describe reasonable account, device, and contact-configuration responsibilities after review.]'],
  ['Availability and Reliability', 'No guarantee is made that the application will be continuously available or that alerts will be delivered successfully.'],
  ['Security Limitations', 'No system can guarantee absolute security. Cryptographic research objectives are not a representation of verified production protections.'],
  ['Intellectual Property', '[Add verified ownership and permitted-use terms.]'],
  ['Changes to the Application', '[Describe how app changes and feature availability will be communicated.]'],
  ['Updates to the Terms', '[Describe notice of terms changes, approval date, and applicable process after legal review.]'],
  ['Contact Information', siteConfig.contactEmail],
]

export function Terms() {
  return <main className="policy-page"><div className="policy-wrap"><header className="policy-heading"><span className="eyebrow">AIZA · TERMS OF USE</span><h1>Terms of <em>Use</em></h1><p>These draft terms outline topics for review. They are not final legal terms and must be reviewed before publication.</p><div className="policy-meta"><span>Status</span><b>Draft — not yet effective</b></div><nav className="legal-switcher" aria-label="Privacy and terms"><Link to="/privacy">Privacy Policy <span aria-hidden="true">↗</span></Link><span aria-current="page">Terms of Use</span></nav></header><div className="policy-alert"><p><b>Legal review required.</b> Replace bracketed content and have the complete terms reviewed by appropriate counsel before launch.</p></div><article className="policy-article">{sections.map(([title,body],index)=><section className="policy-section" key={title}><span className="policy-index">{String(index+1).padStart(2,'0')}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</article></div></main>
}
