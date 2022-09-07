<script lang="ts">
  import CoordForm from "$components/CoordForm.svelte";
  import ResultView from "$components/ResultView.svelte";
  import { MaterialApp } from "svelte-materialify";
  
</script>

<main>
  <MaterialApp>
    <h1 class="title">Nearby airports</h1>
    <CoordForm/>
    <ResultView/>
  </MaterialApp>
</main>

<style>
  h1.title {
    text-align: center;
    font-size: 3em;
  }
</style>