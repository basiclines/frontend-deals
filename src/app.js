import {LEOObject, LEOElement} from 'leo'
import 'src/components/registry'

class App extends LEOElement {
	render() {
		this.innerHTML = `
			<h1>app</h1>
			<fd-books></fd-books>
		`
	}
}

customElements.define('fd-app', App)