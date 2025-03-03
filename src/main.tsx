import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmmanuelCaseStudy from "./views/caseStudy/EmmanuelCase.tsx";
import AlibiEsportsCaseStudy from "./views/caseStudy/AlibiEsportsCase.tsx";
import MpcCaseStudy from "./views/caseStudy/MpcCase.tsx";
import PortfolioV2CaseStudy from "./views/caseStudy/PortfolioV2Case.tsx";
import PortfolioV1CaseStudy from "./views/caseStudy/PortfolioV1Case.tsx";
import PeakFitnessCaseStudy from "./views/caseStudy/PeakFitnessCase.tsx";
import PortfolioV3CaseStudy from "./views/caseStudy/PortfolioV3Case.tsx";

// NEED TO STILL HANDLE A 404 PAGE
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/cases/portfolio-v3",
        element: <PortfolioV3CaseStudy />,
    },
    {
        path: "/cases/montgomery-presbyterian-church",
        element: <MpcCaseStudy />,
    },
    {
        path: "/cases/emmanuel-church-of-philadelphia",
        element: <EmmanuelCaseStudy />,
    },
    {
        path: "/cases/portfolio-v2",
        element: <PortfolioV2CaseStudy />,
    },
    {
        path: "/cases/portfolio-v1",
        element: <PortfolioV1CaseStudy />,
    },
    {
        path: "/cases/alibi-esports",
        element: <AlibiEsportsCaseStudy />,
    },
    {
        path: "/cases/peak-fitness",
        element: <PeakFitnessCaseStudy />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
