import re

def suggest_refactors(file_content):
    refactors = []
    lines = file_content.split('\n')
    
    for i, line in enumerate(lines, 1):
        # 1. Print Rule: Captures actual text inside print()
        if "print(" in line:
            match = re.search(r'print\((.*)\)', line)
            original_content = match.group(1) if match else "..."
            refactors.append({
                "issue": f"Line {i}: Replace print with logging.",
                "rewritten_code": f"import logging\nlogging.info({original_content})"
            })
            
        # 2. Identity Rule: Fixes '== None'
        if "== None" in line:
            refactors.append({
                "issue": f"Line {i}: Use 'is None' for identity.",
                "rewritten_code": line.replace("== None", "is None").strip()
            })
            
        # 3. List Rule: Suggests 'if not list' instead of 'len() == 0'
        if "len(" in line and "== 0" in line:
            # Captures the name of the list inside len()
            list_match = re.search(r'len\((.*?)\)', line)
            list_name = list_match.group(1) if list_match else "my_list"
            refactors.append({
                "issue": f"Line {i}: Use 'if not {list_name}:' to check for empty lists.",
                "rewritten_code": f"if not {list_name}:"
            })
            
    return refactors