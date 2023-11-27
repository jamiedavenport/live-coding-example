<script lang="ts">
	export let content: string;
</script>

<div class="bg-white rounded shadow-sm h-full w-full">
	<div class="prose p-8 max-w-none">
		{@html content}
	</div>
</div>
