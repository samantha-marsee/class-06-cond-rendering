export default function Citation({ citation, align }) {
  return (
    <p className="citation" style={{ textAlign: align }}>
      Source: <cite>{citation}</cite>
    </p>
  )
}
