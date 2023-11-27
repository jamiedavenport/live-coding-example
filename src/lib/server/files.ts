import { readFile } from 'fs/promises';
import type { FileSystemTree } from '@webcontainer/api';

const files = ['package.json', 'main.js', 'main.test.js'];

export function loadFileSystem(basePath: string): Promise<FileSystemTree> {
	return files.reduce(async (acc, file) => {
		const rest = await acc;
		const contents = await readFile(`${basePath}/${file}`, 'utf-8');
		return { ...rest, [file]: { file: { contents } } };
	}, Promise.resolve({}));
}
