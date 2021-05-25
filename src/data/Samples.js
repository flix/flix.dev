function samples() {
    return [
        {
            name: "Algebraic Data Types and Pattern Matching",
            code: `/// An algebraic data type for shapes.
enum Shape {
    case Circle(Int32),          // circle radius
    case Square(Int32),          // side length
    case Rectangle(Int32, Int32) // height and width
}

/// Computes the area of the given shape using
/// pattern matching and basic arithmetic.
def area(s: Shape): Int32 = match s {
    case Circle(r)       => 3 * (r * r)
    case Square(w)       => w * w
    case Rectangle(h, w) => h * w
}

// Computes the area of a 2 by 4.
def main(_args: Array[String]): Int32 & Impure =
    println(area(Rectangle(2, 4)));
    0 // exit code
`
        },
        {
            name: "Lists and List Processing",
            code: `/// We can easily construct and append lists:
def l(): List[Int32] =
    let l1 = 1 :: 2 :: 3 :: Nil;
    let l2 = 4 :: 5 :: 6 :: Nil;
    l1 ::: l2

/// We can use pattern matching to take a list apart:
def length(l: List[a]): Int32 = match l {
  case Nil     => 0
  case _ :: xs => 1 + length(xs)
}

/// The Flix library has extensive support for lists:
def main(_args: Array[String]): Int32 & Impure =
    let l1 = l();
    let l2 = List.intersperse(42, l1);
    let l3 = List.map(x -> x :: x :: Nil, l2);
    let l4 = List.flatten(l3);
    println(length(l4));
    0 // exit code
`
        },
        {
            name: "Higher-Order Functions",
            code: `/// Returns the sum of \`x\` and \`y\`.
def add(x: Int32, y: Int32): Int = x + y

/// Returns \`x\` plus one.
def inc(x: Int32): Int32 = add(x, 1)

/// Returns a function that applies \`f\` twice.
def twice(f: Int32 -> Int32): Int32 -> Int32 = x -> f(f(x))

/// Returns \`x\` plus two.
def two(x: Int32): Int32 = twice(inc)(x)

/// Returns 123 plus 4 = 127.
def main(_args: Array[String]): Int32 & Impure =
    println(twice(two)(123));
    0 // exit code
`
        },
        {
            name: "Enums and Parametric Polymorphism",
            code: `/// An algebraic data type for binary trees with leaves.
enum Tree[a] {
    case Leaf(a),
    case Node(Tree[a], Tree[a])
}

/// A higher-order function that transforms a tree with
/// elements of type \`a\` to a tree with elements of type \`b\`.
def map(f: a -> b, t: Tree[a]): Tree[b] = match t {
    case Leaf(x)    => Leaf(f(x))
    case Node(l, r) => Node(map(f, l), map(f, r))
}

/// A function that computes the sum of all leaves in a tree.
def sum(t: Tree[Int32]): Int32 = match t {
    case Leaf(x)    => x
    case Node(l, r) => sum(l) + sum(r)
}

def main(_args: Array[String]): Int32 & Impure =
    let t1 = Node(Leaf("Hello"), Leaf("World"));
    let t2 = map(String.length, t1);
    println(sum(t2));
    0 // exit code`
        },
        {
            name: "Record Construction and Use",
            code: `/// Returns the area of the rectangle \`r\`.
/// The record \`r\` must have \`x\` and \`y\` labels, and no other labels.
def area(r: {x: Int32, y: Int32}): Int = r.x * r.y

/// Computes the area of various rectangle records.
/// Note that the order of labels is immaterial.
def areas(): List[Int32] =
    area({x = 1, y = 2}) ::
    area({y = 2, x = 3}) :: Nil

/// Returns the area of the polymorphic record \`r\`.
/// Note that the use of the type variable \`a\` permits the record \`r\`
/// to have labels other than \`x\` and \`y\`.
def polyArea(r: {x: Int32, y: Int32 | a}): Int32 = r.x * r.y

/// Computes the area of various rectangle records.
/// Note that some records have additional fields.
def polyAreas(): List[Int32] =
    polyArea({x = 1, y = 2}) ::
    polyArea({x = 2, y = 3, z = 4}) :: Nil

def main(_args: Array[String]): Int32 & Impure =
    areas() |> println;
    polyAreas() |> println;
    0 // exit code`
        },
        {
            name: "Polymorphic Record Update",
            code: `/// Returns the record \`r\` with a new value of its \`x\` label.
def setX(r: {x: Int, y: Int}, v: Int): {x: Int, y: Int} =
    { x = v | r }

/// Returns the value 1 + 3 = 4.
def main2(): Int =
    let r1 = {x = 1, y = 2};
    let r2 = setX(r1, 3);
    r1.x + r2.x

/// Returns the record \`r\` with a new value of its \`y\` label.
/// Preserves (retains) all other labels polymorphically.
def setY(r: {y: Int | a}, v: Int): {y: Int | a} =
    { y = v | r }

/// Returns the value 0 + 1 + 3 = 4.
def main(_args: Array[String]): Int32 & Impure =
    let r1 = {x = 1, y = 2};
    let r2 = {x = 1, y = 2, z = 3};
    let r3 = setY(r1, 0);
    let r4 = setY(r2, 1);
    (r3.y + r4.y + r4.z) |> println;
    0 // exit code`
        },
        {
            name: "Polymorphic Record Extension and Restriction",
            code: `/// Polymorphically extends the record \`r\` with an \`age\` label.
/// Preserves (retains) all other labels polymorphically.
def withAge(r: {| a}, v: Int): {age: Int | a} =
    { +age = v | r }

/// Polymorphically restricts (removes) the \`age\` label from \`r\`.
/// Preserves (retains) all other labels polymorphically.
def withoutAge(r: {age: Int | a}): {| a} = {-age | r}

/// Construct several records and extend them with an age.
def main(_: Array[String]): Int32 & Impure =
    let r1 = withAge({fstName = "Julius", lstName = "Caesar"}, 55);
    let r2 = withAge({monument = "Flavian Amphitheatre"}, 2019 - 80);
    let r3 = withAge({country = "United States"}, 2019 - 1776);
    (r1.age + r2.age + r3.age) |> println;
    0 // exit code

/// Constructs a record, extends it with an age, and restricts it.
def main2(_args: Array[String]): Int32 & Impure =
    let r1 = {fstName = "Julius", lstName = "Caesar"};
    let r2 = withAge(r1, 55);
    let r3 = withoutAge(r2);
    "Mr. \${r3.fstName} \${r3.lstName}" |> println;
    0 // exit code`
        },
        {
            name: "Function Composition, Pipelines, and Currying",
            code: `/// Flix supports function composition with
/// the |> operator (among others) and currying.
/// This makes it easy to construct pipelines:

/// Constructs a list with ten elements and performs
/// various operations on it in a pipeline.
def main(_args: Array[String]): Int32 & Impure =
    List.range(0, 10) |>
    List.map(x -> x * x) |>
    List.take(5) |>
    List.exists(x -> x == 1) |>
    println;
    0 // exit code`
        },
        {
            name: "Pure and Impure Functions",
            code: `/// We can declare a pure function.
def inc(x: Int32): Int32 & Pure = x + 1

/// The pure annotation is default, so we can just write:
def inc2(x: Int32): Int32 = x + 1

/// We can also declare an impure function.
def printAndInc(x: Int32): Int32 & Impure =
    Console.printLine("Hello");
    x + 1

/// We can declare a function that expects a pure function:
def twice(f: Int32 -> Int32, x: Int32): Int32 = f(f(x))

/// We can pass a pure function to twice.
pub def f(): Int32 = twice(inc, 42)

/// But we *cannot* pass an impure function.
// pub def g(): Int32 = twice(printAndInc, 42)`
        },
        {
            name: "Effect Polymorphic Functions",
            code: `/// Assume we have some pure and impure functions:
def inc1(x: Int32): Int32 & Pure = x + 1
def inc2(x: Int32): Int32 & Impure = println("Hello"); x + 1

/// We can write functions that expect pure or impure functions:
def twice1(f: Int32 -> Int32 & Pure, x: Int32): Int32 & Pure = f(f(x))
def twice2(f: Int32 -> Int32 & Impure, x: Int32): Int32 & Impure = f(f(x))

/// But we can also write *effect polymorphic* functions:
def twice3(f: Int32 -> Int32 & ef, x: Int32): Int32 & ef = f(f(x))

/// We can use \`twice3\` with both pure and impure functions:
def main(_args: Array[String]): Int32 & Impure =
    (twice3(inc1, 0) + twice3(inc2, 0)) |> println;
    0 // exit code`
        },
        {
            name: "Opaque Types",
            code: `/// An opaque type declares a new type that is different from any other
/// existing type. Opaque types can be used to differentiate types that 
/// would otherwise be the same. For example:

/// An opaque type for US dollars.
opaque type USD = Int

/// An opaque type for Canadian dollars.
opaque type CAD = Int

///
/// A function that adds two US dollar amounts.
///
def sum(x: USD, y: USD): USD =
  let USD(u) = x;
  let USD(v) = y;
  USD(u + v)

/// Adds two USD amounts.
def main(_args: Array[String]): Int32 & Impure =
    let USD(result) = sum(USD(1), USD(5));
    println(result);
    0 // exit code`
        },
        {
            name: "Type Aliases",
            code: `/// A type alias introduces a short-hand for an existing type.

/// A type alias for the type Map[Int, String].
type alias M = Map[Int, String]

/// A function that returns a map of type M.
def f(): M = Map#{ 1 -> "Hello", 2 -> "World"}

// A polymorphic type alias for the type Map[a, Result[Int, String]].
type alias N[a] = Map[a, Result[Int, String]]

/// A function that returns a map of type N.
def g(): N[Int] = Map#{ 1 -> Ok(123), 2 -> Err("Hello") }

/// Another function that returns a map of type N.
def h(): N[Bool] = Map#{ true -> Ok(456) }
`
        },
        {
            name: "Mutual Recursion with Full Tail-Call Elimination",
            code: `/// Flix, despite being a JVM-language, 
/// supports full tail call elimination.

/// We can demonstrate this with a naive implementation
/// of a program that computes if a number is odd.

/// Returns true if n is odd.
def isOdd(n: Int): Bool = 
    if (n == 0) false else isEvn(n - 1)

/// Returns true if n is even.
def isEvn(n: Int): Bool = 
    if (n == 0) true else isOdd(n - 1)

/// We can now compute if 12345 is odd.
/// In a language without TCE this would
/// quickly consume all stack space.
def main(): Bool = isOdd(12345)
`
        },
        {
            name: "Sending and Receiving on Channels",
            code: `/// A function that sends every element of a list
def send(c: Channel[Int32], l: List[Int32]): Unit & Impure =
    match l {
        case Nil     => ()
        case x :: xs => c <- x; send(c, xs)
    }

/// A function that receives n elements
/// and collects them into a list.
def recv(c: Channel[Int32], n: Int32): List[Int32] & Impure =
    match n {
        case 0 => Nil
        case _ => (<- c) :: recv(c, n - 1)
    }

/// Spawn a process for send and wait, and print the result.
def main(_args: Array[String]): Int32 & Impure = {
    let l = 1 :: 2 :: 3 :: Nil;
    let c = chan Int 100;
    spawn send(c, l);
    spawn recv(c, List.length(l));
    0 // exit code
}
`
        },
        {
            name: "Using Channels and Select",
            code: ` /// Mooo's \`n\` times on channel \`c\`.
def mooo(c: Channel[String], n: Int32): Unit & Impure =
    match n {
        case 0 => ()
        case x => c <- "Mooo!"; mooo(c, x - 1)
    }

/// Meow's \`n\` times on channel \`c\`.
def meow(c: Channel[String], n: Int32): Unit & Impure =
    match n {
        case 0 => ()
        case x => c <- "Meow!"; meow(c, x - 1)
    }

/// Hiss'es \`n\` times on channel \`c\`.
def hiss(c: Channel[String], n: Int32): Unit & Impure =
    match n {
        case 0 => ()
        case x => c <- "Hiss!"; hiss(c, x - 1)
    }

/// Start the animal farm...
def main(_args: Array[String]): Int & Impure = {
    let c1 = chan String 1;
    let c2 = chan String 1;
    let c3 = chan String 1;
    spawn mooo(c1, 0);
    spawn meow(c2, 3);
    spawn hiss(c3, 7);
    select {
        case m <- c1 => m |> println
        case m <- c2 => m |> println
        case m <- c3 => m |> println
    };
    0 // exit code
}
`
        },
        {
            name: "Select with Defaults and Timers",
            code: `/// Sends the value \`x\` on the channel \`c\` after a delay.
def slow(x: Int32, c: Channel[Int32]): Unit & Impure =
    import java.lang.Thread:sleep(Int64);
    sleep(Duration.oneMinute() / 1_000_000i64);
    c <- x;
    ()

/// Reads a value from the channel \`c\`.
/// Returns the default value \`1\` if \`c\` is not ready.
def recvWithDefault(c: Channel[Int32]): Int32 & Impure =
    select {
        case x <- c => x
        case _      => 1
    }

/// Reads a value from the channel \`c\`.
/// Returns the default value \`2\` if after a timeout.
def recvWithTimeout(c: Channel[Int32]): Int32 & Impure =
    select {
        case x <- c                   => x
        case _ <- Timer.seconds(1i64) => 2
    }

/// Creates two channels \`c1\` and \`c2\`.
/// Sends values on both after one minute.
/// Receives from both using defaults and timeouts.
def main(_args: Array[String]): Int32 & Impure = {
  let c1 = chan Int32 1;
  let c2 = chan Int32 1;
  spawn slow(123, c1);
  spawn slow(456, c2);
  (recvWithDefault(c1) + recvWithTimeout(c2)) |> println;
  0 // exit code
}
`
        },
        {
            name: "Fixpoint Computations on Relations",
            code: `/// We can use Flix as an ordinary Datalog solver.

/// Declare two predicate symbols.
rel DirectedEdge(x: Int, y: Int)
rel Connected(x: Int, y: Int)

/// Declare some edge facts.
DirectedEdge(1, 2).
DirectedEdge(2, 3).
DirectedEdge(2, 4).
DirectedEdge(3, 5).

// Declare some constraints.
Connected(x, y) :- DirectedEdge(x, y).
Connected(x, z) :- Connected(x, y), DirectedEdge(y, z).
`
        },
        {
            name: "Fixpoint Computations with Stratified Negation",
            code: `/// Flix supports stratified negation for constraints.
/// The Flix compiler will statically ensure that use
/// of negation is safe and compute its stratification.

/// We declare several relations related to movies:
rel Movie(title: String)
rel Actor(title: String, name: String)
rel Director(title: String, name: String)
rel PureMovie(title: String)

/// We declare some facts about movies:
Movie("Interstellar").
Movie("The Hateful Eight").

/// We declare some facts about actors:
Actor("Interstellar", "Matthew McConaughey").
Actor("Interstellar", "Anne Hathaway").
Actor("The Hateful Eight", "Samuel L. Jackson").
Actor("The Hateful Eight", "Kurt Russel").
Actor("The Hateful Eight", "Quentin Tarantino").

/// We declare some facts about directors:
Director("Interstellar", "Christopher Nolan").
Director("The Hateful Eight", "Quentin Tarantino").

/// We can now compute all the movies in which the
/// director of the movie does not appear as an actor.
PureMovie(movie) :-
    Movie(movie),
    Director(movie, person),
    not Actor(movie, person).
`
        },
        {
            name: "First-Class Constraints and Fixpoints",
            code: `/// Declare two predicate symbols.
rel ParentOf(x: String, y: String)
rel AncestorOf(x: String, y: String)

/// Returns a collection of facts.
def getFacts(): #{ ParentOf, AncestorOf } = #{
    ParentOf("Pompey", "Strabo").
    ParentOf("Gnaeus", "Pompey").
    ParentOf("Pompeia", "Pompey").
    ParentOf("Sextus", "Pompey").
}

/// Returns a collection of rules to compute ancestors.
def getRules(): #{ ParentOf, AncestorOf } = #{
    AncestorOf(x, y) :- ParentOf(x, y).
    AncestorOf(x, z) :- AncestorOf(x, y), AncestorOf(y, z).
}

/// Composes the facts and rules, and computes the lfp.
def main(): #{ ParentOf, AncestorOf } =
    solve getFacts() <+> getRules()
`
        },
        {
            name: "Polymorphic First-Class Constraints",
            code: `/// Declare two polymorphic predicate symbols.
/// Here an edge and a path are labelled with some type \`l\`.
rel LabelEdge[l](x: String, l: l, y: String)
rel LabelPath[l](x: String, l: l, y: String)

/// Returns a set of edge facts labelled with numbers.
/// Note that the return type is \`closed\` which means that the
/// facts can *only* be used within a constraint system that
/// has labelled edges and paths of ints.
def getEdgesWithNumbers(): #{ LabelEdge[Int], LabelPath[Int] } = #{
    LabelEdge("a", 1, "b").
    LabelEdge("b", 1, "c").
    LabelEdge("c", 2, "d").
}

/// Returns a set of edge facts labelled with colors (strings).
/// Note that the return type is \`open\` (polymorphic) which
/// means that the facts can be used within any constraint
/// as long as the edges are labelled with strings.
def getEdgesWithColor[r](): #{ LabelEdge[String] | r } = #{
    LabelEdge("a", "red", "b").
    LabelEdge("b", "red", "c").
    LabelEdge("c", "blu", "d").
}

/// Returns a set of polymorphic rules to compute the transitive
/// closure of edges with the *same* label.
def getRules[l](): #{ LabelEdge[l], LabelPath[l] } = #{
    LabelPath(x, l, y) :- LabelEdge(x, l, y).
    LabelPath(x, l, z) :- LabelPath(x, l, y), LabelPath(y, l, z).
}

/// Computes the fixpoint of the two sets of facts with the rules.
/// Note that polymorphism allow us to use \`getRules\`
/// with both types of facts.
def main(): Unit =
    let r1 = solve getEdgesWithColor() <+> getRules();
    let r2 = solve getEdgesWithNumbers() <+> getRules();
    ()

/// However, the type system ensures that we do not mix facts of
/// different type:
def main2(): Unit =
    /// Uncomment to see that the composition does not type check:
    /// let r1 = solve getEdgesWithColor() <+> getEdgesWithNumbers();
    ()
`
        },
        {
            name: "Pipelines of Fixpoint Computations",
            code: `// Declare three predicate symbols.
rel ColorEdge(x: Int, c: String, y: Int)
rel ColorPath(x: Int, c: String, y: Int)
rel ColorlessPath(x: Int, y: Int)

def main(): Bool =
    // Introduce some facts for colored paths.
    let f1 = #{
        ColorEdge(1, "blue", 2).
        ColorEdge(2, "blue", 3).
    };
    // Introduce some rules for computing paths.
    let r1 = #{
        ColorPath(x, c, y) :- ColorEdge(x, c, y).
        ColorPath(x, c, z) :- ColorPath(x, c, y), ColorEdge(y, c, z).
    };
    // Introduce some rules for computing colorless paths.
    let r2 = #{
        ColorlessPath(x, y) :- ColorPath(x, _, y).
    };
    // Compute all the color paths.
    let m1 = solve (f1 <+> r1);

    // Use that result to compute colorless paths.
    let m2 = solve (m1 <+> r2);

    // Check that there is a path from 1 to 3.
    m2 |= ColorlessPath(1, 3).
`
        },
        {
            name: "Using Datalog to Solve a Compiler Puzzle",
            code: `/// We can use Datalog constraints to solve the following problem:
/// Given a collection of compilers and interpreters, what source
/// languages can be compiled to what target languages?
def main(_args: Array[String]): Int32 & Impure =
    let facts = #{
        /// We have the following interpreters and compilers:
        Interpreter("x86").
        Compiler("Scala", "x86", "MiniScala").
        Compiler("MiniScala", "C++", "C++").
        Compiler("C++", "x86", "x86").
    };
    let rules = #{
        // Bootstrapping Compilation:
        // We have a compiler from src1 -> dst1 written in lang1.
        // We have a compiler that can compile lang1 to dst2.
        // Now we have a compiler from src1 to dst1 written in dst2.
        Compiler(src1, dst1, dst2) :-
            Compiler(src1, dst1, lang1),
            Compiler(lang1, dst2, lang2),
            Interpreter(lang2).
    
        // Transitive Compilation:
        // If we have a compiler from src -> intermediate and
        // we have a compiler from intermediate -> dst then
        // we can obtain a compiler from src -> dst.
        Compiler(src, dst, lang) :-
            Compiler(src, intermediate, lang),
            Compiler(intermediate, dst, lang),
            Interpreter(lang).
    };
    query facts, rules
        select (src, dst) from Compiler(src, _, dst) |> println;
    0 // exit code
`
        },
        {
            name: "An Interpreter for a Trivial Expression Language",
            code: `///
/// We define the syntax of arithmetic expression.
///
enum AExp {
    /// a literal integer constant.
    case Cst(Int),

    /// a binary addition expression: e1 + e2.
    case Plus(AExp, AExp),

    /// a binary subtraction expression: e1 - e2.
    case Minus(AExp, AExp),

    /// a binary multiplication expression: e1 * e2.
    case Times(AExp, AExp),

    /// a binary division expression: e1 / e2.
    case Divide(AExp, AExp),

    //n a if-then-else expression: if (e1) e2 else e3.
    case IfThenElse(BExp, AExp, AExp)
}

///
/// We then define the syntax of Boolean expressions.
///
enum BExp {
    /// the true boolean literal.
    case True,

    /// the false boolean literal.
    case False,

    /// a logical negation expression: !e.
    case Not(BExp),

    /// a logical conjunction expression: e1 and e2.
    case Conj(BExp, BExp),

    /// a logical disjunction expression: e1 or e2.
    case Disj(BExp, BExp),

    /// an equality of expression: e1 == e2.
    case Eq(AExp, AExp),

    /// an inequality of expression: e1 != e2.
    case Neq(AExp, AExp)
}

///
/// We now define a small interpreter for arithmetic expressions.
///
def evalAExp(e: AExp): Int = match e {
    case Cst(i)                 => i
    case Plus(e1, e2)           => evalAExp(e1) + evalAExp(e2)
    case Minus(e1, e2)          => evalAExp(e1) - evalAExp(e2)
    case Times(e1, e2)          => evalAExp(e1) * evalAExp(e2)
    case Divide(e1, e2)         => evalAExp(e1) / evalAExp(e2)
    case IfThenElse(e1, e2, e3) =>
        let cond = evalBExp(e1);
            if (cond) evalAExp(e2) else evalAExp(e3)
}

///
/// and here is the small interpreter for Boolean expressions.
///
def evalBExp(e: BExp): Bool = match e {
    case True           => true
    case False          => false
    case Not(e1)        => not evalBExp(e1)
    case Conj(e1, e2)   => evalBExp(e1) and evalBExp(e2)
    case Disj(e1, e2)   => evalBExp(e1) or evalBExp(e2)
    case Eq(e1, e2)     => evalAExp(e1) == evalAExp(e2)
    case Neq(e1,e2)     => evalAExp(e1) != evalAExp(e2)
}

/// We can now run it!
def main(_args: Array[String]): Int32 & Impure =
    let r = evalAExp(
        IfThenElse(Neq(Cst(1), Cst(2)), Cst(42), Cst(21))
    );
    r |> println;
    0 // exit code
`
        }
    ];
}

export default samples
