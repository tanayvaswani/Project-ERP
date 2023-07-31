from django.db import models


class User(models.Model):
    firstname = models.TextField()
    lastname = models.TextField(blank=True)
    username = models.TextField()
    password = models.CharField(max_length=40)
    email = models.TextField(blank=True)
    course = models.TextField(blank=True)
    contact = models.PositiveBigIntegerField(blank=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"    # __str__ is the special string used to refer to any object of a class, so each record will show by this name in admin panel
    
    class Meta:
        verbose_name_plural = "Users"    # for showing the database by this name in admin panel 
        db_table = 'users'  # for telling what will be the name of the corresponding table in db 


# Note: if any field is empty while adding/updating a record via the admin panel, then it raises an error.
# To prevent that error we use the blank=True attribute