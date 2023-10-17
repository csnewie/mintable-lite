/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jowlz03e6ijq16m",
    "created": "2023-10-17 10:52:14.891Z",
    "updated": "2023-10-17 10:52:14.891Z",
    "name": "Stores",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("jowlz03e6ijq16m");

  return dao.deleteCollection(collection);
})
