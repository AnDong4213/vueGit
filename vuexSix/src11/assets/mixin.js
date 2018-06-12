export const playlistMixin = {
	data() {
		return {
			query: '哈哈',
			kk: 'KK'
		}
	},
	created() {
		// console.log('斤斤计较')
	},
	methods: {
		add() {
			console.log('这是VUE混入 (mixins) ')
		}
	}
}












