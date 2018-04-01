import {LEOObject, LEOElement} from 'leo'
import 'src/ui/registry'

class App extends LEOElement {
	render() {
		this.innerHTML = `
			<fd-header></fd-header>
			<fd-books></fd-books>
		`
	}
}

customElements.define('fd-app', App)