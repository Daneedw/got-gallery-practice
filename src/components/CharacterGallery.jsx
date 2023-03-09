import Character from "./Character";

export default function ({ characters }) {
  return (
    <div data-test="component-char-gallery">
      {characters.map((character) => {
        return <Character {...character}></Character>;
      })}
    </div>
  );
}
