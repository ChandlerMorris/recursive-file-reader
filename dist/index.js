const fs = require('node:fs');
const getFiles = (dir, _prevFiles) => {
    _prevFiles = _prevFiles || [];
    const files = fs.readdirSync(dir);
    for (const i in files) {
        let name = `${dir}/${files[i]}`;
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, _prevFiles);
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
    return _prevFiles;
};
console.log(getFiles('./features', []));
//# sourceMappingURL=index.js.map