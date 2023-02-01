import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Row, Col, Image } from "react-bootstrap";
// import axios from "../../utils/axios";
import Card from "../../components/Card";

interface Music {
  Music_id: number;
  name: string;
  album: string;
  album_art: string;
  singer: string;
  publish_date: string;
  created_at: string;
  updated_at: string;
}

const Home: React.FC = () => {
  const [musicData, setMusicData] = useState<Music[]>([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const response = await fetch("http://localhost:8081/music/");
      console.log(response);
      const data = await response.json();
      setMusicData(data.data);
    };

    fetchMusic();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center gap-2 mt-5">
        {musicData.map((item, index) => (
          <Card
            key={item.Music_id}
            musicData={item}
            setMusicData={setMusicData}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
