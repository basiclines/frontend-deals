import {LEOObject, LEOElement} from 'leo'
import 'src/ui/registry'

class App extends LEOElement {
	render() {
		this.innerHTML = `
			<fd-header></fd-header>
			<fd-books class="fd-block"></fd-books>
		`
	}
}

customElements.define('fd-app', App)