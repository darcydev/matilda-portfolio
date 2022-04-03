import styled from "styled-components"

interface Props {
  images: Image[]
}

interface Image {
  id: string
  src: string
  alt: string
}

export default function Gallery({ images }: Props): JSX.Element {
  return (
    <Styled>
      {images.map((image) => (
        <figure key={image.id} className="project-inner">
          <img src={image.src} alt={image.alt} />
        </figure>
      ))}
    </Styled>
  )
}

const Styled = styled.div``
