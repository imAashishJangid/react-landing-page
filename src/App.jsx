import React, { useEffect, useState } from "react";
import "./index.css";
import profileImage from "./assets/image.jpeg"; // ✅ Correct way to import an image

export default function DeepakWadhwaPage() {
  const [secondsLeft, setSecondsLeft] = useState(15);
  const telegramLink = "https://sara777matka.co/download"; // Replace with your real Telegram link

  useEffect(() => {
    if (secondsLeft === 0) {
      window.location.href = telegramLink;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="image-container">
          <img
            src={profileImage} // ✅ using the imported image
            alt="Pankaj Bhardwaj"
            className="profile-image"
          />
        </div>

        <h1 className="page-heading">Sara777</h1>

        <a href={telegramLink} className="telegram-button">
          ⬇️ Download Now
        </a>

        <div className="info-box">
          <p className="info-title">🔥100% Guaranteed Profit🔥</p>
          <p>
            📈🟠 MINIMUM DEPOSIT - ₹300 <br/>
            🎯🟠 MINIMUM WITHDRAWAL - ₹1000  <br/>
            ✅Fast results update  <br/>
            🔴All Market Games🎮 available  <br/>
            🎰Safe & Secure Platform💯  <br/>
             ☑ Automatically Deposit & Withdrawal <br/>
            👇 <br/>
           
             
            
          </p>
        </div>

        <a href={telegramLink} className="try-button">
  TRY NOW FREE 🚀
</a>


        <div className="offer-bar">
          Limited Time Offer 00:00:{secondsLeft.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
