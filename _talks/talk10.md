---
name: "An Efficient Data Structure and Algorithm for Long-Match Query in Run-Length Compressed BWT"
speakers:
  - Ahsan Sanaullah
  - Degui Zhi
  - Shaojie Zhang
categories:
  - Proceedings
  - Talk
hide: false
---

String matching problems in bioinformatics are typically
for finding exact substring matches between a query and a
reference text. Previous formulations often focus on
maximum exact matches (MEMs). However, multiple occurrences
of substrings of the query in the text that are long enough
but not maximal may not be captured by MEMs. Such long
matches can be informative, especially when the text is a
collection of similar sequences such as genomes. In this
paper, we describe a new type of match between a pattern
and a text that aren't necessarily maximal in the query,
but still contain useful matching information: locally
maximal exact matches (LEMs). There are usually a large
amount of LEMs, so we only consider those above some length
threshold $\mathcal{L}$. These are referred to as long
LEMs. The purpose of long LEMs is to capture substring
matches between a query and a text that are not necessarily
maximal in the pattern but still long enough to be
important. Therefore efficient long LEMs finding algorithms
are desired for these datasets. However, these datasets are
too large to query on traditional string indexes.
Fortunately, these datasets are very repetitive. Recently,
compressed string indexes that take advantage of the
redundancy in the data but retain efficient querying
capability have been proposed as a solution. We therefore
give an efficient algorithm for computing all the long LEMs
of a query and a text in a BWT runs compressed string
index. We describe an $O(m+occ)$ expected time algorithm
that relies on an $O(r)$ words space string index for
outputting all long LEMs of a pattern with respect to a
text given the matching statistics of the pattern with
respect to the text. Here $m$ is the length of the query,
$occ$ is the number of long LEMs outputted, and $r$ is the
number of runs in the BWT of the text. The $O(r)$ space
string index we describe relies on an adaptation of the
move data structure by Nishimoto and Tabei. We are able to
support $LCP[i]$ queries in constant time given $SA[i]$. In
other words, we answer $PLCP[i]$ queries in constant time.
Long LEMs may provide useful similarity information between
a pattern and a text that MEMs may ignore. This information
is particularly useful in pangenome and biobank scale
haplotype panel contexts.