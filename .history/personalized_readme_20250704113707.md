# Frontend Mentor - Project tracking intro component solution

This is a solution to the [Project tracking intro component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate through the mobile menu functionality
- Experience smooth transitions and animations
- View the custom-coded background pattern

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript for mobile navigation
- CSS animations and transitions

### What I learned

This project was an excellent opportunity to practice creating complex layouts with CSS Grid and Flexbox. One of the most challenging aspects was creating the background pattern using pure CSS without relying on image assets.

Here's how I approached the custom background pattern:

```css
.background-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border-radius: 0 0 0 50px;
  z-index: -1;
}
```

I also implemented smooth mobile navigation with JavaScript:

```js
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navigationMenu = document.querySelector('.navigation-menu');

mobileNavToggle.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
  mobileNavToggle.classList.toggle('active');
});
```

### Continued development

Moving forward, I want to continue focusing on:

- Advanced CSS animations and micro-interactions
- Accessibility improvements with ARIA labels and keyboard navigation
- Performance optimization techniques
- CSS Grid mastery for complex layouts
- Mobile-first responsive design principles

### Useful resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me understand CSS Grid layout for the main content area.
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - An excellent resource for understanding flexbox properties.
- [MDN Web Docs](https://developer.mozilla.org/) - Great reference for CSS properties and JavaScript methods.

## Author

- Website - [Bryan Lordeus](https://www.bryanlordeus.com)
- Frontend Mentor - [@blordeus](https://www.frontendmentor.io/profile/blordeus)
- GitHub - [@blordeus](https://github.com/blordeus)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenging and engaging project. The design required creative problem-solving, especially for the background pattern implementation. I also appreciate the Frontend Mentor community for their helpful feedback and support throughout the development process.