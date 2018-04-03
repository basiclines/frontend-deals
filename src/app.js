import {LEOElement} from 'leo'
import 'src/ui/registry'

class App extends LEOElement {
	render() {
		this.innerHTML = `
			<fd-header></fd-header>
			<fd-books data-shows-on="all,learn" title="Books" class="fd-block"></fd-books>
			<fd-code-editors data-shows-on="all,tools" title="Code Editors" class="fd-block"></fd-code-editors>
			<fd-dev-browsers data-shows-on="all,tools" title="Browsers for development" class="fd-block"></fd-dev-browsers>
			<fd-frameworks data-shows-on="all,tools" title="Frameworks" class="fd-block"></fd-frameworks>
			<fd-build-systems data-shows-on="all,tools" title="Build systems" class="fd-block"></fd-build-systems>
			<fd-online-training data-shows-on="all,learn" title="Online training" class="fd-block"></fd-online-training>
			<fd-conferences data-shows-on="all,community,grow" title="Conferences" class="fd-block"></fd-conferences>
			<fd-articles data-shows-on="all,grow,community" title="Articles" class="fd-block"></fd-articles>
			<fd-libraries data-shows-on="all,grow" title="Libraries" class="fd-block"></fd-libraries>
			<fd-tools data-shows-on="all,tools" title="Services" class="fd-block"></fd-tools>
			<footer>Made by <a href="https://ismael.fyi" target="_blank">ismael.fyi</a></footer>
		`
	}
}

customElements.define('fd-app', App)