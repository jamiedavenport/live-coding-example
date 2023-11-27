import { marked } from 'marked';
import { readFile } from 'fs/promises';

export async function readMarkdownFile(filename: string): Promise<string> {
	const file = await readFile(filename, 'utf-8');

	return marked.parse(file);
}
