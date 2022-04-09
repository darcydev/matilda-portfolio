import styled from "styled-components"
import Image from "./Image"

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
    <StyledContainer>
      {images.map((image) => (
        <Image key={image.id} src={image.src} alt={image.alt} />
      ))}
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  width: 70vw;
  margin: 0 0 0 auto;
`
