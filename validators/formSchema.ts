import * as z from "zod";
import { IndustryEnum } from "@/data/industries";
import { SizeEnum } from "@/data/sizes";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  businessEmail: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z.string().min(1, { message: "Mobile Number is required" }),
  jobTitle: z.string().min(1, { message: "Job Title is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  industry: IndustryEnum,
  size: SizeEnum,
  message: z.string().min(5, { message: "Message is required" }),
});