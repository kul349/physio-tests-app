import fs from "fs";
import path from "path";

// Load your tests JSON
const tests = JSON.parse(
  fs.readFileSync(path.resolve("public/physio-test.json"), "utf-8")
);

// Read package.json
const packageJsonPath = path.resolve("package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Update reactSnap.include
packageJson.reactSnap = packageJson.reactSnap || {};
packageJson.reactSnap.include = [
  "/",
  "/assessment-tests",
  ...tests.map((t) => `/tests/${t.slug}`),
];

// Ensure source folder is dist
packageJson.reactSnap.source = "dist";
packageJson.reactSnap.crawl = false;
packageJson.reactSnap.puppeteerArgs = ["--no-sandbox"];

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("React Snap routes updated in package.json");
