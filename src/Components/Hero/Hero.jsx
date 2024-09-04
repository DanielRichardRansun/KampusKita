import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Mencetak Pemimpin Masa Depan untuk Hari Esok yang Lebih Cerah</h1>
        <p>
          Program inovatif kami dirancang untuk membekali mahasiswa dengan
          keahlian, kreativitas, dan ketangguhan yang diperlukan untuk sukses di
          dunia pendidikan yang terus berkembang.
        </p>
        <Link to="contact" smooth={true} offset={-230} duration={500}>
          <button className="btn">
            Daftarkan diri anda
            <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
