import { useState } from 'react';
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-flix'
import 'ace-builds/src-noconflict/theme-chrome'

function InlineEditor({ children }) {
    const [input] = useState(children);

    return (
        <div className="inline-editor-frame">
            <div className="inline-editor-code">
                <AceEditor
                    style={{"background": "inherit", "width": "95%"}}
                    mode='flix'
                    theme='chrome'
                    readOnly={true}
                    showGutter={false}
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    value={input}
                    autoScrollEditorIntoView={true}
                    minLines={1}
                    maxLines={40}
                    editorProps={{$blockScrolling: true}}/>
            </div>
        </div>
    )
}

export default InlineEditor
