import logging
import db_connector as dc

logging.basicConfig(level=logging.INFO)


class Student:
    def add(self, values: list):
        for name in values:
            dc.mycursor.execute(
                "insert into student_details(student_name,student_age) values(%(name)s,%(age)s)",
                name,
            )
        logging.info("Adding Details to Database")
        dc.mydb.commit()

    def edit(self, val2: dict, data: int):
        val2["id"] = data
        query = "UPDATE student_details set student_name=%(name)s,student_age=%(age)s where id=(%(id)s)"
        logging.info("Editing Details in Database")
        dc.mycursor.execute(query, val2)
        dc.mydb.commit()

    def list_details(self):
        operation = "select * FROM student_details "
        dc.mycursor.execute(operation, multi=True)
        logging.info("Retrieving All Information form Database")
        data = dc.mycursor.fetchall()
        return data

    def show(self, id: int):
        dc.mycursor.execute("select * FROM student_details where id=%s", (id,))
        logging.info("Processing in Database")
        row = dc.mycursor.fetchone()
        return row

    def delete(self, id: int):
        logging.info("Deleting Detail form Database")
        dc.mycursor.execute("DELETE  FROM student_details where id=%s", (id,))
        dc.mydb.commit()


stud = Student()
