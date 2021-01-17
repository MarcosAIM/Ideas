# Ideas
 # A web application where people discuss ideas

need to setup database

docker-compose run web python manage.py shell
from userauth.models import Thinker
user = Thinker.objects.create_superuser('admin','a@a.com','1111-11-11','admin')
