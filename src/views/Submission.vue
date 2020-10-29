<template>
	<div class="">
		<submissionDetails />
		<Codemirror />
	</div>
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
