from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load("wanderai_model.pkl")

@app.route("/")
def home():
    return "✅ Flask ML Server Running..."

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    message = data.get("message", "")

    print("Received:", message)

    # Get prediction probabilities
    probabilities = model.predict_proba([message])[0]

    confidence = max(probabilities)

    prediction = model.predict([message])[0]

    print("Prediction:", prediction)
    print("Confidence:", confidence)

    # If confidence is low, return no destination
    if confidence < 0.25:
        return jsonify({
            "destination": None,
            "reply": "I can only answer travel-related questions."
        })

    return jsonify({
        "destination": prediction
    })


if __name__ == "__main__":
    app.run(debug=True, port=5001)