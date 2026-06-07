# MLOps

Comprehensive MLOps course repository used throughout the hands-on workshop.

**Overview:**
- This repository contains daily exercises, example projects, and infra examples used to teach practical MLOps concepts: data generation, ETL, model training, Docker, Airflow, and deployment patterns.

**Repository Structure (high level):**
- `day-01/` — project template, starter files, and initial Python examples.
- `day-02/` — data generation and ETL notebooks.
- `day-03/` & `day-03.1/` — Apache Airflow examples, DAGs, Dockerfiles and docker-compose setups.
- `day-04/` — (reserved for exercises and notes).
- `day-05-and-06/` — backend/frontend example, Docker setup, and deployment notes.
- `day-07/` — Prompt Engineering course notes and exercises.
- `day-08-and-10/` — An fun based ML model app using Among Us game, training script, and dataset utilities.

Quick references:
- Notebooks: open the `*.ipynb` files in VS Code or Jupyter Lab.
- Airflow DAGs: see `day-03/dags/` and `day-03.1/dags/`.
- Backend/server example: `day-05-and-06/backend/`.
- Frontend example: `day-05-and-06/frontend/`.

**Quickstart (local, Windows)**
1. Prerequisites: Python 3.8+ (recommended), Docker (optional for container examples), and Git.
2. Create and activate a virtual environment:

    Powershell:

    python -m venv .venv
    .\.venv\Scripts\Activate.ps1

3. Install requirements for a specific day (examples):

    pip install -r day-01/requirements.txt
    pip install -r day-03/requirements.txt

    Note: Several subfolders include their own `requirements.txt` or `pyproject.toml` — install per-folder as needed.

4. Run notebooks:

    jupyter lab

5. Docker / Compose examples:

    docker compose -f day-03.1/docker-compose.yaml up -d

6. Running tests (example):

    pip install pytest
    pytest day-03/tests

**What to look for**
- ETL pipelines and data generation in `day-02/`.
- Airflow examples, Dockerfiles, and environment configs in `day-03/` and `day-03.1/`.
- Full-stack demo and deployment notes in `day-05-and-06/`.
- Training scripts and small app examples in `day-08-and-10/`.

---

# Contributing & Author
- Author: Arthur Thanvir Assif — https://thanvirassif.com
- Connect: https://www.linkedin.com/in/thanvir-assif-1b3435203/
- YouTube: https://www.youtube.com/@thanvirassif731

License
- This repository does not include a license file. Add one if you plan to share or reuse code publicly.

> “Technology is made simple to share the knowledge with everyone.” – Thanvir Assif

---