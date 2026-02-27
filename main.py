import sys
import os
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from orchestrator import run_pipeline 

app = FastAPI()

# This allows the frontend to connect to the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "CodeAgent Backend Running 🚀"}

@app.post("/analyze/")
async def analyze(file: UploadFile = File(...)):
    content = await file.read()
    code = content.decode("utf-8")
    # This calls your logic
    result = run_pipeline(code)
    return result

# THIS KEEPS YOUR CMD FROM CLOSING
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)