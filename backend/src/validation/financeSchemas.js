const { z } = require("zod");

const financeCreateSchema = z.object({
  type: z.enum(["income", "expense"]),
  amount: z.number().positive("Amount must be positive"),
  category: z.string().min(1, "Category is required"),
  description: z.string().optional(),
  date: z.coerce.date(),
});

module.exports = { financeCreateSchema };
