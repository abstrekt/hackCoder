<template>
	<v-card class="sub-detail">
		<v-card-title>Submission Detail</v-card-title>
		<v-card-text>
			<h3 class="">Status: {{ details.result }}</h3>
			<br />
			<div class="">
				<strong>Problem Name:</strong> <br />
				{{ details.problem }}
			</div>
			<br />
			<div class="">
				<strong>
					{{ details.test_cases[0] }} /
					{{ details.test_cases[1] }}</strong
				>
				test cases passed.
			</div>
			<div class="">
				Runtime: <strong>{{ details.runtime }}</strong>
			</div>
			<div class="">
				Memory Usage: <strong>{{ details.memory }}</strong>
			</div>
			<div class="">
				Language: <strong>{{ details.language }}</strong>
			</div>
			<br />
			<div class="font-italic">
				Submitted: <strong>{{ details.time }}</strong>
			</div>
		</v-card-text>
		<v-card-actions>
			<v-btn text @click="goBack" color="deep-purple accent-4">
				Go Back
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'submissionDetails',
	data() {
		return {
			details: this.$store.state.all_submissions.find(
				item => item.id == this.$route.params.id
			),
		};
	},
	methods: {
		goBack() {
			this.$router.push(`/submissions`);
		},
	},
};
</script>

<style scoped>
.sub-detail {
	max-width: 210px;
	position: fixed;
	left: 20px;
	top: 10vh;
}
</style>
