'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleEstimateTaxes } from '@/app/taxes/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const initialState = {
  data: null,
  error: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? 'Estimating...' : 'Estimate Taxes'}
    </Button>
  );
}

export function TaxEstimatorClient() {
  const [state, formAction] = useFormState(handleEstimateTaxes, initialState);

  return (
    <Card className="max-w-2xl">
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Estimate Your Taxes</CardTitle>
          <CardDescription>
            Enter your total annual income and deductible expenses to get an AI-powered tax estimate.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="income">Total Annual Income</Label>
            <Input id="income" name="income" type="number" placeholder="e.g., 80000" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expenses">Total Annual Expenses</Label>
            <Input id="expenses" name="expenses" type="number" placeholder="e.g., 15000" required />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <SubmitButton />
          {state.error && <p className="text-sm text-red-500">{state.error}</p>}
        </CardFooter>
      </form>
      
      {state.success && state.data && (
        <CardContent>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Your Estimated Tax</AlertTitle>
            <AlertDescription className="space-y-4">
              <p className="text-2xl font-bold text-primary">
                {state.data.estimatedTaxes.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </p>
              <p className="text-xs text-muted-foreground italic">
                {state.data.disclaimer}
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      )}
    </Card>
  );
}
