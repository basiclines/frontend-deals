import {LEOElement} from 'leo'

const SCROLL_OFFSET = 244
class HeaderElement extends LEOElement {

	bind(e) {
		super.bind()
		window.addEventListener('scroll', () => {
			requestAnimationFrame(() => { this.modulateScroll(window) })
		})
	}

	modulateScroll(target) {
		let scroll = target.scrollY
		let opacity = (scroll < SCROLL_OFFSET) ? 1 - (scroll * 1) / SCROLL_OFFSET : 0;
		let top  = (scroll < SCROLL_OFFSET) ? 0 - (scroll * 20) / SCROLL_OFFSET : 0;

		this.inner.style.opacity = opacity;
		this.archive.style.transform = `translateY(${top}px)`;

		(scroll + 1 > SCROLL_OFFSET) ? this.classList.add('stacked-tabs') : this.classList.remove('stacked-tabs')
	}

	render() {
		this.innerHTML = `
			<div data-select="inner" class="inner">
				<a class="logo" href="/">Frontend Deals Logo</a>
				<h1>Frontend Deals</h1>
				<p>A curated list of front-end and javascript resources.</p>
			</div>
			<nav>
				<fd-archive-selector data-select="archive"></fd-archive-selector>
				<fd-tabs scroll-offset="${SCROLL_OFFSET}"></fd-tabs>	
			</nav>
		`
	}

	mount() {
		this.inner = this.find('[data-select=inner]')
		this.archive = this.find('[data-select=archive]')
	}
}

export default HeaderElement