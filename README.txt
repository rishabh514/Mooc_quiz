# MOOC Mastery

### A free, privacy-first practice platform for NPTEL & SWAYAM students.

[![Live Website](https://img.shields.io/badge/Live%20Website-MOOC%20Mastery-orange?style=for-the-badge)](https://mooc-mastery.vercel.app/)
![Status](https://img.shields.io/badge/Status-Live-success?style=flat-square)
![Platform](https://img.shields.io/badge/Platform-Web-blue?style=flat-square)
![Privacy](https://img.shields.io/badge/Privacy-No%20Account%20Required-purple?style=flat-square)

**MOOC Mastery** is a student-built learning platform designed to make NPTEL and SWAYAM assignment preparation more accessible, structured and effective.

It brings weekly MCQ practice, personalised revision and timed mock tests into one simple interface — without requiring students to create an account, pay a subscription or surrender their personal learning data.

**Live at:** https://mooc-mastery.vercel.app/

---

## Why MOOC Mastery?

Preparing for NPTEL and SWAYAM examinations often involves navigating weekly assignments, revisiting old questions and identifying topics that need more attention.

MOOC Mastery brings these activities together in one place.

Instead of simply providing a collection of questions, it gives students different ways to practise, evaluate their understanding and revisit concepts they struggle with.

The platform was initially developed to support preparation for a single NPTEL course. After students started sharing it within university communities, it expanded into a multi-subject revision platform.

## Impact

Built independently to solve a real student problem, MOOC Mastery has seen organic adoption among students.

| Metric | Achievement |
|---|---:|
| Unique visitors | 6,800+ |
| Page views | 16,900+ |
| Sessions | 7,600+ |
| Questions answered | 403,000+ |
| Courses supported | 7 |
| Initial measurement period | 18 days |

*Metrics reflect the reported initial 18-day measurement period and should not be interpreted as lifetime totals.*

## Features

### 1. Weekly MCQ practice
- Practise questions organised by course and week.
- Access question banks covering Weeks 1–12.
- Revise specific weeks instead of repeatedly attempting the entire syllabus.

### 2. Custom practice sessions
- Build practice sets around selected weeks.
- Choose questions according to your revision needs.
- Create focused practice sessions for upcoming examinations.

### 3. Randomised quizzes
- Generate random question sets.
- Reduce repetitive practice.
- Test your understanding across different parts of a course.

### 4. Weak-question drills
- Revisit questions that you previously struggled with.
- Spend more time on areas that need improvement.
- Turn mistakes into targeted revision sessions.

### 5. Bookmarks
- Save important or difficult questions.
- Build a personal revision collection.
- Return to bookmarked questions whenever needed.

### 6. Timed mock tests
- Simulate an examination environment.
- Practise under time constraints.
- Evaluate your preparation before the actual assessment.

### 7. Personalised experience
- Customisable interface themes.
- Progress and learning preferences stored locally in the browser.
- No mandatory registration or account creation.

---

## Privacy-first by design

We believe that educational tools should be accessible without forcing students to create accounts or share unnecessary personal information.

MOOC Mastery is designed around a simple principle: **practise freely, without signing up.**

- No mandatory registration.
- No subscription or payment.
- No advertising on the platform.
- Learning progress and bookmarks are stored in browser localStorage.
- No personal student account is required to use the practice features.

Your browser stores your local learning state. Clearing browser data or switching devices may remove or leave behind that locally stored progress.

---

## Technology Stack

MOOC Mastery is built using modern web technologies.

| Technology | Purpose |
|---|---|
| React.js | Frontend application |
| Vite | Development and build tooling |
| Tailwind CSS | Styling and responsive UI |
| Supabase | Backend and data infrastructure |
| Cloudflare R2 | Asset storage |
| Vercel | Deployment and hosting |
| Browser localStorage | Local learning progress and preferences |

---

## Getting Started

If you want to explore the project locally, follow these steps.

### Prerequisites

- Node.js (LTS recommended)
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mooc-mastery.git
```

Navigate into the project:

```bash
cd mooc-mastery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Environment variables

If your checkout uses external services, configure the required environment variables using the project's environment example file.

Do not commit API keys, service-role credentials, database secrets or other private configuration to GitHub.

*The exact environment variable names and setup instructions should be documented after verifying the repository's current configuration.*

---

## Project Goals

MOOC Mastery is built around a few long-term principles:

1. **Accessibility:** Essential learning and practice features should remain free.
2. **Privacy:** Students should not need an account just to practise questions.
3. **Practical learning:** Make it easier to identify weak areas and revise effectively.
4. **Simplicity:** Keep the experience fast, focused and easy to use.
5. **Continuous improvement:** Use student feedback and product analytics to improve the learning experience.

## Roadmap

Planned areas of improvement include:

- Expanding the collection of supported NPTEL and SWAYAM courses.
- Improving question discovery and revision workflows.
- Enhancing learning analytics and practice history.
- Improving accessibility and mobile usability.
- Adding more tools for structured examination preparation.

The long-term ambition is to make MOOC Mastery a comprehensive, free practice destination for students across a much wider range of courses.

## Contributing

Suggestions, bug reports and feedback are valuable.

If contributions are enabled for this repository:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes locally.
5. Submit a pull request describing the improvement.

Please open an issue before undertaking large changes so that proposed work can be discussed first.

## Acknowledgements

MOOC Mastery was built to address a practical problem experienced by students preparing for NPTEL and SWAYAM courses.

Thank you to every student who tried the platform, shared feedback, reported issues and helped it grow organically.

## Project Information

- **Project:** MOOC Mastery
- **Category:** Education / EdTech
- **Developer:** Rishabh Raj Gupta
- **Institution:** Delhi Technological University
- **Website:** https://mooc-mastery.vercel.app/

---

*Built with the belief that quality learning tools should be accessible to everyone.*
