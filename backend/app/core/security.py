from passlib.context import CryptContext
from datetime import datetime, timedelta
import jwt

SECRET_KEY = "SECRET"
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password):
    return pwd_context.hash(password)

def verify_password(pw, hashed):
    return pwd_context.verify(pw, hashed)

def create_token(data, expires=60):
    to_encode = data.copy()
    to_encode["exp"] = datetime.utcnow() + timedelta(minutes=expires)
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
