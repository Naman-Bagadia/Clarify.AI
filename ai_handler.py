from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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",
)

def get_ai_response(message):
    try:
        completion = client.chat.completions.create(
            model="qwen/qwen3-30b-a3b:free",
            messages=[
                {"role": "user", "content": message}
            ],
            extra_headers={
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "Clarify",
            }
        )
        return completion.choices[0].message.content
    except Exception as e:
        print("Error:", e)
        return "Something went wrong. Please try again later."
