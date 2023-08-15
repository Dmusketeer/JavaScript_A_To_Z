## 1.[JavaScript Regular Expression](https://www.javascripttutorial.net/javascript-regular-expression/)
## 2.[Regular Expression: Character Classes](https://www.javascripttutorial.net/javascript-character-classes/)
## 3.[Regular Expression: Anchors](https://www.javascripttutorial.net/regular-expression-anchors/)
## 4.[Regular Expression: Sets and Ranges](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)
## 5.[Regular Expression: Word Boundaries](https://www.javascripttutorial.net/regular-expression-word-boundaries/)
## 6.[Regular Expression: Quantifiers](https://www.javascripttutorial.net/regular-expression-quantifiers/)
## 7.[JavaScript String replace()](https://www.javascripttutorial.net/javascript-string-replace/)
## 8.[JavaScript String match()](https://www.javascripttutorial.net/javascript-string-match/)
## 9.[JavaScript String search()](https://www.javascripttutorial.net/javascript-string-search/)



<ul>
<li>Use /.../ or RegExp constructor to create a regular expression.</li>
<li>Use the pattern flag e.g., ignore (i) and global (g) to modify the matching behavior.</li>
<li>Use the RegExp.test() method to determine if a pattern is found in a string.</li>
<li>Use the RegExp.exec() method to find the match and return an array that contains the information of the match.
</li>
<li>The method str.match(regexp) returns all matches of regexp in the string str.</li>
<li>The replace() method to replace the first occurrence of the string </li>
</ul>

## -----------------------------------------------------

<ul>
<li>\d – match a single digit or a character from 0 to 9.
</li>
<li>\s – match a single whitespace symbol such a space, a tab (\t), a newline (\n).
</li>
<li>\w – w stands for word character. It matches the ASCII character [A-Za-z0-9_] including Latin alphabets, digits, and the underscore (_)</li>
<li>\D – matches any character except a digit e.g., a letter.</li>
<li>\D – matches any character except a digit e.g., a letter.</li>
<li>matches any character except a word character e.g., non-Latin letter or space.</li>
<li>The dot(.) matches any character except the newline character. Use the s flag to make the dot (.) character class matches any character including the newline.</li>
</ul>

## --------------------------Anchors---------------------------

<ul>
<li>Use the ^ anchor to match the beginning of the text.</li>
<li>Use the $ anchor to match the end of the text.</li>
<li>Use the m flag to enable the multiline mode that instructs the ^ and $ anchors to match the beginning and end of the text as well as the beginning and end of the line.</li>
<li></li>
<li></li>
</ul>


## --------------------------word boundary-----------------------
<ul>
<li>The \b anchor matches a word boundary position.</li>
</ul>



## ----------------------------------------------------------------

- Quantifiers match a number of instances of a character, group, or character class in a string.


### Quantity

- Exact count {n}
    - A number in curly braces {n}is the simplest quantifier.

- The range {n,m}
    - The range matches a character or character class from n to m times.

- lists the quantifiers

<table style="border:1px solid white">
<tr >
<td>Quantifiers</td>
<td>Description</td>
</tr>
<tr>
<td>*</td>
<td>Match zero or more times.</td>
</tr>
<tr><td>+</td>
<td>Match one or more times.</td></tr>
<tr><td>?</td>
<td>Match zero or one time.</td></tr>
<tr><td>{ n }</td>
<td>Match exactly n times.</td></tr>
<tr><td>{ n ,}</td>
<td>Match at least n times.</td></tr>
<tr>
<td>{ n , m }</td>
<td>Match from n to m times.</td>
</tr>
</table>



### The following shows some regular expression examples that include quantifiers:

- Whole numbers:/^\d+$/
- Decimal numbers:/^\d*.\d+$/
- Whole numbers and decimal numbers:/^\d*(.\d+)?$/
- Negative, positive whole numbers & decimal numbers:/^-?\d*(.\d+)?$/


## Sets and Ranges
- ### Sets
    - The [...] is called a set.
- ### Ranges
    - Use the - inside a set to construct a range to match any character in the range.
    - Use the ^ to negate a range.