const { z } = require("zod");

const ministryApplicationCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  ministry: z.string().min(1, "Ministry is required"),
  message: z.string().optional(),
  experience: z.string().optional(),
});

const ministryApplicationStatusSchema = z.object({
  status: z.enum(["pending", "approved", "rejected"]),
});

module.exports = {
  ministryApplicationCreateSchema,
  ministryApplicationStatusSchema,
};
