# Response Format

## Table of content
[GetRoutes](#getroutes)\
[PutRoutes](#putroutes)\
[CreateRoutes](#createroutes)\
[DeleteRoutes](#deleteroutes)

## GetRoutes

For get routes to get every row of a table, simply use get request to there respective endpoint
For get routes to get a single row, simply use a get request with there respective endpoint with "/id" id being the id of the desired row
<details>
<summary>Get-Products-Format</summary>

``` JSON
[ //ARRAY OF ALL CATEGORIES
    {
		"id": 1,
		"product_name": "Plain T-Shirt",
		"price": "14.99",
		"stock": 14,
		"category_id": 1,
		"category": {
			"id": 1,
			"category_name": "Shirts"
		},
		"tags": [//ARRAY OF ALL TAGS FOR THIS CATEGORIES
			{
				"id": 6,
				"tag_name": "white",
				"product_tag": {
					"id": 1,
					"product_id": 1,
					"tag_id": 6
				}
			},
        ],
    }
]
```
</details>
<details>
<summary>Get-Tags-Format</summary>

```JSON
[ //ARRAY OF ALL TAGS
	{
		"id": 6,
		"tag_name": "white",
		"products": [ //ARRAY OF ALL PRODUCTS WITH THIS TAG
			{
				"id": 1,
				"product_name": "Plain T-Shirt",
				"price": "14.99",
				"stock": 14,
				"category": {
					"id": 1,
					"category_name": "newCategoryName"
				}
			},
        ],
    }
]
```
</details>
<details>
<summary>Get-Categories-Format</summary>

```JSON
[ //ARRAY OF ALL CATEGORIES
	{
		"id": 1,
		"category_name": "Shirts",
		"products": [ //ARRAY OF ALL PRODUCTS BELONGING TO SAID CATEGORY
			{
				"id": 1,
				"product_name": "Plain T-Shirt",
				"price": "14.99",
				"stock": 14,
				"category_id": 1,
				"categoryId": 1
			},
		],
	},
]
```
</details>
<details>
<summary>Get-1-Product-Format</summary>

```JSON
//SELECTED PRODUCT
{
    "id": 1,
    "product_name": "Plain T-Shirt",
    "price": "14.99",
    "stock": 14,
    "category_id": 1,
    "category": {
        "id": 1,
        "category_name": "Shirts"
    },
    "tags": [ //ARRAY OF TAGS RELATED TO THIS PRODUCT
        {
            "id": 6,
            "tag_name": "white",
            "product_tag": {
                "id": 1,
                "product_id": 1,
                "tag_id": 6
            }
        },
    ],
}
```
</details>
<details>
<summary>Get-1-Tag-Format</summary>

```JSON
{ //SELECTED TAG
	"id": 2,
	"tag_name": "pop music",
	"products": [ //ARRAY OF PRODUCTS CONNECTED TO THE THE TAGS
		{
			"id": 4,
			"product_name": "Top 40 Music Compilation Vinyl Record",
			"price": "12.99",
			"stock": 50,
			"category": {
				"id": 3,
				"category_name": "Music"
			}
		},
    ],
}
```
</details>
<details>
<summary>Get-1-Category-Format</summary>

```JSON
{ //SELECTED CATEGORIES
	"id": 1,
	"category_name": "Shirts",
	"products": [ //ARRAY OF PRODUCTS RELATED TO THIS CATEGORIES
		{
			"id": 1,
			"product_name": "Plain T-Shirt",
			"price": "14.99",
			"stock": 14,
			"category_id": 1,
			"categoryId": 1
		},
	],
}
```
</details>

## PutRoutes

<details>
<summary>Update-Tag-Format</summary>

```JSON
//REQUEST BODY
{
	"name": "newName"
}
//RESPONSE 
[
	1, //AMOUNT OF ROWS UPDATED
	[
		{ //UPDATED INFORMATION
			"id": 2,
			"tag_name": "newName"
		}
	]
]
```
</details>
<details>
<summary>Update-Category-Format</summary>

```JSON
//REQUEST BODY
{
	"name":"newCategoryName"
}
//RESPONSE 
[
	1, //AMOUNT OF ROW UPDATED
	[ //UPDATED ROW
		{
			"id": 1,
			"category_name": "newCategoryName"
		}
	]
]
```
</details>
<details>
<summary>Update-Product-Format</summary>

```JSON
//REQUEST BODY
{
    "product_name": "NewName",
    "price": 200, //AUTOMATICALLY CONVERTS TO DECIMAL WITH TWO DECIMAL POINTS
    "stock": 3,
    "tagIds": [1, 2, 3, 4],
    "categoryId": 2
}
//RESPONSE 
[
	1, //AMOUNT OF ROWS UPDATED
	[
		{
			"id": 6,
			"product_name": "NewName",
			"price": "200.00",
			"stock": 3,
			"categoryId": 2
		}
	]
]
```
</details>

### CreateRoutes

<details>
<summary>Create-Product-Format</summary>

```JSON
//REQUEST BODY
{
    "product_name": "NewName",
    "price": 200, //AUTOMATICALLY CONVERTS TO DECIMAL WITH TWO DECIMAL POINTS
    "stock": 3,
    "tagIds": [1, 2, 3, 4],
    "categoryId": 2
}
//RESPONSE 
[ //ARRAY OF PRODUCT/TAG TABLE ROWS ADDED 
	{
		"id": 13,
		"productId": 6,
		"tagId": 1
	},
	{
		"id": 14,
		"productId": 6,
		"tagId": 2
	},
	{
		"id": 15,
		"productId": 6,
		"tagId": 3
	},
	{
		"id": 16,
		"productId": 6,
		"tagId": 4
	}
]
```
</details>
<details>
<summary>Create-Category-Format</summary>

```JSON
//REQUEST BODY
{
	"name":"NewName"
}
//RESPONSE 
{ //New Category 
	"id": 6,
	"category_name": "NewName"
}
```
</details>
<details>
<summary>Create-Tag-Format</summary>

```JSON
//REQUEST BODY
{
	"name":"newName"
}
//RESPONSE 
{ //NEW TAG
	"id": 9,
	"tag_name": "wires"
}
```
</details>

## DeleteRoutes

For all delete routes, simply add the id of the row you wish to delete to the path parameter. This will send back the number of row deleted
which should be one.
