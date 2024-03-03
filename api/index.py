from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def status():
    return {"message": "ok from uvicorn server"}

@app.get("/status")
def next_app():
    return {"message": "from nextjs api"}