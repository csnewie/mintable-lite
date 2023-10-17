/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7knvo32qhenj4e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omcgfzdi",
    "name": "Offer_description",
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
  const collection = dao.findCollectionByNameOrId("j7knvo32qhenj4e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omcgfzdi",
    "name": "Offer_Description",
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
