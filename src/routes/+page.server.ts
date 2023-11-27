import { readMarkdownFile } from '$lib/server/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		tutorialMd: await readMarkdownFile('example/README.md')
	};
};
