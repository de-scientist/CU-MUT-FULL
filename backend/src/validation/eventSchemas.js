const { z } = require("zod");

const eventCreateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  dateLabel: z.string().min(1, "Date label is required"),
  timeLabel: z.string().min(1, "Time label is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().optional().default(""),
});

const eventUpdateSchema = eventCreateSchema.partial();

module.exports = { eventCreateSchema, eventUpdateSchema };
