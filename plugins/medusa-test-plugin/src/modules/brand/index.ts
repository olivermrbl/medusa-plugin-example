import { Module } from "@medusajs/framework/utils";
import BrandService from "./service";

export const BRAND_MODULE = "brand";

export default Module(BRAND_MODULE, {
  service: BrandService,
});
