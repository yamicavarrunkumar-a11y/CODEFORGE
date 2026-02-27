import ast

def detect_risks(code):
    risks = []
    
    try:
        tree = ast.parse(code)
        
        for node in ast.walk(tree):
            # 1. Detect use of eval() or exec()
            if isinstance(node, ast.Call):
                if isinstance(node.func, ast.Name):
                    if node.func.id in ["eval", "exec"]:
                        risks.append(f"Security Risk: Use of dangerous function '{node.func.id}' detected.")

            # 2. Detect hardcoded passwords/keys in variable names
            if isinstance(node, ast.Assign):
                for target in node.targets:
                    if isinstance(target, ast.Name):
                        name_lower = target.id.lower()
                        if any(secret in name_lower for secret in ["password", "secret", "api_key", "token"]):
                            risks.append(f"Privacy Risk: Potential hardcoded credential found in variable '{target.id}'.")

        if not risks:
            risks.append("No major security risks detected by static analysis.")
            
    except Exception as e:
        risks.append(f"Risk Analysis Error: {str(e)}")
        
    return risks