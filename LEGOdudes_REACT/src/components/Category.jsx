import { useParams } from "react-router";
import ProductCard from "./ProductCard";

export default function CategoryPage({products, cart, setCart, setCartCount}) {
    //Bruker useParams for å hente spesifikk verdi fra URL-path
    //Les mer: https://api.reactrouter.com/v7/functions/react_router.useParams.html
    const {slug} = useParams()

    //Filtrerer products-arrayen basert på slug:
    const categoryProducts = products.filter((product) => product.categorySlug === slug)
    console.log(categoryProducts)

    return (
        <main>
            <div id="productlist">
            {/* Mapper gjennom den filtrerte produktlisten og genererer et ProductCard-komponent for hvert produkt */}
            {categoryProducts.map((product, index) => (
                <ProductCard
                product={product}
                key={`FCT_${index}`}
                setCartCount={setCartCount}
                cart={cart}
                setCart={setCart}
                />
            ))}
            </div>
        </main>
    )
}