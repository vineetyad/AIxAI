import React from 'react';
import { CardStack } from './CardStack';
import { HeroCard } from './HeroCard';
import { AboutCard } from './AboutCard';
import { ServicesCard } from './ServicesCard';
import { ProcessCard } from './ProcessCard';
import { WorkCard } from './WorkCard';
import { ContactCard } from './ContactCard';
import { servicesData } from '../src/data/services';

export const Home: React.FC = () => {
    const servicesPart1 = servicesData.slice(0, 5);
    const servicesPart2 = servicesData.slice(5, 10);

    return (
        <CardStack>
            <HeroCard />
            <AboutCard />
            <ServicesCard
                title="Our Services"
                description="End-to-end AI solutions from concept to production, built to scale with your business."
                services={servicesPart1}
            />
            <ServicesCard
                title="Specialized Solutions"
                description="Industry-specific AI setups, advanced infrastructure, and managed AI pipelines for robust enterprise scale."
                services={servicesPart2}
            />
            <ProcessCard />
            <WorkCard />
            <ContactCard />
        </CardStack>
    );
};
