describe("the application", function() {
  it("will square a number", function() {
    expect(App.square(4)).toBe(16);
  });

  it('will cube a number',function(){
    expect(App.cube(4)).toBe(64);
  });

  it('will greet you like a good boy',function(){
    expect(App.greet('Jason')).toBe('Hello Jason');
    expect(App.greet()).toBe('Hello World');
    expect(App.greet('you sexy bastard')).toBe('Hello you sexy bastard');
  });
});

/*
Suites: describe Your Tests
——————————————————————————————————————————————————————————————————————
A test suite begins with a call to the global Jasmine
function describe with two parameters: a string and a function.
The string is a name or title for a spec suite – usually what
is being tested. The function is a block of code that implements the suite.

*/

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});


/*
Specs
——————————————————————————————————————————————————————————————————————
Specs are defined by calling the global Jasmine function it, which,
like describe takes a string and a function. The string is the title
of the spec and the function is the spec, or test. A spec contains
one or more expectations that test the state of the code. An
expectation in Jasmine is an assertion that is either true or false.
A spec with all true expectations is a passing spec. A spec with one
or more false expectations is a failing spec.
*/

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

/*
It’s Just Functions
——————————————————————————————————————————————————————————————————————
Since describe and it blocks are functions, they can contain any 
executable code necessary to implement the test. JavaScript scoping 
rules apply, so variables declared in a describe are available to 
any it block inside the suite.
*/

/*
Expectations
——————————————————————————————————————————————————————————————————————
Expectations are built with the function expect which takes a value, 
called the actual. It is chained with a Matcher function, which takes the expected value.
*/

describe("The 'toBe' matcher compares with ===", function() {
  it("and has a positive case", function() {
    expect(true).toBe(true);
  });
   it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });
});

/*
Matchers
——————————————————————————————————————————————————————————————————————
Each matcher implements a boolean comparison between the actual
value and the expected value. It is responsible for reporting to
Jasmine if the expectation is true or false. Jasmine will then
pass or fail the spec.

Any matcher can evaluate to a negative assertion by chaining
the call to expect with a not before calling the matcher.

*/
describe("Included matchers:", function() {
  it("The 'toBe' matcher compares with ===", function() {
    var a = 12;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });


  /*
  Included Matchers
  ——————————————————————————————————————————————————————————————————————
  Jasmine has a rich set of matchers included.
  Each is used here – all expectations and specs pass.
  There is also the ability to write custom matchers
  for when a project’s domain calls for specific
  assertions that are not included below.
  */
  describe("The 'toEqual' matcher", function() {
    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
  });

  it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });

  it("The 'toBeDefined' matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
  });

  it("The `toBeUndefined` matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).not.toBeUndefined();
    expect(a.bar).toBeUndefined();
  });

  it("The 'toBeNull' matcher compares against null", function() {
    var a = null;
    var foo = "foo";

    expect(null).toBeNull();
    expect(a).toBeNull();
    expect(foo).not.toBeNull();
  });

  it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";

    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
  });

  it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";

    expect(a).toBeFalsy();
    expect(foo).not.toBeFalsy();
  });

  it("The 'toContain' matcher is for finding an item in an Array", function() {
    var a = ["foo", "bar", "baz"];

    expect(a).toContain("bar");
    expect(a).not.toContain("quux");
  });

  it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(e).toBeLessThan(pi);
    expect(pi).not.toBeLessThan(e);
  });

  it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).toBeGreaterThan(e);
    expect(e).not.toBeGreaterThan(pi);
  });

  it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).not.toBeCloseTo(e, 2);
    expect(pi).toBeCloseTo(e, 0);
  });

  it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });
});


/*
Grouping Related Specs with describe
——————————————————————————————————————————————————————————————————————
The describe function is for grouping related specs.
The string parameter is for naming the collection of specs,
and will be concatenated with specs to make a spec’s full name.
This aids in finding specs in a large suite. If you name
them well, your specs read as full sentences in traditional BDD style.
*/
describe("A spec", function() {
  it("is just a function, so it can contain any code", function() {
    var foo = 0;
    foo += 1;

    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    var foo = 0;
    foo += 1;

    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});

/*
Setup and Teardown
——————————————————————————————————————————————————————————————————————
To help a test suite DRY up any duplicated setup and teardown code,
Jasmine provides the global beforeEach, afterEach, beforeAll, and
afterAll functions.

As the name implies, the beforeEach function is called once before
each spec in the describe is run, and the afterEach function is
called once after each spec.

Here is the same set of specs written a little differently. The
variable under test is defined at the top-level scope — the describe
block — and initialization code is moved into a beforeEach function.
The afterEach function resets the variable before continuing.
*/

describe("A spec using beforeEach and afterEach", function() {
  var foo = 0;

  beforeEach(function() {
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});


/*
The beforeAll function is called only once before all the specs 
in describe are run, and the afterAll function is called after 
all specs finish. These functions can be used to speed up test 
suites with expensive setup and teardown.

However, be careful using beforeAll and afterAll! Since they 
are not reset between specs, it is easy to accidentally leak 
state between your specs so that they erroneously pass or fail.
*/

describe("A spec using beforeAll and afterAll", function() {
  var foo;

  beforeAll(function() {
    foo = 1;
  });

  afterAll(function() {
    foo = 0;
  });

  it("sets the initial value of foo before specs run", function() {
    expect(foo).toEqual(1);
    foo += 1;
  });

  it("does not reset foo between specs", function() {
    expect(foo).toEqual(2);
  });
});

/*
The this keyword
——————————————————————————————————————————————————————————————————————
Another way to share variables between a beforeEach, it, and 
afterEach is through the this keyword. Each spec’s beforeEach/it/afterEach 
has the this as the same empty object that is set back to empty for 
the next spec’s beforeEach/it/afterEach.
*/
describe("A spec", function() {
  beforeEach(function() {
    this.foo = 0;
  });

  it("can use the `this` to share state", function() {
    expect(this.foo).toEqual(0);
    this.bar = "test pollution?";
  });

  it("prevents test pollution by having an empty `this` created for the next spec", function() {
    expect(this.foo).toEqual(0);
    expect(this.bar).toBe(undefined);
  });
});


/*
Nesting describe Blocks
——————————————————————————————————————————————————————————————————————
Calls to describe can be nested, with specs defined at any level. 
This allows a suite to be composed as a tree of functions. Before 
a spec is executed, Jasmine walks down the tree executing each 
beforeEach function in order. After the spec is executed, 
Jasmine walks through the afterEach functions similarly.
*/

describe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe("nested inside a second describe", function() {
    var bar;

    beforeEach(function() {
      bar = 1;
    });

    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
    });
  });
});



/*
Disabling Suites
——————————————————————————————————————————————————————————————————————
Suites and specs can be disabled with the xdescribe and xit functions, 
respectively. These suites and any specs inside them are skipped 
when run and thus their results will not appear in the results.
*/

xdescribe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
});


/*
Pending Specs
——————————————————————————————————————————————————————————————————————
Pending specs do not run, but their names will show up in the results as pending.
Any spec declared with xit is marked as pending.
Any spec declared without a function body will also be marked pending in results.
And if you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending.
*/

describe("Pending specs", function() {
  xit("can be declared 'xit'", function() {
    expect(true).toBe(false);
  });
  it("can be declared with 'it' but without a function");
  it("can be declared by calling 'pending' in the spec body", function() {
    expect(true).toBe(false);
    pending();
  });
});






