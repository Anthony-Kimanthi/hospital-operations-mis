from fastapi import FastAPI

app = FastAPI(
    title="HOMIS API",
    description="Hospital Operations Management Information System"
)


@app.get("/")
def root():
    return {
        "system": "HOMIS",
        "status": "running"
    }
