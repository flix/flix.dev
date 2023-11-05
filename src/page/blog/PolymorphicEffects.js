import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import InlineEditor from '../../util/InlineEditor'

class PolymorphicEffects extends Component {
  componentDidMount() {
    document.title = 'Flix | Taming Impurity with Polymorphic Effects'
  }

  render() {
    return (
      <Container style={{ 'text-align': 'justify' }}>
        <Row className="mb-3">
          <Col sm={12} md={8}>
            <h1>Taming Impurity with Polymorphic Effects</h1>

            <p>
              Posted May 2020 by <i>Magnus Madsen</i>.
            </p>

            <p>
              In the blog post <a href="https://www.digitalmars.com/articles/b60.html">Patterns of Bugs</a>, Walter
              Bright, the author of the <a href="https://dlang.org/">D programming Language</a>, writes about his
              experience working at Boeing and their attitude towards failure:
            </p>

            <blockquote className="blockquote">
              <p>
                "[...] The best people have bad days and make mistakes, so the solution is to change the process so the
                mistakes cannot happen or cannot propagate."
              </p>

              <p>
                "One simple example is an assembly that is bolted onto the frame with four bolts. The obvious bolt
                pattern is a rectangle. Unfortunately, a rectangle pattern can be assembled in two different ways, one
                of which is wrong. The solution is to offset one of the bolt holes — then the assembly can only be
                bolted on in one orientation. The possible mechanic's mistake is designed out of the system."
              </p>

              <p>
                "[...] <i>Parts can only be assembled one way, the correct way.</i>"
              </p>
            </blockquote>

            <p>(Emphasis mine).</p>

            <p>
              Bright continues to explain that these ideas are equally applicable to software: We should build software
              such that it can only be assembled correctly. In this blog post, I will discuss how this idea can be
              applied to the design of a type and effect system. In particular, I will show how the Flix programming
              language and, by extension, its standard library ensure that pure and impure functions are not assembled
              incorrectly.
            </p>

            <h2>Impure Functional Programming</h2>

            <p>
              A major selling point of functional programming is that it supports{' '}
              <a href="https://wiki.haskell.org/Equational_reasoning_examples">equational reasoning</a>. Informally,
              equational reasoning means that we can reason about programs by replacing an expression by another one,
              provided they're both equal. For example, we can substitute variables with the expressions they are bound
              to.
            </p>

            <p>For example, if we have the program fragment:</p>

            <InlineEditor>
              {`let x = 1 + 2;
    (x, x)`}
            </InlineEditor>

            <p>
              We can substitute for <code>x</code> and understand this program as:
            </p>

            <InlineEditor>{`(1 + 2, 1 + 2)`}</InlineEditor>

            <p>Unfortunately, in the presence of side-effects, such reasoning breaks down.</p>

            <p>For example, the program fragment:</p>

            <InlineEditor>
              {`let x = Console.printLine("Hello World");
    (x, x)`}
            </InlineEditor>

            <p>
              is <i>not</i> equivalent to the program:
            </p>

            <InlineEditor>{`(Console.printLine("Hello World"), Console.printLine("Hello World"))`}</InlineEditor>

            <p>
              Most contemporary functional programming languages, including Clojure, OCaml, and Scala, forgo equational
              reasoning by allow arbitrary side-effects inside functions. To be clear, it is still common to write
              purely functional programs in these languages and to reason about them using equational reasoning. The
              major concern is that there is no language support to guarantee when such reasoning is valid. Haskell is
              the only major programming language that guarantees equational reasoning at the cost of a total and
              absolute ban on side-effects.
            </p>

            <p>
              Flix aims to walk on the middle of the road: We want to support equational reasoning with strong
              guarantees while still allowing side-effects. Our solution is a type and effect system that cleanly
              separates pure and impure code. The idea of using an effect system to separate pure and impure code is
              old, but our implementation, which supports type inference and polymorphism, is new.
            </p>

            <h2>Pure and Impure Functions</h2>

            <p>Flix functions are pure by default. We can write a pure function:</p>

            <InlineEditor>{`def inc(x: Int): Int = x + 1`}</InlineEditor>

            <p>If we want to be explicit, but non-idiomatic, we can write:</p>

            <InlineEditor>{`def inc(x: Int): Int \\ {} = x + 1`}</InlineEditor>

            <p>
              where <code>\ &#123;&#125;</code> specifies that the <code>inc</code> function is pure.
            </p>

            <p>We can also write an impure function:</p>

            <InlineEditor>{`def sayHello(): Unit \\ IO = Console.printLine("Hello World!")`}</InlineEditor>

            <p>
              where <code>\ IO</code> specifies that the <code>sayHello</code> function is impure.
            </p>

            <p>
              The Flix type and effect system is <i>sound</i>, hence if we forget the <code>\ IO</code> annotation on
              the <code>sayHello</code> function, the compiler will emit a type (or rather effect) error.
            </p>

            <p>
              The type and effect system cleanly separates pure and impure code. If an expression is pure then it always
              evaluates to the same value and it cannot have side-effects. This is part of what makes Flix
              functional-first: We can trust that pure functions behave like mathematical functions.
            </p>

            <p>
              We have already seen that printing to the screen is impure. Other sources of impurity are mutation of
              memory (e.g. writing to main memory, writing to the disk, writing to the network, etc.). Reading from
              mutable memory is also impure because there is no guarantee that we will get the same value if we read the
              same location twice.
            </p>

            <p>In Flix, the following operations are impure:</p>

            <ul>
              <li>Any use of channels (creating, sending, receiving, or selecting).</li>
              <li>Any use of references (creating, accessing, or updating).</li>
              <li>Any use of arrays (creating, accessing, updating, or slicing).</li>
              <li>Any interaction with the Java world.</li>
            </ul>

            <h2>Higher-Order Functions</h2>

            <p>
              We can use the type and effect system to restrict the purity (or impurity) of function arguments that are
              passed to higher-order functions. This is useful for at least two reasons: (i) it prevents leaky
              abstractions where the caller can observe implementation details of the callee, and (ii) it can help avoid
              bugs in the sense of Walter Bright's "Parts can only be assembled one way, the correct way."
            </p>

            <p>We will now look at several examples of how type signatures can control purity or impurity.</p>

            <p>
              We can enforce that the predicate <code>f</code> passed to <code>Set.exists</code> is <i>pure</i>:
            </p>

            <InlineEditor>{`def exists(f: a -> Bool, xs: Set[a]): Bool = ...`}</InlineEditor>

            <p>
              The signature <code>f: a -{'>'} Bool</code> denotes a pure function from <code>a</code> to{' '}
              <code>Bool</code>. Passing an impure function to <code>exists</code> is a compile-time type error. We want
              to enforce that <code>f</code> is pure because the contract for <code>exists</code> makes no guarantees
              about how <code>f</code> is called. The implementation of <code>exists</code> may call <code>f</code> on
              the elements in <code>xs</code> in any order and any number of times. This requirement is{' '}
              <i>beneficial</i> because its allows freedom in the implementation of <code>Set</code>, including in the
              choice of the underlying data structure and in the implementation of its operations. For example, we can
              implement sets using search trees or with hash tables, and we can perform existential queries in parallel
              using fork-join. If <code>f</code> was impure such implementation details would leak and be observable by
              the client. <i>Functions can only be assembled one way, the correct way.</i>
            </p>

            <p>
              We can enforce that the function <code>f</code> passed to the function <code>List.foreach</code> is{' '}
              <i>impure</i>:
            </p>

            <InlineEditor>{`def foreach(f: a -> Unit \\ IO, xs: List[a]): Unit \\ IO = ...`}</InlineEditor>

            <p>
              The signature <code>f: a -{'>'} Unit \ IO</code> denotes an impure function from <code>b</code> to{' '}
              <code>Unit</code>. Passing a pure function to <code>foreach</code> is a compile-time type error. Given
              that <code>f</code> is impure and <code>f</code> is called within <code>foreach</code>, it is itself
              impure. We enforce that the <code>f</code> function is impure because it is pointless to apply a{' '}
              <i>pure</i> function with a <code>Unit</code> return type to every element of a list.{' '}
              <i>Functions can only be assembled one way, the correct way.</i>
            </p>

            <p>We can enforce that event listeners are impure:</p>

            <InlineEditor>
              {`def onMouseDn(f: MouseEvent -> Unit \\ IO): Unit \\ IO = ...
def onMouseUp(f: MouseEvent -> Unit \\ IO): Unit \\ IO = ...`}
            </InlineEditor>

            <p>
              Event listeners are always executed for their side-effect: it would be pointless to register a pure
              function as an event listener.
            </p>

            <p>We can enforce that assertion and logging facilities are given pure functions:</p>

            <InlineEditor>
              {`def assert(f: Unit -> Bool): Unit = ...
def log(f: Unit -> String , l: LogLevel): Unit = ...`}
            </InlineEditor>

            <p>
              We want to support assertions and log statements that can be enabled and disabled at run-time. For
              efficiency, it is critical that when assertions or logging is disabled, we do not perform any computations
              that are redundant. We can achieve this by having the assert and log functions take callbacks that are
              only invoked when required. A critical property of these functions is that they must not influence the
              execution of the program. Otherwise, we risk situations where enabling or disabling assertions or logging
              may impact the presence or absence of a buggy execution. We can prevent such situations by requiring that
              the functions passed to <code>assert</code> and <code>log</code> are pure.
            </p>

            <p>
              We can enforce that user-defined equality functions are pure. We want purity because the programmer should
              not make any assumptions about how such functions are used. Moreover, most collections (e.g. sets and
              maps) require that equality does not change over time to maintain internal data structure invariants.
              Similar considerations apply to hash and comparator functions.
            </p>

            <p>In the same spirit, we can enforce that one-shot comparator functions are pure:</p>

            <InlineEditor>
              {`def minBy(f: a -> b, l: List[a]): Option[a] = ...
def maxBy(f: a -> b, l: List[a]): Option[a] = ...
def sortBy(f: a -> Int32, l: List[a]): List[a] = ...
def groupBy(f: a -> k, l: List[a]): Map[k, List[a]] = ...`}
            </InlineEditor>

            <p>
              We can enforce that the <code>next</code> function passed to <code>List.unfoldWithIter</code> is impure:
            </p>

            <InlineEditor>{`def unfoldWithIter(next: Unit -> Option[a] \\ IO): List[a] \\ IO`}</InlineEditor>

            <p>
              The unfoldWithIter function is a variant of the <code>unfoldWith</code> function where each invocation of{' '}
              <code>next</code> changes some mutable state until the unfold completes. For example,{' '}
              <code>unfoldWithIter</code> is frequently used to convert Java-style iterators into lists. We want to
              enforce that <code>next</code> is impure because otherwise it is pointless to use{' '}
              <code>unfoldWithIter</code>. If <code>next</code> is pure then it must always either (i) return{' '}
              <code>None</code> which results in the empty list or (ii) return <code>Some(v)</code> for a value{' '}
              <code>v</code> which would result in an infinite execution.
            </p>

            <p>We can use purity to reject useless statement expressions. For example, the program:</p>

            <InlineEditor>
              {`def main(): Int =
    List.map(x -> x + 1, 1 :: 2 :: Nil);
    123`}
            </InlineEditor>

            <p>is rejected with the compiler error:</p>

            <InlineEditor>
              {`-- Redundancy Error ------------------ foo.flix

 >> Useless expression: It has no side-effect(s) and its result is discarded.

    2 | List.map(x -> x + 1, 1 :: 2 :: Nil);
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        useless expression.`}
            </InlineEditor>

            <p>
              Notice that the <code>List.map(...)</code> expression is pure because the function{' '}
              <code>x -&gt; x + 1</code> is pure.
            </p>

            <h2>Polymorphic Effects</h2>

            <p>
              Flix supports effect polymorphism which means that the effect of a higher-order function can depend on the
              effects of its function arguments.
            </p>

            <p>
              For example, here is the type signature of <code>List.map</code>:
            </p>

            <InlineEditor>{`def map(f: a -> b \\ ef, xs: List[a]): List[b] \\ ef = ...`}</InlineEditor>

            <p>
              The syntax <code>f: a -{'>'} b \ ef</code> denotes a function from <code>a</code> to <code>b</code> with
              latent effect <code>ef</code>. The signature of the <code>map</code> function captures that its effect{' '}
              <code>ef</code> depends on the effect of its argument <code>f</code>. That is, if <code>map</code> is
              called with a pure function then its evaluation is pure, whereas if it is called with an impure function
              then its evaluation is impure. The effect signature is <i>conservative</i> (i.e. over-approximate). That
              is, the <code>map</code> function is considered impure even in the special case when the list is empty and
              its execution is actually pure.
            </p>

            <p>
              The type and effect system can express combinations of effects using boolean operations. We can, for
              example, express that forward function composition <code>&gt;&gt;</code> is pure if both its arguments are
              pure:
            </p>

            <InlineEditor>
              {` def >>(f: a -> b \\ ef1, g: b -> c \\ ef2): a -> c \\ { ef1, ef2 } = x -> g(f(x))`}
            </InlineEditor>

            <p>
              Here the function <code>f</code> has effect <code>ef1</code> and <code>g</code> has effect{' '}
              <code>ef2</code>. The returned function has effect <code>ef1 and ef2</code>, i.e. for it to be pure both{' '}
              <code>ef1</code> and <code>ef2</code> must be pure. Otherwise it is impure.
            </p>

            <h2>Type Equivalences</h2>

            <p>Let us take a short detour.</p>

            <p>
              In a purely functional programming language, such as Haskell, mapping two functions <code>f</code> and{' '}
              <code>g</code> over a list <code>xs</code> is equivalent to mapping their composition over the list. That
              is:
            </p>

            <InlineEditor>{`map(f, map(g, xs)) == map(f >> g, xs)`}</InlineEditor>

            <p>
              We can use such an equation to (automatically) rewrite the program to one that executes more efficiently
              because the code on the right only traverses the list once and avoids allocation of an intermediate list.
              Haskell already has support for such <a href="https://wiki.haskell.org/GHC/Using_rules">rewrite rules</a>{' '}
              built into the language.
            </p>

            <p>
              It would be desirable if we could express the same rewrite rules for programming languages such as
              Clojure, OCaml, and Scala. Unfortunately, identities - such as the above - do not hold in the presence of
              side-effects. For example, the program:
            </p>

            <InlineEditor>
              {`let f = x -> {Console.printLine(x); x};
let g = y -> {Console.printLine(y); y};
List.map(f, List.map(g, 1 :: 2 :: Nil))`}
            </InlineEditor>

            <p>
              prints <code>1, 2, 3, 1, 2, 3</code>. But, if we apply the rewrite rule, the transformed program now
              prints <code>1, 1, 2, 2, 3, 3</code>! In the presence of side-effects we cannot readily apply such rewrite
              rules.
            </p>

            <p>
              We can use the Flix type and effect to ensure that a rewrite rule like the above is only applied when both{' '}
              <code>f</code> and <code>g</code> are pure!
            </p>

            <p>
              We can, in fact, go even further. If <i>at most one</i> of <code>f</code> and <code>g</code> is impure
              then it is still safe to apply the above rewrite rule. Furthermore, the Flix type and effect system is
              sufficiently expressive to capture such a requirement!
            </p>

            <p>We can distill the essence of this point into the type signature:</p>

            <InlineEditor>
              {`def mapCompose(f: a -> b \\ e1, g: b -> c \\ {{(not e1) or e2}}, xs: List[a]): ... = ...`}
            </InlineEditor>

            <p>
              It is not important exactly what <code>mapCompose</code> does (or even if it makes sense). What is
              important is that it has a function signature that requires two function arguments <code>f</code> and{' '}
              <code>g</code> of which at most one may be impure.
            </p>

            <p>
              To understand why, let us look closely at the signature of <code>mapCompose</code>:
            </p>

            <InlineEditor>
              {`def mapCompose(f: a -> b \\ e1, g: b -> c \\ {{(not e1) or e2}}, xs: List[a]): ... = ...`}
            </InlineEditor>

            <p>
              <ul>
                <li>
                  If <code>e1 = T</code> (i.e. <code>f</code> is pure) then <code>(not e1) or e2 = F or e2 = e2</code>.
                  In other words, <code>g</code> may be pure or impure. Its purity is not constrained by the type
                  signature.
                </li>
                <li>
                  If, on the other hand, <code>e1 = F</code> (i.e. <code>f</code> is impure) then{' '}
                  <code>(not e1) or e2 = T or e2 = T </code>. In other words, <code>g</code> <i>must</i> be pure,
                  otherwise there is a type error.
                </li>
              </ul>
            </p>

            <p>
              If you think about it, the above is equivalent to the requirement that at most one of <code>f</code> and{' '}
              <code>g</code> may be impure.
            </p>

            <p>
              Without going into detail, an interesting aspect of the type and effect system is that we might as well
              have given <code>mapCompose</code> the equivalent (equi-most general) type signature:
            </p>

            <InlineEditor>
              {`def mapCompose(f: a -> b \\ {{(not e1) or e2}}, g: b -> c \\ e1, xs: List[a]): ... = ...`}
            </InlineEditor>

            <p>
              where the effects of <code>f</code> and <code>g</code> are swapped.
            </p>

            <h2>Benign Impurity</h2>

            <p>
              It is not uncommon for functions to be internally impure but observationally pure. That is, a function may
              use mutation and perform side-effects without it being observable by the external world. We say that such
              side-effects are <i>benign</i>. Fortunately, we can still treat such functions as pure with an explicit{' '}
              <i>effect cast</i>.
            </p>

            <p>
              For example, we can call a Java method (which may have arbitrary side-effects) but explicitly mark it as
              pure with an effect cast:
            </p>

            <InlineEditor>
              {`///
/// Returns the character at position \`i\` in the string \`s\`.
///
def charAt(i: Int, s: String): Char =
    import java.lang.String.charAt(Int32);
    s.charAt(i) as \\ {}`}
            </InlineEditor>

            <p>
              We know that <code>java.lang.String.charAt</code> has is pure hence the cast is safe.
            </p>

            <p>
              An effect cast, like an ordinary cast, must be used with care. A cast is a mechanism that allows the
              programmer to subvert the type (and effect) system. It is the responsibility of the programmer to ensure
              that the cast is safe. Unlike type casts, an effect cast cannot be checked at run-time with the
              consequence that an unsound effect cast may silently lead to undefined behavior.
            </p>

            <p>Here is an example of a pure function that is implemented internally using mutation:</p>

            <InlineEditor>
              {`///
/// Strip every indented line in string \`s\` by \`n\` spaces. \`n\` must be greater than \`0\`.
/// Note, tabs are counted as a single space.
///
/// [...]
///
def stripIndent(n: Int32, s: String): String =
        if (n <= 0 or length(s) == 0)
            s
        else
            stripIndentHelper(n, s) as \\ {}
        
///
/// Helper function for \`stripIndent\`.
///
def stripIndentHelper(n: Int32, s: String): String \\ IO =
    let sb = StringBuilder.new();
    let limit = Int32.min(n, length(s));
    let step = s1 -> {
        let line = stripIndentDropWhiteSpace(s1, limit, 0);
        StringBuilder.appendLine!(sb, line)
    };
    List.foreach(step, lines(s));
    StringBuilder.toString(sb)`}
            </InlineEditor>

            <p>
              Internally, <code>stripIndentHelper</code> uses a mutable string builder.
            </p>

            <h2>Type Inference and Boolean Unification</h2>

            <p>
              The Flix type and effect system supports inference. Explicit type annotations are never required locally
              within a function. As a design choice, we do require type signatures for top-level definitions. Within a
              function, the programmer never has to worry about pure and impure expressions; the compiler automatically
              infers whether an expression is pure, impure, or effect polymorphic. The programmer only has to ensure
              that the declared type and effect matches the type and effect of the function body.
            </p>

            <p>
              The details of the type and effect system are the subject of a forthcoming research paper and will be made
              available in due time.
            </p>

            <h2>Closing Thoughts</h2>

            <p>
              The Flix type and effect system separates pure and impure code. The upshot is that a functional programmer
              can trust that a pure function behaves like a mathematical function: it returns the same result when given
              the same arguments. At the same time, we are still allowed to write parts of the program in an impure,
              imperative style. Effect polymorphism ensures that both pure and impure code can be used with higher-order
              functions.
            </p>

            <p>
              We can also use effects to control when higher-order functions require pure (or impure) functions. We have
              seen several examples of such use cases, e.g. requiring that <code>Set.count</code> takes a pure function
              or that <code>List.unfoldWithIter</code> takes an impure function. Together, these restrictions ensure
              that functions can only be assembled in one way, the correct way.
            </p>

            <p>Until next time, happy hacking.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PolymorphicEffects
