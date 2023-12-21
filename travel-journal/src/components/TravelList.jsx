import { useContext } from "react";
import TravelEntity from "./TravelEntity";
import MyContext from "../context";
import { useState } from "react/cjs/react.production.min";

const TravelList = () => {
  const context = useContext(MyContext);

  const [state, handleChange, setState] = usePropState({});

  console.log(context);
  return (
    <div className="travel-list">
      {context.destinations.map((entity) => {
        return <TravelEntity key={entity.key} entity={entity} />;
      })}
    </div>
  );
};

export default TravelList;
