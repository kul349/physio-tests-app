import fs from "fs";
import path from "path";
import chromium from "chrome-aws-lambda";

// Load your tests JSON
const tests = JSON.parse(
  fs.readFileSync(path.resolve("public/physio-test.json"), "utf-8")
);

// Read package.json
const packageJsonPath = path.resolve("package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Update reactSnap.include with test slugs
packageJson.reactSnap = packageJson.reactSnap || {};
packageJson.reactSnap.include = [
  "/",
  "/assessment-tests",
  ...tests.map((t) => `/tests/${t.slug}`),
];

// Set other React Snap config
packageJson.reactSnap.source = "dist";
packageJson.reactSnap.crawl = false;
packageJson.reactSnap.puppeteer = {
  executablePath: process.env.CHROME_PATH || (await chromium.executablePath),
  args: chromium.args.concat(["--no-sandbox", "--disable-setuid-sandbox"]),
  headless: chromium.headless,
};

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("React Snap routes updated in package.json with chrome-aws-lambda");
