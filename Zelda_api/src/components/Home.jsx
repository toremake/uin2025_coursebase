import { useState } from "react";
import "../assets/styles/layout.scss";
import GameCard from "./GameCard";
import SearchForm from "./SearchForm";

export default function Home({ games, setGames }) {
  const [search, setSearch] = useState();

  const handleClick = async () => {
    fetch(`https://zelda.fanapis.com/api/games?name=${search}`)
      .then((response) => response.json())
      .then((data) => setGames(data.data))
      .catch((error) =>
        console.error("Skjedde noe feil ved fetch av søk", error)
      );
  };
  return (
    <main>
      <h1>Forside</h1>
      <SearchForm setSearch={setSearch} handleClick={handleClick} />

      <section className="flex-section">
        {games?.length > 0 ? (
          games?.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p>Finner ikke noe på søket ditt</p>
        )}
      </section>
    </main>
  );
}
