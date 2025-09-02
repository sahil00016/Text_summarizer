# Text Summarizer (T5 + FastAPI + React)

![License](https://img.shields.io/badge/license-MIT-green)
![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.70.0-009688?logo=fastapi)
![Node](https://img.shields.io/badge/Node-16%2B-339933?logo=node.js)
![React](https://img.shields.io/badge/React-17-61DAFB?logo=react)
![Stars](https://img.shields.io/github/stars/sahil00016/Text_summarizer?style=social)
![Issues](https://img.shields.io/github/issues/sahil00016/Text_summarizer)
![PRs](https://img.shields.io/github/issues-pr/sahil00016/Text_summarizer)

An end-to-end text summarization app:
- A fine-tuned T5 model (BBC News dataset) served via FastAPI
- A React frontend to input text, get summaries, and compute ROUGE metrics

Screenshot examples live in `img/`.

## Demo GIF
![Demo](img/demo.gif)

## Screenshot
<img width="1352" height="726" alt="image" src="https://github.com/user-attachments/assets/4f850335-b301-4867-8063-94a264d48874" />


## Repository
- GitHub: https://github.com/sahil00016/Text_summarizer

## Quickstart

Clone and enter the project:
```bash
git clone https://github.com/sahil00016/Text_summarizer.git
cd Text_summarizer
```

### Backend (FastAPI)
Requirements: Python 3.10
```bash
cd backend
python -m venv .venv
# Windows PowerShell
./.venv/Scripts/Activate.ps1
# macOS/Linux
# source .venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```
Open API docs: http://localhost:8000/docs

Notes
- First run downloads model files (~1–2 GB)
- Uses safetensors for safe model loading and pins numpy<2 for compatibility

### Frontend (React)
Requirements: Node 16+ (Node 22 supported via OpenSSL compatibility baked into start script)
```bash
cd frontend
npm install
npm start
```
Open http://localhost:3000

### Configuration
- Backend runtime settings: `backend/app/core/config.py` (environment variables supported)
- Frontend API base URL: `frontend/src/utils/api.js`

## Docker (optional)
Build and run services via Compose:
```bash
docker-compose -f docker-compose.yml up -d
```
Then open:
- Frontend: http://localhost:3000
- Backend:  http://localhost:8000/docs

## Project Structure
```text
text_summarization/
  backend/      # FastAPI app, model loading, API routes
  frontend/     # React app (Create React App)
  notebooks/    # Optional experimentation & dataset exploration
  packages/     # Helper modules
  img/          # Diagrams & screenshots
```

## Features
- T5-based abstractive summarization
- Pretrained and fine-tuned variants (select from UI)
- ROUGE metrics when a reference summary is provided
- REST API with OpenAPI/Swagger docs

## Troubleshooting
- Frontend OpenSSL error on Node ≥17:
  - Already handled via `cross-env NODE_OPTIONS=--openssl-legacy-provider` in `package.json`
  - If issues persist, use Node 16 (e.g., nvm-windows) or Yarn v1
- Backend model download slow/blocked:
  - Ensure internet access and >3 GB free disk space
  - Pre-download by running once locally

## Notebooks (optional)
If you want to run the notebooks:
```bash
conda env create --name text --file text.yml
conda activate text
jupyter lab
```
If needed for private models: `huggingface-cli login`

## Dataset
BBC News Summary dataset. See `report/` and BBC dataset page: http://mlg.ucd.ie/datasets/bbc.html

## License
MIT

## Credits
- Hugging Face examples: https://github.com/huggingface/notebooks/blob/master/examples/summarization.ipynb
- Blueprints for text analytics: https://github.com/blueprints-for-text-analytics-python/blueprints-text
- BertViz: https://github.com/jessevig/bertviz

