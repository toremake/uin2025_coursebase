// Importerer nødvendige ting fra React-biblioteket
import { useEffect, useState } from "react";

// Importerer bilder og CSS
import reactLogo from "./assets/react.svg"; // React-logoen
import viteLogo from "/vite.svg"; // Vite-logoen (byggeverktøy)
import "./App.css"; // Importerer stilene (CSS)

// Importerer andre komponenter som brukes i appen
import Layout from "./components/Layout"; // En Layout-komponent (sannsynligvis en wrapper rundt sidene)
import { Routes, Route } from "react-router-dom"; // Brukes for å håndtere side-navigering
import CategoryPage from "./components/CategoryPage"; // En side som viser en kategori
import Home from "./components/Home"; // Hjemmesiden til appen
import GamePage from "./components/GamePage";
import ContentPage from "./components/ContentPage";

// Hovedkomponenten i React-appen
function App() {
  // Lager en "state" (en variabel som React husker og kan oppdatere) for spillene
  const [games, setGames] = useState();

  // En funksjon som henter spilldata fra en API
  const getGames = async () => {
    fetch("https://zelda.fanapis.com/api/games") // Henter data fra API-et
      .then((response) => response.json()) // Konverterer svaret til JSON-format
      .then((data) => setGames(data.data)) // Setter spillene i state-variabelen
      .catch((error) => console.error("Skjedde noe dritt ved fetch", error)); // Hvis noe går galt, vis en feilmelding
  };

  // useEffect kjører en gang når komponenten lastes inn
  useEffect(() => {
    getGames(); // Kaller på getGames-funksjonen for å hente spillene
    console.log("Min state", games); // Skriver ut spillene i konsollen
  }, []); // Tom array [] betyr at dette bare skjer én gang når appen starter

  // Returnerer JSX (HTML-lignende kode for React)
  return (
    <Layout>
      {/* Setter opp rutene (sidene) i appen */}
      <Routes>
        {/* "/" betyr hjemmesiden, sender games som en prop til Home-komponenten */}
        <Route path="/" element={<Home games={games} setGames={setGames} />} />
        {/* ":slug" betyr at denne ruten kan være en hvilken som helst kategori */}
        <Route path=":slug" element={<CategoryPage />} />
        <Route path=":slug/:content" element={<ContentPage />} />
        <Route path="games/:game_id" element={<GamePage />} />
      </Routes>
    </Layout>
  );
}

// Eksporterer App-komponenten slik at den kan brukes i andre filer
export default App;
