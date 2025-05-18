
# 🧠 Clarify – Your Voice-Based Smart Tutor

**Clarify** is an intelligent voice-enabled tutor that helps students study through natural conversation. It explains concepts, asks questions, and adapts to each learner — all powered by DeepSeek Prover v2, a cutting-edge model designed for step-by-step reasoning.

## 🎯 Features

- 🎙️ **Voice Chat** – Speak with your tutor using your voice, and get spoken replies.
- 🧠 **Deep Reasoning with DeepSeek Prover v2** – Solve problems together with logical, step-by-step explanations.
- 📚 **Concept Explainer** – Ask questions in science, math, or general subjects and get clear, age-appropriate answers.
- ❓ **Interactive Quizzing** – Test your knowledge through a conversational quiz format.
- 📈 **Adaptive Feedback** – Personalized follow-up questions based on your responses and pace.
- 🗃️ **Learning History** – Review what you’ve covered and suggested next steps.

## 🧰 Tech Stack

| Function               | Tech/Tool                                        |
|------------------------|--------------------------------------------------|
| AI Model               | **DeepSeek Prover v2** (via local or API usage)  |
| Backend / Logic        | Python, Flask or FastAPI                         |
| Voice Input            | `speech_recognition` (microphone-to-text)        |
| Voice Output           | `pyttsx3`, `gTTS`, or ElevenLabs                 |
| Optional Frontend      | Streamlit / React / HTML+JS                      |
| Storage (Progress)     | SQLite / Firebase                                |

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/ai-study-buddy.git
cd ai-study-buddy
```

### 2. Install Requirements
```bash
pip install -r requirements.txt
```

### 3. Set Up Model (DeepSeek Prover v2)

#### Option A: Use Local DeepSeek Prover v2
Make sure you have the model downloaded and installed per [DeepSeek's instructions](https://github.com/deepseek-ai/DeepSeek-Prover).  
Modify `model_handler.py` to load the model from your local setup.

#### Option B: Use DeepSeek via API (if hosted)
Set your `.env` like:
```env
DEEPSEEK_API_KEY=your-api-key
```

### 4. Run the App
```bash
python app.py
```

Speak to your tutor! For example:
> "Explain the Pythagorean theorem."  
> "Can you quiz me on the periodic table?"

## 📸 Demo / Screenshots
_Add GIF or screenshots showing the app in use._

## 🧩 Future Ideas
- Gamification (XP, streaks, badges)
- Visual aids and diagrams
- Emotion detection based on voice tone
- Multilingual support

## 🤝 Contributions Welcome
Please open an issue or pull request if you want to improve the bot or add features.

## ⚠️ Disclaimer
This project is for educational purposes and does not replace formal instruction. Use with appropriate supervision where needed.

## 📄 License
MIT License © 2025 [Your Name]
