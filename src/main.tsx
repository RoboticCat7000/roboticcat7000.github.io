import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "@/components/ui/provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "@/components/Navbar.tsx";
import HomePage from "@/pages/home/HomePage.tsx";
import ProjectsPage from "@/pages/projects/ProjectsPage.tsx";
import CatsPage from "@/pages/cats/CatsPage.tsx";
import Header from "@/components/Header.tsx";
import { Center, VStack } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Center>
          <VStack gap="10">
            <Header />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/cats" element={<CatsPage />} />
            </Routes>
          </VStack>
        </Center>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);