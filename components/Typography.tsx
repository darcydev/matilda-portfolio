import styled from "styled-components"

interface Props {
  children: React.ReactNode | string
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Typography({ children, type }: Props): JSX.Element {
  switch (type) {
    case "h1":
      return <StyledH1>{children}</StyledH1>
    default:
      return <StyledH1>{children}</StyledH1>
  }
}

const StyledH1 = styled.h1`
  font-family: "Roboto", sans-serif;
  margin: 20px 0;
  font-size: 40px;
  text-align: center;
`
