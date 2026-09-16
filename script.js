/**
 * AZIZ ACADEMY - INTERACTIVE CLIENT ENGINE
 * Handles Theme, Navigation, Course Filtering, Fee Calculator,
 * Online Admission with Printable Slip, Lightbox Gallery & FAQs.
 */

// --- 1. COURSE DATA & SYLLABUS DIRECTORY ---
const courseDetails = {
  'matric-sci': {
    title: 'Matriculation (9th & 10th) - Science Group',
    category: 'Matriculation',
    duration: '1 Year Academic Session (Comprehensive)',
    timing: 'Morning (8:00 AM - 1:30 PM) | Evening (3:30 PM - 7:30 PM)',
    subjects: ['Physics', 'Chemistry', 'Biology / Computer Science', 'Mathematics', 'English', 'Urdu', 'Islamiat', 'Pak Studies'],
    features: [
      'Daily 45-minute conceptual lectures with digital multimedia demonstrations',
      'Daily 15-minute quick diagnostic quiz & homework check',
      'Weekly Saturday Subject Tests following Board Paper pattern',
      'Monthly Full-Syllabus Cumulative Review',
      'Special 3-month Test Session (Chapter-wise, Half-Book, Full-Book Grand Mocks)',
      'Separate air-conditioned classrooms for boys and girls'
    ],
    feeEstimate: 'Rs. 7,500 / month'
  },
  'fsc-med': {
    title: 'FSc Pre-Medical (Part 1 & 2)',
    category: 'Intermediate',
    duration: '2 Years (Session-based with Revision & Test Phase)',
    timing: 'Morning (8:00 AM - 1:30 PM) | Evening (4:00 PM - 8:30 PM)',
    subjects: ['Biology (Botany & Zoology)', 'Chemistry (Organic & Inorganic)', 'Physics', 'English', 'Urdu / Pak Studies'],
    features: [
      'Taught by renowned college professors and Ph.D./M.Phil subject specialists',
      'Special emphasis on diagrams, scientific notations, and Board marking criteria',
      'Early foundation integration for MDCAT biology & chemistry questions',
      'Well-equipped biology & chemistry practical lab training',
      'Sunday Grand Tests with computerized marksheets sent to parents via WhatsApp'
    ],
    feeEstimate: 'Rs. 9,500 / month'
  },
  'fsc-eng': {
    title: 'FSc Pre-Engineering (Part 1 & 2)',
    category: 'Intermediate',
    duration: '2 Years Comprehensive Academic Session',
    timing: 'Morning (8:00 AM - 1:30 PM) | Evening (4:00 PM - 8:30 PM)',
    subjects: ['Mathematics (Calculus & Analytic Geometry)', 'Physics', 'Chemistry', 'English', 'Urdu / Pak Studies'],
    features: [
      'Problem-solving & analytical approach for complex calculus and vectors',
      'Formula booklets, past 10-year board paper derivations, and short tricks',
      'Weekly physics numerical workshops and numerical problem clinics',
      'Pre-Engineering to ECAT bridge concepts included in regular lectures',
      'One-on-one doubt clearing sessions with senior professors every Friday'
    ],
    feeEstimate: 'Rs. 9,500 / month'
  },
  'ics-stat': {
    title: 'ICS - Computer Science (Physics / Stats / Math)',
    category: 'Intermediate',
    duration: '2 Years Structured Course',
    timing: 'Morning & Evening Batches Available',
    subjects: ['Computer Science (C++ & Database Systems)', 'Mathematics', 'Physics / Statistics', 'English', 'Urdu'],
    features: [
      'Hands-on programming practice in state-of-the-art Core i7 computer labs',
      'Complete coverage of Board C++ programming & SQL database syllabus',
      'Special coding projects and software engineering logic workshops',
      'Dedicated lab instructors for practical exam preparation',
      'Weekend coding bootcamps for web basics and problem solving'
    ],
    feeEstimate: 'Rs. 9,000 / month'
  },
  'mdcat-prep': {
    title: 'MDCAT Comprehensive Crash & Test Session 2026',
    category: 'Entry Test',
    duration: '12-14 Weeks Intensive Sprint',
    timing: 'Morning (9:00 AM - 2:00 PM) or Weekend (Saturday & Sunday Full Day)',
    subjects: ['Biology (PMDC Syllabus)', 'Chemistry', 'Physics', 'English', 'Logical Reasoning'],
    features: [
      '10,000+ MCQs Question Bank with detailed step-by-step video & live explanations',
      'Daily 100-MCQ Unit-wise Tests on bubble sheets (OMR scanner grading)',
      '30+ Full Length Mock FLP exams simulating exact UHS / SZABMU / NUMS pattern',
      'Time management mastery, stress management & negative marking elimination techniques',
      'Mentorship by top medical students and previous year position holders'
    ],
    feeEstimate: 'Rs. 35,000 (Complete Package)'
  },
  'ecat-prep': {
    title: 'ECAT, NUST (NET), FAST & GIKI Engineering Prep',
    category: 'Entry Test',
    duration: '12 Weeks Dedicated Engineering Series',
    timing: 'Evening (4:30 PM - 8:30 PM) | Weekend Batches',
    subjects: ['Advanced Mathematics', 'Physics', 'Chemistry / Computer', 'English Analytical'],
    features: [
      'Speed-solving short tricks without calculator for NUST NET & FAST exams',
      'Extensive coverage of UET ECAT past 15-year questions',
      'Computer-based test simulation lab mimicking actual NUST & FAST online test software',
      'Rigorous weekly 200-MCQ grand tests with national percentile rankings',
      'Career counseling session for choosing the best engineering discipline'
    ],
    feeEstimate: 'Rs. 32,000 (Complete Package)'
  },
  'spoken-eng': {
    title: 'Spoken English, IELTS & Professional Communication',
    category: 'Skill Courses',
    duration: '2 Months Certificate Course',
    timing: 'Evening (6:00 PM - 7:30 PM) [3 Days a Week]',
    subjects: ['Fluency & Accent Training', 'Grammar & Vocabulary', 'IELTS Academic/General Prep', 'Public Speaking & Presentation Skills'],
    features: [
      'Interactive speech circles, group debates, and extempore speaking practice',
      'British & American pronunciation phonetics and accent neutralization',
      'Weekly IELTS mock tests (Listening, Reading, Writing, Speaking 1-on-1 interview)',
      'Personality grooming, interview prep & professional email etiquette',
      'Official Aziz Academy Certificate upon graduation'
    ],
    feeEstimate: 'Rs. 6,000 / month'
  },
  'it-coding': {
    title: 'Digital Skills & Python / Web Development Bootcamp',
    category: 'Skill Courses',
    duration: '3 Months Hands-On Project Based',
    timing: 'Weekend Batch (Saturday & Sunday 3:00 PM - 6:00 PM)',
    subjects: ['HTML5, CSS3, Modern JS', 'Python Basics & Logic Building', 'Git/GitHub', 'Freelancing Fundamentals (Upwork/Fiverr)'],
    features: [
      '100% Practical lab sessions with individual high-speed workstations',
      'Build 5 real-world portfolio projects (Landing page, Calculator, Interactive App, etc.)',
      'Freelancing profile setup and client proposal writing mentorship',
      'Internship opportunities for top 10% performers at partner software firms'
    ],
    feeEstimate: 'Rs. 8,000 / month'
  }
};

