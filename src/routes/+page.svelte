<script lang="ts">
	import Tutorial from './Tutorial.svelte';
	import Editor from './Editor.svelte';
	import Output from './Output.svelte';
	import type { PageData } from './$types';
	import type { WebContainer } from '@webcontainer/api';
	import { loadWebcontainer } from '$lib/client/webcontainer';
	import { onMount } from 'svelte';
	import { terminal } from '$lib/client/terminal';

	export let data: PageData;

	let webcontainer: WebContainer;

	async function startTestProcess() {
		webcontainer = await loadWebcontainer(data.fileSystem);
		const term = await terminal;

		const testProcess = await webcontainer.spawn('npm', ['test']);
		testProcess.output.pipeTo(
			new WritableStream({
				write(data) {
					term.write(data);
				}
			})
		);
	}

	function handleChange(e: { detail: string }) {
		if (!webcontainer) return;

		webcontainer.fs.writeFile('main.js', e.detail);
	}

	onMount(startTestProcess);
</script>

<div class="flex flex-row items-stretch h-screen gap-8 p-8">
	<div class="w-1/2"><Tutorial content={data.tutorialMd} /></div>
	<div class="w-1/2 flex flex-col gap-8">
		<div class="h-1/2">
			<Editor doc={data.fileSystem['main.js'].file.contents} on:change={handleChange} />
		</div>
		<div class="h-1/2">
			<Output />
		</div>
	</div>
</div>
