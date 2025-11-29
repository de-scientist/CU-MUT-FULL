const { z } = require("zod");

const memberCreateSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Gender must be male, female or other" }),
  }),
  course: z.string().optional(),
  yearOfStudy: z.string().optional(),
  residence: z.string().optional(),
  isBaptized: z.boolean().optional(),
  ministriesInterested: z.array(z.string()).optional(),
});

module.exports = { memberCreateSchema };
