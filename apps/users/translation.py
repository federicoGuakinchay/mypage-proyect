from modeltranslation.translator import translator, TranslationOptions
from .models import UserAccount 

class UserTranslationOptions(TranslationOptions):
    fields = ('bio',) 

    def get_fields(self):
        return super().get_fields()  

translator.register(UserAccount, UserTranslationOptions)