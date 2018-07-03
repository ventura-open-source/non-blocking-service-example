from sanic import Sanic
from sanic.response import json
from sanic_cors import CORS, cross_origin

from db import objects
from models.trip import Trip
from middleware import set_brand

app = Sanic()

# setup some middlewares
CORS(app) # enable CORS
set_brand(app) # custom middleware

@app.route("/")
async def test(request):
    return json({ "data": "Welcome from python" })

@app.route("/trips")
async def test(request):
    page = request.args.get('page', 1)
    limit = request.args.get('limit', 10)
    trips = await objects.execute(
        Trip.select()
        .where(Trip.project_id == request.headers['project_id'])
        .where(Trip.locale_id == request.headers['locale_id'])
        .order_by(Trip.cached_margin.desc())
        .paginate(int(page), int(limit))
    )
    return json({ "data": trips })

# start server
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001)
