export default function MetodikaPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Metodika a zdroje
        </h1>
        <p className="text-xl text-slate-600">
          Jak byla škoda vypočtena a jaké podklady jsou k dispozici
        </p>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Důležité upozornění
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            <strong>Tento web není soudním rozhodnutím.</strong> Jedná se o obranné
            shrnutí z dostupných podkladů, které má spolek k dispozici.
          </p>
          <p>
            Cílem je věcná reakce na nepravdivá tvrzení šířená o činnosti spolku
            a jeho orgánů.
          </p>
          <p>
            Všechna uvedená tvrzení jsou založena na dokumentech, které spolek eviduje
            a uchovává pro případné právní řízení.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Výpočet škody
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border-2 bg-white border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Definice škody</h3>
            <p className="text-sm text-slate-900">
              Škoda je definována jako rozdíl mezi stavem, který by nastal při řádném
              plnění povinností podle stanov spolku, a stavem skutečným.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-white border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Sledované období</h3>
            <p className="text-sm text-slate-900">
              Primárně období 2021-2024, s ohledem na některé závazky vzniklé dříve.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-white border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Co je zahrnuto</h3>
            <ul className="text-sm text-slate-900 list-disc list-inside space-y-1">
              <li>Neodvedené členské a oddílové příspěvky podle stanov</li>
              <li>Neuhrazené faktury za energie a služby</li>
              <li>Nepředané pokladny oddílů</li>
              <li>Další doložené závazky vůči spolku</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border-2 bg-white border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Co není zahrnuto</h3>
            <ul className="text-sm text-slate-900 list-disc list-inside space-y-1">
              <li>Odhadované ušlé zisky (pokud nejsou konzervativně spočteny)</li>
              <li>Náklady právního zastoupení</li>
              <li>Nemateriální újma</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Typy podkladů
        </h2>
        <div className="space-y-3">
          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Účetní doklady</div>
            <div className="text-sm text-slate-600">
              Účetní knihy, výkazy, kontrolní sestavy za období 2021-2024
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Faktury a vyúčtování</div>
            <div className="text-sm text-slate-600">
              Faktury za energie, nájemné, služby s doložením úhrad
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Bankovní výpisy</div>
            <div className="text-sm text-slate-600">
              Výpisy z účtů spolku dokládající platby a příjmy
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Smlouvy a stanovy</div>
            <div className="text-sm text-slate-600">
              Nájemní smlouvy, stanovy spolku, zápisy z jednání
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Výzvy a korespondence</div>
            <div className="text-sm text-slate-600">
              Datované výzvy k plnění, předžalobní výzvy, e-mailová komunikace
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Rozhodnutí orgánů</div>
            <div className="text-sm text-slate-600">
              Rozhodnutí Rozhodčí komise ČAST, rozsudky soudů
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Protokoly a zápisy</div>
            <div className="text-sm text-slate-600">
              Zápisy ze shromáždění, zápisy z jednání výboru, předávací protokoly
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Stupně jistoty (klasifikace tvrzení)
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border-2 bg-green-50 border-green-300">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold px-2 py-1 bg-green-700 text-white rounded">
                DOLOŽENO
              </span>
            </div>
            <p className="text-sm text-slate-900">
              Existuje konkrétní dokument (faktura, výpis, smlouva, e-mail, zápis s datem).
              Spolek má dokument k dispozici a je připraven ho předložit v řízení.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-blue-50 border-blue-300">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold px-2 py-1 bg-blue-700 text-white rounded">
                EVIDOVÁNO
              </span>
            </div>
            <p className="text-sm text-slate-900">
              Údaj vychází z interní evidence spolku (např. účetní kniha, členská evidence).
              Může být potřeba doplnit externí potvrzení v případě sporu.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-orange-50 border-orange-300">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold px-2 py-1 bg-orange-700 text-white rounded">
                SPOR
              </span>
            </div>
            <p className="text-sm text-slate-900">
              Druhá strana tvrdí opak, nebo probíhá právní řízení. Uvedené informace
              představují stanovisko spolku s odkazem na podklady.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold px-2 py-1 bg-slate-700 text-white rounded">
                HYPOTÉZA
              </span>
            </div>
            <p className="text-sm text-slate-900">
              Vysvětlení nebo interpretace událostí („mohlo vzniknout takto...").
              Používáno opatrně a pouze tam, kde je potřeba poskytnout kontext.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Evidence podkladů
        </h2>
        <div className="p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <p className="text-slate-900 space-y-2">
            Spolek vede evidenci všech podkladů relevantních pro výpočet škody
            a právní řešení situace.
          </p>
          <p className="text-slate-900 mt-3">
            <strong>Ochrana osobních údajů:</strong> Na webu nejsou zveřejněny osobní
            údaje, citlivé informace ani plné texty dokumentů. Uvádíme pouze typ
            dokumentu, datum/období a shrnutí relevantního obsahu.
          </p>
          <p className="text-slate-900 mt-3">
            <strong>Předložení v řízení:</strong> Veškeré podklady jsou k dispozici
            pro předložení v případném soudním nebo jiném právním řízení.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Námitky a opravy
        </h2>
        <div className="p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <p className="text-blue-900">
            Pokud máte podloženou námitku k jakémukoli údaji na tomto webu, kontaktujte
            nás prostřednictvím stránky{" "}
            <a href="/pravni-ramec" className="font-semibold underline">
              Právní rámec a kontakt
            </a>
            .
          </p>
          <p className="text-blue-900 mt-2">
            Po prověření provedeme opravu nebo doplnění informací.
          </p>
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-slate-700 to-slate-800">
        <h3 className="text-xl font-bold text-white mb-4">
          Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            Web je založen na dokumentovaných podkladech, které spolek eviduje a uchovává.
          </p>
          <p>
            Každé tvrzení je klasifikováno podle stupně jistoty (Doloženo, Evidováno, Spor, Hypotéza).
          </p>
          <p>
            Nejde o soudní rozhodnutí, ale o obranné shrnutí v reakci na nepravdivá tvrzení.
          </p>
          <p>
            Námitky jsou vítány a budou po prověření zapracovány.
          </p>
        </div>
      </section>
    </div>
  );
}
