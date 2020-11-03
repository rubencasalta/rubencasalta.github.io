	var app = new Vue({
		el: '#app',
		data: {
			title: 'Rubén Casalta con Vue.js',
			fruits: [
				{name:'Manzana',amount:3},
				{name:'Pera',amount:0},
				{name:'Platano',amount:45},
			],
			newFruit: ''
		},
		methods: {
			addFruit () {
				this.fruits.push({
					name: this.newFruit,
					amount: 1
				})
			}
		}
	});