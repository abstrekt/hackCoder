<template>
	<v-app>
		<v-main>
			<div id="nav">
				<router-link to="/Submissions">Submissions</router-link> |
				<router-link to="/submissions/_id">Other</router-link>
			</div>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	components: {},

	data: () => ({
		//
	}),
};
</script>
