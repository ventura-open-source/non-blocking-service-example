from sanic.response import json

BRANDS = {
    'viventura': 1,
    'puraventura': 2,
    'japaventura': 3,
    'innoventura': 4,
}

def set_brand(app):
    """
    Validate/set the brands and locales per each request
    """
    @app.middleware('request')
    async def compress_request(request):
        project = request.headers.get('x-ventura-project', 'viventura')
        locale = request.headers.get('x-ventura-locale', 'de_DE')

        if not project or not locale:
            return json({'error':'x-ventura-* header is missing'}, 502)

        # set Locale id
        request.headers['locale_id'] = locale
        # set Project id
        request.headers['project_id'] = BRANDS[project]
