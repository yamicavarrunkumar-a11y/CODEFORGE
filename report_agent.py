def generate_report(complexity, dependencies, risks, refactors):
    return {
        "summary": "Code analysis completed successfully",
        "total_functions": len(complexity),
        "total_dependencies": len(dependencies),
        "total_risks": len(risks),
        "total_refactors": len(refactors),
    }