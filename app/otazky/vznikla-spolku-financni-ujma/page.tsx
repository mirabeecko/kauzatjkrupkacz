export default function VznikladSpolkuFinancniUjma() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Finance</span>
      </nav>

      {/* Hlavička otázky */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Vznikla spolku finanční újma?
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
            Finanční újma je klíčovým důkazem pochybení předsedů oddílů. Pokud vznikla škoda:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Máme důkaz o porušení povinností</li>
            <li>Spolek má právo na náhradu škody</li>
            <li>Může jít o trestný čin (zpronevěra, podvod)</li>
            <li>Ohrožuje to existenci spolku</li>
          </ul>
          <p className="mt-3">
            <strong>Celková vyčíslená škoda: 2.476.497 Kč</strong>
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
            title="Prokázaná škoda: 2.476.497 Kč"
            evidence={['TJ ODDÍLY 2021-2023 - Finanční výkaz', 'Předžalobní výzvy 11/2023']}
          >
            <p>
              Celková škoda byla vyčíslena na základě finančního auditu:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>1.041.378 Kč</strong> - Lyžařský oddíl (Gustav Vlach)</li>
              <li><strong>653.659 Kč</strong> - Stolní tenis (Marek Vaniš)</li>
              <li><strong>481.460 Kč</strong> - Karate (Martin Kulík)</li>
              <li><strong>300.000 Kč</strong> - Úraz na lyžích (přesun odpovědnosti)</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Nezaplacené energie: 556.375 Kč"
            evidence={['Faktury za energie 2020-2023', 'Rozpis nákladů po oddílech']}
          >
            <p>
              Oddíly používaly prostory spolku, ale energie neplatily:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Lyžařský oddíl: 256.455 Kč (nejvyšší dluh)</li>
              <li>Stolní tenis: 43.466 Kč</li>
              <li>Karate: 256.454 Kč</li>
            </ul>
            <p className="mt-2">
              <strong>Spolek musel tyto náklady pokrýt ze svého rozpočtu.</strong>
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Zapřené oddílové příspěvky: 1.179.000 Kč"
            evidence={['Výslech Vaniše - přiznal vybírání příspěvků', 'Finanční výkaz oddílů']}
          >
            <p>
              Předsedové oddílů vybírali příspěvky od členů, ale spolku je neodvedli:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Stolní tenis (Vaniš): 518.400 Kč za 3,6 roku</li>
              <li>Lyžařský oddíl (Vlach): 379.200 Kč za 4 roky</li>
              <li>Karate (Kulík): 281.400 Kč za 4 roky</li>
            </ul>
            <p className="mt-2">
              Vaniš při výslechu <strong>přiznal</strong>, že vybíral příspěvky jménem spolku.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Nepředané pokladny oddílů: 176.318 Kč"
            evidence={['Email Vlach - přiznal hotovost 132.523 Kč', 'Výkaz pokladen k 31.12.2020']}
          >
            <p>
              Předsedové oddílů měli v pokladnách hotovost, kterou nepředali:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Vlach: 132.523 Kč (přiznal v emailu)</li>
              <li>Vaniš: 43.793 Kč</li>
            </ul>
            <p className="mt-2">
              Vlach existenci hotovosti písemně potvrdil, ale nikdy ji nepředal.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Nezaplacené členské příspěvky: 164.804 Kč"
            evidence={['Výkaz členských příspěvků ČSTV, kraj, obec']}
          >
            <p>
              Oddíly neplatily povinné příspěvky nadřízeným svazům:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Lyžařský oddíl: 63.200 Kč</li>
              <li>Stolní tenis: 48.000 Kč</li>
              <li>Karate: 53.604 Kč</li>
            </ul>
            <p className="mt-2">
              Tyto příspěvky musel zaplatit spolek ze svého rozpočtu.
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
            title="Kam zmizely vybírané příspěvky?"
          >
            <p>
              Pokud předsedové oddílů vybírali příspěvky (Vaniš to přiznal), kam peníze šly?
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Použili je pro oddíl?</li>
              <li>Ponechali si je osobně?</li>
              <li>Předali je někomu jinému?</li>
            </ul>
            <p className="mt-2">
              Bez účetnictví oddílů a bankovních výpisů to nelze zjistit.
            </p>
          </UnknownBox>

          <UnknownBox
            title="Kolik členů skutečně zaplatilo?"
          >
            <p>
              Výpočty škody jsou založeny na odhadu počtu členů. Bez seznamů členů nevíme:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kolik lidí skutečně bylo členy</li>
              <li>Kolik z nich platilo příspěvky</li>
              <li>Komu platili (spolku nebo předsedům oddílů)</li>
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
            <h3 className="font-semibold mb-1">§ 2951 NOZ - Náhrada škody</h3>
            <p className="text-sm">
              Kdo poruší povinnost a způsobí tím škodu, je povinen ji nahradit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 206 TZ - Zpronevěra</h3>
            <p className="text-sm">
              Kdo si přisvojí cizí věc, která mu byla svěřena, může být potrestán.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 209 TZ - Podvod</h3>
            <p className="text-sm">
              Kdo uvede někoho v omyl a způsobí tím škodu na cizím majetku, může být potrestán.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
            <p className="text-sm">
              Předsedové oddílů měli povinnost odváděl členské příspěvky do společné pokladny.
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
            type="person"
            title="Gustav Vlach - Škoda 1.041.378 Kč"
            href="/akteri/gustav-vlach"
          />
          <RelatedNode
            type="person"
            title="Marek Vaniš - Škoda 653.659 Kč"
            href="/akteri/marek-vanis"
          />
          <RelatedNode
            type="person"
            title="Martin Kulík - Škoda 481.460 Kč"
            href="/akteri/martin-kulik"
          />
          <RelatedNode
            type="question"
            title="Kdo nakládal s příspěvky?"
            href="/otazky/kdo-nakladal-s-prispevky"
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
            <strong>Prokázáno:</strong> Spolku vznikla škoda minimálně 2.476.497 Kč. Největší část
            tvoří zapřené oddílové příspěvky (1.179.000 Kč) a nezaplacené energie (556.375 Kč).
          </p>
          <p>
            <strong>Nejasné:</strong> Kam zmizely vybírané příspěvky a jak velká je skutečná škoda
            (závisí na počtu členů, který není znám).
          </p>
          <p>
            <strong>Důsledek:</strong> Škoda ohrožuje existenci spolku a může naplňovat znaky
            trestných činů zpronevěry a podvodu.
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
