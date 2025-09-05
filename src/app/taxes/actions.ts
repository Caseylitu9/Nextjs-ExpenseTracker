'use server';

import { estimateTaxes, TaxEstimationInput, TaxEstimationOutput } from "@/ai/flows/tax-estimation-tool";
import { z } from "zod";

const formSchema = z.object({
  income: z.coerce.number().positive({ message: "Income must be a positive number." }),
  expenses: z.coerce.number().positive({ message: "Expenses must be a positive number." }),
});

export async function handleEstimateTaxes(
  prevState: any,
  formData: FormData
): Promise<{
    data: TaxEstimationOutput | null;
    error: string | null;
    success: boolean;
}> {
  try {
    const validatedFields = formSchema.safeParse({
      income: formData.get('income'),
      expenses: formData.get('expenses'),
    });

    if (!validatedFields.success) {
      return {
        data: null,
        error: validatedFields.error.flatten().fieldErrors.income?.[0] || validatedFields.error.flatten().fieldErrors.expenses?.[0] || "Invalid input.",
        success: false,
      };
    }
    
    const input: TaxEstimationInput = validatedFields.data;
    
    const result = await estimateTaxes(input);

    return { data: result, error: null, success: true };
  } catch (e: any) {
    return {
        data: null,
        error: e.message || "An unexpected error occurred.",
        success: false,
    };
  }
}
