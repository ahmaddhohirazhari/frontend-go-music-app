import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Row, Col, Image } from "react-bootstrap";
// import axios from "../../utils/axios";
import Card from "../../components/Card";

interface DataItem {
  id: number;
  name: string;
}
const dataArray: DataItem[] = [
  {
    id: 1,
    name: "https://res.cloudinary.com/dhohircloud/image/upload/v1674499905/music/music-app/-Taman_Langit.jpg.jpg",
  },
  {
    id: 2,
    name: "https://res.cloudinary.com/dhohircloud/image/upload/v1674499794/music/music-app/-Still_The_One.jpg.jpg",
  },
  {
    id: 3,
    name: "https://res.cloudinary.com/dhohircloud/image/upload/v1674499662/music/music-app/-Menentukan_Arah.jpg.jpg",
  },
  {
    id: 4,
    name: "https://res.cloudinary.com/dhohircloud/image/upload/v1674499518/music/music-app/-Pandawa_Lima.jpg.jpg",
  },
  {
    id: 5,
    name: "https://res.cloudinary.com/dhohircloud/image/upload/v1674498900/music/music-app/-tulus.jpg.jpg",
  },
];

const Home: React.FC = () => {
  const [dataItems, setDataItems] = useState<DataItem[]>(dataArray);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8081/music", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center gap-2 mt-5">
        {dataItems.map((item, index) => (
          <Card key={item.id} data={item} setData={setDataItems} />
        ))}
      </div>
    </>
  );
};

export default Home;
