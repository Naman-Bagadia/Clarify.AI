from flask import Flask, render_template, request, jsonify
from ai_handler import get_ai_response

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('chat.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    response = get_ai_response(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
