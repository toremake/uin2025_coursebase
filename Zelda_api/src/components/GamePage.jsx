import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function GamePage() {
  const { game_id } = useParams();
  const [game, setGame] = useState();

  const getGame = async () => {
    fetch(`https://zelda.fanapis.com/api/games/${game_id}`)
      .then((response) => response.json())
      .then((data) => setGame(data.data))
      .catch((error) =>
        console.error("det skjedde en feil under fecth", error)
      );
  };

  useEffect(() => {
    getGame();
  }, [game_id]);
  return <h1>{game?.name}</h1>;
}
