import "../styles/todo.scss";
export default function Todo({ title, content }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <button>Ferdig med to do</button>
    </article>
  );
}
