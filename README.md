# Node.js Unexpected Server Crash Due to Unhandled Exceptions

This repository demonstrates a common, yet often overlooked, error in Node.js applications: unexpected server crashes due to unhandled exceptions within request listeners (e.g., in HTTP servers).

## The Problem

The provided `bug.js` file contains a simple HTTP server.  However, it lacks proper error handling. If an exception occurs within the request listener, the server will crash without any graceful handling or logging. This can make debugging extremely difficult, particularly in production environments where the root cause might be obscured.

## The Solution

The `bugSolution.js` file presents a solution to this issue by implementing a `try...catch` block within the request listener. This allows us to gracefully handle exceptions, preventing server crashes.  Furthermore, it includes logging to aid in debugging and identifying problematic requests.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the server crash (due to the unhandled exception).
4. Run `node bugSolution.js` to see the server handle the exception gracefully.