---
name: "Mutational signature refitting on sparse pan-cancer data"
speakers:
  - Gal Gilad
  - Teresa Przytycka
  - Roded Sharan
categories:
  - Proceedings
  - Talk
hide: false
---

Mutational processes shape cancer genomes, leaving
characteristic marks that are termed signatures. The level
of activity of each such process, or its signature
exposure, provides important information on the disease,
improving patient stratification and the prediction of drug
response. Thus, there is growing interest in developing
refitting methods that decipher those exposures. Previous
work in this domain was unsupervised in nature, employing
algebraic decomposition and probabilistic inference methods.
Here we provide a supervised approach to the problem of
signature refitting and show its superiority over current
methods. Our method, SuRe, leverages a neural network model
to capture correlations between signature exposures in real
data. We show that SuRe outperforms previous methods on
sparse mutation data from tumor type specific data sets, as
well as pan-cancer data sets, with an increasing advantage
as the data become sparser. We further demonstrate its
utility in clinical settings.