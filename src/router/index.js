import Vue from 'vue';
import VueRouter from 'vue-router';
import Submissions from '../views/Submissions.vue';
import Submission from '../views/Submission.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/submissions',
		name: 'Submissions',
		component: Submissions,
	},
	{
		path: '/submissions/:id',
		name: 'About',
		component: Submission,
	},
	{
		path: '*',
		redirect: '/submissions',
	},
];

const router = new VueRouter({
	routes,
});

export default router;
