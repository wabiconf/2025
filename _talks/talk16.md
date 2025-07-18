---
name: "K-mer-based estimators of the substitution rate of repetitive sequences"
speakers:
  - Haonan Wu
  - Antonio Blanca
  - Paul Medvedev
categories:
  - Proceedings
  - Talk
hide: false
---

K-mer-based analysis of genomic data is ubiquitous, but the
presence of repetitive k-mers continues to complicate the
accuracy of many methods. For example, the Mash tool (Ondov
et al 2016) can accurately estimate the substitution rate
between two low-repetitive sequences from their \kmer
sketches; however, its estimator is highly inaccurate on
repetitive sequences such as the centromere of a human
chromosome. Recent work by Blanca et al. (2021) has
attempted to model how mutations affect k-mer sets based on
strong assumptions that the sequence is non-repetitive and
that mutations do not create spurious k-mer matches.
However, the theoretical foundations for extending an
estimator like Mash to work in the presence of repeat
sequences have been lacking.

In this work, we relax the non-repetitive assumption and
propose a novel estimator for the mutation rate. We derive
theoretical bounds on our estimator’s bias. Our experiments
show that it remains accurate for repetitive genomic
sequences, such as the alpha satellite higher order repeats
in centromeres. We demonstrate our estimator's robustness
across diverse datasets and various ranges of the
substitution rate and k-mer size. Finally, as with the Mash
estimator, we show how sketching can be used to avoid
dealing with large k-mer sets while retaining accuracy.