import { useEffect, useState } from "react";

export default function useItemData() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("server error");
        }
        const data = await response.json();
        const trimmedData = data.products.slice(0, 20);
        setItems(trimmedData);
      })();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { items, error, loading };
}
