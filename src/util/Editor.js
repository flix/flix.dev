import React, {Component} from 'react';
import AceEditor from 'react-ace'
import 'brace/mode/scala'

import FlixMode from './FlixMode'
import 'brace/theme/chrome';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.code
        }
    }

    componentDidMount() {
        let customMode = new FlixMode();
        this.refs.aceEditor.editor.getSession().setMode(customMode);
    }

    onChange(input) {
        this.setState({input: input}, () => {
            this.props.notifyTextChanged(input)
        });
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
                    value={this.state.input}
                    autoScrollEditorIntoView={true}
                    minLines={25}
                    maxLines={25}
                    editorProps={{$blockScrolling: true}}/>
            </div>
        )
    }
}

export default Editor
