import Citation from "./Citation";

export default function GalleryCard({ imgUri, altText, citation, caption, color }) {
  return (
    <div className="card">
      <img src={imgUri} alt={altText} />

      <div className="caption" style = {{backgroundColor: color }}>
        <p style={{ borderBottom: "1px solid #000000", paddingBottom: "2px"}}>
          {caption}
        </p>
        <Citation citation={citation} align="center" />
      </div>
    </div>
  )
}
