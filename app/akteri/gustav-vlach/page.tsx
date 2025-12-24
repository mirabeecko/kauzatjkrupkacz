import ClassificationBadge from '@/components/ClassificationBadge';

export default function GustavVlachPage() {
  const actor = {
    name: 'Gustav Vlach',
    role: 'Předseda lyžařského oddílu',
    department: 'Lyžařský oddíl',
    departmentIcon: '⛷️',
    status: 'negative' as const,
    totalDamage: 1041378,
    membershipStatus: 'Zánik členství neplacením příspěvků',
    breakdown: [
      {
        label: 'Neodvedené oddílové příspěvky',
        amount: 379200,
        description: 'Oddíl lyžování neeviduje odvod příspěvků za období 2020-2023. 79 členů × 1.200 Kč/rok × 4 roky.',
        classification: 'evidovano' as const,
        note: 'Výpočet založen na odhadech počtu členů (seznamy nebyly doloženy).',
      },
      {
        label: 'Náklady za energie',
        amount: 256455,
        description: 'Z faktur vyplývá, že náklady za elektřinu ve výši 256.455 Kč za období 2020-2023 nebyly uhrazeny. Prostory byly oddílem využívány.',
        classification: 'dolozeno' as const,
        note: 'Faktury dodavatelů, výzvy k úhradě. Nejvyšší dluh za energie ze všech oddílů.',
      },
      {
        label: 'Pokladna oddílu k 31.12.2020',
        amount: 132523,
        description: 'Hotovost v pokladně oddílu k 31.12.2020 ve výši 132.523 Kč nebyla předána ani vyúčtována.',
        classification: 'dolozeno' as const,
        note: 'Písemné potvrzení existence hotovosti, výpověď při výslechu (2024).',
      },
      {
        label: 'Nezaplacené členské příspěvky',
        amount: 63200,
        description: 'Členské příspěvky za období 2021-2024 (200 Kč × 4 roky × 79 členů). Úhrada svazům ČSTV, Ústeckému kraji, obci.',
        classification: 'evidovano' as const,
        note: 'Účetní evidence spolku.',
      },
    ],
    keyFacts: [
      {
        icon: '💰',
        title: 'Pokladna potvrzena písemně',
        description: 'Existence hotovosti 132.523 Kč v pokladně oddílu k 31.12.2020 byla potvrzena písemnou komunikací. K datu zveřejnění spolek neeviduje její předání.',
        classification: 'dolozeno' as const,
      },
      {
        icon: '⚡',
        title: 'Nejvyšší dluh za energie',
        description: 'Lyžařský oddíl má ze všech oddílů nejvyšší dluh za energie: 256.455 Kč. Z faktur vyplývá, že prostory byly využívány, ale náklady nebyly uhrazeny.',
        classification: 'dolozeno' as const,
      },
      {
        icon: '📋',
        title: 'Seznamy členů nebyly doloženy',
        description: 'K datu zveřejnění spolek neeviduje doložení aktualizovaných seznamů členů lyžařského oddílu, přestože byly zaslány opakované výzvy (2021-2024).',
        classification: 'dolozeno' as const,
      },
    ],
    missingDocuments: [
      {
        icon: '🎿',
        title: 'Průkazy technické způsobilosti',
        description: 'K datu zveřejnění spolek neeviduje doložení průkazů technické způsobilosti lyžařských vleků. Bez těchto dokumentů nelze provozovat lyžařské vleky podle platných předpisů.',
        classification: 'dolozeno' as const,
      },
      {
        icon: '📋',
        title: 'Provozní dokumentace areálu',
        description: 'K datu zveřejnění spolek neeviduje doložení provozní dokumentace týkající se lyžařského areálu (smlouvy, provozní řády, návody).',
        classification: 'dolozeno' as const,
      },
      {
        icon: '⚙️',
        title: 'Technické listy k vlekům',
        description: 'K datu zveřejnění spolek neeviduje doložení technických listů k lyžařským vlekům, které jsou nutné pro jejich bezpečný provoz a údržbu.',
        classification: 'dolozeno' as const,
      },
      {
        icon: '✅',
        title: 'Dokumentace posledních revizí',
        description: 'K datu zveřejnění spolek neeviduje doložení dokumentace o posledních provedených revizích zařízení, což je nutné pro splnění bezpečnostních a právních požadavků.',
        classification: 'dolozeno' as const,
      },
    ],
    keyEvents: [
      { text: 'Činnost jako předseda lyžařského oddílu', date: '2020-2024', classification: 'dolozeno' as const },
      { text: 'K datu zveřejnění neevidováno doložení seznamů členů', date: '2021-2024', classification: 'dolozeno' as const },
      { text: 'K datu zveřejnění neevidováno doložení oddílových příspěvků', amount: 379200, date: '2020-2023', classification: 'evidovano' as const },
      { text: 'Náklady za energie nebyly uhrazeny', amount: 256455, date: '2020-2023', classification: 'dolozeno' as const },
      { text: 'Pokladna k 31.12.2020 nebyla předána', amount: 132523, date: '31.12.2020', classification: 'dolozeno' as const },
      { text: 'K datu zveřejnění neevidováno doložení technické dokumentace areálu', date: '2021-2024', classification: 'dolozeno' as const },
      { text: 'Zánik členství neplacením členských příspěvků', date: '2024', classification: 'dolozeno' as const },
    ],
    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Metodika výpočtu škody', href: '/metodika', icon: '📊' },
      { label: 'Rozpad škody podle kategorií', href: '/rozpad-skody', icon: '💰' },
      { label: 'Události s účastí', href: '/udalosti?actor=gustav-vlach', icon: '📅' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Téma: Členství a evidence', href: '/temata/clenstvi-a-evidence', icon: '📋' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm">
            ⚖️ <strong>Právní upozornění:</strong> Osoba je uvedena výhradně v souvislosti s výkonem funkce ve spolku TJ Krupka z.s., nikoliv soukromě.
            Uvedené informace vycházejí z dokumentů, které spolek eviduje. Nejde o pravomocné soudní rozhodnutí.
            {' '}
            <a href="/pravni-ramec" className="underline hover:text-blue-200">
              Více informací o právním rámci →
            </a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-purple-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  {actor.membershipStatus}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-blue-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-blue-100 text-sm font-medium mb-2">Evidovaná škoda oddílu</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  {actor.totalDamage.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <ClassificationBadge type="evidovano" />
                  <span className="px-4 py-2 bg-blue-500/30 backdrop-blur rounded-lg border border-blue-300">
                    <span className="text-sm text-white font-bold">Nejvyšší škoda ze všech oddílů</span>
                  </span>
                </div>
              </div>
              <div className="text-8xl opacity-20">
                💸
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-5xl">
        {/* Kontext */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Kontext</span>
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-3">
              <p>
                Gustav Vlach byl předsedou lyžařského oddílu v období 2020-2024.
                Spolek eviduje nesoulad ve finančním hospodaření oddílu ve výši <strong>1.041.378 Kč</strong>.
                Tato částka představuje nejvyšší evidovanou škodu ze všech oddílů.
              </p>
              <p>
                K datu zveřejnění spolek neeviduje doložení seznamů členů, oddílových příspěvků ani předání
                pokladny oddílu. Dále chybí technická dokumentace lyžařského areálu nutná pro jeho provoz.
              </p>
              <p>
                Členství ve spolku zaniklo neplacením členských příspěvků (2024).
              </p>
              <p className="text-sm text-slate-600 italic">
                Více o metodice výpočtu škody a právních podkladech na stránkách{' '}
                <a href="/metodika" className="text-blue-600 hover:underline font-semibold">Metodika</a>
                {' '}a{' '}
                <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">Právní rámec</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Klíčová fakta */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📌 Klíčová fakta
          </h2>
          <div className="grid gap-4">
            {actor.keyFacts.map((fact, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{fact.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{fact.title}</h3>
                      <ClassificationBadge type={fact.classification} />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rozpad škody */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💰 Rozpad evidované škody oddílu
          </h2>
          <div className="space-y-6">
            {actor.breakdown.map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{item.label}</h3>
                      <ClassificationBadge type={item.classification} />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      <strong>Poznámka:</strong> {item.note}
                    </p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl font-black text-slate-900">
                      {item.amount.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-700 transition-all duration-500"
                    style={{ width: `${(item.amount / actor.totalDamage) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-slate-600 mt-1 text-right">
                  {((item.amount / actor.totalDamage) * 100).toFixed(1)}% z celkové škody oddílu
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 md:p-6 bg-slate-900 text-white rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CELKOVÁ EVIDOVANÁ ŠKODA ODDÍLU</span>
              <span className="text-3xl font-black">{actor.totalDamage.toLocaleString('cs-CZ')} Kč</span>
            </div>
            <p className="text-sm text-slate-300 mt-2">
              Metodika výpočtu je popsána na stránce{' '}
              <a href="/rozpad-skody" className="underline hover:text-white">
                Rozpad škody podle kategorií
              </a>
              .
            </p>
          </div>
        </section>

        {/* Evidovaná nesouladná plnění */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Evidovaná nesouladná plnění
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-6">
              {/* 1. Seznamy členů */}
              <div className="p-4 rounded-lg border-2 bg-orange-50 border-orange-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Seznamy členů nebyly doloženy</h3>
                  <ClassificationBadge type="dolozeno" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  K datu zveřejnění spolek neeviduje doložení aktualizovaných seznamů členů lyžařského oddílu,
                  přestože byly zaslány opakované výzvy (2021-2024).
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Výzvy ze dne 13.9.2021, 10.12.2021, 11/2023.
                </p>
              </div>

              {/* 2. Oddílové příspěvky */}
              <div className="p-4 rounded-lg border-2 bg-orange-50 border-orange-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Neodvedené oddílové příspěvky</h3>
                  <ClassificationBadge type="evidovano" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z účetních podkladů za období 2020-2023 vyplývá, že oddílové příspěvky ve výši 379.200 Kč
                  nebyly zaúčtovány jako příjem spolku.
                </p>
                <p className="text-sm text-slate-900 mb-2">
                  <strong>Výpočet:</strong> 79 členů × 1.200 Kč/rok × 4 roky (2020-2023).
                  <br />
                  <strong>Metoda:</strong> Odhad počtu členů (seznamy nebyly doloženy) × sazba dle stanov × období.
                  <br />
                  <strong>Výhrada:</strong> Skutečná částka může být jiná bez doložených seznamů členů.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Účetní evidence TJ Krupka, odhady členské základny.
                </p>
              </div>

              {/* 3. Energie */}
              <div className="p-4 rounded-lg border-2 bg-red-50 border-red-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Náklady za energie nebyly uhrazeny</h3>
                  <ClassificationBadge type="dolozeno" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z faktur vyplývá, že náklady za elektřinu ve výši 256.455 Kč za období 2020-2023 nebyly uhrazeny.
                  Prostory byly oddílem využívány. Jedná se o nejvyšší dluh za energie ze všech oddílů.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Faktury dodavatelů, výzvy k úhradě.
                </p>
              </div>

              {/* 4. Pokladna */}
              <div className="p-4 rounded-lg border-2 bg-red-50 border-red-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Nepředaná pokladna oddílu</h3>
                  <ClassificationBadge type="dolozeno" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Existence hotovosti v pokladně oddílu k 31.12.2020 ve výši 132.523 Kč byla potvrzena
                  písemnou komunikací. K datu zveřejnění spolek neeviduje její předání ani vyúčtování.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Písemná komunikace, policejní protokol, výpověď při výslechu (2024).
                </p>
              </div>

              {/* 5. Členské příspěvky */}
              <div className="p-4 rounded-lg border-2 bg-yellow-50 border-yellow-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Nezaplacené členské příspěvky</h3>
                  <ClassificationBadge type="evidovano" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z evidence vyplývá, že členské příspěvky za období 2021-2024 ve výši 63.200 Kč
                  (200 Kč × 4 roky × 79 členů) nebyly uhrazeny.
                </p>
                <p className="text-sm text-slate-900 mb-2">
                  Tyto příspěvky měly být odvedeny svazům ČSTV, Ústeckému kraji a obci.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Účetní evidence spolku.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nedoložená technická dokumentace */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📄 Nedoložená technická dokumentace
          </h2>
          <div className="bg-blue-50 rounded-xl border-2 border-blue-200 p-4 md:p-8">
            <p className="text-sm text-blue-900 mb-6">
              <strong>Kontext:</strong> K datu zveřejnění spolek neeviduje doložení následujících dokumentů
              týkajících se provozu lyžařského areálu, přestože byly zaslány opakované výzvy k jejich předání (2021-2024).
            </p>
            <div className="space-y-4">
              {actor.missingDocuments.map((doc, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border-2 border-blue-200">
                  <span className="text-2xl flex-shrink-0">{doc.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-slate-900">{doc.title}</h3>
                      <ClassificationBadge type={doc.classification} />
                    </div>
                    <p className="text-sm text-slate-700">
                      {doc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-600 rounded">
              <p className="text-sm text-blue-900">
                <strong>Poznámka:</strong> Absence těchto dokumentů komplikuje pokračování v provozu lyžařského areálu,
                protože bez průkazů technické způsobilosti a revizních zpráv nelze provozovat lyžařské vleky
                v souladu s platnými bezpečnostními předpisy.
              </p>
            </div>

            <div className="mt-4 text-xs text-blue-700">
              <strong>Podklad:</strong> Výzvy k předání dokumentace ze dne 13.9.2021, 10.12.2021, 11/2023.
            </div>
          </div>
        </section>

        {/* Časová osa */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Časová osa klíčových událostí
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-4">
              {actor.keyEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border-2 border-slate-200 hover:shadow-md transition"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="font-bold text-slate-900">{event.text}</div>
                      <ClassificationBadge type={event.classification} />
                    </div>
                    {event.amount && (
                      <div className="text-lg font-bold text-blue-700 mt-1">
                        {event.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Porovnání s ostatními oddíly */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Srovnání evidované škody oddílů
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-100 border-2 border-blue-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⛷️</span>
                  <div>
                    <div className="font-bold text-slate-900">Lyžařský oddíl</div>
                    <div className="text-sm text-slate-600">Nejvyšší evidovaná škoda</div>
                  </div>
                </div>
                <div className="text-xl font-black text-blue-700">{(1041378).toLocaleString('cs-CZ')} Kč</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏓</span>
                  <div>
                    <div className="font-bold text-slate-900">Stolní tenis</div>
                    <div className="text-sm text-slate-600">Druhá nejvyšší</div>
                  </div>
                </div>
                <div className="text-xl font-black text-orange-700">{(653659).toLocaleString('cs-CZ')} Kč</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥋</span>
                  <div>
                    <div className="font-bold text-slate-900">Karate</div>
                    <div className="text-sm text-slate-600">Třetí nejvyšší</div>
                  </div>
                </div>
                <div className="text-xl font-black text-yellow-700">{(350598).toLocaleString('cs-CZ')} Kč</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Celková evidovaná škoda všech oddílů</span>
                <span className="text-xl font-black text-slate-900">{(2045635).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">
                Podrobný rozpis na stránce{' '}
                <a href="/rozpad-skody" className="text-blue-600 hover:underline font-semibold">
                  Rozpad škody podle kategorií
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block p-5 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{link.icon}</span>
                  <span className="font-bold text-slate-900">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA for corrections */}
        <section className="mb-12">
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4 md:p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Máte námitku k uvedeným údajům?
            </h3>
            <p className="text-slate-700 mb-4">
              Pokud máte podloženou námitku k jakémukoli údaji na této stránce, kontaktujte nás
              prostřednictvím stránky{' '}
              <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
                Právní rámec a kontakt
              </a>
              . Po prověření provedeme opravu nebo upřesníme metodiku výpočtu.
            </p>
            <a
              href="/oprava-nepravd"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              → Jak funguje proces opravy nepravd
            </a>
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-between pt-8 border-t-2 border-slate-200">
          <a
            href="/akteri/jaromir-pivonka"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Jaromír Pivoňka</span>
          </a>
          <a
            href="/akteri"
            className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-slate-700 transition"
          >
            <span>Přehled aktérů</span>
          </a>
          <a
            href="/akteri/martin-kulik"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Martin Kulík</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
