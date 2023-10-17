/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jowlz03e6ijq16m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oksf2adn",
    "name": "store_token",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jowlz03e6ijq16m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oksf2adn",
    "name": "token_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
