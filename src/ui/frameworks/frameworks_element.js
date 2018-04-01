import BlockElement from 'src/ui/block/block_element'

class FrameworksElement extends BlockElement {
	get mediaSource() { return '/db/frameworks/frameworks.json' }
	get mediaPictureExtension() { return 'png' }
}

export default FrameworksElement