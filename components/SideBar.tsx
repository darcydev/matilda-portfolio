import Link from "next/link"
import styled from "styled-components"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaImdb } from "react-icons/fa"
import { SiLinktree } from "react-icons/si"
import Typography from "./Typography"

export default function SideBar() {
  return (
    <StyledContainer>
      <Typography type="h1">Matilda Price</Typography>
      <ul>
        <li>
          <Link href="https://www.instagram.com/matildajoprice">
            <AiOutlineInstagram size={40} color="#000" />
          </Link>
        </li>
        <li>
          <Link href="https://www.imdb.com/name/nm11361521">
            <FaImdb size={40} color="#000" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <SiLinktree size={40} color="#000" />
          </Link>
        </li>
      </ul>
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 30vw;
  height: 100%;
  background: #fffdd1;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
      a {
        svg {
        }
      }
    }
  }
`
