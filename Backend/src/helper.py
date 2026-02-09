import fitz
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
os.environ["GOOGLE_API_KEY"] = GOOGLE_API_KEY

client = genai.client(api_key=GOOGLE_API_KEY)



def extract_text_from_pdf(uploaded_file):
    doc = fitz.open(stream=uploaded_file.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text


def ask_gemini(prompt, max_tokens=500):

    model = genai.GenerativeModel("gemini-flash-latest")

    response = model.generate_content(
        contents=[
            {
                "role": "user",
                "parts": [{"text": prompt}]
            }
        ],
        generation_config={
            "temperature": 0.5,
            "max_output_tokens": max_tokens
        }
    ) 
    return response.text




