---
title: "MC Notes: an Open Data Science Journal"
layout: default_sidebar
permalink: /about/
---

## The basics

MC Notes is a **literate programming** friendly journal for researchers carrying out intensive data analysis or computational research in any application domain.
It allows authors to combine their analysis scripts with the method documentation in a **single submission**, thereby making the reproduction, extension, and replicability
of the presented approach more accessible to the scientific community.

MC Notes has a formal peer review process designed to improve the scientific
submission and review processes.
It also aims to improve and promote scientific reproducibility and replicability
by making use of technologies such as Jupyter notebooks for the presentation
of data analyses and results as well as Continuous Integration, version control, and
testing along the entire submission process.

## How is this journal _different_?

MC Notes is an open source journal for the publication of research outputs
along with the the computational pipeline used to obtain such results. It is
designed to encourage open research while making it easy to create informative yet engaging
scientific publications.

The whole submission process simple and completely open. All of this workflow
is carried on GitHub where the journal editors, the reviewers, and the authors can openly track the process, and interact among them in an open and respectful way.

The journal has a rigorous peer review process and a growing editorial board formed by highly experienced researchers and research software engineers (RSEs).

## Code of conduct
The MC Notes community (editorial board, developers, authors, reviewers, and readers) adheres to a code of conduct adapted from the [Contibutor Covenant](http://contributor-covenant.org)

Both authors and reviewers will have to confirm that they have read our [code of conduct]({{site.baseurl}}{% link _pages/CoC.md %}),
and are expected to adhere to it.

---

## Author guidelines
The submission process should be straightforward. Make sure you read the [Submitting an entry]({{site.baseurl}}) basic guideline in this website main page.

### Things to consider before making a submission

  <li> Make sure your submission notebook is in a GitHub repository </li>
  <li>  Make sure to know which dependencies and libraries you need to run your notebook in addition to the main kernel used (e.g. matplotlib, tydir)</li>
  <li> Make sure everything is self contained in your submission (e.g. scripts, outputs, and data can be all accessed/displayed solely from the notebook) </li>
  <li>  Ensure your data is appropriately deposited in an adequate repository and you have a DOI generated </li>


### What should I include in my submission?

<ol>
  <li> <strong> notebook.ipynb: </strong> Jupyter notebook, note you can use any kernel for your analysis (e.g. R, Julia, Python).
  However if you are using Python only notebooks using the 3.x Python kernel
  will be accepted. This means that notebooks using <strong> Python 2.7 will
  not be accepted </strong>. <br>This notebook should be able to be run as a
  standalone instance (without user interaction). Figures generated as part of
  the analysis should be displayed in the notebook (avoid the generation of
  external image files such as .jpg, .png, etc.). <br>You can use any name for
  your notebook (please avoid using spaces).
  </li>

  <li> <strong> requirements.yml: </strong>  Yaml file containing the packages
  required to execute your Notebook.
  The use of <a href='https://conda.io/docs/using/envs.html'> Conda environments
  </a> is highly encouraged. Alternatively, a <strong>requirements.txt</strong> file can be accepted.
  </li>

  <li> <strong> bibliography.bib: </strong> BibTeX file containing all the references included in your notebook (for information visit the <a href='http://www.bibtex.org' target='blank'>
  BibTeX website </a>.
  </li>

  <li> <strong> metadata.yml: </strong> yml file containing the metadata
  for your publication. This file will be used to add a DOI to your notebook
  for citation.
  Optional entries are marked as <strong> Optional </strong> in the template provided.
  </li>

</ol>

~~~
  title: Title of Notebook
    creators:
      - {'name': "last, first", 'affiliation': 'university of ...'}
      - {'name': "last, first", 'affiliation': 'university of ...'}
      ...
    description: "Short description (abstract) of the notebook."
    keywords: ['keyword1', 'keyword2', ... ] # Optional
    contributors: # Optional
      - {'name': "last, first", 'type': 'DataCollector', 'affiliation': 'university of ...'}
      - {'name': "last, first", 'type': 'ContactPerson', 'affiliation': 'university of ...'}
    grants: # Optional
      - 'id':'<FP7 grant id>'
~~~

### What are the main requirements for a submission?

 <li> The code should have a scientific application </li>
 <li> The person submitting the notebook should be a major contributor to the
 project </li>
 <li> Should be able to be run as a 'standalone notebook' </li>
 <li> It should not contain data within the submission repo (e.g. .csv, .xml, .txt files) </li>
 <li> Your code should be open source (check the <a href='https://opensource.org/osd' target='blank'> OSI definition </a>) </li>

f you think your submission is not an obvious fit or have a question then please submit a pre-submission enquiry. ******

### What about submissions that rely upon proprietary languages/development environments?

We strongly prefer software that doesn't rely upon proprietary (paid for) development environments/programming languages. However, provided your submission meets our submission requirements (including having a valid open source license) then we will consider your submission for review.

Should your submission be accepted for review, we may ask you, the submitting author, to help us find reviewers who already have the required development environment installed.

### What does the submission/review process looks like?
We highly encourage you to familiarize with the reviewers guidelines described below. Broadly speaking though, provided you have followed our pre-submission steps and meet our submission requirements then you should expect a rapid review.

**Submission**

  <li>If you need additional data make this available in a suitable repository
  of your choice (e.g. FigShare, ORDA, GoogleDrive)</li>
  <li>Fork the current volume repository</li>
  <li>Make the notebook available in a **new branch** of your fork of the
  volume repository and include a suitable
  <a href='https://opensource.org/licenses'> OSI approved open source license </a></li>
  <li>Add the complementary files: bibtex, conda environment, metadata</li>
  <li>Create a pull request to the master branch of the original repository</li>


**Review**
After submission:
<li> The PR is validated (notebook tested and files content/existence verified).</li>
<li> One or more reviewers are assigned and the review is carried out in the **journal reviews repository**. </li>
<li> Authors respond to reviewer-raised issues (if any are raised) on the submitted repository's issue tracker. Reviewer contributions, like any other contributions, should be acknowledged in the repository. </li>
<li> The files in your submission are validated again (in case any changes were
  made since the initial submission). </li>
<li> Your submission will  be deposited in Zenodo and a DOI will be issued.</li>
<li> You will be asked to update your original repository with the DOI generated </li>
<li> Your submission will be featured in the journal </li>
<li> And that is it! </li>

---

## Reviewer guidelines


## Content licensing
Copyright of MC Notes is retained by submitting authors and accepted papers are
subject to a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

Any code snippets included in MC Notes submissions are subjected to the [MIT license](https://opensource.org/licenses/MIT).
