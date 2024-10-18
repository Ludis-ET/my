import "./App.css";
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";
import { getData } from "./db/db";

const foods = getData();

function App() {
  return (
    <>
      <Button title={"Test"} disabled={false} type={"add"} />
      <Button title={"Test"} disabled={false} type={"remove"} />
      <Button title={"Test"} disabled={false} type={"checkout"} />
      <div className="cards__container">
        {foods.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </div>
    </>
  );
}

export default App;
