from modeltranslation.translator import translator, TranslationOptions
from .models import ProjectsCategory 

class ProjectTranslationOptions(TranslationOptions):
    fields = ('name',) 

    def get_fields(self):
        return super().get_fields()  

translator.register(ProjectsCategory, ProjectTranslationOptions)