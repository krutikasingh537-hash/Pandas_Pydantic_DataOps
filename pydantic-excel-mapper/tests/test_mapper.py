from pydantic import BaseModel
from pydantic_excel.mapper import ExcelMapper

class RowItem(BaseModel):
    title: str

def test_mapper():
    res = ExcelMapper.map_rows([{"title ": "book"}], RowItem)
    assert res[0].title == "book"
