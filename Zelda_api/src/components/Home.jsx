import "../assets/styles/layout.scss";
import GameCard from "./GameCard";

export default function Home({ games }) {
  return (
    <main>
      <h1>Forside</h1>
      <section className="flex-section">
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </main>
  );
}
