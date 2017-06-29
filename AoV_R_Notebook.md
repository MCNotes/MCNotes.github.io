---
layout: notebook
title: "Analysis of variance"
author: T.Tania
tags:
    - Day2
nb: "AoV_R_Notebook.ipynb"
module: '/2-outline/'

permalink: "/notebook.html"
---
# BAD DAY 2: ANOVA

# 1. Analysis of variance: ANOVA models

<br>
<font color ='#00bcd4'> In [1]: </font>

{% highlight R %}
# Setting the right working dir

bad2dir = getwd()
setwd(bad2dir)

{% endhighlight %}

Loading the data: in this case we ae going to work with the `growth1` data set
provided as art of this course. The data is contained within a `.csv` file.

<br>
<font color ='#00bcd4'> In [2]: </font>

{% highlight R %}
# data=read.delim('./Data/growth.txt',header=TRUE)
data1 = read.csv('./Data/growth1.csv')
{% endhighlight %}

Let's first have a look at the dimension  of the data

<br>
<font color ='#00bcd4'> In [3]: </font>

{% highlight R %}
dim(data1)
{% endhighlight %}


<ol class="list-inline">
	<li>31</li>
	<li>2</li>
</ol>



Printing the column names:

<br>
<font color ='#00bcd4'> In [4]: </font>

{% highlight R %}
colnames(data1)
{% endhighlight %}


<ol class="list-inline">
	<li>'Growth'</li>
	<li>'Treatment'</li>
</ol>



Getting a basic statistical summary on the data:

<br>
<font color ='#00bcd4'> In [5]: </font>

{% highlight R %}
summary(data1)
{% endhighlight %}


         Growth        Treatment
     Min.   : 5.00   A      :7  
     1st Qu.:14.00   B      :5  
     Median :36.00   C      :5  
     Mean   :38.68   Control:4  
     3rd Qu.:61.50   D      :5  
     Max.   :83.00   E      :5  


<br>
<font color ='#00bcd4'> In [6]: </font>

{% highlight R %}
# making the objects in the dataframe accessible
attach(data1)
{% endhighlight %}

<br>
<font color ='#00bcd4'> In [7]: </font>

{% highlight R %}
Treatment
{% endhighlight %}


<ol class="list-inline">
	<li>C</li>
	<li>C</li>
	<li>C</li>
	<li>C</li>
	<li>C</li>
	<li>E</li>
	<li>E</li>
	<li>E</li>
	<li>E</li>
	<li>E</li>
	<li>D</li>
	<li>D</li>
	<li>D</li>
	<li>D</li>
	<li>D</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>B</li>
	<li>B</li>
	<li>B</li>
	<li>B</li>
	<li>B</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
</ol>



In this case we have a column for the *DEPENDENT* variable (Growth) and a column
for the  *FACTOR* (Treatment).

The first column contains numeric data but the second contains letters. It does
not matter to R which form you have your dependent factors (letters or numbers)
but it will be easier to interpret the results if you use meaningful names.

### Ready to run the analysis.

<br>
<font color ='#00bcd4'> In [8]: </font>

{% highlight R %}
data.aov = aov(Growth ~ Treatment)
{% endhighlight %}

Notice here the symbol (a tilde) in the model. This means take Growth as the
DEPENDENT variable, indeed it depends on the Treatment.

We can then print the results of the analysis of variance

<br>
<font color ='#00bcd4'> In [9]: </font>

{% highlight R %}
#see the results: not very clear
data.aov
{% endhighlight %}


    Call:
       aov(formula = Growth ~ Treatment)

    Terms:
                    Treatment Residuals
    Sum of Squares  19459.167   973.607
    Deg. of Freedom         5        25

    Residual standard error: 6.240536
    Estimated effects may be unbalanced


In order to get more information we need to view the analysis summary:

<br>
<font color ='#00bcd4'> In [10]: </font>

{% highlight R %}


summary(data.aov)
{% endhighlight %}


                Df Sum Sq Mean Sq F value   Pr(>F)    
    Treatment    5  19459    3892   99.93 1.07e-15 ***
    Residuals   25    974      39                     
    ---
    Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1


# 2. Post-hoc testing

This was an example of a simple one-way anova. According to the summary we see
that there is a significant effect of Treatment upon Growth. However, there are
5 treatments!

It is crucial to know which of these treatments are significantly different from
the each other (e.g. control treatments). R provides a simple function to carry
out the Tukey HSD test.

<br>
<font color ='#00bcd4'> In [11]: </font>

