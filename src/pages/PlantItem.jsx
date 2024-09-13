import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as plantUtil from "sharedComponents/util";

export const PlantItem = (props) => {
  const { plant } = props;
  const [imgIdx, setImgIdx] = useState(plantUtil.getRandomIndex(plant.images));

  return (
    <div className="mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
        <img
          src={plant.images[imgIdx].src}
          className="w-[280px] h-[320px] rounded-md"
        />
      </Link>
      <div className="flex justify-between my-3">
        <div className="text-xl text-emerald-700 font-playfair">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imgIdx].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <div
              className={clsx(
                "rounded-full w-5 h-5 mx-[3px] border border-slate-300",
                plantUtil.POT_COLORS[image.pot_color],
                imgIdx === idx && "outline outline-slate-500 outline-offset-2"
              )}
              onMouseEnter={() => setImgIdx(idx)}
              key={idx}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
