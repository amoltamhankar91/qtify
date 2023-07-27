import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "../src/components/Card/Card";
import CardImage from "../src/assets/cardimg.png";
import LeftNavigation from "./components/Carousel/LeftNavigation/LeftNavigation";
import RightNavigation from "./components/Carousel/RightNavigation/RightNavigation";
import Carousel from "./components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./components/api/api";
import Section from './components/Section/Section'

function App() {
  const [data, setData] = useState([]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);


  
  return (
    <div className="landingpage">
      <Navbar />
      <Hero />
      <Section data={data} type="album" title="Top Album" />
    </div>
  );
} 

export default App;