{% highlight R %}
TukeyHSD(data.aov)
{% endhighlight %}


      Tukey multiple comparisons of means
        95% family-wise confidence level

    Fit: aov(formula = Growth ~ Treatment)

    $Treatment
                   diff        lwr        upr     p adj
    B-A       -12.65714 -23.918244  -1.396042 0.0211539
    C-A        47.54286  36.281756  58.803958 0.0000000
    Control-A -18.10714 -30.161431  -6.052855 0.0012274
    D-A        32.94286  21.681756  44.203958 0.0000000
    E-A        38.54286  27.281756  49.803958 0.0000000
    C-B        60.20000  48.036621  72.363379 0.0000000
    Control-B  -5.45000 -18.351212   7.451212 0.7812490
    D-B        45.60000  33.436621  57.763379 0.0000000
    E-B        51.20000  39.036621  63.363379 0.0000000
    Control-C -65.65000 -78.551212 -52.748788 0.0000000
    D-C       -14.60000 -26.763379  -2.436621 0.0121584
    E-C        -9.00000 -21.163379   3.163379 0.2390481
    D-Control  51.05000  38.148788  63.951212 0.0000000
    E-Control  56.65000  43.748788  69.551212 0.0000000
    E-D         5.60000  -6.563379  17.763379 0.7157067



# 3. Two way ANOVA

Loading the data to be used

<br>
<font color ='#00bcd4'> In [12]: </font>

{% highlight R %}
data2 = read.csv('./Data/growth2.csv')
names(data2)
{% endhighlight %}


<ol class="list-inline">
	<li>'Growth'</li>
	<li>'Treatment'</li>
	<li>'Gender'</li>
</ol>



<br>
<font color ='#00bcd4'> In [13]: </font>

{% highlight R %}
detach(data1)  # detach the previoulsy attached data set
attach(data2)  # making data2 accessible
{% endhighlight %}

<br>
<font color ='#00bcd4'> In [14]: </font>

{% highlight R %}
Gender
{% endhighlight %}


<ol class="list-inline">
	<li>M</li>
	<li>M</li>
	<li>M</li>
	<li>F</li>
	<li>F</li>
	<li>F</li>
	<li>F</li>
	<li>M</li>
	<li>M</li>
	<li>M</li>
	<li>F</li>
	<li>F</li>
	<li>F</li>
	<li>M</li>
	<li>M</li>
	<li>M</li>
	<li>F</li>
	<li>F</li>
	<li>M</li>
	<li>M</li>
	<li>M</li>
	<li>F</li>
	<li>F</li>
	<li>F</li>
	<li>M</li>
	<li>M</li>
	<li>M</li>
	<li>F</li>
	<li>F</li>
	<li>M</li>
	<li>M</li>
	<li>F</li>
	<li>F</li>
	<li>M</li>
	<li>M</li>
</ol>



<br>
<font color ='#00bcd4'> In [15]: </font>

{% highlight R %}
Treatment
{% endhighlight %}


<ol class="list-inline">
	<li>C</li>
	<li>C</li>
	<li>C</li>
	<li>C</li>
	<li>C</li>
	<li>E</li>
	<li>E</li>
	<li>E</li>
	<li>E</li>
	<li>E</li>
	<li>D</li>
	<li>D</li>
	<li>D</li>
	<li>D</li>
	<li>D</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>A</li>
	<li>B</li>
	<li>B</li>
	<li>B</li>
	<li>B</li>
	<li>B</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
	<li>Control</li>
</ol>



<br>
<font color ='#00bcd4'> In [16]: </font>

{% highlight R %}
length(Gender)
{% endhighlight %}


35


We can compare the two times or the two shoes by looking at summary statistics
or at parallel boxplots. To get the means for each level of each factor, use R's
tapply command.

This takes three arguments: the data you wish to summarize, the factor that
determines the groups, and the function you wish to apply to each of the groups.


First we will compute the mean Growth as a function of the Treatment type:

<br>
<font color ='#00bcd4'> In [17]: </font>

{% highlight R %}
tapply(Growth, Treatment, mean)
{% endhighlight %}


<dl class="dl-horizontal">
	<dt>A</dt>
		<dd>23.8571428571429</dd>
	<dt>B</dt>
		<dd>11.2</dd>
	<dt>C</dt>
		<dd>71.4</dd>
	<dt>Control</dt>
		<dd>6</dd>
	<dt>D</dt>
		<dd>56.8</dd>
	<dt>E</dt>
		<dd>62.4</dd>
</dl>



<br>
<font color ='#00bcd4'> In [18]: </font>
