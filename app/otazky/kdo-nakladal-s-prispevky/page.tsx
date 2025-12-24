export default function KdoNakladalSPrispevkyPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Finance</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Kdo nakládal s příspěvky?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Příspěvky členů jsou základním zdrojem příjmů spolku. Kdo je vybírá a jak s nimi nakládá
            určuje, zda spolek může plnit své závazky.
          </p>
          <p className="mt-3">
            <strong>Dva druhy příspěvků:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Členské příspěvky (200 Kč/rok/osoba):</strong> Patří přímo spolku TJ Krupka</li>
            <li><strong>Oddílové příspěvky (různé částky):</strong> Také patří spolku, oddíly jsou součástí TJ</li>
          </ul>
          <p className="mt-3 font-semibold">
            Předsedové oddílů nemají právo ponechat si příspěvky. Vše patří spolku.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Prokázané skutečnosti
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Vaniš: Vybíral příspěvky, ale neodváděl je spolku"
            evidence={['Výpověď Vaniše při výslechu', 'PDF "TJ ODDÍLY 2021-2023"', 'NS ČR 7 Tdo 102/2019']}
          >
            <p className="font-semibold text-red-700">
              Vaniš při výslechu přiznal: "Vybíral jsem příspěvky jménem spolku"
            </p>
            <p className="mt-2">
              <strong>Ale nikdy je neodvedl TJ Krupka:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Členské příspěvky (200 Kč/rok): 48.000 Kč nezaplaceno</li>
              <li>Oddílové příspěvky: 518.400 Kč (60 členů × 2.400 Kč/rok × 3 roky)</li>
              <li>Celkem: 566.400 Kč zadrženo</li>
            </ul>
            <p className="mt-3">
              <strong>NS ČR 7 Tdo 102/2019:</strong> Příspěvky se stávají majetkem jednoty
              (TJ Krupka) okamžikem jejich předání.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Vlach: Přiznal pokladnu 132.523 Kč, kterou nepředal"
            evidence={['Výpověď při výslechu', 'PDF "TJ ODDÍLY 2021-2023"']}
          >
            <p>
              Gustav Vlach při výslechu přiznal, že má v pokladně lyžařského oddílu 132.523 Kč.
              <strong className="text-red-700"> Nikdy je nepředal TJ Krupka.</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Členské příspěvky: 63.200 Kč nezaplaceno</li>
              <li>Oddílové příspěvky: 379.200 Kč (79 členů × 1.200 Kč/rok × 4 roky)</li>
              <li>Pokladna: 132.523 Kč nepředána</li>
              <li>Celkem: 574.923 Kč zadrženo</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Kulík: Nikdy nebyl předsedou oddílu karate"
            evidence={['Zápis z roku 2018', 'PDF "TJ ODDÍLY 2021-2023"']}
          >
            <p>
              Podle zápisu byl předsedou oddílu karate <strong>Jiří Kulík</strong>, nikoliv Martin Kulík.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Členské příspěvky: 32.000 Kč nezaplaceno</li>
              <li>Oddílové příspěvky: 316.800 Kč (40 členů × 3.600 Kč/rok)</li>
              <li>Pokladna: 1.798 Kč nepředána</li>
              <li>Celkem: 350.598 Kč zadrženo</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Příspěvky nebyly zaúčtovány ani předány"
            evidence={['Účetnictví TJ Krupka', 'Výzvy k zaplacení']}
          >
            <p>
              V účetnictví TJ Krupka nejsou zaúčtovány žádné příspěvky od oddílů Vaniše, Vlacha
              a Kulíka za období 2021-2023.
            </p>
            <p className="mt-2 font-semibold">
              Celková částka zadržených oddílových příspěvků: 1.214.400 Kč (59% celkové škody)
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❓</span>
          Co zůstává nejasné
        </h2>
        <div className="space-y-4">
          <UnknownBox title="Kde skončily vybr ané příspěvky?">
            <p>
              Pokud Vaniš, Vlach a Kulík vybírali příspěvky (přiznali to), kam peníze zmizely?
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Byly použity na provoz oddílů?</li>
              <li>Byly použity na osobní účely?</li>
              <li>Jsou stále někde uloženy?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Kolik členů skutečně zaplatilo?">
            <p>
              Protože nebyly předány seznamy členů, není jasné:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kolik lidí skutečně zaplatilo příspěvky</li>
              <li>Kolik lidí považovalo příspěvky za dobrovolné vs. povinné</li>
              <li>Zda všichni věděli, že platí členům TJ Krupka (ne jen oddílu)</li>
            </ul>
          </UnknownBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-900">
          <div>
            <h3 className="font-semibold mb-1">NS ČR 7 Tdo 102/2019 - Příspěvky jako majetek TJ</h3>
            <p className="text-sm">
              Příspěvky se stávají majetkem tělovýchovné jednoty okamžikem jejich předání.
              Oddíly jsou součástí TJ, nemají samostatnou právní subjektivitu.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 206 TZ - Zpronevěra</h3>
            <p className="text-sm">
              Kdo si přisvojí cizí věc, která mu byla svěřena, dopustí se zpronevěry.
              Trest: až 2 roky (základní sazba), až 5 let (větší škoda).
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
            <p className="text-sm">
              Příspěvky členů patří spolku. Předsedové oddílů mají povinnost odvádět příspěvky
              předsedovi spolku.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="person" title="Marek Vaniš - 566.400 Kč" href="/akteri/marek-vanis" />
          <RelatedNode type="person" title="Gustav Vlach - 574.923 Kč" href="/akteri/gustav-vlach" />
          <RelatedNode type="person" title="Martin Kulík - 350.598 Kč" href="/akteri/martin-kulik" />
          <RelatedNode type="question" title="Vznikla spolku finanční újma?" href="/otazky/vznikla-spolku-financni-ujma" />
          <RelatedNode type="question" title="Kdo koho poškodil?" href="/otazky/kdo-koho-poskodil" />
          <RelatedNode type="document" title="Trestní oznámení" href="/udalosti" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Prokázáno:</strong> Vaniš, Vlach a Kulík vybírali příspěvky jménem spolku,
            ale nikdy je neodvedli TJ Krupka.
          </p>
          <p>
            <strong>Celková škoda:</strong> 1.214.400 Kč (oddílové příspěvky) + 143.200 Kč (členské příspěvky)
            + 178.114 Kč (nepředané pokladny) = 1.535.714 Kč
          </p>
          <p>
            <strong>Právní kvalifikace:</strong> Podezření ze zpronevěry § 206 TZ.
            NS ČR potvrdil, že příspěvky patří TJ od okamžiku předání.
          </p>
          <p>
            <strong>Nejasné:</strong> Kam peníze zmizely, kolik členů skutečně zaplatilo.
          </p>
        </div>
      </section>
    </div>
  );
}

