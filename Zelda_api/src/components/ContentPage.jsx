import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContentPage() {
  const { slug, content } = useParams();
  const [pageContent, setPageContent] = useState();

  const getContent = async () => {
    fetch(`https://zelda.fanapis.com/api/${slug}/${content}`)
      .then((response) => response.json())
      .then((data) => setPageContent(data.data))
      .catch((error) =>
        console.error("Det skjedde noe rart ved henting av innhold", error)
      );
  };

  useEffect(() => {
    getContent();
    console.log(pageContent);
  }, [content]);

  console.log(pageContent);

  return (
    <>
      <h1>{pageContent?.name}</h1>
      <section>
        {pageContent?.inhabitants ? (
          <>
            <h2>Inhabitants</h2>
            <ul>
              {/* Disse må fetches... */}
              <li>{pageContent?.inhabitants}</li>
            </ul>
          </>
        ) : null}
      </section>
    </>
  );
}
