![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# HTML & CSS Overview

## Objectives

Students should, at the end of the lesson, be able to:

- Explain the service-like nature of the web, and describe the different components of each.
- Write out the basic skeleton of an HTML page.
- Add CSS to an HTML file both by using `<style>` and by linking to an external stylesheet with `<link>`.
- Explain at a high level how CSS styling works.
- Write CSS and use it to add styling to a basic page.

## Overview

Let's go over the basics of HTML and CSS! Most of you should have some experience with this stuff already, since you've all gone through [Dash](dash.generalassemb.ly) and each built a simple website as part of your admissions process.

### What is the Web?
* The web is a *service*, provided through a backbone known as the *internet*.
  <aside>This works very similarly to how Netflix's DVD plan is provided through the US postal service. The postal service takes care of figuring out how to get parcels from point A to point B - all Netflix has to do is make sure they play by the rules of the system.</aside>
* A service implicitly has two kinds of parties involved: clients, who make requests, and servers, who respond to those requests.
* In the case of the web, the client is the browser - it requests webpages (documents composed of HTML, CSS, and JS) and then "renders" the page for the user to see and interact with.
* Interestingly, this means that when two people are looking at the same webpage, they are not in the same place; instead they are looking at two completely separate copies of the same document.

### HTML
* HTML, or 'hypertext markup language', is generally used to determine the content and structure of information present on the page.
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

* There have historically been two general kinds of HTML elements: 'block' elements, which had built-in line breaks (causing them to automatically stack vertically), and 'inline' elements, which didn't. As of HTML5, those bright-line rules have become more nuanced, but generally, 'block' elements are ones that relate to space on the page, while 'inline' elements tend to refer to text. Here are some examples of each.

| Block | Inline |
|:-----:|:------:|
|`<div>`|`<span>`|
|`<article>`|`<input>`|
|`<header>`|`<strong>`|
|`<p>`|`<a>`|

* HTML5 encourages using "semantic" tags - tags whose names reflect their content and role within the page. Examples of this include `<section>`, `<header>`, and `<nav>`.

#### Exercise
In pairs, create a new webpage using the raw content found inside `exercise-app/index.html`. Try to use semantic tags where possible.

### CSS
* In the early days of the web, people used to style their pages using explicit styling tags : `<b>` for bold, `<i>` for italics, etc. But this was very inflexible - you could only control as many attributes as there were tags.
* CSS emerged in the late 90s as a way to make styling webpages easier. Essentially, its philosophy was to separate styling entirely from each element, and come up with general styling rules that can be applied anywhere.
* The general syntax of CSS is "selector : { some_set_of_style_rules }".
* At a high level, CSS tends to follow two big rules:
  1. More specific selectors (generally) beat less speciic ones.
  2. Late instructions overwrite earlier ones; things "cascade".
* To add CSS to a page, either include it
    1. Between two `<style>` tags, typically in the the `<head>` of the document.
    2. In a separate file referred to by a `<link>` tag, also typically in the the `<head>`. The syntax for using a `<link>` tag is `<link rel="stylesheet" type="text/css" href="...">`, where 'href' is set to the location of the desired stylesheet.

#### Exercise
In pairs, take the webpage from the previous exercise and add the following styling to it, using whatever CSS you want:
* Make the recipe title ("The Best Chocolate Chip Cookies") match [this shade of brown](http://en.wikipedia.org/wiki/Shades_of_brown#Chestnut), and make it larger than the rest of the text on the page.
* The font for the whole page should be 'arial', except for the recipe title (which should be in 'cursive').
* All text in the page should be centered.
* In the ingredients list, give each ingredient a unique color; any time that ingredient appears in the recipe, make it that same color.

#### Bonus (Optional Section)
If you're feeling good about this stuff, do some googling and see if you think you can style the first letter of every step in the recipe using *only CSS* - no new HTML!

## Additional Resources

Here are some sites you might want to bookmark, if you haven't already.

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://css-tricks.com/
- http://www.w3schools.com/cssref/
