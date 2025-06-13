---
name: We are what we index; a primer for the Wheeler Graph era
speakers:
  - Ben Langmead
categories:
  - Keynote
  - Talk
hide: false
---

Since second-generation sequencing arrived, we have needed to index our reference sequences (e.g. genomes or transcriptomes) in order to solve read alignment and classification problems efficiently. The rule has been: what we can index determines what we can do.

When indexing strings, we can use methods like suffix arrays, the Burrows-Wheeler Transform (BWT) and k-mer indexes. What if we want to index objects more complex than strings? In pangenomics, we usually want to index large, repetitive collections of strings, e.g. many human haplotypes or all the bacteria in Refseq. We may also wish to combine these strings into a multiple alignment or graph first. Can we index those efficiently?

The short answer is “often yes but it depends,” but a longer and more edifying answer comes from studying how the BWT has evolved from a string-indexing method to a more general method for indexing trees and (some) graphs. We will trace the BWT indexing story from the early days of the FM Index, through its step-by-step gobbling up of trees and de Bruijn Graphs, and to the recent formalization of Wheeler Graphs. Along the way, we will define and update our notions of what it means to track a consecutive range of elements in the structure, and what it means for an index to be efficient. This leads to stronger notions of what it means to be indexable, helping us to imagine which structures we should aim to index in the future as genomics and pangenomics evolve.
