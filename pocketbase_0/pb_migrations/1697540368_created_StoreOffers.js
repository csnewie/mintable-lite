/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j7knvo32qhenj4e",
    "created": "2023-10-17 10:59:28.734Z",
    "updated": "2023-10-17 10:59:28.734Z",
    "name": "StoreOffers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b6asj7eu",
        "name": "Offer_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j7knvo32qhenj4e");

  return dao.deleteCollection(collection);
})
