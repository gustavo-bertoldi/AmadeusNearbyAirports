<script lang="ts">
	import { MaterialApp, Select } from 'svelte-materialify';
	import { itemsPerPage } from '$stores/api';
	import { CONSTANTS } from '$stores/constants';

	const items = [5, 10, 25, 50];
</script>

<MaterialApp>
	<div class="container">
		<div class="inner">
			<Select {items} bind:value={$itemsPerPage} color={$CONSTANTS.AMADEUS_BLUE}
				>Items per page</Select
			>
		</div>
	</div>
</MaterialApp>

<style>
	div.container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	div.inner {
		width: 100px;
	}
</style>
