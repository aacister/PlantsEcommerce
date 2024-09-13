import apiFetch from "./apiFetch";

export const getPlants = () => {
   return apiFetch("GET", "/plants");
};

export const getPlantsById = ({id}) => {
   return apiFetch("GET", `/plants/${id}`);
};
