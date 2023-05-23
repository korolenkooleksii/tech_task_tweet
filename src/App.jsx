import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

const NotFound = lazy(() =>
  import("./pages/NotFound").then((res) => ({
    default: res.NotFound,
  }))
);

const HomePage = lazy(() =>
  import("./pages/HomePage").then((res) => ({
    default: res.HomePage,
  }))
);

const TweetsPage = lazy(() =>
  import("./pages/TweetsPage").then((res) => ({
    default: res.TweetsPage,
  }))
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
};

export default App;
