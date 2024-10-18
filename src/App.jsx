import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/card/Card";
import { Cart } from "./components/cart/Cart";
import { getData } from "./db/db";
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (tele) {
      console.log("Telegram WebApp initialized:", tele);
      tele.ready();

      // Fetch user data from Telegram WebApp
      const initDataUnsafe = tele.initDataUnsafe;
      if (initDataUnsafe.user) {
        const user = {
          id: initDataUnsafe.user.id,
          first_name: initDataUnsafe.user.first_name,
          username: initDataUnsafe.user.username,
          phone_number: initDataUnsafe.user.phone_number, // If available
        };

        console.log("User data:", user);
        setUserData(user);
      }
    }
  }, []);

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Order Food</h1>

      {userData ? (
        <p>
          Welcome {userData.first_name} (@{userData.username})!{" "}
          {userData.phone_number && `Phone: ${userData.phone_number}`}
        </p>
      ) : (
        <p>Loading user data...</p>
      )}

      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
