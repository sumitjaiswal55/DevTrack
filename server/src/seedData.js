const mergedDsaSheet = [
  // ================= 1. TWO POINTERS =================
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Pair with Target Sum (Two Sum II)",
    difficulty: "Easy",
    status: "pending",
    notes: "Sorted array me left aur right pointers use karke target sum calculate karein.",
    pdfUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    status: "pending",
    notes: "Two pointers se in-place array rewrite karein without extra memory.",
    pdfUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Squaring a Sorted Array",
    difficulty: "Easy",
    status: "pending",
    notes: "Both ends se compare karke largest square ko result array ke end me fill karein.",
    pdfUrl: "https://leetcode.com/problems/squares-of-a-sorted-array/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Triplet Sum to Zero (3Sum)",
    difficulty: "Medium",
    status: "pending",
    notes: "Array sort karein, pehla element fix karke baaki do par two pointers chalayein. Duplicates skip karein.",
    pdfUrl: "https://leetcode.com/problems/3sum/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Triplet Sum Close to Target",
    difficulty: "Medium",
    status: "pending",
    notes: "3Sum jaisa approach, min absolute difference track karein.",
    pdfUrl: "https://leetcode.com/problems/3sum-closest/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Triplets with Smaller Sum",
    difficulty: "Medium",
    status: "pending",
    notes: "If sum < target, all elements between left and right form valid triplets.",
    pdfUrl: "https://leetcode.com/problems/3sum-smaller/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Subarrays with Product Less than a Target",
    difficulty: "Medium",
    status: "pending",
    notes: "Sliding two pointers window; add (right - left + 1) to count at each step.",
    pdfUrl: "https://leetcode.com/problems/subarray-product-less-than-k/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Dutch National Flag Problem (Sort Colors)",
    difficulty: "Medium",
    status: "pending",
    notes: "3 pointers (low, mid, high) se 0s, 1s, aur 2s ko single pass me sort karein.",
    pdfUrl: "https://leetcode.com/problems/sort-colors/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "4Sum (Quadruple Sum to Target)",
    difficulty: "Medium",
    status: "pending",
    notes: "Two outer loops fix karke inner part par two pointers chalayein.",
    pdfUrl: "https://leetcode.com/problems/4sum/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Comparing Strings containing Backspaces",
    difficulty: "Medium",
    status: "pending",
    notes: "Reverse traversal karke backspaces count manage karein.",
    pdfUrl: "https://leetcode.com/problems/backspace-string-compare/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Shortest Unsorted Continuous Subarray (Minimum Window Sort)",
    difficulty: "Medium",
    status: "pending",
    notes: "Find first dip from left and first rise from right, then expand to min/max boundaries.",
    pdfUrl: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Container With Most Water",
    difficulty: "Medium",
    status: "pending",
    notes: "Two pointers at edges; move the pointer with shorter height inward.",
    pdfUrl: "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    track: "dsa",
    topic: "Two Pointers",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    status: "pending",
    notes: "LeftMax aur RightMax maintain karke water boundary calculate karein.",
    pdfUrl: "https://leetcode.com/problems/trapping-rain-water/"
  },

  // ================= 2. FAST & SLOW POINTERS =================
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "LinkedList Cycle Detection",
    difficulty: "Easy",
    status: "pending",
    notes: "Floyd's algorithm: slow 1 step, fast 2 steps.",
    pdfUrl: "https://leetcode.com/problems/linked-list-cycle/"
  },
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "Start of LinkedList Cycle (Cycle II)",
    difficulty: "Medium",
    status: "pending",
    notes: "Meeting point milne ke baad head aur meeting point se single-step traversal.",
    pdfUrl: "https://leetcode.com/problems/linked-list-cycle-ii/"
  },
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "Happy Number",
    difficulty: "Easy",
    status: "pending",
    notes: "Sum of squared digits can cycle; use fast and slow pointers to detect loop.",
    pdfUrl: "https://leetcode.com/problems/happy-number/"
  },
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "Middle of the LinkedList",
    difficulty: "Easy",
    status: "pending",
    notes: "Fast 2 step aur slow 1 step move karein.",
    pdfUrl: "https://leetcode.com/problems/middle-of-the-linked-list/"
  },
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "Palindrome LinkedList",
    difficulty: "Medium",
    status: "pending",
    notes: "Middle node dhundhein, second half reverse karein, dono compare karein.",
    pdfUrl: "https://leetcode.com/problems/palindrome-linked-list/"
  },
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "Reorder List (Rearrange LinkedList)",
    difficulty: "Medium",
    status: "pending",
    notes: "Middle break karein, second half reverse karke alternate nodes merge karein.",
    pdfUrl: "https://leetcode.com/problems/reorder-list/"
  },
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "Find the Duplicate Number",
    difficulty: "Medium",
    status: "pending",
    notes: "Array values ko next pointer treat karke cycle detection apply karein.",
    pdfUrl: "https://leetcode.com/problems/find-the-duplicate-number/"
  },
  {
    track: "dsa",
    topic: "Fast & Slow Pointers",
    title: "Circular Array Loop",
    difficulty: "Hard",
    status: "pending",
    notes: "Graph cycle detection on array indices using slow and fast pointers.",
    pdfUrl: "https://leetcode.com/problems/circular-array-loop/"
  },

  // ================= 3. SLIDING WINDOW =================
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Maximum Sum Subarray of Size K",
    difficulty: "Easy",
    status: "pending",
    notes: "Fixed window of size K: add next element and subtract exiting element.",
    pdfUrl: "https://leetcode.com/problems/maximum-average-subarray-i/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Minimum Size Subarray Sum",
    difficulty: "Medium",
    status: "pending",
    notes: "Window expand karein jab tak sum >= target, fir left shrink karein.",
    pdfUrl: "https://leetcode.com/problems/minimum-size-subarray-sum/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    status: "pending",
    notes: "Character frequency map ya set maintain karke left shrink karein.",
    pdfUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Fruit Into Baskets",
    difficulty: "Medium",
    status: "pending",
    notes: "Longest subarray with at most 2 distinct elements.",
    pdfUrl: "https://leetcode.com/problems/fruit-into-baskets/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Longest Repeating Character Replacement",
    difficulty: "Medium",
    status: "pending",
    notes: "Window length - maxFrequency <= k valid condition check karein.",
    pdfUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Max Consecutive Ones III",
    difficulty: "Medium",
    status: "pending",
    notes: "Longest contiguous subarray with at most K zeros flipped.",
    pdfUrl: "https://leetcode.com/problems/max-consecutive-ones-iii/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Permutation in String",
    difficulty: "Medium",
    status: "pending",
    notes: "Fixed length window match frequency array.",
    pdfUrl: "https://leetcode.com/problems/permutation-in-string/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Find All Anagrams in a String",
    difficulty: "Medium",
    status: "pending",
    notes: "Fixed window sliding window anagram match.",
    pdfUrl: "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    status: "pending",
    notes: "Two pointers, character frequency tracking, matched counter.",
    pdfUrl: "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Substring with Concatenation of All Words",
    difficulty: "Hard",
    status: "pending",
    notes: "Fixed window chunks of wordLength; match word frequency map.",
    pdfUrl: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/"
  },
  {
    track: "dsa",
    topic: "Sliding Window",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    status: "pending",
    notes: "Monotonic decreasing deque indices store karta hai.",
    pdfUrl: "https://leetcode.com/problems/sliding-window-maximum/"
  },

  // ================= 4. KADANE'S & PREFIX SUM =================
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Maximum Subarray (Kadane's Algorithm)",
    difficulty: "Easy",
    status: "pending",
    notes: "Current sum track karein; agar current sum negative ho jaye to 0 reset karein.",
    pdfUrl: "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Maximum Product Subarray",
    difficulty: "Medium",
    status: "pending",
    notes: "Max product aur min product dono track karein negative values ke swap ke liye.",
    pdfUrl: "https://leetcode.com/problems/maximum-product-subarray/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Maximum Subarray Sum with One Deletion",
    difficulty: "Medium",
    status: "pending",
    notes: "Two passes: max sum ending at i and max sum starting at i.",
    pdfUrl: "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Maximum Absolute Sum of Any Subarray",
    difficulty: "Medium",
    status: "pending",
    notes: "Max subarray sum aur min subarray sum dono calculate karein.",
    pdfUrl: "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Maximum Sum Circular Subarray",
    difficulty: "Medium",
    status: "pending",
    notes: "Max(standard Kadane, totalSum - minSubarraySum).",
    pdfUrl: "https://leetcode.com/problems/maximum-sum-circular-subarray/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    status: "pending",
    notes: "Prefix sum hash map (running sum - k frequency check).",
    pdfUrl: "https://leetcode.com/problems/subarray-sum-equals-k/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Find Pivot Index",
    difficulty: "Easy",
    status: "pending",
    notes: "Total sum - left sum - current element == left sum.",
    pdfUrl: "https://leetcode.com/problems/find-pivot-index/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Subarray Sums Divisible by K",
    difficulty: "Medium",
    status: "pending",
    notes: "Prefix sum remainder modulo k counting hashmap.",
    pdfUrl: "https://leetcode.com/problems/subarray-sums-divisible-by-k/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Contiguous Array",
    difficulty: "Medium",
    status: "pending",
    notes: "0 ko -1 treat karke prefix sum hash map laga kar max length nikaalein.",
    pdfUrl: "https://leetcode.com/problems/contiguous-array/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Shortest Subarray with Sum at Least K",
    difficulty: "Hard",
    status: "pending",
    notes: "Monotonic increasing deque storing prefix sum indices.",
    pdfUrl: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/"
  },
  {
    track: "dsa",
    topic: "Kadane & Prefix",
    title: "Count of Range Sum",
    difficulty: "Hard",
    status: "pending",
    notes: "Merge sort or Fenwick Tree over prefix sums array.",
    pdfUrl: "https://leetcode.com/problems/count-of-range-sum/"
  },

  // ================= 5. MERGE INTERVALS =================
  {
    track: "dsa",
    topic: "Merge Intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    status: "pending",
    notes: "Start time par sort karein, end overlap ko merge karein.",
    pdfUrl: "https://leetcode.com/problems/merge-intervals/"
  },
  {
    track: "dsa",
    topic: "Merge Intervals",
    title: "Insert Interval",
    difficulty: "Medium",
    status: "pending",
    notes: "Non-overlapping pehle daalein, overlapping merge karein, baaki append karein.",
    pdfUrl: "https://leetcode.com/problems/insert-interval/"
  },
  {
    track: "dsa",
    topic: "Merge Intervals",
    title: "Interval List Intersections",
    difficulty: "Medium",
    status: "pending",
    notes: "Max(start1, start2) aur min(end1, end2) intersection check.",
    pdfUrl: "https://leetcode.com/problems/interval-list-intersections/"
  },
  {
    track: "dsa",
    topic: "Merge Intervals",
    title: "Non-overlapping Intervals",
    difficulty: "Medium",
    status: "pending",
    notes: "End time par sort karein, greedy choice rule apply karein.",
    pdfUrl: "https://leetcode.com/problems/non-overlapping-intervals/"
  },
  {
    track: "dsa",
    topic: "Merge Intervals",
    title: "Meeting Rooms II (Minimum Meeting Rooms)",
    difficulty: "Medium",
    status: "pending",
    notes: "Min-heap for active meeting end times or two pointer chronologically.",
    pdfUrl: "https://leetcode.com/problems/meeting-rooms-ii/"
  },
  {
    track: "dsa",
    topic: "Merge Intervals",
    title: "Employee Free Time",
    difficulty: "Hard",
    status: "pending",
    notes: "Merge all schedules and find gaps between non-overlapping intervals.",
    pdfUrl: "https://leetcode.com/problems/employee-free-time/"
  },

  // ================= 6. IN-PLACE LINKEDLIST REVERSAL =================
  {
    track: "dsa",
    topic: "Linked List Reversal",
    title: "Reverse a Linked List",
    difficulty: "Easy",
    status: "pending",
    notes: "Prev, curr, next pointers swap iteration.",
    pdfUrl: "https://leetcode.com/problems/reverse-linked-list/"
  },
  {
    track: "dsa",
    topic: "Linked List Reversal",
    title: "Reverse Linked List II (Sublist)",
    difficulty: "Medium",
    status: "pending",
    notes: "Left aur right index ke beech ke nodes ko in-place reverse karein.",
    pdfUrl: "https://leetcode.com/problems/reverse-linked-list-ii/"
  },
  {
    track: "dsa",
    topic: "Linked List Reversal",
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    status: "pending",
    notes: "Iterative pointer updates swapping pairs.",
    pdfUrl: "https://leetcode.com/problems/swap-nodes-in-pairs/"
  },
  {
    track: "dsa",
    topic: "Linked List Reversal",
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    status: "pending",
    notes: "Count k nodes, recursively/iteratively group reverse karein.",
    pdfUrl: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
  },
  {
    track: "dsa",
    topic: "Linked List Reversal",
    title: "Reverse Nodes in Even Length Groups",
    difficulty: "Hard",
    status: "pending",
    notes: "Count length of each group; reverse only if length is even.",
    pdfUrl: "https://leetcode.com/problems/reverse-nodes-in-even-length-groups/"
  },
  {
    track: "dsa",
    topic: "Linked List Reversal",
    title: "Rotate List",
    difficulty: "Medium",
    status: "pending",
    notes: "Ring bana kar (length - k % length) position se break karein.",
    pdfUrl: "https://leetcode.com/problems/rotate-list/"
  },

  // ================= 7. STACKS & MONOTONIC STACK =================
  {
    track: "dsa",
    topic: "Stack",
    title: "Remove All Adjacent Duplicates in String",
    difficulty: "Easy",
    status: "pending",
    notes: "Stack top matches incoming char: pop, else push.",
    pdfUrl: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Valid Parentheses",
    difficulty: "Easy",
    status: "pending",
    notes: "Matching opening brackets ko stack me push aur closing par pop karein.",
    pdfUrl: "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Next Greater Element I",
    difficulty: "Easy",
    status: "pending",
    notes: "Monotonic stack + hashmap lookup.",
    pdfUrl: "https://leetcode.com/problems/next-greater-element-i/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Next Greater Element II (Circular Array)",
    difficulty: "Medium",
    status: "pending",
    notes: "Iterate 2*N times using modulo arithmetic with monotonic stack.",
    pdfUrl: "https://leetcode.com/problems/next-greater-element-ii/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Daily Temperatures",
    difficulty: "Medium",
    status: "pending",
    notes: "Monotonic decreasing stack storing indices.",
    pdfUrl: "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Remove Nodes From Linked List",
    difficulty: "Medium",
    status: "pending",
    notes: "Monotonic decreasing stack or reverse linked list filter.",
    pdfUrl: "https://leetcode.com/problems/remove-nodes-from-linked-list/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Simplify Path",
    difficulty: "Medium",
    status: "pending",
    notes: "Directory tokens split karein, '..' aane par stack pop karein.",
    pdfUrl: "https://leetcode.com/problems/simplify-path/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Remove K Digits",
    difficulty: "Medium",
    status: "pending",
    notes: "Monotonic increasing stack; larger previous digits pehle pop karein.",
    pdfUrl: "https://leetcode.com/problems/remove-k-digits/"
  },
  {
    track: "dsa",
    topic: "Stack",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    status: "pending",
    notes: "Monotonic increasing stack of indices to find previous and next smaller bounds.",
    pdfUrl: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },

  // ================= 8. HASH MAPS & STRINGS =================
  {
    track: "dsa",
    topic: "Hash Maps",
    title: "First Unique Character in a String",
    difficulty: "Easy",
    status: "pending",
    notes: "Character frequency map + single pass index identification.",
    pdfUrl: "https://leetcode.com/problems/first-unique-character-in-a-string/"
  },
  {
    track: "dsa",
    topic: "Hash Maps",
    title: "Maximum Number of Balloons",
    difficulty: "Easy",
    status: "pending",
    notes: "Char frequency count normalized by 'balloon' occurrences.",
    pdfUrl: "https://leetcode.com/problems/maximum-number-of-balloons/"
  },
  {
    track: "dsa",
    topic: "Hash Maps",
    title: "Longest Palindrome",
    difficulty: "Easy",
    status: "pending",
    notes: "Pair even frequencies; at most one odd center element allowed.",
    pdfUrl: "https://leetcode.com/problems/longest-palindrome/"
  },
  {
    track: "dsa",
    topic: "Hash Maps",
    title: "Ransom Note",
    difficulty: "Easy",
    status: "pending",
    notes: "Magazine char count array decrement check.",
    pdfUrl: "https://leetcode.com/problems/ransom-note/"
  },
  {
    track: "dsa",
    topic: "Hash Maps",
    title: "Group Anagrams",
    difficulty: "Medium",
    status: "pending",
    notes: "Sorted string or character frequency tuple as hash map key.",
    pdfUrl: "https://leetcode.com/problems/group-anagrams/"
  },
  {
    track: "dsa",
    topic: "Hash Maps",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    status: "pending",
    notes: "HashSet lookup. Only start counting sequence if (num - 1) doesn't exist.",
    pdfUrl: "https://leetcode.com/problems/longest-consecutive-sequence/"
  },

  // ================= 9. BINARY SEARCH =================
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Binary Search",
    difficulty: "Easy",
    status: "pending",
    notes: "Mid calculate karein: low + (high - low) / 2.",
    pdfUrl: "https://leetcode.com/problems/binary-search/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Search Insert Position",
    difficulty: "Easy",
    status: "pending",
    notes: "Lower bound implementation: first index with val >= target.",
    pdfUrl: "https://leetcode.com/problems/search-insert-position/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    status: "pending",
    notes: "Two separate binary searches to find lower and upper bounds.",
    pdfUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Peak Index in a Mountain Array",
    difficulty: "Medium",
    status: "pending",
    notes: "Compare mid with mid + 1 to find ascent vs descent.",
    pdfUrl: "https://leetcode.com/problems/peak-index-in-a-mountain-array/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Find Peak Element",
    difficulty: "Medium",
    status: "pending",
    notes: "Binary search on unsorted array by following gradient of mid.",
    pdfUrl: "https://leetcode.com/problems/find-peak-element/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    status: "pending",
    notes: "Mid element ko high se compare karein.",
    pdfUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    status: "pending",
    notes: "Identify sorted half (left or right) and verify target bounds.",
    pdfUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Koko Eating Bananas",
    difficulty: "Medium",
    status: "pending",
    notes: "Binary search on answer space (1 to max pile).",
    pdfUrl: "https://leetcode.com/problems/koko-eating-bananas/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Minimum Number of Days to Make m Bouquets",
    difficulty: "Medium",
    status: "pending",
    notes: "Binary search on days array; monotonic feasibility check.",
    pdfUrl: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Aggressive Cows",
    difficulty: "Medium",
    status: "pending",
    notes: "Binary search on distance: can we place cows with min distance D?",
    pdfUrl: "https://leetcode.com/problems/magnetic-force-between-two-balls/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Capacity To Ship Packages Within D Days",
    difficulty: "Medium",
    status: "pending",
    notes: "Min capacity max(weights) aur max capacity sum(weights) par BS.",
    pdfUrl: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Split Array Largest Sum (Book Allocation)",
    difficulty: "Hard",
    status: "pending",
    notes: "Binary search on max sum value; count required subarrays.",
    pdfUrl: "https://leetcode.com/problems/split-array-largest-sum/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    status: "pending",
    notes: "Matrix ko 1D sorted array treat karein: row = mid / cols, col = mid % cols.",
    pdfUrl: "https://leetcode.com/problems/search-a-2d-matrix/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Search a 2D Matrix II",
    difficulty: "Medium",
    status: "pending",
    notes: "Start from top-right or bottom-left corner; eliminate row/col.",
    pdfUrl: "https://leetcode.com/problems/search-a-2d-matrix-ii/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Kth Smallest Element in a Sorted Matrix",
    difficulty: "Medium",
    status: "pending",
    notes: "Binary search on values or min-heap row traversal.",
    pdfUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"
  },
  {
    track: "dsa",
    topic: "Binary Search",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    status: "pending",
    notes: "Shorter array par partition cut ka binary search.",
    pdfUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },

  // ================= 10. HEAPS & PRIORITY QUEUES =================
  {
    track: "dsa",
    topic: "Heap",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    status: "pending",
    notes: "Min-Heap of size K maintain karein.",
    pdfUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    status: "pending",
    notes: "Frequency count hashmap + Min-Heap ya Bucket Sort.",
    pdfUrl: "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Top K Frequent Words",
    difficulty: "Medium",
    status: "pending",
    notes: "Heap with custom comparator for count and alphabetical order.",
    pdfUrl: "https://leetcode.com/problems/top-k-frequent-words/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "K Closest Points to Origin",
    difficulty: "Medium",
    status: "pending",
    notes: "Max-Heap of size K based on Euclidean distance.",
    pdfUrl: "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Find K Closest Elements",
    difficulty: "Medium",
    status: "pending",
    notes: "Binary search window on sorted array or max-heap of diffs.",
    pdfUrl: "https://leetcode.com/problems/find-k-closest-elements/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "The K Weakest Rows in a Matrix",
    difficulty: "Easy",
    status: "pending",
    notes: "Binary search 1s count + min heap with tie-breaker indices.",
    pdfUrl: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Last Stone Weight",
    difficulty: "Easy",
    status: "pending",
    notes: "Max-heap simulation smashing top 2 stones.",
    pdfUrl: "https://leetcode.com/problems/last-stone-weight/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Task Scheduler",
    difficulty: "Medium",
    status: "pending",
    notes: "Max frequency tracking + idle slot calculation.",
    pdfUrl: "https://leetcode.com/problems/task-scheduler/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Reorganize String",
    difficulty: "Medium",
    status: "pending",
    notes: "Greedy max-heap pop most frequent, place alternate chars.",
    pdfUrl: "https://leetcode.com/problems/reorganize-string/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Minimum Number of Refueling Stops",
    difficulty: "Hard",
    status: "pending",
    notes: "Max-heap of fuel stations passed; greedily refuel when stranded.",
    pdfUrl: "https://leetcode.com/problems/minimum-number-of-refueling-stops/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    status: "pending",
    notes: "Two Heaps (Max-Heap for lower half, Min-Heap for upper half).",
    pdfUrl: "https://leetcode.com/problems/find-median-from-data-stream/"
  },
  {
    track: "dsa",
    topic: "Heap",
    title: "Sliding Window Median",
    difficulty: "Hard",
    status: "pending",
    notes: "Two heaps or multiset with lazy deletion for exiting window numbers.",
    pdfUrl: "https://leetcode.com/problems/sliding-window-median/"
  },

  // ================= 11. RECURSION & BACKTRACKING =================
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Subsets & Subsets II",
    difficulty: "Medium",
    status: "pending",
    notes: "Pick/Not-pick choice recursion; duplicate skips ke liye sort karein.",
    pdfUrl: "https://leetcode.com/problems/subsets/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Permutations",
    difficulty: "Medium",
    status: "pending",
    notes: "Array swap back-tracking ya boolean visited array.",
    pdfUrl: "https://leetcode.com/problems/permutations/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Combination Sum",
    difficulty: "Medium",
    status: "pending",
    notes: "Same element reuse allowed; pick / do not pick with target deduction.",
    pdfUrl: "https://leetcode.com/problems/combination-sum/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Combination Sum II",
    difficulty: "Medium",
    status: "pending",
    notes: "Sort array, skip duplicate siblings in recursion loop.",
    pdfUrl: "https://leetcode.com/problems/combination-sum-ii/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Generate Parentheses",
    difficulty: "Medium",
    status: "pending",
    notes: "Open < n aur close < open valid string formation.",
    pdfUrl: "https://leetcode.com/problems/generate-parentheses/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    status: "pending",
    notes: "Digit map recursion generating all Cartesian combinations.",
    pdfUrl: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Palindrome Partitioning",
    difficulty: "Medium",
    status: "pending",
    notes: "Check if substring is palindrome, partition karke remaining par recurse karein.",
    pdfUrl: "https://leetcode.com/problems/palindrome-partitioning/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "Word Search",
    difficulty: "Medium",
    status: "pending",
    notes: "Grid DFS with in-place backtracking character restore.",
    pdfUrl: "https://leetcode.com/problems/word-search/"
  },
  {
    track: "dsa",
    topic: "Backtracking",
    title: "N-Queens",
    difficulty: "Hard",
    status: "pending",
    notes: "Bitmask or columns/diagonals hash sets for validity checks.",
    pdfUrl: "https://leetcode.com/problems/n-queens/"
  },

  // ================= 12. TREES & BINARY SEARCH TREES =================
  {
    track: "dsa",
    topic: "Trees",
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    status: "pending",
    notes: "Left, Root, Right. Recursive and iterative with stack.",
    pdfUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    status: "pending",
    notes: "Queue-based BFS level by level.",
    pdfUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Binary Tree Zigzag Level Order Traversal",
    difficulty: "Medium",
    status: "pending",
    notes: "Level BFS with alternating direction reverse flag.",
    pdfUrl: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    status: "pending",
    notes: "Left aur right children swap recursively.",
    pdfUrl: "https://leetcode.com/problems/invert-binary-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Symmetric Tree",
    difficulty: "Easy",
    status: "pending",
    notes: "Mirror reflection check: t1.left == t2.right and t1.right == t2.left.",
    pdfUrl: "https://leetcode.com/problems/symmetric-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Same Tree",
    difficulty: "Easy",
    status: "pending",
    notes: "Check value and subtrees recursively.",
    pdfUrl: "https://leetcode.com/problems/same-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Subtree of Another Tree",
    difficulty: "Easy",
    status: "pending",
    notes: "Traverse tree and compare SameTree at every node.",
    pdfUrl: "https://leetcode.com/problems/subtree-of-another-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Diameter of Binary Tree",
    difficulty: "Easy",
    status: "pending",
    notes: "Bottom-up height calculation se max(leftHeight + rightHeight) update karein.",
    pdfUrl: "https://leetcode.com/problems/diameter-of-binary-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    status: "pending",
    notes: "Height diff <= 1 at every node.",
    pdfUrl: "https://leetcode.com/problems/balanced-binary-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    status: "pending",
    notes: "Bottom-up search: left aur right dono non-null return karein to current node LCA hai.",
    pdfUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Lowest Common Ancestor of a BST",
    difficulty: "Medium",
    status: "pending",
    notes: "Use BST order: split point where p and q diverge is LCA.",
    pdfUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    status: "pending",
    notes: "Min aur Max valid range carry karein recursion me.",
    pdfUrl: "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    status: "pending",
    notes: "In-order traversal BST ko sorted sequence deta hai.",
    pdfUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    status: "pending",
    notes: "Preorder gives root; inorder splits left and right subtrees.",
    pdfUrl: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Path Sum & Path Sum II",
    difficulty: "Medium",
    status: "pending",
    notes: "Backtracking DFS tracking targetSum reduction and paths.",
    pdfUrl: "https://leetcode.com/problems/path-sum-ii/"
  },
  {
    track: "dsa",
    topic: "Trees",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    status: "pending",
    notes: "Node value + max(0, left) + max(0, right) global max update karta hai.",
    pdfUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
  },

  // ================= 13. GRAPHS =================
  {
    track: "dsa",
    topic: "Graphs",
    title: "Number of Islands",
    difficulty: "Medium",
    status: "pending",
    notes: "Grid BFS/DFS matrix traversal.",
    pdfUrl: "https://leetcode.com/problems/number-of-islands/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Max Area of Island",
    difficulty: "Medium",
    status: "pending",
    notes: "DFS sum component sizes in grid.",
    pdfUrl: "https://leetcode.com/problems/max-area-of-island/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Rotting Oranges",
    difficulty: "Medium",
    status: "pending",
    notes: "Multi-source BFS using queue to spread rot minute by minute.",
    pdfUrl: "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Surrounded Regions",
    difficulty: "Medium",
    status: "pending",
    notes: "Boundary connected 'O' se BFS/DFS karke bache huye internal 'O' flip karein.",
    pdfUrl: "https://leetcode.com/problems/surrounded-regions/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Course Schedule (Topological Sort)",
    difficulty: "Medium",
    status: "pending",
    notes: "Cycle detection using Kahn's algorithm (indegree array).",
    pdfUrl: "https://leetcode.com/problems/course-schedule/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Course Schedule II (Order Resolution)",
    difficulty: "Medium",
    status: "pending",
    notes: "Return valid topological sort order array.",
    pdfUrl: "https://leetcode.com/problems/course-schedule-ii/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Is Graph Bipartite?",
    difficulty: "Medium",
    status: "pending",
    notes: "Two-coloring algorithm with BFS or DFS.",
    pdfUrl: "https://leetcode.com/problems/is-graph-bipartite/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Number of Provinces",
    difficulty: "Medium",
    status: "pending",
    notes: "Connected components count using Disjoint Set Union (DSU) or BFS.",
    pdfUrl: "https://leetcode.com/problems/number-of-provinces/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Network Delay Time (Dijkstra)",
    difficulty: "Medium",
    status: "pending",
    notes: "Min-Heap priority queue based single-source shortest path.",
    pdfUrl: "https://leetcode.com/problems/network-delay-time/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Path With Minimum Effort",
    difficulty: "Medium",
    status: "pending",
    notes: "Dijkstra on 2D grid minimizing maximum absolute height diff.",
    pdfUrl: "https://leetcode.com/problems/path-with-minimum-effort/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Cheapest Flights Within K Stops",
    difficulty: "Medium",
    status: "pending",
    notes: "Bellman-Ford / Modified BFS with at most K level relaxations.",
    pdfUrl: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
  },
  {
    track: "dsa",
    topic: "Graphs",
    title: "Word Ladder",
    difficulty: "Hard",
    status: "pending",
    notes: "Shortest transformation path via level-order BFS.",
    pdfUrl: "https://leetcode.com/problems/word-ladder/"
  },

  // ================= 14. DYNAMIC PROGRAMMING =================
  {
    track: "dsa",
    topic: "DP",
    title: "Climbing Stairs",
    difficulty: "Easy",
    status: "pending",
    notes: "Fibonacci pattern: dp[i] = dp[i-1] + dp[i-2].",
    pdfUrl: "https://leetcode.com/problems/climbing-stairs/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "House Robber",
    difficulty: "Medium",
    status: "pending",
    notes: "Pick vs non-pick adjacent check.",
    pdfUrl: "https://leetcode.com/problems/house-robber/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "House Robber II (Circular Houses)",
    difficulty: "Medium",
    status: "pending",
    notes: "Run House Robber twice: once [0..n-2] and once [1..n-1].",
    pdfUrl: "https://leetcode.com/problems/house-robber-ii/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Coin Change (Min Coins)",
    difficulty: "Medium",
    status: "pending",
    notes: "Unbounded knapsack: min coins to reach target amount.",
    pdfUrl: "https://leetcode.com/problems/coin-change/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Coin Change II (Total Ways)",
    difficulty: "Medium",
    status: "pending",
    notes: "Unbounded knapsack combination count.",
    pdfUrl: "https://leetcode.com/problems/coin-change-ii/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Partition Equal Subset Sum (0/1 Knapsack)",
    difficulty: "Medium",
    status: "pending",
    notes: "Can we find subset sum equal to totalSum / 2?",
    pdfUrl: "https://leetcode.com/problems/partition-equal-subset-sum/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Target Sum",
    difficulty: "Medium",
    status: "pending",
    notes: "Subset sum partition problem me convert karein.",
    pdfUrl: "https://leetcode.com/problems/target-sum/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Longest Increasing Subsequence (LIS)",
    difficulty: "Medium",
    status: "pending",
    notes: "O(N^2) DP ya O(N log N) patience sort binary search.",
    pdfUrl: "https://leetcode.com/problems/longest-increasing-subsequence/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Longest Common Subsequence (LCS)",
    difficulty: "Medium",
    status: "pending",
    notes: "2D table comparison. Match hone par 1 + dp[i-1][j-1], warna max(left, top).",
    pdfUrl: "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Edit Distance",
    difficulty: "Hard",
    status: "pending",
    notes: "2D grid DP: Insert, Delete, and Replace operations.",
    pdfUrl: "https://leetcode.com/problems/edit-distance/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    status: "pending",
    notes: "Running minimum price track karein aur daily max profit update karein.",
    pdfUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Best Time to Buy and Sell Stock with Cooldown",
    difficulty: "Medium",
    status: "pending",
    notes: "State machine DP: Buy, Sell, and Rest states.",
    pdfUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
  },
  {
    track: "dsa",
    topic: "DP",
    title: "Unique Paths",
    difficulty: "Medium",
    status: "pending",
    notes: "Grid DP: dp[r][c] = dp[r-1][c] + dp[r][c-1].",
    pdfUrl: "https://leetcode.com/problems/unique-paths/"
  },

  // ================= 15. GREEDY =================
  {
    track: "dsa",
    topic: "Greedy",
    title: "Jump Game",
    difficulty: "Medium",
    status: "pending",
    notes: "Max reachable index maintain karein.",
    pdfUrl: "https://leetcode.com/problems/jump-game/"
  },
  {
    track: "dsa",
    topic: "Greedy",
    title: "Jump Game II",
    difficulty: "Medium",
    status: "pending",
    notes: "BFS-style window jumps tracking furthest reachable point.",
    pdfUrl: "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    track: "dsa",
    topic: "Greedy",
    title: "Assign Cookies",
    difficulty: "Easy",
    status: "pending",
    notes: "Greedy sorting on cookies and child greed factor.",
    pdfUrl: "https://leetcode.com/problems/assign-cookies/"
  },
  {
    track: "dsa",
    topic: "Greedy",
    title: "Gas Station (Minimum Refueling)",
    difficulty: "Medium",
    status: "pending",
    notes: "Total gas >= total cost check. Running balance negative hone par start node update karein.",
    pdfUrl: "https://leetcode.com/problems/gas-station/"
  },
  {
    track: "dsa",
    topic: "Greedy",
    title: "Candy",
    difficulty: "Hard",
    status: "pending",
    notes: "Left-to-right pass followed by right-to-left pass maintaining slope constraints.",
    pdfUrl: "https://leetcode.com/problems/candy/"
  }
];

