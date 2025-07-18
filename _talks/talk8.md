---
name: "Sequence similarity estimation by random subsequence sketching"
speakers:
  - Ke Chen
  - Vinamratha Pattar
  - Mingfu Shao
categories:
  - Proceedings
  - Talk
hide: false
---

Sequence similarity estimation is essential for many
bioinformatics tasks, including functional annotation,
phylogenetic analysis, and overlap graph construction.
Alignment-free methods aim to solve large-scale sequence
similarity estimation by mapping sequences to more easily
comparable features that can approximate edit distances
efficiently. Substrings or k-mers, as the dominant choice
of features, face an unavoidable compromise between
sensitivity and specificity when selecting the proper
k-value. Recently, subsequence-based features have shown
improved performance, but they are computationally
demanding, and determining the ideal subsequence length
remains an intricate art. In this work, we introduce
SubseqSketch, a novel alignment-free scheme that maps a
sequence to an integer vector, where the entries correspond
to dynamic, rather than fixed, lengths of random
subsequences. The cosine similarity between these vectors
exhibits a strong correlation with the edit similarity
between the original sequences. Through experiments on
benchmark datasets, we demonstrate that SubseqSketch is
both efficient and effective across various alignment-free
tasks, including nearest neighbor search and phylogenetic
clustering. A C++ implementation of SubseqSketch is openly
available at https://github.com/Shao-Group/SubseqSketch.