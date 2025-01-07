import React from "react";
import { Link } from "gatsby";

const NewPage = () => (
  <div dir="rtl">
    <h1>דף חדש</h1>
    <p>ברוכים הבאים לדף החדש שלכם ב-Gatsby.</p>
    <Link to="/">חזרה לדף הבית</Link>
  </div>
);

export default NewPage;
