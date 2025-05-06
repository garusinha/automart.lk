import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { ClerkProvider } from "@clerk/clerk-react";
import Profile from "./profile";
import AddListing from "./add-listing/index";
import { Toaster } from "sonner";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignIn } from "@clerk/clerk-react";
import SearchByCategory from "./search/[category]";
import SearchByOptions from "./search";
import ListingDetail from "./listing-details/[id]";

// Optional: 404 Page
const NotFound = () => <div>404 - Page Not Found</div>;

const router = createBrowserRouter([
  {
    path: "/automart.lk/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/automart.lk/sign-in",
    element: <SignIn />,
  },
  {
    path: "/automart.lk/profile",
    element: <Profile />,
    errorElement: <NotFound />,
  },
  {
    path: "/automart.lk/add-listing",
    element: <AddListing />,
    errorElement: <NotFound />,
  },
  {
    path: "/automart.lk/search",
    element: <SearchByOptions />,
  },
  {
    path: "/automart.lk/search/:category",
    element: <SearchByCategory />,
  },
  {
    path: "/automart.lk/listing-details/:id",
    element: <ListingDetail />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
// console.log("Clerk Publishable Key:", PUBLISHABLE_KEY);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      telemetry={false}
    >
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
