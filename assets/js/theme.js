
	var appUno = new Vue({
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

	var apDos = new Vue({
		el: '#app-2',
		data: {
			bg: 'bg-warning',
			color: false
		},
		methods: {

		}
	});

	var apTres = new Vue({
		el: '#app-3',
		data: {
			msg: "Hola soy Musca",
			count: 0
		},
		computed: {
			msgReverse() {
				return this.msg.split('').reverse().join('');
			},
			color() {
				return {
					'bg-success' : this.count <= 20,
					'bg-primary' : this.count >= 40,
					'bg-warning' : this.count >= 60,
					'bg-danger' : this.count > 80
				}
			}
		},
		methods: {
			addCount() {
				this.count = this.count + 10;
				if(this.count > 100) {
					this.count = 100;
				}
			},
			subCount() {
				this.count = this.count - 10;
				if(this.count < 0) {
					this.count = 0;
				}
			}
		}
	});