class Cliente {

	constructor() {
		this.deuda = 0
		this.ingreso = 10000
		this.criterioCredito = new CriterioCreditoDefault()
	}

	montoMaximoCredito() {
		return this.criterioCredito.montoMaximoCredito(this)
	}

	// asignan estrategias de crédito
	// permite encapsular los strategies hacia afuera
	dudoso() {
		this.criterioCredito = new CriterioCreditoDudoso()
	}

	especial() {
		this.criterioCredito = new CriterioCreditoEspecial()
	}

	// propiedad calculada saldo, se accede como un atributo
	get saldo() {
		return this.ingreso - this.deuda
	}
}

/** Estrategias para calcular el monto máximo */
class AbstractCriterioCredito {
	montoMaximoCredito(cliente) { return 0.3 * cliente.ingreso }
}
class CriterioCreditoDefault extends AbstractCriterioCredito {
}

class CriterioCreditoEspecial extends AbstractCriterioCredito {
	montoMaximoCredito(cliente) { 
		return super.montoMaximoCredito(cliente) + 2000
	}
}

class CriterioCreditoDudoso extends AbstractCriterioCredito { 
	montoMaximoCredito(cliente) { 
		if (cliente.deuda > 5000)
			return 100
		else 
			return super.montoMaximoCredito(cliente)
	 }
}
