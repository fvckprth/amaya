import * as z from "zod";

export const sizes = [
    { value: "start-up", label: "1-50" },
    { value: "small", label: "51-150" },
    { value: "medium", label: "151-1,000" },
    { value: "large", label: "1,001-10,000" },
    { value: "enterprise", label: "10,001+" },
];

export const SizeEnum = z.enum(sizes.map(size => size.value) as [string, ...string[]]);