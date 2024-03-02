from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
def status():
    return {"message": "ok from uvicorn server"}

@app.get("/api/status")
def next_app():
    return {"message": "from nextjs api"}