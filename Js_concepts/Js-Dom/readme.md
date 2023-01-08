# DOM Objects and Their Properties and Methods
There are lots of method and properties of Dom objects but we'll discuss here only three of them - 

1. The Node object
2. The Element object
3. The Document object

## The Document Object and its Methods

- The Document object’s methods are probably the most important methods. The Document object’s methods let you <b>Find, Create, and Delete elements</b> in your page. 

- 1. find, create, and delete elements


<table>
    <tr>
        <th>Document Object's Methods<th>
        <th>Description<th>
    </tr>
    <tr>
        <td>getElementById(idValue)</td>
        <td>Returns a reference (a node) of an element, when supplied 
with the value of the id attribute of that element</td>
    </tr>
    <tr>
        <td>getElementsByTagName(tagName)</td>
        <td>Returns a reference (a node list) to a set of elements 
that have the same tag as the one supplied in the 
argument</td>
    </tr>
    <tr>
        <td>querySelector(cssSelector)</td>
        <td>Returns a reference (a node) of the first element that 
matches the given CSS selector</td>
    </tr>
    <tr>
        <td>querySelectorAll(cssSelector)</td>
        <td>Returns a reference (a node list) to a set of elements that 
match the given CSS selector
</td>
    </tr>
</table>
