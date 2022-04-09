import styled from "styled-components"

interface Props {
  src: string
  alt?: string
}

export default function Image({ src, alt }: Props): JSX.Element {
  return (
    <Styled>
      <img src={src} alt={alt} />
    </Styled>
  )
}

const Styled = styled.figure`
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }
`
