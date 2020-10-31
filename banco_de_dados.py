from pydantic import BaseModel

# product
class Product(BaseModel):
    id: int
    name: str
    price: str

base_products = [
    Product(id=0, name="Computador", price="1000"),
    Product(id=1, name="Monitor", price="400"),
    Product(id=2, name="Mouse", price="50")
]

# product
class Loja(BaseModel):
    id: int
    name: str
    url: str

base_lojas = [
    Loja(id=0, name="Computador", url="1000"),
    Loja(id=1, name="Monitor", url="400"),
    Loja(id=2, name="Mouse", url="50")
]