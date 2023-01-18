import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main";
import Shop from "./pages/Shop/Shop";
import Learn from "./pages/Learn/Learn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "shop/:productId",
    element: <Shop />,
  },
  {
    path: "learn/:productId",
    element: <Learn />,
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <title>FE Test Task</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
