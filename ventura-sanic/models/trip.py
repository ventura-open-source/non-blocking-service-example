import datetime
import peewee
from db import database

class Trip(peewee.Model):
    id = peewee.PrimaryKeyField(null=False)
    trip_type_id = peewee.IntegerField()
    locale_id = peewee.CharField(max_length=7)
    project_id = peewee.BigIntegerField()
    code = peewee.CharField(unique=True, max_length=7)
    name = peewee.CharField()
    emotional_headline = peewee.CharField()
    introduction = peewee.TextField()
    highlights_description = peewee.CharField()
    included_services = peewee.TextField()
    excluded_services = peewee.TextField()
    highlight1 = peewee.CharField()
    highlight2 = peewee.CharField()
    highlight3 = peewee.CharField()
    highlight4 = peewee.CharField()
    usp1 = peewee.CharField()
    usp2 = peewee.CharField()
    usp3 = peewee.CharField()
    usp4 = peewee.CharField()
    video_url = peewee.CharField()
    default_max_no_of_pax = peewee.IntegerField()
    cached_number_of_trip_days = peewee.IntegerField()
    cached_margin = peewee.BigIntegerField()
    cached_amount_of_feedback = peewee.BigIntegerField()
    cached_average_evaluation = peewee.FloatField()
    created_at = peewee.DateTimeField(default=datetime.datetime.now)
    updated_at = peewee.TimestampField()

    class Meta:
        database = database
        db_table = "trip"

# Trip.create_table(True)

