export default function JednalPredsedaVSouladuSeZakonemPage() {
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
          Jednal předseda v souladu se zákonem?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Předseda spolku má povinnost jednat s péčí řádného hospodáře a v souladu se zákonem.
            Pokud tuto povinnost poruší, může nést odpovědnost.
          </p>
          <p className="mt-3">
            <strong>Povinnosti předsedy:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Řídit spolek v souladu se stanovami a zákonem</li>
            <li>Chránit majetek spolku</li>
            <li>Vymáhat pohledávky</li>
            <li>Svolávat řádné schůze</li>
            <li>Jednat s péčí řádného hospodáře</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Co předseda Brožek udělal správně
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Svolal řádné shromáždění delegátů (25.1.2024)"
            evidence={['Zápis ze shromáždění', 'Pozvánky', 'Prezenční listina']}
          >
            <p>
              Předseda svolal shromáždění delegátů v souladu se stanovami, s řádnou pozvánkou
              a programem. Shromáždění se konalo v lednu 2024.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Opakovaně vyzýval k předání seznamů členů"
            evidence={['Email 13.9.2021', 'Email 10.12.2021', 'Předžalobní výzvy 11/2023']}
          >
            <p>
              Předseda opakovaně vyzýval předsedy oddílů k předání seznamů členů:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>13.9.2021 - První výzva s lhůtou do 26.9.2021</li>
              <li>10.12.2021 - Opakovaná výzva</li>
              <li>11/2023 - Předžalobní výzvy</li>
            </ul>
            <p className="mt-2">
              Všechny výzvy byly ignorovány.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Vyloučil problémové členy po řádném procesu"
            evidence={['Doručenky 28.11.2023', 'Rozhodčí komise ČAST', 'Předžalobní výzvy']}
          >
            <p>
              Po 3+ letech ignorování výzev a po předžalobních výzvách předseda vyloučil
              Vaniše a Pivoňku (28.11.2023).
            </p>
            <p className="mt-2">
              <strong>Rozhodčí komise ČAST potvrdila:</strong> Vyloučení bylo provedeno v souladu
              se stanovami a zákonem.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Podal trestní oznámení"
            evidence={['Trestní oznámení', 'Policie ČR']}
          >
            <p>
              Předseda podal trestní oznámení na Vaniše, Vlacha a Kulíka pro podezření ze
              zpronevěry (§ 206 TZ).
            </p>
            <p className="mt-2">
              To je povinnost předsedy - chránit majetek spolku a vymáhat pohledávky.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Řádně platil členské příspěvky"
            evidence={['Doklad o platbě', 'ČAST potvrzení']}
          >
            <p>
              Předseda řádně platil členské příspěvky za TJ Krupka do ČAST (2.400 Kč/rok).
            </p>
            <p className="mt-2">
              Na rozdíl od Vaniše, Vlacha a Kulíka, kteří neplatili příspěvky za své oddíly.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❓</span>
          Co mohl udělat jinak
        </h2>
        <div className="space-y-4">
          <UnknownBox title="Mohl jednat dříve?">
            <p>
              Kritika: Předseda mohl vyloučit problémové členy dříve (např. v roce 2022).
            </p>
            <p className="mt-2">
              <strong>Obrana:</strong> Předseda dal možnost nápravy. Opakovaně vyzýval,
              čekal na reakci. Teprve po 3+ letech a předžalobních výzvách vyloučil.
            </p>
          </UnknownBox>

          <UnknownBox title="Měl informovat veřejnost dříve?">
            <p>
              Předseda mohl informovat členy a veřejnost o problémech dříve a transparentněji.
            </p>
            <p className="mt-2">
              <strong>Důvod opatrnosti:</strong> Obava z pomluvy, snaha řešit záležitost
              vnitřně nejprve.
            </p>
          </UnknownBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-700">
          <div>
            <h3 className="font-semibold mb-1">§ 159 NOZ - Péče řádného hospodáře</h3>
            <p className="text-sm">
              Statutární orgán je povinen při výkonu funkce jednat s péčí řádného hospodáře.
              To zahrnuje ochranu majetku a vymáhání pohledávek.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 258 NOZ - Vyloučení člena</h3>
            <p className="text-sm">
              Člen může být vyloučen, pokud závažně poruší povinnosti člena. Předseda postupoval
              v souladu s tímto ustanovením.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka § 13</h3>
            <p className="text-sm">
              Stanovy stanovují postup pro vyloučení člena. Předseda tento postup dodržel.
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
          <RelatedNode type="event" title="28.11.2023 - Vyloučení" href="/udalosti" />
          <RelatedNode type="document" title="Rozhodčí komise ČAST" href="/cast" />
          <RelatedNode type="question" title="Kdo koho poškodil?" href="/otazky/kdo-koho-poskodil" />
          <RelatedNode type="event" title="Trestní oznámení" href="/udalosti" />
          <RelatedNode type="insight" title="Péče řádného hospodáře" href="/temata" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>ANO</strong> - Předseda Brožek jednal v souladu se zákonem a stanovami.
          </p>
          <p>
            <strong>Prokázáno:</strong> Opakovaně vyzýval k nápravě, dal možnost reakce,
            teprve po 3+ letech vyloučil problémové členy. Podal trestní oznámení.
            Svolal řádné shromáždění.
          </p>
          <p>
            <strong>Rozhodčí komise ČAST i Krajský soud</strong> potvrdily, že předseda
            jednal v souladu se zákonem.
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
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
