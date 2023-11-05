import React, { Component } from 'react'
import { Card, CardImg, Col, Container, Row } from 'reactstrap'
import VSCode from '../gif/vscode.png'

class GetStarted extends Component {
  componentDidMount() {
    document.title = 'Flix | Getting Started'
  }

  render() {
    return (
      <Container>
        <h1>Get Started</h1>

        <Row className="mb-4">
          <Col>
            <h5>Using the Online Playground</h5>
            <p>
              You can try Flix online at <a href="https://play.flix.dev/">play.flix.dev</a>.
            </p>
          </Col>
        </Row>

        <hr />

        <Row className="mb-4">
          <Col>
            <h5>Using Visual Studio Code</h5>

            <p>
              Or you can install Flix in <a href="https://code.visualstudio.com/">Visual Studio Code</a>:
            </p>

            <Card className="ml-5 mr-5">
              <CardImg top src={VSCode} />
            </Card>
          </Col>
        </Row>

        <hr />

        <Row className="mb-4">
          <Col>
            <h5>Manually downloading and running the compiler</h5>
            <p>
              <ol>
                <li>
                  Ensure that you have at least Java 11 installed. You can check with <code>java -version</code>.
                </li>
                <li>
                  Download the latest version of the Flix compiler (<code>flix.jar</code>) at{' '}
                  <a href="https://github.com/flix/flix/releases/latest">
                    https://github.com/flix/flix/releases/latest
                  </a>
                  .
                </li>
                <li>
                  Create an empty folder (e.g. <code>mkdir flixproject</code>) and place the downloaded Flix JAR (
                  <code>flix.jar</code>) into that folder.
                </li>
                <li>
                  Enter the created directory (e.g. <code>cd flixproject</code>) and run{' '}
                  <code>java -jar flix.jar init</code> to create an empty Flix project.
                </li>
                <li>
                  Run <code>java -jar flix.jar run</code> to compile and run the project.
                </li>
                <li>
                  Flix will compile the project and execute the <code>main</code> function (located in{' '}
                  <code>src/Main.flix</code>).
                </li>
              </ol>
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default GetStarted
