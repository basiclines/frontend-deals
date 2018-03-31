import {LEOObject, LEOElement} from 'leo'

class Person extends LEOObject {
	constructor() {
		super()
		console.log('constructor')
	}
}

let ismael = new Person({name: 'ismael'})

console.log('hello', ismael)