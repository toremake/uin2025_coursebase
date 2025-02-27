import { useEffect } from "react";
import "../assets/styles/gameCard.scss";
import { Link, useParams } from "react-router-dom";

export default function CategoryCard({ item }) {
  //const { slug } = useParams();

  return (
    <article className="gameCard">
      <h3>{item.name}</h3>
      <Link to={item.id}>Les mer {item.name}</Link>
    </article>
  );
}
