# --- Day 4: Secure Container ---

## Problem One Statement

How many different passwords within the range given in your puzzle input meet these criteria?

### Background

You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.
However, they do remember a few key facts about the password:

### Rules

- It is a six-digit number.
- The value is within the range given in your puzzle input.
- Two adjacent digits are the same (like `22` in `122345`).
- Going from left to right, the digits never decrease; they only ever increase or stay the same (like `111123` or `135679`).

### Examples

- `111111` meets these criteria (double 11, never decreases).
- `223450` does not meet these criteria (decreasing pair of digits 50).
- `123789` does not meet these criteria (no double).

## Problem Two Statement

How many different passwords within the range given in your puzzle input meet all of the criteria?

### Background

An Elf just remembered one more important detail:

### Rules

- the two adjacent matching digits are not part of a larger group of matching digits.

### Examples

- `112233` meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
- `123444` no longer meets the criteria (the repeated 44 is part of a larger group of 444).
- `111122` meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).
