All the submissions should include the following documents:

1. **notebook.ipynb**: Jupyter notebook executable in Python 3.x.
This notebook should be able to be run as a standalone instance (without user interaction).
Figures generated as part of the analysis should be displayed in the
notebook (avoid the generation of external image files such as .jpg, .npg, etc.). You can use
any name for your notebook (please avoid using spaces).

2. **requirements.yml**:  Yaml file containing the packages required to execute your Notebook.
The use of <a href='https://conda.io/docs/using/envs.html'> Conda environments
</a> is highly encouraged. Alternatively, a _requirements.text_ file can be accepted.

  <!-- trigger modal-->
  <a class='tab' data-toggle="modal" data-target="#myModal"> See example enviroment </a>

<!-- Modal -->
<div class="modal" id="myModal" tabindex="-1" role="alert" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="fa fa-times-circle" aria-hidden="true"></i></span>
        </button>
      </div>
      <div class="modal-body">
      {% capture my_include %}{% include /md_content/sample_env.md%}{% endcapture %}
      {%highlight yml%}
      {{ my_include }}
      {%endhighlight%}
      </div>
    </div>
  </div>
</div>

3. **metadata.yml**: Yaml file containing the metadata
for your publication. This file will be used to add a DOI to your notebook
for citation. An example can be seen <a href="" > here </a>.
Optional entries are marked as _Optional_ in the template provided.

4. **bibliography.bib**: BibTeX file containing all the references included in your notebook (for information visit the [BibTeX website](http://www.bibtex.org).

For a detailed description of the metadata file and options have a look at the
[Zenodo API](http://developers.zenodo.org/#restapi-rep-meta).

_**No other files are allowed as part of the submission**_ additional/accompanying scripts should
be included in the notebook.
