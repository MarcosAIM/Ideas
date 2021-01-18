from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


#User Manager
class UserManagerProfile(BaseUserManager):
    def create_user(self,username,email,date_of_birth,password=None):
        if not username:
            raise ValueError("users must have an username.")

        user = self.model(
            username = username,
            email = self.normalize_email(email),
            date_of_birth = date_of_birth,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, date_of_birth, password=None):
        user = self.create_user(
            username,
            email,
            date_of_birth,
            password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

#User Class
class Thinker(AbstractBaseUser):
    username = models.CharField(
    max_length=30,
    unique=True,
    )

    email = models.EmailField(
    verbose_name="email address",
    max_length=254,
    unique=True,
    )

    date_of_birth = models.DateField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManagerProfile()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'

    REQUIRED_FIELDS = ['date_of_birth']


    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
