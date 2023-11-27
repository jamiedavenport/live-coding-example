<script lang="ts">
	import { basicSetup, EditorView } from 'codemirror';
	import { EditorState } from '@codemirror/state';
	import { javascript } from '@codemirror/lang-javascript';
	import { createEventDispatcher, onMount } from 'svelte';

	export let doc: string;

	let container: HTMLDivElement;
	let view: EditorView;

	const dispatch = createEventDispatcher();

	onMount(() => {
		view = new EditorView({
			state: EditorState.create({
				doc,
				extensions: [basicSetup, javascript()]
			}),
			parent: container,
			dispatch: async (transaction) => {
				view.update([transaction]);

				if (transaction.docChanged) {
					dispatch('change', transaction.newDoc.toString());
				}
			}
		});

		() => {
			view.destroy();
		};
	});
</script>

<div class="bg-white rounded shadow-sm h-full w-full">
	<div bind:this={container} />
</div>
