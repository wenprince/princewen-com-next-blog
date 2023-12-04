---
title: 'Utterances Comments Loading'
date: 2020/08/16
author: Princewen
description: Some problems were found while using utterances as a blog commenting system
---

I have found some problems when using [utterances](https://utteranc.es/) as a blog commenting system. When the comment section is loading or failing to load, the comment section `div` may create a blank space. Although it is not visible due to our own theme, it is obvious when using other themes (with borders or shadows or something).

## Search for

This is actually a small problem. utterances itself does not provide a solution, its loading method is to create an iframe inside a div with class `utterances` to display comments, and the process of loading iframes often fails. iframes also have cross-origin limitations, and cannot use js listeners very well.

While rummaging around, I found that utterances add inline styles like `style="height: 267px;"` to the above mentioned div after loading, so I decided to do something about it.

When considering loading the indicator graphic, the original plan was to use a rotated SVG graphic. Then I thought about it, and used the previous [ProgressBar.js](https://github.com/kimmobrunfeldt/progressbar.js) to write a progress bar, so I continued to use it.

## To solve

First, append a div for the indicator on top of the original comment section and create a circular progress bar inside:

```html
<div id="post-loading">
  <div id="container-loading-bar">
    <div id="loading-bar"></div>
  </div>
  <p>Comments loading</p>
</div>
<div id="post-comment">
  <! -- utterances script -->
</div>
```

The next tasks are all implemented in the js, as follows:

```javascript
$(function () {
  // initialize progress bar
  var loadingBar = new ProgressBar.Circle('#loading-bar', {
    color: '#8AA2D3',
    strokeWidth: 15,
    trailColor: '#E5E2E4',
    trailWidth: 15,
    fill: '#E5E2E4'
  })
  // Show the loading state of the progress bar at the beginning with a total duration of 10 seconds (10 seconds is considered a timeout)
  loadingBar.animate(1.0, {
    duration: 10000
  })

  var commentStatus // The loading status of the comment section
  var commentLoadingTime = 0 // time spent loading the comment section
  var commentCheckInterval = self.setInterval(checkUtterances, 500) // 0.5 seconds to poll for comment loading status

  function checkUtterances() {
    // Get the style property
    commentStatus = $('#post-comment .utterances').attr('style')
    // If the style attribute is undefined, i.e. the comment section is not yet loaded
    if (commentStatus === undefined) {
      // The loading time increases
      commentLoadingTime += 1
      // Timeout if it has taken more than 10 seconds
      if (commentLoadingTime > 20) {
        clearInterval(commentCheckInterval)
        $('#post-comment').hide()
        $('#post-loading p').text('Comment section failed to load')
      }
      return
      // If the style attribute is not undefined, then the comment section is loaded
    } else {
      clearInterval(commentCheckInterval)
      // The progress bar fills up and hides the indicator area
      loadingBar.animate(
        1.0,
        {
          duration: 500
        },
        function () {
          $('#post-loading').hide()
        }
      )
    }
  }
})
```

## Reference

- [Docs | ProgressBar.js](https://progressbarjs.readthedocs.io/en/latest/api/shape/)
