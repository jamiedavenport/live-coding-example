<script lang="ts">
	import { terminal } from '$lib/client/terminal';
	import { onMount } from 'svelte';
	import 'xterm/css/xterm.css';

	let container: HTMLDivElement;

	onMount(async () => {
		(await terminal).open(container);
	});
</script>

<div class="bg-white rounded shadow-sm h-full w-full">
	<div class="p-8" bind:this={container} />
</div>
