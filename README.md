# Aziz Academy (عزیز اکیڈمی) - Official Website

Aik modern, khoobsurat aur mukammal educational website jo **Aziz Academy** ke liye banayi gayi hai. Is website par students aur parents ke liye tamam zaroori features mojood hain.

---

## 🌟 Key Features (Ahem Khusosiyat)

1. **Attractive Hero & Branding**:
   - Admissions Open 2026-2027 banner, live scrolling ticker, aur statistics badges (98.5% Board Success Rate, 15+ years experience, 5000+ alumni).
   - Academic crest logo, deep academic blue & gold styling.

2. **Programs & Courses Catalog**:
   - Filterable tabs: **Matric (9th & 10th Science)**, **Intermediate (FSc Pre-Med, Pre-Eng, ICS)**, **Entry Tests (MDCAT, ECAT, NUST)**, aur **Skill Courses (Spoken English, IT & Python Bootcamp)**.
   - Har course ke liye **"View Syllabus"** popup modal jis mein subjects, features aur timing ki tafseel hai.

3. **Online Admission Form & Printable Slip**:
   - Complete online registration form with student details, course selection, and shift preferences.
   - Form submit hote hi unique Application Token ID (e.g. `AZ-2026-8492`) generate hota hai.
   - Foran **Official Printable Admission Slip** display hoti hai jise student **"Print Admission Slip"** dabakar print ya PDF save kar sakta hai!
   - Submitted applications browser ke `localStorage` mein mehfooz ho jaati hain.

4. **Interactive Fee & Merit Scholarship Calculator**:
   - Class aur shift select karein.
   - Apne previous board exam ke percentage marks daalein (70% se 95%+).
   - Instant calculation: Base fee, merit scholarship discount amount, Sunday grand test session, aur final monthly payable!

5. **Board Toppers & Hall of Fame**:
   - Position holders aur high achievers ki showcase (Marks, Board percentage, aur student reviews).

6. **Campus Facilities & Photo Lightbox**:
   - Modern air-conditioned lecture halls, science labs, computer lab, aur library ki interactive photo gallery with lightbox viewer.

7. **Notice Board & Resource Downloads**:
   - Date sheets, syllabus breakdown, scholarship announcements, aur prospectus download notifications.

8. **Direct WhatsApp & Instant Contact**:
   - Pinned floating WhatsApp button jo direct admission office ke number par message send karta hai.
   - Quick inquiry form with instant toast alert.

9. **Dark & Light Mode**:
   - Top-right corner par theme toggle button jo user ki preference save rakhta hai.

---

## 🚀 Website Kaise Chalayein (How to Run)

### Tareeqa 1: Direct Browser Mein Kholein (Sab Se Aasan)
Apne computer ke file explorer mein jayein:
`c:\Users\Admin\Pictures\academy`
Aur `index.html` file par **double click** karein. Website foran Google Chrome ya Microsoft Edge mein khul jayegi!

### Tareeqa 2: Python Local Server
Agar aap local web server chalana chahte hain toh terminal / PowerShell mein yeh command chalayein:
```powershell
cd c:\Users\Admin\Pictures\academy
python -m http.server 8000
```
Uske baad browser mein jayein:
`http://localhost:8000`

---

## 📁 Files Structure

- **`index.html`**: Website ka main page jismein tamam sections, modals, aur forms shamil hain.
- **`style.css`**: Animations, glassmorphism header, print media styles (for admission slip), aur custom styling.
- **`script.js`**: Fee calculator, admission token generator, syllabus modal, lightbox, theme engine, aur form actions.
- **`README.md`**: Guide aur documentation.

---

## ✏️ Phone Number Ya Address Kaise Change Karein

1. `index.html` file ko kisi bhi text editor (Notepad, VS Code waghera) mein kholein.
2. WhatsApp / Phone number badalne ke liye `+92 (300) 123-4567` aur `923001234567` ko replace karke apna real academy number likh dein.
3. Address badalne ke liye `Plot 42, Academic Boulevard...` ko replace karke apna campus address likh dein.
