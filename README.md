Overview

The Legacy Code Modernizer is a tool designed to analyze messy or legacy Python code and provide actionable insights for developers. It highlights complexity hotspots, risky code patterns, and suggests refactors using rule-based logic and metrics. The system bridges the gap between raw code and professional software standards, helping teams reduce technical debt and improve code maintainability.

Key Features

Cyclomatic Complexity Analysis

Measures structural complexity of functions using M = E - N + 2P.

Highlights code that is hard to test or maintain.

AST (Abstract Syntax Tree) Traversal

Parses code into a tree structure of functions, variables, and imports.

Detects dependencies and rule-based refactoring suggestions (e.g., replacing print() with logging).

Static Analysis for Risks

Detects code “smells” without execution.

Prioritizes high-risk areas for the developer.

Refactor Suggestions

Identifies functions that are too long or complex.

Provides ready-to-use recommendations to modernize code.

Dashboard Frontend

React.js frontend displays complexity charts, risk panels, dependency graphs, and human-readable explanations.
