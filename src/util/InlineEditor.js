import React, { Component } from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/scala'

import FlixMode from './FlixMode'
import 'brace/theme/chrome'

class InlineEditor extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      input: this.props.children,
    }
  }

  componentDidMount() {
    const customMode = new FlixMode()
    this.refs.aceEditor.editor.getSession().setMode(customMode)
  }

  render() {
    return (
      <div className="inline-editor-frame">
        <div className="inline-editor-code">
          <AceEditor
            style={{ background: 'inherit', width: '95%' }}
            mode="text"
            theme="chrome"
            ref="aceEditor"
            readOnly={true}
            showGutter={false}
            showPrintMargin={false}
            highlightActiveLine={false}
            onChange={this.onChange}
            value={this.state.input}
            autoScrollEditorIntoView={true}
            minLines={1}
            maxLines={40}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
    )
  }
}

export default InlineEditor
