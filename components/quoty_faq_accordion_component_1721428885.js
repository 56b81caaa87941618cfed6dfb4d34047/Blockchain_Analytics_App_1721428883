/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1721428885", {
    template: `
    <section class="py-8 bg-white pl-4">
        <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions About Our Blockchain Analysis App</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg" :class="[{ 'expanded': term.expanded },accordionGradientStyle]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg" :class="svgFillStyle">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }, termsTextStyle]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            accordionGradientStyle: "odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900",
            svgFillStyle: "fill-slate-400 dark:fill-slate-500",
            termsTextStyle: "text-slate-500 dark:text-slate-400",
            terms: [
                { title: "What is this app used for?", description: "This app allows you to analyze and gain insights from new blockchain data as it gets added to the decentralized ledger. It provides powerful analytics tools to understand trends, patterns, and activities happening on various blockchain networks.", expanded: false },
                { title: "What blockchain platforms does it support?", description: "Our app currently supports analysis of data from major blockchain platforms like Bitcoin, Ethereum, Litecoin, and more. We are constantly working to add support for new blockchain networks as they gain traction.", expanded: false },
                { title: "Do I need any special skills to use this app?", description: "No special skills are required. The app has an intuitive user interface designed for users of all technical levels. However, some basic understanding of blockchain technology can help better interpret the analysis results.", expanded: false },
                { title: "Is my data kept private and secure?", description: "Absolutely. We take data privacy and security extremely seriously. All your analysis data is fully encrypted and never shared with any third parties without your explicit consent.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
