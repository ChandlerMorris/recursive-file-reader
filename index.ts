import getFilesSync from './getFileSync';
import getFilesAsync from './getFilesAsync';

const dir = './features';

// Synchronous version of getFiles
console.log('Files: ', getFilesSync(dir));

// Asynchronous version of getFiles
const main = async () => {
    try {
        const files = await getFilesAsync(dir);
        console.log('Files: ', files);
    } catch (err) {
        console.error('Error: ', err);
    };
};

main();