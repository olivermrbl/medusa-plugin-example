import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
    const brandService = req.scope.resolve("brand")
    console.log(brandService)
  res.json({ message: "Hello World!" });
}
