import { loadFileSystem } from '$lib/server/files';
import { readMarkdownFile } from '$lib/server/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		fileSystem: loadFileSystem('example'),
		tutorialMd: await readMarkdownFile('example/README.md')
	};
};
