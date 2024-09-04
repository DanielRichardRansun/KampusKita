import React, { useState } from "react";
import "./Campus.css";
import gallery_1 from "../../assets/Gallery-1.jpg";
import gallery_2 from "../../assets/Gallery-2.jpg";
import gallery_3 from "../../assets/Gallery-3.jpg";
import gallery_4 from "../../assets/Gallery-4.jpg";
import gallery_5 from "../../assets/Gallery-5.png";
import gallery_6 from "../../assets/Gallery-6.jpg";
import gallery_7 from "../../assets/Gallery-7.jpg";
import gallery_8 from "../../assets/Gallery-8.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
  ];

  const visibleImages = showAll ? images : images.slice(0, 4);

  return (
    <div className="campus">
      <div className="gallery">
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
      {!showAll && (
        <button className="btn dark-btn" onClick={() => setShowAll(true)}>
          Lihat Lebih Banyak <img src={white_arrow} alt="" />
        </button>
      )}
    </div>
  );
};

export default Campus;
