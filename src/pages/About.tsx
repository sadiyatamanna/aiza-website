const sections = [
  ['Our Purpose', 'AIZA is a women’s safety and emergency-communication project. Its direction brings accessible emergency interactions together with careful consideration of sensitive information and its handling.'],
  ['Safety and emergency communication', 'The project context includes manual SOS and automatic-trigger concepts: motion-based shake detection, voice activation, and an external Bluetooth hardware panic button. Trusted-contact workflows and configured emergency communication are part of the design. The exact behavior of a deployed release must be verified.'],
  ['Location and evidence', 'Location-related functionality may be part of supported workflows when device permissions and services allow it. Emergency evidence handling explores capture, local handling, and optional backup as distinct steps; capture and backup are not guaranteed for every trigger.'],
  ['Why post-quantum cryptography?', 'AIZA has a research and design focus on post-quantum cryptography for sensitive emergency-communication workflows. ML-KEM-768, ML-DSA-65, AES-256-GCM, and SHA-256 have different roles and are design building blocks, not proof of deployed protection.'],
  ['Responsible security and privacy', 'Responsible handling requires appropriate data minimization, permissions, key management, device security, transparent limitations, and verification of each operation. Backup availability must be confirmed; evidence marked “Local Only” is not cloud-backed.'],
]

export function About() {
  return <main className="page-main"><section className="page-hero content-width"><span className="eyebrow">ABOUT AIZA</span><h1>Built Around Safety.<br/><em>Guided by Security Research.</em></h1><p>A women’s safety and emergency-communication project exploring practical trigger workflows and post-quantum cryptographic design.</p></section><section className="page-content content-width"><div className="content-rail">{sections.map(([title,body],index)=><article className="content-section" key={title}><span className="section-index">0{index+1}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section></main>
}
