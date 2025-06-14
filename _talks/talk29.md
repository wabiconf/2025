---
name: Dolphyin: A Combinatorial Algorithm for Identifying
$1$-Dollo Phylogenies in Cancer
speakers:
	- Daniel Feng
	- Mohammed El-Kebir
categories:
	- Proceedings
	- Talk
---

Several recent cancer phylogeny inference methods have used
the $k$-Dollo evolutionary model for single-nucleotide
variants. Specifically, in this problem one is given an $m
\times n$ binary matrix $B$ and seeks a rooted tree $T$
with $m$ leaves that correspond to the $m$ rows of $B$ such
that each node of $T$ is labeled by a binary state for each
of the $n$ characters subject to the restriction that each
character is gained  at most once ($0$-to-$1$ transition)
and subsequently lost at most $k$ times ($1$-to-$0$
transitions). The $1$-Dollo variant, also known as the
persistent perfect phylogeny, where one is restricted to at
most $k=1$ losses per character, has been studied
extensively, but its hardness remains an open question.
Here, we prove that the \textsc{$1$-Dollo Linear Phylogeny}
(1DLP) problem, where we additionally require the resulting
$1$-Dollo phylogeny $T$ to be linear, is equivalent to
verifying whether the input matrix $B$ adheres to the
\textsc{Consecutive Ones Property} (C1P), which can be
solved in polynomial time. Due to the equivalence, several
known NP-hardness results for relevant variants of C1P 
carry over to 1DLP, including the minimization of false
negatives ($0$-to-$1$ modifications to the input matrix
$B$) or the allowance of $2$ gains and $2$ losses. We
furthermore show how we can recursively decompose any, not
necessarily linear, $1$-Dollo phylogeny $T$ into several
$1$-Dollo linear phylogenies, connected by matching
branching points. We extend this characterization to
matrices $B$  that admit $1$-Dollo phylogenies, giving
necessary and sufficient conditions for the existence of a
novel decomposition of $B$ into several submatrices and
corresponding branching points. This decomposition forms
the basis of Dolphyin, a new algorithm for inferring
$1$-Dollo phylogenies that efficiently leverages the
determination of linear $1$-Dollo phylogenies as a
subroutine. Dolphyin can also be applied to input matrices
$B$ with false negatives. We demonstrate that Dolphyin is
runtime-competitive with a previous integer linear
programming based algorithm SPhyR. Finally, we apply
Dolphyin to $99$ acute myeloid leukemia single-cell
sequencing datasets, finding that the majority of the
cancers can be explained by $1$-Dollo phylogenies with
false negative error rates in line with the used sequencing
technology.