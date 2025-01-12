import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import "../styles/styles.css";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <p>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.2,
            ease: "easeOut"
          }}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

const IndexPage = () => (
  <div dir="rtl">
    <header>
      <StaticImage
        src="../images/title.png"
        alt="אומנות השחרור"
        placeholder="blurred"
        layout="constrained"
        className="header-image"
        width={800}
        quality={95}
      />
      <div className="intro-text">
        <AnimatedText text="זה הזמן לשחרר את עצמך אפילו יותר, ולהרגיש את זרם החיים שפועם לך בגוף" />
        <AnimatedText text="בסדרת המפגשים עם מאיר אבינר." />
        <AnimatedText text="אני מזמין אותך לגילוי עצמי דרך הניגון:" />
        <AnimatedText text="נרגיש מקומות עמוקים בנפש, נתעורר בלייב טראנס," />
        <AnimatedText text="נכיל ונלעס את ההפכים שבתוכנו, ננפץ פרות קדושות, נתפלל יחד," />
        <AnimatedText text="נבטא ונשוחרר, נצחק עד שיכאב." />
      </div>
    </header>
    
    <main>
      <section className="info-cards additional-cards">
        <div className="info-card">
          <h3>תקשורת בלתי אמצעית</h3>
          <p>ג'בריש ואילתור לשחרור והתחדשות</p>
        </div>
        <div className="info-card">
          <h3>שירת תפילה</h3>
          <p>שירה כדרך להתחבר לרוח ולנפש</p>
        </div>
        <div className="info-card">
          <h3>תרגילי נשימה</h3>
          <p>תרגילים לשחרור והרפיה</p>
        </div>
        <div className="info-card">
          <h3>מדיטציה ודמיון מודרך</h3>
          <p>שיטות להרגעת הנפש והגוף</p>
        </div>
        <div className="info-card">
          <h3>לייב טראנס</h3>
          <p>שחרור הורמונלי במוח</p>
        </div>
        <div className="info-card">
          <h3>פריקת מתחים</h3>
          <p>עם תנועה, קול וצחוק</p>
        </div>
        <div className="info-card">
          <h3>מעגלי שיתוף ושיח</h3>
          <p>שיתוף ושיח בקבוצה</p>
        </div>
      </section>

      <section className="video-section">
        <video controls>
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="price-section">
        <div className="price-container">
          <div className="profile-image">
            <img src="/image.jpeg" alt="תמונת פרופיל" />
          </div>
          <div className="price-card">
            <div className="sessions-info">
              <p>סדרה של ארבעה מפגשים</p>
              <p>כל מפגש שלוש שעות</p>
            </div>
            <div className="price-tag">
              <strong>650 ש"ח</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="registration">
        <div className="contact-info">
          <p>לפרטים נוספים ולהרשמה</p>
          <p><a href="tel:052-6518168" className="phone-link">052-6518168</a></p>
          <p>מחכה לראות אותך</p>
        </div>
        <div className="disclaimer-small">
          <p>הסדנה אינה מחליפה טיפול נפשי, וחשוב לציין כי מאיר אבינר אינו מטפל רגשי בהכשרתו.</p>
        </div>
      </section>

    </main>

    <footer>
      <div className="social-links">
        <a href="https://www.facebook.com/meir.hatov" className="social-link" target="_blank" rel="noopener">פייסבוק</a>
        <a href="https://www.instagram.com/meiraviner/" className="social-link" target="_blank" rel="noopener">אינסטגרם</a>
        <a href="https://www.youtube.com/@hila454/" className="social-link" target="_blank" rel="noopener">יוטיוב</a>
      </div>
      <div className="copyright">
        <p>כל הזכויות שמורות לזאביק אבינר</p>
        <a href="https://wa.me/972546609385" className="whatsapp-link">וואטסאפ: 054-6609385</a>
      </div>
    </footer>
  </div>
);

export default IndexPage;