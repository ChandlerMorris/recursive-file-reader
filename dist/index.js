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
const dir = './features';
// Synchronous version of getFiles
console.log('Files: ', (0, getFileSync_1.default)(dir));
// Asynchronous version of getFiles
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield (0, getFilesAsync_1.default)(dir);
        console.log('Files: ', files);
    }
    catch (err) {
        console.error('Error: ', err);
    }
    ;
});
main();
//# sourceMappingURL=index.js.map