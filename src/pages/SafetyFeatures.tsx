import { Activity, Bluetooth, Clock3, Headphones, MapPin, Mic, Radio, Settings2, Smartphone, Users } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const features = [
  { title: 'Emergency SOS', Icon: Radio, body: 'A manual SOS starts an emergency workflow. Configured safety actions and any evidence capture depend on settings, permissions, device state, connectivity, and the action completing successfully.' },
  { title: 'Trusted Contacts', Icon: Users, body: 'Configured contacts may be involved in supported emergency communication workflows. Recipient selection and delivery behavior should be confirmed in the deployed application.' },
  { title: 'Location and Radar', Icon: MapPin, body: 'Location-related actions require supported implementation, device permissions, location services, and sometimes connectivity. Access and sharing are not guaranteed.' },
  { title: 'Safety History', Icon: Clock3, body: 'The project includes a safety-history area for reviewing past events where implemented. Its contents and retention behavior require verification against the current app.' },
  { title: 'User Controls', Icon: Settings2, body: 'Review permissions, trigger settings, and communication preferences. Available controls can vary by device and application version.' },
]

const triggers = [
  { letter: 'A', title: 'Manual SOS', Icon: Radio, body: 'The user explicitly activates the SOS interface to begin an emergency workflow. Configured actions may include communication or evidence capture where enabled; individual actions can fail or be unavailable. The current countdown and cancellation behavior has not been verified against a release build.' },
  { letter: 'B', title: 'Shake detection', Icon: Activity, body: 'Motion is evaluated as a timed pattern rather than a single movement, with spacing rules and a cooldown intended to reduce accidental activation. Operation while the app is closed or the device is locked is not guaranteed.' },
  { letter: 'C', title: 'Voice activation', Icon: Mic, body: 'Recognition confidence, a final recognition result, minimum duration, and audio level are evaluated before accepting a trigger. No wake phrase is asserted here. Permissions, background restrictions, device state, and environmental noise can affect behavior; continuous microphone listening is not claimed.' },
  { letter: 'D', title: 'Bluetooth hardware panic button', Icon: Bluetooth, body: 'The project context describes an ESP32-related external trigger intended to start an emergency workflow. This is not a claim of universal accessory compatibility or reliable background operation.' },
]

