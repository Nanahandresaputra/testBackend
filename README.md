# Dokumentasi

### Promo

#### Update Promo

mengupdate promo setelah melakukan requiest

```http
 PUT http://localhost:3000/api/promo/{promo_id}
```

![](https://github.com/Nanahandresaputra/testBackend/blob/main/image.jpg)

#### Get all items

```http
 GET https://list-product-api.cyclic.app/api/product
```

#### Get one item

```http
GET http://localhost:3000/api/promo/{promo_id}
```

#### Add item

menambahkan promo

```http
 POST  http://localhost:3000/api/promo/
```

endpoint:

```json
{
  "nama_promo": "Gebyar 100K"
}
```

#### Delete item

menghapus promo

```http
 DELETE http://localhost:3000/api/promo/{promo_id}
```

#### \*NOTE: untuk booking bus belum selesai dikerjakan
