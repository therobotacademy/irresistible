{
    "swagger": "2.0",
    "info": {
        "title": "PizzaToppings API",
        "version": "1.0.1"
    },
    "host": "api.irresistibleapis.com",
    "basePath": "/v1",
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "paths": {
        "/pizzas": {
            "get": {
                "description": "Retrieves a list of pizzas in the system",
                "parameters": [
                    {
                        "description": "String to match in the pizza name",
                        "in": "query",
                        "name": "nameString",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Pizza list",
                        "examples": {
                            "application/json": [
                                {
                                    "id": 1,
                                    "name": "Maui Wowie",
                                    "toppings": [
                                        2,
                                        3
                                    ]
                                },
                                {
                                    "id": 2,
                                    "name": "Kirsten's Pizza",
                                    "toppings": [
                                        1
                                    ]
                                }
                            ]
                        },
                        "schema": {
                            "type": "array",
                            "items": "object"
                        }
                    }
                }
            },
            "post": {
                "description": "Adds a new pizza to the list",
                "parameters": [
                    {
                        "description": "ID for the pizza (only one per user)",
                        "in": "body",
                        "name": "id",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "description": "Name for the pizza",
                        "in": "body",
                        "name": "name",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "description": "Toppings on the pizza",
                        "in": "body",
                        "name": "toppings",
                        "required": false,
                        "type": "array"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Pizza created",
                        "examples": {
                            "application/json": [
                                {
                                    "id": 1,
                                    "location": "/pizzas/1.2.3.4",
                                    "name": "Maui Wowie",
                                    "toppings": [
                                        2,
                                        3
                                    ]
                                }
                            ]
                        }
                    },
                    "409": {
                        "description": "Duplicate pizza name or ID found",
                        "examples": {
                            "application/json": [
                                {
                                    "message": "Duplicate pizza ID found"
                                }
                            ]
                        }
                    }
                }
            }
        },
        "/pizzas/{pizzaid}": {
            "get": {
                "description": "Retrieves an individual pizza",
                "responses": {
                    "200": {
                        "description": "Pizza ",
                        "examples": {
                            "application/json": {
                                "id": 1,
                                "name": "Maui Wowie",
                                "toppings": [
                                    2,
                                    3
                                ]
                            }
                        },
                        "schema": {
                            "type": "object"
                        }
                    },
                    "404": {
                        "description": "Pizza not found",
                        "examples": {
                            "application/json": {
                                "message": "No pizza with that ID found"
                            },
                            "schema": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "put": {
                "description": "Updates an individual pizza",
                "responses": {
                    "204": {
                        "description": "Pizza updated"
                    },
                    "404": {
                        "description": "Pizza not found",
                        "examples": {
                            "application/json": {
                                "message": "No pizza with that ID found"
                            },
                            "schema": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "delete": {
                "description": "Deletes an individual pizza",
                "responses": {
                    "204": {
                        "description": "Pizza deleted"
                    },
                    "404": {
                        "description": "Pizza not found",
                        "examples": {
                            "application/json": {
                                "message": "No pizza with that ID found"
                            },
                            "schema": {
                                "type": "object"
                            }
                        }
                    }
                }
            }
        },
        "/toppings/": {
            "get": {
                "description": "Retrieves a list of pizzas in the system",
                "parameters": [
                    {
                        "description": "String to match in the pizza name",
                        "in": "query",
                        "name": "nameString",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Pizza list",
                        "examples": {
                            "application/json": [
                                {
                                    "id": 1,
                                    "name": "Maui Wowie",
                                    "toppings": [
                                        2,
                                        3
                                    ]
                                },
                                {
                                    "id": 2,
                                    "name": "Kirsten's Pizza",
                                    "toppings": [
                                        1
                                    ]
                                }
                            ]
                        },
                        "schema": {
                            "type": "array",
                            "items": null
                        }
                    }
                }
            },
            "post": {
                "description": "Adds a new pizza to the list",
                "parameters": [
                    {
                        "description": "ID for the pizza (only one per user)",
                        "in": "body",
                        "name": "id",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "description": "Name for the pizza",
                        "in": "body",
                        "name": "name",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "description": "Toppings on the pizza",
                        "in": "body",
                        "name": "toppings",
                        "required": false,
                        "type": "array"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Pizza created",
                        "examples": {
                            "application/json": [
                                {
                                    "id": 1,
                                    "location": "/pizzas/1.2.3.4",
                                    "name": "Maui Wowie",
                                    "toppings": [
                                        2,
                                        3
                                    ]
                                }
                            ]
                        }
                    },
                    "409": {
                        "description": "Duplicate pizza name or ID found",
                        "examples": {
                            "application/json": [
                                {
                                    "message": "Duplicate pizza ID found"
                                }
                            ]
                        }
                    }
                }
            }
        },
        "/toppings/{toppingid}": {
            "get": {
                "description": "Retrieves an individual pizza",
                "responses": {
                    "200": {
                        "description": "Pizza ",
                        "examples": {
                            "application/json": {
                                "id": 1,
                                "name": "Maui Wowie",
                                "toppings": [
                                    2,
                                    3
                                ]
                            }
                        },
                        "schema": {
                            "type": "object"
                        }
                    },
                    "404": {
                        "description": "Pizza not found",
                        "examples": {
                            "application/json": {
                                "message": "No pizza with that ID found"
                            },
                            "schema": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "put": {
                "description": "Updates an individual pizza",
                "responses": {
                    "204": {
                        "description": "Pizza updated"
                    },
                    "404": {
                        "description": "Pizza not found",
                        "examples": {
                            "application/json": {
                                "message": "No pizza with that ID found"
                            },
                            "schema": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "delete": {
                "description": "Deletes an individual pizza",
                "responses": {
                    "204": {
                        "description": "Pizza deleted"
                    },
                    "404": {
                        "description": "Pizza not found",
                        "examples": {
                            "application/json": {
                                "message": "No pizza with that ID found"
                            },
                            "schema": {
                                "type": "object"
                            }
                        }
                    }
                }
            }
        }
    }
}