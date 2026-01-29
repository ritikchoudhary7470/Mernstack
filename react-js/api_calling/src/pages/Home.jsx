import Loader from "../components/Loader.jsx"
import SingleCard from "../components/SingleCard.jsx"
import "./Page.css"
function Home({ data, loader, setCardNo, cardNo }) {

  // console.log(data)

  return (
    <>
      <div className="Home">
         <SingleCard item={data} ></SingleCard>
        </div >




      
     
    </>
  )
}

export default Home