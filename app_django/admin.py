from django.contrib import admin
from . models import User
from import_export.admin import ExportActionMixin
from django.contrib.sessions.models import Session

# customising admin for 'user' table
class UserAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ['username', 'password', 'email', 'course',] # telling which fields to display
    list_filter = ['course',]         # for adding filter option
    search_fields = ['username',]         # for adding search option

# when admin.site.register takes two arguements then 1st one is Model Class (table) and 2nd one its corresponding custom Admin Class
admin.site.register(User,UserAdmin)

admin.site.register(Session)