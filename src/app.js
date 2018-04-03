import {LEOElement} from 'leo'
import 'src/ui/registry'

class App extends LEOElement {
	render() {
		this.innerHTML = `
			<fd-header></fd-header>
			<fd-books title="Books" class="fd-block"></fd-books>
			<fd-code-editors title="Code Editors" class="fd-block"></fd-code-editors>
			<fd-dev-browsers title="Browsers for development" class="fd-block"></fd-dev-browsers>
			<fd-frameworks title="Frameworks" class="fd-block"></fd-frameworks>
			<fd-build-systems title="Build systems" class="fd-block"></fd-build-systems>
			<fd-tools title="Tools" class="fd-block"></fd-tools>
			<fd-online-training title="Online training" class="fd-block"></fd-online-training>
			<fd-conferences title="Conferences" class="fd-block"></fd-conferences>
			<fd-articles title="Articles" class="fd-block"></fd-articles>
		`
	}
}

customElements.define('fd-app', App)