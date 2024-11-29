from modeltranslation.translator import translator, TranslationOptions
from .models import Project  

class ProjectTranslationOptions(TranslationOptions):
    fields = ('content',) 

    def get_fields(self):
        return super().get_fields()  

translator.register(Project, ProjectTranslationOptions)