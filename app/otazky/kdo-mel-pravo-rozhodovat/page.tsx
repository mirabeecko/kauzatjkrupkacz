export default function KdoMelPravoRozhodovat() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Členství</span>
      </nav>

      {/* Hlavička otázky */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Kdo měl právo rozhodovat?
        </h1>
      </div>

      {/* Proč je důležitá */}
      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Legitimita rozhodnutí závisí na tom, kdo měl právo je přijímat. Podle stanov TJ Krupka:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Shromáždění delegátů je nejvyšším orgánem spolku</li>
            <li>Rozhoduje většinou hlasů přítomných delegátů</li>
            <li>Delegáty volí členové oddílů</li>
            <li>Předseda spolku řídí spolek mezi shromážděními</li>
          </ul>
          <p className="mt-3">
            <strong>Problém:</strong> Bez jasné evidence členů nelze určit, kdo jsou legitimní delegáti,
            a tedy kdo má právo rozhodovat.
          </p>
        </div>
      </section>

      {/* Co víme */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Co víme (prokázaná fakta)
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="24.8.2021 - Zvolení nového předsedy bylo legitimní"
            evidence={['Zápis ze shromáždění delegátů 24.8.2021', 'Prezenční listina']}
          >
            <p>
              Shromáždění delegátů 24.8.2021 bylo svoláno řádně předchozím předsedou.
              Přítomni byli delegáti všech oddílů včetně Vaniše, Vlacha, Kulíka.
              <strong> Všichni se účastnili volby a nikdo nezpochybnil legitimitu.</strong>
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Předseda má právo řídit spolek mezi shromážděními"
            evidence={['Stanovy TJ Krupka čl. 9', '§ 252 NOZ']}
          >
            <p>
              Podle stanov a občanského zákoníku má předseda právo:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Zastupovat spolek navenek</li>
              <li>Řídit běžnou agendu spolku</li>
              <li>Požadovat plnění povinností od členů a předsedů oddílů</li>
              <li>Svolávat shromáždění delegátů</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Vaniš, Pivoňka neměli právo svolávat schůze po vyloučení"
            evidence={['28.11.2023 - Rozhodnutí o vyloučení', '§ 239 NOZ']}
          >
            <p>
              Po vyloučení z členství (28.11.2023) <strong>ztratili Vaniš a Pivoňka všechna členská práva</strong>,
              včetně práva:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Svolávat schůze spolku</li>
              <li>Účastnit se rozhodování</li>
              <li>Volit a být voleni</li>
              <li>Žalovat spolek</li>
            </ul>
            <p className="mt-2">
              Přesto v prosinci 2023 a únoru 2024 svolávali "mimořádná shromáždění".
            </p>
          </FactBox>
        </div>
      </section>

      {/* Co nevíme / chybí */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❓</span>
          Co nevíme / co chybí
        </h2>
        <div className="space-y-4">
          <UnknownBox
            title="Byli hráči stolního tenisu řádnými členy?"
          >
            <p>
              Protože Vaniš nepředal seznamy členů, není jasné:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Zda byli hráči vedeni jako členové TJ (spolek tvrdí, že ne)</li>
              <li>Zda měli právo volit delegáty</li>
              <li>Zda měli delegáti stolního tenisu legitimitu</li>
            </ul>
          </UnknownBox>

          <UnknownBox
            title="Měli předsedové oddílů právo jednat jménem spolku?"
          >
            <p>
              Stanovy neřeší přesně:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Jaká je pravomoc předsedů oddílů</li>
              <li>Zda mohou jednat jménem spolku</li>
              <li>Zda mohou vybírat příspěvky přímo od členů</li>
            </ul>
          </UnknownBox>
        </div>
      </section>

      {/* Právní kontext */}
      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg shadow">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-700">
          <div>
            <h3 className="font-semibold mb-1">§ 248 NOZ - Shromáždění členů</h3>
            <p className="text-sm">
              Shromáždění členů je nejvyšším orgánem spolku. Rozhoduje o zásadních otázkách.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 252 NOZ - Statutární orgán</h3>
            <p className="text-sm">
              Statutární orgán (předseda) řídí činnost spolku a jedná jeho jménem.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 239 NOZ - Zánik členství</h3>
            <p className="text-sm">
              Vyloučením zaniká členství a člen ztrácí všechna práva spojená s členstvím.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
            <p className="text-sm">
              Stanovy určují strukturu orgánů, pravomoci a způsob rozhodování.
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
            type="question"
            title="Kdo je členem spolku?"
            href="/otazky/kdo-je-clenem-spolku"
          />
          <RelatedNode
            type="question"
            title="Byly schůze legitimní?"
            href="/otazky/byly-schuze-legitimni"
          />
          <RelatedNode
            type="person"
            title="Tomáš Syryčanský - pokus o převrat"
            href="/akteri/tomas-syrycansky"
          />
          <RelatedNode
            type="person"
            title="Miroslav Brožek - legitimní předseda"
            href="/akteri/miroslav-brozek"
          />
        </div>
      </section>

      {/* Shrnutí */}
      <section className="p-4 md:p-6 bg-amber-50 rounded-lg shadow">
        <h3 className="text-xl font-bold text-amber-900 mb-3">
          📌 Shrnutí
        </h3>
        <div className="text-amber-900 space-y-2">
          <p>
            <strong>Prokázáno:</strong> Předseda zvolený 24.8.2021 měl legitimní právo řídit spolek.
            Vaniš a Pivoňka po vyloučení (28.11.2023) ztratili právo rozhodovat.
          </p>
          <p>
            <strong>Nejasné:</strong> Legitimita delegátů oddílů, jejichž členská základna nebyla
            doložena (stolní tenis, lyže, karate).
          </p>
          <p>
            <strong>Důsledek:</strong> Rozhodnutí přijatá legitimním předsedou jsou platná.
            "Schůze" svolané vyloučenými členy nemají právní účinky.
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
    <a
      href={href}
      className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
