# MOOC Mastery

### Your NPTEL & SWAYAM exam preparation companion.

<p align="center">
  <a href="https://mooc-mastery.vercel.app/">
    <img src="https://img.shields.io/badge/🚀_Launch-MOOC_Mastery-f97316?style=for-the-badge" alt="Launch MOOC Mastery" />
  </a>
  <img src="https://img.shields.io/badge/Platform-Web_App-blue?style=for-the-badge" alt="Web App" />
  <img src="https://img.shields.io/badge/Privacy-Local--First-success?style=for-the-badge" alt="Local First" />
  <img src="https://img.shields.io/badge/Cost-Free-brightgreen?style=for-the-badge" alt="Free" />
</p>

<p align="center">
  <strong>Practice smarter. Identify weak areas. Walk into your proctored exam prepared.</strong>
</p>

---

## 📚 About the Project

**[MOOC Mastery](https://mooc-mastery.vercel.app/)** is a free, web-based revision and practice platform built for students enrolled in **NPTEL and SWAYAM courses**.

Preparing for weekly assignments and proctored examinations can mean switching between PDFs, answer keys, notes and scattered question banks. MOOC Mastery brings these resources into one structured practice experience.

Students can revise questions week by week, build custom practice sets, attempt timed mock tests, bookmark difficult questions and automatically identify concepts they need to revisit.

The idea is simple:

> Make high-quality exam practice accessible to every student, without registration fees, subscriptions, unnecessary accounts or complicated onboarding.

### 🌍 Built for Students, Used Across Campuses

MOOC Mastery has reached students from engineering and university communities, including:

- Delhi Technological University (DTU)
- Netaji Subhas University of Technology (NSUT)
- Vellore Institute of Technology (VIT)
- Other NPTEL and SWAYAM learner communities

### 📈 Project Impact

| Metric | Impact |
|---|---:|
| Students reached | 3,000+ |
| Visitors in the initial 18-day growth period | 6,800+ |
| Page views in the initial 18-day growth period | 16,900+ |
| Questions answered (tracked milestone) | 403,000+ |
| NPTEL/SWAYAM course offerings | 10 |

*Metrics represent reported product milestones from different measurement periods, not necessarily the same reporting window.*

---

## ✨ Features

### 1. Structured Weekly Practice
- Practice questions organised by course and assignment week.
- Focus on specific weeks instead of revising an entire course.
- Create custom practice sets with your preferred question count.
- Shuffle questions to make repeated practice more effective.

### 2. Custom Practice Sets
Build practice sessions around your preparation needs:
- Select individual weeks.
- Combine multiple weeks.
- Choose the number of questions.
- Create focused revision sessions before examinations.

### 3. Timed Mock Tests
Simulate examination conditions with timed practice sessions.

- Attempt questions under a time limit.
- Review your answers after completion.
- Evaluate accuracy and performance.
- Improve speed and confidence before the proctored examination.

### 4. Personalised Weak-Question Drills
MOOC Mastery helps you identify questions that repeatedly challenge you.

- Track incorrect answers.
- Revisit previously missed questions.
- Focus revision on weaker areas.
- Build a more targeted pre-exam revision routine.

### 5. Automated Revision Cheatsheet
A dedicated revision experience brings repeatedly missed and important questions together, making it easier to revisit difficult concepts before the examination.

### 6. Bookmarks
Save questions that you want to revisit later.

Build your own collection of important questions without having to search through the entire question bank again.

### 7. Explanations and Answer Review
Understand more than just the correct option.

Questions include answer keys and explanatory material where available, helping students revise the concepts behind their answers.

### 8. Privacy-First Progress Tracking
No account creation. No email verification. No registration.

- Practice immediately after opening the platform.
- Attempts, bookmarks and progress are stored locally in the browser.
- No user account is needed to retain practice history on the same browser.
- Export and import progress through JSON backups in Settings.

### 9. Installable Web Experience
MOOC Mastery supports Progressive Web App (PWA) functionality, allowing students to install the platform on compatible mobile and desktop devices.

---

## 🎓 Available Courses

MOOC Mastery brings together technical, scientific, environmental and humanities electives.

| Course | Institute |
|---|---|
| The Joy of Computing using Python | IIT Ropar |
| Programming in Java | IIT Kharagpur |
| Introduction to Internet of Things | IIT Kharagpur |
| Artificial Intelligence: Concepts and Techniques | IISc Bangalore |
| Psychology of Learning | IIT Kharagpur |
| Psychology of Stress, Health and Well-Being | IIT Guwahati |
| Forests and Their Management | IIT Kanpur |
| Wildlife Ecology | IIT Kanpur |
| Environment and Development | IIT Guwahati |
| Understanding Incubation and Entrepreneurship | IIT Bombay |

Course availability and question-bank coverage may vary by semester.

---

## 🔐 Privacy by Design

One of the core product decisions behind MOOC Mastery is that students should not have to create an account just to practise questions.

The platform follows a local-first approach.

| Design decision | Implementation |
|---|---|
| Authentication | No registration or login required |
| Progress storage | Browser `localStorage` |
| Bookmarks | Stored locally |
| Practice history | Stored locally |
| Data portability | JSON export/import |
| Question banks | Structured JSON datasets |
| Practice experience | Primarily client-side |

### Why Local-First?

- No account setup or password management.
- No dependency on a user database for practice progress.
- Students retain control of their browser-stored data.
- JSON backups make it possible to transfer progress between compatible browser environments.

**Important:** Clearing browser data or switching browsers/devices without exporting a backup may result in losing locally stored progress.

---

## 🛠️ Technology Stack

MOOC Mastery is built using a modern web development stack.

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Backend Services | Supabase |
| Database | PostgreSQL (Supabase) |
| Static Hosting | Vercel |
| Question Bank Format | JSON |
| Client-side Storage | Browser localStorage |

The practice engine is designed to keep question delivery and most practice interactions client-side, reducing unnecessary backend dependencies.

---

## 🧠 How It Works

At a high level, the student workflow looks like this:

1. Open the platform.
2. Select an available NPTEL/SWAYAM course.
3. Choose a weekly assignment or configure a custom set.
4. Practise questions and review explanations.
5. Attempt timed mock tests to evaluate exam readiness.
6. Revisit bookmarks and previously incorrect questions.
7. Export a JSON backup of personal progress when needed.

---

## 🚀 Product Philosophy

MOOC Mastery is built around a few principles:

**Accessibility over paywalls**  
Useful academic practice resources should be accessible without a subscription.

**Learning over memorisation**  
Students should be able to understand why an answer is correct, not simply memorise an option.

**Privacy over unnecessary accounts**  
A student should not need to surrender personal information to practise questions.

**Focused revision over endless browsing**  
Weekly drills, custom sets and weak-question revision help students spend time where it matters.

**Student feedback over assumptions**  
Product improvements are informed by actual usage patterns and learner feedback.

---

## 🗺️ Roadmap

Some areas being explored for future improvements:

- [ ] Expand course coverage across more NPTEL/SWAYAM electives.
- [ ] Improve question explanations and concept-level revision.
- [ ] Enhance performance insights and revision recommendations.
- [ ] Improve mobile usability and accessibility.
- [ ] Continue refining mock-test and weak-question experiences.
- [ ] Make question-bank contributions and corrections easier to manage.

---

## 🤝 Feedback and Contributions

Found an incorrect answer, a missing question or a technical issue?

Student feedback helps improve the platform.

You can:
- Report incorrect questions or answer keys.
- Suggest additional courses.
- Share feedback on the practice experience.
- Report bugs and usability issues through the repository's issue tracker, where enabled.

Please include the course name, week number and question reference when reporting a question-bank issue.

---

## ⚖️ Disclaimer

MOOC Mastery is an independent student-built educational practice platform.

It is **not affiliated with, endorsed by, or officially associated with NPTEL, SWAYAM, the Ministry of Education, the Government of India, or the listed IITs and IISc**.

Course names and institute names are used solely to identify the corresponding academic offerings.

Question banks are curated from assignment-related learning materials and student-contributed resources. Original course materials, questions, answer keys and other third-party content remain subject to their respective owners' rights and applicable terms.

MOOC Mastery is intended as a supplementary revision tool. Students should refer to official course materials and announcements for authoritative information.

---

## 👨‍💻 Built With a Student-First Mindset

MOOC Mastery started with a simple goal: make it easier for students to prepare for NPTEL examinations without jumping between countless PDFs and answer keys.

What began as a focused revision tool grew into a platform used by students across multiple courses and university communities.

The project continues to evolve through real student feedback, usage insights and a commitment to keeping academic practice accessible.

<p align="center">
  <a href="https://mooc-mastery.vercel.app/">
    <strong>Try MOOC Mastery →</strong>
  </a>
</p>

<p align="center">
  Made for students, by a student.
</p>
