# [aircall.io](https://aircall.io) - Front End Integration test

This test is a part of our hiring process at Aircall for the [Front End Developer position](https://jobs.lever.co/aircall/2ffeb0b4-a76f-4c13-aa36-1ffd17c7b93c). It should take you between 3 and 6 hours depending on your experience.

**Feel free to apply! Drop us a line with your LinkedIn/GitHub/Twitter/AnySocialProfileWhereYouAreActive at jobs@aircall.io**

## Summary

The goal of this test is to make you integrate the design and animations of the Keyboard view from the Phone app. [Here is the prototype of the concerned screens on Marvel](https://marvelapp.com/656if15).

We'll be focusing on how you'll organize your components and your style, how you coded the CSS and Javascript and obviously how close the result is from the prototype.

In order of priority, we'd like to see:

- [The keyboard view](https://marvelapp.com/656if15/screen/50639157)
- [The number prefix selection modal](https://marvelapp.com/656if15/screen/50639160)
- [The line selection modal](https://marvelapp.com/656if15/screen/50639164)

**Bonus**: Code and animate screen transitions.

Show us what you can do in 6 hours top :) We'll do a debrief afterwards and it's ok if you didn't integrate all of it.

## Code

In this repository you'll find a simple React skeleton, based on [Create React App](https://facebook.github.io/create-react-app/).

Our font and some variables are already loaded from the `styles` folder.

We use `SCSS` and `CSS modules`, to have `@import` and ensure CSS classes don't collapse.

If you're not familiar with it, check how we import variables in `src/App/styles.module.scss` and how we import the style in `src/App/index.js`, as well as [the official documentation](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet).

For simplicity sake, we've exported our assets in png format and put them in the `src/images` folder.

## Extra indications

- **Flexbox** - Use flexbox as much as possible
- **Browser support** - You only need to bother about Chrome > 66 ! For Call Quality reasons, we target only the latest Chrome versions and no other browser.
- **Viewport** - The width is always 375px and the with can be either 600px (to integrate into CRMs) or 666px.

## Installation

We're using [yarn](https://yarnpkg.com/lang/en/) here:

```
yarn install
yarn start
```

## Submission

Fork this repository and send us a pull request. We'll review it and get back to you in order to talk about your code!

Contact us at jobs@aircall.io if you need more details.
