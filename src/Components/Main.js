import greekSalad from "../Assets/greekSalad.jpg"
import bruchetta from "../Assets/bruchetta.svg"
import lemonDessert from "../Assets/lemonDessert.jpg"
import FoodCard from "./FoodCard";
function Main() {
  return (
    <main>
      <section className="sectionHeading">
        <h2>This Week Specials!</h2>
        <button type="button" className="button-style">Online Menu</button>
      </section>
      <section className="sectionContent">
        <FoodCard imageName={greekSalad} dishName="Greek Salad" rate="$12.99" details="The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese garnished with crunchy garlic and rosemary croutons"></FoodCard>
        <FoodCard imageName={bruchetta} dishName="Bruchetta" rate="$5.99" details="Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"></FoodCard>
        <FoodCard imageName={lemonDessert} dishName="Lemon Dessert" rate="$5.00" details="This comes straight from granmas receipe book, every last ingredient has been sourced and is an authentic as can be imagined "></FoodCard>
      </section>
    </main>
  );
}

export default Main;