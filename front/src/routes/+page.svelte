<script lang="ts">
	import CoordForm from '$components/CoordForm.svelte';
	import ResultView from '$components/ResultView.svelte';
	import { MaterialApp, Row, Col } from 'svelte-materialify';
</script>

<main>
	<MaterialApp>
    <Row class="d-flex justify-center mt-8">
      <img height="35px" src="amadeus_logo.png" alt=""/>
		</Row>
    <h1 class="title">Nearby airports</h1>
		<CoordForm />
		<ResultView />
	</MaterialApp>
</main>

<style>
	h1.title {
		text-align: center;
		font-size: 3em;
	}
</style>
