<template>
	<v-app class="">
		<v-navigation-drawer app>
			<submissionDetails />
		</v-navigation-drawer>
		<v-main>
			<v-container class="pa-md-16" fluid>
				<div class="subtitle-1 font-weight-light text-darken-1 mb-2">
					Submitted Code:
				</div>
				<Codemirror />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import submissionDetails from '../components/Submission-Card.vue';
import Codemirror from '../components/Codemirror.vue';

export default {
	components: {
		submissionDetails,
		Codemirror,
	},
};
</script>

<style scoped></style>
