// Code examples shown on the front page (src/pages/index.astro).

export const httpExample = `/// Demonstrates composing multiple HTTP middleware
/// via \`with\` clauses. Stacks base URL, default
/// headers, retry, circuit breaker, and logging.
/// Each \`with\` wraps the
/// preceding block. The \`Http\` and \`Logger\` effects
/// propagate to \`main\` and are handled automatically
/// via their default handlers. Relative paths are
/// resolved against the base URL; absolute URLs
/// bypass it.
def main(): Unit \\ { Clock, Http, Logger, IO } =
    let defaultHeaders = Map#{
        "Accept"        => List#{"application/json"},
        "Authorization" => List#{"Bearer tok123"}
    };
    run {
        let urls = List#{"/api/users", "/api/posts"};
        foreach (url <- urls) {
            match Http.get(url) {
                case Ok(res) => println("\${url} -> \${status(res)}")
                case Err(err) => println("\${url} -> \${err}")
            }
        };
        match Http.get("https://notfound.flix.dev/") {
            case Ok(res) => println("notfound -> \${status(res)}")
            case Err(err) => println("notfound -> \${err}")
        }
    } with Http.withBaseUrl("https://flix.dev")
      with Http.withDefaultHeaders(defaultHeaders)
      with Http.withRetry(
        Retry.linear(maxRetries = 2, delay = milliseconds(100)))
      with Http.withCircuitBreaker(
        failureThreshold = 3, cooldown = seconds(5))
      with Http.withLogging`;

export const adtExample = `enum Shape {
    case Circle(Int32),
    case Square(Int32),
    case Rectangle(Int32, Int32)
}

def area(s: Shape): Int32 = match s {
    case Circle(r)       => 3 * (r * r)
    case Square(w)       => w * w
    case Rectangle(h, w) => h * w
}`;

export const recordExample = `def origin(): (Int32, Int32) = (0, 0)

def oneByOne():  {w = Int32, h = Int32} = {w = 1, h = 1}

def twoByFour(): {w = Int32, h = Int32} = {w = 2, h = 4}

def area(rect: {w = Int32, h = Int32 | r}): Int32 =
    rect#w * rect#h

def f(): Int32 = area({h = 1, color = "Blue", w = 2})`;

export const purityExample = `/// A pure function is annotated with \`\\ {}\`.
def inc1(x: Int32): Int32 \\ {} = x + 1

/// An impure function is annotated with \`\\ IO\`.
def inc2(x: Int32): Int32 \\ IO =
    println("x = \${x}");
    x + 1

def f(): Int32 \\ IO =     // f is impure
    let r1 = inc1(123);   // pure
    let r2 = inc2(456);   // impure
    r1 + r2               // pure`;

export const polyEffectsExample = `///
/// The purity of \`map\` depends on the purity of \`f\`.
///
def map(f: a -> b \\ ef, l: List[a]): List[b] \\ ef =
    match l {
        case Nil     => Nil
        case x :: xs => f(x) :: map(f, xs)
    }`;

export const effectsExample = `import java.time.LocalDateTime

eff HourOfDay {
    def getCurrentHour(): Int32
}

def greeting(): String \\ {HourOfDay} =
    let h = HourOfDay.getCurrentHour();
    if (h <= 12) "Good morning"
    else if (h <= 18) "Good afternoon"
    else "Good evening"

def main(): Unit \\ IO =
    run {
        println(greeting())
    } with handler HourOfDay {
        def getCurrentHour(_, resume) =
            let dt = LocalDateTime.now();
            resume(dt.getHour())
    }`;

export const libraryEffectsExample = `use Fs.FileRead
use Sys.Env
use Time.Clock
use Time.TimeUnit

/// The \`Clock\`, \`Env\`, \`FileRead\`, and \`Logger\`
/// effects all have default handlers, hence \`main\`
/// requires no explicit handlers.
def main(): Unit \\ { Clock, Env, FileRead, Logger } =
    let ts = Clock.currentTime(TimeUnit.Milliseconds);
    let os = Env.getOsName();
    Logger.info("Timestamp: \${ts}");
    Logger.info("Operating System: \${os}");
    match FileRead.read("data.txt") {
        case Ok(content) => Logger.info("Read: \${content}")
        case Err(err)    => Logger.warn("Error: \${err}")
    }`;

