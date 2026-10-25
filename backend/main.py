from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[" http://localhost:5173",
                   "frontend-ten-teal-36.vercel.app"]
)


@app.get('/')
def greetings():
    return "welcome to FastAPI..."

@app.get('/users')
def get_users():
    return{
        "name":"sowmya",
        "age":21,
        "p_no":29991929
    }