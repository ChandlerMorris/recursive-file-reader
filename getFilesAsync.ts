import fs from 'fs';

const getFilesAsync = async (dir: string, _prevFiles: string[] = []): Promise<string[]> => {
    try {
        const files = await fs.promises.readdir(dir);
        for (const file of files) {
            const name = `${dir}/${file}`;
            const stats = await fs.promises.stat(name);
            if (stats.isDirectory()) {
                await getFilesAsync(name, _prevFiles);
            } else {
                const path = name.split(/[./]/g);
                const index = path.indexOf('feature');
                if (index != -1) {
                    const filename = path[index - 1];
                    _prevFiles.push(filename);
                }
            }
        }
    } catch (err) {
        console.error(`Error reading directory: ${dir}: ${err}`);
    }
    return _prevFiles;
};

export default getFilesAsync;