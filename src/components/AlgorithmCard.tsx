import type { LucideIcon } from 'lucide-react'

export function AlgorithmCard({ number, name, subtitle, description, standard, Icon }: { number: string; name: string; subtitle: string; description: string; standard: string; Icon: LucideIcon }) {
  return <article className="algorithm-card"><div className="algorithm-card-top"><span>{number}</span><Icon size={19} aria-hidden="true"/></div><h3>{name}</h3><h4>{subtitle}</h4><p>{description}</p><span className="algorithm-standard">{standard}</span></article>
}
