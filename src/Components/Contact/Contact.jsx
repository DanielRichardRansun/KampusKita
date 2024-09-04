import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  //Mengirim form ke richardgtwo@gmail.com
  //API diambil dari Web3forms, serta code javascriptnya di docs/Js Framework/ReactJs/simple react contact form. Copy bagian tertentu dan ganti API
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "11e1c9c8-02c7-4db1-89ea-8ad71c49a422");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Kirimkan pesan kepada kami <img src={msg_icon} alt="Ikon Pesan" />{" "}
        </h3>
        <p>
          Jika Anda memiliki pertanyaan, saran, atau membutuhkan bantuan lebih
          lanjut, jangan ragu untuk menghubungi kami. Kami siap membantu Anda
          dengan segala kebutuhan Anda. Silakan kirim pesan melalui formulir di
          bawah ini atau hubungi kami melalui informasi kontak yang tersedia.
          Kami akan segera merespon pesan Anda.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="" />
            KampusKami@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            08990899432
          </li>
          <li>
            <img src={location_icon} alt="" />
            Palem Watu BL26/A Menganti, Gresik <br /> 696009, Indonesia
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
