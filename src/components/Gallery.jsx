import Card from './GalleryCard'

export default function Gallery() {
  return (
    <div className="gallery">
      <Card
        imgUri="/images/galaxy.webp"
        altText="an AI generated galaxy"
        caption="A galaxy"
        citation="Microsoft Copilot"
        color = "white"
      />
      <Card
        imgUri="/images/asteroid.webp"
        altText="an AI generated asteroid"
        caption="An asteroid"
        citation="Microsoft Copilot"
        color = "beige"
      />
      <Card
        imgUri="/images/black-hole.webp"
        altText="an AI generated black hole"
        citation="Microsoft Copilot"
        color="#e58c43"
      />
      <Card
        imgUri="/images/cloud-nebulae.webp"
        altText="an AI generated cloud nebulae"
        caption="Cloud nebulae"
        citation="Microsoft Copilot"
      // color="#9ad2ea"
      />
      <Card
        imgUri="/images/distant-space.webp"
        altText="an AI generated distant space"
        citation="Microsoft Copilot"
      />
      <Card
        imgUri="/images/galaxy-collision.webp"
        altText="an AI generated galaxy collision"
        citation="Microsoft Copilot"
      />
      <Card
        imgUri="/images/moon.webp"
        altText="an AI generated moon"
        citation="Microsoft Copilot"
      />
      <Card
        imgUri="/images/pulsar.webp"
        altText="an AI generated pulsar"
        caption="A pulsar"
        citation="Microsoft Copilot"
      // color="#d9b5ea"
      />
      <Card
        imgUri="/images/star-death.webp"
        altText="an AI generated star death"
        citation="Microsoft Copilot"
      />
      <Card
        imgUri="/images/sun.webp"
        altText="an AI generated sun"
        citation="Microsoft Copilot"
      />
    </div>
  )
}
