import Dexie from "dexie";

export const db = new Dexie("yourDictDB");
db.version(1).stores({
  dict: "word",
});
