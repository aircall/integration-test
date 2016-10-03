# [aircall.io](https://aircall.io) - Web Dev technical test

This test is a part of our hiring process at Aircall for the [Web Dev position](https://aircall.workable.com/jobs/335858). It should take you between 3 and 6 hours depending on your experience.

**Feel free to apply! Drop us a line with your LinkedIn/GitHub/Twitter/AnySocialProfileWhereYouAreActive at jobs@aircall.io**



## Summary

The goal of this test is to make you code the Keyboard view from the Phone app. This is how our app looks like:

![image](https://cloud.githubusercontent.com/assets/630714/19034556/6bc905cc-8964-11e6-86d9-0234f782a59b.png)

- **Flexbox** - use flexbox as much as possible
- **Cross-browser** - ow crap! Sorry about that but yes, it should work on all browsers (Chrome, Firefox, Safari, IE9+)
- **Mobile first** - the view must be responsive and usable on all devices (mobile & desktop)


## Code

In this repository you'll find a simple HTML/CSS/JS skeleton with three files:

- `app/views/index.pug` - Code your HTML structure here
- `app/css/style.scss` - Design your wonderful app in this stylesheet
- `app/js/app.js` - Implement fancy interactions here (you can load JQuery if you really need it)

Your design should looks like this simple view:

![keyboard](https://cloud.githubusercontent.com/assets/630714/19038032/dc309e46-8979-11e6-9311-94ee61da1086.gif)

- **HTML**: code the structure of the app
- **CSS**: design and position all blocks
- **JS**: when the user clicks on a key, the input should be updated (do not format the number as shown in the GIF)

We used [Pug](https://github.com/pugjs/pug) for layout, [Sass](http://sass-lang.com/) for stylesheets and [Vanilla JS](http://vanilla-js.com/) for JavaScript. Feel free to use tools you are comfortable with.

Show us what you can do in 6 hours top :) Spend time on your code structure and positioning your blocks. If you can impress our design team, then your job is done (*spoiler*: they will hate your code anyway).

**Bonus:** If you have time, user should be able to choose the number he wants to call from by clicking on the `Call Using` block:

![via](https://cloud.githubusercontent.com/assets/630714/19038106/4d22e974-897a-11e6-843b-fabaee468bc9.gif)


## Installation

You're smart, right? So you shouldn't need any instruction :)

Didn't succeeded to install it on your own :cry: ? Don't waste 20min more, there you go:

```
$> npm install
$> gulp
```


## Submission

Fork this repository and send us a pull request. We'll review it and get back to you in order to talk about your code!

Contact us at jobs@aircall.io if you need more details.
