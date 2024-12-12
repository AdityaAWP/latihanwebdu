import React from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Jumbotron />
      <Card />
    </Layout>
  );
};

export default HomePage;
