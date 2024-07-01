import getFilesSync from './getFileSync';
import getFilesAsync from './getFilesAsync';

const dir = './generatedFeatures';

const average = (array: number[]) => array.reduce((a, b) => a + b) / array.length;

const measurePerformance = <T extends (...args: any[]) => any>(func: T) => 
    async (...args: Parameters<T>): Promise<number> => {
        const startTime = performance.now();
        let result: string;
        try {
            result = await func(...args);
            const endTime = performance.now();
            const totalTime = endTime - startTime;
            return totalTime;
        } catch (error) {
            console.error(`\nFunction ${func.name} encountered an error:`, error);
            throw error;
        }
    };

const performRun = async <T extends (...args: any[]) => any>(func: T, times: number, ...args: Parameters<T>): Promise<string> => {
    const results: Array<number> = [];
    for (let i = 0; i < times; i++) {
        const result = await measurePerformance(func)(...args);
        results.push(result);
    }
    const resultsAverage = average(results);
    const runResult = `Function: ${func.name} | Number of runs: ${times} | Average runtime per run: ${(resultsAverage).toFixed(2)}`;

    return runResult;
};

const main = async () => {
    try {
        const syncResult = await performRun(getFilesSync, 10, dir);
        console.log(syncResult);

        const asyncResult = await performRun(getFilesAsync, 10, dir);
        console.log(asyncResult);
    } catch (err) {
        console.error('Error: ', err);
    };
};

main();