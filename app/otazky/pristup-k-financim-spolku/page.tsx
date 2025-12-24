export default function PristupKFinancimSpolkuPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Finance</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
          ⚠️ Důležitá otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Kdo měl přístup k financím spolku?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Kontrola nad financemi spolku určuje, kdo může platit závazky, nakládat
            s příspěvky členů a realizovat činnost spolku.
          </p>
          <p className="mt-3">
            <strong>Klíčové otázky:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Kdo měl přístup k bankovním účtům TJ Krupka?</li>
            <li>Kdo kontroloval hospodaření oddílů?</li>
            <li>Proč měl Brožek blokovaný přístup k objektu Pinčesárna?</li>
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
            title="Brožek: Přístup k bankovním účtům TJ Krupka"
            evidence={['Bankovní dokumenty', 'Výpisy z účtů', 'Stanovy TJ']}
          >
            <p>
              <strong>Miroslav Brožek jako legitimní předseda měl:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Přístup k hlavnímu účtu TJ Krupka</li>
              <li>Právo nakládat s financemi spolku podle stanov</li>
              <li>Povinnost kontrolovat hospodaření oddílů</li>
            </ul>
            <p className="mt-2 text-green-700 font-semibold">
              Brožek platil energie, nájemné a další závazky TJ Krupka.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Oddíly: Samostatné pokladny bez kontroly"
            evidence={['PDF \"TJ ODDÍLY 2021-2023\"', 'Výpovědi při výslechu']}
          >
            <p>
              <strong>Předsedové oddílů měli vlastní pokladny:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Vaniš (stolní tenis):</strong> Vybíral příspěvky, neodváděl TJ</li>
              <li><strong>Vlach (lyže):</strong> Pokladna 132.523 Kč, nepředána</li>
              <li><strong>Kulík (karate):</strong> Vybíral příspěvky, neodváděl TJ</li>
            </ul>
            <p className="mt-2 text-red-700 font-semibold">
              Brožek neměl kontrolu nad financemi oddílů - předsedové odmítli spolupráci.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="SPORT Krupka: Blokování přístupu k objektu"
            evidence={['Dokumentace SPORT Krupka', 'Datová schránka', 'Výměna zámků']}
          >
            <p className="font-semibold">
              SPORT Krupka (městská společnost) vyměnila zámky 2×:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>19.12.2023:</strong> První výměna zámků na Pinčesárně</li>
              <li><strong>19.1.2024:</strong> Druhá výměna - 2 DNY po návrhu nájemní smlouvy!</li>
              <li>Legitimní předseda Brožek zablokován</li>
              <li>Vyloučení členové Vaniš a Pivoňka měli přístup</li>
            </ul>
            <p className="mt-3 text-red-700 font-semibold">
              Brožek nemohl fyzicky kontrolovat hospodaření v objektu Pinčesárna.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Energie: Brožek platil, oddíly neplatily"
            evidence={['Faktury', 'Účetnictví TJ', 'PDF \"TJ ODDÍLY 2021-2023\"']}
          >
            <p>
              <strong>Neplacené energie oddílů: 299.921 Kč</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Vaniš (stolní tenis): 87.259 Kč nezaplaceno</li>
              <li>Vlach (lyže): 212.662 Kč nezaplaceno</li>
            </ul>
            <p className="mt-2">
              Brožek platil energie z rozpočtu TJ Krupka, ale oddíly mu svůj podíl
              neodvedly.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❌</span>
          Co nefungovalo
        </h2>
        <div className="space-y-4">
          <DisputedBox title="Předsedové oddílů měli nelegální kontrolu">
            <p>
              Předsedové oddílů fakticky kontrolovali:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Příspěvky členů svých oddílů (zadržovali je)</li>
              <li>Pokladny oddílů (nepředávali je)</li>
              <li>Přístup k objektu Pinčesárna (po výměně zámků)</li>
            </ul>
            <p className="mt-2 font-semibold text-red-700">
              Toto bylo v rozporu se stanovami TJ Krupka a zákonem o spolcích.
            </p>
          </DisputedBox>

          <DisputedBox title="Brožek nemohl plnit povinnosti">
            <p>
              Kvůli blokování přístupu a odmítnutí spolupráce Brožek nemohl:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kontrolovat hospodaření oddílů</li>
              <li>Ověřovat, zda příspěvky jsou řádně odváděny</li>
              <li>Fyzicky přistupovat k dokumentům v Pinčesárně</li>
              <li>Svolávat legitimní shromáždění v prostorách TJ</li>
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
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka - Finanční kontrola</h3>
            <p className="text-sm">
              Předseda TJ má právo a povinnost kontrolovat hospodaření oddílů.
              Oddíly jsou součástí TJ, nemají samostatnou právní subjektivitu.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 214 NOZ - Orgány spolku</h3>
            <p className="text-sm">
              Předseda je statutárním orgánem spolku a má právo jednat jeho jménem
              ve všech věcech, včetně nakládání s majetkem.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">NS ČR 7 Tdo 102/2019</h3>
            <p className="text-sm">
              Příspěvky členů se stávají majetkem tělovýchovné jednoty okamžikem
              jejich předání. Oddíly nemají právo si je ponechat.
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
          <RelatedNode type="event" title="Výměna zámků 2×" href="/mesto-krupka" />
          <RelatedNode type="question" title="Kdo nakládal s příspěvky?" href="/otazky/kdo-nakladal-s-prispevky" />
          <RelatedNode type="question" title="Vznikla spolku finanční újma?" href="/otazky/vznikla-spolku-financni-ujma" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Legitimní přístup:</strong> Brožek jako předseda měl legální přístup
            k bankovním účtům TJ Krupka a platil závazky spolku.
          </p>
          <p>
            <strong>Nelegální kontrola:</strong> Předsedové oddílů (Vaniš, Vlach, Kulík)
            nelegálně zadržovali příspěvky, pokladny a blokovali fyzický přístup.
          </p>
          <p>
            <strong>Blokování:</strong> SPORT Krupka (městská společnost) vyměnila zámky 2×
            a zablokovala Brožkovi přístup k Pinčesárně.
          </p>
          <p>
            <strong>Důsledek:</strong> Brožek nemohl plnit povinnosti předsedy - kontrolovat
            hospodaření, ověřovat příspěvky, přistupovat k dokumentům.
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
