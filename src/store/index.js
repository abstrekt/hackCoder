import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	all_submissions: [
		{
			time: '1 month ago',
			problem: 'Reverse a binary tree',
			result: 'Wrong Answer',
			runtime: '24ms',
			memory: '290MB',
			language: 'Python3',
		},
		{
			time: '2 month ago',
			problem: 'House Robbers II',
			result: 'Runtime Error',
			runtime: '24ms',
			memory: '291MB',
			language: 'Python3',
		},
		{
			time: '3 weeks agp',
			problem: 'Find least number of strings',
			result: 'Accepted',
			runtime: '24ms',
			memory: '292MB',
			language: 'Python3',
		},
		{
			time: '4 weeks ago',
			problem: 'Reverse a binary tree',
			result: 'Time Limit Exceeded',
			runtime: '21ms',
			memory: '293MB',
			language: 'Python3',
		},
		{
			time: '1 month ago',
			problem: 'Memory Limit Exceeded',
			result: 'Accepted',
			runtime: '24ms',
			memory: '294MB',
			language: 'Python3',
		},
		{
			time: '1 month ago',
			problem: 'Reverse a Linked List',
			result: 'Accepted',
			runtime: '24ms',
			memory: '295MB',
			language: 'Python3',
		},
		{
			time: '1 month ago',
			problem: 'Reverse a binary tree',
			result: 'Accepted',
			runtime: '25ms',
			memory: '190MB',
			language: 'Perl',
		},
		{
			time: '5 month ago',
			problem: 'Reverse a binary tree',
			result: 'Accepted',
			runtime: '24ms',
			memory: '296MB',
			language: 'Java',
		},
		{
			time: '1 year ago',
			problem: 'Reverse a binary tree',
			result: 'Accepted',
			runtime: '22ms',
			memory: '497MB',
			language: 'Python3',
		},
	],
};

export default new Vuex.Store({
	state: state,
	mutations: {},
	actions: {},
	modules: {},
});
