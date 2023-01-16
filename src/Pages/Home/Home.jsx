import Brands from "../../Components/Brands/Brands";
import Hero from "../../Components/Hero/Hero";
import Blog from "../../Container/Blog/Blog";
import Category from "../../Container/CategoryConatiner/Category";
import FeatureProduct from "../../Container/FeatureProducts/FeatureProduct";
import LatestProduct from "../../Container/LatestProduct/LatestProduct";
import Offer from "../../Container/Offer/Offer";



function Home() {
  return (
    <>
      <Hero />
      <FeatureProduct />
      <LatestProduct />
      <Category />
      <Offer />
      <Blog />
      <Brands />
    </>
  );
}

export default Home;
