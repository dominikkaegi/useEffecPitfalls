import { useEffect, useState } from "react";
import {fetchPokemons, Pokemon} from "./fetchPokemonsProducts";
import {logValue} from "./log";

export function EffectNoCleanup() {
  const [state, setState] = useState<"shop-now" | "products">("shop-now");
  return (
    <div className="App">
      <h1>Effect Nooo Cleanup 🚨</h1>
      <div>
        <button onClick={() => setState("shop-now")}>Shop Now</button>
        <button onClick={() => setState("products")}>Products</button>
      </div>
      {state === "shop-now" ? <ShopNow /> : null}
      {state === "products" ? <Products /> : null}
    </div>
  );
}

const Products = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {

    fetchPokemons()
      .then((p) => {
        logValue('setting pokemons')
        setPokemons(p)
      })

  }, [setPokemons]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {pokemons.map((item) => (
          <li key={item.url}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const ShopNow = () => {
  return (
    <div>
      <h2>Shop now with 10% Discount on all our products</h2>
      <div>💯💯💯💯💯💯</div>
    </div>
  );
};
