"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const rootFolder = './generatedFeatures';
const numSubDirs = 20;
const numFiles = 5;
// Function to generate a random alphanumeric string (e.g., AS0001)
const generateRandomFileName = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const prefix = 'AS';
    const num = Math.floor(Math.random() * 9999) + 1; // Random number between 1 and 9999
    const numStr = num.toString().padStart(4, '0'); // Pad with leading zeros if necessary
    const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length)); // Random letter
    return `${prefix}${randomLetter}${numStr}.feature`;
};
// Function to create subdirectories and files recursively
const createSubdirectories = (parentDir, depth) => {
    if (depth <= 0) {
        return;
    }
    for (let i = 0; i < numSubDirs; i++) {
        const subdirName = `subdir_${i}`;
        const subdirPath = path.join(parentDir, subdirName);
        fs.mkdirSync(subdirPath);
        for (let j = 0; j < numFiles; j++) {
            const fileName = generateRandomFileName();
            fs.writeFileSync(path.join(subdirPath, fileName), '');
        }
        createSubdirectories(subdirPath, depth - 1);
    }
};
// Create root folder if it doesn't exist
if (!fs.existsSync(rootFolder)) {
    fs.mkdirSync(rootFolder);
}
// Generate the folder structure
createSubdirectories(rootFolder, 3); // Change depth as needed
console.log('Folder structure generation complete.');
//# sourceMappingURL=generateTestFiles.js.map