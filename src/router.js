import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import { cheeseLoader, oneCheeseLoader } from "./loaders";
import { createAction, updateAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={cheeseLoader} />
      <Route path=":id" element={<Show />} loader={oneCheeseLoader} />
      <Route path="create" action={createAction} />
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" />
    </Route>
  )
);

export default router;
