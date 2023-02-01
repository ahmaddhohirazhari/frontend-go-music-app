import React from "react";
import "./index.css";

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
// const [musicData, setMusicData] = useState<Music[]>([]);
interface Props {
  musicData: Music;
  setMusicData: React.Dispatch<React.SetStateAction<Music[]>>;
}

const Card: React.FC<Props> = ({ musicData, setMusicData }) => {
  // component implementation here

  return (
    <div className="">
      <div className="card d-flex">
        <img src={musicData.album_art} alt="" className="card_image" />
      </div>
    </div>
  );
};

export default Card;
