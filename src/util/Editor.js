import React, {Component} from 'react';
import AceEditor from 'react-ace'
import 'brace/mode/scala'

import FlixMode from './FlixMode'
import 'brace/theme/chrome';

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let customMode = new FlixMode();
        this.refs.aceEditor.editor.getSession().setMode(customMode);
    }

    onChange(input) {
        this.props.notifyTextChanged(input)
    };

    render() {
        return (
            <div>
                <AceEditor
                    mode='text'
                    theme='chrome'
                    ref="aceEditor"
                    showGutter={false}
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    onChange={this.onChange.bind(this)}
                    value={this.props.code}
                    autoScrollEditorIntoView={true}
                    maxLines={25}
                    editorProps={{$blockScrolling: true}}/>
            </div>
        )
    }
}

export default Editor
