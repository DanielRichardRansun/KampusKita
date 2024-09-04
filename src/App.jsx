import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero.Jsx";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  //function untuk video
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="PROGRAM KAMI" title="Apa yang Kami Tawarkan? " />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="GALERI" title="Foto Kampus" />
        <Campus />
        <Title subTitle="TESTIMONIAL" title="Apa Kata Mahasiswa" />
        <Testimonials />
        <Title subTitle="HUBUNGI KAMI" title="Hubungi Kami" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
