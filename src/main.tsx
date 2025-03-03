import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmmanuelCaseStudy from "./views/caseStudy/EmmanuelCase.tsx";

// NEED TO STILL HANDLE A 404 PAGE
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/cases/emmanuel-church-of-philadelphia",
        element: <EmmanuelCaseStudy />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
