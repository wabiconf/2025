---
name: "Human readable compression of GFA paths using grammar-basedcode"
speakers:
  - Peter Heringer
  - Daniel Doerr
categories:
  - Proceedings
  - Talk
hide: false
---

Pangenome graphs offer a compact and comprehensive
representation of genomic diversity, improving tasks such
as variant calling, genotyping, and other downstream
analyses. Although the underlying graph structures scale
sublinearly with the number of haplotypes, the widely used
GFA file format suffers from rapidly growing file sizes due
to the explicit and repetitive encoding of haplotype paths.
In this work, we introduce an extension to the GFA format
that enables efficient grammar-based compression of
haplotype paths while retaining human readability. In
addition, grammar-based encoding provides an efficient
in-memory data structure that does not require
decompression, but conversely improves the runtime of many
computational tasks that involve haplotype comparisons.

We present SQZ, a method that makes use of the proposed
format extension to encode haplotype paths using byte pair
encoding, a grammar-based compression scheme. We evaluate
SQZ on recent human pangenome graphs from Heumos et al. and
the Human Pangenome Reference Consortium, comparing it to
existing compressors BGZIP, GBZ, and Sequitur. SQZ scales
sublinearly with the number of haplotypes in a pangenome
graph and consistently achieves higher compression ratios
than Sequitur and up to 5 times better compression than
BGZIP. When combined with BGZIP, SQZ matches or excels the
compression ratio of GBZ across all our datasets.

These results demonstrate the potential of our proposed
extension of the GFA format in reducing haplotype path
redundancy and improving storage efficiency for pangenome
graphs.