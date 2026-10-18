import { ArrowRight, LockKeyhole, Radio, Smartphone, Users } from 'lucide-react'

const steps = [
  { label: 'SOS EVENT', Icon: Radio },
  { label: 'EMERGENCY INFORMATION', Icon: Smartphone },
  { label: 'CRYPTOGRAPHIC PROTECTION', Icon: LockKeyhole },
  { label: 'CONFIGURED COMMUNICATION CHANNEL', Icon: ArrowRight },
  { label: 'TRUSTED CONTACTS', Icon: Users },
]

export function WorkflowDiagram() {
  return <><div className="workflow-diagram">{steps.map(({label,Icon},index)=><div className="workflow-item" key={label}><div className="workflow-node"><span><Icon size={18}/></span><b>{label}</b></div>{index < steps.length - 1 && <div className="workflow-connector"><i/><ArrowRight size={15}/></div>}</div>)}</div><p className="workflow-disclaimer">Conceptual architecture only. This does not establish that every message in the current application is protected by production PQC or successfully delivered. Cryptographic protection and delivery reliability are separate concerns.</p></>
}
