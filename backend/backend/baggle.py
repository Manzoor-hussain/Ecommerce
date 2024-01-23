import sys
import os
from langchain.document_loaders import PyPDFLoader
from langchain.document_loaders import Docx2txtLoader
from langchain.document_loaders import TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chains.question_answering import load_qa_chain
from langchain import PromptTemplate
from langchain import VectorDBQA
from langchain.chat_models import ChatOpenAI
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from PyPDF2 import PdfWriter, PdfReader
import os
import glob
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from langchain.text_splitter import CharacterTextSplitter
from langchain.prompts import PromptTemplate
import glob
from docx import Document
import time
import os
from werkzeug.utils import secure_filename







from flask import Flask, request, jsonify
from Chat_Bot import Southlake_Bot
from collections import deque
import json






OPENAI_API_KEY = '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'
os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY
embeddings = OpenAIEmbeddings()
app = Flask(__name__)

def get_raw_context(doc_path):
    if doc_path.endswith('.docx') or doc_path.endswith('.doc'):
            doc = Document(doc_path)
            raw_context = ""
            for paragraph in doc.paragraphs:
                raw_context += paragraph.text
                
    if doc_path.endswith('.pdf'):
        raw_context = ""
        reader = PdfReader(doc_path)
        page_texts = [page.extract_text() for page in reader.pages]
        raw_context = raw_context + " ".join(page_texts) + "\n\n"

    return raw_context
        
        

def get_pdf_embeddings(input_path):
    raw_context=''
    for one_file in input_path:
        print("one",one_file)
        raw_context += get_raw_context(one_file)
    
    splitter = CharacterTextSplitter(' ', chunk_size=1200, chunk_overlap=200)
    context = splitter.split_text(raw_context)

    db = FAISS.from_texts(texts=context, embedding = embeddings)
    db.save_local(os.getcwd() + "/chatbott")
# conversations_dir = "/home/ubuntu/chatbot_southlake/conversations/"
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)
ALLOWED_EXTENSIONS = {'pdf', 'docx'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



directory_path = os.path.join(os.getcwd(), "uploads")
file_pattern = os.path.join(directory_path, "*")
pdf_files = glob.glob(file_pattern)
get_pdf_embeddings(pdf_files)




if __name__ == '__main__':
    app.run(host='0.0.0.0', port="8002")