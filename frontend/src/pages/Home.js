import React,{ useEffect, useState} from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import CartDrawer from "../components/CartDrawer";
import "../styles/home.css";

function Home() {
  const [menu, setMenu] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const { data } =
        await API.get("/api/menu");

      setMenu(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar
        setShowCart={setShowCart}
      />

      {showCart && (
        <CartDrawer
          setShowCart={setShowCart}
        />
      )}

      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">
            Delicious Food Delivered Fast
          </h1>

          <p className="hero-subtitle">
            Fresh meals at your doorstep
          </p>
        </div>

        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="menu-grid">
            {menu.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;