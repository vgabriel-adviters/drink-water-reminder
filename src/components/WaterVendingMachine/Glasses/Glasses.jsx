import SmallGlass from "./SmallGlass/SmallGlass";
import './Glasses.css';

const Glasses = ({ waterControl, handleWaterControl }) => {

  const smallGlasses = Array.from({ length: 8 }, (_, i) => <SmallGlass key={i} isUsed={i < waterControl.usedGlasses} changeWaterLevel={() => handleWaterControl(i+1, waterControl)} />);

  return (
    <ul className='glasses'>
      {smallGlasses}
    </ul>
  );
}

export default Glasses;