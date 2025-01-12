import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion"; // Ensure this import is necessary
import "../styles/styles.css";

// רכיב חדש שמציג כל אות בטקסט עם אנימציה של כניסה חלקה
const AnimatedLines = ({ lines }) => {
  return (
    <div>
      {lines.map((line, i) => (
        <p key={i} style={{ margin: "1rem 0" }}>
          {line.split("").map((char, j) => (
            <motion.span
              key={j}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.3 + j * 0.05,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </p>
      ))}
    </div>
  );
};

const IndexPage = () => (
  <div dir="rtl">
    <header>
      <img 
        src="/images/title.png" 
        alt="אומנות השחרור" 
        className="header-image"
      />
      <div className="intro-text">
        <AnimatedLines
          lines={[
            "זה הזמן לשחרר את עצמך אפילו יותר,",
            "ולהרגיש את זרם החיים שפועם לך בגוף",
            "בסדרת המפגשים עם מאיר אבינר.",
            "אני מזמין אותך לגילוי עצמי דרך הניגון:",
            "נרגיש מקומות עמוקים בנפש, נתעורר בלייב טראנס,",
            "נכיל ונלעס את ההפכים שבתוכנו, ננפץ פרות קדושות, נתפלל יחד,",
            "נבטא ונשחרר, נצחק עד שיכאב.",
          ]}
        />
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
          <source src="/images/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="price-section">
        <div className="price-container">
          <div className="profile-image">
            <img src="/images/image.jpeg" alt="תמונת פרופיל" />
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