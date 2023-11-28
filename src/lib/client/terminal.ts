import { browser } from '$app/environment';
import type { Terminal } from 'xterm';

export let loaded = false;
export let terminal: Promise<Terminal> = new Promise(() => {});

async function load() {
	terminal = new Promise((resolve) => {
		import('xterm').then(({ Terminal }) => {
			loaded = true;
			resolve(
				new Terminal({
					convertEol: true,
					fontSize: 16,
					theme: {
						foreground: '#000',
						background: '#fff'
					}
				})
			);
		});
	});
}

if (browser && !loaded) {
	load();
}
