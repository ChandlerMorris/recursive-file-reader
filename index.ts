import getFilesSync from './getFileSync';
import getFilesAsync from './getFilesAsync';

const dir = './features';

const measurePerformance = <T extends (...args: any[]) => any>(func: (...args: Parameters<T>) => ReturnType<T>) => 
    (...args: Parameters<T>): ReturnType<T> => {
        const startTime = performance.now();
        const result = func(...args);
        const endTime = performance.now();
        console.log(`\nFunction ${func.name} took ${(endTime - startTime).toFixed(2)} milliseconds to execute.`);
        return result;
    };

// Synchronous version of getFiles
const measuredGetFilesSync = measurePerformance(getFilesSync);
console.log('Files: ', measuredGetFilesSync(dir));

// Asynchronous version of getFiles
const main = async () => {
    try {
        const measuredGetFilesAsync = measurePerformance(getFilesAsync);
        const files = await measuredGetFilesAsync(dir);
        console.log('Files: ', files);
    } catch (err) {
        console.error('Error: ', err);
    };
};

main();