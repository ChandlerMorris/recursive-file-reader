import fs from 'fs';

const getFilesSync = (dir: string, _prevFiles: string[] = []): string[] => {
    try {
        const files = fs.readdirSync(dir);
        for (const i in files) {
            let name = `${dir}/${files[i]}`;
            if (fs.statSync(name).isDirectory()) {
                getFilesSync(name, _prevFiles);
            } else {
                const path = name.split(/[./]/g);
                const index = path.indexOf('feature');
                if (index !== -1) {
                    const filename = path[index - 1];
                    _prevFiles.push(filename);
                }
            };
        };
    } catch (err) {
        console.error(`Error reading directory: ${dir}: ${err}`);
    }
    return _prevFiles;
};

export default getFilesSync;