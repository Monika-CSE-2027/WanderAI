import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import joblib

# Load dataset
data = pd.read_csv("intent_dataset.csv")

# Train model
model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("clf", MultinomialNB())
])

model.fit(data["text"], data["destination"])

# Save model
joblib.dump(model, "wanderai_model.pkl")

print("✅ Model Trained Successfully!")