import { useState } from "react";
import BigGlass from "./BigGlass/BigGlass";
import Glasses from "./Glasses/Glasses";
import './WaterVendingMachine.css'

const WaterVendingMachine = () => {

  const [waterControl, setWaterControl] = useState({
    totalWater: 0,
    usedGlasses: 0
  });

  const handleWaterControl = (glassId, waterControl) => {
    const currentUsedGlasses = (glassId !== waterControl.usedGlasses) ? glassId : glassId - 1;
    setWaterControl({
      totalWater: currentUsedGlasses * 250,
      usedGlasses: currentUsedGlasses
    });
  }

  return (
    <>
      <p className='goal'>Goal: 2 Liters</p>
      <div className="big-glass-container">
        <BigGlass served={waterControl.totalWater} />
      </div>
      <p className="instruction">Select how many glasses of water that you have drank</p>
      <div className="glasses-container">
        <Glasses waterControl={waterControl} handleWaterControl={handleWaterControl} />
      </div>
    </>
  );
}

export default WaterVendingMachine;