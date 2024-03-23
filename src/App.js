import {MyButton} from "./components/MyButton/MyButton";
import {MyCard} from "./components/MyCard/MyCard";

function App() {
  return (
    <div className="App" style={{maxWidth: '1000px', margin: '0 auto'}}>
      <div>
        <MyButton>Моя кнопка</MyButton>
      </div>

      <MyCard
          title="Кликни для разворота"
          expanded={false}
          type="secondary"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consectetur cum dignissimos fuga ipsum quos sequi voluptate. Aspernatur, atque debitis fuga libero odit reiciendis sint totam ut velit voluptatibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ut!
      </MyCard>
    </div>
  );
}

export default App;
