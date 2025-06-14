---
name: Which Phylogenetic Networks are Level-k Networks withAdditional Arcs? Structure and Algorithms
speakers:
  - Takatora Suzuki
  - Momoko Hayamizu
categories:
  - Proceedings
  - Talk
hide: false
---

Reticulate evolution gives rise to complex phylogenetic
networks, making their interpretation challenging. A
typical approach is to extract trees within such networks.
Since Francis and Steel's seminal paper, "Which
Phylogenetic Networks are Merely Trees with Additional
Arcs?" (2015), tree-based phylogenetic networks and their
support trees (spanning trees with the same root and leaf
set as a given network) have been extensively studied.
However, not all phylogenetic networks are tree-based, and
for the study of reticulate evolution, it is often more
biologically relevant to identify support networks rather
than trees. This study generalizes Hayamizu's structure
theorem for rooted binary phylogenetic networks, which
yielded optimal algorithms for various computational
problems on support trees, to extend the theoretical
framework for support trees to support networks. This
allows us to obtain a direct-product characterization of
each of three sets: all, minimal, and minimum support
networks, for a given network. Each characterization yields
optimal algorithms for counting and generating the support
networks of each type. Applications include a linear-time
algorithm for finding a support network with the fewest
reticulations (i.e., the minimum tier). We also provide
exact and heuristic algorithms for finding a support
network with the minimum level, both running in exponential
time but practical across a reasonably wide range of
reticulation numbers.