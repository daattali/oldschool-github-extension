# Old School GitHub (Chrome / Firefox extension)

> *Copyright 2020 [Dean Attali](https://deanattali.com). Licensed under the MIT license.*

_Source code available [on GitHub](https://github.com/daattali/oldschool-github-extension)_     
_Get the [Chrome extension](https://chrome.google.com/webstore/detail/old-school-github/blkkkhifjoiedclojflfcenbjigdajeb) or [Firefox add-on](https://addons.mozilla.org/addon/old-school-github/)_  

GitHub rolled out a brand new UI on June 23, 2020. There are a few aspects of the new UI that I (and many others) don't like and this extension brings back a few features from the classic GitHub look.

<p align="center">

<a style="display: inline-block;" href="https://paypal.me/daattali">
<img height="35" src="https://camo.githubusercontent.com/0e9e5cac101f7093336b4589c380ab5dcfdcbab0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f74776f6c66736f6e2f70617970616c2d6769746875622d627574746f6e40312e302e302f646973742f627574746f6e2e737667" />
</a>
<a style="display: inline-block; margin-left: 10px;" href="https://github.com/sponsors/daattali">
<img height="35" src="https://i.imgur.com/034B8vq.png" /> </a>

</p>

## Installation

Installation is extremely easy: just go to [the Chrome extension store](https://chrome.google.com/webstore/detail/old-school-github/blkkkhifjoiedclojflfcenbjigdajeb) or [Firefox add-ons page](https://addons.mozilla.org/addon/old-school-github/) and install with one button click there.

## Features

1. **Move headers to main content area:** In the June update, GitHub moved the header buttons ("Code"/"Issues"/"Pull Requests"/etc) to the far left of the page. This was only an issue if you have a big wide monitor because those buttons are now very very far from the rest of the page content. If you're on a laptop you probably won't notice the difference.

2. **Highlight selected page in header:** Prior to the update, the selected page you're on was clearly highlighted. The update made the current page selection much more subtle.

3. **Classic-syle buttons:** The old buttons had depth, and the new buttons are flat and look less clickable. 

4. **Add row separators in file explorer:** The file explorer that shows all the files and folders currently has no borders between rows, making it harder to read the file list.

5. **Remove circular user images:** The new `border-radius: 50% !important` setting results in unwanted rounding near the corners, cropping significant features from avatars which are intended to be square.

And many other UI fixes such as fix the text width of issue counters and issue label, fix the whitespace of issues, add a slight background to README title, and more.

## Screenshots

#### 3, 4, 5: add row separators, use classic buttons, remove circular images

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-before.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-before.PNG)

vs

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-after.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-after.PNG)

#### 1. Move headers to main content area

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-before.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-before.PNG)

vs

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-after.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-after.PNG)

#### 2. Highlight selected page in header

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-before.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-before.PNG)

vs

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-after.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-after.PNG)

## Disclaimer

This was written in just a couple hours and does not deal with some of the biggest UI changes like the layout of the sidebar vs the main content. Because GitHub uses AJAX to load many of its pages (like when navigating from the Code page to Pull Requests), I had to make everything use CSS and no JavaScript.

## My other extensions

[GitHub Diff Navigator](https://github.com/daattali/github-diff-navigator-extension) - Chrome/Firefox extension that allows you to easily navigate through the changes in a file that has been edited on GitHub.

[Google Slides Auto Resize Speaker Notes](https://github.com/daattali/gslides-betternotes-extension) - the slides thumbnails in the Speaker Notes window of Google Slides are tiny. This extension dynamically resizes the slides to be more readable based on the window size.

---

To see my other projects, visit [https://deanattali.com/projects](https://deanattali.com/projects)
