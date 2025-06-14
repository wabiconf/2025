---
name: Design of Worst-Case-Optimal Spaced Seeds
speakers:
	- Jens Zentgraf	- Sven Rahmanncategories:
	- Proceedings
	- Talk
---

Read mapping is a fundamental problem in biological
sequence analysis. For speed and computational efficiency,
many popular read mappers tolerate only a few differences
between the read and the corresponding part of the
reference genome, which leads to reference bias: Reads with
too many difference are not guaranteed to be mapped
correctly or at all, because to even consider a genomic
position, a sufficiently long exact match (seed) must exist.

While pangenomes and their graph-based representations
provide one way to avoid reference bias by enlarging the
reference, we explore an orthogonal approach and consider
stronger substitution-tolerant primitives, namely spaced
seeds or gapped k-mers. Given two integers k ≤ w, one
considers k selected positions, described by a mask, from
each length-w window in a sequence. In the existing
literature, masks with certain probabilistic guarantees
have been designed for small values of k.

Here, for the first time, we take a combinatorial approach
from a worst-case perspective. For any mask, using integer
linear programs, we find least favorable distributions of
sequence changes in two different senses: (1) minimizing
the number of unchanged windows; (2) minimizing the number
of positions covered by unchanged windows. Then, among all
masks of a given shape (k, w), we find the set of best
masks that maximize these minima. As a result, we obtain
robust masks, even
for large numbers of changes.

We illustrate the properties of these masks by constructing
a challenging set of reads that contain many approximately
equidistributed substitutions (but no indels) that many
existing tools cannot map, even though they are in
principle easily mappable (apart from the large number of
changes) because they originate from selected
non-repetitive regions of the human reference genome.
We observe that the majority of these reads can be mapped
with a simple alignment-free approach using chosen gapped
masks, where seeding approachs based on contiguous k-mers
fail.