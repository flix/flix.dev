export default function () {
    return [
        {
            name: "Algebraic Data Types and Pattern Matching",
            code: `/// An algebraic data type for shapes.
enum Shape {
    case Circle(Int),        // circle radius
    case Square(Int),        // side length
    case Rectangle(Int, Int) // height and width
}

/// Computes the area of the given shape using 
/// pattern matching and basic arithmetic.
def area(s: Shape): Int = match s with {
    case Circle(r)       => 3 * (r * r)
    case Square(w)       => w * w
    case Rectangle(h, w) => h * w
}

// Computes the area of a 2 by 4.
def main(): Int = area(Rectangle(2, 4))
`
        },
        {
            name: "Lists and List Processing",
            code: `/// In Flix, as in many functional programming languages, 
/// lists are the bread and butter.

/// We can easily construct a list:
def aList(): List[Int] = 1 :: 2 :: 3 :: Nil

/// We can easily append two lists:
def bList(): List[Int] = aList() ::: aList()

/// We can use pattern matching to take a list apart:
def length[a](l: List[a]): Int = match l with {
  case Nil     => 0
  case x :: xs => 1 + length(xs) 
}

/// The Flix library has extensive support for lists:
def main(): Bool = 
    let l1 = List.range(0, 10);
    let l2 = List.intersperse(42, l1);
    let l3 = List.map(x -> x :: x :: Nil, l2);
    let l4 = List.flatten(l3);
    List.exists(x -> x == 0, l4)
`
        },
        {
            name: "Higher-Order Functions",
            code: `/// Returns the sum of x and y.
def add(x: Int, y: Int): Int = x + y

/// Returns x plus one.
def inc(x: Int): Int = add(x, 1)

/// Returns a function that applies f twice.
def twice(f: Int -> Int): Int -> Int = x -> f(f(x))

/// Returns x plus two.
def two(x: Int): Int = twice(inc)(x)

/// Returns 123 plus 4 = 127.
def main(): Int = twice(two)(123)
`
        },
        {
            name: "Enums and Parametric Polymorphism",
            code: `/// An algebraic data type for binary trees
/// where each leaf carries a value of type a.
enum Tree[a] {
    case Leaf(a),
    case Node(Tree[a], Tree[a])
}

/// A higher-order function that transforms a tree with
/// elements of type a to a tree with elements of type b.
def map[a, b](f: a -> b, t: Tree[a]): Tree[b] = 
  match t with {
    case Leaf(x)    => Leaf(f(x))
    case Node(l, r) => Node(map(f, l), map(f, r))        
  }

/// Returns a simple tree with two leafs.
def tree(): Tree[Int] = Node(Leaf(1), Leaf(2))

/// Squares all elements in the simple tree.
def main(): Tree[Int] = map(x -> x * x, tree())
`
        },
        {
            name: "Function Composition, Pipelines, and Currying",
            code: `/// Flix supports function composition with
/// the |> operator (among others) and currying.
/// This makes it easy to construct pipelines:
                
/// Constructs a list with ten elements and performs
/// various operations on it in a pipeline.
def main(): Bool = 
    List.range(0, 10) |>
    List.map(x -> x * x) |>
    List.take(5) |> 
    List.exists(x -> x == 1)
`
        },
        {
            name: "Uniform Function Call Syntax (UFCS)",
            code: `/// Returns x plus one.
def inc(x: Int): Int = x + 1

/// Returns the sum of x and y.
def sum(x: Int, y: Int): Int = x + y

/// We can call these functions in the standard way:
def main(): Int = 
    let i = inc(123);
    let s = sum(123, 456);
        i + s

/// Or with uniform function call syntax:
def main2(): Int = 
    let i = 123.inc();
    let s = 123.sum(456);
        i + s

/// Or even using an infix notation for sum:
def main3(): Int = 
    let s = 123 \`sum\` 456;
        s
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
def send(o: Channel[Int], l: List[Int]): Unit =
    match l with {
        case Nil     => ()
        case x :: xs => o <- x; send(o, xs)
    }

/// A function that receives n elements 
/// and collects them into a list.
def recv(i: Channel[Int], n: Int): List[Int] =
    match n with {
        case 0 => Nil
        case _ => (<- i) :: recv(i, n - 1)
    }

/// A function that calls receive and sends the result on d.
def wait(i: Channel[Int], n: Int, d: Channel[List[Int]]): Unit =
    d <- recv(i, n);
    ()

/// Spawn a process for send and wait, and print the result.
def main(): List[Int] =
    let l = 1 :: 2 :: 3 :: Nil;
    let c = chan Int 100;
    let d = chan List[Int] 100;
    spawn send(c, l);
    spawn wait(c, List.length(l), d);
    <- d
`
        },
        {
            name: "Using Channels and Select",
            code: ` /// Mooo's \`n\` times on channel \`c\`.
def mooo(c: Channel[Str], n: Int): Unit = match n with {
    case 0 => ()
    case n => c <- "Mooo!"; mooo(c, n - 1)
}

/// Meow's \`n\` times on channel \`c\`.
def meow(c: Channel[Str], n: Int): Unit = match n with {
    case 0 => ()
    case n => c <- "Meow!"; meow(c, n - 1)
}

/// Hiss'es \`n\` times on channel \`c\`.
def hiss(c: Channel[Str], n: Int): Unit = match n with {
    case 0 => ()
    case n => c <- "Hiss!"; hiss(c, n - 1)
}

/// Start the animal farm...
def main(): Str =
    let c1 = chan Str 1;
    let c2 = chan Str 1;
    let c3 = chan Str 1;
    spawn mooo(c1, 0);
    spawn meow(c2, 3);
    spawn hiss(c3, 7);
    select {
        case mooo <- c1 => mooo
        case meow <- c2 => meow
        case hiss <- c3 => hiss
    }
`
        },
        {
            name: "Select with Defaults and Timers",
            code: `/// Sends the value \`x\` on the channel \`c\` after a delay.
def slow(x: Int, c: Channel[Int]): Unit =
    sleep(Duration.oneMinute());
    c <- x;
    ()

/// Reads a value from the channel \`c\`.
/// Returns the default value \`1\` if \`c\` is not ready.
def recvWithDefault(c: Channel[Int]): Int = select {
    case x <- c => x
    case _      => 1
}

/// Reads a value from the channel \`c\`.
/// Returns the default value \`2\` if after a timeout.
def recvWithTimeout(c: Channel[Int]): Int = select {
    case x <- c                   => x
    case y <- Timer.seconds(1i64) => 2
}

/// Creates two channels \`c1\` and \`c2\`.
/// Sends values on both after one minute.
/// Receives from both using defaults and timeouts.
def main(): Int = {
  let c1 = chan Int 1;
  let c2 = chan Int 1;
  spawn slow(123, c1);
  spawn slow(456, c2);
  recvWithDefault(c1) + recvWithTimeout(c2)
}
`
        },
        {
            name: "Fixpoint Computations with Top-Level Constraints",
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
            name: "First-Class Constraints and Fixpoints",
            code: `/// Declare two predicate symbols.
rel ParentOf(x: Str, y: Str)
rel AncestorOf(x: Str, y: Str)

/// Returns a collection of facts.
def getFacts(): Schema { ParentOf, AncestorOf } = {
    ParentOf("Pompey", "Strabo").
    ParentOf("Gnaeus", "Pompey").
    ParentOf("Pompeia", "Pompey").
    ParentOf("Sextus", "Pompey").
}

/// Returns a collection of rules to compute ancestors.
def getRules(): Schema { ParentOf, AncestorOf } = {
    AncestorOf(x, y) :- ParentOf(x, y).
    AncestorOf(x, z) :- AncestorOf(x, y), AncestorOf(y, z).
}

/// Composes the facts and rules, and computes the lfp.
def main(): Schema { ParentOf, AncestorOf } =
    solve getFacts() <+> getRules()
`
        },
        {
            name: "Pipelines of Fixpoint Computations",
            code: `// Declare three predicate symbols.
rel ColorEdge(x: Int, c: Str, y: Int)
rel ColorPath(x: Int, c: Str, y: Int)
rel ColorlessPath(x: Int, y: Int)

def main(): Bool =
    // Introduce some facts for colored paths.
    let f1 = {
        ColorEdge(1, "blue", 2).
        ColorEdge(2, "blue", 3).
    };
    // Introduce some rules for computing paths.
    let r1 = {
        ColorPath(x, c, y) :- ColorEdge(x, c, y).
        ColorPath(x, c, z) :- ColorPath(x, c, y), ColorEdge(y, c, z).
    };
    // Introduce some rules for computing colorless paths.
    let r2 = {
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
            name: "An Interpreter for a Trivial Expression Language",
            code: `//
// We define an adt to capture the syntax of arithmetic expressions.
//
enum AExp {
    // a literal integer constant.
    case Cst(Int),

    // a binary addition expression: e1 + e2.
    case Plus(AExp, AExp),

    // a binary subtraction expression: e1 - e2.
    case Minus(AExp, AExp),

    // a binary multiplication expression: e1 * e2.
    case Times(AExp, AExp),

    // a binary division expression: e1 / e2.
    case Divide(AExp, AExp),

    //n a if-then-else expression: if (e1) e2 else e3.
    case IfThenElse(BExp, AExp, AExp)
}

//
// We then define an adt to capture the syntax of boolean expressions.
//
enum BExp {
    // the true boolean literal.
    case True,

    // the false boolean literal.
    case False,

    // a logical negation expression: !e.
    case Not(BExp),

    // a logical conjunction expression: e1 && e2.
    case Conj(BExp, BExp),

    // a logical disjunction expression: e1 || e2.
    case Disj(BExp, BExp),

    // an equality of expression: e1 == e2.
    case Eq(AExp, AExp),

    // an inequality of expression: e1 != e2.
    case Neq(AExp, AExp)
}

//
// We now define a small interpreter for arithmetic expressions.
//
def evalAExp(e: AExp): Int = match e with {
    case Cst(i)                 => i
    case Plus(e1, e2)           => evalAExp(e1) + evalAExp(e2)
    case Minus(e1, e2)          => evalAExp(e1) - evalAExp(e2)
    case Times(e1, e2)          => evalAExp(e1) * evalAExp(e2)
    case Divide(e1, e2)         => evalAExp(e1) / evalAExp(e2)
    case IfThenElse(e1, e2, e3) =>
        let cond = evalBExp(e1);
            if (cond) evalAExp(e2) else evalAExp(e3)
}

//
// and here is the small interpreter for boolean expressions.
//
def evalBExp(e: BExp): Bool = match e with {
    case True           => true
    case False          => false
    case Not(e)         => !evalBExp(e)
    case Conj(e1, e2)   => evalBExp(e1) && evalBExp(e2)
    case Disj(e1, e2)   => evalBExp(e1) || evalBExp(e2)
    case Eq(e1, e2)     => evalAExp(e1) == evalAExp(e2)
    case Neq(e1,e2)     => evalAExp(e1) != evalAExp(e2)
}


// We can now run it!
def main(): Int = evalAExp(
    IfThenElse(Neq(Cst(1), Cst(2)), Cst(42), Cst(21))
)
`
        }
    ];
}
