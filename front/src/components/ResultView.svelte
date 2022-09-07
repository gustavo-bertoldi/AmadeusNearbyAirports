<script lang="ts">
	import {
		MaterialApp,
		Row,
		Col,
    Button,
		DataTable,
		DataTableHead,
		DataTableRow,
		DataTableCell,
		DataTableBody
	} from 'svelte-materialify';
	import { nearbyAirports, next, previous } from '$stores/api';
  import { CONSTANTS } from '$stores/constants'

  $: nextVisible = $nearbyAirports?.meta.links?.next ? true : false;
  $: previousVisible = $nearbyAirports?.meta.links?.previous ? true : false;
</script>

<MaterialApp>
  {#if $nearbyAirports}
  <Row class="d-flex justify-center">
    <p style="font-size: 20px">Results: {$nearbyAirports.meta.count}</p>
  </Row>
	<Row class="d-flex justify-center mr-10 ml-10">
		<Col class="d-flex justify-center" cols={12} sm={10} md={8}>
				<DataTable class="d-flex justify-center">
					<DataTableHead>
						<DataTableRow>
							<DataTableCell>Type</DataTableCell>
							<DataTableCell>Name</DataTableCell>
							<DataTableCell>City</DataTableCell>
							<DataTableCell>Distance</DataTableCell>
						</DataTableRow>
					</DataTableHead>
					<DataTableBody>
						{#each $nearbyAirports.data as airport}
							<DataTableRow>
								<DataTableCell>{airport.subType}</DataTableCell>
								<DataTableCell>{airport.name}</DataTableCell>
								<DataTableCell>{airport.address.cityName}</DataTableCell>
								<DataTableCell>{airport.distance.value} {airport.distance.unit}</DataTableCell>
							</DataTableRow>
						{/each}
					</DataTableBody>
				</DataTable>
		</Col>
	</Row>
  <Row class="d-flex justify-center pb-10">
    {#if previousVisible}
    <Button text style={`color: ${$CONSTANTS.AMADEUS_BLUE}`}
      on:click={previous}
      >{'< Previous'}</Button>
    {/if}
    {#if nextVisible}
    <Button text style={`color: ${$CONSTANTS.AMADEUS_BLUE}`}
      on:click={next}>{'Next >'}</Button>
    {/if}
  </Row>
  {/if}
</MaterialApp>
