export default function JsouRozhodnutiPlatnaPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Schůze</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Jsou rozhodnutí platná?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Platnost rozhodnutí určuje, zda má rozhodnutí právní účinky. Neplatné rozhodnutí
            = jako by nikdy nebylo přijato.
          </p>
          <p className="mt-3">
            <strong>Rozhodnutí je neplatné, pokud:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Bylo přijato nelegitimní schůzí</li>
            <li>Bylo přijato neop rávněnými osobami</li>
            <li>Porušuje stanovy nebo zákon</li>
            <li>Bylo přijato po prekluzivní lhůtě</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Platná rozhodnutí
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Zvolení Miroslava Brožka předsedou (24.8.2021)"
            evidence={['Zápis ze shromáždění', 'Rozhodčí komise ČAST', 'Krajský soud']}
          >
            <p>
              <strong>Platné a závazné.</strong> Potvrzeno:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Rozhodčí komisí ČAST (2022)</li>
              <li>Krajským soudem v Ústí nad Labem (2024)</li>
              <li>Brožek je legitimním předsedou do roku 2026</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Vyloučení Vaniše a Pivoňky (28.11.2023)"
            evidence={['Doručenky', 'Rozhodčí komise ČAST', 'Předžalobní výzvy']}
          >
            <p>
              <strong>Platné.</strong> Vyloučení provedeno po řádném procesu:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Opakované výzvy (2021-2023) - ignorovány</li>
              <li>Předžalobní výzvy (11/2023) - ignorovány</li>
              <li>Vyloučení v souladu se stanovami § 13</li>
              <li>Potvrzeno Rozhodčí komisí ČAST</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Rozhodnutí shromáždění 25.1.2024"
            evidence={['Zápis ze shromáždění', 'Prezenční listina']}
          >
            <p>
              <strong>Platné.</strong> Shromáždění svolané legitimním předsedou Brožkem,
              účast oprávněných delegátů.
            </p>
            <p className="mt-2">
              Město Krupka toto shromáždění ignorovalo, ale to nemění nic na jeho platnosti.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❌</span>
          Neplatná rozhodnutí
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Všechna rozhodnutí schůzí svolaných Vanišem/Pivoňkou po 28.11.2023"
            evidence={['Doručenka vyloučení', 'Rozhodčí komise ČAST', '§ 258 NOZ']}
          >
            <p className="font-semibold text-red-700">
              NEPLATNÁ - vyloučení členové nemohou svolávat schůze ani přijímat rozhodnutí.
            </p>
            <p className="mt-2">
              Od 28.11.2023 nejsou Vaniš a Pivoňka členy spolku. Nemají žádná práva ani povinnosti.
              Jejich "rozhodnutí" nejsou právně závazná.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Pokus o 'zvolení' Syryčanského předsedou"
            evidence={['Email města', 'Koordinační schůzky', 'Datová schránka']}
          >
            <p className="font-semibold text-red-700">
              NEPLATNÉ - pokus o převrat koordinovaný městem a vyloučenými členy.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Schůze svolána vyloučenými členy (neoprávněné osoby)</li>
              <li>Cíl: "zvolit" Tomáše Syryčanského jako nového předsedu</li>
              <li>Město umožnilo přístup vyloučeným, zablokovalo legitimního předsedu</li>
              <li>V rozporu se stanovami, zákonem i rozhodnutím ČAST</li>
            </ul>
          </FactBox>

          <FactBox
            status="disputed"
            title="Rozhodnutí Krajského soudu o neplatnosti vyloučení"
            evidence={['Rozsudek 30 C 104/2024', '§ 259 NOZ', 'NS ČR 29 Cdo 4627/2016']}
          >
            <p className="font-semibold text-red-700">
              PRAVDĚPODOBNĚ NEPLATNÉ - soud projednal žalobu podanou 39 dní PO prekluzivní lhůtě.
            </p>
            <p className="mt-2">
              <strong>Problém:</strong> Žaloba měla být odmítnuta bez jednání:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Vyloučení doručeno: 28.11.2023</li>
              <li>Prekluzivní lhůta § 259 NOZ: 3 měsíce → 28.2.2024</li>
              <li>Žaloba podána: 8.4.2024 (39 dní po lhůtě!)</li>
            </ul>
            <p className="mt-2">
              Prekluzivní lhůta je NEPROMLČITELNÁ. Soud měl žalobu odmítnout z úřední povinnosti.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-700">
          <div>
            <h3 className="font-semibold mb-1">§ 259 NOZ - Prekluzivní lhůta</h3>
            <p className="text-sm">
              Neplatnost rozhodnutí lze napadnout do 3 měsíců. Tato lhůta je prekluzivní
              (nelze prodloužit ani prominout). Po jejím uplynutí právo zaniká.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 258 NOZ - Důsledky vyloučení</h3>
            <p className="text-sm">
              Vyloučením členství zaniká. Osoba nemá práva člena ani nemůže jednat jménem spolku.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">NS ČR 29 Cdo 4627/2016</h3>
            <p className="text-sm">
              Judikatura k prekluzivní lhůtě § 259 NOZ. Soud má na prekluzivitu přihlédnout
              z úřední povinnosti.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="event" title="24.8.2021 - Zvolení Brožka" href="/udalosti" />
          <RelatedNode type="event" title="28.11.2023 - Vyloučení" href="/udalosti" />
          <RelatedNode type="question" title="Byly schůze legitimní?" href="/otazky/byly-schuze-legitimni" />
          <RelatedNode type="person" title="Miroslav Brožek" href="/akteri/miroslav-brozek" />
          <RelatedNode type="document" title="Rozhodčí komise ČAST" href="/cast" />
          <RelatedNode type="insight" title="Prekluzivní lhůta" href="/detailni-analyza" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Platné:</strong> Zvolení Brožka (2021), vyloučení Vaniše/Pivoňky (2023),
            rozhodnutí shromáždění 25.1.2024.
          </p>
          <p>
            <strong>Neplatné:</strong> Všechna "rozhodnutí" vyloučených členů po 28.11.2023,
            pokus o "zvolení" Syryčanského.
          </p>
          <p>
            <strong>Sporné:</strong> Rozhodnutí Krajského soudu - žaloba podána 39 dní po prekluzivní
            lhůtě, měla být odmítnuta.
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
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
