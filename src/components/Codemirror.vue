<template>
	<!-- Two-way Data-Binding -->
	<codemirror v-model="code" :options="cmOptions" />
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';

// import language js
import 'codemirror/mode/clike/clike.js';

// import theme style
import 'codemirror/theme/base16-dark.css';

// import more 'codemirror/some-resource...'

export default {
	data() {
		return {
			code: `vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r) {
    vector<bool> res;
    for (auto i = 0; i < l.size(); ++i) {
        if (r[i] - l[i] < 2)
            res.push_back(true);
        else {
            vector<int> n(begin(nums) + l[i], begin(nums) + r[i] + 1);
            int j = 2;
            sort(begin(n), end(n));
            for (; j < n.size(); ++j)
                if (n[j] - n[j - 1] != n[1] - n[0])
                    break;
            res.push_back(j == n.size());
        }
    }
    return res;
}`,
			cmOptions: {
				tabSize: 4,
				mode: 'text/x-c++src',
				theme: 'base16-dark',
				lineNumbers: true,
				line: true,
				lineWrapping: true,
				readOnly: true,
			},
		};
	},
	components: {
		codemirror,
	},

	methods: {
		onCmReady(cm) {
			console.log('the editor is readied!', cm);
		},
		onCmFocus(cm) {
			console.log('the editor is focused!', cm);
		},
		onCmCodeChange(newCode) {
			console.log('this is new code', newCode);
			this.code = newCode;
		},
	},
};
</script>

<style>
.CodeMirror {
	height: 600px;
	width: auto;
	padding: 10px;
	border-radius: 5px;
}
</style>
