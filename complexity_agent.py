from radon.complexity import cc_visit

def analyze_complexity(code):
    results = cc_visit(code)

    return [
        {
            "function": r.name,
            "complexity": r.complexity
        }
        for r in results
    ]