function EmergencyWorkflow() {
  const steps = ['Trigger detected', 'Emergency workflow', 'Configured safety actions', 'Evidence capture, where enabled', 'Local evidence handling', 'Optional cloud backup', 'Status and history']
  return <div className="evidence-workflow" aria-label="Conceptual emergency workflow">
    {steps.map((step, index) => <div className="evidence-workflow-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b>{index < steps.length - 1 && <span className="evidence-workflow-arrow" aria-hidden="true">↓</span>}</div>)}
  </div>
}

function EvidenceStatusExamples() {
  const statuses = [
    ['Captured', 'An evidence item has been created.', 'status-neutral'],
    ['Protected locally', 'Show as confirmed only after the protection step succeeds.', 'status-positive'],
    ['Upload pending', 'The backup operation has not completed.', 'status-pending'],
    ['Backup failed — local only', 'Cloud backup failed; do not describe the item as cloud-backed.', 'status-error'],
    ['Backup confirmed', 'Use only after a successful upload or suitable server confirmation.', 'status-positive'],
  ]
  return <div className="evidence-status-panel">
    <p className="evidence-status-label">Illustrative status examples — not live data</p>
    <div className="evidence-status-list">{statuses.map(([title, body, tone]) => <div className="evidence-status-row" key={title}><span className={`evidence-status-dot ${tone}`} aria-hidden="true"/><div><b>{title}</b><p>{body}</p></div></div>)}</div>
  </div>
}

export function SafetyFeatures() {
  return <main className="page-main"><section className="page-hero content-width"><span className="eyebrow">SAFETY FEATURES</span><h1>Safety tools with<br/><em>clear expectations.</em></h1><p>AIZA’s project context includes manual and supported automatic trigger concepts. Availability and behavior depend on the application implementation, device, permissions, configuration, and network conditions.</p></section>
    <section className="page-content content-width"><SectionHeading eyebrow="CAPABILITIES TO VERIFY" title={<>A considered safety<br/><em>toolkit.</em></>}/><div className="detail-grid">{features.map(({title,Icon,body},index)=><article className="detail-card" key={title}><span className="detail-icon"><Icon size={19}/></span><span className="detail-index">0{index+1}</span><h2>{title}</h2><p>{body}</p></article>)}</div></section>
    <section className="page-content content-width safety-detail-section"><SectionHeading eyebrow="EMERGENCY ACTIVATION" title={<>Four ways to trigger<br/><em>an emergency.</em></>}/><p className="evidence-intro">These descriptions reflect supplied project context; exact behavior must be checked against the current source and release build.</p><div className="trigger-grid">{triggers.map(({letter,title,Icon,body})=><article className="trigger-card" key={title}><div className="trigger-card-top"><span>{letter}</span><Icon size={20}/></div><h2>{title}</h2><p>{body}</p></article>)}</div>
      <details className="developer-details"><summary>Developer details — motion and voice thresholds</summary><div><p><b>Shake:</b> threshold 16f; three pulses in a 3,200 ms detection window; accepted pulse spacing 180–700 ms; cooldown 12,000 ms.</p><p><b>Voice:</b> confidence at least 0.82; final recognition result required; minimum recognition duration 600 ms; audio RMS must exceed the configured noise floor.</p><p>Values are project context, not independent confirmation of deployed behavior. Microphone and motion availability depend on the operating system and device.</p></div></details>
    </section>
    <section className="page-content content-width safety-detail-section"><SectionHeading eyebrow="AFTER A TRIGGER" title={<>A workflow with<br/><em>careful boundaries.</em></>}/><EmergencyWorkflow/><p className="evidence-intro">The exact sequence depends on trigger type, application configuration, permissions, device state, connectivity, and implementation. Supported project areas include SOS activation, trusted contacts, emergency communication, location-related functionality, siren and visual alerts where enabled, voice recording where enabled, emergency history, and evidence handling. Not every action runs for every trigger. Calls, SMS, location access, delivery, and emergency response are not guaranteed.</p></section>
    <section className="page-content content-width safety-detail-section"><SectionHeading eyebrow="EVIDENCE HANDLING" title={<>Emergency evidence.<br/><em>Carefully handled.</em></>}/><div className="evidence-copy"><p><b>Capture</b> creates a media item when a supported workflow requests it and required permissions and device conditions permit. The project context mentions a five-second voice clip in an emergency workflow; this duration is not asserted as universal. Photo, audio, and video capture should be verified separately, and no claim is made that all media types are captured together or for every trigger.</p><p><b>Local storage</b> and <b>local cryptographic protection</b> are separate operations. A created item is not necessarily protected; protection should only be shown as confirmed when that operation succeeds.</p><p><b>Cloud upload</b>, <b>backup confirmation</b>, and <b>later retrieval</b> are also distinct. An attempted upload does not prove that the backup succeeded. Depending on the app’s local storage behavior, evidence may remain on-device if cloud backup is unavailable.</p></div><div className="evidence-security-grid"><article className="detail-card"><span className="detail-icon"><Activity size={19}/></span><h2>Secure evidence vault — design</h2><p><b>AES-256-GCM</b> is authenticated symmetric encryption and needs appropriate key management and nonce handling.</p><p><b>ML-KEM-768</b> establishes shared secret material; it does not directly encrypt arbitrary files.</p><p><b>ML-DSA-65</b> supports digital signatures for authenticity and integrity checks when correctly integrated.</p><p><b>SHA-256</b> produces a cryptographic hash. A hash alone neither encrypts data nor proves authenticity against a malicious party.</p><p className="evidence-disclaimer">AIZA's evidence-security design explores cryptographic protection and integrity-related mechanisms. Actual protection depends on implementation, key management, device security, and successful execution of each operation.</p></article><EvidenceStatusExamples/></div><p className="evidence-backup-note">Cloud evidence backup availability depends on backend configuration and successful upload verification. Evidence marked Local Only should not be represented as cloud-backed.</p><p className="evidence-intro">Project context records prior “Backup Failed” and “Local Only” statuses when the required evidence table and private storage bucket were missing. This website does not verify current backend configuration and does not connect to it.</p></section>
    <section className="page-content content-width safety-detail-section"><SectionHeading eyebrow="ADDITIONAL CONTROLS" title={<>Settings, sensors<br/><em>and hardware.</em></>}/><div className="detail-grid">{[
      {title:'Voice and motion',Icon:Smartphone,body:'Voice and shake triggers rely on supported implementation, permissions or sensor availability, operating-system background limits, device state, and settings. They may not remain active in every state.'},
      {title:'Bluetooth hardware',Icon:Headphones,body:'The ESP32-related panic-button concept is hardware-specific. Verify the supported accessory, pairing flow, permissions, and operating conditions before relying on it.'},
      {title:'Evidence and alerts',Icon:Radio,body:'Siren, visual alerts, recording, and other actions may be configurable or permission-dependent. Their availability and completion should be confirmed in the actual app.'},
    ].map(({title,Icon,body})=><article className="detail-card" key={title}><span className="detail-icon"><Icon size={19}/></span><h2>{title}</h2><p>{body}</p></article>)}</div></section>
  </main>
}
