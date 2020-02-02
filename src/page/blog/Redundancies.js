import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class Redundancies extends Component {

    componentDidMount() {
        document.title = "Flix | Blog | Redundancies as Compile-Time Errors";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Redundancies as Compile-Time Errors</h1>

                        <p>
                            As software developers, we hopefully all want to write correct and maintainable code.
                        </p>

                        <p>
                            Consider the following Scala program fragment from the Flix compiler:
                        </p>

                        <InlineEditor>
                            {`case Expression.ApplyClo(exp, args, tpe, loc) =>
    val e = visitExp(exp)
    val as = args map visitExp
    Expression.ApplyClo(e, as, tpe, loc)

case Expression.ApplyDef(sym, args, tpe, loc) =>
    val as = args map visitExp
    Expression.ApplyDef(sym, as, tpe, loc)

case Expression.Unary(op, exp, tpe, loc) =>
    val e = visitExp(exp)
    Expression.Unary(op, exp, tpe, loc)

case Expression.Binary(op, exp1, exp2, tpe, loc) =>
    val e1 = visitExp(exp1)
    val e2 = visitExp(exp2)
    Expression.Binary(op, e1, e2, tpe, loc)`}
                        </InlineEditor>

                        <p>
                            Do you spot the issue? If not look closer... OK, got it? The problem is that in the case for
                            unary expressions, while there is a recursive call on <code>exp</code> with its result
                            stored in the local variable <code>e</code>, the constructor mistakenly uses
                            the <code>exp</code> local variable.

                            XXX: This has been in the compiler for a long time. What could have helped? More tests cases, sure.
                            Or: What about a compiler that warns or gives errors about unused variables? The Scala compiler is mum.
                        </p>


                        <p>
                            Now consider the following:
                        </p>

                        <InlineEditor>
                            {`
  /**
    * Returns the result of looking up the given \`fieldName\` on the given \`className\`.
    */
  def lookupNativeField(className: String, fieldName: String, loc: SourceLocation): Result[Field, NameError] = try {
    // retrieve class object.
    val clazz = Class.forName(className)

    // retrieve the matching static fields.
    val fields = clazz.getDeclaredFields.toList.filter {
      case field => field.getName == fieldName && Modifier.isStatic(field.getModifiers)
    }

    // match on the number of fields.
    fields.size match {
      case 0 => Err(NameError.UndefinedNativeField(className, fieldName, loc))
      case 1 => Ok(fields.head)
      case _ => throw InternalCompilerException("Ambiguous native field?")
    }
  } catch {
    case ex: ClassNotFoundException => Err(NameError.UndefinedNativeClass(className, loc))
  }
`}
                        </InlineEditor>


                        <p>
                            Preamble...
                            Xie and Engler paper.
                            Talk about maintinable. WOrking on a large project. Deadcode being maintained.
                            Bugs lurking.
                            Spoil it here or start with
                        </p>


                        <p>
                            Do you see the problem? Well, the function is never called, and is in fact deadcode.
                            That did not prevent it from surving in the source code for an extended period.
                        </p>

                        <p>
                            Flix treats unused and dead-code as compile-time errors.
                        </p>

                        <p>
                            For these reasons, the Flix compiler/language is very aggressive in reporting suspcious or dead code.
                            Specifically, the compiler checks for:

                            <ul>
                                <li><b>Shadowed Local Variables</b> -- When a local variable hides another local variable.</li>
                                <li>Hidden Vars -- those with _ in front</li>
                                <li>Unsed Def</li>
                                <li>Unused Enum</li>
                                <li>Unused Enum Variant/Constructor</li>
                                <li>UnusedFormalParam</li>
                                <li>UnusedRel/Lat</li>
                                <li>Unused Type param</li>
                                <li>Unused Loval var</li>
                                <li>Useless expr - work in progress</li>
                            </ul>

                            In the future, we plan to extend this reporting to any new language feature that may be unused.
                        </p>


                        <p>
                            Opting out and getting used to it.
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Redundancies
