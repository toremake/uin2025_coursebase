// Importerer produkter fra en ekstern fil
import { products } from "./assets/legodudes";

// Importerer komponenter som brukes i appen
import Cart from "./components/Cart";
import CategoryHeading from "./components/CategoryHeading";
import Nav from "./components/Nav";
import ProductCard from "./components/ProductCard";

// Importerer stilfilen for appen
import "./styles/style.css";

// Definerer hovedkomponenten App
function App() {
  return (
    <div id="content">
      {/* Legger til handlevogn-komponenten */}
      <Cart />

      {/* Overskrift-seksjon med logo og handlekurvknapp */}
      <header>
        <a href="index.html" id="logo">
          <img src="website_images/LD_logo.svg" alt="Legodudes" />
        </a>
        <button id="shoppingcart">
          <span id="cartcount">99</span>{" "}
          {/* Viser antall varer i handlekurven */}
          <img src="website_images/legocart.svg" alt="Handlevogn" />
        </button>

        {/* Navigasjonskomponenten */}
        <Nav />
      </header>

      {/* Hovedinnhold */}
      <main>
        {/* Viser overskrift for kategorien */}
        <CategoryHeading title="Ninjago" />

        {/* Produktliste-seksjon */}
        <div id="productlist">
          {/* Mapper gjennom produktlisten og genererer en ProductCard-komponent for hvert produkt */}
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>

        {/* Kommentarert ut HTML-kode som viser eksempler på produkter */}
        {/* 
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
        */}
      </main>

      {/* Footer-seksjon */}
      <footer>
        <p>2025 &copy; Legodudes</p>
      </footer>
    </div>
  );
}

// Eksporterer App-komponenten for bruk i applikasjonen
export default App;
