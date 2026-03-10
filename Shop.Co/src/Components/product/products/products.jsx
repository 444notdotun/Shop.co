import Page1 from "../ProductPage1/productPage1";
import NewArrival from "../newArrivals/newArrival";
import TopSelling from "../Top Sellling/topSelling";
import Navbar from "../../Register/navbar/navbar";
import Footer from "../../Register/footer/footer";
import Browse from "../BrowseBYDressStyle/browse";
import Review from "../Review/review";
const Products = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Page1 />
            <NewArrival />
            <TopSelling/>
            <Browse></Browse>
            <Review></Review>
            <Footer></Footer>
        </div>
    )
}

export default Products