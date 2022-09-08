<script lang="ts">
	import { MaterialApp, Row, Col, Button } from 'svelte-materialify';
	import { nearbyAirports, next, previous, first, page, nbPages } from '$stores/api';
	import { CONSTANTS } from '$stores/constants';

	$: nextVisible = $nearbyAirports?.meta.links?.next ? true : false;
	$: previousVisible = $nearbyAirports?.meta.links?.previous ? true : false;
</script>

<MaterialApp>
	<Row class="d-flex justify-space-between align-center pb-10">
		<Col class="d-flex justify-end" cols={3}>
			{#if previousVisible}
				<div class="button-container">
					<Button text style={`color: ${$CONSTANTS.AMADEUS_BLUE}`} on:click={first}>
						{'First'}
					</Button>
				</div>
			{/if}
		</Col>
		<Col class="d-flex justify-center align-center" cols={6}>
			<div class="button-container">
				{#if previousVisible}
					<Button text style={`color: ${$CONSTANTS.AMADEUS_BLUE}`} on:click={previous}>
						{'< Previous'}
					</Button>
				{/if}
			</div>
			<span class="ml-8 mr-8">Page {$page} of {$nbPages}</span>
			<div class="button-container">
				{#if nextVisible}
					<Button text style={`color: ${$CONSTANTS.AMADEUS_BLUE}`} on:click={next}>
						{'Next >'}
					</Button>
				{/if}
			</div>
		</Col>
		<Col class="d-flex justify-start" cols={3}>
			<div class="button-container">
				<!-- Last button -->
			</div>
		</Col>
	</Row>
</MaterialApp>

<style>
	div.button-container {
		width: 150px;
		display: flex;
		justify-content: center;
	}
</style>
