import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import BookCruisePage from "./pages/BookCruise";
import MenusPage from "./pages/Menus";
import PrivateEventsPage, { privateEventsLoader } from "./pages/PrivateEvents";
import BusinessEventsPage from "./pages/BusinessEvents";
import RoutePage from "./pages/Route";
import GalleryPage from "./pages/Gallery";
import GalleryDetailPage, { galleryDetailLoader } from "./pages/GalleryDetail";
import BlogDetailPage, { blogLoader } from "./pages/BlogDetail";
import TidalTrekContextProvider from "../store/contextProvider";
import Valentine from "./pages/Valentine";
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
        { path: "valentines-cruise", element: <Valentine /> },
        {
          path: "private-events",
          element: <PrivateEventsPage />,
          loader: privateEventsLoader,
        },
        { path: "business-events", element: <BusinessEventsPage /> },
        { path: "route", element: <RoutePage /> },
        {
          path: "gallery",
          children: [{ index: true, element: <GalleryPage /> }],
        },
      ],
    },
    {
      path: "/gallery/:galleryId",
      element: <GalleryDetailPage />,
      errorElement: <ErrorPage />,
      loader: galleryDetailLoader,
    },
    {
      path: "/blog/:blogId",
      element: <BlogDetailPage />,
      errorElement: <ErrorPage />,
      loader: blogLoader,
    },
  ]);
  return (
    <TidalTrekContextProvider>
      <RouterProvider router={router} />
    </TidalTrekContextProvider>
  );
}

export default App;
