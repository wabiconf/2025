---
name: Average-Tree Phylogenetic Diversity of Networks
speakers:
  - Leo van Iersel
  - Mark Jones
  - Jannik Schestag
  - Celine
Scornavacca
  - Mathias Weller
categories:
  - Proceedings
  - Talk
hide: false
---

Phylogenetic diversity is a measure used to quantify the
biodiversity of a set of species.
Here,  we introduce the "average-tree" phylogenetic
diversity score in rooted binary phylogenetic networks and
consider algorithms for computing and maximizing the score
on a given network.
Basically, the score is the weighted average of the
phylogenetic diversity scores in all trees displayed by the
network, with the weights determined by the inheritance
probabilities on the reticulation edges used in the
embeddings.
We show that computing the score of a given set of taxa in
a given network is #P-hard, directly implying #P-hardness
of finding a subset of $k$ taxa achieving maximum diversity
score and, thereby, ruling out polynomial-time algorithms
for these problems unless the polynomial hierarchy
collapses.
However, we show that both problems can be solved
efficiently if the input network is close to being a tree
in the sense that its reticulation number is small.
More precisely, we prove that we can solve the optimization
problem in networks with $n$ leaves and $r$ reticulations
in $2^{O(r)} nk$ time.
Using experiments on data produced by simulating a
reticulate-evolution process, we show that our algorithm
runs within 5 minutes on a laptop computer on networks with
up to 500 taxa and 55 reticulations, for $k \leq 5$.