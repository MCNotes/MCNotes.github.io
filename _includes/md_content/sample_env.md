
name: myenv

dependencies:
  - python=3.6
  - numpy
  - matplotlib
  - dill
  - pandas
  - partd
  - bokeh
  - pip:
    - git+https://github.com/blaze/dask.git#egg=dask[complete]
