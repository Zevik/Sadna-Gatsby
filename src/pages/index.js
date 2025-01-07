import React from "react";
import { Link } from "gatsby";
import "../styles/styles.css";

const IndexPage = () => (
  <div>
    <header>
      <img src="/title.png" alt="אומנות השחרור" class="header-image" />
      <div class="intro-text typing-effect">
        <p>הגיע הזמן לנפץ פרות קדושות...</p>
        <p>אני מזמין אותך לסדנה ייחודית, שפיתחתי בשנים האחרונות;</p>
        <p>נפגוש את המקומות הכי עמוקים בנפש, נתעורר בלייב טראנס,</p>
        <p>נכיל ונלעס את ההפכים שבתוכנו, נשיר תפילה,</p>
        <p>נתרגל יחד, נשתחרר, ונצחק עד שיכאב.</p>
      </div>
    </header>
    
    <main>
      <section class="info-cards">
        <div class="info-card">
          <h3>על הסדנה</h3>
          <p>סדנה מעשית ומעמיקה המשלבת תרגול, למידה והתנסות אישית. נלמד טכניקות מעשיות לשחרור והתפתחות אישית.</p>
        </div>
        <div class="info-card">
          <h3>למי מיועד</h3>
          <p>הסדנה מתאימה לכל מי שמעוניין להעמיק בתהליכי שחרור ולפתח כלים מעשיים להתמודדות עם אתגרי החיים.</p>
        </div>
        <div class="info-card">
          <h3>מה נלמד</h3>
          <p>טכניקות מעשיות לשחרור, תרגילי נשימה והרפיה, כלים להתמודדות עם מתח וחרדה, ושיטות לפיתוח מודעות עצמית.</p>
        </div>
      </section>

      <section class="workshop-details">
        <h2 class="section-title">מה בסדנה</h2>
        <div class="details-container">
          <div class="techniques-list">
            <h3>טכניקות ושיטות עבודה</h3>
            <div class="info-cards">
              <div class="info-card">
                <h3>תקשורת בלתי אמצעית, דימויים ואילתור</h3>
              </div>
              <div class="info-card">
                <h3>שירת תפילה</h3>
              </div>
              <div class="info-card">
                <h3>תרגילי נשימה</h3>
              </div>
              <div class="info-card">
                <h3>מדיטציה ודמיון מודרך</h3>
              </div>
              <div class="info-card">
                <h3>לייב טראנס לשחרור הורמונלי במוח</h3>
              </div>
              <div class="info-card">
                <h3>פריקת מתחים עם תנועה, קול וצחוק</h3>
              </div>
              <div class="info-card">
                <h3>מעגלי שיתוף ושיח</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="video-section">
        <video controls>
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section class="price-section">
        <h2 class="section-title">עלות הסדנה</h2>
        <div class="price-container">
          <div class="price-card">
            <div class="price-tag">
              <strong>1,080 ש"ח</strong>
            </div>
            <p class="price-note">ניתן לחלק לתשלומים</p>
          </div>
        </div>
      </section>

      <section class="registration">
        <div class="contact-info">
          <p>לפרטים נוספים ולהרשמה</p>
          <p><a href="tel:052-6518168" class="phone-link">052-6518168</a></p>
          <p>מחכה לראות אותך</p>
        </div>
      </section>

      <section class="important-notes">
        <div class="notes-container">
          <div class="note-card disclaimer">
            <h3>הבהרה חשובה</h3>
            <p>הסדנה אינה מחליפה טיפול נפשי, וחשוב לציין כי מאיר אבינר אינו מטפל רגשי בהכשרתו.</p>
          </div>
          <div class="note-card cancellation">
            <h3>מדיניות ביטולים</h3>
            <p>ניתן לבטל השתתפות עד 14 ימים לפני תחילת הסדנה, בהחזר מלא.</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="social-links">
        <a href="https://www.facebook.com/meir.hatov" class="social-link" target="_blank" rel="noopener">פייסבוק</a>
        <a href="https://www.instagram.com/meiraviner/" class="social-link" target="_blank" rel="noopener">אינסטגרם</a>
        <a href="https://www.youtube.com/@hila454/" class="social-link" target="_blank" rel="noopener">יוטיוב</a>
      </div>
      <div class="copyright">
        <p>כל הזכויות שמורות לזאביק אבינר</p>
        <a href="https://wa.me/972546609385" class="whatsapp-link">וואטסאפ: 054-6609385</a>
      </div>
    </footer>
  </div>
);

export default IndexPage;
