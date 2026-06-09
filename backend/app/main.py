from fastapi import FastAPI
from app.api import patients


app = FastAPI(
    title="HOMIS API"
)


app.include_router(
    patients.router
)


@app.get("/")
def root():
    return {
        "system":"HOMIS",
        "status":"running"
    }
