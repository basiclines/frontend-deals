import BlockElement from 'src/ui/content_blocks/block/block_element'

class ToolsElement extends BlockElement {
	get mediaSource() { return '/db/tools/tools.json' }
	get mediaPictureExtension() { return 'png' }
	get mediaType() { return 'Service' }
}

export default ToolsElement