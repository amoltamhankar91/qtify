import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
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
    <>
      <Navbar />
      <Hero />
      <div className={styles.SectionWrapper}>
      <Section data={data} type="album" title="Top Album" /> 
      </div>
    </>   
  );
} 

export default App;
