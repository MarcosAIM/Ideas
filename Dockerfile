FROM python:3.9
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY docs/requirements.txt /app/
RUN pip install -r requirements.txt
COPY . /app/
