import SideBar from "../components/SideBar"
import Gallery from "../components/Gallery"
import Head from "../components/Head"

const PORTFOLIO_IMAGES = [
  {
    id: "1",
    src: "https://www.c-heads.com/wp-content/uploads/2019/11/26-1.jpg",
    alt: "Matilda Price",
  },
  {
    id: "2",
    src: "https://www.c-heads.com/wp-content/uploads/2019/11/22.jpg",
    alt: "Matilda Price",
  },
  {
    id: "3",
    src: "https://onemanagement.com/assets/2019-06-03-comps/composite_92485.png",
    alt: "Matilda Price",
  },
]

export default function HomePage() {
  return (
    <div>
      <Head />
      <main style={{ background: "#fffdd1" }}>
        <div style={{ display: "flex" }}>
          <SideBar />
          <Gallery images={PORTFOLIO_IMAGES} />
        </div>
      </main>
    </div>
  )
}
