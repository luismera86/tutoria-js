// Simulador par evaluar si puede conducir un vehículo luego de tomar alcohol

const preguntarBebida = () => {
  let bebida = prompt('¿Usted bebió alcohol? Responda si o no')

  while (bebida !== 'si' || bebida !== 'no') {
    if (bebida === 'si' || bebida === 'no') {
      return bebida
    } else {
      alert('Por favor responda si o no')
      bebida = prompt('¿Usted bebió alcohol? Responda si o no')
    }
  }
}

const estado = () => {
  let nombre = prompt('Ingrese el nombre de la persona')

  let bebida = preguntarBebida()
  console.log(bebida)

  let confirmado

  while (confirmado !== 'si') {
    if (bebida === 'no') {
      let confirmado = prompt(`${nombre} ¿Estas seguro que no mientes?`)
      if (confirmado === 'si') {
        return alert(`${nombre} Puedes manejar te felicito`)
      } else {
        return alert(`${nombre} no puede manejar, llame un taxi`)
      }
    } else {
      return alert(`${nombre} no puede manejar, llame un taxi`)
    }
  }
}
estado()
