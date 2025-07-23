#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🔨 Starting build process...");

// Validate HTML file exists and is valid
function validateHTML() {
  console.log("📋 Validating HTML...");

  const htmlPath = path.join(__dirname, "index.html");

  if (!fs.existsSync(htmlPath)) {
    throw new Error("❌ index.html not found!");
  }

  const html = fs.readFileSync(htmlPath, "utf8");

  // Basic HTML validation
  if (!html.includes("<!DOCTYPE html>")) {
    throw new Error("❌ Missing DOCTYPE declaration");
  }

  if (!html.includes("<html")) {
    throw new Error("❌ Missing HTML tag");
  }

  if (!html.includes("<head>") || !html.includes("</head>")) {
    throw new Error("❌ Missing or malformed HEAD section");
  }

  if (!html.includes("<body>") || !html.includes("</body>")) {
    throw new Error("❌ Missing or malformed BODY section");
  }

  // Check for required elements
  if (!html.includes("SpeechRecognition")) {
    throw new Error("❌ Speech Recognition code not found");
  }

  if (!html.includes("translate(")) {
    throw new Error("❌ Translation function not found");
  }

  console.log("✅ HTML validation passed");
}

// Check for required files
function checkRequiredFiles() {
  console.log("📁 Checking required files...");

  const requiredFiles = ["index.html", "vercel.json", "package.json"];

  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(__dirname, file))) {
      throw new Error(`❌ Required file missing: ${file}`);
    }
  }

  console.log("✅ All required files present");
}

// Validate vercel.json
function validateVercelConfig() {
  console.log("⚙️  Validating Vercel configuration...");

  const vercelPath = path.join(__dirname, "vercel.json");
  const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, "utf8"));

  if (!vercelConfig.version) {
    throw new Error("❌ Vercel config missing version");
  }

  if (!vercelConfig.builds || vercelConfig.builds.length === 0) {
    throw new Error("❌ Vercel config missing builds");
  }

  console.log("✅ Vercel configuration valid");
}

// Generate build info
function generateBuildInfo() {
  console.log("📊 Generating build info...");

  const buildInfo = {
    buildTime: new Date().toISOString(),
    version: require("./package.json").version,
    name: require("./package.json").name,
    files: {
      "index.html": fs.statSync("index.html").size + " bytes",
      "vercel.json": fs.statSync("vercel.json").size + " bytes",
    },
  };

  fs.writeFileSync("build-info.json", JSON.stringify(buildInfo, null, 2));
  console.log("✅ Build info generated");
}

// Main build process
async function build() {
  try {
    checkRequiredFiles();
    validateHTML();
    validateVercelConfig();
    generateBuildInfo();

    console.log("🎉 Build completed successfully!");
    console.log("📦 Ready for deployment to Vercel");
  } catch (error) {
    console.error("💥 Build failed:", error.message);
    process.exit(1);
  }
}

// Run build if this script is executed directly
if (require.main === module) {
  build();
}

module.exports = {
  build,
  validateHTML,
  checkRequiredFiles,
  validateVercelConfig,
};
