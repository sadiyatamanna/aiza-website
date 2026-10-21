/** Public site settings only. Never place credentials or private keys here. */
export const siteConfig = {
  brandName: 'AIZA',
  logoUrl: '/assets/aiza-logo-symbol.png',
  downloadUrl: 'https://github.com/sadiyatamanna/aiza-app/releases/download/v1.0.0/AIZA.1.0.apk',
  releaseStatus: 'Available Now',
  contactEmail: 'sadiyatamanna8114@gmail.com',
  contactPhone: '+91 7899871615',
  instagramHandle: 'tamannakhan._',
  instagramUrl: 'https://www.instagram.com/tamannakhan._/',
  githubUrl: 'https://github.com/sadiyatamanna',
  copyrightYear: new Date().getFullYear(),
  policyEffectiveDate: '[Effective date to be confirmed]',
  organizationName: '[Responsible organization to be confirmed]',
  dataPractices: '[Describe verified app data collection, storage, sharing, and retention practices.]',
} as const

export const isDownloadAvailable = Boolean(siteConfig.downloadUrl.trim())