module.exports = mergedDsaSheet;

const backendDevSheet = [
  // ================= 1. NODE.JS & RUNTIME INTERNALS =================
  {
    track: "dev",
    topic: "Node.js Internals",
    title: "Event Loop Architecture: Phases & Macro vs Microtasks",
    difficulty: "Medium",
    status: "pending",
    notes: "Phases order: Timers -> Pending I/O -> Idle/Prepare -> Poll -> Check (setImmediate) -> Close. process.nextTick priority over Promises queue.",
    pdfUrl: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"
  },
  {
    track: "dev",
    topic: "Node.js Internals",
    title: "V8 Engine Internals: Memory Leaks, Scavenge & Mark-Sweep GC",
    difficulty: "Hard",
    status: "pending",
    notes: "Young Generation (Nursery & Intermediate using Scavenge) vs Old Generation (Mark-Sweep-Compact). Causes of memory leaks: global variables, detached DOM, uncleared intervals/event listeners.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Node.js Internals",
    title: "Streams, Buffers & Backpressure Handling",
    difficulty: "Hard",
    status: "pending",
    notes: "Readable, Writable, Duplex, Transform streams. Backpressure occurs when writable stream buffer is full (returns false on write); pause readable and listen to 'drain' event.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Node.js Internals",
    title: "Worker Threads vs Cluster Module vs Child Processes",
    difficulty: "Medium",
    status: "pending",
    notes: "Child process forks new OS processes with separate memory. Worker threads share memory using SharedArrayBuffer for CPU-heavy tasks. Cluster module uses round-robin over worker processes sharing the same port.",
    pdfUrl: null
  },

  // ================= 2. DATABASE INTERNALS & SCALING =================
  {
    track: "dev",
    topic: "Databases & SQL",
    title: "B-Tree vs B+ Tree Index Internals & Sequential Scan Avoidance",
    difficulty: "Hard",
    status: "pending",
    notes: "B+ trees store data pointers only at leaf nodes with linked list pointers for fast range queries. EXPLAIN ANALYZE checks index scan vs seq scan. Cardinality and composite index column order (leftmost prefix rule).",
    pdfUrl: "https://use-the-index-luke.com/"
  },
  {
    track: "dev",
    topic: "Databases & SQL",
    title: "ACID Properties & Transaction Isolation Levels",
    difficulty: "Medium",
    status: "pending",
    notes: "Read Uncommitted (Dirty Read), Read Committed (Non-repeatable read), Repeatable Read (Phantom read), Serializable. Two-Phase Locking (2PL) and Multi-Version Concurrency Control (MVCC).",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Databases & SQL",
    title: "Connection Pooling & Connection Starvation Prevention",
    difficulty: "Medium",
    status: "pending",
    notes: "Creating TCP connections is expensive. Connection pool maintains active connections. Starvation happens when queries block without release or pool size is too small for concurrent requests.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Databases & NoSQL",
    title: "MongoDB Schema Design: Embedding vs Referencing & Indexing",
    difficulty: "Medium",
    status: "pending",
    notes: "Embed for 1-to-few and atomic reads. Reference for 1-to-many / 1-to-squillions. Compound indexes and covering queries (indexes containing all requested fields to avoid fetching document).",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Databases & Scaling",
    title: "Database Sharding, Replication & Read-Write Splitting",
    difficulty: "Hard",
    status: "pending",
    notes: "Primary-Replica replication for scaling read traffic. Range-based vs Hash-based sharding for horizontal writes. Replication lag issues and eventual consistency.",
    pdfUrl: null
  },

  // ================= 3. REDIS & CACHING PATTERNS =================
  {
    track: "dev",
    topic: "Redis & Caching",
    title: "Caching Strategies: Cache-Aside, Write-Through & Write-Behind",
    difficulty: "Medium",
    status: "pending",
    notes: "Cache-Aside: App checks cache, if miss fetches from DB and populates cache. Write-Through: App writes to cache, cache writes to DB synchronously. Write-Behind: Asynchronous DB batch write.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Redis & Caching",
    title: "Cache Stampede, Cache Penetration & Cache Avalanche Prevention",
    difficulty: "Hard",
    status: "pending",
    notes: "Stampede/Breakdown: Use mutex locks on cache miss. Penetration: Store empty/null values or use Bloom Filters. Avalanche: Add random jitter to TTLs to prevent simultaneous expiry.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Redis & Caching",
    title: "Sliding Window Rate Limiter using Redis Sorted Sets (ZSET)",
    difficulty: "Hard",
    status: "pending",
    notes: "Use current timestamp as score in ZSET. Remove elements older than (now - window). Add current request and check cardinality against threshold in a single Redis transaction (MULTI/EXEC).",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Redis & Caching",
    title: "Distributed Locking using Redis (Redlock Algorithm)",
    difficulty: "Hard",
    status: "pending",
    notes: "SET resource_name my_random_value NX PX 30000. Release lock only if stored value equals random value via Lua script to avoid releasing someone else's lock.",
    pdfUrl: null
  },

  // ================= 4. AUTHENTICATION & PRODUCTION SECURITY =================
  {
    track: "dev",
    topic: "Auth & Security",
    title: "JWT Access + Refresh Token Rotation Strategy",
    difficulty: "Medium",
    status: "pending",
    notes: "Access Token (short TTL e.g. 15m) in memory or authorization header. Refresh Token (long TTL e.g. 7d) in HTTP-only, SameSite=Strict secure cookie with rotation on every refresh request to prevent replay attacks.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Auth & Security",
    title: "Password Hashing: Bcrypt, Argon2 & Salt Internals",
    difficulty: "Easy",
    status: "pending",
    notes: "Bcrypt uses adaptive work factor (cost) to slow down brute force attacks. Salt ensures identical passwords produce completely different hash strings, defending against Rainbow Tables.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Auth & Security",
    title: "OWASP Top 10 Defense: SQL Injection, XSS, CSRF & SSRF",
    difficulty: "Medium",
    status: "pending",
    notes: "SQLi: Use parameterized queries/ORMs. XSS: Escape output, Content Security Policy (CSP). CSRF: Anti-CSRF tokens, SameSite cookies. SSRF: Whitelist allowed outgoing URL domains and block internal IPs (127.0.0.1, 169.254.169.254).",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Auth & Security",
    title: "CORS (Cross-Origin Resource Sharing) & Preflight (OPTIONS) Requests",
    difficulty: "Easy",
    status: "pending",
    notes: "Browser security mechanism. Preflight OPTIONS sent when request has custom headers or methods other than GET/POST/HEAD. Server sets Access-Control-Allow-Origin, Headers, and Credentials.",
    pdfUrl: null
  },

  // ================= 5. REAL-TIME, PROTOCOLS & MESSAGING =================
  {
    track: "dev",
    topic: "Real-time & Protocols",
    title: "WebSockets vs Server-Sent Events (SSE) vs Long Polling",
    difficulty: "Medium",
    status: "pending",
    notes: "WebSockets: Full-duplex bidirectional TCP connection over single socket. SSE: One-way server-to-client streaming over HTTP. Long polling: Client repeatedly requests server which hangs until data arrives.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Real-time & Protocols",
    title: "Message Brokers: Kafka vs RabbitMQ (Pub/Sub vs Queue)",
    difficulty: "Hard",
    status: "pending",
    notes: "RabbitMQ: Smart broker, dumb consumer (message deleted once acknowledged, ideal for background job queues). Kafka: Dumb broker, smart consumer (append-only distributed commit log, high throughput, retention based).",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "Real-time & Protocols",
    title: "REST vs GraphQL vs gRPC: Trade-offs & Serialization",
    difficulty: "Medium",
    status: "pending",
    notes: "REST uses HTTP standard verbs and JSON. GraphQL prevents over-fetching and under-fetching at cost of caching complexity. gRPC uses HTTP/2 and binary Protocol Buffers for fast microservice communication.",
    pdfUrl: null
  },

  // ================= 6. DEVOPS & DEPLOYMENT FUNDAMENTALS =================
  {
    track: "dev",
    topic: "DevOps & Production",
    title: "Docker Multi-stage Builds for Node.js Applications",
    difficulty: "Medium",
    status: "pending",
    notes: "Stage 1 (Build): Install devDependencies and compile TypeScript. Stage 2 (Production): Alpine base, copy only dist and production dependencies to keep Docker image size under 150MB.",
    pdfUrl: null
  },
  {
    track: "dev",
    topic: "DevOps & Production",
    title: "Zero-Downtime Deployments & Graceful Shutdown in Node.js",
    difficulty: "Medium",
    status: "pending",
    notes: "Listen to SIGTERM / SIGINT events. Stop accepting new requests (server.close()), complete pending DB queries, close connection pools, and exit with code 0.",
    pdfUrl: null
  }
];


