/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jowlz03e6ijq16m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5wxybdah",
    "name": "offer_name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j7knvo32qhenj4e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jowlz03e6ijq16m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5wxybdah",
    "name": "Offer_name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j7knvo32qhenj4e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
