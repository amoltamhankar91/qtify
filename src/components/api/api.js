import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res=await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchdetails=(genre,data)=>{
  const tempdata = [];
  data.map((item)=>{
    if(item.genre.key===genre)
    tempdata.push(item);
    return item;
  })
  return tempdata;
}

export const fetchSongs = async (value) => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    switch(value){
      case 0:
        return res.data;
      case 1:
        return fetchdetails("rock",res.data);
      case 2:
        return fetchdetails("pop",res.data);
        case 3:
          return fetchdetails("jazz",res.data);
          case 4:
            return fetchdetails("blues",res.data);
            default:
              <></>
    }
  }catch (err) {
    console.log(err);
  }
}


