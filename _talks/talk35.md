---
name: Estimation of substitution and indel rates via $k$-mer
statistics
speakers:
	- Mahmudur Rahman Hera
	- Paul Medvedev
	- David Koslicki
	- Antonio Blanca
categories:
	- Proceedings
	- Talk
---

Methods utilizing $k$-mers are widely used in
bioinformatics, yet our understanding of their statistical
properties under realistic mutation models remains
incomplete.
Previously, substitution-only mutation models have been
considered to derive precise expectations and variances for
mutated $k$-mers and intervals of mutated and nonmutated
sequences. In this work, we consider a mutation model that
uses insertions and deletions in addition to
single-nucleotide substitutions. Within this framework, we
derive closed-form $k$-mer-based-estimators for the three
fundamental mutation parameters: substitution rate,
deletion rate, and average insertion length. We provide
statistics of $k$-mers under this model and theoretical
guarantees via concentration inequalities, ensuring
correctness under reasonable conditions. Empirical
evaluations on simulated evolution of genomic sequences
confirm our theoretical findings, demonstrating that
accounting for indel signals allows for accurate estimation
of mutation rates and improves upon the results obtained by
considering a substitution-only model. An implementation of
estimating the mutation parameters from a pair of FASTA
files is available here here:
\href{https://github.com/mahmudhera/estimate_rates_using_mutation_model.git}{github.com/mahmudhera/estimate\_rates\_using\_mutation\_model.git}.
The results presented in this manuscript can be reproduced
using the code available here:
\href{https://github.com/mahmudhera/est_rates_experiments.git}{github.com/mahmudhera/est\_rates\_experiments.git}.