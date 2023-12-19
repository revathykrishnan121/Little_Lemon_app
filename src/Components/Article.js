import { useNavigate } from "react-router-dom";
import restauranfood from "../Assets/restauranfood.jpg"
function Article() {
  const navigate = useNavigate();
  const reserveTable = () =>{
    navigate("/reserve")
  }
  return (
    <article>
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button type="button" className="reserve-table" onClick={reserveTable}>Reserve a Table</button>
      </section>
      <picture>
        <img src={restauranfood} alt="restauranfood" width="250" height="280"></img>
      </picture>
    </article>
  );
}

export default Article;