import os


def main():
    os.system('python manage.py migrate')
    os.system('python manage.py runserver 0.0.0.0:8000')

if __name__ == "__main__":
    main()
