import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
];

export default routes;
