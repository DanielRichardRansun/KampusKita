import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li className="slide">
            <div className="user-info">
              <img src={user_1} alt="Pengguna 1" />
              <div>
                <h3>Andi Pratama</h3>
                <span>Kecamatan Beji, Depok</span>
              </div>
            </div>
            <p>
              "Saya sangat terbantu dengan fasilitas di kampus ini. Aksesnya
              cepat dan mudah digunakan. Saya merekomendasikan kepada
              teman-teman saya!"
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_2} alt="Pengguna 2" />
              <div>
                <h3>Siti Nurhaliza</h3>
                <span>Kecamatan Gubeng, Surabaya</span>
              </div>
            </div>
            <p>
              "Universitas ini sangat indah, suasanya sejuk dan banyak tempat
              yang nyaman untuk belajar bersama teman-teman."
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_3} alt="Pengguna 3" />
              <div>
                <h3>Rahmat Santoso</h3>
                <span>Kecamatan Serpong, Tangerang Selatan</span>
              </div>
            </div>
            <p>
              "Pengalaman saya masuk di universitas ini sangat memuaskan.
              Fasilitas-fasilitas yang ada sangat lengkap dan mudah digunakan."
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user_4} alt="Pengguna 4" />
              <div>
                <h3>Lina Kusuma</h3>
                <span>Kecamatan Cicendo, Bandung</span>
              </div>
            </div>
            <p>
              "Kampus ini benar-benar membantu saya dalam menuntut dan belajar
              ilmu baru. Dosennya sangat seru dan menyenangkan."
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
