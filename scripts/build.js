import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const run = (cmd) => {
	console.log(`${cmd}`);
	execSync(cmd, { stdio: "inherit" });
};

// 1. Run next build
run("next build");

// 3. Fix asset paths
const outDir = path.join(process.cwd(), "out");

function fixPaths(dir) {
	fs.readdirSync(dir).forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			fixPaths(filePath);
		} else if (file.endsWith(".html")) {
			let content = fs.readFileSync(filePath, "utf8");

			// Fix /_next/* and /images/* → ./_next/* and ./images/*
			content = content.replace(/(src|href)="\/([^"]+)"/g, '$1="./$2"');

			fs.writeFileSync(filePath, content, "utf8");
			console.log(`✔ Fixed paths in: ${filePath}`);
		}
	});
}

fixPaths(outDir);

console.log("\n✅ Build complete with fixed paths for Electron!");
