[![Build Status](https://travis-ci.org/MCNotes/MCNotes.github.io.svg?branch=master)](https://travis-ci.org/MCNotes/MCNotes.github.io)

The website is located in [https://MCNotes.github.io](https://MCNotes.github.io)


# About the website
This website is hosted as a GitHub page (github-pages). In short, is built statically from Markdown source files and/or Jupyter notebooks using [Jekyll](http://jekyllrb.com). To update a page, just modify the corresponding source and push.


# Continuous integration
Testing of the website is done using [Travis CI](https://travis-ci.org). Every time a push is done to the GitHub repository a build will be triggered automatically using Travis.

As the website is a static site generated using Jekyll [html_proofer](https://github.com/gjtorikian/html-proofer) is used to validate the HTML output. This set of tests check if the images references are legitimate, of there are alt tags, checks for internal and external links and 4xx associated errors. 

# How to use Jekyll to build this site

### Editing pages online with GitHub

You can edit any page by following the "Edit this page" link in the Quick links nav bar. Alternatively, you can directly navigate to the corresponding .md (Markdown) file in GitHub.

This will drop you in GitHub's file editing interface, where you can modify the source code, preview it, and save your changes, by giving a short description of what you modified. If you have write access to the repository (hint: you do), your modifications will be published rightaway. If you do not have right access, you will be asked to fork the repository and make a pull request.

Most of the pages are written in Markdown, which is a textual format for generating formatted text. Markdown syntax is very intuitive, you can get a quick review here or here.

CAVEATS: The Markdown engine used by this site is Kramdown. Its syntax definitions are slightly different form GitHub Flavored Markdown, thus the preview feature in GitHub might not render source as in the final result.

Other reasons why GitHub's preview may not correspond to the final results are:

Use of Liquid templates in the source. This is seldom used, but some pages use them to access site-wide configuration variables.
Use of special purpose markup, HTML, and scripts, such as mathematical excerpts written in MathJax.


### Working locally

If you want to do more than the occasional editing, you'll soon
realise GitHub's editor and preview are too limited. It's better to
work locally on your computer.

All you need to work locally is a [Git client](http://git-scm.com/).
[Clone the repository](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)
and start coding right away.

At some point, you will need to preview your work, but pushing to
GitHub each time you want to preview is clumsy. Your best option is to
[install Jekyll and the required dependencies](https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll)
on your machine. It is recommended to install the
[GitHub pages gem](https://github.com/github/pages-gem) which provides
you with the exact same versions used by GitHub to compile your site.

If you already have Ruby, the install part should be as easy as

~~~
gem install github-pages -V
~~~

Note that you will need Ruby headers (`ruby-dev` package on Ubuntu) in
order to compile C dependencies.

On OS X, you can just type `sudo gem install github-pages -V`.

Now you can `cd` into your local clone of the repository and launch
the compilation by

~~~
jekyll serve -w -b''
~~~

Your site will be generated in a `_site` sub-directory, and served
live at <http://localhost:4000/>. Any changes to the sources will
trigger an automatic recompilation!
