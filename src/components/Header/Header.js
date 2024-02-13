import Styles from './header.module.css';

function Header() {
  return (
    <header className={Styles.header}>
        <a href="">Ссылка 1</a>
        <a href="">Ссылка 2</a>
        <a href="">Ссылка 3</a>
        <a href="">Ссылка 4</a>
    </header>
  );
}

export default Header;
