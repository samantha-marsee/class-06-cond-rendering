export default function Citation({ citation, align = "center"}) {
  return (
    <p className="citation">
      Source: <cite>{citation}</cite>
    </p>
  )
}
