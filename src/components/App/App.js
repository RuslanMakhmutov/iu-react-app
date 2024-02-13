import Styles from './app.module.css';
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className={Styles.wrapper}>
      <h1>Я реакт приложение</h1>
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
