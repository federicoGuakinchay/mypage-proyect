from modeltranslation.translator import translator, TranslationOptions
from .models import Post  

class PostTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'content') 

    def get_fields(self):
        return super().get_fields()  

translator.register(Post, PostTranslationOptions)