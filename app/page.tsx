"use client";

import { useMemo, useState } from "react";

type Phrase = {
  category: string;
  shqip: string;
  english: string;
};

type Scenario = {
  id: string;
  title: string;
  description: string;
  conversation: {
    speaker: string;
    shqip: string;
    english: string;
  }[];
};

const phrases: Phrase[] = [
  {
    category: "Përshëndetje",
    shqip: "Mirë se erdhe! Si je?",
    english: "Welcome! How are you?"
  },
  {
    category: "Sociale",
    shqip: "A do të pimë një kafe te Pazari?",
    english: "Shall we grab a coffee at the Bazaar?"
  },
  {
    category: "Udhëtim",
    shqip: "Ku ndodhet stacioni i autobusit për në Tiranë?",
    english: "Where is the bus station to Tirana?"
  },
  {
    category: "Mikpritje",
    shqip: "Ndiq ritmin tim, je midis miqsh këtu.",
    english: "Follow my rhythm, you're among friends here."
  }
];

const scenarios: Scenario[] = [
  {
    id: "greetings",
    title: "Takim i parë",
    description:
      "Krijo përshtypjen e parë të ngrohtë duke përdorur shprehje të thjeshta.",
    conversation: [
      {
        speaker: "Arta",
        shqip: "Përshëndetje! Si e ke emrin?",
        english: "Hello! What's your name?"
      },
      {
        speaker: "Marku",
        shqip: "Përshëndetje Arta, unë jam Marku. Kënaqësi të të njoh.",
        english: "Hi Arta, I'm Mark. Pleasure to meet you."
      },
      {
        speaker: "Arta",
        shqip: "Kënaqësia është e imja! Nga vjen?",
        english: "The pleasure is mine! Where are you from?"
      }
    ]
  },
  {
    id: "cafe",
    title: "Në kafene",
    description:
      "Porosit një kafe, mbaj një bisedë të këndshme dhe ndiq ritmin shqiptar.",
    conversation: [
      {
        speaker: "Kamarieri",
        shqip: "Çfarë dëshironi të pini?",
        english: "What would you like to drink?"
      },
      {
        speaker: "Arbeni",
        shqip: "Një makiato të vogël, ju lutem. Pak sheqer.",
        english: "A small macchiato, please. A little sugar."
      },
      {
        speaker: "Kamarieri",
        shqip: "Menjëherë, e keni sheqerin në tavolinë.",
        english: "Right away, the sugar is on the table."
      }
    ]
  },
  {
    id: "travel",
    title: "Udhëtim në jug",
    description:
      "Blini bileta, pyesni për orare dhe gjeni plazhet më të bukura.",
    conversation: [
      {
        speaker: "Sara",
        shqip: "Kur është autobusi i radhës për në Sarandë?",
        english: "When is the next bus to Saranda?"
      },
      {
        speaker: "Sporteli",
        shqip: "Niset në 14:30 dhe ndalet në Vlorë.",
        english: "It leaves at 14:30 and stops in Vlora."
      },
      {
        speaker: "Sara",
        shqip: "Shumë mirë, më jepni një biletë vajtje-ardhje.",
        english: "Great, give me a return ticket please."
      }
    ]
  }
];

const culturalNotes = [
  {
    title: "“Besa” — fjala që mbahet",
    description:
      "Kur një shqiptar të jep besën, është betimi më i fortë për mikpritje dhe besueshmëri."
  },
  {
    title: "Kafeja si ritual",
    description:
      "Pijet e ngrohta nuk janë thjesht për kafienë; janë një arsye për t’u ulur, për t’u njohur dhe për të ndarë histori."
  },
  {
    title: "Një gjuhë me shumë dialekte",
    description:
      "Nga gegërishtja në veri te toskërishtja në jug, shqiptarët i duan dallimet e tyre gjuhësore."
  }
];

export default function Home() {
  const [selectedScenario, setSelectedScenario] = useState<string>("greetings");
  const [showEnglish, setShowEnglish] = useState<boolean>(false);

  const activeScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === selectedScenario),
    [selectedScenario]
  );

  return (
    <main className="container">
      <section className="hero">
        <span className="badge">Po, flas shqip!</span>
        <h1>Një udhëtim i gjallë në gjuhën shqipe</h1>
        <p>
          Zhytesh në një eksperiencë të plotë shqip, nga frazat e para te
          bisedat natyrale. Gjuha jonë është e gjallë, melodioze dhe plot
          ngrohtësi. Të rrimë bashkë dhe ta jetojmë në çdo fjali.
        </p>
        <div className="cta-row">
          <button
            className="cta"
            onClick={() =>
              setSelectedScenario((prev) =>
                prev === "greetings" ? "cafe" : "greetings"
              )
            }
          >
            Eksploro skenat
          </button>
          <button
            className="cta secondary"
            onClick={() => setShowEnglish((prev) => !prev)}
          >
            {showEnglish ? "Fshi përkthimin" : "Shfaq përkthimin"}
          </button>
        </div>
      </section>

      <section className="sections">
        <article className="card">
          <h2>Frazat që duhet t’i dish</h2>
          <p>
            Filloni me këto shprehje kyçe që shqiptarët i përdorin çdo ditë për
            të shprehur mirëseardhje, mikpritje dhe respekt.
          </p>
          <div className="examples">
            {phrases.map((phrase) => (
              <article key={phrase.shqip}>
                <h3>{phrase.category}</h3>
                <p>{phrase.shqip}</p>
                {showEnglish && <p>🇬🇧 {phrase.english}</p>}
              </article>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Skena dialogu</h2>
          <p>
            Zgjidh një skenë dhe ndiq bisedën natyrale me ritmin autentik të
            shqipes. Ndrysho skenën me butonin kryesor.
          </p>
          <div className="examples">
            {activeScenario?.conversation.map((line, index) => (
              <article key={`${line.speaker}-${index}`}>
                <h3>
                  {line.speaker} {index === 0 ? "👋" : "💬"}
                </h3>
                <p>{line.shqip}</p>
                {showEnglish && <p>🇬🇧 {line.english}</p>}
              </article>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Kulturë & mikpritje</h2>
          <p>
            Gjuha lidhet ngushtë me traditën. Ja disa thënie dhe zakone që të
            ndihmojnë të hysh në botën shqiptare.
          </p>
          <div className="examples">
            {culturalNotes.map((note) => (
              <article key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <footer className="footer">
        Kjo faqe është krijuar me dashuri për gjuhën shqipe. Na falni nëse na
        shpëton ndonjë dialekt.
      </footer>
    </main>
  );
}
