import joblib

model = joblib.load("wanderai_model.pkl")

while True:
    text = input("You: ")
    prediction = model.predict([text])[0]
    print("WanderAI:", prediction)