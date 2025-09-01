# Nextjs Electron Desktop App

A simple desktop application built with **Next.js** and **Electron**, combining the power of modern web development with cross-platform desktop support.

* * *

## 🚀 Features

* ⚡ Built with **Next.js 15** and **React 19**
* 🖥️ Cross-platform desktop support via **Electron**
* 🎨 Styling with **Tailwind CSS**
* 📦 Packaging with **electron-builder**
* 🔄 Hot reload in development using **electronmon** and **concurrently**

* * *

## 📂 Project Structure

    .
    ├── electron.js        # Electron main process
    ├── scripts/build.js   # Custom build script
    ├── package.json
    └── ...

* * *

## 🛠️ Scripts

| Command | Description |
| --- | --- |
| `npm run next` | Start Next.js in dev mode (Turbopack) |
| `npm run dev` | Start Next.js + Electron with hot reload |
| `npm run build` | Build the Next.js app |
| `npm start` | Serve the production build |
| `npm run electron` | Run Electron directly |
| `npm run dist` | Build production app & package installer |

* * *

## 🔧 Development

1. **Install dependencies**
  
      npm install
  
2. **Run the app in development**
  
      npm run dev
  
  This will:
  
  * Start Next.js at `http://localhost:3000`
  * Launch Electron with hot reload

* * *

## 📦 Build & Distribution

To build the desktop app for distribution:

    npm run dist

The packaged app will be generated in the `dist/` folder.

* * *

## 📜 License

MIT
