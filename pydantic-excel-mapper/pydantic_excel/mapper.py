from typing import Type, TypeVar, List, Dict
from pydantic import BaseModel

T = TypeVar('T', bound=BaseModel)

class ExcelMapper:
    @staticmethod
    def map_rows(rows: List[Dict], model_cls: Type[T]) -> List[T]:
        return [model_cls.model_validate({k.strip(): v for k, v in r.items() if k}) for r in rows]
