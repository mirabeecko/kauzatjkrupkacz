export default function KdoMelVestClenskouEvidenciPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Členství</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
          ⚠️ Důležitá otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Kdo měl vést členskou evidenci?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Evidence členů spolku je základním dokumentem pro určení, kdo má právo
            hlasovat a rozhodovat. Bez ní nelze ověřit legitimitu schůzí ani rozhodnutí.
          </p>
          <p className="mt-3">
            <strong>Klíčové problémy:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Předsedové oddílů nikdy nepředali seznamy členů</li>
            <li>Brožek nemohl ověřit, kdo je skutečně členem</li>
            <li>3+ roky opakovaných výzev ignorováno</li>
          </ul>
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
            title="Stanovy TJ: Předsedové oddílů mají povinnost předat seznamy"
            evidence={['Stanovy TJ Krupka', 'Email 13.9.2021', 'Email 10.12.2021']}
          >
            <p>
              <strong>Stanovy TJ Krupka jasně stanovují:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Předsedové oddílů mají povinnost vést evidenci členů svého oddílu</li>
              <li>Seznamy členů musí předat předsedovi TJ Krupka</li>
              <li>Předseda TJ konsoliduje evidenci všech členů</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Opakované výzvy ignorovány (2021-2023)"
            evidence={['Email 13.9.2021', 'Email 10.12.2021', 'Předžalobní výzvy 11/2023']}
          >
            <p className="font-semibold">
              Brožek opakovaně žádal o předání seznamů členů:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>13.9.2021:</strong> První výzva s lhůtou do 26.9.2021 - ignorována</li>
              <li><strong>10.12.2021:</strong> Opakovaná výzva - ignorována</li>
              <li><strong>11/2023:</strong> Předžalobní výzvy Vanišovi, Vlachovi, Kulíkovi - ignorovány</li>
              <li><strong>3+ roky:</strong> Žádný seznam členů nebyl předán</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Brožek nemohl ověřit členství"
            evidence={['Zápisy z jednání', 'Rozhodčí komise ČAST']}
          >
            <p>
              Bez seznamů členů nemohl Brožek:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Ověřit, kdo je skutečně členem TJ Krupka</li>
              <li>Pozvat všechny členy na shromáždění</li>
              <li>Kontrolovat, zda příspěvky odpovídají počtu členů</li>
              <li>Plnit povinnosti předsedy vůči členům</li>
            </ul>
            <p className="mt-3 font-semibold text-red-700">
              Předsedové oddílů aktivně bránili Brožkovi v plnění povinností.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="ČAST: Evidence členů je povinnost předsedy"
            evidence={['Rozhodčí komise ČAST', 'Zákon o spolcích § 402 NOZ']}
          >
            <p>
              Rozhodčí komise ČAST potvrdila:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Vedení evidence členů je zákonná povinnost</li>
              <li>Předsedové oddílů mají povinnost spolupracovat</li>
              <li>Odmítnutí předat seznamy je porušení stanov i zákona</li>
            </ul>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❓</span>
          Co zůstává nejasné
        </h2>
        <div className="space-y-4">
          <UnknownBox title="Kolik členů skutečně bylo v oddílech?">
            <p>
              Bez předaných seznamů není jasné:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kolik lidí skutečně bylo členy TJ Krupka</li>
              <li>Zda čísla v žalobě odpovídají realitě</li>
              <li>Zda všichni platící věděli, že jsou členy TJ</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Proč předsedové oddílů odmítli seznamy předat?">
            <p>
              Není jasná motivace:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Chtěli skrýt skutečný počet členů?</li>
              <li>Chtěli bránit Brožkovi v plnění povinností?</li>
              <li>Plánovali převzít kontrolu nad TJ?</li>
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
            <h3 className="font-semibold mb-1">§ 402 NOZ - Evidence členů</h3>
            <p className="text-sm">
              Spolek je povinen vést evidenci svých členů. Předseda spolku má povinnost
              zajistit vedení evidence a její aktualizaci.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
            <p className="text-sm">
              Předsedové oddílů mají povinnost spolupracovat s předsedou TJ a předávat
              seznamy členů pro konsolidovanou evidenci.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 247 NOZ - Povinnost loajality</h3>
            <p className="text-sm">
              Členové spolku mají povinnost jednat v zájmu spolku a podporovat
              jeho činnost. Bránění předsedovi v plnění povinností je porušením této povinnosti.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="person" title="Miroslav Brožek" href="/akteri/miroslav-brozek" />
          <RelatedNode type="person" title="Marek Vaniš" href="/akteri/marek-vanis" />
          <RelatedNode type="person" title="Gustav Vlach" href="/akteri/gustav-vlach" />
          <RelatedNode type="person" title="Martin Kulík" href="/akteri/martin-kulik" />
          <RelatedNode type="question" title="Kdo je členem spolku?" href="/otazky/kdo-je-clenem-spolku" />
          <RelatedNode type="question" title="Kdo měl právo rozhodovat?" href="/otazky/kdo-mel-pravo-rozhodovat" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Povinnost:</strong> Předsedové oddílů měli podle stanov povinnost
            předat seznamy členů předsedovi TJ Krupka (Brožkovi).
          </p>
          <p>
            <strong>Selhání:</strong> Vaniš, Vlach a Kulík ignorovali opakované výzvy
            (3+ roky, 2021-2023) a nikdy seznamy nepředali.
          </p>
          <p>
            <strong>Důsledek:</strong> Brožek nemohl plnit povinnosti předsedy - ověřovat
            členství, pozvat členy na schůze, kontrolovat příspěvky.
          </p>
          <p>
            <strong>Právní kvalifikace:</strong> Porušení stanov, § 402 NOZ (evidence členů)
            a § 247 NOZ (povinnost loajality).
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
