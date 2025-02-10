import Citation from "./Citation";

export default function GalleryCard({ imgUri, altText, citation, caption, color }) {
  return (
    <div className="card" style = {{backgroundColor: color }}>
      <img src={imgUri} alt={altText} />

      <div className="caption">
        <p style={{ borderBottom: "1px solid #000000", paddingBottom: "2px"}}>
          {caption}
        </p>
        <Citation citation={citation} align="center" />
      </div>
    </div>
  )
}
