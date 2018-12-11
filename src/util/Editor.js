import React from 'react'
import _ from 'lodash/fp'

import nl2br from 'react-newline-to-break';

import AceEditor from 'react-ace'

import 'brace/mode/scala'
import 'brace/theme/crimson_editor'
import 'brace/theme/xcode'
import {Button} from "reactstrap";

class Editor extends React.Component {
    state = {
        input: this.props.children.replace(/\\\\/g, "\n"),
        output: undefined,
        waiting: false
    };

    run = () => {
        this.setState({waiting: true}, () => {
            var src = this.state.input;

            if (this.props.main === "none") {
                src += "\ndef f(): Unit = ()"
            }

            this.props.flix(src, data =>
                this.setState({waiting: false, output: data})
            );
        })
    };

    debounced = _.debounce(1000, this.run);

    onChange = input => {
        this.setState({input}, this.debounced);
    };

    onClick = () => {
        this.run();
    };

    resultBox = () => {
        if (!this.state.output) {
            return undefined;
        } else {
            if (this.state.output.status === "success") {
                return (
                    <div>
                        {this.state.output.result}
                    </div>);
            } else {
                return (
                    <div>
                        {nl2br(this.state.output.message)}
                    </div>);
            }
        }
    };

    getHeight = () => (this.props.lines || 1) * 20;

    render() {
        return (
            <div className={"editor"}>
                <div>
                    <div>
                        <AceEditor
                            style={{width: '100%', height: this.getHeight() + 'px'}}
                            mode='scala'
                            theme='xcode'
                            showGutter={false}
                            showPrintMargin={false}
                            highlightActiveLine={false}
                            onChange={this.onChange}
                            value={this.state.input}
                            editorProps={{$blockScrolling: true}}/>
                        {this.state.waiting}
                    </div>

                    <div>
                        <Button className="btn-sm" onClick={this.onClick}>
                            Run
                        </Button>
                    </div>
                </div>
                {this.resultBox()}
            </div>
        )
    }
}

export default Editor
