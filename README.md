# NearleyGram

Gram is a subject based notation for structured data.

This project is a [nearley](https://nearley.js.org) grammar for gram, providing
an EBNF-like description that produces convenient railroad diagrams.

## About `gram`

Gram notation describes subjects, which are like objects with benefits. 

There are 3 primary structures which can be defined:

- independent subjects: ```(a:Person {name:"ABK"})```
- subject relationships: ```(a)-[:KNOWS]->(b)```
- associated subjects: ```[people | a,b,c]```