export const regionExample = `///
/// We can implement a *pure* \`sort\` function which
/// internally converts an immutable list to an array,
/// sorts the array in-place, and then converts it
/// back to an immutable list.
///
def sort(l: List[a]): List[a] \\ {} with Order[a] =
    region r {
        List.toArray(r,l) !> Array.sort! |> Array.toList
    }

///
/// We can also write a *pure* \`toString\` function which
/// internally uses a mutable StringBuilder.
///
def toString(l: List[a]): String with ToString[a] =
    region r {
        let sb = StringBuilder.new(r);
        foreach (x <- l) {
            StringBuilder.appendString!("\${x} :: ", sb)
        };
        StringBuilder.appendString!("Nil", sb);
        StringBuilder.toString(sb)
    }`;

export const structsExample = `struct Person[r] {
    name: String,
    mut age: Int32
}

mod Person {
    /// Creates a fresh \`Person\` in the region \`rc\`.
    pub def mkPerson(name: String, rc: Region[r]): Person[r] \\ r =
        new Person @ rc { name = name, age = 0 }

    /// Increments the age of the given person \`p\`.
    pub def birthday(p: Person[r]): Unit \\ r =
        p->age = p->age + 1

    /// Returns a description of the given person \`p\`.
    pub def describe(p: Person[r]): String \\ r =
        "\${p->name} is \${p->age} years old"
}`;

export const purityReflectionExample = `///
/// We can inspect the purity of a function argument.
///
def inspect(f: a -> b \\ ef): Unit \\ IO =
    reifyEff(f) {
        case Pure(g) => println("f is pure")
        case _       => println("f is not pure")
    }

///
/// We can use purity information to safely switch between
/// lazy (or parallel) evaluation. In this case, if f is
/// pure then perform the map operation lazily.
///
def map(f: a -> b \\ ef, l: LazyList[a]): LazyList[b] \\ ef =
    reifyEff(f) {
        case Pure(g) => mapL(g, l)
        case _       => mapE(f, l)
    }`;

export const parallelismExample = `///
/// A parallel implementation of the List.map function.
///
def parMap(f: a -> b, l: List[a]): List[b] = match l {
    case Nil     => Nil
    case x :: xs =>
        // Evaluate f(x) and parMap(f, xs) in parallel.
        par (r <- f(x); rs <- parMap(f, xs))
            yield r :: rs
}`;

export const concurrencyExample = `def main(): Unit \\ IO =
    region rc {
        // A channel which can buffer one message.
        let (tx, rx) = Channel.buffered(rc, 1);
        spawn say("Meow!", tx) @ rc; // thread 1
        spawn say("Woof!", tx) @ rc; // thread 2
        Channel.recv(rx) |> println
    } // Execution is blocked until both threads finish.

/// Sends the string s on the given channel tx.
def say(s: String, tx: Sender[String, r]): Unit \\ r =
    Channel.send(s, tx)`;

export const traitsExample = `trait Eq[a] {
    def eq(x: a, y: a): Bool
    def neq(x: a, y: a): Bool = not Eq.eq(x, y)
}

instance Eq[(a1, a2)] with Eq[a1], Eq[a2] {
    def eq(t1: (a1, a2), t2: (a1, a2)): Bool =
        let (x1, x2) = t1;
        let (y1, y2) = t2;
        x1 == y1 and x2 == y2
}`;

export const hktExample = `trait Foldable[t : Type -> Type] {

    ///
    /// Left-associative fold of a structure.
    ///
    def foldLeft(f: (b, a) -> b \\ ef, s: b, t: t[a]): b \\ ef

    ///
    /// Right-associative fold of a structure.
    ///
    def foldRight(f: (a, b) -> b \\ ef, s: b, t: t[a]): b \\ ef

}`;

export const associatedTypesExample = `trait Coll[a] {

    /// The element type of the collection.
    type Elm

    /// Converts the collection to a list of its elements.
    def toList(coll: a): List[Coll.Elm[a]]
}

instance Coll[Map[k, v]] {
    type Elm = (k, v)

    def toList(m: Map[k, v]): List[(k, v)] = ...
}`;

export const associatedEffectsExample = `trait Coll[a] {

    /// The element type of the collection.
    type Elm

    /// The effect associated with the collection.
    type Aef

    /// Converts the collection to a list of its elements.
    def toList(coll: a): List[Coll.Elm[a]] \\ Coll.Aef[a]
}

instance Coll[MutMap[k, v, r]] {
    type Elm = (k, v)
    type Aef = r

    def toList(m: Map[k, v]): List[(k, v)] \\ r = ...
}`;

export const monadicForExample = `def divide(x: Int32, y: Int32): Option[Int32] =
    if (y == 0) None else Some(x / y)

def f(): Option[Int32] =
    forM (
        x <- divide(5, 2);
        y <- divide(x, 8);
        z <- divide(9, y)
    ) yield x + y + z`;

