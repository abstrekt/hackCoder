<template>
	<v-data-table
		:headers="headers"
		:items="submissions"
		:items-per-page="10"
	>
	</v-data-table>
</template>

<script>
export default {
	data() {
		return {
			headers: [
				{
					text: 'Time Submitted',
					value: 'time',
					align: 'start',
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
				},
				{
					text: 'Memory Taken',
					value: 'memory',
				},
				{
					text: 'Language',
					value: 'language',
				},
			],
			submissions: this.$store.state.all_submissions,
		};
	},
};
</script>
