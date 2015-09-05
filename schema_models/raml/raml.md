#%RAML 0.8
title: Pizza Toppings
version: 1.0.0
baseUri: http://api.irresistibleapis.com/v1
/pizzas:
  displayName: Pizza list
  get:
    description: Get a list of pizzas
    queryParameters:
      q:
        description: String to match in the pizza name
        displayName: Search string
        type: string
        example: Maui
        required: false
      topping:
        displayName: Topping ID
        type: string
        description: List of pizzas with a particular topping
        example: 3
        required: false
        
    responses:
      200:
        body:
          application/json:
            example: |
                  { "pizzas": [{
                    "id": "123.123.123.123",
                    "name": "Maui Wowie",
                    "toppings":["1"] 
                  },
                  { 
                    "id": "123.123.123.234",
                    "name": "Kirsten's Pizza" ,
                    "toppings":["2","3"]
                  }],
                  "success": true,
                  "status": 200 
                  }


  post:
    description: Add a pizza to a list
    body:
      application/json:
        example: |
          { "pizza" : {
            "name": "Maui Wowie",
            "id"  : "123.456.789.101"
          },
          "location" : "/pizzas/123.456.789.101"
          }
    responses:
      201:
        description: Pizza created
          
      409:
        body:
         application/json:
           example: |
            { "message" : "Duplicate pizza name|id found" }


  /{pizzaid}:
    displayName: Individual pizza
    get:
      description: Show an individual pizza
      responses:
        200:
          body:
           application/json:
              example: |
                { "pizza" : {
                  "name" : "Maui Zowie",
                  "id"  : "123.234.345.123",
                  "toppings" : ["1","2"]
                }}
        404:
          body:
           application/json:
            example: |
              { "message" : "Pizza not found" }

    put:
      description: Update an existing pizza
      body:
        application/json:
          example: |
            { "pizza" : {
              "name": "Maui Wowie",
              "id"  : "123.456.789.101",
              "toppings": ["1"]
            }
      responses:
        204:
        400:
          body:
            application/json:
              example: |
                { "message" : "Missing id|name" }                
        404:
          body:
            application/json:
              example: |
                { "message" : "pizza not found" }
        409:
          body:
            application/json:
              example: |
                { "message" : "Duplicate pizza name" }
        
    delete:
      description: Delete a pizza from the list
      responses:
        204:
        404:
          body:
            application/json:
              example: |
                { "message" : "Pizza not found" }
              
/toppings:
    displayName: Topping list
    get:
      responses:
        200:
          body:
            application/json:
              example: |
                  { "toppings": [{
                    "id": "1",
                    "name": "pepperoni" 
                  },
                  { 
                    "id": "2",
                    "name": "pineapple" 
                  },
                  { 
                    "id": "3",
                    "name": "ham" 
                  }],
                  "success": true,
                  "status": 200 
                  }
    post:
      description: Add a pizza to a list
      body:
        application/json:
          example: |
            { "topping" : {
              "name": "salami"
              },
            "location" : "/toppings/4"
            }
      responses:
        201:
          description: Topping created
          
        409:
          body:
           application/json:
             example: |
              { "message" : "Duplicate topping name found" }    
/{toppingid}:
    displayName: Individual topping
    get:
      description: Show an individual topping
      responses:
        200:
          body:
           application/json:
              example: |
                { "topping" : {
                  "name" : "pepperoni",
                  "id"  : "2"
                }}
        404:
          body:
           application/json:
            example: |
              { "message" : "Topping not found" }

    put:
      description: Update an existing topping
      body:
        application/json:
          example: |
            { "pizza" : {
              "name": "Zucchini",
              "id"  : "4"
            }
      responses:
        204:
        400:
          body:
            application/json:
              example: |
                { "message" : "Missing name" }                
        404:
          body:
            application/json:
              example: |
                { "message" : "topping not found" }
        409:
          body:
            application/json:
              example: |
                { "message" : "Duplicate topping name" }
        
    delete:
      description: Delete a pizza from the list
      responses:
        204:
        404:
          body:
            application/json:
              example: |
                { "message" : "Topping not found" }
