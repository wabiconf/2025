---
name: Graph-Based Extension of Partial Atom Maps: Theoretical
Uniqueness and Practical Algorithms
speakers:
	- Marcos E. González Laffitte	- Tieu-Long Phan	- Peter F.
Stadlercategories:
	- Proceedings
	- Talk
---

Chemical reaction databases typically report the molecular
structures of reactant and products as well as their
stoichiometry but lack information on the correspondence of
reactant and product atoms. These atom-to-atom maps (AAM),
however, are crucial for applications including chemical
synthesis planning in organic chemistry and the analysis of
isotope labeling experiment in modern metabolomics. AAMs
therefore need to be reconstructed computationally. This
situtation is aggravated, furthermore,
by the fact that chemically correct AAMs are,
fundamentally, determined by quantum-mechanical phenomena
and thus cannot be reliably computed by solving
graph-theoretical optimization problems defined by the
reactant and product structures. A viable solution for this
problem is to shift the focus into first identifying a
partial AAM containing the reaction center, i.e., covering
the atoms incident
with all bonds that change during a reaction. This then
leads to the problem of extending the partial map to the
full reaction. The AAM of a reaction is faithfully
represented by the Imaginary Transition State (ITS) graph,
providing a convenient graph-theoretic framework to address
the questions of when and how a partial AAM can be
extended. We show that an unique extension exists whenever,
and only if, these partial AAMs cover the reaction center.
In this case their extension can be computed by solving a
constrained graph-isomorphism search between specific
subgraphs of ITS
graphs. We close by benchmarking different tools for this
task.