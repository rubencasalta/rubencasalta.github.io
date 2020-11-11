	const AttributeBinding = {
		data() {
			return {
				colorClass: 'text-primary'
			}
		},
		methods: {
			changeColor() {
			  this.colorClass = 'text-success'
			}
		  }
	}

  Vue.createApp(AttributeBinding).mount('#bind-attribute')