interface FactBoxProps {
  status: 'proven' | 'claimed' | 'disputed';
  title: string;
  evidence: string[];
  children: React.ReactNode;
}

function FactBox({ status, title, evidence, children }: FactBoxProps) {
  const statusColors = {
    proven: 'bg-green-50 border-green-300',
    claimed: 'bg-yellow-50 border-yellow-300',
    disputed: 'bg-red-50 border-red-300',
  };

  const statusLabels = {
    proven: '✅ Prokázáno',
    claimed: '⚠️ Tvrzeno',
    disputed: '❌ Sporné',
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${statusColors[status]}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2">{statusLabels[status]}</span>
      </div>
      <div className="text-sm text-slate-900 space-y-2">
        {children}
      </div>
      {evidence.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-300">
          <div className="text-xs font-semibold text-slate-600 mb-1">Důkazy:</div>
          <ul className="text-xs text-slate-600 space-y-1">
            {evidence.map((e, i) => (
              <li key={i}>📎 {e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function UnknownBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❓</span>
        {title}
      </h3>
      <div className="text-sm text-slate-900 space-y-2">
        {children}
      </div>
    </div>
  );
}

interface RelatedNodeProps {
  type: string;
  title: string;
  href: string;
}

function RelatedNode({ type, title, href }: RelatedNodeProps) {
  const typeLabels: Record<string, string> = {
    event: '📅 Událost',
    person: '👤 Osoba',
    document: '📄 Dokument',
    question: '❓ Otázka',
    insight: '💡 Pointa',
  };

  return (
    <a
      href={href}
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
