import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { services, serviceCategories } from '@/lib/data';

export default function PricingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Price List</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for our premium cosmetic services.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            {serviceCategories.map((category, index) => (
              <div key={category} className={index > 0 ? 'mt-10' : ''}>
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-6">{category} Treatments</h2>
                <div className="space-y-4">
                  {services
                    .filter((service) => service.category === category)
                    .map((service, serviceIndex, arr) => (
                      <div key={service.id}>
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="font-semibold text-lg">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                          <p className="text-lg font-semibold text-foreground whitespace-nowrap">{service.price}</p>
                        </div>
                        {serviceIndex < arr.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
