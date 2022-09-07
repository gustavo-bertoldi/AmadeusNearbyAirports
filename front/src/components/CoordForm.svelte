<script lang="ts">
	import { Row, Col, TextField, Button, MaterialApp } from 'svelte-materialify';
  import { CONSTANTS } from '$stores/constants';
  import { getNearbyAirports } from '$stores/api';

  let latitude = '49.00';
  let longitude = '2.55';
  let searchActive = true;

  const latitudeValidation = [
    (v: string) => {
      let n = Number(v);
      if (isNaN(n) || n > 180 || n < -180) {
        searchActive = false;
        return 'Invalid latitude';
      }
      searchActive = true;
      return true;
    }
  ]
  const longitudeValidation = [
    (v: string) => {
      let n = Number(v);
      if (isNaN(n) || n > 90 || n < -90) {
        searchActive = false;
        return 'Invalid longitude';
      }
      searchActive = true;
      return true;
    }
  ]
</script>

<MaterialApp>
  <Row class="d-flex justify-center">
    <Col cols={6} sm={4} md={3} lg={2}>
      <TextField rules={latitudeValidation} bind:value={latitude}>Latitude</TextField>
    </Col>
    <Col cols={6} sm={4} md={3} lg={2}>
      <TextField rules={longitudeValidation} bind:value={longitude}>Longitude</TextField>
    </Col>
    
  </Row>
  <Row class="d-flex justify-center ma-10">
    {#if searchActive}
    <Button 
      class="white-text" 
      style={`background-color: ${$CONSTANTS.AMADEUS_BLUE}`}
      on:click={() => getNearbyAirports(latitude, longitude)}
      >
      Search
    </Button>
    {/if}
  </Row>
</MaterialApp>

