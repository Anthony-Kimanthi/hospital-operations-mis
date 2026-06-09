from fastapi import APIRouter


router = APIRouter(
    prefix="/patients",
    tags=["Patients"]
)


@router.get("/")
def get_patients():

    return [
        {
            "patient_no": "P001",
            "first_name": "John",
            "last_name": "Doe"
        }
    ]
