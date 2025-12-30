// src/react-snap-route.mjs
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer-core";
import chrome from "chrome-aws-lambda";

// Load your tests JSON
const tests = JSON.parse(
  fs.readFileSync(path.resolve("public/physio-test.json"), "utf-8")
);

// Read package.json
const packageJsonPath = path.resolve("package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Add all routes
packageJson.reactSnap = packageJson.reactSnap || {};
packageJson.reactSnap.include = [
  "/",
  "/assessment-tests",
  ...tests.map((t) => `/tests/${t.slug}`),
];

packageJson.reactSnap.crawl = false;
packageJson.reactSnap.source = "dist";

// Use chrome-aws-lambda for Puppeteer
packageJson.reactSnap.puppeteer = async () =>
  await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: true,
  });

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("React Snap routes updated for chrome-aws-lambda");
