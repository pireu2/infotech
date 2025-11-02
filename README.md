# InfoTech UTCN

A modern, responsive website for InfoTech - the IT organization of UTCN (Technical University of Cluj-Napoca). Built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Features

### 🌟 Core Functionality

- **Multilingual Support**: Full English and Romanian translations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for enhanced user experience
- **Modern UI**: Clean, professional design with gradient effects and glassmorphism

### 📱 Sections

- **Hero Section**: Eye-catching landing area with call-to-action
- **About Section**: Information about InfoTech and its mission
- **Events Section**: Interactive event tabs featuring:
  - **InfoNight**: Career networking event
  - **InfoWeek**: Company visits and insights
  - **Trainings**: Educational workshops and sessions
  - **ContestNight**: Student competitions and activities
- **Team Section**: Meet the InfoTech team members
- **Sponsors Section**: Display of supporting organizations

### 🎨 Technical Features

- **Event Management**: Detailed event cards with trainer information, dates, and descriptions
- **Interactive Modals**: Event details displayed in beautiful dialog overlays
- **Navigation Sidebar**: Smooth scrolling navigation with gallery link
- **Language Toggle**: Seamless switching between English and Romanian
- **Accessibility**: Screen reader support and keyboard navigation

## 🛠️ Tech Stack

### Frontend Framework

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - Type-aware linting rules

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.tsx          # Main homepage component
│   ├── Hero.tsx              # Hero/landing section
│   ├── About.tsx             # About InfoTech section
│   ├── Sidebar.tsx           # Navigation sidebar
│   ├── Footer.tsx            # Site footer
│   ├── TeamMemberCards.tsx   # Team members display
│   ├── SponsorsDisplay.tsx   # Sponsors section
│   ├── events/
│   │   ├── EventDialog.tsx   # Event details modal
│   │   ├── EventTabs.tsx     # Event tabs container
│   │   └── tabs/
│   │       ├── ContestTab.tsx
│   │       ├── InfoNightTab.tsx
│   │       ├── InfoWeekTab.tsx
│   │       └── TrainingsTab.tsx
│   └── ui/                   # Reusable UI components
├── contexts/
│   └── LanguageContext.tsx   # Language state management
├── data/
│   ├── events.json           # Event data
│   ├── teamMembers.json      # Team member data
│   └── translations.json     # Multilingual content
├── hooks/
│   └── useTranslation.ts     # Translation hook
├── lib/
│   └── utils.ts              # Utility functions
└── types/
    └── ActiveTab.ts          # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pireu2/infotech.git
   cd infotech-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Quality

```bash
npm run lint
```

## 🌍 Internationalization

The website supports two languages:

- **English** (default)
- **Romanian**

Language switching is available via the toggle button in the top-right corner. All content including event descriptions, navigation labels, and UI text is fully translated.

## 🎯 Key Components

### Event Management System

- **Event Cards**: Display event information with hover effects
- **Modal Dialogs**: Detailed event information with trainer details
- **Tab Navigation**: Organized event categories
- **Responsive Layout**: Adapts to different screen sizes

### Translation System

- **Centralized Translations**: All text stored in JSON files
- **Context-Based**: Language state managed globally
- **Dynamic Content**: Events and team data support translations

### UI Components

- **Glassmorphism Design**: Modern backdrop blur effects
- **Gradient Text**: Eye-catching headings and titles
- **Smooth Transitions**: Page navigation and tab switching
- **Accessibility**: Screen reader support and keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OSUT Cluj** - Organization of UTCN Students
- **UTCN** - Technical University of Cluj-Napoca
- **InfoTech Team** - For their dedication and hard work

## 📞 Contact

For questions or support, please contact the InfoTech team.

---

**Built with ❤️ for the InfoTech community**
