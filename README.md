# Old School GitHub (Chrome / Firefox extension / User Style)

> *Copyright 2021 [Dean Attali](https://deanattali.com)*


_Install the [Chrome extension](https://chrome.google.com/webstore/detail/old-school-github/blkkkhifjoiedclojflfcenbjigdajeb) or [Firefox extension](https://addons.mozilla.org/addon/old-school-github/)_

GitHub rolled out a brand new UI on June 23, 2020 that introduced a flat, rounded, and more whitespaced design. There are some aspects of the new UI that many people don't like, so this extension reverts most of GitHub to its classic look.


**If you enjoy my work (or just want to get special perks!), you should [support me on GitHub](https://github.com/sponsors/daattali).**


<p align="center">
<a style="display: inline-block; margin-left: 10px;" href="https://github.com/sponsors/daattali">
<img height="35" src="https://i.imgur.com/034B8vq.png" /> </a>

</p>

## Installation

Go to the [Chrome extension store](https://chrome.google.com/webstore/detail/old-school-github/blkkkhifjoiedclojflfcenbjigdajeb) or [Firefox extensions page](https://addons.mozilla.org/addon/old-school-github/) to instantly install with one click.

Also available as [user style](css/osgh.user.css?raw=true), which you can use with a user style manager such as [Stylus](https://github.com/openstyles/stylus#releases).

## Features

1. **Move header tabs to main content area:** In the June update, GitHub moved the header buttons ("Code"/"Issues"/"Pull Requests"/etc) to the far left of the page. This became an issue if you have a big wide monitor because those buttons are now very very far from the rest of the page content. If you're on a laptop you probably won't notice the difference.

2. **Highlight selected page in header:** Prior to the update, the selected page you're on was clearly highlighted. The update made the current page selection much more subtle.

3. **Classic-syle buttons and labels:** The old buttons had depth and bold font, and the new buttons are flat and look less clickable.

4. **Add row separators in file explorer:** The file explorer that shows all the files and folders currently has no borders between rows, making it harder to read the file list.

5. **Remove circular user images and rounded corners everywhere:** The new circular user photos result in unwanted rounding near the corners, cropping significant features from photos that are intended to be square for some users. Many other items were also made very round.

And many other UI fixes such as fix the text width of issue counters and issue label, fix the whitespace of issues, add a slight background to README title, and more.

## Limitations

This extension can change the look of existing items on the page, but it cannot change the layout of the page by moving things around.

For example, a common question is whether the repository sidebar can be moved to be above the main code section, like it was previously. Unfortunately that is not possible with this extension.

The reason is because of the strange way GitHub handles internal links: some pages are actual page reloads, but some pages are fully loaded with AJAX. This makes it difficult to use JavaScript to fix any UI issues, and only CSS can be used. If you're on the Code tab and you click on Pull Requests then you don't actually refresh the page, but if you click on Issues then it is a new page. What that means is that after moving from Code to Pull Requests, any JavaScript changes are reverted because large portions of the page body were re-written. Technically it's possible to find ways around that (using event listeners or mutator observers for example) to try and force a re-initialization of the JavaScript when a new page is AJAX-loaded, but the code to achieve that is too complex for this extension.

## Screenshots

#### 1. Move headers to main content area

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-before.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-before.PNG)

vs

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-after.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-headers-after.PNG)

#### 2. Highlight selected page in header

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-before.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-before.PNG)

vs

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-after.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-selected-after.PNG)

#### 3, 4, 5: add row separators, use classic buttons, remove circular images

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-before.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-before.PNG)

vs

[![](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-after.PNG)](https://github.com/daattali/oldschool-github-extension/blob/master/img/doc/screenshot-main-after.PNG)

## Disclaimer

This was written in just a couple hours and does not deal with some of the biggest UI changes like the layout of the sidebar vs the main content. Because GitHub uses AJAX to load many of its pages (like when navigating from the Code page to Pull Requests), I had to make everything use CSS and no JavaScript.

---

To see my other projects, visit [https://deanattali.com/projects](https://deanattali.com/projects)

When submitting to a browser extension store, remove the `img/doc/` folder and `generate-user-style.js`
