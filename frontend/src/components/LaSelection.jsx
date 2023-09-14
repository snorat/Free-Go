/* eslint-disable react/prop-types */
function LaSelection({ meals }) {
  return (
    meals && (
      <section className="laSelection">
        <div className="enTete">
          <h3>Free-go selection</h3>
        </div>
        <div className="web">
          <img
            className="picturePrincipal"
            src={meals.strMealThumb}
            alt={meals.strMeal}
          />

          <div className="divText">
            <h5>{meals.strMeal}</h5>
          </div>
        </div>
      </section>
    )
  );
}

export default LaSelection;
