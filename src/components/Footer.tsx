import { siteContent } from '../data/siteContent'

export default function Footer() {
  const { footer } = siteContent

  return (
    <footer className="page credit">
      {footer.copyright}, {footer.affiliation}
      <br />
      <a href={footer.credit.href} target="_blank" rel="noreferrer">
        {footer.credit.label}
      </a>
    </footer>
  )
}
