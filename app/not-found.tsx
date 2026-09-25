import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="notion notion-page" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <h1 className="notion-title">Page not found</h1>
      <p>
        That page is not in the docs. Try the navigation, or{' '}
        <Link className="notion-link" href="/">
          start from the beginning
        </Link>
        .
      </p>
    </div>
  )
}
