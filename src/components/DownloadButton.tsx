import { ArrowDownToLine } from 'lucide-react'
import { isDownloadAvailable, siteConfig } from '../config'

export function DownloadButton({ className = '' }: { className?: string }) {
  return isDownloadAvailable
    ? <a className={`button button-primary ${className}`} href={siteConfig.downloadUrl} target="_blank" rel="noopener noreferrer">Download AIZA <ArrowDownToLine size={15}/></a>
    : <span className={`button button-disabled ${className}`} aria-disabled="true">Download AIZA — Coming Soon</span>
}
