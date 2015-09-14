FORMAT: 1A

# PizzaToppings API

### Resource /pizzas [/pizzas]

#### GET

Retrieves a list of pizzas in the system

+ Response 200

    + Schema

            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "toppings": {
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  }
                }
              }
            }

#### POST

Adds a new pizza to the list

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "id",
                "name"
              ],
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "toppings": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            }

+ Response 201

    + Schema

            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "toppings": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "location": {
                  "type": "string"
                }
              }
            }

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "id",
                "name"
              ],
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "toppings": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            }

+ Response 409

    + Schema

            {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }

### Resource /pizzas/{pizzaid} [/pizzas/{pizzaid}]

#### GET

Retrieves an individual pizza

+ Response 200

    + Schema

            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "toppings": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            }

+ Response 404

    + Schema

            {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }



#### PUT

Pizza update

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "id",
                "name"
              ],
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "toppings": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            }

+ Response 204

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "id",
                "name"
              ],
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "toppings": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                }
              }
            }

+ Response 404

    + Schema

            {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }

#### DELETE

Deletes an individual pizza

+ Response 204

+ Response 404

    + Schema

            {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }



### Resource /toppings/ [/toppings/]

#### GET

Retrieves a list of toppings in the system

+ Response 200

    + Schema

            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  }
                }
              }
            }

#### POST

Adds a new topping to the list

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "name"
              ],
              "properties": {
                "name": {
                  "type": "string"
                }
              }
            }

+ Response 201

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "name"
              ],
              "properties": {
                "name": {
                  "type": "string"
                }
              }
            }

+ Response 409

### Resource /toppings/{toppingid} [/toppings/{toppingid}]

#### GET

Retrieves an individual topping

+ Response 200

    + Schema

            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              }
            }

+ Response 404

    + Schema

            {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }

#### PUT

Updates an individual topping

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "id",
                "name"
              ],
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              }
            }

+ Response 204

+ Request

    + Schema

            {
              "type": "object",
              "required": [
                "id",
                "name"
              ],
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              }
            }

+ Response 404


    + Schema

            {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }

#### DELETE

Deletes an individual topping

+ Response 204

+ Response 404

    + Schema

            {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }



