import json
from django import template
from django.conf import settings

register = template.Library()

@register.simple_tag
def vite_asset(asset_name):
    manifest_path = settings.VITE_MANIFEST_PATH
    try:
        with open(manifest_path, 'r') as f:
            manifest = json.load(f)
        return settings.STATIC_URL + 'dist/' + manifest[asset_name]['file']
    except (FileNotFoundError, KeyError):
        return asset_name  # Fallback if manifest or asset isn't found