<script lang="ts">
	import {
		MaterialApp,
		Row,
		Col,
		DataTable,
		DataTableHead,
		DataTableRow,
		DataTableCell,
		DataTableBody
	} from 'svelte-materialify';
	import { nearbyAirports } from '$stores/api';
	import ItemsPerPageSelector from './ItemsPerPageSelector.svelte';
	import PaginationControl from './PaginationControl.svelte';
</script>

<MaterialApp>
	{#if $nearbyAirports}
		<Row class="d-flex justify-center">
			<Col cols={5} sm={4} md={3} lg={2}>
				<p style="font-size: 20px">Results: {$nearbyAirports.meta.count}</p>
			</Col>
			<Col cols={5} sm={4} md={3} lg={2}>
				<ItemsPerPageSelector />
			</Col>
		</Row>
		<Row class="d-flex justify-center mr-3 ml-3">
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
		<Row class="d-flex justify-center">
			<Col cols={12} md={6}>
				<PaginationControl />
			</Col>
		</Row>
	{/if}
</MaterialApp>
