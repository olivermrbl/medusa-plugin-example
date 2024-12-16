import { model } from "@medusajs/framework/utils";

const Brand = model.define("brand", {
  id: model.id().primaryKey(),
  name: model.text(),
});

export default Brand;
