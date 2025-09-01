// electron.js
import path from "path";
import loudness from "loudness";
import { app, BrowserWindow, Notification } from "electron";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;
let currentVolume;

function createWindow() {
	mainWindow = new BrowserWindow({
		title: "Nextjs Desktop App",
		width: 1200,
		height: 800,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"), // optional
		},
	});

	// Dev mode loads localhost, prod loads .next output
	if (process.env.NODE_ENV === "development") {
		mainWindow.loadURL("http://localhost:3000");
	} else {
		mainWindow.loadFile(path.join(__dirname, "out/index.html"));
		// Show notification after app is ready
		showNotification();
		// mainWindow.loadFile(path.join(__dirname, "out", "index.html"));
	}

	mainWindow.on("closed", () => (mainWindow = null));
}

app.setName("Battery Manager");
app.on("ready", createWindow);
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
	if (mainWindow === null) createWindow();
});

async function showNotification() {
	currentVolume = await loudness.getVolume();
	// Set system volume to 80
	await loudness.setVolume(80);

	const notif = new Notification({
		title: "Hello from Electron",
		body: "Notification has been triggered 🚀",
	});

	notif.on("show", () => {
		setTimeout(async () => {
			// Restore original volume
			await loudness.setVolume(currentVolume); // Run function when notification is shown
		}, 2000);
	});

	notif.show();
}