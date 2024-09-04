import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" alt="" />
        <img
          src={play_icon}
          className="play-icon"
          alt=""
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>TENTANG KAMPUS</h3>
        <h2>Membina dan Mendidik Pemimpin Masa Depan.</h2>
        <p>
          KampusKita berkomitmen untuk mendidik generasi penerus yang siap
          menghadapi tantangan global. Melalui kurikulum yang inovatif dan
          lingkungan belajar yang inspiratif, kami membantu mahasiswa
          mengembangkan potensi terbaik mereka.
        </p>
        <p>
          Dengan fasilitas modern dan dukungan dari para ahli di bidangnya, kami
          menyediakan pengalaman pendidikan yang menyeluruh. Di KampusKita,
          mahasiswa didorong untuk berkreasi, berinovasi, dan menjadi agen
          perubahan bagi masyarakat.
        </p>
      </div>
    </div>
  );
};

export default About;
