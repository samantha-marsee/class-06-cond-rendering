export default function Citation({ citation, align }) {
  return (
    <p className="citation" style={{ textAlign: 'left' }}>
      Source: <cite>{citation}</cite>
    </p>
  )
}
