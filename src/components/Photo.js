import photo from "../img/barbus.jpg";
import joke from "../img/joke.jpg";

function Photo() {
  return (
    <div className="fio">
      <img src={photo} className="fio_photo" alt="fish" />
      <h3>Рыбка аквариумная Барбоска</h3>
    </div>
  );
}
function Joke() {
  return (
    <div className="joke">
      <h3>Выход из зоны комфорта - не желателен.</h3>
      <img src={joke} className="joke_photo" alt="joke" />
    </div>
  );
}

export { Photo, Joke };
