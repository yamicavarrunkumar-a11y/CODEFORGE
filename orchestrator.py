from agents.parser_agent import parse_code
from agents.complexity_agent import analyze_complexity
from agents.dependency_agent import build_dependencies
from agents.risk_agent import detect_risks
from agents.refactor_agent import suggest_refactors
from agents.report_agent import generate_report
from agents.explanation_agent import generate_explanation

def run_pipeline(code):
    ast_tree = parse_code(code)

    complexity = analyze_complexity(code)
    dependencies = build_dependencies(ast_tree)
    risks = detect_risks(code)
    refactors = suggest_refactors(code)

    report = generate_report(
        complexity, dependencies, risks, refactors
    )

    explanation = generate_explanation(report)

    return {
        "complexity": complexity,
        "dependencies": dependencies,
        "risks": risks,
        "refactors": refactors,
        "report": report,
        "explanation": explanation
    }