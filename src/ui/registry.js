import HeaderElement from 'src/ui/header/header_element'
import BooksElement from 'src/ui/books/books_element'
import CodeEditorsElement from 'src/ui/code_editors/code_editors_element'
import FrameworksElement from 'src/ui/frameworks/frameworks_element'
import ToolsElement from 'src/ui/tools/tools_element'
import OnlineTrainingElement from 'src/ui/online_training/online_training_element'
import DevBrowsersElement from 'src/ui/dev_browsers/dev_browsers_element'
import BuildSystemsElement from "src/ui/build_systems/build_systems_element"
import ConferencesElement from "src/ui/conferences/conferences_element"


customElements.define('fd-header', HeaderElement)
customElements.define('fd-books', BooksElement)
customElements.define('fd-code-editors', CodeEditorsElement)
customElements.define('fd-frameworks', FrameworksElement)
customElements.define('fd-tools', ToolsElement)
customElements.define('fd-online-training', OnlineTrainingElement)
customElements.define('fd-dev-browsers', DevBrowsersElement)
customElements.define('fd-build-systems', BuildSystemsElement)
customElements.define('fd-conferences', ConferencesElement)