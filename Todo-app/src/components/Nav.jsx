import "../styles/nav.scss";
export default function Nav({ username }) {
  return (
    <header>
      <nav>
        <a href="#">ToDo´s</a>
        <a href="#">{username}</a>
      </nav>
    </header>
  );
}
