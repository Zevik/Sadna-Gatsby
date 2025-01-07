import React from "react";
import { Link } from "gatsby";
import "../styles/styles.css";

const IndexPage = () => (
  <div dir="rtl">
    <header>
      <img src="/title.png" alt="אומנות השחרור" className="header-image" />
      <div className="intro-text typing-effect">
        <p>הגיע הזמן לנפץ פרות קדושות...</p>
        <p>אני מזמין אותך לסדנה ייחודית, שפיתחתי בשנים האחרונות;</p>
        <p>נפגוש את המקומות הכי עמוקים בנפש, נתעורר בלייב טראנס,</p>
        <p>נכיל ונלעס את ההפכים שבתוכנו, נשיר תפילה,</p>
        <p>נתרגל יחד, נשתחרר, ונצחק עד שיכאב.</p>
      </div>
    </header>
    
    <main>
      <section className="info-cards">
        <div className="info-card">
          <h3>על הסדנה</h3>
          <p>סדנה מעשית ומעמיקה המשלבת תרגול, למידה והתנסות אישית. נלמד טכניקות מעשיות לשחרור והתפתחות אישית.</p>
        </div>
        <div className="info-card">
          <h3>למי מיועד</h3>
          <p>הסדנה מתאימה לכל מי שמעוניין להעמיק בתהליכי שחרור ולפתח כלים מעשיים להתמודדות עם אתגרי החיים.</p>
        </div>
        <div className="info-card">
          <h3>מה נלמד</h3>
          <p>טכניקות מעשיות לשחרור, תרגילי נשימה והרפיה, כלים להתמודדות עם מתח וחרדה, ושיטות לפיתוח מודעות עצמית.</p>
        </div>
      </section>

      <section className="workshop-details">
        <h2 className="section-title">מה בסדנה</h2>
        <div className="techniques-circle">
          <div className="center-title">
            <h3>מה בסדנה</h3>
          </div>
          <div className="techniques-items">
            <div className="technique-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>תקשורת בלתי אמצעית</h3>
                </div>
                <div className="card-back">
                  <p>דימויים ואילתור לשחרור והתחדשות</p>
                </div>
              </div>
            </div>
            <div className="technique-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>שירת תפילה</h3>
                </div>
                <div className="card-back">
                  <p>שירה כדרך להתחבר לרוח ולנפש</p>
                </div>
              </div>
            </div>
            <div className="technique-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>תרגילי נשימה</h3>
                </div>
                <div className="card-back">
                  <p>תרגילים לשחרור והרפיה</p>
                </div>
              </div>
            </div>
            <div className="technique-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>מדיטציה ודמיון מודרך</h3>
                </div>
                <div className="card-back">
                  <p>שיטות להרגעת הנפש והגוף</p>
                </div>
              </div>
            </div>
            <div className="technique-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>לייב טראנס</h3>
                </div>
                <div className="card-back">
                  <p>שחרור הורמונלי במוח</p>
                </div>
              </div>
            </div>
            <div className="technique-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>פריקת מתחים</h3>
                </div>
                <div className="card-back">
                  <p>עם תנועה, קול וצחוק</p>
                </div>
              </div>
            </div>
            <div className="technique-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>מעגלי שיתוף ושיח</h3>
                </div>
                <div className="card-back">
                  <p>שיתוף ושיח בקבוצה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <video controls>
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="price-section">
        <h2 className="section-title">עלות הסדנה</h2>
        <div className="price-container">
          <div className="price-card">
            <div className="price-tag">
              <strong>1,080 ש"ח</strong>
            </div>
            <p className="price-note">ניתן לחלק לתשלומים</p>
          </div>
        </div>
      </section>

      <section className="registration">
        <div className="contact-info">
          <p>לפרטים נוספים ולהרשמה</p>
          <p><a href="tel:052-6518168" className="phone-link">052-6518168</a></p>
          <p>מחכה לראות אותך</p>
        </div>
      </section>

      <section className="important-notes">
        <div className="notes-container">
          <div className="note-card disclaimer">
            <h3>הבהרה חשובה</h3>
            <p>הסדנה אינה מחליפה טיפול נפשי, וחשוב לציין כי מאיר אבינר אינו מטפל רגשי בהכשרתו.</p>
          </div>
          <div className="note-card cancellation">
            <h3>מדיניות ביטולים</h3>
            <p>ניתן לבטל השתתפות עד 14 ימים לפני תחילת הסדנה, בהחזר מלא.</p>
          </div>
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
