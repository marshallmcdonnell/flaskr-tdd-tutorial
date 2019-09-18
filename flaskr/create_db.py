# create_db.py


from flaskr.app import db
from flaskr.models import Flaskr


# create the database and the db table
db.create_all()

# commit the changes
db.session.commit()
