import { Joke } from "./Photo";

const Fish = () => {
  return (
    <ul className="fish">
      <li className="fish__item">
        Порода: Вуалевый Вишневый барбус - Barbus titteya longtail
      </li>
      <li className="fish__item">Дата рождения: 05.12.2021</li>
      <li className="fish__item">
        Контакты:{" "}
        <a href="mailto: barboska21@gmail.com">barboska21@gmail.com</a>
      </li>
    </ul>
  );
};

const Skills = () => {
  return (
    <ul className="skill">
      <li className="skill__item"> Плавать влево</li>
      <li className="skill__item"> Плавать вправо</li>
      <li className="skill__item"> Пожирать корм</li>
      <li className="skill__item"> Выпрыгивать из воды</li>
      <li className="skill__item"> Нырять</li>
    </ul>
  );
};

const Describe = () => {
  return (
    <>
      <p>
        Характеристики: довольно миролюбивая рыбка, неплохо уживаюсь со многими
        другими видами, ярко окрашена и небольшого размера, очень
        нетребовательна и неприхотлива, без лишней скромности:{" "}
        <b>одна из наиболее популярных аквариумных рыб.</b>
      </p>
      <p>
        Предыдущее место работы: зоомагазин{" "}
        <a href="https://exoticzoo.com.ua/" target="_blank">
          Exoticzoo
        </a>
      </p>
      <p>Основные способности: </p> {Skills()}
      <p>
        Ожидания: предпочтительнее работа в прямоугольном аквариуме, прикрытым
        сверху, с достаточным количеством свободного места для плавания.
        Каръерный рост с возможностью релокации в более крупный аквариум -
        приветствуется.
      </p>
      <Joke></Joke>
    </>
  );
};

export { Fish, Describe };
