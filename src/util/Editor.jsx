import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-flix'
import 'ace-builds/src-noconflict/theme-chrome'

function Editor({ code, notifyTextChanged }) {
    return (
        <AceEditor width="100%"
            mode='flix'
            theme='chrome'
            showGutter={false}
            showPrintMargin={false}
            highlightActiveLine={false}
            onChange={notifyTextChanged}
            value={code}
            autoScrollEditorIntoView={true}
            maxLines={32}
            editorProps={{$blockScrolling: true}}/>
    )
}

export default Editor
