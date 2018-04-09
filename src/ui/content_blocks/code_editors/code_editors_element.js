import BlockElement from 'src/ui/content_blocks/block/block_element'

class CodeEditorsElement extends BlockElement {
	get mediaSource() { return '/db/code_editors/code_editors.json' }
	get mediaPictureExtension() { return 'png' }
	get mediaType() { return 'Code editor' }
}

export default CodeEditorsElement