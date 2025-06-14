---
name: DiVerG: Scalable Distance Index for Validation of
Paired-End Alignments in Sequence Graphs
speakers:
  - Ali Ghaffaari
  - Alex
  - er Schönhuth
  - Tobias Marschall
categories:
  - Proceedings
  - Talk
hide: false
---

Determining the distance between two loci within a genomic
region is a recurrent operation in various tasks in
computational genomics. A notable example of this task
arises in paired-end read mapping as a form of validation
of distances between multiple alignments. While
straightforward for a single genome, graph-based reference
structures render the operation considerably more involved.
Given the sheer number of such queries in a typical read
mapping experiment, an efficient algorithm for answering
distance queries is crucial.

In this paper, we introduce DiVerG, a compact data
structure as well as a fast and scalable algorithm, for
constructing distance indexes for general sequence graphs
on multi-core CPU and many-core GPU architectures. DiVerG
is based on PairG [Jain et al., 2019], but overcomes the
limitations of PairG by exploiting the extensive potential
for improvements in terms of scalability and space
efficiency. As a consequence, DiVerG can process
substantially larger datasets, such as whole human genomes,
which are unmanageable by PairG. DiVerG offers faster index
construction time and consistently faster query time with
gains proportional to the size of the underlying compact
data structure. We demonstrate that our method performs
favorably on multiple real datasets at various scales.
DiVerG achieves superior performance over PairG; e.g.
resulting to 2.5--4x speed-up in query time, 44--340x
smaller index size, and 3--50x faster construction time for
the genome graph of the MHC region, as a particularly
variable region of the human genome.

The implementation is available at:
https://github.com/cartoonist/diverg