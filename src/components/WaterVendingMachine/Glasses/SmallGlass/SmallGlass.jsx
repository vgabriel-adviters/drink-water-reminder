import './SmallGlass.css';

const SmallGlass = ({ isUsed, changeWaterLevel }) => {
  return (
    <button className={`glass small-glass ${isUsed&&'small-glass-full'}`} onClick={() => changeWaterLevel()}>
      250 ml
    </button>
  );
}

export default SmallGlass;