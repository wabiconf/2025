---
name: Partitioned Multi-MUM finding for scalable pangenomics
speakers:
  - Vikram Shivakumar
  - Ben Langmead
categories:
  - Proceedings
  - Talk
hide: false
---

Pangenome collections are growing to hundreds of
high-quality genomes. This necessitates scalable methods
for constructing pangenome alignments that can incorporate
newly-sequenced assemblies. We previously developed
Mumemto, which computes maximal unique matches (multi-MUMs)
across pangenomes using compressed indexing. In this work,
we extend Mumemto by introducing two new partitioning and
merging strategies. Both strategies enable highly parallel,
memory efficient, and updateable computation of multi-MUMs.
One of the strategies, called string-based merging, is also
capable of conducting the merges in a way that follows the
shape of a phylogenetic tree, naturally yielding the
multi-MUM for the tree's internal nodes as well as the
root. With these strategies, Mumemto now scales to 474
human haplotypes, the only multi-MUM method able to do so.
It also introduces a time-memory tradeoff that allows
Mumemto to be tailored to more scenarios, including in
resource-limited settings.