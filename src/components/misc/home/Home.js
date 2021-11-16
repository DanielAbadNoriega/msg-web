import ProfesionalsCarousel from "../carousel/profesionals-carousel/ProfesionalsCarousel";
import RecipesCarousel from "../carousel/recipes-carousel/RecipesCarousel";
import RestaurantsCarousel from "../carousel/restaurants-carousel/RestaurantsCarousel";
import ShopsCarousel from "../carousel/shops-carousel/ShopsCarousel";

function Home() {
  return (
    <div className="container mt-2 lg-col-12">
      <h1 className="mt-4">Mejor Sin Gluten</h1>
      <ProfesionalsCarousel />
      <RecipesCarousel />
      <RestaurantsCarousel />
      <ShopsCarousel />
    </div>
  );
}

export default Home;
