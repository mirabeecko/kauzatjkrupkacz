export default function BylySchuzeLegitimnPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Schůze</span>
      </nav>

      {/* Hlavička otázky */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Byly schůze legitimní?
        </h1>
      </div>

      {/* Proč je důležitá */}
      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Legitimita schůzí určuje, zda rozhodnutí přijatá na těchto schůzích jsou platná.
            Nelegitimní schůze = neplatná rozhodnutí.
          </p>
          <p className="mt-3">
            <strong>Klíčové požadavky pro legitimní schůzi:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Správné svolání (oprávněnou osobou)</li>
            <li>Dostatečná pozvánka (čas, místo, program)</li>
            <li>Účast oprávněných osob (členů/delegátů)</li>
            <li>Dosažení kvóra (stanovený počet účastníků)</li>
          </ul>
        </div>
      </section>

      {/* Legitimní schůze */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Prokázané legitimní schůze
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="24.8.2021 - Shromáždění delegátů (zvolení Brožka)"
            evidence={['Zápis ze shromáždění', 'Prezenční listina', 'Rozhodčí komise ČAST']}
          >
            <p>
              Shromáždění delegátů svolané v souladu se stanovami. Účast řádně zvolených delegátů.
              <strong> Legitimita potvrzena Rozhodčí komisí ČAST.</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Svoláno oprávněnou osobou (tehdejším předsedou)</li>
              <li>Dodržena poz vánková lhůta</li>
              <li>Dosaženo kvórum</li>
              <li>Zvolen Miroslav Brožek předsedou na 5 let</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="25.1.2024 - Shromáždění delegátů (Brožkovo svolání)"
            evidence={['Zápis ze shromáždění', 'Pozvánky', 'Prezenční listina']}
          >
            <p>
              Shromáždění svolané legitimním předsedou Miroslavem Brožkem. Účast oprávněných delegátů.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Svoláno předsedou Brožkem</li>
              <li>Řádná pozvánka s programem</li>
              <li>Účast členů s hlasovacím právem</li>
              <li>Rozhodnuto o vyloučení problémových členů</li>
            </ul>
            <p className="mt-2 font-semibold">
              Město Krupka toto shromáždění ignorovalo a den po té podporovalo nelegální schůze.
            </p>
          </FactBox>
        </div>
      </section>

      {/* Nelegitimní schůze */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❌</span>
          Prokázané nelegitimní schůze
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Schůze svolávané Vanišem a Pivoňkou po vyloučení"
            evidence={['Doručenka vyloučení 28.11.2023', 'Rozhodčí komise ČAST', 'Datová schránka města']}
          >
            <p>
              Po vyloučení 28.11.2023 Vaniš a Pivoňka pokračovali ve svolávání schůzí a tvrdili,
              že jsou stále předsedové oddílů.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-red-700 font-semibold">
              <li>Vyloučení členové nemají právo svolávat schůze spolku</li>
              <li>Nemají žádnou funkci v organizační struktuře</li>
              <li>Jejich "rozhodnutí" nejsou právně závazná</li>
            </ul>
            <p className="mt-3">
              <strong>Rozhodčí komise ČAST:</strong> Vyloučení bylo provedeno v souladu se stanovami
              a zákonem. Vaniš a Pivoňka nejsou členové TJ Krupka od 28.11.2023.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Schůze podporované městem Krupka (prosinec 2023 - leden 2024)"
            evidence={['Email Kuzmy', 'Koordinační schůzky', 'Datová schránka']}
          >
            <p>
              Město Krupka a SPORT Krupka podporovaly schůze svolávané vyloučenými členy:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Umožnily přístup vyloučeným členům (výměna zámků)</li>
              <li>Zablokovaly přístup legitimnímu předsedovi</li>
              <li>Ignorovaly oficiální notifikaci o vyloučení (26.1.2024)</li>
              <li>Tlačily na svolání shromáždění do konce ledna</li>
            </ul>
            <p className="mt-3 font-semibold text-red-700">
              Tyto schůze byly nelegitimní, protože:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-red-700">
              <li>Svolány nečleny spolku</li>
              <li>Bez účasti legitimního vedení</li>
              <li>V rozporu se stanovami a zákonem</li>
            </ul>
          </FactBox>
        </div>
      </section>

      {/* Právní kontext */}
      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-700">
          <div>
            <h3 className="font-semibold mb-1">§ 248 NOZ - Shromáždění</h3>
            <p className="text-sm">
              Shromáždění svolává statutární orgán (předseda) nebo jiný orgán určený stanovami.
              Vyloučení členové nejsou oprávněni svolávat shromáždění.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 258 NOZ - Zánik členství</h3>
            <p className="text-sm">
              Členství zaniká vyloučením. Od okamžiku vyloučení osoba nemá práva člena ani nemůže
              jednat jménem spolku.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Rozhodčí komise ČAST</h3>
            <p className="text-sm">
              Potvrdila, že shromáždění 24.8.2021 bylo legitimní a vyloučení Vaniše a Pivoňky
              bylo provedeno v souladu se zákonem.
            </p>
          </div>
        </div>
      </section>

      {/* Související uzly */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode
            type="event"
            title="24.8.2021 - Zvolení nového předsedy"
            href="/udalosti"
          />
          <RelatedNode
            type="event"
            title="28.11.2023 - Vyloučení Vaniše a Pivoňky"
            href="/udalosti"
          />
          <RelatedNode
            type="event"
            title="25.1.2024 - Legitimní shromáždění delegátů"
            href="/udalosti"
          />
          <RelatedNode
            type="person"
            title="Miroslav Brožek - legitimní předseda"
            href="/akteri/miroslav-brozek"
          />
          <RelatedNode
            type="question"
            title="Jsou rozhodnutí platná?"
            href="/otazky/jsou-rozhodnuti-platna"
          />
          <RelatedNode
            type="question"
            title="Kdo měl právo rozhodovat?"
            href="/otazky/kdo-mel-pravo-rozhodovat"
          />
        </div>
      </section>

      {/* Shrnutí */}
      <section className="p-4 md:p-6 bg-amber-50 rounded-lg border-2 border-amber-300">
        <h3 className="text-xl font-bold text-amber-900 mb-3">
          📌 Shrnutí
        </h3>
        <div className="text-amber-900 space-y-2">
          <p>
            <strong>Legitimní:</strong> Shromáždění 24.8.2021 a 25.1.2024 svolané oprávněnými orgány
            spolku v souladu se stanovami.
          </p>
          <p>
            <strong>Nelegitimní:</strong> Všechny schůze svolávané Vanišem a Pivoňkou po jejich vyloučení
            28.11.2023 jsou nelegitimní a jejich rozhodnutí nejsou právně závazná.
          </p>
          <p>
            <strong>Klíč:</strong> Vyloučení členové nemají právo svolávat schůze ani jednat jménem spolku.
            Rozhodčí komise ČAST potvrdila legitimitu vyloučení.
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
      className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
