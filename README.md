# topology_sort_js
simple javascript version implement of topology sort

# Demo

>- as for this graph
```
graph LR
A-->B
A-->C
B-->D
C-->D
D-->E
F-->C
```

```js
var arr = [
  {
    key: 1,
    text: 'A'
  },
  {
    key: 2,
    text: 'B',
    deps: [1]
  },
  {
    key: 3,
    text: 'C',
    deps: [1, 6]
  },
  {
    id: 4,
    text: 'D',
    deps: [2, 3]
  },
  {
    key: 5,
    text: 'E',
    deps: [4]
  },
  {
    key: 6,
    text: 'F',
    deps: []
  }
];

// get the safe order
var result = topology_sort(arr, function(item) {
    // callback to get item info
    return {
        id: item.key, // required. will find item by id
        deps: item.deps  // required. dependencies, each item is item id
    }
});
```
