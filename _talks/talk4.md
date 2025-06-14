---
name: Linear-space Subquadratic-time String Alignment Algorithmfor Arbitrary Scoring Matrices
speakers:
  - Ryosuke Yamano
  - Tetsuo Shibuya
categories:
  - Proceedings
  - Talk
hide: false
---

Theoretically, the fastest algorithm by Crochemore et al.
for computing the alignment of two given strings of size
n over a constant alphabet takes O(n^2/\log n) time.
The algorithm uses Lempel–Ziv parsing to divide the dynamic
programming matrix into blocks and utilizes the repetitive
structure. It is the only previously known
subquadratic-time algorithm that can handle scoring
matrices of arbitrary weights. However, this algorithm
takes O(n^2/\log n) space, and reducing the space while
preserving the time complexity has been an open problem for
more than 20 years. We present a solution to this issue by
achieving an O(n) space algorithm that maintains
O(n^2/\log n) time. The classical refinement by
Hirschberg reduces the space complexity of the textbook
O(n^2) algorithm to O(n) while preserving the quadratic
time. However, applying this technique to the algorithm of
Crochemore et al.\ has been considered challenging because
their method requires O(n^2 / \log n) space even when
computing only the alignment score.
Our modification enables the application of Hirschberg’s
refinement, allowing traceback computation in O(n) space
while preserving the O(n^2 / \log n) overall time
complexity. Our algorithm can be applied to both global and
local string alignment problems.