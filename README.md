# 🌍 WanderAI – AI-Based Smart Travel Planning Website

WanderAI is an AI-powered travel planning website with an intelligent chatbot that helps users discover suitable travel destinations based on their preferences. The application uses Machine Learning and Natural Language Processing (NLP) to understand travel-related queries and provide personalized travel recommendations.

🌐 **Live Demo:** https://wanderai-monika.netlify.app

---

## 🚀 Features

- 🤖 AI-powered Travel Chatbot
- 🧠 Machine Learning-based Destination Recommendation
- 🌴 Personalized Travel Suggestions
- ✈️ Interactive Travel Planning
- 🔗 Flask API Integration with Node.js

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Machine Learning
- Python
- Flask
- Scikit-learn
- Pandas
- Joblib

### Machine Learning Techniques
- TF-IDF Vectorization
- Multinomial Naive Bayes

---

## 📂 Project Structure

```text
WanderAI
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
├── ml
│   ├── app.py
│   ├── train_intent.py
│   ├── intent_dataset.csv
│   ├── wanderai_model.pkl
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

---

## ⚙️ System Architecture

```text
                User
                  │
                  ▼
     HTML • CSS • JavaScript
          (Frontend UI)
                  │
                  ▼
       Node.js + Express.js
                  │
        HTTP POST Request
                  │
                  ▼
            Flask API
                  │
                  ▼
     TF-IDF + Naive Bayes Model
                  │
                  ▼
      Predict Travel Destination
                  │
                  ▼
           Flask Response
                  │
                  ▼
     Travel Plan Displayed
```

---

## 🎯 Supported Destinations

-  Goa
-  Ooty
-  Munnar
-  Kodaikanal
-  Pondicherry
-  Manali

---

## 🤖 How It Works

1. User enters a travel-related query.
2. Frontend sends the query to the Node.js backend.
3. Node.js forwards the request to the Flask API.
4. The Machine Learning model predicts the best travel destination.
5. Flask returns the prediction to Node.js.
6. The frontend displays:
   - Recommended Destination
   - Budget
   - Best Season
   - Day-wise Itinerary

---

## 🌐 Live Deployment

**Frontend**

https://wanderai-monika.netlify.app

**Backend API**

https://wanderai-backend-zr0k.onrender.com

**Machine Learning API**

https://wanderai-tsh7.onrender.com

---

## 👩‍💻 Author

**Monika L**

B.E. Computer Science and Engineering

Grace College of Engineering

---

## 📚 Future Enhancements

- User Login & Registration
- Hotel Recommendation System
- Flight Booking Integration
- Weather Forecast
- Google Maps Integration
- Voice-based Chatbot
- Multilingual Support
- Real-time Travel Updates

---

## 📄 License

This project is developed for educational and internship purposes.

© 2026 Monika L. All Rights Reserved.
