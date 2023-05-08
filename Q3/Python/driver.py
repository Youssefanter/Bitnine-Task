import psycopg2
import simplejson as json
from psycopg2.extras import RealDictCursor,Json

def get_data_as_json():
    conn=psycopg2.connect("dbname=postgres user=postgres password=yooiioo123")

    cur=conn.cursor(cursor_factory=RealDictCursor)

    cur.execute("SELECT * FROM user_table")

    rows=cur.fetchall()
    status=200

    rows=[Json(row,dumps=json.dumps) for row in rows]

    cur.close()
    conn.close()

    return status,rows


