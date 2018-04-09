import BlockElement from 'src/ui/content_blocks/block/block_element'

class FrameworksElement extends BlockElement {
	get mediaSource() { return '/db/frameworks/frameworks.json' }
	get mediaPictureExtension() { return 'png' }
	get mediaType() { return 'Framework' }
}

export default FrameworksElement