import React, {Component} from 'react';

class News extends Component {
    render() {
        return (
            <div>

                <div>
                    <div className="panel panel-info">
                        <div className="panel-heading"> Recent News</div>
                        <div className="panel-body">
                            <ul>
                                <li>
                                    2018-05-01 The paper <a href="https://flix.github.io/pub/cc2018/paper.pdf">Tail Call
                                    Elimination and Data Representation for Functional Languages on the Java Virtual
                                    Machine
                                </a> is now available!
                                </li>
                                <li>
                                    2017-10-11 Flix <a href="https://github.com/flix/flix/releases/tag/v0.2">version
                                    0.2</a> is
                                    now available!
                                </li>
                                <li>
                                    2017-04-18 Flix <a href="https://github.com/flix/flix/releases/tag/v0.1">version
                                    0.1</a> is
                                    now available!
                                </li>
                                <li>2016-09-25 Ming-Ho Yee's master thesis <a
                                    href="https://flix.github.io/pub/theses/ming-ho-yee.pdf">
                                    Implementing a Functional Language for Flix
                                </a> is now available.
                                </li>
                                <li>2016-09-13 The extended abstract
                                    <a href="https://flix.github.io/pub/tapas2016/abstract.pdf">
                                        Programming a Dataflow Analysis in Flix
                                    </a>
                                    from <a href="http://staticanalysis.org/tapas2016/">TAPAS 2016</a> is now available.
                                </li>
                                <li>2016-07-14 The poster <a href="https://flix.github.io/pub/ecoop2016/poster.pdf">
                                    Flix and its Implementation: A Language for Static Analysis</a> from ECOOP 2016
                                    is now available!
                                </li>
                                <li>2016-07-14 The <a href="https://www.youtube.com/watch?v=9EC8gnKIUII">video</a> from
                                    PLDI 2016 is now online!
                                </li>
                                <li>2016-06-20 The <a
                                    href="https://flix.github.io/pub/pldi2016/slides.pdf">slides</a> from
                                    the presentation at PLDI 2016 are now available!
                                </li>
                                <li>2016-06-10 The first preview version of Flix is now available!
                                </li>
                                <li>2016-06-10 The paper <a href="https://flix.github.io/pub/pldi2016/paper.pdf">From
                                    Datalog to
                                    Flix: A Declarative Language for Fixed
                                    Points on Lattices</a> is now available.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;
