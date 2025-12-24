export default function OdpovednostZaSvereneUkolyPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Odpovědnost</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
          ⚠️ Důležitá otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Kdo nesl odpovědnost za svěřené úkoly?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            V každé organizaci existuje dělba práce a odpovědnosti. Pokud někdo
            přijme úkol, má povinnost ho splnit nebo se z něj řádně vyvázat.
          </p>
          <p className="mt-3">
            <strong>Klíčové oblasti odpovědnosti:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Vedení oddílů - předsedové oddílů</li>
            <li>Evidence členů - předsedové oddílů + předseda TJ</li>
            <li>Hospodaření s příspěvky - předsedové oddílů</li>
            <li>Celkové vedení TJ - předseda TJ (Brožek)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Odpovědnosti podle stanov
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Předseda TJ Krupka (Miroslav Brožek)"
            evidence={['Stanovy TJ Krupka', 'Zápis z volby 24.8.2021']}
          >
            <p className="font-semibold">
              Brožek měl odpovědnost za:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Celkové vedení TJ Krupka</li>
              <li>Svolávání shromáždění delegátů</li>
              <li>Kontrolu hospodaření oddílů</li>
              <li>Vedení konsolidované evidence členů</li>
              <li>Placení závazků TJ (energie, nájemné, atd.)</li>
              <li>Reprezentaci TJ navenek</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Předsedové oddílů (Vaniš, Vlach, Kulík)"
            evidence={['Stanovy TJ Krupka', 'Zápisy z jednání']}
          >
            <p className="font-semibold">
              Předsedové oddílů měli odpovědnost za:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Vedení svých oddílů (stolní tenis, lyže, karate)</li>
              <li>Vedení evidence členů oddílu</li>
              <li>Vybírání příspěvků od členů oddílu</li>
              <li>Odvádění příspěvků předsedovi TJ</li>
              <li>Předávání seznamů členů předsedovi TJ</li>
              <li>Spolupráci s předsedou TJ</li>
            </ul>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Kdo splnil své povinnosti
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Brožek: Plnil povinnosti předsedy"
            evidence={['Účetnictví TJ', 'Zápisy z jednání', 'Rozhodčí komise ČAST']}
          >
            <p>
              <strong>Brožek prokázal, že:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Platil energie, nájemné a další závazky TJ</li>
              <li>Svolal legitimní shromáždění 25.1.2024</li>
              <li>Opakovaně žádal předsedové oddílů o seznamy členů (3+ roky)</li>
              <li>Vyloučil nečinné členy po řádném procesu</li>
              <li>Podal trestní oznámení na zpronevěru</li>
            </ul>
            <p className="mt-3 text-green-700 font-semibold">
              ČAST i krajský soud potvrdily, že Brožek jednal v souladu se zákonem.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❌</span>
          Kdo nesplnil své povinnosti
        </h2>
        <div className="space-y-4">
          <DisputedBox title="Vaniš: Nesplnil povinnosti předsedy oddílu">
            <p className="font-semibold text-red-700">
              Prokázaná porušení:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Nikdy nepředal seznam členů oddílu (3+ roky ignorování výzev)</li>
              <li>Vybíral příspěvky, ale neodváděl je TJ (566.400 Kč)</li>
              <li>Neplatil energie (87.259 Kč)</li>
              <li>Po vyloučení svolával nelegitimní schůze</li>
            </ul>
          </DisputedBox>

          <DisputedBox title="Vlach: Nesplnil povinnosti předsedy oddílu">
            <p className="font-semibold text-red-700">
              Prokázaná porušení:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Nikdy nepředal seznam členů oddílu</li>
              <li>Nepředal pokladnu 132.523 Kč (přiznal při výslechu)</li>
              <li>Neodváděl příspěvky TJ (574.923 Kč celkem)</li>
              <li>Neplatil energie (212.662 Kč)</li>
            </ul>
          </DisputedBox>

          <DisputedBox title="Kulík: Nesplnil povinnosti (nebo nebyl předsedou)">
            <p className="font-semibold text-red-700">
              Prokázaná porušení:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Nikdy nebyl oficiálně zvolen předsedou oddílu karate</li>
              <li>Podle zápisu byl předsedou Jiří Kulík (ne Martin)</li>
              <li>Přesto vybíral příspěvky a neodváděl je (350.598 Kč)</li>
              <li>Nikdy nepředal seznam členů ani pokladnu</li>
            </ul>
          </DisputedBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-900">
          <div>
            <h3 className="font-semibold mb-1">§ 247 NOZ - Povinnost loajality</h3>
            <p className="text-sm">
              Každý člen spolku má povinnost jednat v zájmu spolku a podporovat jeho
              činnost. Porušení této povinnosti zakládá odpovědnost za škodu.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 206 TZ - Zpronevěra</h3>
            <p className="text-sm">
              Kdo si přisvojí cizí věc, která mu byla svěřena, dopustí se zpronevěry.
              Předsedové oddílů měli svěřeny příspěvky členů - měli je odvést TJ.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
            <p className="text-sm">
              Stanovy jasně definují povinnosti předsedů oddílů - vést evidenci,
              odvádět příspěvky, spolupracovat s předsedou TJ.
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
          <RelatedNode type="question" title="Jednal předseda v souladu se zákonem?" href="/otazky/jednal-predseda-v-souladu-se-zakonem" />
          <RelatedNode type="question" title="Kdo koho poškodil?" href="/otazky/kdo-koho-poskodil" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Brožek splnil:</strong> Platil závazky, svolával shromáždění, žádal
            o seznamy členů, vyloučil nečinné členy podle zákona. Potvrzeno ČAST i soudem.
          </p>
          <p>
            <strong>Vaniš, Vlach, Kulík nesplnili:</strong> Nikdy nepředali seznamy členů
            (3+ roky ignorování), zadrželi příspěvky (1.5+ mil. Kč), neplatili energie.
          </p>
          <p>
            <strong>Právní odpovědnost:</strong> Porušení povinnosti loajality (§ 247 NOZ),
            podezření ze zpronevěry (§ 206 TZ), porušení stanov TJ Krupka.
          </p>
          <p>
            <strong>Důsledek:</strong> Brožek nemohl plnit povinnosti předsedy kvůli aktivní
            blokaci předsedů oddílů.
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

function DisputedBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border-2 bg-red-50 border-red-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❌</span>
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
