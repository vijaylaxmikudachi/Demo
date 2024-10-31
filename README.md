# Basics of JavaScript

## Project Overview

This project is a deep dive into JavaScript, covering essential concepts and internal architecture, including the event loop, closures, hoisting, higher-order functions, lexical scoping, generators, Immediately Invoked Function Expressions (IIFE), and prototypes. The project serves as a comprehensive guide for understanding these core JavaScript principles and constructs, enabling developers to write more efficient, clean, and powerful JavaScript code.

---

## Table of Contents

1. [JavaScript Architecture](#javascript-architecture)
2. [Event Loop](#event-loop)
3. [Closure](#closure)
4. [Hoisting](#hoisting)
5. [Higher-Order Functions](#higher-order-functions)
6. [Lexical Scope](#lexical-scope)
7. [Generator Functions](#generator-functions)
8. [IIFE (Immediately Invoked Function Expression)](#iife-immediately-invoked-function-expression)
9. [Prototype](#prototype)

---

## JavaScript Architecture

JavaScript operates on a single-threaded, non-blocking, asynchronous architecture, powered by the **Event Loop** and **JavaScript Runtime**. JavaScript code runs in the **Call Stack**, while asynchronous code execution is managed by the **Web APIs** (in a browser environment) or **Node.js APIs** (in a Node.js environment). The **Event Loop** coordinates the execution of callbacks and promises by pushing them from the **Callback Queue** to the **Call Stack** when the stack is empty, ensuring efficient asynchronous execution.

---

## Event Loop

The **Event Loop** is the core mechanism that handles asynchronous operations. It continually checks if the **Call Stack** is empty, and if it is, it moves tasks from the **Callback Queue** or **Microtask Queue** (e.g., promise callbacks) into the stack for execution. This allows JavaScript to handle tasks like API calls, timers, and user interactions without blocking the main thread.

## Closure
A Closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures enable data encapsulation and functional programming patterns, such as factory functions.

## Hoisting
Hoisting is JavaScript's default behavior of moving declarations (but not initializations) to the top of the current scope. Function and variable declarations are hoisted, but variables initialized with let and const are not accessible until they are declared.

## Higher-Order Functions
A Higher-Order Function is a function that can accept other functions as arguments or return a function as a result. Higher-order functions are foundational in functional programming, enabling composition, callbacks, and abstraction.

## Lexical Scope
Lexical Scope refers to how JavaScript resolves variable names based on the location of the variable declaration in the source code. Each function creates a new scope, and inner functions have access to the scope of their outer functions due to lexical scoping.

## Generator Functions
Generators are functions that can be paused and resumed, allowing them to yield multiple values over time. They are defined with the function* syntax and use yield to return values one at a time, making them ideal for handling lazy sequences, iterators, and async programming.

## IIFE (Immediately Invoked Function Expression)
An IIFE is a function that runs as soon as it is defined. It creates a private scope, avoiding polluting the global scope and providing a way to encapsulate code.

## Prototype
The Prototype is an object from which other objects inherit properties and methods in JavaScript. Every function in JavaScript has a prototype property, which is used when creating instances of that function. JavaScript uses Prototypal Inheritance to share properties and methods across instances.

