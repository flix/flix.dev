import React, {Component} from 'react';

import nl2br from 'react-newline-to-break';

import AceEditor from 'react-ace'

import 'brace/mode/scala'
import 'brace/theme/crimson_editor'
import 'brace/theme/xcode'
import {Badge, Button, ButtonGroup, Card, CardText} from "reactstrap";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            input: this.props.code,
            output: undefined,
            waiting: false
        }
    }

    run = () => {
        this.setState({waiting: true}, () => {
            // An ugly hack, because the server expects main to be named f.
            let src = this.state.input.replace("def main()", "def f()");

            this.props.flix.run(src, data =>
                this.setState({waiting: false, output: data})
            );
        })
    };

    isConnected() {
        if (this.props.flix.connected) {
            return <Badge color="info" className="float-right">Connected</Badge>
        } else {
            return <Badge color="secondary">Disconnected</Badge>
        }
    }

    onChange = input => {
        this.setState({input: input});
    };

    onRunClick = () => {
        this.run();
    };

    onResetClick = () => {
        this.setState(this.getInitialState())
    };

    resultBox = () => {
        if (!this.state.output) {
            return undefined;
        } else {
            if (this.state.output.status === "success") {
                return (
                    <Card body outline color="success" className="mt-2">
                        <CardText>
                            Main returned: <code>{this.state.output.result}</code>
                        </CardText>
                    </Card>);
            } else {
                return (
                    <Card body outline color="danger" className="mt-2">
                        <CardText>
                            <code>
                                {nl2br(this.state.output.message)}
                            </code>
                        </CardText>
                    </Card>);
            }
        }
    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        <AceEditor
                            mode='scala'
                            theme='xcode'
                            showGutter={false}
                            showPrintMargin={false}
                            highlightActiveLine={false}
                            onChange={this.onChange}
                            value={this.state.input}
                            autoScrollEditorIntoView={true}
                            minLines={5}
                            maxLines={24}
                            editorProps={{$blockScrolling: true}}/>
                        {this.state.waiting}
                    </div>

                    <ButtonGroup>
                        <Button color="primary" outline className="btn-sm" onClick={this.onRunClick}>Run</Button>
                        <Button color="secondary" outline className="btn-sm" onClick={this.onResetClick}>Reset</Button>
                    </ButtonGroup>

                    {this.isConnected()}
                </div>
                {this.resultBox()}
            </div>
        )
    }
}

export default Editor
