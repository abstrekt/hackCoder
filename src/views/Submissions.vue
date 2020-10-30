<template>
	<v-card class="all_submissions mt-md-16 mt-7">
		<v-card-title>
			All Submissions for Contenst: "Beta-0"
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Filter (Problem/Result)"
				single-line
				hide-details
			></v-text-field>
		</v-card-title>
		<v-data-table
			:headers="headers"
			:items="submissions"
			:items-per-page="10"
			:search="search"
			@click:row="viewSubmission"
		>
		</v-data-table>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			headers: [
				{
					text: 'Time Submitted',
					value: 'time',
					align: 'start',
					filterable: false,
				},
				{
					text: 'Problem Name',
					value: 'problem',
				},
				{
					text: 'Result',
					value: 'result',
				},
				{
					text: 'Time Taken',
					value: 'runtime',
					filterable: false,
				},
				{
					text: 'Memory Taken',
					value: 'memory',
					filterable: false,
				},
				{
					text: 'Language',
					value: 'language',
					filterable: false,
				},
			],
			submissions: this.$store.state.all_submissions,
		};
	},
	methods: {
		viewSubmission(item) {
			this.$router.push(`/submissions/${item.id}`);
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep tbody tr {
	cursor: pointer;
}
.all_submissions {
	width: 90%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
</style>
