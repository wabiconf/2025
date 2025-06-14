---
name: Fast pseudoalignment queries on compressed colored de
Bruijn graphs
speakers:
  - Alessio Campanelli
  - Giulio Ermanno Pibiri
  - Rob Patro
categories:
  - Proceedings
  - Talk
hide: false
---

Motivation. Indexes for the colored de Bruijn graph (c-dBG)
play a crucial role in computational
biology by facilitating complex tasks such as read mapping
and assembly. These indexes map k-mers
(substrings of length k) appearing in a large collection of
reference strings to the set of identifiers
of the strings where they appear. These sets, colloquially
referred to as color sets, tend to occupy
large quantities of memory, especially for large
pangenomes. Our previous work thus focused on
leveraging the repetitiveness of the color sets to improve
the space effectiveness of the resulting
index. As a matter of fact, repetition-aware indexes can be
up to one order of magnitude smaller on
large pangenomes compared to indexes that do not exploit
such repetitiveness. Such improved space
effectiveness, on the other hand, imposes an overhead at
query time when performing tasks such as
pseudoalignment that require the collection and processing
of multiple related color sets.

Methods. In this paper, we show how to avoid this overhead.
We devise novel query algorithms
tailored for the specific repetition-aware representations
adopted by the Fulgor index, a state-of-the-
art c-dBG index, to significantly improve its
pseudoalignment efficiency and without consuming
additional space.

Results. Our results indicate that with increasing
redundancy in the pangenomes, the compression
factor provided by the Fulgor index increases, while the
relative query time actually reduces. For
example, while the space of the Fulgor index improves by
2.5× with repetition-aware compression
and its query time improves by 1.6× on a collection of
5,000 Salmonella Enterica genomes, these
factors become (6.1×, 2.8×) and (11.0×, 3.2×) for 50,000
and 150,000 genomes respectively. We
expect these factors to grow for even larger collections.