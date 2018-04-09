import {LEOObject} from 'leo'

let singleton = null
class Router extends LEOObject {

	get root() { return '' }

	updateURLBar(url) {
		window.history.pushState({}, '', url)
	}

	appendToHistory(url) {
		this.history.push(url)
	}

	navigate(url) {
		this.appendToHistory(url)
		this.updateURLBar(url)
		this.url = url
	}

	bind() {
		window.addEventListener('popstate', (e) => {
			let url = document.location.path
			this.trigger('change', url);
			this.trigger('change:url', url);
			this.url = url
		})
	}

	constructor() {
		super()
		this.url = window.location.href
		this.history = []
		this.bind()

		if (!singleton) singleton = this
		return singleton
	}
}

export default new Router()