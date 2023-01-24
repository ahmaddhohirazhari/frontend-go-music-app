import React from "react";
import "./index.css";

interface DataItem {
  id: number;
  name: string;
}

interface Props {
  data: DataItem;
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

const Card: React.FC<Props> = ({ data, setData }) => {
  // component implementation here

  return (
    <div className="">
      <div className="card d-flex">
        <img src={data.name} alt="" className="card_image" />
      </div>
    </div>
  );
};

export default Card;
