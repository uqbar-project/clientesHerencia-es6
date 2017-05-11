describe('clientes', function() {
  let manuel
  let manuelSpecial
  let manuelDoubty

  beforeEach(function () {
    manuel = new Cliente()
    manuelDoubty = new Cliente()
    manuelDoubty.dudoso()
    manuelDoubty.deuda = 10000
    manuelPocoDeudorDudoso = new Cliente()
    manuelPocoDeudorDudoso.dudoso()
    manuelPocoDeudorDudoso.deuda = 3000
    manuelPocoDeudorDudoso.ingreso = 5000
    manuelSpecial = new Cliente()
    manuelSpecial.especial()
    manuelSpecial.deuda = 1000
  })

  it('monto maximo es el 30% de los ingresos', function() {
  	expect(3000).toBe(manuel.montoMaximoCredito())
  }) 
  it('monto maximo de un especial es el 30% de los ingresos + 2000', function() {
    expect(5000).toBe(manuelSpecial.montoMaximoCredito())
  })
  it('monto maximo de un dudoso poco deudor es 100', function() {
    expect(100).toBe(manuelDoubty.montoMaximoCredito())
  })
  it('monto maximo de un dudoso muy deudor es 30% de los ingresos', function() {
    expect(1500).toBe(manuelPocoDeudorDudoso.montoMaximoCredito())
  })
})
