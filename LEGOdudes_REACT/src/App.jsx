import { products } from "./assets/legodudes";
import Cart from "./components/Cart";
import CategoryHeading from "./components/CategoryHeading";
import Nav from "./components/Nav";
import ProductCard from "./components/ProductCard";
import "./styles/style.css";
function App() {
  return (
    <div id="content">
      <Cart />
      <header>
        <a href="index.html" id="logo">
          <img src="website_images/LD_logo.svg" alt="Legodudes" />
        </a>
        <button id="shoppingcart">
          <span id="cartcount">99</span>
          <img src="website_images/legocart.svg" alt="Handlevogn" />
        </button>
        <Nav />
      </header>
      <main>
        <CategoryHeading title="Ninjago" />
        <div id="productlist">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
        {/*<!--
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
            -->*/}
      </main>
      <footer>
        <p>2025 &copy; Legodudes</p>
      </footer>
    </div>
  );
}

export default App;
