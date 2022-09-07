<script lang="ts">
  import { MaterialApp, Select } from "svelte-materialify";
  import { itemsPerPage } from '$stores/api';

  const items = [5, 10, 25, 50];

</script>

<MaterialApp>
  <div class="container">
    <div class="inner">
      <Select {items} bind:value={$itemsPerPage} style="width">Items per page</Select>
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