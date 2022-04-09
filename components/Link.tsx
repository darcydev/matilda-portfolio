import styled from "styled-components"

interface Props {
  href: string
  children: React.ReactNode
}

export default function Link({ href, children }: Props): JSX.Element {
  return (
    <Styled href={href} target="_blank" rel="noreferrer">
      {children}
    </Styled>
  )
}

const Styled = styled.a``
