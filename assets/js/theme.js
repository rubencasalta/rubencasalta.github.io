	var app = new Vue({
		el: '#app',
		data: {
			title: 'Rubén Casalta',
			lead: 'Aunque  todo mis proyectos para clientes los tengo como privados puedes ver mi tema básico para Wordpress con el que desarrollo todo mi trabajo profesional.',
			email: 'ruben.casalta@gmail.com',
			phone: '644 496 836',
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