// --- 2. NOTIFICATIONS / TOAST HELPER ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '✓';
  if (type === 'error') icon = '✕';
  if (type === 'info') icon = 'ℹ';
  if (type === 'warning') icon = '⚠';

  toast.innerHTML = `
    <span class="text-xl font-bold">${icon}</span>
    <span class="text-sm font-medium flex-1">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// --- 3. DOM LOAD INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initCourseFiltering();
  initFeeCalculator();
  initAdmissionForm();
  initModals();
  initFaqAccordion();
  initGalleryLightbox();
  initContactForm();
  initBackToTop();
  loadSavedAdmissionsCount();
});

// --- 4. THEME (DARK / LIGHT) ENGINE ---
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem('aziz_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    if (themeIcon) themeIcon.className = 'fas fa-sun text-yellow-400 text-lg';
  } else {
    document.documentElement.classList.remove('dark');
    if (themeIcon) themeIcon.className = 'fas fa-moon text-slate-600 dark:text-slate-300 text-lg';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('aziz_theme', isDark ? 'dark' : 'light');
      if (themeIcon) {
        themeIcon.className = isDark ? 'fas fa-sun text-yellow-400 text-lg' : 'fas fa-moon text-slate-600 text-lg';
      }
      showToast(isDark ? 'Dark mode activated' : 'Light mode activated', 'info');
    });
  }
}

// --- 5. MOBILE MENU ---
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-mobile-menu');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    drawer.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// --- 6. COURSE FILTERING ---
function initCourseFiltering() {
  const filterButtons = document.querySelectorAll('.course-filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active classes
      filterButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
      });
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');

      const filter = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- 7. SYLLABUS & COURSE DETAILS MODAL ---
function openSyllabusModal(courseKey) {
  const data = courseDetails[courseKey];
  if (!data) return;

  const modal = document.getElementById('syllabus-modal');
  const titleEl = document.getElementById('modal-course-title');
  const categoryEl = document.getElementById('modal-course-category');
  const durationEl = document.getElementById('modal-course-duration');
  const timingEl = document.getElementById('modal-course-timing');
  const feeEl = document.getElementById('modal-course-fee');
  const subjectsList = document.getElementById('modal-course-subjects');
  const featuresList = document.getElementById('modal-course-features');
  const applyBtn = document.getElementById('modal-apply-btn');

  if (titleEl) titleEl.textContent = data.title;
  if (categoryEl) categoryEl.textContent = data.category;
  if (durationEl) durationEl.textContent = data.duration;
  if (timingEl) timingEl.textContent = data.timing;
  if (feeEl) feeEl.textContent = data.feeEstimate;

  if (subjectsList) {
    subjectsList.innerHTML = data.subjects.map(s => 
      `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">${s}</span>`
    ).join(' ');
  }

  if (featuresList) {
    featuresList.innerHTML = data.features.map(f =>
      `<li class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
        <span class="text-emerald-500 font-bold mt-0.5">✓</span>
        <span>${f}</span>
      </li>`
    ).join('');
  }

  if (applyBtn) {
    applyBtn.onclick = () => {
      closeAllModals();
      openAdmissionModal(courseKey);
    };
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// --- 8. FEE CALCULATOR ---
function initFeeCalculator() {
  const classSelect = document.getElementById('calc-class');
  const shiftSelect = document.getElementById('calc-shift');
  const testSessionCheck = document.getElementById('calc-test-session');
  const marksInput = document.getElementById('calc-marks');
  const calculateBtn = document.getElementById('calc-btn');
  const resetBtn = document.getElementById('calc-reset');

  // Outputs
  const baseFeeDisplay = document.getElementById('calc-base-fee');
  const discountDisplay = document.getElementById('calc-discount');
  const testFeeDisplay = document.getElementById('calc-test-fee');
  const totalFeeDisplay = document.getElementById('calc-total-fee');
  const scholarshipBadge = document.getElementById('calc-scholarship-badge');
  const enrollPlanBtn = document.getElementById('calc-enroll-btn');

  const baseRates = {
    '9th': 7500,
    '10th': 7500,
    '11th': 9500,
    '12th': 9500,
    'mdcat': 14000,
    'ecat': 13000,
    'skills': 6500
  };

  function calculate() {
    const selectedClass = classSelect ? classSelect.value : '9th';
    const selectedShift = shiftSelect ? shiftSelect.value : 'regular';
    const includeTest = testSessionCheck ? testSessionCheck.checked : false;
    const marks = marksInput ? parseFloat(marksInput.value) || 0 : 0;

    let base = baseRates[selectedClass] || 7500;
    
    // Shift adjustments
    if (selectedShift === 'weekend') {
      base = base * 0.9; // 10% lower for weekend
    } else if (selectedShift === 'crash') {
      base = base * 1.15; // 15% higher for intensive crash
    }

    // Scholarship calculation based on previous percentage
    let discountPercent = 0;
    let badgeText = '';

    if (marks >= 95) {
      discountPercent = 50; // 50% Quaid-e-Azam Merit Scholarship
      badgeText = '50% Super Merit Scholarship Awarded!';
    } else if (marks >= 90) {
      discountPercent = 35; // 35% High Achiever
      badgeText = '35% High Achiever Scholarship Awarded!';
    } else if (marks >= 80) {
      discountPercent = 20; // 20% Academic Honor
      badgeText = '20% Academic Honor Discount Applied!';
    } else if (marks >= 70) {
      discountPercent = 10;
      badgeText = '10% Early Bird Concession Applied!';
    }

    const discountAmount = Math.round((base * discountPercent) / 100);
    const testSessionFee = includeTest ? 2500 : 0;
    const finalTotal = Math.round(base - discountAmount + testSessionFee);

    if (baseFeeDisplay) baseFeeDisplay.textContent = `Rs. ${Math.round(base).toLocaleString()}`;
    if (discountDisplay) discountDisplay.textContent = discountPercent > 0 ? `- Rs. ${discountAmount.toLocaleString()} (${discountPercent}%)` : 'Rs. 0 (0%)';
    if (testFeeDisplay) testFeeDisplay.textContent = includeTest ? `+ Rs. ${testSessionFee.toLocaleString()}` : 'Rs. 0';
    if (totalFeeDisplay) totalFeeDisplay.textContent = `Rs. ${finalTotal.toLocaleString()}`;

    if (scholarshipBadge) {
      if (badgeText) {
        scholarshipBadge.textContent = badgeText;
        scholarshipBadge.className = 'mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 block text-center animate-bounce';
      } else {
        scholarshipBadge.textContent = 'Enter marks >= 70% to unlock merit scholarships';
        scholarshipBadge.className = 'mt-3 text-xs text-slate-500 dark:text-slate-400 block text-center';
      }
    }
  }

  if (calculateBtn) calculateBtn.addEventListener('click', calculate);
  if (classSelect) classSelect.addEventListener('change', calculate);
  if (shiftSelect) shiftSelect.addEventListener('change', calculate);
  if (testSessionCheck) testSessionCheck.addEventListener('change', calculate);
  if (marksInput) marksInput.addEventListener('input', calculate);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (classSelect) classSelect.value = '9th';
      if (shiftSelect) shiftSelect.value = 'regular';
      if (testSessionCheck) testSessionCheck.checked = true;
      if (marksInput) marksInput.value = '';
      calculate();
    });
  }

  if (enrollPlanBtn) {
    enrollPlanBtn.addEventListener('click', () => {
      const selectedClass = classSelect ? classSelect.value : '9th';
      openAdmissionModal(selectedClass);
    });
  }

  // Initial computation
  calculate();
}

