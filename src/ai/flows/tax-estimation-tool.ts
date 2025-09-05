// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI-powered tax estimation tool.
 *
 * - estimateTaxes - A function that estimates taxes based on income and expenses.
 * - TaxEstimationInput - The input type for the estimateTaxes function.
 * - TaxEstimationOutput - The return type for the estimateTaxes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TaxEstimationInputSchema = z.object({
  income: z
    .number()
    .describe('The total income for the year in USD. Must be a positive number.'),
  expenses: z
    .number()
    .describe(
      'The total expenses for the year in USD. Must be a positive number.'
    ),
});
export type TaxEstimationInput = z.infer<typeof TaxEstimationInputSchema>;

const TaxEstimationOutputSchema = z.object({
  estimatedTaxes: z
    .number()
    .describe(
      'The estimated taxes owed, in USD.  This is only an estimate and should not be used in place of professional advice.'
    ),
  disclaimer: z
    .string()
    .describe(
      'A disclaimer stating that this is only an estimate and not professional advice.'
    ),
});
export type TaxEstimationOutput = z.infer<typeof TaxEstimationOutputSchema>;

export async function estimateTaxes(input: TaxEstimationInput): Promise<TaxEstimationOutput> {
  return estimateTaxesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'taxEstimationPrompt',
  input: {schema: TaxEstimationInputSchema},
  output: {schema: TaxEstimationOutputSchema},
  prompt: `You are an expert tax estimator.  Given the income and expenses provided, estimate the taxes owed.

Income: {{income}}
Expenses: {{expenses}}

Consider standard deductions and common tax laws to provide an accurate estimate.  The outputted estimatedTaxes field should be a number.

Always include the following disclaimer in the disclaimer field: "This is only an estimate and not professional advice. Consult with a qualified tax professional for accurate tax advice."`,
});

const estimateTaxesFlow = ai.defineFlow(
  {
    name: 'estimateTaxesFlow',
    inputSchema: TaxEstimationInputSchema,
    outputSchema: TaxEstimationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
