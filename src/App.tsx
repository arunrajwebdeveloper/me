import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./page/HomePage"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <HomePage />
    </Suspense>
  );
}

export default App;
