import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import useItemData from "../hooks/useItemData";
import { useState } from "react";

export default function Layout() {
  const { items, error, loading } = useItemData();
  const [idsInCart, setIdsInCart] = useState([]);

  console.log(idsInCart);

  function handleAdd(id, quantity) {
    let newIdsInCart = [...idsInCart];
    for (let i = 0; i < quantity; i++) {
      newIdsInCart.push(id);
    }
    setIdsInCart(newIdsInCart);
  }

  function handleRemove(id) {
    let newIdsInCart = idsInCart.filter(
      (item) => item !== idsInCart.find((item) => item.id === id),
    );
    setIdsInCart(newIdsInCart);
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet context={[items, handleAdd, handleRemove]} />
      </main>
    </>
  );
}
