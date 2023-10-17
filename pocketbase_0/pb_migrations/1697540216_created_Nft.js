/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k9iz8h6xiun9hn7",
    "created": "2023-10-17 10:56:56.316Z",
    "updated": "2023-10-17 10:56:56.316Z",
    "name": "Nft",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "afgyn5gg",
        "name": "nft_token",
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
        "id": "wcltptze",
        "name": "token_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jowlz03e6ijq16m",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("k9iz8h6xiun9hn7");

  return dao.deleteCollection(collection);
})
