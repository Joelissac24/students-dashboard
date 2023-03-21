# import route

import tch_details as td
import stud_details as sd
import mapping_details as md
import attendance_details as ad
from starlette.requests import Request
import uvicorn

# import mapping_details as md
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, List

# import stud_details as sd
# import tch_details as td
# import attendance_details as ad
from fastapi.staticfiles import StaticFiles


class Item(BaseModel):
    name: str
    age: int


class Teacher(BaseModel):
    id: Union[int, None] = None
    name: str


class Mapping(BaseModel):
    s_id: int
    t_id: int


class Attendance(BaseModel):
    id: Union[int, None] = None
    attendance: str


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.post("/items/")
async def create_item(item: List[Item]):

    a = [i.__dict__ for i in item]
    re = sd.stud.add(a)


@app.get("/items/{id}")
async def show(id: int):

    data = sd.stud.show(id)
    return data


@app.delete("/items/{id}")
async def delete(id: int):
    sd.stud.delete(id)


@app.put("/items/{data}")
async def edit(item: Item, data: int):

    a = item.__dict__
    sd.stud.edit(a, data)


@app.get("/items/")
async def list_details():
    res = sd.stud.list_details()
    return res


@app.post("/teacher/")
def add_details(item: list[Teacher]):
    a = [i.__dict__ for i in item]
    td.tch.add(a)


@app.put("/teacher/{id}")
def edit(item: Teacher, id: int):
    a = item.__dict__
    td.tch.edit(id, a)


@app.get("/teacher/")
def list_details():
    res = td.tch.list_details()
    return res


@app.get("/teacher/{id}")
def get_detail(id: int):
    res = td.tch.show(id)
    return res


@app.delete("/teacher/{id}")
def delete(id: int):
    td.tch.delete(id)


# MAPPING
@app.post("/mapping/")
def add_details(item: List[Mapping]):
    a = [i.__dict__ for i in item]
    md.mp.add(a)


@app.put("/mapping/{id1}/{id2}")
def edit(id1: int, id2: int):
    res = md.mp.edit(id1, id2)
    return res


@app.get("/mapping/")
def list_details():
    res = md.mp.list_details()
    return res


@app.get("/mapping/{id}/")
def get_detail(id: int):
    res = md.mp.show(id)
    return res


@app.delete("/mapping/{id}")
def delete(id: int):
    md.mp.delete(id)


# Attendance Detail
@app.post("/attendance/")
def add_details(item: List[Attendance]):
    a = [i.__dict__ for i in item]
    ad.at.add(a)


@app.put("/attendance/{id}")
def edit(item: Attendance, id: int):
    a = item.__dict__
    res = ad.at.edit(a, id)
    return res


@app.get("/attendance/")
def list_details():
    res = ad.at.list_details()
    return res


@app.get("/attendance/{id}")
def get_detail(id: int):
    res = ad.at.show(id)
    return res


@app.delete("/attendance/{id}")
def delete(id: int):
    ad.at.delete(id)