// --- 9. ONLINE ADMISSION FORM & TOKEN SLIP ENGINE ---
function openAdmissionModal(prefillClass = '') {
  const modal = document.getElementById('admission-modal');
  const classDropdown = document.getElementById('adm-class');

  if (classDropdown && prefillClass) {
    // Attempt to match prefill
    for (let i = 0; i < classDropdown.options.length; i++) {
      if (classDropdown.options[i].value.toLowerCase().includes(prefillClass.toLowerCase()) ||
          prefillClass.toLowerCase().includes(classDropdown.options[i].value.toLowerCase())) {
        classDropdown.selectedIndex = i;
        break;
      }
    }
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function initAdmissionForm() {
  const form = document.getElementById('online-admission-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('adm-name')?.value.trim();
    const father = document.getElementById('adm-father')?.value.trim();
    const phone = document.getElementById('adm-phone')?.value.trim();
    const whatsapp = document.getElementById('adm-whatsapp')?.value.trim() || phone;
    const cnic = document.getElementById('adm-cnic')?.value.trim() || 'N/A';
    const email = document.getElementById('adm-email')?.value.trim() || 'N/A';
    const course = document.getElementById('adm-class')?.value;
    const shift = document.getElementById('adm-shift')?.value;
    const marks = document.getElementById('adm-marks')?.value.trim() || 'Awaiting Result';
    const address = document.getElementById('adm-address')?.value.trim() || 'City Campus';

    if (!name || !father || !phone || !course) {
      showToast('Please fill all required fields (*)', 'error');
      return;
    }

    // Generate unique Application ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const tokenID = `AZ-2026-${randomNum}`;
    const submissionDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const admissionRecord = {
      tokenID,
      name,
      father,
      phone,
      whatsapp,
      cnic,
      email,
      course,
      shift,
      marks,
      address,
      submissionDate,
      status: 'Provisional Registered'
    };

    // Store in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('aziz_admissions') || '[]');
      existing.unshift(admissionRecord);
      localStorage.setItem('aziz_admissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // Close admission form modal and show printable slip modal
    closeAllModals();
    populateAndShowSlip(admissionRecord);
    showToast(`Application ${tokenID} registered successfully!`, 'success');
    form.reset();
    loadSavedAdmissionsCount();
  });
}

function populateAndShowSlip(data) {
  const slipModal = document.getElementById('slip-modal');
  if (!slipModal) return;

  document.getElementById('slip-token-id').textContent = data.tokenID;
  document.getElementById('slip-date').textContent = data.submissionDate;
  document.getElementById('slip-name').textContent = data.name;
  document.getElementById('slip-father').textContent = data.father;
  document.getElementById('slip-phone').textContent = data.phone;
  document.getElementById('slip-whatsapp').textContent = data.whatsapp;
  document.getElementById('slip-course').textContent = data.course;
  document.getElementById('slip-shift').textContent = data.shift;
  document.getElementById('slip-marks').textContent = data.marks;
  document.getElementById('slip-address').textContent = data.address;

  // Set reporting date (48 hours from today)
  const reportDate = new Date();
  reportDate.setDate(reportDate.getDate() + 2);
  const formattedReportDate = reportDate.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  document.getElementById('slip-report-date').textContent = `${formattedReportDate} between 9:00 AM - 4:00 PM`;

  slipModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function printAdmissionSlip() {
  window.print();
}

function loadSavedAdmissionsCount() {
  try {
    const existing = JSON.parse(localStorage.getItem('aziz_admissions') || '[]');
    const countBadge = document.getElementById('admissions-live-count');
    if (countBadge) {
      // 142 base enrollments + user additions
      const total = 142 + existing.length;
      countBadge.textContent = `${total}+ New Students Enrolled This Week`;
    }
  } catch (e) {}
}

// --- 10. MODAL CONTROLLERS ---
function initModals() {
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Close when clicking outside backdrop
  const backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

// --- 11. FAQ ACCORDION ---
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const chevron = item.querySelector('.faq-icon');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all other faqs
      faqItems.forEach(other => {
        const otherContent = other.querySelector('.faq-content');
        const otherChevron = other.querySelector('.faq-icon');
        if (otherContent && otherContent !== content) {
          otherContent.classList.add('hidden');
          if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current
      if (isOpen) {
        content.classList.add('hidden');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// --- 12. CAMPUS GALLERY LIGHTBOX ---
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80', title: 'Main Modern Lecture Hall' },
  { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', title: 'High-Tech Physics & Chemistry Labs' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80', title: 'Smart Interactive Classrooms' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80', title: 'Annual Position Holders & Prize Distribution' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', title: 'Collaborative Group Study Area' },
  { src: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80', title: 'Central Reference Library' }
];

let currentGalleryIdx = 0;

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-thumb');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-caption');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      currentGalleryIdx = idx;
      updateLightbox();
      if (lightboxModal) {
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function updateLightbox() {
    const item = galleryImages[currentGalleryIdx];
    if (lightboxImg && item) lightboxImg.src = item.src;
    if (lightboxTitle && item) lightboxTitle.textContent = item.title;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIdx = (currentGalleryIdx - 1 + galleryImages.length) % galleryImages.length;
      updateLightbox();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIdx = (currentGalleryIdx + 1) % galleryImages.length;
      updateLightbox();
    });
  }
}

// --- 13. CONTACT FORM ENGINE ---
function initContactForm() {
  const contactForm = document.getElementById('main-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const phone = document.getElementById('contact-phone')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !phone) {
      showToast('Please provide your name and phone number', 'warning');
      return;
    }

    showToast(`Thank you ${name}! Your inquiry has been received. Our admission advisor will call you shortly.`, 'success');
    contactForm.reset();
  });
}

// --- 14. BACK TO TOP BUTTON ---
function initBackToTop() {
  const topBtn = document.getElementById('back-to-top');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.remove('opacity-0', 'pointer-events-none');
      topBtn.classList.add('opacity-100');
    } else {
      topBtn.classList.add('opacity-0', 'pointer-events-none');
      topBtn.classList.remove('opacity-100');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
