import { SectionHeading } from '../components/SectionHeading'

const steps = [
  ['Prepare safety settings', 'Review trusted contacts, available trigger settings, communication preferences, and requested device permissions. Available controls depend on the application.'],
  ['Choose a supported trigger', 'Project context describes manual SOS, shake detection, voice activation, or a compatible Bluetooth hardware trigger. Exact availability and behavior require verification in the current release.'],
  ['Begin the emergency workflow', 'A trigger may start configured emergency actions. The actions and sequence depend on the trigger, settings, permissions, device state, connectivity, and implementation.'],
  ['Use configured communication and location actions', 'Communication and location-related actions may be attempted where enabled. A call, message, or location lookup can fail; delivery and emergency response are not guaranteed.'],
  ['Capture evidence, where enabled', 'Evidence capture depends on a supported workflow, permissions, and device conditions. Not every trigger or event necessarily captures the same media.'],
  ['Handle locally and optionally back up', 'Local protection, cloud upload, successful backup confirmation, and later retrieval are separate steps. Evidence marked Local Only should not be described as cloud-backed.'],
  ['Review status and history', 'The application project includes safety-history and evidence-status concepts. Their contents and current runtime behavior should be confirmed against the deployed app.'],
]

const flow = ['Prepare safety settings', 'Manual, shake, voice, or Bluetooth trigger', 'Emergency workflow', 'Configured communication and location actions', 'Evidence capture, where enabled', 'Local protection and optional cloud backup', 'Status and history']

export function HowItWorks() {
  return <main className="page-main"><section className="page-hero content-width"><span className="eyebrow">HOW IT WORKS</span><h1>A safety workflow,<br/><em>step by step.</em></h1><p>This is a conceptual guide to the project workflow. It does not promise emergency response, uninterrupted connectivity, successful delivery, or that each step exists in every release.</p></section><section className="page-content content-width"><SectionHeading eyebrow="CONCEPTUAL GUIDE" title={<>From preparation<br/><em>to review.</em></>}/><div className="timeline">{steps.map(([title,body],index)=><article className="timeline-step" key={title}><span className="timeline-number">0{index+1}</span><span className="timeline-marker"/><div><h2>{title}</h2><p>{body}</p></div></article>)}</div><div className="how-flow-wrap"><h2>Conceptual workflow</h2><div className="how-flow">{flow.map((item,index)=><div className="how-flow-item" key={item}><span>{String(index+1).padStart(2,'0')}</span><b>{item}</b>{index < flow.length-1 && <i aria-hidden="true">↓</i>}</div>)}</div></div><p className="workflow-disclaimer">The actual sequence depends on application settings, permissions, device state, network availability, and verified implementation. Evidence capture, local protection, optional backup, and successful backup confirmation are separate operations.</p></section></main>
}
