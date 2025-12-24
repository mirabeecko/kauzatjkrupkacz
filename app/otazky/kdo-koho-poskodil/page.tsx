export default function KdoKohoPoskodil() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Odpovědnost</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Kdo koho poškodil?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            V kauze existují dvě protich

odné verze:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Verze A:</strong> Předsedové oddílů (Vaniš, Vlach, Kulík) poškodili spolek</li>
            <li><strong>Verze B:</strong> Nový předseda (Brožek) poškodil oddíly a jejich členy</li>
          </ul>
          <p className="mt-3">
            Odpověď na tuto otázku určuje, kdo má právo na ochranu a náhradu škody.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Co víme (prokázaná fakta)
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Spolku vznikla prokázaná škoda 2,48 mil. Kč"
            evidence={['Finanční výkazy oddílů', 'Faktury za energie', 'Předžalobní výzvy']}
          >
            <p>Škoda vznikla tím, že předsedové oddílů:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Neodváděli oddílové příspěvky (1,18 mil. Kč)</li>
              <li>Neplatili energie (556 tis. Kč)</li>
              <li>Nepředali pokladny oddílů (176 tis. Kč)</li>
              <li>Neplatili členské příspěvky svazům (165 tis. Kč)</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Předseda Brožek jednal v souladu se zákonem"
            evidence={['§ 239 NOZ', 'Rozhodnutí soudu o zamítnutí žalob']}
          >
            <p>Krajský soud potvrdil:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Vyloučení Vaniše a Pivoňky bylo v souladu s § 239 NOZ</li>
              <li>Předseda měl právo požadovat plnění povinností</li>
              <li>Předseda měl právo jednat jménem spolku</li>
            </ul>
          </FactBox>

          <FactBox
            status="claimed"
            title="Tvrzení předsedů oddílů: Brožek nám ublížil"
            evidence={['Žaloby Vaniše, Pivoňky, Vlacha', 'Trestní oznámení na Brožka']}
          >
            <p>Předsedové oddílů tvrdí:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Brožek jim bezdůvodně vzal klíče od prostor</li>
              <li>Porušil jim právo na členství</li>
              <li>Způsobil jim škodu na majetku oddílů</li>
              <li>Dopustil se trestného činu</li>
            </ul>
            <p className="mt-2 font-semibold">
              Soud všechny žaloby ZAMÍTL. Tvrzení nebyla prokázána.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❓</span>
          Co nevíme / co chybí
        </h2>
        <div className="space-y-4">
          <UnknownBox title="Byla hráčům stolního tenisu způsobena škoda?">
            <p>
              Hráči tvrdí, že nemohli trénovat a přišli o příjmy z turnajů. Ale:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Nebyli vedeni jako členové TJ</li>
              <li>Platili příspěvky Vanišovi, ne spolku</li>
              <li>Měli možnost přestoupit k jinému klubu</li>
            </ul>
          </UnknownBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg shadow">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-700">
          <div>
            <h3 className="font-semibold mb-1">§ 2951 NOZ - Náhrada škody</h3>
            <p className="text-sm">
              Kdo poruší povinnost a způsobí škodu, je povinen ji nahradit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 239 NOZ - Vyloučení člena</h3>
            <p className="text-sm">
              Spolek může vyloučit člena, který hrubě porušuje povinnosti.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="question" title="Vznikla spolku finanční újma?" href="/otazky/vznikla-spolku-financni-ujma" />
          <RelatedNode type="question" title="Jednal předseda v souladu se zákonem?" href="/otazky/jednal-predseda-v-souladu-se-zakonem" />
          <RelatedNode type="person" title="Marek Vaniš" href="/akteri/marek-vanis" />
          <RelatedNode type="person" title="Gustav Vlach" href="/akteri/gustav-vlach" />
        </div>
      </section>

      <section className="p-4 md:p-6 bg-amber-50 rounded-lg shadow">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Prokázáno:</strong> Předsedové oddílů způsobili spolku škodu 2,48 mil. Kč.
            Předseda Brožek jednal v souladu se zákonem (potvrzeno soudem).
          </p>
          <p>
            <strong>Neprokázáno:</strong> Tvrzení, že Brožek poškodil oddíly nebo jejich členy.
            Všechny žaloby byly soudem zamítnuty.
          </p>
          <p>
            <strong>Závěr:</strong> Škodu způsobili předsedové oddílů spolku, ne naopak.
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
    <div className={`p-4 rounded-lg border ${statusColors[status]}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2">{statusLabels[status]}</span>
      </div>
      <div className="text-sm text-slate-700 space-y-2">
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
    <div className="p-4 rounded-lg border bg-slate-50 border-slate-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❓</span>
        {title}
      </h3>
      <div className="text-sm text-slate-700 space-y-2">
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
    <a href={href} className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
