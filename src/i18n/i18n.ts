// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Articles: "Articles",
        BrainstormGaming: "Brainstorm Gaming",
        About: "Our Services",
        Outsourcing: "", //"Outsourcing",
        SectionOneText: " Psychological Consultancy Services",
        SectionTwoTitle: "Practical Psychology",
        SectionTwoText:
          "It matters how consumers view and interact with your brand. Join other large companies in implementing <span style='font-weight: bold'>psychological models</span> to shape the <span style='font-weight: bold'>user experience & interface</span> of your platform.",
        SectionTwoText2: "Just say the word.",
        SectionTwoButton: "Request Consultancy",
        ModalTitle: "Contact",
        ModalFirstInput: "Name",
        ModalSecondInput: "Email",
        ModalThirdInput: "Message",
        ModalSendButton: "Send Message",
        SectionThreeTitle: "Our Customers",
        SectionFourTitle: "Our services",
        SectionFourTitle3: "Courses and lectures",
        SectionFourTitle4: "Project management",
        SectionFourText: "We deliver courses and lectures for private and public business. Our speciality is implementation of AI- solutions in corporate workflow and fundamental psychological mechanisms within branding and marketing.",
        SectionFourText2:
          "For busy professionals we can also adapt our course content to a individual office to office version.",
        SectionFourText3: "Let us empower your success through our global partnerships.",
        SectionFourText4: "We offer consultancy services to projects who need psychological insight or adaption of their platform.",
        FooterTitle: "How to get in touch:",
        FooterText: "Use the contact form for business inquiries.",
        FooterButton1: "Contact Now",
        FooterButton2: "Back To Top",
        // SectionSixTitle:
        //   "Maximize Efficiency with a Practical use of AI Course.",
        // SectionSixTitle2: "Course topics include:",
        // SectionSixText:
        //   "Harness the power of AIs like ChatGPT, Midjourney, IBM Watson and Runway to increase efficiency and profitability with Brennstrom's applied AI course. This course provides a brief and easy to understand introduction to AI, along with practical and applicable skills to maximize productivity and reduce time spent on mundane tasks. It focuses on the individual to ensure each employee walks away with new skills and valuable knowledge.",
        // SectionSixListItem1: "An introduction to what AI is and isn’t.",
        // SectionSixListItem2:
        //   "One-on-one instruction in practical and applicable skills to increase productivity and reduce time spent on mundane tasks.",
        // SectionSixListItem3:
        //   "General use and content production skills (how AI can expand on available competence).",
        // SectionSixButton: "Contact Now",
        // SectionSixBackButton: "Back",
        SectionSixTitle:
          "Our Services",
        SectionSixText:
        `<div class=""><h2 class="text-xl font-bold text-gray-800 mb-2">BUSINESS DEVELOPMENT</h2><p class="mb-4 text-gray-700">We specialize in the implementation of fundamental psychological principles in branding and marketing. Our courses are tailored to each individual's competence level and application needs.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Brand development and marketing campaings.</li><li>Psychological aspects of marketing.</li><li>Customized competence enhancement.</li></ul><h2 class="text-xl font-bold text-gray-800 mb-2">PROJECT SERVICES</h2><p class="mb-4 text-gray-700">We provide specialized consulting services where psychological expertise is critical to project success. Our insight ensures effective integration of psychological factors throughout all project phases.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Project analysis and science.</li><li>Implementation support.</li><li>Performance measurement and evaluation.</li></ul></div>`,
        SectionSixText2:
        `<div class=""><h2 class="text-xl font-bold text-gray-800 mb-2">INSTITUTIONAL DEVELOPMENT</h2><p class="mb-4 text-gray-700">We deliver specialized competence development for healthcare and residential care institutions, focusing on therapeutic environments and the private care industry. Our courses build on latest research and practical application.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Therapeutic methodology and implementation</li><li>Applied developmental psychology</li><li>Robustness and Assertiveness training</li></ul><h2 class="text-xl font-bold text-gray-800 mb-2">PEDAGOGICAL GUIDANCE</h2><p class="mb-4 text-gray-700">Our courses in social learning theory and consequential pedagogy provide practical tools for managing challenging behavior and creating secure frameworks. We focus on concrete strategies for immediate implementation.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Behavioral modification and boundary setting</li><li>Consequential pedagogical methods</li><li>Therapeutic environment practices</li></ul></div>`,        SectionSixButton: "Contact Now",
        SectionSixBackButton: "Back",
      },
    },
    no: {
      translation: {
        Articles: "Artikler",
        BrainstormGaming: "Brainstorm Gaming",
        About: "Tjenester",
        Outsourcing: "", //"Problemløsning",
        SectionOneText: " Psykologiske Konsulenttjenester",
        SectionTwoTitle: "Direkte problemløsning",
        SectionTwoText:
          "Brennstrøm hjelper ledere og organisasjoner med problemløsning og psykologisk tilpasning av plattformer og merkevarer.",
        SectionTwoText2: "Vi bistår også i kompetanseutvikling for dine ansatte. Send oss din kontaktinformasjon og vi kontakter deg innen kort tid.", // "Outsource dine problemer til oss.",
        SectionTwoButton: "Ta kontakt",
        ModalTitle: "Etterspør Konsultasjon",
        ModalFirstInput: "Ditt navn",
        ModalSecondInput: "Epost",
        ModalThirdInput: "Oppsummer problemstilling",
        ModalSendButton: "Send",
        SectionThreeTitle: "Våre kunder",
        SectionFourTitle: "Våre tjenester",
        SectionFourTitle3: "Kurs og foredrag",
        SectionFourTitle4: "Prosjektassistanse",
        SectionFourText:
          "Brennstrøm leverer kurs og foredrag for privat og offentlig næringsliv. Vi spesialiserer oss på implementasjon av kunstig intelligens og grunnleggende psykologiske mekanismer i merkevarebygging og markedsføring.",
        SectionFourText2:
          "Vi kan også formidle kursinnhold på kontornivå hvor hvert individ får innholdet tilpasset sitt kompetansenivå og bruksformål",
        SectionFourText3: "La oss styrke din suksess gjennom våre globale partnerskap.",
        SectionFourText4: "Vi tilbyr konsulenttjenester til prosjekter som trenger psykologisk kompetanse.",
        FooterTitle: "Fortell oss om din problemstilling:",
        FooterText: "Vi svarer innen 2-3 arbeidsdager.",
        FooterButton1: "Kontakt Oss",
        FooterButton2: "Tilbake",
        // SectionSixTitle:
        //   "Oppnå økt effektivitet og lønnsomhet med kunstig intelligens.",
        // SectionSixTitle2: "Kurset inkluderer:",
        // SectionSixText:
        //   "Kunstig intelligens er en teknologi som har vokst sterkt de siste årene. AI-plattformer som ChatGPT, Midjourney, IBM Watson og Runway gir bedriften din betydelige konkurransefortrinn og økt effektivitet og lønnsomhet. Brennstrøm tilbyr kurs i praktisk bruk av AI, et kort og lettlært lynkurs som lærer deg hvordan du bruker den nyeste AI-teknologien.",
        // SectionSixListItem1:
        //   "En innføring i hva kunstig intelligens er og ikke er",
        // SectionSixListItem2:
        //   "1-1 undervisning i praktiske og anvendelige ferdigheter for å øke produktivitet og forkorte dørstokkmila i daglig arbeid.",
        // SectionSixListItem3:
        //   "Generelle produksjonsmessige ferdigheter (hvordan AI kan øke dine tilgjengelige kompetanser).",
        SectionSixTitle:
          "Tjenester",
        SectionSixText:
        `<div class=""><h2 class="text-xl font-bold text-gray-800 mb-2">NÆRINGSLIVSUTVIKLING</h2><p class="mb-4 text-gray-700">Vi spesialiserer oss på implementasjon av grunnleggende psykologiske mekanismer i merkevarebygging og markedsføring. Konsultasjonen tilpasses hvert individs kompetansenivå og bruksformål.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Konflikt og/eller problemløsning.</li><li>Psykologiske aspekter ved markedsføring.</li><li>Individuelt tilpasset kompetanseutvikling.</li></ul><h2 class="text-xl font-bold text-gray-800 mb-2">PROSJEKTTJENESTER</h2><p class="mb-4 text-gray-700">Vi tilbyr skreddersydde konsulenttjenester der psykologisk kompetanse er kritisk for prosjektets suksess. Med vår ekspertise sikrer vi at psykologiske faktorer integreres effektivt i prosjektets ulike faser.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Psykologisk prosjektanalyse og forskning.</li><li>Implementeringsstøtte.</li><li>Resultatmåling og evaluering.</li></ul></div>`,
        SectionSixText2:
        `<div class=""><h2 class="text-xl font-bold text-gray-800 mb-2">KOMPETANSEHEVING</h2><p class="mb-4 text-gray-700">Vi leverer spesialisert kompetanseutvikling for helse- og omsorgsinstitusjoner med fokus på effektiv miljøterapi for omsorgstjenester. Våre kurs bygger på nyeste forskning formidlet som praktisk anvendbar kunnskap.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Miljøterapeutiske metoder og implementering.</li><li>Stressmestring og mindfulness.</li><li>Utviklingspsykologi i praksis.</li><li>Kurs i Robusthet og Selvsikkerhet.</li></ul><h2 class="text-xl font-bold text-gray-800 mb-2">PEDAGOGISK VEILEDNING</h2><p class="mb-4 text-gray-700">Vårt kurs i sosial læringsteori og konsekvenspedagogikk gir praktiske verktøy for å håndtere utfordrende atferd og skape trygge rammer. Vi fokuserer på konkrete strategier som kan implementeres umiddelbart.</p><ul class="list-disc pl-6 mb-6 text-gray-700"><li>Atferdsendring og grensesetting.</li><li>Konsekvenspedagogiske metoder.</li><li>Miljøterapeutisk praksis.</li></ul></div>`,
        SectionSixButton: "Ta Kontakt",
        SectionSixBackButton: "Tilbake",

      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
