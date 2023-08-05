import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import { fetchTopAlbums,fetchNewAlbums, fetchSongs } from "./components/api/api";
import Section from './components/Section/Section';


function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [value,setValue]=useState(0);
  console.log(value,"here1");
 
  const generateData = async (value) => {
    try {
      console.log(value,"here3");
      const res1 = await fetchTopAlbums();
      const res2 = await fetchNewAlbums();
      const res3 = await fetchSongs(value);
      console.log(res3,"here4");
      
      setData1(res1);
      setData2(res2);
      setData3(res3);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(value,"here2");
    generateData(value);
  }, [value]);

  return (
    <div className="styles.landingpage">
      <Navbar />
      <Hero />
      <div className={styles.SectionWrapper}>
      <Section data={data1} type="album" title="Top Album" />
      <Section data={data2} type="album" title="New Albums" />
      <Section data={data3} type="songs" title="Songs" value={value} setValue={setValue}/>

      </div>
    </div>   
  );
} 

export default App;
