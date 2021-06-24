# Borders

Wow..that was a lot of flags! However, it is time to move on to another fabulous CSS topic - **Borders**!

Borders allow us to navigate the different elements and content on a page without us even realising they are doing so! They are reeallly powerful design tools!

## CSS Syntax:

There are many ways in which we can style using in borders and we are going to take a look at a few of them here before getting stuck into the kata.

```css
.flag {
  border: solid;
}

This is the most basic CSS syntax available to us for styling borders. CSS with by default set the width and colour of our border if we use this basic syntax. The colour will be set to black.
```

```css
.flag {
  border: dotted red;
}

Here we are being a little bit more specific and specifying a style and a colour for our border. This width will still be set to a default value by CSS.
```

```css
.flag {
  border: 1px solid black;
}

In this syntax, we are adding specificity to each part of our border. We have set a 'border-width', 'border-style' and 'border-color'.
```

> NB - you could also use three individual selectors in stead of the shorthand in the above example. See in the example below..

```css
.flag {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```
