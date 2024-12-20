import { Module } from "@medusajs/framework/utils";
import CustomService from "./service";

export const CUSTOM_MODULE = "custom";

export default Module(CUSTOM_MODULE, {
  service: CustomService,
});
