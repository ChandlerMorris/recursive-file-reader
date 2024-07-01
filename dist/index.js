"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFileSync_1 = __importDefault(require("./getFileSync"));
const getFilesAsync_1 = __importDefault(require("./getFilesAsync"));
const dir = './generatedFeatures';
const average = (array) => array.reduce((a, b) => a + b) / array.length;
const measurePerformance = (func) => (...args) => __awaiter(void 0, void 0, void 0, function* () {
    const startTime = performance.now();
    let result;
    try {
        result = yield func(...args);
        const endTime = performance.now();
        const totalTime = endTime - startTime;
        return totalTime;
    }
    catch (error) {
        console.error(`\nFunction ${func.name} encountered an error:`, error);
        throw error;
    }
});
const performRun = (func, times, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const results = [];
    for (let i = 0; i < times; i++) {
        const result = yield measurePerformance(func)(...args);
        results.push(result);
    }
    const resultsAverage = average(results);
    const runResult = `Function: ${func.name} | Number of runs: ${times} | Average runtime per run: ${(resultsAverage).toFixed(2)}`;
    return runResult;
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const syncResult = yield performRun(getFileSync_1.default, 10, dir);
        console.log(syncResult);
        const asyncResult = yield performRun(getFilesAsync_1.default, 10, dir);
        console.log(asyncResult);
    }
    catch (err) {
        console.error('Error: ', err);
    }
    ;
});
main();
//# sourceMappingURL=index.js.map