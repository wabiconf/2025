---
name: Haplotype-aware long-read error correction
speakers:
	- Parvesh Barak
	- Daniel Gibney
	- Chirag Jain
categories:
	- Proceedings
	- Talk
---

Error correction of long reads is an important initial step
in genome assembly workflows. For organisms with ploidy
greater than one, it is important to preserve
haplotype-specific variation during read correction. This
challenge has driven the development of several
haplotype-aware correction methods. However, existing
methods are based on either ad-hoc heuristics or deep
learning approaches. In this paper, we introduce a rigorous
formulation for this problem. Our approach builds on the
minimum error correction framework used in reference-based
haplotype phasing.  We prove that the proposed formulation
for error correction of reads in "de novo" context, i.e.,
without using a reference genome, is NP-hard. To make our
exact algorithm scale to large datasets, we introduce
practical heuristics. Experiments using PacBio HiFi
sequencing datasets from human and plant genomes show that
our approach achieves accuracy comparable to
state-of-the-art methods.
Implementation: https://github.com/at-cg/HALE