# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - FAQ accordion card solution](#frontend-mentor---faq-accordion-card-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](https://i.imgur.com/WNcHDyE.png)

### Links

- Solution URL: [https://github.com/kristiingco/faq-accordian-card/tree/main/faq-accordion-card-main](https://github.com/kristiingco/faq-accordian-card/tree/main/faq-accordion-card-main)
- Live Site URL: [https://kristiingco.github.io/faq-accordian-card/faq-accordion-card-main/](https://kristiingco.github.io/faq-accordian-card/faq-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM

### What I learned

- I actually never knew hiding the overflow on a div with images can clip images that have non-absolute positioning, until now!
- Resizing using the DOM to manipulate the image was the coolest thing! It was a great refresher on listener types.

```js
const handleResize = function () {
  const illustration = document.getElementById(
    "container__card__images__illustation"
  );
  if (window.innerWidth >= 768) {
    illustration.src = "images/illustration-woman-online-desktop.svg";
  } else {
    illustration.src = "images/illustration-woman-online-mobile.svg";
  }
};

handleResize();
window.addEventListener("resize", handleResize);
```

### Continued development

This is my second challenge in Frontend Mentor where I'm trying to strengthen my vanilla CSS and JavaScript fundamentals. While I think I'm learning plenty, I will continue to do so! I feel like I have more to uncover.

Next, I want to try using more advanced CSS selectors! I also wish to strengthen my CSS grid skills. I want to continue refining my understanding and application of the JavaScript DOM.

### Useful resources

- [Zay Lau's StackOverflow answer](https://stackoverflow.com/questions/39102635/javascript-click-event-requires-double-clicks) - I was wondering why my event which was set up to trigger on click needed a double click the first time you try to open a specific question. This answer explained it and it made me understand the DOM even more!

## Author

- Website - [Kristi Ingco](https://www.kristiingco.com)
- Frontend Mentor - [@kristiingco](https://www.frontendmentor.io/profile/kristiingco)
- LinkedIn - [@kristianaingco](https://www.linkedin.com/in/kristianaingco)

## Acknowledgments

The Frontend Mentor community has been an immense help in improving my skills! I am so grateful for people willing to take time to help me out. Thank you!