const systemDesignSheet = [
  // ================= 1. SYSTEM DESIGN CORE FOUNDATIONS =================
  {
    track: "systemDesign",
    topic: "Foundations",
    title: "Vertical vs Horizontal Scaling & Load Balancing Algorithms",
    difficulty: "Easy",
    status: "pending",
    notes: "Round Robin, Weighted Round Robin, Least Connections, IP Hash. L4 (Transport/TCP) vs L7 (Application/HTTP) load balancing.",
    pdfUrl: "https://www.nginx.com/resources/glossary/load-balancing/"
  },
  {
    track: "systemDesign",
    topic: "Foundations",
    title: "Consistent Hashing & Virtual Nodes",
    difficulty: "Medium",
    status: "pending",
    notes: "Hash ring mechanics to prevent k/n key reallocation during node additions/removals. Virtual nodes prevent hot spotting and skew.",
    pdfUrl: "https://www.toptal.com/big-data/consistent-hashing"
  },
  {
    track: "systemDesign",
    topic: "Foundations",
    title: "CAP Theorem & PACELC Theorem",
    difficulty: "Medium",
    status: "pending",
    notes: "CAP: Consistency, Availability, Partition Tolerance. PACELC: If Partition (P) choose Availability (A) or Consistency (C); Else (E) choose Latency (L) or Consistency (C).",
    pdfUrl: "https://en.wikipedia.org/wiki/PACELC_theorem"
  },
  {
    track: "systemDesign",
    topic: "Foundations",
    title: "Database Isolation, Read Replicas & Sharding Strategies",
    difficulty: "Hard",
    status: "pending",
    notes: "Range-based, Hash-based, Directory-based sharding. Handling re-sharding, cross-shard joins, and distributed transactions.",
    pdfUrl: "https://aws.amazon.com/blogs/database/sharding-with-amazon-relational-database-service/"
  },

  // ================= 2. 20+ REAL-WORLD CASE STUDIES (HLD & LLD) =================
  {
    track: "systemDesign",
    topic: "Case Study 01",
    title: "Design URL Shortener (TinyURL / Bitly)",
    difficulty: "Medium",
    status: "pending",
    notes: "Base62 encoding over 64-bit auto-increment ID or MD5 hash prefix. Pre-generated token service (Key Generation Service - KGS). Cache hot URLs in Redis with LRU.",
    pdfUrl: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md"
  },
  {
    track: "systemDesign",
    topic: "Case Study 02",
    title: "Design Rate Limiter (API Gateway Level)",
    difficulty: "Medium",
    status: "pending",
    notes: "Algorithms: Token Bucket, Leaky Bucket, Fixed Window Counter, Sliding Window Log, Sliding Window Counter. Redis Lua scripts for race condition elimination.",
    pdfUrl: "https://stripe.com/blog/rate-limiters"
  },
  {
    track: "systemDesign",
    topic: "Case Study 03",
    title: "Design Notification System (Push, SMS, Email)",
    difficulty: "Medium",
    status: "pending",
    notes: "Priority queues using RabbitMQ/Kafka, rate limiting per user, idempotency keys to prevent duplicate alerts, 3rd party fallbacks (Twilio, SendGrid, FCM).",
    pdfUrl: "https://blog.bytebytego.com/p/design-a-notification-system"
  },
  {
    track: "systemDesign",
    topic: "Case Study 04",
    title: "Design Instagram / Twitter News Feed",
    difficulty: "Hard",
    status: "pending",
    notes: "Fan-out-on-write (push) for regular users vs Fan-out-on-read (pull) for celebrities/hot accounts. Feed generation workers, Redis timeline lists.",
    pdfUrl: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md"
  },
  {
    track: "systemDesign",
    topic: "Case Study 05",
    title: "Design WhatsApp / Messenger (1-on-1 & Group Chat)",
    difficulty: "Hard",
    status: "pending",
    notes: "WebSockets / XMPP for persistent connection. Heartbeats, message status transitions (Sent, Delivered, Read), Cassandra / HBase for scalable chat history.",
    pdfUrl: "https://medium.com/@arpitbhayani/designing-a-chat-application-whatsapp-messenger-architecture-16d7d6f51cb3"
  },
  {
    track: "systemDesign",
    topic: "Case Study 06",
    title: "Design YouTube / Netflix (Video Streaming Architecture)",
    difficulty: "Hard",
    status: "pending",
    notes: "Chunking, Adaptive Bitrate Streaming (HLS / MPEG-DASH), Transcoding DAG pipelines, Multi-tier CDN caching edge nodes.",
    pdfUrl: "https://netflixtechblog.com/"
  },
  {
    track: "systemDesign",
    topic: "Case Study 07",
    title: "Design Uber / Ride-Hailing Matchmaking Service",
    difficulty: "Hard",
    status: "pending",
    notes: "Spatial indexing: Google S2 geometry library vs Uber H3 hexagonal spatial indexing. Geospatial driver location caching in Redis GEO commands.",
    pdfUrl: "https://www.uber.com/en-IN/blog/h3/"
  },
  {
    track: "systemDesign",
    topic: "Case Study 08",
    title: "Design BookMyShow / Ticketmaster (Concurrent Seat Booking)",
    difficulty: "Hard",
    status: "pending",
    notes: "Optimistic locking with versioning vs Pessimistic DB locking. Redis temporary reservation lock with 10-minute TTL before payment confirmation.",
    pdfUrl: "https://medium.com/geekculture/system-design-bookmyshow-a-ticket-booking-platform-6ea137452d3"
  },
  {
    track: "systemDesign",
    topic: "Case Study 09",
    title: "Design Distributed In-Memory Cache (Redis Replica)",
    difficulty: "Hard",
    status: "pending",
    notes: "Eviction policies: LRU, LFU, FIFO. Doubly linked list + Hash map. Single-threaded event loop architecture, AOF and RDB persistence models.",
    pdfUrl: "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/"
  },
  {
    track: "systemDesign",
    topic: "Case Study 10",
    title: "Design Web Crawler (Google Search Bot)",
    difficulty: "Hard",
    status: "pending",
    notes: "Frontier queue manager, politeness delays (robots.txt parser), deduplication using MurmurHash + Bloom filters, distributed S3 storage for page snapshots.",
    pdfUrl: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md"
  },
  {
    track: "systemDesign",
    topic: "Case Study 11",
    title: "Design E-Commerce Flash Sale System (Amazon Prime Day)",
    difficulty: "Hard",
    status: "pending",
    notes: "Decoupling orders with Kafka message queue. Pre-decrementing inventory directly in Redis memory. Preventing overselling using distributed locks.",
    pdfUrl: "https://blog.bytebytego.com/p/how-to-design-a-flash-sale-system"
  },
  {
    track: "systemDesign",
    topic: "Case Study 12",
    title: "Design Google Drive / Dropbox (File Sync & Deduplication)",
    difficulty: "Hard",
    status: "pending",
    notes: "Chunking files into 4MB blocks, computing SHA-256 hash per block for deduplication. Metadata DB (Postgres) vs Block Storage (Amazon S3).",
    pdfUrl: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/scaling_aws/README.md"
  },
  {
    track: "systemDesign",
    topic: "Case Study 13",
    title: "Design Distributed Unique ID Generator (Twitter Snowflake)",
    difficulty: "Medium",
    status: "pending",
    notes: "64-bit structure: 1 bit unused + 41 bits epoch timestamp (69 years) + 10 bits machine/datacenter ID + 12 bits sequence number (4096 IDs per ms per node).",
    pdfUrl: "https://blog.twitter.com/engineering/en_us/a/2010/announcing-snowflake"
  },
  {
    track: "systemDesign",
    topic: "Case Study 14",
    title: "Design Typeahead / Search Autocomplete (Google Search)",
    difficulty: "Medium",
    status: "pending",
    notes: "Trie data structure with top K cached frequency terms stored at each prefix node. Trie partitioning by prefix letter, CDN edge response caching.",
    pdfUrl: "https://medium.com/@prefixyteam/how-we-built-prefixy-a-hosted-prefix-search-service-for-autocomplete-778832a83494"
  },
  {
    track: "systemDesign",
    topic: "Case Study 15",
    title: "Design Distributed Message Queue (Kafka Clone)",
    difficulty: "Hard",
    status: "pending",
    notes: "Append-only commit log on disk with sequential I/O. Topics split into partitions, consumer groups maintaining offset commits, zero-copy reads (sendfile OS syscall).",
    pdfUrl: "https://kafka.apache.org/documentation/#design"
  },
  {
    track: "systemDesign",
    topic: "Case Study 16",
    title: "Design Payment Gateway System (Razorpay / Stripe)",
    difficulty: "Hard",
    status: "pending",
    notes: "Double-entry bookkeeping ledger, strict idempotency keys for checkout sessions, Two-Phase Commit (2PC) or Saga orchestrator pattern for distributed state reconciliation.",
    pdfUrl: "https://stripe.com/blog/designing-robust-banking-systems"
  },
  {
    track: "systemDesign",
    topic: "Case Study 17",
    title: "Design Live Leaderboard (Gaming / LeetCode Contest)",
    difficulty: "Medium",
    status: "pending",
    notes: "Redis Sorted Sets (ZSET) for $O(\\log N)$ score updates (ZADD) and rank range queries (ZREVRANGEBYSCORE). Sharding sorted sets by score tiers for scale.",
    pdfUrl: "https://redis.io/glossary/leaderboard/"
  },
  {
    track: "systemDesign",
    topic: "Case Study 18",
    title: "Design Nearby Places / Proximity Service (Yelp / Google Maps)",
    difficulty: "Medium",
    status: "pending",
    notes: "Geohash vs Quadtree data structure. Dynamically subdividing regions with high density of businesses into child quadrants for sub-millisecond lookups.",
    pdfUrl: "https://en.wikipedia.org/wiki/Quadtree"
  },
  {
    track: "systemDesign",
    topic: "Case Study 19",
    title: "Design Metric & Distributed Tracing System (Datadog / Prometheus)",
    difficulty: "Hard",
    status: "pending",
    notes: "Time-Series Database (TSDB) with Gorilla compression algorithm for float values. OpenTelemetry tracing headers (traceId, spanId) propagated through microservice RPCs.",
    pdfUrl: "https://www.vldb.org/pvldb/vol8/p1816-teller.pdf"
  },
  {
    track: "systemDesign",
    topic: "Case Study 20",
    title: "Design Parking Lot System (LLD / Machine Coding)",
    difficulty: "Medium",
    status: "pending",
    notes: "OOP modeling: Spot hierarchy (Compact, Large, Handicapped, Motorcycle), Vehicle class, Ticket issue & Payment strategy pattern. Thread-safe spot assignment.",
    pdfUrl: "https://github.com/tssovi/grokking-the-object-oriented-design-interview"
  },
  {
    track: "systemDesign",
    topic: "Case Study 21",
    title: "Design Elevator System (LLD / State Machine)",
    difficulty: "Medium",
    status: "pending",
    notes: "SCAN / LOOK disk scheduling algorithm adapted for car movements. State pattern (MovingUp, MovingDown, Idle). Request dispatcher thread prioritization.",
    pdfUrl: "https://tedspence.com/designing-an-elevator-algorithm-b2a64789d6e8"
  },
  {
    track: "systemDesign",
    topic: "Case Study 22",
    title: "Design Distributed Job Scheduler (Cron System / Quartz)",
    difficulty: "Hard",
    status: "pending",
    notes: "Master-worker node pattern with leader election via Apache ZooKeeper or etcd. Time-wheel / PriorityQueue for delayed job scheduling; heartbeats for fault tolerance.",
    pdfUrl: "https://netflixtechblog.com/building-netflixs-distributed-scheduler-d872c4ce0a20"
  }
];

