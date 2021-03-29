import React from 'react'
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import roomImg from "../images/details-1.jpeg";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
// import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe 
          rooms starting at $299">
            <Link to="/rooms" className="btn-primary">our rooms</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
    </>
  )
}

export default Home
