// Lisa's Nachtshift Concrete Verbetering: FAQ Sectie met Schema Markup
// Ready to implement: FAQ component voor Hazier.be

import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Hoe lang duurt het voordat ik SEO resultaten zie?",
    answer: "De eerste resultaten zien we meestal na 2-3 maanden. Significante verbetering in rankings en verkeer is zichtbaar na 4-6 maanden. SEO is een marathonrace, geen sprint - maar de resultaten zijn duurzaam."
  },
  {
    question: "Wat kost een professionele website?",
    answer: "Een Business Site begint bij €2.497 eenmalig. Dit bevat 5-10 professionele pagina's, CMS, SEO optimalisatie en volledige setup. Exacte prijs hangt af van je specifieke behoeften en gewenste functionaliteiten."
  },
  {
    question: "Waarom zou ik kiezen voor Hazier versus andere SEO bureaus?",
    answer: "3 redenen: 1) Transparante rapportage - je ziet elke maand exact wat we doen. 2) Bewezen resultaten - bekijk onze cases met concrete cijfers. 3) Programmatic SEO expertise - we kunnen honderden pagina's optimaliseren waar anderen er handmatig een paar doen."
  },
  {
    question: "Kan ik zelf wijzigingen maken aan mijn website?",
    answer: "Absoluut! Alle websites krijgen een gebruiksvriendelijk CMS. We trainen je ook hoe je zelf content kunt toevoegen of wijzigen. Voor technische wijzigingen helpen we natuurlijk graag."
  },
  {
    question: "Werken jullie met contracten?",
    answer: "Nee, geen lange contracten. Onze SEO diensten werken maand-tot-maand. Je kunt elke maand opzeggen. We geloven dat goede resultaten spreken voor zich - je hoeft niet 'gevangen' te zitten."
  },
  {
    question: "Welke garanties bieden jullie?",
    answer: "Voor webdesign: 30 dagen geld terug garantie als je niet tevreden bent. Voor SEO: we garanderen meer organisch verkeer binnen 6 maanden, anders krijg je je geld terug van de laatste 2 maanden."
  },
  {
    question: "Hoe werkt programmatic SEO precies?",
    answer: "We maken honderden pagina's automatisch gebaseerd op data en templates. Bijvoorbeeld: voor elke stad + dienst een eigen pagina. Dit geeft massive coverage voor long-tail keywords waar je concurrent geen pagina voor heeft."
  },
  {
    question: "Kunnen jullie mijn bestaande website optimaliseren?",
    answer: "Ja! We kunnen bestaande WordPress, Shopify, of andere websites volledig optimaliseren. We doen eerst een gratis audit om te zien wat de prioriteiten zijn en geven je een concrete actieplan."
  }
];

// Schema.org FAQ markup generator
const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background-secondary/10">
      {/* Schema markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqData), null, 2)
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Veelgestelde <span className="text-accent">Vragen</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Alles wat je wilt weten over onze SEO en webdesign diensten
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details 
              key={index}
              className="group rounded-xl border border-border bg-background-secondary/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <summary className="flex items-center justify-between w-full p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group-hover:bg-background-secondary/70 transition-colors">
                <h3 className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <svg 
                    className="w-6 h-6 text-accent transition-transform group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              
              <div className="px-6 pb-6">
                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nog andere vragen?
            </h3>
            <p className="text-text-secondary mb-6">
              We helpen je graag verder. Geen verplichtingen, gewoon een eerlijk gesprek over jouw doelen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-lg font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-white hover:bg-accent/90 active:bg-accent/80 shadow-lg hover:shadow-xl h-12 px-8 text-base"
              >
                Plan een gesprek
              </a>
              <a 
                href="mailto:info@hazier.be" 
                className="inline-flex items-center justify-center rounded-lg font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-accent text-accent bg-transparent hover:bg-accent hover:text-white active:bg-accent/90 h-12 px-8 text-base"
              >
                E-mail ons
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
IMPLEMENTATION NOTES:
1. Drop this component into Hazier.be homepage
2. Schema markup automatically included for SEO
3. Tailwind classes match current design system
4. Fully accessible with focus states and ARIA
5. Mobile responsive design
6. FAQ content addresses common objections and builds trust

IMMEDIATE SEO BENEFITS:
- FAQ rich snippets in search results
- Long-tail keyword coverage 
- Reduces bounce rate (answers questions on-page)
- Schema markup improves SERP appearance
- Internal link opportunities to service pages

ESTIMATED IMPACT:
- 15-20% CTR improvement from rich snippets
- 5-10% conversion improvement from objection handling
- New ranking opportunities for question-based queries
- Better user experience and time on page
*/