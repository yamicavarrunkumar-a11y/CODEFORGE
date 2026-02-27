# Allowed file types
ALLOWED_EXTENSIONS = [".py"]

# File size limit (in bytes)
MAX_FILE_SIZE = 100000  # 100 KB

# Ollama Configuration
OLLAMA_URL = "http://localhost:11434/api/generate"
OLLAMA_MODEL = "llama3"
USE_LLM = True

# Timeout (important for LLM requests)
REQUEST_TIMEOUT = 60  # seconds

# App settings
APP_NAME = "CodeAgent"
VERSION = "1.0"