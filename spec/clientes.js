describe('clientes', () => {
  let manuel
  let manuelSpecial
  let manuelDoubty
  let manuelPocoDeudorDudoso

  beforeEach(() => {
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

  it('monto maximo es el 30% de los ingresos', () => {
  	expect(3000).toBe(manuel.montoMaximoCredito())
  }) 
  it('monto maximo de un especial es el 30% de los ingresos + 2000', () => {
    expect(5000).toBe(manuelSpecial.montoMaximoCredito())
  })
  it('monto maximo de un dudoso poco deudor es 100', () => {
    expect(100).toBe(manuelDoubty.montoMaximoCredito())
  })
  it('monto maximo de un dudoso muy deudor es 30% de los ingresos', () => {
    expect(1500).toBe(manuelPocoDeudorDudoso.montoMaximoCredito())
  })
})
