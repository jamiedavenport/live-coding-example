<script lang="ts">
	import Tutorial from './Tutorial.svelte';
	import Editor from './Editor.svelte';
	import Output from './Output.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-row items-stretch h-screen gap-8 p-8">
	<div class="w-1/2"><Tutorial content={data.tutorialMd} /></div>
	<div class="w-1/2 flex flex-col gap-8">
		<div class="h-1/2">
			<Editor />
		</div>
		<div class="h-1/2">
			<Output />
		</div>
	</div>
</div>
