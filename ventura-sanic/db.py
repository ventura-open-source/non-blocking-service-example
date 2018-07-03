import logging
import peewee_async

# Setup mysql connection
database = peewee_async.MySQLDatabase(
    'ventura_laravel',
    user='root',
    password='root',
    host='localhost',
    port=3306,
)

# No need for sync anymore!
database.set_allow_sync(False)

# Create async models manager
objects = peewee_async.Manager(database)
