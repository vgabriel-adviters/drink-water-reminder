import './BigGlass.css'

const BigGlass = ({ served }) => {

  console.log("Ml: ", served);

  const mililitersToLiters = (ml) => {
    return ml / 1000;
  }

  const getWaterLitersRemained = (ml) => {
    return (2 - mililitersToLiters(ml));
  }

  const getWaterPercentage = (ml) => {
    return ((mililitersToLiters(ml) * 100) / 2);
  }

  return (
    <div className="glass big-glass">
      <div className="remained-space" style={{height: `${100 - getWaterPercentage(served)}%`}}>
        <p className="liters">{getWaterLitersRemained(served)}L</p>
        <p className="remained">Remained</p>
      </div>
      <div className="filled-space" style={{height: `${getWaterPercentage(served)}%`}}>{getWaterPercentage(served)}%</div>
    </div>
  );
}

export default BigGlass;