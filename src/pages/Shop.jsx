import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [items] = useOutletContext();

  return <div>{items && items.map((item) => <div>{item.id}</div>)}</div>;
}
