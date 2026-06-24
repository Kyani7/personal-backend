<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
>>>>>>> d9b4c14 (OurService)
  <StrictMode>
    <App />
  </StrictMode>,
);
