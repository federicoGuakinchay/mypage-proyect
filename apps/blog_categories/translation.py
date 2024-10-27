from modeltranslation.translator import translator, TranslationOptions
from .models import BlogCategory 

class BlogCategoryTranslationOptions(TranslationOptions):
    fields = ('name',) 

    def get_fields(self):
        return super().get_fields()  

translator.register(BlogCategory, BlogCategoryTranslationOptions)