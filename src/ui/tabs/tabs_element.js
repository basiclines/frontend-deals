import {LEOElement} from 'leo'
import SCROLL_OFFSET from 'src/ui/header/header_element'

class TabsElement extends LEOElement {

	goToTop() {
		const SCROLL_OFFSET = this.attrs['scroll-offset'];
		if (window.scrollY > SCROLL_OFFSET) window.scrollTo(0, SCROLL_OFFSET)
	}

	filterBlocks() {
		let blocks = document.body.querySelectorAll('[data-shows-on]')
		blocks.forEach(item => {
			let isElementMounted = (typeof item.attrs != 'undefined');
			if (isElementMounted) {
				item.attrs['data-hidden'] = (item.attrs['data-shows-on'].search(this.data.activeTab) == -1)
			}
		})
	}

	onClick(e) {
		let element = e.target;
		if (element.hasAttribute('data-show-tab')) {
			this.setActive(element.getAttribute('data-show-tab'))
			e.preventDefault()
		}
	}

	setActive(tab) {
		this.data.activeTab = tab || 'all'
	}

	getActiveClass(tab) {
		return (this.data.activeTab == tab) ? 'active' : ''
	}

	render() {
		this.innerHTML = `
			<ul>
				<li class="${this.getActiveClass('all')}"><a data-show-tab="all" href="/all">All</a></li>
				<li class="${this.getActiveClass('learn')}"><a data-show-tab="learn" href="/learn">Learn</a></li>
				<li class="${this.getActiveClass('grow')}"><a data-show-tab="grow" href="/grow">Grow</a></li>
				<li class="${this.getActiveClass('tools')}"><a data-show-tab="tools" href="/tools">Toolbox</a></li>
				<li class="${this.getActiveClass('community')}"><a data-show-tab="community" href="/community">Community</a></li>
			</ul>
		`
	}

	bind() {
		super.bind()
		this.data.on('change:activeTab', (tab) => {
			this.filterBlocks()
			this.goToTop()
		})
	}

	mount() {
		this.setActive()
	}
}

export default TabsElement