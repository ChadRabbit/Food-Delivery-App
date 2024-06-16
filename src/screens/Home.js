import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Carousel></Carousel></div>
      <div className="m-3">
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
