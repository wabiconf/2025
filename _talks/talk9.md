---
name: "Approximability of Longest Run Subsequence andComplementary Minimization Problems"
speakers:
  - Yuichi Asahiro
  - Mingyang Gong
  - Jesper Jansson
  - Guohui Lin
  - Sichen Lu
  - Eiji Miyano
  - Hirotaka Ono
  - Toshiki Saitoh
  - Shunichi Tanaka
categories:
  - Proceedings
  - Talk
hide: false
---

We study the polynomial-time approximability of the Longest
Run
Subsequence problem (LRS for short) and its complementary
minimization
variant Minimum Run Subsequence Deletion problem (MRSD for
short).
For a string S = s_1 ... s_n over an alphabet Sigma, a
subsequence S'
of S is a sequence S' = s_{i_1} ... s_{i_p}, such that 1 <=
i_1 < i_2
< ... < i_p <= |S|. A run of a symbol sigma in Sigma in S
is a maximal
substring of consecutive occurrences of sigma. A run
subsequence S' of
S is a sequence in which every symbol \sigma in Sigma
occurs in at
most one run.  The co-subsequence \overline{S'} of the
subsequence S'=
s_{i_1} ... s_{i_p} in S is the subsequence obtained by
deleting all
the characters in S' from S, i.e., \overline{S'} = s_{j_1}
...
s_{j_{n-p}} such that j_1 < j_2 < ... < j_{n-p} and {j_1,
...,
j_{n-p}} = {1, ..., n}\setminus {i_1, ..., i_p}.  Given a
string S,
the goal of LRS (resp., MRSD) is to find a run subsequence
S^* of S
such that the length |S^*| is maximized (resp., the number
|\overline{S^*}| of deleted symbols from S is minimized)
over all the
run subsequences of S.  Let k be the maximum number of
symbol
occurrences in the input S. It is known that LRS and MRSD
are APX-hard
even if k = 2.  In this paper, we show that LRS can be
approximated in
polynomial time within factors of (k+2)/3 for k = 2 or 3,
and 2(k+1)/5
for every k >= 4. Furthermore, we show that MRSD can be
approximated
in polynomial time within a factor of (k+4)/4 if k is even,
and
(k+3)/4 if k is odd.