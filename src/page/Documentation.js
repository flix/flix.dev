import React, {Component} from 'react';

class Documentation extends Component {
    render() {
        return (
            <div>
                <h1>Documentation</h1>
                <p>
                    Documentation on Flix is currently a bit sparse. The research aspects of Flix are fairly well
                    described in their respective papers, but there is currently no Flix language reference. The Flix
                    standard library has automatically generated documentation available at: <a
                    href="http://flix.github.io/api/">http://flix.github.io/api/</a>
                </p>
            </div>
        );
    }
}

export default Documentation;
