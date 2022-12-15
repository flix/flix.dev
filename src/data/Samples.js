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
def main(): Unit \\ IO =
    println(area(Rectangle(2, 4)))`
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
def main(): Unit \\ IO =
    let l1 = l();
    let l2 = List.intersperse(42, l1);
    let l3 = List.map(x -> x :: x :: Nil, l2);
    let l4 = List.flatten(l3);
    println(length(l4))`
        },
        {
            name: "Higher-Order Functions",
            code: `/// Returns the sum of \`x\` and \`y\`.
def add(x: Int32, y: Int32): Int32 = x + y

/// Returns \`x\` plus one.
def inc(x: Int32): Int32 = add(x, 1)

/// Returns a function that applies \`f\` twice.
def twice(f: Int32 -> Int32): Int32 -> Int32 = x -> f(f(x))

/// Returns \`x\` plus two.
def two(x: Int32): Int32 = twice(inc)(x)

/// Returns 123 plus 4 = 127.
def main(): Unit \\ IO =
    println(twice(two)(123))`
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

def main(): Unit \\ IO =
    let t1 = Node(Leaf("Hello"), Leaf("World"));
    let t2 = map(String.length, t1);
    println(sum(t2))`
        },
        {
            name: "Record Construction and Use",
            code: `/// Returns the area of the rectangle \`r\`.
/// The record \`r\` must have \`x\` and \`y\` labels, and no other labels.
def area(r: {x = Int32, y = Int32}): Int32 = r.x * r.y

/// Computes the area of various rectangle records.
/// Note that the order of labels is immaterial.
def areas(): List[Int32] =
    area({x = 1, y = 2}) ::
    area({y = 2, x = 3}) :: Nil

/// Returns the area of the polymorphic record \`r\`.
/// Note that the use of the type variable \`a\` permits the record \`r\`
/// to have labels other than \`x\` and \`y\`.
def polyArea(r : {x = Int32, y = Int32 | a}): Int32 = r.x * r.y

/// Computes the area of various rectangle records.
/// Note that some records have additional fields.
def polyAreas(): List[Int32] =
    polyArea({x = 1, y = 2}) ::
    polyArea({x = 2, y = 3, z = 4}) :: Nil

def main(): Unit \\ IO =
    areas() |> println;
    polyAreas() |> println`
        },
        {
            name: "Polymorphic Record Update",
            code: `/// Returns the record \`r\` with a new value of its \`x\` label.
def setX(r: {x = Int32, y = Int32}, v: Int32): {x = Int32, y = Int32} =
    { x = v | r }

/// Returns the value 1 + 3 = 4.
def main2(): Int32 =
    let r1 = {x = 1, y = 2};
    let r2 = setX(r1, 3);
    r1.x + r2.x

/// Returns the record \`r\` with a new value of its \`y\` label.
/// Preserves (retains) all other labels polymorphically.
def setY(r: {y = Int32 | a}, v: Int32): {y = Int32 | a} =
    { y = v | r }

/// Returns the value 0 + 1 + 3 = 4.
def main(): Unit \\ IO =
    let r1 = {x = 1, y = 2};
    let r2 = {x = 1, y = 2, z = 3};
    let r3 = setY(r1, 0);
    let r4 = setY(r2, 1);
    (r3.y + r4.y + r4.z) |> println`
        },
        {
            name: "Polymorphic Record Extension and Restriction",
            code: `/// Polymorphically extends the record \`r\` with an \`age\` label.
/// Preserves (retains) all other labels polymorphically.
def withAge(r: {| a}, v: Int32): {age = Int32 | a} =
    { +age = v | r }

/// Polymorphically restricts (removes) the \`age\` label from \`r\`.
/// Preserves (retains) all other labels polymorphically.
def withoutAge(r: {age = Int32 | a}): {| a} = {-age | r}

/// Construct several records and extend them with an age.
def main(): Unit \\ IO =
    let r1 = withAge({fstName = "Julius", lstName = "Caesar"}, 55);
    let r2 = withAge({monument = "Flavian Amphitheatre"}, 2019 - 80);
    let r3 = withAge({country = "United States"}, 2019 - 1776);
    (r1.age + r2.age + r3.age) |> println

/// Constructs a record, extends it with an age, and restricts it.
def main2(): Unit \\ IO =
    let r1 = {fstName = "Julius", lstName = "Caesar"};
    let r2 = withAge(r1, 55);
    let r3 = withoutAge(r2);
    "Mr. \${r3.fstName} \${r3.lstName}" |> println`
        },
        {
            name: "Function Composition, Pipelines, and Currying",
            code: `/// Flix supports function composition with
/// the |> operator (among others) and currying.
/// This makes it easy to construct pipelines:

/// Constructs a list with ten elements and performs
/// various operations on it in a pipeline.
def main(): Unit \\ IO =
    List.range(0, 10) |>
    List.map(x -> x * x) |>
    List.take(5) |>
    List.exists(x -> x == 1) |>
    println`
        },
        {
            name: "Pure and Impure Functions",
            code: `/// We can declare a pure function.
def inc(x: Int32): Int32 \\ {} = x + 1

/// The pure annotation is default, so we can just write:
def inc2(x: Int32): Int32 = x + 1

/// We can also declare an impure function.
def printAndInc(x: Int32): Int32 \\ IO =
    println("Hello");
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
def inc1(x: Int32): Int32 \\ {} = x + 1
def inc2(x: Int32): Int32 \\ IO = println("Hello"); x + 1

/// We can write functions that expect pure or impure functions:
def twice1(f: Int32 -> Int32 \\ {}, x: Int32): Int32 \\ {} = f(f(x))
def twice2(f: Int32 -> Int32 \\ IO, x: Int32): Int32 \\ IO = f(f(x))

/// But we can also write *effect polymorphic* functions:
def twice3(f: Int32 -> Int32 \\ ef, x: Int32): Int32 \\ ef = f(f(x))

/// We can use \`twice3\` with both pure and impure functions:
def main(): Unit \\ IO =
    (twice3(inc1, 0) + twice3(inc2, 0)) |> println`
        },
        {
            name: "Type Aliases",
            code: `/// A type alias introduces a short-hand for an existing type.

/// A type alias for the type Map[Int, String].
type alias M = Map[Int32, String]

/// A function that returns a map of type M.
def f(): M = Map#{ 1 => "Hello", 2 => "World"}

// A polymorphic type alias for the type Map[a, Result[Int, String]].
type alias N[a] = Map[a, Result[Int32, String]]

/// A function that returns a map of type N.
def g(): N[Int32] = Map#{ 1 => Ok(123), 2 => Err("Hello") }

/// Another function that returns a map of type N.
def h(): N[Bool] = Map#{ true => Ok(456) }`
        },
        {
            name: "Mutual Recursion with Full Tail-Call Elimination",
            code: `/// Flix, despite being a JVM-language,
/// supports full tail call elimination.

/// We can demonstrate this with a naive implementation
/// of a program that computes if a number is odd.

/// Returns true if n is odd.
def isOdd(n: Int32): Bool =
    if (n == 0) false else isEvn(n - 1)

/// Returns true if n is even.
def isEvn(n: Int32): Bool =
    if (n == 0) true else isOdd(n - 1)

/// We can now compute if 12345 is odd.
/// In a language without TCE this would
/// quickly consume all stack space.
def main(): Unit \\ IO =
    isOdd(12345) |> println`
        },
        {
            name: "Sending and Receiving on Channels",
            code: `/// A function that sends every element of a list
def send(tx: Sender[Int32, r], l: List[Int32]): Unit \\ { Write (r) } =
    match l {
        case Nil     => ()
        case x :: xs => Channel.send(x, tx); send(tx, xs)
    }

/// A function that receives n elements
/// and collects them into a list.
def recv(rx: Receiver[Int32, r], n: Int32): List[Int32] \\ { Write(r), Read(r) } =
    match n {
        case 0 => Nil
        case _ => Channel.recv(rx) :: recv(rx, n - 1)
    }

/// Spawn a process for send and wait, and print the result.
def main(): Unit \\ IO = region r {
    let l = 1 :: 2 :: 3 :: Nil;
    let (tx, rx) = Channel.buffered(r, 100);
    spawn send(tx, l) @ r;
    spawn recv(rx, List.length(l)) @ r
}`
        },
        {
            name: "Using Channels and Select",
            code: `/// Mooo's \`n\` times on channel \`tx\`.
def mooo(tx: Sender[String, r], n: Int32): Unit \\ { Write(r) } =
    match n {
        case 0 => ()
        case x => Channel.send("Mooo!", tx); mooo(tx, x - 1)
    }

/// Meow's \`n\` times on channel \`tx\`.
def meow(tx: Sender[String, r], n: Int32): Unit \\ { Write(r) } =
    match n {
        case 0 => ()
        case x => Channel.send("Meow!", tx); meow(tx, x - 1)
    }

/// Hiss'es \`n\` times on channel \`tx\`.
def hiss(tx: Sender[String, r], n: Int32): Unit \\ { Write(r) } =
    match n {
        case 0 => ()
        case x => Channel.send("Hiss!", tx); hiss(tx, x - 1)
    }

/// Start the animal farm...
def main(): Unit \\ IO = region r {
    let (tx1, rx1) = Channel.buffered(r, 1);
    let (tx2, rx2) = Channel.buffered(r, 1);
    let (tx3, rx3) = Channel.buffered(r, 1);
    spawn mooo(tx1, 0) @ r;
    spawn meow(tx2, 3) @ r;
    spawn hiss(tx3, 7) @ r;
    select {
        case m <- Channel.recv(rx1) => m |> println
        case m <- Channel.recv(rx2) => m |> println
        case m <- Channel.recv(rx3) => m |> println
    }
}`
        },
        {
            name: "Select with Defaults and Timers",
            code: `/// Sends the value \`x\` on the channel \`tx\` after a delay.
def slow(x: Int32, tx: Sender[Int32, r]): Unit \\ { Write(r), IO } =
    import static java.lang.Thread.sleep(Int64): Unit \\ IO;
    sleep(60i64 * 1_000_000i64);
    Channel.send(x, tx)

/// Reads a value from the channel \`rx\`.
/// Returns the default value \`1\` if \`rx\` is not ready.
def recvWithDefault(rx: Receiver[Int32, r]): Int32 \\ { Read(r), Write(r) } =
    select {
        case x <- Channel.recv(rx) => x
        case _                     => 1
    }

/// Reads a value from the channel \`rx\`.
/// Returns the default value \`2\` if after a timeout.
def recvWithTimeout(r: Region[r], rx: Receiver[Int32, r]): Int32 \\ { Read(r), Write(r), IO } =
    let timeout = Channel.timeout(r, Time/Duration.fromSeconds(1));
    select {
        case x <- Channel.recv(rx)      => x
        case _ <- Channel.recv(timeout) => 2
    }

/// Creates two channels.
/// Sends values on both after one minute.
/// Receives from both using defaults and timeouts.
def main(): Unit \\ IO = region r {
    let (tx1, rx1) = Channel.buffered(r, 1);
    let (tx2, rx2) = Channel.buffered(r, 1);
    spawn slow(123, tx1) @ r;
    spawn slow(456, tx2) @ r;
    (recvWithDefault(rx1) + recvWithTimeout(r, rx2)) |> println
}`
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
def main(): Unit \\ IO =
    query getFacts(), getRules()
        select (x, y) from AncestorOf(x, y) |> println`
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
def getEdgesWithNumbers(): #{ LabelEdge[Int32], LabelPath[Int32] } = #{
    LabelEdge("a", 1, "b").
    LabelEdge("b", 1, "c").
    LabelEdge("c", 2, "d").
}

/// Returns a set of edge facts labelled with colors (strings).
/// Note that the return type is \`open\` (polymorphic) which
/// means that the facts can be used within any constraint
/// as long as the edges are labelled with strings.
def getEdgesWithColor(): #{ LabelEdge[String] | r } = #{
    LabelEdge("a", "red", "b").
    LabelEdge("b", "red", "c").
    LabelEdge("c", "blu", "d").
}

/// Returns a set of polymorphic rules to compute the transitive
/// closure of edges with the *same* label.
def getRules(): #{ LabelEdge[l], LabelPath[l] } with Boxable[l] = #{
    LabelPath(x, l, y) :- LabelEdge(x, l, y).
    LabelPath(x, l, z) :- LabelPath(x, l, y), LabelPath(y, l, z).
}

/// Computes the fixpoint of the two sets of facts with the rules.
/// Note that polymorphism allow us to use \`getRules\` with both types of facts.
def _f(): Unit =
    let _r1 = solve getEdgesWithColor() <+> getRules();
    let _r2 = solve getEdgesWithNumbers() <+> getRules();
    ()

/// However, the type system ensures that we do not mix facts of
/// different type:
def _g(): Unit =
    /// Uncomment to see that the composition does not type check:
    /// let _r1 = solve getEdgesWithColor() <+> getEdgesWithNumbers();
    ()`
        },
        {
            name: "Pipelines of Fixpoint Computations",
            code: `def main(): Unit \\ IO =
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
    let exists = (query m2 select true from ColorlessPath(1, 3) |> List.length) != 0;

    // Print a result.
    println(if (exists) "Path exists!" else "Path does not exist!")`
        },
        {
            name: "Using Datalog to Solve a Compiler Puzzle",
            code: `/// We can use Datalog constraints to solve the following problem:
/// Given a collection of compilers and interpreters, what source
/// languages can be compiled to what target languages?
def main(): Unit \\ IO =
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
        select (src, dst) from Compiler(src, _, dst) |> println`
        },
        {
            name: "An Interpreter for a Trivial Expression Language",
            code: `///
/// We define the syntax of arithmetic expression.
///
enum AExp {
    /// a literal integer constant.
    case Cst(Int32),

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
def evalAExp(e: AExp): Int32 = match e {
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
def main(): Unit \\ IO =
    let r = evalAExp(
        IfThenElse(Neq(Cst(1), Cst(2)), Cst(42), Cst(21))
    );
    r |> println`
        },
        {
            name: "A Simple Card Game Simulation",
            code: `// A Suit type deriving an Eq and ToString instance
enum Suit with Eq, ToString {
    case Clubs
    case Hearts
    case Spades
    case Diamonds
}

// A Rank type deriving an Eq and Order instance
enum Rank with Eq, Order {
    case Number(Int32)
    case Jack
    case Queen
    case King
    case Ace
}

// A Card type deriving an Eq instance
enum Card(Rank, Suit) with Eq

// An instance of ToString for Ranks
instance ToString[Rank] {
    pub def toString(x: Rank): String = match x {
        case Number(n) => "\${n}"
        case Jack      => "Jack"
        case Queen     => "Queen"
        case King      => "King"
        case Ace       => "Ace"
    }
}

// An instance of ToString for Cards
instance ToString[Card] {
    pub def toString(x: Card): String = match x {
        case Card(r, s) => "\${r} of \${s}"
    }
}

// Simulates a game of War, printing each player's turn.
def playWar(p1: List[Card], p2: List[Card], spoils: List[Card]): Unit \\ IO = match (p1, p2) {
    case (Nil, Nil) => println("No one has any cards. It's a draw.")
    case (Nil, _) => println("Player 1 is out of cards. Player 2 wins!")
    case (_, Nil) => println("Player 2 is out of cards. Player 1 wins!")
    case (c1 :: d1, c2 :: d2) =>
        let Card(r1, _) = c1;
        let Card(r2, _) = c2;
        println("Player 1 plays \${c1}. Player 2 plays \${c2}.");
        if (r1 > r2) {
            println("Player 1 wins the battle.");
            // Add the spoils and losing card to the winner's deck.
            playWar(d1 ::: c1 :: c2 :: spoils, d2, Nil)
        } else if (r2 > r1) {
            println("Player 2 wins the battle.");
            // Add the spoils and losing card to the winner's deck.
            playWar(d1, d2 ::: c1 :: c2 :: spoils, Nil)
        } else {
            println("The battle is a draw. Time for war!");
            // Each player contributes their top 3 cards to the spoils
            let s1 = List.take(3, d1);
            let s2 = List.take(3, d2);
            // Their decks are what remains
            let rest1 = List.drop(3, d1);
            let rest2 = List.drop(3, d2);
            // Add the cards to the spoils deck
            playWar(rest1, rest2, s1 ::: s2 ::: c1 :: c2 :: spoils)
        }
}`
        },
        {
            name: "Deriving Type Classes",
            code: `/// We derive the type classes Eq, Order, and ToString for the enum Month
enum Month with Eq, Order, ToString {
    case January
    case February
    case March
    case April
    case May
    case June
    case July
    case August
    case September
    case October
    case November
    case December
}

type alias Year = Int32
type alias Day = Int32

/// The Date type derives the type classes Eq and Order
enum Date(Year, Month, Day) with Eq, Order

/// We implement our own instance of ToString for Date
/// since we don't want the default "Date(1948, December, 10)"
instance ToString[Date] {
    pub def toString(x: Date): String =
        let Date(y, m, d) = x;
        "\${d} \${m}, \${y}"
}

/// Thanks to the Eq and Order type classes, we can easily compare dates.
def earlierDate(d1: Date, d2: Date): Date = Order.min(d1, d2)

/// Thanks to the ToString type class, we can easily convert dates to strings.
def printDate(d: Date): Unit \\ IO =
    let message = "The date is \${d}!";
    println(message)`
        },
        {
            name: "Internal Mutability with Regions",
            code: `///
/// We can define pure functions that use
/// internal mutability (impurity) with regions.
/// Regions encapsulate mutability to its declared scope.
///
def deduplicate(l: List[a]): List[a] with Order[a] =
    /// Declare a new region \`r\`.
    region r {

        /// Create a new \`MutSet\` at region \`r\`.
        /// This will be used to keep track of
        /// unique elements in \`l\`.
        let s = new MutSet(r);

        /// The lambda used in the call to \`filter\`
        /// would be impure without a region.
        List.filter(x -> {
            if (MutSet.memberOf(x, s))
                false // \`x\` has already been seen.
            else {
                MutSet.add!(x, s);
                true
            }
        }, l)
    }

///
/// Create a list \`l\` with duplicates and
/// call \`deduplicate\` that returns a new list
/// with only unique elements.
///
def main(): Unit \\ IO =
    let l = 1 :: 1 :: 2 :: 2 :: 3 :: 3 :: Nil;
    println(deduplicate(l))`
        },
        {
            name: "File Information",
            code: `// Getting information on files with Flix.
def main(): Unit \\ IO =
    let f = "README.md";

    // Check if the file \`README.md\` exists.
    match File.exists(f) {
        case Ok(exist) => {
            println("The file \${f} exists: \${exist}.")
        }
        case Err(msg)  => println("An error occurred with message: \${msg}")
    };

    // Get statistics of the file \`README.md\`.
    match File.stat(f) {
        case Ok(stats) => {
            println("\${f} is of type: \${stats.fileType}");
            println("The size of \${f} is: \${stats.size}.");
            println("The creation time of \${f} is: \${stats.creationTime}.")
        }
        case Err(msg)   => println("An error occurred with message: \${msg}")
    }`
        },
        {
            name: "Working with Files and Directories",
            code: `// Working with files and directories in Flix.
def main(): Unit \\ IO =
    let f = "README.md";
    let dir = "src";

    // Read the file \`README.md\`.
    match File.readLines(f) {
        case Ok(x :: _) => println("The first line of \${f} is: '\${x}'.")
        case Ok(Nil)    => println("the file \${f} is empty.")
        case Err(msg)   => println("An error occurred with message: \${msg}")
    };

    // List the files in \`src\`.
    match File.list(dir) {
        case Ok(subpaths) => {
            println("All files or directories in \${dir} is: '\${subpaths}'.")
        }
        case Err(msg)     => println("An error occurred with message: \${msg}")
        }`
        },
        {
            name: "Print a Colorful Message",
            code: `/// Construct colorful messages.
def main(): Unit \\ IO =
    let s1 = "You can print message with " + Console.red("colored text");
    let s2 = " or " + Console.bgBlue("background") + ".";
    println(s1+s2);

    let s3 = Console.bgYellow(Console.magenta("This message has both magenta text and yellow background."));
    println(s3);

    let s4 = Console.black("This is a ") :: Console.red("c") :: Console.green("o") ::
        Console.yellow("l") :: Console.blue("o") :: Console.magenta("r") ::
        Console.cyan("f") :: Console.greenBright("u") :: Console.blueBright("l") ::
        Console.black(" message.") :: Nil;
    let s5 = List.map(s -> Console.bgWhite(s), s4);
    List.foreach(s -> print(s), s5);
    println("");

    let s6 = Console.bold("This message is bold.");
    let s7 = Console.hex("#b891eb", " And this is a custom hex color.");
    println(s6 + s7)`
        },
        {
            name: "Using Laziness for Infinite Streams",
            code: `/// A predicate for prime numbers
def isPrime(p: Int32): Bool =
    DelayList.from(2) |>
    DelayList.take(p - 2) |>
    DelayList.forall(x -> p rem x != 0)
/// An infinite sequence of prime numbers

def primes(): DelayList[Int32] =
    DelayList.from(2) |>
    (DelayList.filter(isPrime))

/// Alternative definition using sieve
def primes2(): DelayList[Int32] = sieve(DelayList.from(2))
def sieve(ps: DelayList[Int32]): DelayList[Int32] = match DelayList.head(ps) {
    case Some(p) =>
        LCons(p,
            lazy sieve(
                DelayList.filter(x -> x rem p != 0, DelayList.tail(ps))
                )
            )
    case None => DelayList.empty()
}

/// Returns the first 10 prime numbers
def main(): Unit \\ IO =
    println("Using 'primes'");
    DelayList.take(10, primes()) |> DelayList.toList |> println;
    println("Using 'primes2'");
    DelayList.take(10, primes2()) |> DelayList.toList |> println`
        },
        {
            name: "Using Laziness for Logging",
            code: `/// Emulates some slow computation.
def slowFunction(): String = {
    import static java.lang.Thread.sleep(Int64): Unit \\ {};
    let _ = sleep(5000i64);
    Int32.toString(42)
}

/// A lazy log function.
/// The idea is that we add the message to some buffer.
/// Later, we can force the evaluation and store it permanently.
/// For this example we just return the unit value.
def log(_: Lazy[String]): Unit \\ IO = () as \\ IO

/// Writes a message to the log.
/// The slow function will not be evaluated.
def main(): Unit \\ IO =
    log(lazy "The computation returned \${slowFunction()}")`
        },
        {
            name: "Using Laziness to Compute Fibonacci",
            code: `/// An infinite sequence of Fibonacci numbers
def fibs(): DelayList[Int32] =
    LCons(0,
        lazy LCons(1,
            lazy DelayList.zipWith(
                (x, y) -> x + y, fibs(), DelayList.tail(fibs()))))

/// Prints the first 10 Fibonacci numbers
def main(): Unit \\ IO =
    DelayList.take(10, fibs()) |> DelayList.toList |> println`
        }
    ];
}

export default samples
