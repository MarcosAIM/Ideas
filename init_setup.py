import os
import time
import psycopg2


def try_connect_db():
    try:
        connection = psycopg2.connect(
        dbname='postgres',
        user='postgres',
        password='postgres',
        host='db',
        port=5432
        )
    except psycopg2.OperationalError:
        return False
    else:
        return True


def main():
    retries = 0
    max_tries = 10
    timeout = 5

    while try_connect_db() is False and retries < max_tries:
        print(f"Retry:{retries}")
        time.sleep(timeout)
        retries+=1


    if retries == 10:
        return False
    else:
        os.system('python manage.py migrate')
        os.system('python manage.py runserver 0.0.0.0:8000')

if __name__ == "__main__":
    main()
