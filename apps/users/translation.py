from modeltranslation.translator import translator, TranslationOptions
from .models import UserAccount 

#  Description  is goin to be  showed  in the  main page  for that it need to have a traduction
class UserTranslationOptions(TranslationOptions):
    fields = ('description',) 

    def get_fields(self):
        return super().get_fields()  

translator.register(UserAccount, UserTranslationOptions)