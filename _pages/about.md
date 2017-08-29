---
title: "MC Notes: an Open Data Science Journal"
layout: default
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

## How is this journal _friendly_?

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


## Author guidelines
The submission process should be straightforward. Make sure you read the [Submitting an entry]({{site.baseurl}}) basic guideline in this website main page.

### Things to consider before making a submission
- Make sure your submission is in a GitHub repository
- Make sure to know which dependencies and libraries you need to run your notebook in addition to the main kernel
- Make sure everything is self contained in your submission (e.g. scripts, outputs, and data can be all acessed/displayed from the notebook)
- Ensure your data is appropriately deposited in an adequate repository and you have a DOI generated

### What should I include in my submission?
- **notebook.ipynb:** Jupyter notebook, note you can use any kernel for your analysis (e.g. R, Julia, Python) however if using Python only notebooks using the 3.x Python kernel will be accepted. This means that notebooks using **Python 2.7 will not be accepted**. This notebook should be able to be run as a standalone instance (without user interaction). Figures generated as part of the analysis should be displayed in the notebook (avoid the generation of external image files such as .jpg, .png, etc.). You can use any name for your notebook (please avoid using spaces).

- **requirements.yml**:  Yaml file containing the packages required to execute your Notebook.
The use of <a href='https://conda.io/docs/using/envs.html'> Conda environments
</a> is highly encouraged. Alternatively, a _requirements.txt_ file can be accepted.

- **metadata.yml**: Yaml file containing the metadata
for your publication. This file will be used to add a DOI to your notebook
for citation.
Optional entries are marked as _Optional_ in the template provided.

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

- **bibliography.bib**: BibTeX file containing all the references included in your notebook (for information visit the [BibTeX website](http://www.bibtex.org).



## Reviewer guidelines

## Content licensing
Copyright of MC Notes is retained by submitting authors and sccepted papers are
subject to a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

Any code snippets included in MC Notes submissions are subjected to the [MIT license](https://opensource.org/licenses/MIT).
