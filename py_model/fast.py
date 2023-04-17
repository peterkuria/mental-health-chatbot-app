from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
from tlmodel import generate_response


fast = FastAPI()

class UserInput(BaseModel):
    user_input: str

@fast.post("/chatbot")
async def chatbot_response(user_input: dict):
    user_input = UserInput(**user_input)
    response = generate_response(user_input.user_input)
    return {"response": response}


if __name__ == "__main__":
    uvicorn.run(fast, host="10.55.4.85", port=8000)

