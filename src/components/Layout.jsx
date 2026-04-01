import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import useItemData from "../hooks/useItemData";
import { useState } from "react";

export default function Layout() {
  const { items, error, loading } = useItemData();
  const [idsInCart, setIdsInCart] = useState([]);

  function handleAdd(id, quantity = 1) {
    let newIdsInCart = [...idsInCart];
    for (let i = 0; i < quantity; i++) {
      newIdsInCart.push(id);
    }
    newIdsInCart.sort();
    setIdsInCart(newIdsInCart);
  }

  function handleRemoveOne(targetId) {
    let index = idsInCart.indexOf(targetId);
    let newIdsInCart = idsInCart.toSpliced(index, 1).sort();
    setIdsInCart(newIdsInCart);
  }

  function handleDelete(targetId) {
    let newIdsInCart = idsInCart.filter((id) => id !== targetId).sort();
    setIdsInCart(newIdsInCart);
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet
          context={[items, handleAdd, handleRemoveOne, handleDelete, idsInCart]}
        />
      </main>
    </>
  );
}
