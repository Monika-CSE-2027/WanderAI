const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("✅ WanderAI Backend Running...");
});

// Chat route
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        console.log("📩 Message from Frontend:", message);

        const response = await axios.post(
            "http://127.0.0.1:5001/predict",
            {
                message: message
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("🤖 Prediction from Flask:", response.data);

        res.status(200).json(response.data);

    } catch (error) {

        console.error("❌ Error communicating with Flask");

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Response:", error.response.data);
        } else {
            console.error(error.message);
        }

        res.status(500).json({
            error: "ML Server Error"
        });
    }
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Express Server Running on http://localhost:${PORT}`);
});