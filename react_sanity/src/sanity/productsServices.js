// Importerer Sanity-klienten fra client.js (sannsynligvis en konfigurert Sanity client-instans)
import { client } from "./client";

// Eksporterer en asynkron funksjon slik at den kan brukes andre steder
export async function fetchAllProducts() {
  // Utfører en GROQ-spørring mot Sanity for å hente alle produkter
  const data = await client.fetch(`*[_type == "products"]{
    // Henter det unike dokument-ID-en for hvert produkt
    _id,
    // Henter navnet på produktet
    productname,
    // Henter prisen på produktet
    price,
    // Går inn i image-feltet og henter asset-objektet via "->" (dereferering)
    // Fra asset hentes bilde-ID og bilde-URL
    image{asset ->{ _id, url }}
  }`);

  // Returnerer resultatet av spørringen som en array av produktobjekter
  return data;
}
