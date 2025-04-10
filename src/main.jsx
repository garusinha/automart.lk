import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { ClerkProvider } from "@clerk/clerk-react";
import Profile from "./profile";
import AddListing from "./add-listing";

// Optional: 404 Page
const NotFound = () => <div>404 - Page Not Found</div>;

const router = createBrowserRouter([
  {
    path: "/automart.lk/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/automart.lk/profile",
    element: <Profile />,
    errorElement: <NotFound />,
  },
  {
    path: "automart.lk/add-listing",
    element: <AddListing />,
    errorElement: <NotFound />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
