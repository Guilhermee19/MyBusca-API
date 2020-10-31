from fastapi import FastAPI
from pydantic import BaseModel

import banco_de_dados as banco

Product = banco.Product
base_products = banco.base_products

app = FastAPI()

## GET all product ##
@app.get("/product")
def get_all_products():
    return base_products

## GET produtc id ##
@app.get("/product/{id_product}")
def get_product_id(id_product: int):
    for product in base_products:
        if(product.id == id_product):
            return product
    
    return {"Status": 404, "Mensagem": "Produto não encontrado."}

## POST new produtc ##
@app.post("/new_product")
def creat_new_product(product: Product):
    base_products.append(product)
    return product

