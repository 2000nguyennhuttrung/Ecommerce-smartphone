from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# from django.contrib.auth.models import User


# class UserAccountManager(BaseUserManager):
#     def create_user(self, username, password=None, **extra_fields):
#         user = User.objects.create(username=username, password=password)
#         if user.is_valid():
#             user.save()

#         return user


# class UserAccount(AbstractBaseUser, PermissionsMixin):
#     username = models.CharField(max_length=255, unique=True)
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = UserAccountManager()

#     USERNAME_FIELD = 'username'
#     REQUIRED_FIELDS = ['first_name', 'last_name']

#     # def get_username(self):
#     #     return self.username

#     def get_full_name(self):
#         return self.first_name

#     def get_short_name(self):
#         return self.first_name

#     def __str__(self):
#         return self.email
