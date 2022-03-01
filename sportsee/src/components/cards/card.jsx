function Card({ img, numberUnit, unit, categorie }) {
  return (
    <div className="card">
      <img className="img-card" src={img} alt="" />
      <div className="unit-categories">
        <p className="unit">
          {numberUnit}
          {unit}
        </p>
        <p className="categorie">{categorie}</p>
      </div>
    </div>
  );
}

export default Card;
