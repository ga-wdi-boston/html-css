![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# HTML & CSS Overview

## Objectives

Students should, at the end of the lesson, be able to:

- Write out the basic skeleton of an HTML page.
- Add CSS to an HTML file both by using inline styling, `<style>` tags, and by linking to an external stylesheet with `<link>`.
- Explain at a high level how CSS styling works.
- Write CSS and use it to add styling to a basic page.
- Deploy a basic web page to GitHub Pages.

## Overview

Let's go over the basics of HTML and CSS! Most of you should have some experience with this stuff already, since you should've all gone through [Dash](dash.generalassemb.ly) and each built a simple website as part of your admissions process.

### HTML

* HTML defines the structure and content of information on the page.
* All HTML pages have the same basic structure:
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
* HTML tags generally come in matched pairs, with the format `<tag> ... </tag>`. The first tag is called the _opening tag_, while the second is called the _closing tag_.
* There have historically been two general kinds of HTML elements: **block** elements and **inline** elements. Block elements have built-in line breaks, causing them to automatically stack vertically, while inline elements don't.
> Below are some examples of block and inline elements. Generally, block elements relate to space on the page, while inline elements relate to text; however, there are exceptions to that guideline. For instance, although `<p>` relates to text, it is actually a block element

| Block | Inline |
|:-----:|:------:|
|`<div>`|`<span>`|
|`<article>`|`<input>`|
|`<header>`|`<strong>`|
|`<p>`|`<a>`|

* HTML5 encourages the use of _semantic_ tags - tags whose names reflect their content and role within the page. Examples of this include `<section>`, `<header>`, and `<nav>`.

### CSS

In the early days of the web, people used to style their pages using explicit styling tags : `<b>` for bold, `<i>` for italics, etc. But this was very inflexible - you could only control as many attributes as there were tags.

CSS emerged in the mid-90s as a way to make styling webpages easier. Its core idea was replace explicit styling in HTML with _styling rules_ which could be applied to multiple elements; this would have the benefits of (a) reducing duplication, and (b) separating styling instructions from content, making debugging easier.

CSS works by selecting some group of elements (using a special reference called a **selector**) and defining a set of properties and values to apply to that group of elements. The general syntax for this is:
```
selector {
  property: value;
  property: value;
}
```
A specific example is
```
div {
  height: 100px;
  width: 100px;
  background-color: green;
}
```
> This looks similar to a JS object literal; however, one important difference is that key-value pairs are separated by _semicolons_ instead of _commas_.

Since CSS is just a collection of style rules, one key concern is what happens if two rules disagree. CSS has two mechanisms to resolve these disagreements when they come up.

The first is that, if two rules disagree about the value that a property (e.g. 'background-color') should have, a property called **specificity** can be calculated for each selector, and the selector with higher specificity will win out. The short version of how specificity works is that IDs are more 'specific' than classes, which are more 'specific' than tags, which are more 'specific' than traits inherited from parent elements.

  > Specificity is actually a very precise calculation:
   - +1000pts for each inline style attribute
   - +100pts for each ID
   - +10pts for each attribute, class, or pseudo-class
   - +1pt for each element or pseudo-element tag
  >
  > For a more detailed explanation, see this [blog post](http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/) on CSS specificity, or play around with this [CSS specificity calculator](http://specificity.keegan.st/).

The second mechanism handles an edge case of the first: what happens if two _equally specific_ rules disagree? In that case, CSS rules that come 'later' (lower in the file) beat earlier ones. This kind of behavior is called "cascading", and is where the "C" in CSS comes from.

To add CSS to a page, either include it

1. Inline, within an element.

2. Between two `<style>` tags, typically in the the `<head>` of the document.

3. [**Most Common**] In a separate file referred to by a `<link>` tag, also typically in the the `<head>`. The syntax for using a `<link>` tag is `<link rel="stylesheet" type="text/css" href="...">` where 'href' is set to the location of the desired stylesheet.


### Lab: Create a cookie site

In squads, you're going to collaboratively create a new webpage using the raw content found inside `index.html` (using semantic tags where possible).

To start, have one member of each squad fork and clone this repository, and then create three new branches: `gh-pages`, `css`, and `html`. Then, check out the `html` branch and begin working there.

Once you finish writing your HTML, add the changes you've made to `index.html` and make a commit. Then, run the following commands:

 1. `git checkout master`
  > Move to the master branch

 2. `git merge html`
   > Add the changes on the `html` branch to the `master` branch. Depending on what you've done, you may get a warning about a 'merge conflict' - if that happens, flag down one of the consultants.

 3. `git push origin master`
   > Push your updated `master` branch up to GitHub


 At this point, the `master` branch on your GitHub fork should include your new HTML page.

 Now checkout the `css` branch that you created earlier and style your site using the `main.css` file in the `assets/styles/` directory as follows. Don't worry about creating a link tag as the two script tags near the top of `index.html` take care of that for you.

 * Make the recipe title ("The Best Chocolate Chip Cookies") match [this shade of brown](http://en.wikipedia.org/wiki/Shades_of_brown#Chestnut), and make it larger than the rest of the text on the page.
 * The font for the whole page should be 'arial', except for the recipe title (which should be in 'cursive').
 * All text in the page should be centered.
 * In the ingredients list, give each ingredient a unique color; any time that ingredient appears in the recipe, make it that same color.


Once you are finished styling your site, commit your changes and merge it with master like you did with your html branch

 1. `git checkout master`


 2. `git merge css`


 3. `git push origin master`



 The last thing we're going to do is **deploy** (i.e. host) this web page through a service that GitHub provides called GitHub pages. To do this, go through the following steps.


 1. `git checkout gh-pages`
   > Move to the `gh-pages` branch that you created earlier.

 2. `git merge master`
   > Add the new changes that have been made on `master` to the `gh-pages` branch on your local repo.

 3. In your `.gitignore` file add comment out the lines `*bundle.js` and `vendor.js` so git no longer ignores those files e.g., `# *bundle.js`. Alternatively you can remove those lines altogether.
   > This tells Git to no longer ignore those files so Git can track them.

 4. Next run `grunt build`.
   > This bundles your code and creates the bundle.js and vendor.bundle.js files that you just un-ignored.

5. Now add and commit your code and run `git push origin gh-pages`
 > This will push your code to github pages!


 This process should add your HTML and CSS code to the `gh-pages` branch of your GitHub repo. Now, GitHub can work its magic and make that page visible on the web. If you go to the URL `yourUsername.github.io/html-css/` in your browser, you should be able to see your page!

 > As a general rule, the formula for a GitHub Pages URL is `yourUsername.github.io/name-of-your-repository/path-to-location-of-index.html`


#### Bonus (Optional Section)

If you're feeling good about all of this, do some googling and see if you can find a way to style the first letter of every step in the recipe using *only CSS* - no writing new HTML!

## Additional Resources

Here are some sites you might want to bookmark, if you haven't already.

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://css-tricks.com/
