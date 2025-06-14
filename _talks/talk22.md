---
name: Improved Algorithms for Bi-partition Function Computation
speakers:
  - John Bridgers
  - Jan Hoinka
  - S. Cenk Sahinalp
  - Salem Malikic
  - Teresa Przytycka
  - A. Funda Ergun
categories:
  - Proceedings
  - Talk
hide: false
---

The evolutionary history of a tumor, inferred from
single-cell sequencing data, is typically represented as a
tree in which each subtree corresponds to a clade of cells
seeded by a specific set of  mutations. Traditional methods
typically identify a single most likely tree for downstream
analyses, such as detecting driver mutations, studying
mutation co-occurrence patterns and identifying common
evolutionary trajectories. However, the reliability of such
inferred trees, particularly their topology, clade
composition, and mutational placements, often remains
uncertain.

To quantify this uncertainty, the concept of a Bi-partition
Function was recently introduced, providing a probabilistic
measure of how reliably a mutation seeds a given clade of
cells. The single available algorithm for estimating the
Bi-Partition Function relies on simplifying assumptions and
uses sampling for limited exploration of the tree-space.

In this paper, we introduce the first exact algorithm for
computing the Bi-partition Function. Our algorithm scales
linearly with the number of mutations but exhibits
super-exponential complexity with respect to the number of
cells. Despite this complexity, it establishes crucial
ground truth values, essential for accurately benchmarking
and validating approximate methods. Additionally, we
present a GPU-accelerated version of the available
sampling-based algorithm, significantly boosting the
computational performance through large-scale
parallelization, enabling more accurate Bi-partition
Function estimates via deeper exploration of the tree
spaces. We compare our methods on synthetic datasets,
demonstrating that especially when the number of mutations
sufficiently exceed the number of cells, our
GPU-accelerated sampling algorithm closely approximates the
exact ground truth values.