---
name: Lossless Pangenome Indexing Using Tag Arrays
speakers:
  - Parsa Esk
  - ar
  - Benedict Paten
  - Jouni Sirén
categories:
  - Proceedings
  - Talk
hide: false
---

Pangenome graphs represent the genomic variation by
encoding multiple haplotypes within a unified graph
structure. However, efficient and lossless indexing of such
structures remains challenging due to the scale and
complexity of pangenomic data. We present a practical and
scalable indexing framework based on tag arrays, which
annotate positions in the Burrows--Wheeler transform (BWT)
with graph coordinates. Our method extends the FM-index
with a run-length compressed tag structure that enables
efficient retrieval of all unique graph locations where a
query pattern appears. We introduce a novel construction
algorithm that combines unique $k$-mers, graph-based
extensions, and haplotype traversal to compute the tag
array in a memory-efficient manner. To support large
genomes, we process each chromosome independently and then
merge the results into a unified index using properties of
the multi-string BWT and r-index. Our evaluation on the
HPRC graphs demonstrates that the tag array structure
compresses effectively, scales well with added haplotypes,
and preserves accurate mapping information across diverse
regions of the genome. This indexing method enables
lossless and haplotype-aware querying in complex pangenomes
and offers a practical indexing layer to develop scalable
aligners and downstream graph-based analysis tools.