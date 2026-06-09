from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


DATABASE_URL = (
    "postgresql://homis:homis123@localhost:5432/homis"
)


engine = create_engine(
    DATABASE_URL
)


SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
