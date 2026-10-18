export function SectionHeading({ eyebrow, title, children, align = 'left' }: { eyebrow?: string; title: React.ReactNode; children?: React.ReactNode; align?: 'left' | 'center' }) {
  return <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{children && <p>{children}</p>}</div>
}
