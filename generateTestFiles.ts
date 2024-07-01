import * as fs from 'fs';
import * as path from 'path';

const rootFolder = './generatedFeatures';
const numSubDirs = 10;
const numFiles = 5;

// Function to generate a random alphanumeric string
const generateRandomFileName = (): string => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const prefix = 'AS';
    const num = Math.floor(Math.random() * 9999) + 1; // Random number between 1 and 9999
    const numStr = num.toString().padStart(4, '0'); // Pad with leading zeros if necessary
    const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length)); // Random letter
    return `${prefix}${randomLetter}${numStr}.feature`;
}

// Function to create subdirectories and files recursively
const createSubdirectories = (parentDir: string, depth: number) => {
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
}

// Create root folder if it doesn't exist
if (!fs.existsSync(rootFolder)) {
    fs.mkdirSync(rootFolder);
}

// Generate the folder structure
createSubdirectories(rootFolder, 3);

console.log('Folder structure generation complete.');