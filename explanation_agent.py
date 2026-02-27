import requests
from config import OLLAMA_URL, OLLAMA_MODEL, USE_LLM

def generate_explanation(report):
    if not USE_LLM:
        return "LLM narration is disabled."

    prompt = f"""
    You are a senior developer. Summarize this analysis:
    - Functions: {report['total_functions']}
    - Risks: {report['total_risks']}
    - Refactors: {report['total_refactors']}
    
    Briefly explain what the developer should prioritize.
    """

    try:
        response = requests.post(
            OLLAMA_URL,
            json={"model": OLLAMA_MODEL, "prompt": prompt, "stream": False},
            timeout=120 # Increased from 60 to 120
        )
        return response.json().get("response", "No response from AI.")
    except Exception as e:
        # This catches the timeout error you saw
        return f"AI Narration Error: {str(e)}"