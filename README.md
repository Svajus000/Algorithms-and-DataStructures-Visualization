# Data Structures and Algorithms Visualization

Note: These explanations are brief and basic.

### Queue

# What is Queue?

Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of “First in, First out” (FIFO), where the first element added to the queue is the first one to be removed.

# How does it work here?

Queue has two algorithms enqueue and dequeue. Enqueue is an operation that adds object or any kind of data to the back of the queue. Dequeue is an opossite of that it takes out data from the front and returns it.

### Stack

# What is Stack?

Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.

# How does it work here?

Stack has two algorithms pop and push. Push: The push operation inserts data onto the top of the stack. This means that new elements are added to the top of the stack. Pop: The pop operation removes and returns the topmost element of the stack. After a pop operation, the stack is reduced in size, and the element removed is no longer accessible.

### Hash Table

# What is Hash Table?

A Hash table is a data structure used to insert, look up, and remove key-value pairs quickly. It operates on the hashing concept, where each key is translated by a hash function into a distinct index in an array. The index functions as a storage location for the matching value. In simple words, it maps the keys with the value.

# How does it work here?

Here Hash table has setItem and getItem algorithms with fixed amount of key-value pairs you can insert and get. setItem algorithm takes an key-value pair from list inserts key in hashFunction and returns calculated hash. Hash is required to know where to store the key value pair. If there is no collision (i.e., another key mapping to the same address), the key-value pair is inserted directly into the calculated address. If a collision occurs, the hash table must resolve it using a collision resolution strategy (e.g., chaining or open addressing). In this case I use separate chaining. getItem takes an key input to hashFunction converts key into adress, searches and returns that keys value.

### Linked List

# What is Linked List?

A linked list is a fundamental data structure in computer science. It consists of nodes where each node contains data and a reference (link) to the next node in the sequence. This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays.

# How does it work here?

Linked list here has three algorithms FindTarget, InsertTarget and DeleteTarget. FindTarget takes an input Target and traverses the linked list searching for that target and when it finds it, returns it. InsertTarget takes an input Target and TargetIndex, Target is the value of node that will be inserted and TargetIndex is the index where it will be inserted. DeleteTarget needs an TargetIndex to know which node to delete, then it traverses through the list and when it gets to that index algorithms connects previous node to next node and disconnect the current one.

### Tree

# What is Tree?

A tree data structure is a hierarchical structure that is used to represent and organize data in a way that is easy to navigate and search. It is a collection of nodes that are connected by edges and has a hierarchical relationship between the nodes.

# How does it work here?

This tree has two algorithms InsertTarget and DeleteTarget. As Linked List InsertTarget takes an input Target and finds the place where it should belong. DeleteTarget searches for given Target and when it finds, deletes.

### Graph

# What is Graph?

A Graph Data Structure is a collection of nodes connected by edges. It’s used to represent relationships between different entities.

# How does it work here?

Graphs algorithms are a bit different than others, its Depth-First-Search (DFS) and Breath-First-Search (BFS). DFS is an algorithm that uses recursion to explore neighbour nodes and when all neighbour nodes are visited, backtracks. BFS has the same purpose but different approach, it uses loops to find adjacent nodes.
