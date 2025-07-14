import React, { useEffect, useState } from "react";
import "./index.css";
import profileImage from "./assets/image.jpg"; // ✅ Correct way to import an image

export default function DeepakWadhwaPage() {
  const [secondsLeft, setSecondsLeft] = useState(15);
  const telegramLink = "https://t.me/+fnxJ4ZWhkAZkZmNl"; // Replace with your real Telegram link

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

        <h1 className="page-heading">👑PANKAJ BHARDWAJ OFFICIAL👑</h1>

        <a href={telegramLink} className="telegram-button">
          JOIN NOW FREE TELEGRAM 🚀
        </a>

        <div className="info-box">
          <p className="info-title">🔥100% Guaranteed Profit🔥</p>
          <p>
            🚀 Daily 8 to 10 Quotex Signals<br />
            💬 Full Support and Guidance<br />
            💰 No Loss only profit 🏆
          </p>
        </div>

        <div className="try-button">TRY NOW FREE 🚀</div>

        <div className="offer-bar">
          Limited Time Offer 00:00:{secondsLeft.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
