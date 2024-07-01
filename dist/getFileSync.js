"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const getFilesSync = (dir, _prevFiles = []) => {
    try {
        const files = fs_1.default.readdirSync(dir);
        for (const i in files) {
            let name = `${dir}/${files[i]}`;
            if (fs_1.default.statSync(name).isDirectory()) {
                getFilesSync(name, _prevFiles);
            }
            else {
                const path = name.split(/[./]/g);
                const index = path.indexOf('feature');
                if (index !== -1) {
                    const filename = path[index - 1];
                    _prevFiles.push(filename);
                }
            }
            ;
        }
        ;
    }
    catch (err) {
        console.error(`Error reading directory: ${dir}: ${err}`);
    }
    return _prevFiles;
};
exports.default = getFilesSync;
//# sourceMappingURL=getFileSync.js.map