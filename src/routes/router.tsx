import { createBrowserRouter, Navigate } from "react-router-dom";
import Courses from "../pages/Courses";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/courses" replace /> },
  { path: "/courses", element: <Courses /> },

  // These no longer open separate pages — they just redirect into the
  // single Courses page, scrolled to the right section.

  
  { path: "/ielts", element: <Navigate to="/courses#ielts" replace /> },
  { path: "/pte", element: <Navigate to="/courses#pte" replace /> },
  { path: "/toefl", element: <Navigate to="/courses#toefl" replace /> },
  { path: "/gre", element: <Navigate to="/courses#gre" replace /> },

  { path: "*", element: <Navigate to="/courses" replace /> },
]);

export default router;