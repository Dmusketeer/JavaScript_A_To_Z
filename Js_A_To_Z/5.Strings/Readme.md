## -------------------------------- JavaScript strings  --------------------------------

- JavaScript strings are primitive values.
-  JavaScript strings are also immutable. It means that if you process a string, you will always get a new string. The original string doesn’t change.

- To create literal strings in JavaScript, you use either single quotes or double quotes

## Escaping special characters: 
To escape special characters, you use the backslash \ character. For example:

- Windows line break: '\r\n'
- Unix line break: '\n'
- Tab: '\t'
- Backslash '\'


The length property returns the length of a string

## Accessing characters
- To access the characters in a string, you use the array-like [ ] notation with the zero-based index.
- To access the last character of the string, you use the length - 1 index:

## Converting values to string
To convert a non-string value to a string, you use one of the following:

- String(n);
- " " + n
- n.toString()

<b>Note</b> that the toString() method doesn’t work for <i>undefined</i> and <i>null</i>.

## Comparing strings
- To compare two strings, you use the operator >, >=, <, <=, and == operators.

- These operators compare strings based on the numeric values of JavaScript characters