export const applicativeForExample = `def validateUser(s: String): Validation[Err, String] = ...

def validatePass(s: String): Validation[Err, String] = ...

def conn(u: String, p: String): Validation[Err, Connection] =
    forA (
        user <- validateUser(u);
        pass <- validatePass(p)
    ) yield Connection(user, pass)`;

export const javaInteropExample = `import java.io.File
import java.io.FileWriter
import java.io.IOException

def main(): Unit \\ IO =
    let f = new File("foo.txt");
    try {
        let w = new FileWriter(f);
        w.append("Hello World\\n");
        w.close()
    } catch {
        case ex: IOException =>
            println("Unable to write file")
    }`;

export const terminationExample = `enum Tree[a] {
    case Leaf(a)
    case Node(Tree[a], Tree[a])
}

/// The compiler verifies that \`size\` is structurally
/// recursive and hence terminates on all inputs.
@Terminates
def size(t: Tree[Int32]): Int32 = match t {
    case Tree.Leaf(_)    => 1
    case Tree.Node(l, r) => size(l) + size(r)
}`;

export const testExample = `use Assert.{assertEq, assertErr}

def divide(x: Int32, y: Int32): Result[String, Int32] =
    if (y == 0) Err("Division by zero") else Ok(x / y)

@Test
def testDivide01(): Unit \\ Assert =
    assertEq(expected = Ok(5), divide(10, 2))

@Test
def testDivide02(): Unit \\ Assert =
    assertErr(divide(10, 0))`;

// Neither this nor the two that follow are Flix, so the home page renders them
// with PlainSnippet: CodeSnippet only knows the Flix grammar and would colour
// terminal output and TOML as if they were code.
export const testOutput = `Running 2 tests...

   PASS  testDivide01 1.4ms
   PASS  testDivide02 0.3ms

Passed: 2, Failed: 0. Skipped: 0. Elapsed: 2.1ms.`;

export const manifestExample = `[package]
name        = "hello-world"
description = "A simple Flix package"
version     = "0.1.0"
license     = "Apache-2.0"

[dependencies]
"github:flix/museum" = "1.4.0"

[mvn-dependencies]
"org.apache.commons:commons-lang3" = "3.12.0"`;

export const manifestOutput = `Found \`flix.toml'. Checking dependencies...
Resolving Flix dependencies...
  Downloading \`flix/museum.toml\` (v1.4.0)... OK.
  Downloading \`flix/museum.fpkg\` (v1.4.0)... OK.
Resolving Maven dependencies...
  Adding \`org.apache.commons:commons-lang3' (3.12.0).
Dependency resolution completed.`;

export const datalogExample = `def reachable(g: List[(String, Int32, String)], minSpeed: Int32): List[(String, String)] =
    let facts = inject g into Road/3;
    let rules = #{
        Path(x, y) :- Road(x, maxSpeed, y), if maxSpeed >= minSpeed.
        Path(x, z) :- Path(x, y), Road(y, maxSpeed, z), if maxSpeed >= minSpeed.
    };
    query facts, rules select (src, dst) from Path(src, dst) |> Foldable.toList`;

export const optimizerExample = `/// Sums \`f\` applied to every element of \`arr\`.
/// Polymorphic in \`a\`, higher-order in \`f\`, and
/// generic over the region \`r\` the array lives in.
def sumWith(f: a -> Int32, arr: Array[a, r]): Int32 \\ r =
    Array.foldLeft((acc, x) -> acc + f(x), 0, arr)

def main(): Unit \\ IO =
    region rc {
        let arr = Array#{1, 2, 3, 4, 5} @ rc;
        println(sumWith(x -> x * x, arr))
    }`;

export const optimizerBytecode = `static Result$ staticApply(int[], int, int, int);
   0: iload_2
   1: iload_1
   2: if_icmplt    9
   5: iconst_1
   6: goto         10
   9: iconst_0
  10: ifne         40         // i >= len: done
  13: aload_0
  14: iload_2
  15: iaload                  // x = arr[i], unboxed
  16: istore       4
  18: aload_0
  19: iload_1
  20: iload_2
  21: iconst_1
  22: iadd                    // i + 1
  23: iload_3                 // acc
  24: iload        4
  26: iload        4
  28: imul                    // f(x) => x * x
  29: iadd                    // acc + f(x)
  30: istore_3
  31: istore_2
  32: istore_1
  33: astore_0
  34: goto         0          // a loop, not a call
  40: iload_3                 // return acc`;
