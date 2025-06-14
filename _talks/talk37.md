---
name: Identifying Breakpoint Median Genomes: A Branching
Algorithm Approach
speakers:
  - Poly H. da Silva
  - Arash Jamshidpey
  - David Sankoff
categories:
  - Proceedings
  - Talk
hide: false
---

Genome comparison often involves quantifying
dissimilarities between genomes with identical gene sets,
commonly using breakpoints—points where adjacent genes in
one genome are not adjacent in another. The concept of a
median genome, used for comparison of multiple genomes,
aims to find a genome that minimizes the total distance to
all genomes in a given set. While median genomes are useful
for extracting common genomic information and estimating
ancestral traits, the existence of multiple, divergent
medians raises concerns about their accuracy in reflecting
the true ancestor. The median problem is known to be
NP-hard, particularly for unichromosomal genomes, and
solving it becomes increasingly challenging under different
genome distance models. In this work, we introduce a novel
branching algorithm to efficiently find all breakpoint
medians of $k$ linear unichromosomal genomes, represented
as unsigned permutations. This algorithm constructs a
rooted, labeled tree, where the sequence of labels along
each complete ray defines a genome, providing a structured
and efficient way to explore the space of candidate medians
by narrowing the search to a well-defined and significantly
smaller subset of the permutation space. We validate our
approach with experiments on randomly generated sets of
three permutations. The results show that our method
successfully computes the exact median value and also
identifies many near-optimal approximations. Our
experiments further show that most medians lie relatively
close to the input permutations, in agreement with prior
theoretical results.