const coreCsSheet = [
  // ================= 1. OPERATING SYSTEMS (OS) =================
  {
    track: "coreCs",
    topic: "Operating Systems",
    title: "Process vs Thread, PCB & Context Switching Overhead",
    difficulty: "Easy",
    status: "pending",
    notes: "Process: Isolated memory space with PCB (Process Control Block). Thread: Lightweight execution unit within process sharing code, data, and open files, but having separate stack and registers. Context switch saves CPU registers to PCB/TCB.",
    pdfUrl: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf"
  },
  {
    track: "coreCs",
    topic: "Operating Systems",
    title: "CPU Scheduling Algorithms: FCFS, SJF, Round Robin & Priority Inversion",
    difficulty: "Medium",
    status: "pending",
    notes: "Preemptive vs Non-preemptive scheduling. Convoy effect in FCFS. Round Robin time quantum trade-off (too small = excessive context switches, too large = FCFS). Priority Inversion solution: Priority Inheritance Protocol.",
    pdfUrl: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf"
  },
  {
    track: "coreCs",
    topic: "Operating Systems",
    title: "Deadlocks: 4 Coffman Conditions, Prevention & Banker's Algorithm",
    difficulty: "Medium",
    status: "pending",
    notes: "4 Necessary Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait. Deadlock Prevention breaks at least one condition. Deadlock Avoidance uses Banker's Algorithm (Safe State verification with Work and Need matrices).",
    pdfUrl: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-deadlock.pdf"
  },
  {
    track: "coreCs",
    topic: "Operating Systems",
    title: "Process Synchronization: Critical Section, Mutex, Semaphores & Dining Philosophers",
    difficulty: "Hard",
    status: "pending",
    notes: "Race condition occurs on shared memory updates. Mutex is a locking mechanism (ownership exists). Counting/Binary Semaphore is a signaling mechanism (wait/P and signal/V operations). Producer-Consumer and Reader-Writer solutions.",
    pdfUrl: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf"
  },
  {
    track: "coreCs",
    topic: "Operating Systems",
    title: "Memory Management: Paging, Segmentation, TLB & Multi-level Page Tables",
    difficulty: "Hard",
    status: "pending",
    notes: "Paging divides logical memory into fixed pages and physical memory into frames (avoids external fragmentation, suffers from internal fragmentation). Translation Lookaside Buffer (TLB) speeds up Virtual-to-Physical translation.",
    pdfUrl: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf"
  },
  {
    track: "coreCs",
    topic: "Operating Systems",
    title: "Virtual Memory: Page Faults, Thrashing & Page Replacement (LRU, FIFO, Optimal)",
    difficulty: "Medium",
    status: "pending",
    notes: "Page fault trap loads page from disk swap space. Belady's Anomaly in FIFO (more frames = more page faults). Thrashing happens when system spends more time paging than executing processes (Working Set Model fix).",
    pdfUrl: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf"
  },
  {
    track: "coreCs",
    topic: "Operating Systems",
    title: "Inter-Process Communication (IPC): Pipes, Shared Memory, Message Queues & Sockets",
    difficulty: "Medium",
    status: "pending",
    notes: "Anonymous pipes (parent-child unidirectional) vs Named pipes (FIFOs). Shared memory is the fastest IPC since it avoids kernel copying. Sockets enable network/local IPC.",
    pdfUrl: null
  },

  // ================= 2. DATABASE MANAGEMENT SYSTEMS (DBMS) =================
  {
    track: "coreCs",
    topic: "DBMS",
    title: "ACID Properties & Write-Ahead Logging (WAL)",
    difficulty: "Easy",
    status: "pending",
    notes: "Atomicity (all or nothing), Consistency (preserves invariants), Isolation (concurrency control), Durability (persisted on disk). WAL ensures changes are logged to non-volatile storage before disk page flush (ARIES recovery).",
    pdfUrl: "https://www.geeksforgeeks.org/acid-properties-in-dbms/"
  },
  {
    track: "coreCs",
    topic: "DBMS",
    title: "Database Normalization: 1NF, 2NF, 3NF & BCNF",
    difficulty: "Medium",
    status: "pending",
    notes: "1NF: Atomic values. 2NF: 1NF + No partial dependency on candidate key. 3NF: 2NF + No transitive dependency. BCNF: For every functional dependency X -> Y, X must be a super key. Eliminates insertion, deletion, and update anomalies.",
    pdfUrl: "https://www.scaler.com/topics/dbms/normalization-in-dbms/"
  },
  {
    track: "coreCs",
    topic: "DBMS",
    title: "Transaction Schedules, Conflict Serializability & Precedence Graph",
    difficulty: "Hard",
    status: "pending",
    notes: "Conflicting operations: Read-Write or Write-Write on the same data item by different transactions. Draw Precedence (Serialization) Graph: If no cycles exist, schedule is conflict serializable.",
    pdfUrl: null
  },
  {
    track: "coreCs",
    topic: "DBMS",
    title: "Concurrency Control: Two-Phase Locking (2PL), Strict 2PL & Timestamp Ordering",
    difficulty: "Hard",
    status: "pending",
    notes: "Growing phase (acquire locks) vs Shrinking phase (release locks). 2PL guarantees serializability but may cause deadlocks. Strict 2PL holds exclusive locks until transaction commit/abort (prevents cascading rollbacks).",
    pdfUrl: null
  },
  {
    track: "coreCs",
    topic: "DBMS",
    title: "B-Tree vs B+ Tree Indexing & Hash Indexing Internals",
    difficulty: "Medium",
    status: "pending",
    notes: "B+ tree stores data records/pointers exclusively in leaf nodes linked horizontally via pointers, maximizing branch fan-out and range scans. Hash indexes provide O(1) equality lookups but fail on range queries.",
    pdfUrl: "https://use-the-index-luke.com/"
  },
  {
    track: "coreCs",
    topic: "DBMS",
    title: "SQL Joins: Inner, Outer, Cross, Hash Join & Merge Join Algorithms",
    difficulty: "Medium",
    status: "pending",
    notes: "Nested Loop Join: O(M * N) for small datasets. Hash Join: Builds hash table on smaller relation and probes with larger relation (O(M + N)). Sort-Merge Join: Efficient when inputs are already sorted by join key.",
    pdfUrl: null
  },
  {
    track: "coreCs",
    topic: "DBMS",
    title: "SQL vs NoSQL: Relational vs Document, Key-Value, Columnar & Graph DBs",
    difficulty: "Easy",
    status: "pending",
    notes: "Relational (Postgres/MySQL) for structured schemas, complex joins, and strict ACID. NoSQL (MongoDB, Redis, Cassandra) for horizontal write scaling, flexible schema, and high-throughput key-value lookups.",
    pdfUrl: null
  },

  // ================= 3. COMPUTER NETWORKS (CN) =================
  {
    track: "coreCs",
    topic: "Computer Networks",
    title: "OSI 7-Layer Model vs TCP/IP Protocol Suite",
    difficulty: "Easy",
    status: "pending",
    notes: "Physical (Bits), Data Link (Frames, MAC, ARP), Network (Packets, IP, Routing), Transport (Segments, TCP/UDP), Session, Presentation, Application (HTTP, DNS, TLS). TCP/IP collapses upper layers into Application layer.",
    pdfUrl: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
  },
  {
    track: "coreCs",
    topic: "Computer Networks",
    title: "TCP 3-Way Handshake, Connection Teardown (4-Way) & TIME_WAIT State",
    difficulty: "Medium",
    status: "pending",
    notes: "Establishment: SYN -> SYN-ACK -> ACK. Termination: FIN -> ACK -> FIN -> ACK. Client stays in TIME_WAIT for 2MSL (Maximum Segment Lifetime) to ensure final ACK delivery and drain duplicate packets from network.",
    pdfUrl: "https://www.catchpoint.com/network-admin-guide/tcp-handshake"
  },
  {
    track: "coreCs",
    topic: "Computer Networks",
    title: "TCP vs UDP: Reliability, Flow Control & Congestion Control",
    difficulty: "Medium",
    status: "pending",
    notes: "TCP: Connection-oriented, ordered, reliable via ACK/retransmission. Flow Control uses Sliding Window. Congestion Control: Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery (AIMD). UDP: Connectionless, lightweight, low-latency (streaming/gaming).",
    pdfUrl: null
  },
  {
    track: "coreCs",
    topic: "Computer Networks",
    title: "DNS Resolution Flow & What Happens When You Type a URL in Browser",
    difficulty: "Medium",
    status: "pending",
    notes: "Browser cache -> OS cache -> Resolving Name Server -> Root Server -> TLD Server (.com) -> Authoritative Name Server. TCP Handshake -> TLS Handshake -> HTTP GET -> Server processing -> Browser DOM parse & render.",
    pdfUrl: "https://github.com/alex/what-happens-when"
  },
  {
    track: "coreCs",
    topic: "Computer Networks",
    title: "HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC)",
    difficulty: "Hard",
    status: "pending",
    notes: "HTTP/1.1: Head-of-line (HOL) blocking, keep-alive connections. HTTP/2: Binary framing, multiplexing over single TCP connection, HPACK header compression. HTTP/3: Runs over UDP-based QUIC, eliminating TCP HOL blocking on packet drop.",
    pdfUrl: "https://www.cloudflare.com/learning/performance/http3-vs-http2/"
  },
  {
    track: "coreCs",
    topic: "Computer Networks",
    title: "TLS/SSL Handshake & HTTPS Encryption Flow",
    difficulty: "Hard",
    status: "pending",
    notes: "Client Hello (Cipher suites) -> Server Hello + Digital Certificate (Public Key) -> Certificate Validation with CA -> Premaster Secret encrypted with server's Public Key (Asymmetric) -> Symmetric Session Keys derived for actual data transfer.",
    pdfUrl: "https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/"
  },
  {
    track: "coreCs",
    topic: "Computer Networks",
    title: "Subnetting, CIDR Notation, NAT & Private vs Public IP Addresses",
    difficulty: "Medium",
    status: "pending",
    notes: "CIDR: /24 means 24 network bits and 8 host bits (256 - 2 = 254 usable IPs). NAT (Network Address Translation) maps multiple private IP devices on a LAN to a single public IP via port forwarding (PAT).",
    pdfUrl: null
  },

  // ================= 4. OBJECT-ORIENTED PROGRAMMING (OOP) =================
  {
    track: "coreCs",
    topic: "OOP Concepts",
    title: "4 Pillars of OOP: Encapsulation, Abstraction, Inheritance & Polymorphism",
    difficulty: "Easy",
    status: "pending",
    notes: "Encapsulation: Bundling data and methods into single unit with access modifiers (private, protected). Abstraction: Hiding implementation details via interfaces/abstract classes. Inheritance: Code reusability (IS-A relationship). Polymorphism: Compile-time (Method Overloading) vs Runtime (Method Overriding via Virtual Method Table).",
    pdfUrl: null
  },
  {
    track: "coreCs",
    topic: "OOP Concepts",
    title: "Abstract Classes vs Interfaces & Multiple Inheritance Diamond Problem",
    difficulty: "Easy",
    status: "pending",
    notes: "Abstract class can hold state (member variables) and concrete methods; Interface defines contract (pure abstraction / default methods in modern languages). Diamond problem occurs when two parent classes implement the same method; resolved via interface contracts or explicit super call routing.",
    pdfUrl: null
  },
  {
    track: "coreCs",
    topic: "OOP Concepts",
    title: "Virtual Functions, Dynamic Binding & VTable (Virtual Table) Internals",
    difficulty: "Medium",
    status: "pending",
    notes: "When class declares virtual functions, compiler creates a VTable holding pointers to the virtual methods and inserts a hidden pointer (vptr) in each object pointing to the class's VTable for runtime method lookup.",
    pdfUrl: null
  }
];

