import os
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate


model = ChatGroq(groq_api_key=os.environ["GROQ_API_KEY"], model_name="llama-3.1-70b-versatile")

# Prompt for generating a roadmap which includes the topics and subtopics related to the roadmap title
prompt = ChatPromptTemplate.from_template("""
    You are                                    
    Formatting Instructions: {format_instructions}
    """)