---
name: Spark: sparsified hierarchical energy minimization of RNA
pseudoknots
speakers:
	- Mateo Gray	- Sebastian Will	- Hosna Jabbaricategories:
	- Proceedings
	- Talk
---

Motivation:
Determining RNA structure is essential for understanding
RNA function and interaction networks. Although
experimental techniques yield high‑accuracy structures,
they are costly and time‑consuming; thus, computational
approaches--especially minimum‑free‑energy (MFE) prediction
algorithms--are indispensable. Accurately predicting
pseudoknots, however, remains challenging because their
inclusion usually leads to prohibitive computational
complexity. Recent work demonstrated that sparsification
can improve the efficiency of complex pseudoknot prediction
algorithms such as Knotty. This finding suggests similar
gains are possible for already efficient algorithms like
HFold, which targets a complementary class of
hierarchically constrained pseudoknots.
Results:
We introduce Spark, an exact, fully sparsified algorithm
for predicting pseudoknotted RNA structures. Like its
non‑sparsified predecessor HFold, Spark searches for the
minimum‑energy structure under the HotKots 2.0 energy
model, a pseudoknot extension of the Turner model. Because
the sparsification is non‑heuristic, Spark preserves the
asymptotic time‑ and space‑complexity guarantees of HFold
while greatly reducing the constant factors. We benchmarked
the performance of Spark against HFold and, as a
pseudoknot‑free baseline, RNAFold. Compared with HFold,
Spark substantially lowers both run time and memory usage,
while achieving run‑time figures close to those of RNAFold.
Across all tested sequence lengths, Spark used the least
memory and consistently ran faster than HFold.
Conclusion:
By extending non‑heuristic sparsification to hierarchical
pseudoknot prediction, Spark delivers an exceptionally fast
and memory‑efficient tool accurate prediction of
pseudoknotted RNA structures, enabling routine analysis of
long sequences. The algorithm broadens the practical scope
of computational RNA biology and provides a solid
foundation for future advances in structure‑based
functional annotation.
Availability:
Spark’s implementation and detailed results are available
at https://github.com/TheCOBRALab/Spark.