import NavBar from "sharedComponents/NavBar";
import { useEffect, useState } from "react";
import RedirectToSignInIfSignedOut from "sharedComponents/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import PlantItem from "pages/PlantItem";
import {Link} from "react-router-dom";
import LoadingSpinner from "sharedComponents/LoadingSpinner";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);

    })();
  }, []);
  console.log(plants);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="bg-green-50 h-screen">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center py-24">
            <div className="width-full max-w-5xl ">
              <div className="text-3xl text-emerald-800 font-playfair mb-6 px-4">
                Plants in Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant, idx) => (
                  <PlantItem key={plant.name} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
