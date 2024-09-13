import NavBar from "sharedComponents/NavBar";
import { useEffect, useState } from 'react';
import * as plantService from 'services/plant';
import { useParams } from 'react-router-dom';
import LoadingSpinner from "sharedComponents/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
    const {plantId} = useParams();
    const [plant, setPlant ] = useState(null);
    const [isLoading, setIsLoading]  = useState(true);


    useEffect(() => {
            (async () => {
            setIsLoading(true);
            const resp = await plantService.getPlantsById({id: plantId});
            const data = await resp.json();
            setPlant(data);
            setIsLoading(false);
            })();
      }, [plantId]);

      console.log(plant);

    return <>
        <NavBar />
        <div className="flex justify-center bg-green-50 min-h-screen font-lato">
            <div className="w-full max-w-5xl px-8 py-24">
                {
                    isLoading ? <LoadingSpinner /> :
                    <PlantInfoSection plant={plant} />
                }
            </div>
        </div>
    </>
};

export default PlantShowPage;