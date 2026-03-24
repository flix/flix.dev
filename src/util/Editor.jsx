import React, {Component} from 'react';
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-flix'
import 'ace-builds/src-noconflict/theme-chrome'

class Editor extends Component {
    onChange(input) {
        this.props.notifyTextChanged(input)
    };

    render() {
        return (
            <AceEditor width="100%"
                mode='flix'
                theme='chrome'
                ref="aceEditor"
                showGutter={false}
                showPrintMargin={false}
                highlightActiveLine={false}
                onChange={this.onChange.bind(this)}
                value={this.props.code}
                autoScrollEditorIntoView={true}
                maxLines={32}
                editorProps={{$blockScrolling: true}}/>
        )
    }
}

export default Editor
