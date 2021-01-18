# start from python image
FROM python:3.9.1-alpine3.12

# set environment variables
ENV PYTHONUNBUFFERED=1

# set working directory
WORKDIR /app

# copy requirements.txt from docs into working directory
COPY requirements.txt .

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

# install dependencies
RUN pip install -r requirements.txt

# copy rest of web to app
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