const aptitudeSheet = [
  // ================= 1. QUANTITATIVE APTITUDE =================
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Time, Speed & Distance, Trains & Relative Speed",
    difficulty: "Easy",
    status: "pending",
    notes: "Conversion: km/hr to m/s = multiply by 5/18. Opposite direction: Relative speed = S1 + S2. Same direction: Relative speed = |S1 - S2|. Train crossing platform: Distance = Length of Train + Length of Platform.",
    pdfUrl: "https://www.indiabix.com/aptitude/time-and-distance/"
  },
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Time and Work & Pipes and Cisterns",
    difficulty: "Medium",
    status: "pending",
    notes: "Unitary / LCM Method: Total work = LCM of individual days. Efficiency = Work / Days. If A does work in X days and B in Y days, combined time = (X * Y) / (X + Y). Negative efficiency for emptying pipe.",
    pdfUrl: "https://www.indiabix.com/aptitude/time-and-work/"
  },
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Percentages, Profit, Loss & Discount",
    difficulty: "Easy",
    status: "pending",
    notes: "Successive change formula = a + b + (a * b)/100. Profit% = (Profit / CP) * 100. Marked Price (MP) - Discount = Selling Price (SP). Faulty weights: Profit% = (Error / (True Value - Error)) * 100.",
    pdfUrl: "https://www.indiabix.com/aptitude/profit-and-loss/"
  },
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Simple Interest (SI) & Compound Interest (CI) Differentials",
    difficulty: "Medium",
    status: "pending",
    notes: "SI = (P * R * T) / 100. CI Amount = P(1 + R/100)^T. 2-Year difference formula between CI and SI: Diff = P * (R / 100)^2. 3-Year difference formula: Diff = P * (R/100)^2 * (3 + R/100).",
    pdfUrl: "https://www.indiabix.com/aptitude/compound-interest/"
  },
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Ratios, Proportions, Mixtures & Alligation",
    difficulty: "Medium",
    status: "pending",
    notes: "Rule of Alligation: (Cheaper Quantity / Dearer Quantity) = (Price of Dearer - Mean Price) / (Mean Price - Price of Cheaper). Repeated dilution formula: Remaining pure liquid = Initial * (1 - x / V)^n.",
    pdfUrl: "https://www.indiabix.com/aptitude/alligation-or-mixture/"
  },
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Permutations, Combinations & Probability",
    difficulty: "Hard",
    status: "pending",
    notes: "Arrangement: nPr = n! / (n - r)!. Selection: nCr = n! / (r! * (n - r)!). Circular permutation = (n - 1)!. Probability = Favorable outcomes / Total outcomes. P(A or B) = P(A) + P(B) - P(A and B).",
    pdfUrl: "https://www.indiabix.com/aptitude/probability/"
  },
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Number Systems: Divisibility Rules, Unit Digit & Remainder Theorem",
    difficulty: "Medium",
    status: "pending",
    notes: "Cyclicity of powers: 2, 3, 7, 8 have cyclicity 4. Divisibility by 7, 11, 13 rules. Wilson's & Fermat's Little Theorem: (a^(p-1) mod p = 1) if p is prime.",
    pdfUrl: "https://www.indiabix.com/aptitude/numbers/"
  },
  {
    track: "aptitude",
    topic: "Quantitative",
    title: "Averages, Ages & Partnerships",
    difficulty: "Easy",
    status: "pending",
    notes: "New average when one item replaced = Old Average + (Diff in weight / Total items). Profit sharing ratio in partnership = Investment1 * Time1 : Investment2 * Time2.",
    pdfUrl: "https://www.indiabix.com/aptitude/partnership/"
  },

  // ================= 2. LOGICAL REASONING =================
  {
    track: "aptitude",
    topic: "Logical Reasoning",
    title: "Syllogisms & Venn Diagram Logic",
    difficulty: "Medium",
    status: "pending",
    notes: "Rules: All + All = All. Some + All = Some. No + All = Some Not. Either-Or case conditions: Both conclusions false independently, same subject/predicate, one positive and one negative pair (All + Some Not, Some + No).",
    pdfUrl: "https://www.indiabix.com/logical-reasoning/syllogism/"
  },
  {
    track: "aptitude",
    topic: "Logical Reasoning",
    title: "Blood Relations & Family Tree Notation",
    difficulty: "Easy",
    status: "pending",
    notes: "Symbols: [+] for Male, [-] for Female, [=] for Married couple, [|] for Parent-Child generation gap. Always solve by drawing step-by-step family tree starting from the anchored person.",
    pdfUrl: "https://www.indiabix.com/logical-reasoning/blood-relation-test/"
  },
  {
    track: "aptitude",
    topic: "Logical Reasoning",
    title: "Linear & Circular Seating Arrangement",
    difficulty: "Hard",
    status: "pending",
    notes: "Circular facing center: Left is clockwise, Right is anti-clockwise. Facing outward: Left is anti-clockwise, Right is clockwise. Keep 2 parallel possible cases to eliminate invalid setups quickly.",
    pdfUrl: "https://www.indiabix.com/logical-reasoning/seating-arrangement/"
  },
  {
    track: "aptitude",
    topic: "Logical Reasoning",
    title: "Direction Sense & Pythagorean Distance Traps",
    difficulty: "Easy",
    status: "pending",
    notes: "Cardinal directions (N, S, E, W) and ordinal directions (NE, NW, SE, SW). Shadow rules: Morning sun is in East (shadow points West); Evening sun is in West (shadow points East). Hypotenuse = sqrt(base^2 + perp^2).",
    pdfUrl: "https://www.indiabix.com/logical-reasoning/direction-sense-test/"
  },
  {
    track: "aptitude",
    topic: "Logical Reasoning",
    title: "Coding-Decoding & Alphanumeric Series",
    difficulty: "Easy",
    status: "pending",
    notes: "Letter positional weights: EJOTY rule (5, 10, 15, 20, 25). Opposite letter pairs: Sum of alphabetical positions equals 27 (A-Z, B-Y, C-X, D-W, etc.).",
    pdfUrl: "https://www.indiabix.com/logical-reasoning/coding-and-decoding/"
  },
  {
    track: "aptitude",
    topic: "Logical Reasoning",
    title: "Clocks and Calendars Shortcuts",
    difficulty: "Medium",
    status: "pending",
    notes: "Clock Angle formula = |30 * H - (11/2) * M|. Coincide every 65(5/11) minutes. Calendar: Normal year has 1 odd day, leap year has 2 odd days. 100 years have 5 odd days, 400 years have 0 odd days.",
    pdfUrl: "https://www.indiabix.com/aptitude/clock/"
  },

  // ================= 3. DATA INTERPRETATION & VERBAL LOGIC =================
  {
    track: "aptitude",
    topic: "Data Interpretation",
    title: "Tables, Bar Graphs, Pie Charts & Caselet DI",
    difficulty: "Medium",
    status: "pending",
    notes: "Degree to percentage conversion: 360 degrees = 100% (1% = 3.6 degrees). Focus on ratio simplification and percentage difference estimation without calculating exact decimals.",
    pdfUrl: "https://www.indiabix.com/data-interpretation/table-charts/"
  },
  {
    track: "aptitude",
    topic: "Verbal Logic",
    title: "Statement & Assumptions, Arguments & Course of Action",
    difficulty: "Medium",
    status: "pending",
    notes: "Assumptions must be implicit and presupposed, not an external deduction. Strong arguments must address the core issue with practical feasibility. Avoid extreme words like 'only', 'all', 'never'.",
    pdfUrl: "https://www.indiabix.com/logical-reasoning/statement-and-assumption/"
  }
];

module.exports = [
  ...mergedDsaSheet,
  ...backendDevSheet,
  ...systemDesignSheet,
  ...coreCsSheet,
  ...aptitudeSheet
];