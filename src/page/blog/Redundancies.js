import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class Redundancies extends Component {

    componentDidMount() {
        document.title = "Flix | Redundancies as Compile-Time Errors";
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
                            As we go through these examples, imagine that they are only a small fraction of a large
                            codebase written
                            several people.
                            All of these examples real-world examples taken from the Flix compiler.
                        </p>

                        <p>
                            We begin with the following code fragment:
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

                            XXX: This has been in the compiler for a long time. What could have helped? More tests
                            cases, sure.
                            Or: What about a compiler that warns or gives errors about unused variables? The Scala
                            compiler is mum.
                        </p>


                        <p>
                            Now consider the following:
                        </p>


                        <InlineEditor>
                            {`
  
        case ResolvedAst.Expression.IfThenElse(exp1, exp2, exp3, tvar, evar, loc) =>
        for {
          (tpe1, eff1) <- visitExp(exp1)
          (tpe2, eff2) <- visitExp(exp2)
          (tpe3, eff3) <- visitExp(exp3)
          condType <- unifyTypM(mkBoolType(), tpe1, loc)
          resultTyp <- unifyTypM(tvar, tpe2, tpe3, loc)
          resultEff <- unifyEffM(evar, eff1, eff2, loc)
        } yield (resultTyp, resultEff)
                          
                            `}
                        </InlineEditor>

                        <InlineEditor>
                            {`
                            
    /**
      * Returns the disjunction of the two effects \`eff1\` and \`eff2\`.
      */
    def mkOr(ef1f: Type, eff2: Type): Type = eff1 match { // TODO: Notice ef1f
      case Type.Cst(TypeConstructor.Pure) => Pure
      case Type.Cst(TypeConstructor.Impure) => eff2
      case _ => eff2 match {
        case Type.Cst(TypeConstructor.Pure) => Pure
        case Type.Cst(TypeConstructor.Impure) => eff1
        case _ => Type.Apply(Type.Apply(Type.Cst(TypeConstructor.Or), eff1), eff2)
      }
    }
                            `}
                        </InlineEditor>

                        <p>
                            Notice the spelling mistake off the argument,
                            but this function is an inne rfunction.
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

                        <InlineEditor>
                            {`
                            
  /**
    * Returns the Flix Type of a Java Type
    */
  private def getGenericFlixType(t: java.lang.reflect.Type)(implicit flix: Flix): Type = {
    t match {
      case arrayType: java.lang.reflect.GenericArrayType =>
        val comp = arrayType.getGenericComponentType
        val elmType = getGenericFlixType(comp)
        mkArray(elmType)
      case c: Class[_] =>
        getFlixType(c)
      case _ =>
        // TODO: Can we do better than this for Parametric Types?
        Type.freshTypeVar()
    }
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
                            For these reasons, the Flix compiler/language is very aggressive in reporting suspcious or
                            dead code.
                            Specifically, the compiler checks for:

                            <ul>
                                <li><b>Shadowed Local Variables</b> -- When a local variable hides another local
                                    variable.
                                </li>
                                <li>Hidden Vars -- those with _ in front</li>
                                <li>Unsed Def</li>
                                <li>Unused Enum</li>
                                <li>Unused Enum Variant/Constructor</li>
                                <li>UnusedFormalParam</li>
                                <li>UnusedRel/Lat</li>
                                <li>Unused Type param</li>
                                <li><b>Unused Local Variables</b> &mdash; </li>
                            </ul>

                            In the future, we plan to extend this reporting to any new language feature that may be
                            unused.
                        </p>

                        <p>
                            What does it look like when the compiler yells at you?
                        </p>

                        <p>
                            XXX: Should have examples with unused type param
                        </p>

                        <p>
                            XXX: Exmple with no side-effect.
                        </p>

                        <p>
                            Given:
                        </p>


                        <InlineEditor>
                            {`
def foo(x: Int, y: Int): Int = x + y
`}
                        </InlineEditor>

                        <p>
                            We get:
                        </p>


                        <InlineEditor>
                            {`
-- Redundancy Error -------------------------------------------------- foo.flix

>> Unused definition 'foo'. The definition is never referenced.

1 | def foo(x: Int, y: Int): Int = x + y
        ^^^
        unused definition.


Possible fixes:

  (1)  Use the definition.
  (2)  Remove the definition.
  (3)  Mark the definition as public.
  (4)  Prefix the definition name with an underscore.



Compilation failed with 1 error(s).


`}
                        </InlineEditor>

                        <p>
                            Notice that we include suggested fixes.
                        </p>


                        <h5>Example: Unused Cases in Enums</h5>

                        <p>
                            If we define an enum <code>Color</code> with three cases:
                        </p>

                        <InlineEditor>
                            {`enum Color {
    case Red,
    case Green,
    case Blue
}`}
                        </InlineEditor>

                        <p>
                            and we forget to use one of its cases:
                        </p>

                        <InlineEditor>
                            {`
-- Redundancy Error -------------------------------------------------- foo.flix

>> Unused case 'Blue' in enum 'Color'.

4 |     case Blue
             ^^^^
             unused tag.

Possible fixes:

  (1)  Use the case.
  (2)  Remove the case.
  (3)  Prefix the case with an underscore.

Compilation failed with 1 error(s).`}
                        </InlineEditor>


                        <h5>The Development Experience</h5>

                        <p>

                            It is reasonable to wonder how this impacts the development experience.
                            Afterall, while a program is being written, it is not yet complete
                            and not all definitions, types, variable might be in used.
                        </p>

                        <p>
                            I will admit that in the beginning it can feel like a pain that the compiler is so strict.
                            But after a while you learn to work with the compiler. Now, when I am introducing a new
                            local variable -- not yet used --
                            I simply name it with an underscore and then later when I return to use it, I rename it to
                            its proper name.
                            The same goes for a function. (XXX: Allow functions with undersore)
                            The same applies for enums, etc.
                        </p>

                        <p>
                            While there might be an adjustment period, the upside is huge: I can now be sure that all
                            my code is being used and I can immediately be warned when some code becomes unused.
                            If there is onething I have learned When building a big project, I think maintainability
                            beocmes much more important than writing the initial code.
                        </p>

                        <p>
                            Until next time, happy hacking.
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Redundancies
