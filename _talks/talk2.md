---
name: Recursive Parsing and Grammar Compression in the Era of Pangenomics
speakers:
  - Christina Boucher
categories:
  - Keynote
  - Talk
---

![christina](https://wabiconf.github.io/2025/assets/images/christina.jpeg)

**Abstract**: Recursive Parsing and Grammar Compression in the Era of Pangenomics
In this talk, we present a unifying perspective on Prefix-Free Parsing (PFP), a
foundational technique in modern string processing, and its recursive extension,
Recursive Prefix-Free Parsing (RPFP). Originally introduced to enable scalable
construction of compressed text indexes, PFP has become central to the design of
grammar-based compression schemes and succinct data structures, particularly in the
context of pangenomics. The discussion begins with the core principles of PFP,
including how it deterministically segments strings into non-overlapping phrases using a
rolling hash mechanism and a set of parsing triggers. The talk then explores RPFP,
which applies PFP recursively to the parse itself, enabling deeper compression and
more efficient indexing, especially for large and repetitive genomic collections. We
describe how these parsing strategies support the construction of grammars—such as
those used in RePair-style compression—and how grammars derived from PFP parses
can be stored and processed efficiently. Applications to pangenomics are highlighted,
demonstrating how PFP and RPFP facilitate efficient indexing of variation-rich genomic
datasets across large cohorts. These methods allow for compact storage and fast query
performance, even as the size and complexity of pan-genomic reference collections
continue to grow. The talk concludes with a discussion of ongoing challenges and open
research questions at the intersection of algorithmic string processing, data
compression, and pangenomic data analysis.

**About the speaker**: Dr. Boucher is an Associate Professor in the Department
of Computer and Information Science and Engineering at the University of
Florida. She has over 160 publications in bioinformatics, with over two dozen
of them in succinct data structures and/or alignment. Considering this, she was
a keynote speaker for IABD 2019, FAB 2018, RECOMB-SEQ 2016 and the ECCB 2016
Workshop on Pan-Genomics.  She is a recipient of an ESA 2016 Best Paper Award.
She oversees the development and maintenance of several software methods,
including MEGARes and AMRPlusPlus, METAMarc, Kohdista, Vari, VariMerge — and
most recently, Moni. In addition, she has built a team of collaborators in
various biomedical sciences including microbiology, veterinarian medicine,
epidemiology, public health, and clinical sciences.  In addition, she actively
works on increasing the diversity in bioinformatics education. Her efforts
include being a member of the University of Florida’s Implicit Bias committee,
being a panellist for the NSF-funded ACM BCB 2015 Women in Bioinformatics
meeting, serving as a faculty advisor for an ACM-W chapter, and being an active
member of the Diversity Committee for over three years. She also received a
fellowship from The Institute for Learning and Teaching (TILT) for her course
redevelopment and served on the advisory committee for an NSF Research
Traineeships Program.

She has been the PC chair for several conferences, including SPIRE 2020, RECOMB-
SEQ 2019, and ACM-BCB 2018.  Most recently, she was nominated to serve on the
NIH BDMA Study Section as a Standing Member, and a Board Member of SIG BIO.
