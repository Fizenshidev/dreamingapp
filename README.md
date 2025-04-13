# DreamingApp 💭

A personal dream journal application built with AstroJS and Firebase, designed to capture, organize, and visualize your dreams.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro.svg)](https://astro.build)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)

![DreamingApp](https://github.com/Fizenshidev/dreamingapp/raw/main/public/dreamingapp-preview.png)

## ✨ Features

- **Dream Journal**: Record and categorize your dreams
- **Dream Analysis**: Visualize patterns in your dreaming habits
- **User Authentication**: Secure login via Firebase
- **Cloud Storage**: Sync your dreams across devices
- **Responsive Design**: Works on mobile, tablet, and desktop

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── assets/
├── src/
│   ├── components/
│   │   ├── dream/
│   │   ├── auth/
│   │   └── ui/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── dashboard.astro
│   │   ├── journal/
│   │   └── profile/
│   ├── services/
│   │   └── firebase/
│   └── utils/
├── firebase.json
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Deploy to Firebase hosting                       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🔧 Configuration

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication and Firestore
3. Copy your Firebase configuration to `.env` file:

```
PUBLIC_FIREBASE_API_KEY=your_api_key
PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
PUBLIC_FIREBASE_PROJECT_ID=your_project_id
PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🌐 Live Demo

Visit [dreamingapp.web.app](https://dreamingapp.web.app) to see the application in action.

## 💻 Development

### Prerequisites

- Node.js 16+
- npm or yarn
- Firebase account

### Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/Fizenshidev/dreamingapp.git
   cd dreamingapp
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

If you have any questions, feel free to reach out or open an issue.

---

Made with ❤️ by [Fizenshidev](https://github.com/Fizenshidev)
