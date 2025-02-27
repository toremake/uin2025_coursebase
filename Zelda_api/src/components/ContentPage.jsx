import { useParams } from "react-router-dom";

export default function ContentPage() {
  const { content } = useParams();
  return <h1>{content}</h1>;
}
