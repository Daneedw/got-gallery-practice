export default function ({name, spouse, charDeath, realm, race, birth, death, imgUrl }) {
  return (
    <div data-test="component-character">
      <h1 data-test="char-name">{name}</h1>
        <img data-test="char-img" src={imgUrl} alt="" />
      <ul data-test="char-list">

      
      <li data-test="char-spouse">Spouse: {spouse}</li>
      <li data-test="char-realm">Realm: {realm}</li>
      <li data-test="char-race">Race: {race}</li>
      <li data-test="char-birth">Date of Birth: {birth}</li>
      <li data-test="char-death">Date of Death: {death}</li>
      </ul>


    </div>
  );
}
