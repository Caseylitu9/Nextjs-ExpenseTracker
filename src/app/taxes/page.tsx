import { TaxEstimatorClient } from "@/components/taxes/tax-estimator-client";

export default function TaxesPage() {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-3xl font-headline font-bold tracking-tight">Tax Estimator</h1>
                <p className="text-muted-foreground">Get a rough estimate of your annual taxes based on income and expenses.</p>
            </div>
            <TaxEstimatorClient />
        </div>
    );
}
