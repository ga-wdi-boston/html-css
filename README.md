[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HTML & CSS Overview

## Objectives

Students should, at the end of the lesson, be able to:

-   Write out the basic skeleton of an HTML page.
-   Add CSS to an HTML file both by using inline styling, `<style>` tags, and by
linking to an external stylesheet with `<link>`.
-   Explain at a high level how CSS styling works.
-   Write CSS and use it to add styling to a basic page.
-   Deploy a basic web page to GitHub Pages.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

## Overview

Let's go over the basics of HTML and CSS! Most of you should have some
experience with this stuff already, since you should've all gone through
[Dash](dash.generalassemb.ly) and each built a simple website as part of your
admissions process.

### HTML

HTML defines the structure and content of information on the page.

All HTML pages have the same basic structure:

```html
  <!DOCTYPE html>
  <html>
    <head>
    <!-- Meta-data goes here. -->
    </head>
    <body>
      <!-- Page content goes here. -->
    </body>
  </html>
```

HTML tags generally come in matched pairs, with the format `<tag> ... </tag>`.
The first tag is called the _opening tag_, while the second is called the
_closing tag_.

There have historically been two general kinds of HTML elements: **block**
elements and **inline** elements. Block elements have built-in line breaks,
causing them to automatically stack vertically, while inline elements don't.

Below are some examples of block and inline elements. Generally, block elements
relate to space on the page, while inline elements relate to text; however,
there are exceptions to that guideline. For instance, although `<p>` relates to
text, it is actually a block element

|    Block    |    Inline    |
|:-----------:|:------------:|
|   `<div>`   |   `<span>`   |
| `<article>` |   `<input>`  |
|  `<header>` |  `<strong>`  |
|    `<p>`    |     `<a>`    |

HTML5 encourages the use of _semantic_ tags - tags whose names reflect their
content and role within the page. Examples of this include `<section>`,
`<header>`, and `<nav>`.

#### HTML Attributes

All HTML elements are able to support attributes. Attributes vary depending on
 their use, but always live within the opening tag of an HTML element.

For example:

```html
<a href="http://google.com">Google</a>
```

Here, `href=""` is an attribtue.

Attributes will always follow the `attribute-name="value"` convention.

Below are a list of extremely helpful attributes that allow you to add
custom meta-information to your HTML elements. They become immensely helpful
when targeting these elements with CSS and/or JavaScript (we'll see this more
in jQuery).

|  Attribute  |     Usage    |
|:-----------:|:------------:|
|     [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)    | Value can only be used once, elements can only have max of one ID. Creates a unique identifier for an element. |
| [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) | Value can be used multiple times, elements can have many classes. |
|  [`data-*`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-%2A) | Very helpful when used with jQuery. Allows data to be bound to HTML element using custom `data-<custom>="<custom value>"` convention. |

### CSS

In the early days of the web, people used to style their pages using explicit
styling tags : `<b>` for bold, `<i>` for italics, etc. But this was very
inflexible - you could only control as many attributes as there were tags.

CSS emerged in the mid-90s as a way to make styling webpages easier. Its core
idea was replace explicit styling in HTML with _styling rules_ which could be
applied to multiple elements; this would have the benefits of (a) reducing
duplication, and (b) separating styling instructions from content, making
debugging easier.

CSS works by selecting some group of elements (using a special reference called
a **selector**) and defining a set of properties and values to apply to that
group of elements. The general syntax for this is:

```css
selector {
  property: value;
  property: value;
}
```

A specific example is

```css
div {
  height: 100px;
  width: 100px;
  background-color: green;
}
```

-   This looks similar to a JS object literal; however, one important difference
is that key-value pairs are separated by _semicolons_ instead of _commas_.

Since CSS is just a collection of style rules, one key concern is what happens
if two rules disagree. CSS has two mechanisms to resolve these disagreements
when they come up.

The first is that, if two rules disagree about the value that a property (e.g.
'background-color') should have, a property called **specificity** can be
calculated for each selector, and the selector with higher specificity will win
out. The short version of how specificity works is that IDs are more 'specific'
than classes, which are more 'specific' than tags, which are more 'specific'
than traits inherited from parent elements.

-   Specificity is actually a very precise calculation:
   -+1000pts for each inline style attribute
   -+100pts for each ID
   -+10pts for each attribute, class, or pseudo-class
   -+1pt for each element or pseudo-element tag

-   For a more detailed explanation, see this [blog
post](http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)
on CSS specificity, or play around with this [CSS specificity
calculator](http://specificity.keegan.st/).

The second mechanism handles an edge case of the first: what happens if two
_equally specific_ rules disagree? In that case, CSS rules that come 'later'
(lower in the file) beat earlier ones. This kind of behavior is called
"cascading", and is where the "C" in CSS comes from.

To add CSS to a page, either include it

1.  Inline, within an element.

1.  Between two `<style>` tags, typically in the the `<head>` of the document.

1.  **Most Common** In a separate file referred to by a `<link>` tag, also
typically in the the `<head>`. The syntax for using a `<link>` tag is `<link
rel="stylesheet" type="text/css" href="...">` where 'href' is set to the
location of the desired stylesheet.

#### CSS Best Practices: Selectors

1. In general, we want to _avoid inline styles_ - it's best to keep all your styles
in one place, on a stylesheet.

1. USE IDs SPARINGLY. IDs should be reserved for emergency situations only,
when there is no other way to select an element. There are a lot of selectors to
use; it's rarely necessary to use an ID. [CSS Selectors Cheat Sheet](https://gist.github.com/smutnyleszek/809a69dd05e1d5f12d01)


### Code-Along: Valerie's Veggie Shop

Together we are going to look at our good friend Valerie's proposal for her
website. Valerie has been so gracious to provide us with what he wants to be
included on her website. Since Valerie has spent her entire life practicing the
ancient art of 'chopping up veggies', she is not a technology oriented gal.
Let's help out our good friend Valerie!

First, we are going to great a branch to create Valerie's website.

```bash
git checkout -b vals-website
```

Once we have the branch created, open the `/practice` directory so we can start
developing this masterpiece!

#### HTML Best Practices: Inputs
Often websites like Valerie's need to get input from the user - names, addresses,
and other information. When using the `<input>` element, it should ALWAYS be
wrapped in a `<form>`. This is helpful both for accessibility (screen readers)
and for accessing that data using JavaScript.
Input elements should also be wrapped in a label element:

```html
<label>Last Name <input type="text" name="lastName" /></label>
```

Wrapping the input in a label allows us to avoid using the `for` attribute on
the label and an `id` on the input.

### Best Practices: UI / Accessibility
Many website users have various disabilities and are neurodiverse. There are many
easy decisions you can make about your HTML and CSS that will help people use your
website, and these tips will also create a website that is easy to use for everyone.

- Use HTML5 elements - not just divs!
- Use high contrast between backgrounds and text
- Caption your images in a relevant way
- Don't use color or sound alone to show what an element does
- Organize content with headings and subheadings

### Debugging CSS
The best way to debug anything is to _be methodical_. This includes CSS! If your
elements are not behaving as you expect, here are the first steps. More information
about debugging CSS is in the additional resources.

1. Make sure your class names are exactly the same in HTML and CSS.
2. Double check that your selectors are selecting the correct element.
3. Do not ADD MORE to things that aren't working. Take out the code that doesn't work before adding something else.


### Lab: Create a cookie site

In squads, you're going to collaboratively create a new webpage using the raw
content found inside `index.html` (using semantic tags where possible).

To start, indentify one member of your squad to be the 'project lead'. This
person will create three new branches: `gh-pages`, `css`, and `html`; **CREATE
THESE BRANCHES FROM THE MASTER BRANCH**. The 'project lead' will be the only
squad member to code during the lab, everyone else will advise them what to
code.

Then, check out the `html` branch and begin working there.

1.  `grunt serve`

  > `grunt serve` spins up a local server via Grunt. This local server allows
  > us to work in a 'Development' environment to replicate what the 'Deployed'
  > environment will  be like.

Once you finish writing your HTML, add the changes you've made to `index.html`
and make a commit. Then, run the following commands:

1.  `git checkout master`

  > Move to the master branch

1.  `git merge html`

  > Add the changes on the `html` branch to the `master` branch. Depending on
  > what you've done, you may get a warning about a 'merge conflict' - if that
  > happens, flag down one of the consultants.

1.  `git push origin master`

  > Push your updated `master` branch up to GitHub

At this point, the `master` branch on your GitHub fork should include your new
HTML page.

Now checkout the `css` branch that you created earlier and style your site using
the `main.css` file in the `assets/styles/` directory as follows. Don't worry
about creating a link tag as the two script tags in the head of `index.html`
take care of that for you.

Take a look at your `index.html`, do you notice anything that seems off?

When we made the `css` branch from `master`, we did not have the html yet. In
order to get our udpated `master` branch to our `css` branch, we need to do a
rebase. We will learn more about what a rebase does in unit 3, so don't worry
about _understanding_ it right now. To get our `css` branch up to date with
`master`:

-   Confirm you've checked out the `css` branch with `git status`.
-   Update the `css` branch with `git rebase master`.
-   If you experience any issues, flag down a consultant.

Now, in your `main.css` file:

-   Make the recipe title ("The Best Chocolate Chip Cookies") match [this shade
of
brown](http://en.wikipedia.org/wiki/Shades_of_brown#Chestnut), and make it
larger than the rest of the text on the page.
-   The font for the whole page should be 'arial', except for the recipe title
(which should be in 'cursive').
-   All text in the page should be centered.
-   In the ingredients list, give each ingredient a unique color; any time that
ingredient appears in the recipe, make it that same color.
-   And feel free to experiment and add whatever else you want!

Once you are finished styling your site, commit your changes and merge it with
master like you did with your html branch

1.  `git checkout master`

1.  `git merge css`

1.  `git push origin master`

#### GitHub Pages Deployment

The last thing we're going to do is **deploy** (i.e. host) this web page through
a service that GitHub provides called GitHub pages. To do this, follow the
 instructions given in the [GitHub Pages Deployment Guide](https://github.com/ga-wdi-boston/gh-pages-deployment-guide).

#### Bonus (Optional Section)

If you're feeling good about all of this, do some googling and see if you can
find a way to style the first letter of every step in the recipe using _only
CSS_ - no writing new HTML!

## Additional Resources

Here are some sites you might want to bookmark, if you haven't already.

-   [HTML5 Element Flowchart](http://html5doctor.com/lets-talk-about-semantics/)
-   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [CSS-Tricks](https://css-tricks.com)
-   [Using the browser to debug CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)
