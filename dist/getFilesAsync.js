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
const fs_1 = __importDefault(require("fs"));
const getFilesAsync = (dir_1, ...args_1) => __awaiter(void 0, [dir_1, ...args_1], void 0, function* (dir, _prevFiles = []) {
    try {
        const files = yield fs_1.default.promises.readdir(dir);
        for (const file of files) {
            const name = `${dir}/${file}`;
            const stats = yield fs_1.default.promises.stat(name);
            if (stats.isDirectory()) {
                yield getFilesAsync(name, _prevFiles);
            }
            else {
                const path = name.split(/[./]/g);
                const index = path.indexOf('feature');
                if (index != -1) {
                    const filename = path[index - 1];
                    _prevFiles.push(filename);
                }
            }
        }
    }
    catch (err) {
        console.error(`Error reading directory: ${dir}: ${err}`);
    }
    return _prevFiles;
});
exports.default = getFilesAsync;
//# sourceMappingURL=getFilesAsync.js.map