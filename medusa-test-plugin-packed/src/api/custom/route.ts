import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const custom = req.scope.resolve("custom");
  console.log(custom);
  res.sendStatus(200);
}
