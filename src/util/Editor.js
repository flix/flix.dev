import React, {Component} from 'react';

import nl2br from 'react-newline-to-break';

import AceEditor from 'react-ace'

import 'brace/mode/scala'
import 'brace/theme/crimson_editor'
import 'brace/theme/xcode'
import {Button} from "reactstrap";

class Editor extends Component {
    state = {
        input: this.props.code,
        output: undefined,
        waiting: false
    };

    run = () => {
        this.setState({waiting: true}, () => {
            // An ugly hack, because the server expects main to be named f.
            let src = this.state.input.replace("def main()", "def f()");

            this.props.flix(src, data =>
                this.setState({waiting: false, output: data})
            );
        })
    };

    onChange = input => {
        this.setState({input: input});
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
