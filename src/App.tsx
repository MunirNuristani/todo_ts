import React from "react";
import AppRoutes from './routes/routes'
import Layout from "./components/layout/Layout";


import "./app.css"
type Props = {};

const App = (props: Props) => {
  return (
    <div className="App">
        <Layout>
          <AppRoutes />
        </Layout>
    </div>
  );
};

export default App;
