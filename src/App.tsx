import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import BookCruisePage from "./pages/BookCruise";
import MenusPage from "./pages/Menus";
import PrivateEventsPage from "./pages/PrivateEvents";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "blog", element: <BlogPage /> },
        { path: "book-a-cruise", element: <BookCruisePage /> },
        { path: "menus", element: <MenusPage /> },
        { path: "private-events", element: <PrivateEventsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
