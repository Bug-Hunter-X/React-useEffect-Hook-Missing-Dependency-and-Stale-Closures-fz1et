# React useEffect Hook Missing Dependency and Stale Closures
This repository demonstrates a common React bug involving the useEffect hook: missing dependencies and resulting stale closures.

## Bug Description
The `MyComponent` uses `useEffect` to log a message when the `count` state variable exceeds 0. However, it also depends on an external prop, `someProp`.  The bug lies in not including `someProp` in the dependency array. This leads to the useEffect callback only running when `count` changes, ignoring updates to `someProp`, resulting in incorrect behavior and potential stale closures. 

## How to Reproduce
Clone the repository, and run the app. Observe the console logs. Update `someProp` and notice the lack of re-renders and updated logs.

## Solution
The solution involves adding `someProp` to the dependency array of the `useEffect` hook. This ensures the effect runs whenever either `count` or `someProp` changes. 