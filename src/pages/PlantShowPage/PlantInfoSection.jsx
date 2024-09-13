import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import { useState } from 'react';
import * as plantUtil from 'sharedComponents/util';

const PlantInfoSection = (props) => {
  const { plant } = props;
  const [imgIdx, setImgIdx] = useState(() => plantUtil.getRandomIndex(plant.images));
  console.log(plant);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="block md:hidden mb-8">
          <PlantHeading plant={plant} />
        </div>
        <img className="rounded-lg" src={plant.images[imgIdx].src} />
        
        <div className="flex mt-4">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px"></div>
          <BenefitBox
            icon="fa-solid fa-truck-fast"
            title="Free Shipping"
            description="Get free shipping on orders over $50"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>

        <p className="text-slate-600 leading-relaxed mt-6">
          {plant.description}
        </p>
        <PlantPurchaseOptions plant={plant} imgIdx={imgIdx} setImgIdx={setImgIdx} />
      </div>
   
    </div>
  );
};

export default PlantInfoSection;
