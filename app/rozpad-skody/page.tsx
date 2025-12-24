export default function RozpadSkodyPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Rozpad škody
        </h1>
        <p className="text-xl text-slate-600">
          Detailní přehled evidované škody podle kategorií a období
        </p>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Důležité upozornění
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Uvedené částky jsou založeny na účetních a smluvních podkladech, které
            spolek eviduje. Nejde o pravomocné soudní rozhodnutí.
          </p>
          <p>
            Osobní údaje nejsou zveřejněny. Metodika výpočtu je popsána na stránce{" "}
            <a href="/metodika" className="font-semibold underline">
              Metodika a zdroje
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Celková evidovaná škoda
        </h2>
        <div className="p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-2 border-red-300">
          <div className="text-center">
            <div className="text-sm font-semibold text-red-800 mb-2">
              Celková částka podle evidence spolku
            </div>
            <div className="text-5xl font-bold text-red-900">
              2.045.635 Kč
            </div>
            <div className="text-sm text-red-700 mt-2">
              Období: 2021-2024 (+ některé závazky z dřívější doby)
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Rozpad podle kategorií
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-slate-300">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th className="p-3 text-left border-r border-slate-600">Kategorie škody</th>
                <th className="p-3 text-left border-r border-slate-600">Období</th>
                <th className="p-3 text-right border-r border-slate-600">Částka (Kč)</th>
                <th className="p-3 text-center border-r border-slate-600">Podíl</th>
                <th className="p-3 text-center border-r border-slate-600">Status</th>
                <th className="p-3 text-left">Metoda výpočtu</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* Oddílové příspěvky */}
              <tr className="border-b-2 border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">
                  Neodvedené oddílové příspěvky
                </td>
                <td className="p-3 border-r border-slate-200">2021-2024</td>
                <td className="p-3 text-right font-semibold border-r border-slate-200">
                  1.214.400
                </td>
                <td className="p-3 text-center border-r border-slate-200">59,4%</td>
                <td className="p-3 text-center border-r border-slate-200">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-700 text-white rounded">
                    EVIDOVÁNO
                  </span>
                </td>
                <td className="p-3 text-sm">
                  Počet členů × sazba příspěvku × období. Podklad: účetní evidence,
                  odhady počtů členů.
                </td>
              </tr>

              {/* Energie */}
              <tr className="border-b-2 border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">
                  Neplacené energie
                </td>
                <td className="p-3 border-r border-slate-200">2021-2024</td>
                <td className="p-3 text-right font-semibold border-r border-slate-200">
                  299.921
                </td>
                <td className="p-3 text-center border-r border-slate-200">14,7%</td>
                <td className="p-3 text-center border-r border-slate-200">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-700 text-white rounded">
                    DOLOŽENO
                  </span>
                </td>
                <td className="p-3 text-sm">
                  Faktury za energie. Podklad: faktury dodavatelů, výzvy k úhradě.
                </td>
              </tr>

              {/* Členské příspěvky */}
              <tr className="border-b-2 border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">
                  Nezaplacené členské příspěvky
                </td>
                <td className="p-3 border-r border-slate-200">2021-2024</td>
                <td className="p-3 text-right font-semibold border-r border-slate-200">
                  143.200
                </td>
                <td className="p-3 text-center border-r border-slate-200">7,0%</td>
                <td className="p-3 text-center border-r border-slate-200">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-700 text-white rounded">
                    EVIDOVÁNO
                  </span>
                </td>
                <td className="p-3 text-sm">
                  200 Kč/osoba/rok × počet členů. Podklad: účetní evidence, odhady.
                </td>
              </tr>

              {/* Nepředané pokladny */}
              <tr className="border-b-2 border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">
                  Nepředané pokladny oddílů
                </td>
                <td className="p-3 border-r border-slate-200">K 2024</td>
                <td className="p-3 text-right font-semibold border-r border-slate-200">
                  178.114
                </td>
                <td className="p-3 text-center border-r border-slate-200">8,7%</td>
                <td className="p-3 text-center border-r border-slate-200">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-700 text-white rounded">
                    DOLOŽENO
                  </span>
                </td>
                <td className="p-3 text-sm">
                  Částky přiznané při výslechu. Podklad: policejní protokoly.
                </td>
              </tr>

              {/* Ostatní škody */}
              <tr className="border-b-2 border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">
                  Ostatní škody
                </td>
                <td className="p-3 border-r border-slate-200">2021-2024</td>
                <td className="p-3 text-right font-semibold border-r border-slate-200">
                  210.000
                </td>
                <td className="p-3 text-center border-r border-slate-200">10,2%</td>
                <td className="p-3 text-center border-r border-slate-200">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-700 text-white rounded">
                    EVIDOVÁNO
                  </span>
                </td>
                <td className="p-3 text-sm">
                  Různé neuhrazené závazky, náklady spojené s řešením situace.
                </td>
              </tr>

              {/* Celkem */}
              <tr className="bg-slate-100 font-bold">
                <td className="p-3 border-r border-slate-300">CELKEM</td>
                <td className="p-3 border-r border-slate-300">2021-2024</td>
                <td className="p-3 text-right border-r border-slate-300">2.045.635</td>
                <td className="p-3 text-center border-r border-slate-300">100%</td>
                <td className="p-3 text-center border-r border-slate-300">-</td>
                <td className="p-3 text-sm">Součet všech kategorií</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Poznámky k výpočtu
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border-2 bg-yellow-50 border-yellow-300">
            <h3 className="font-semibold text-slate-900 mb-2">
              Výhrada ke kategorii "Neodvedené oddílové příspěvky"
            </h3>
            <p className="text-sm text-slate-900">
              Výpočet je založen na odhadech počtu členů oddílů, protože seznamy členů
              nebyly předány (3+ roky opakovaných výzev). Skutečná částka může být
              vyšší nebo nižší. Stav označen jako EVIDOVÁNO.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-green-50 border-green-300">
            <h3 className="font-semibold text-slate-900 mb-2">
              Doložené kategorie
            </h3>
            <p className="text-sm text-slate-900">
              Kategorie "Neplacené energie" a "Nepředané pokladny" jsou doloženy
              konkrétními dokumenty (faktury, výslechy) a jsou označeny jako DOLOŽENO.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
            <h3 className="font-semibold text-slate-900 mb-2">
              Co není zahrnuto
            </h3>
            <p className="text-sm text-slate-900">
              Do celkové částky nejsou zahrnuty: náklady právního zastoupení,
              odhadované ušlé zisky, nemateriální újma. Výpočet je konzervativní.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Grafické znázornění
        </h2>
        <div className="p-6 bg-white rounded-lg border-2 border-slate-300">
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold">Oddílové příspěvky</span>
                <span className="text-sm">1.214.400 Kč (59,4%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-6">
                <div className="bg-blue-600 h-6 rounded-full" style={{width: '59.4%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold">Energie</span>
                <span className="text-sm">299.921 Kč (14,7%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-6">
                <div className="bg-red-600 h-6 rounded-full" style={{width: '14.7%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold">Ostatní škody</span>
                <span className="text-sm">210.000 Kč (10,2%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-6">
                <div className="bg-purple-600 h-6 rounded-full" style={{width: '10.2%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold">Nepředané pokladny</span>
                <span className="text-sm">178.114 Kč (8,7%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-6">
                <div className="bg-orange-600 h-6 rounded-full" style={{width: '8.7%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold">Členské příspěvky</span>
                <span className="text-sm">143.200 Kč (7,0%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-6">
                <div className="bg-green-600 h-6 rounded-full" style={{width: '7%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          Máte námitku k výpočtu?
        </h2>
        <p className="text-slate-900">
          Pokud máte podloženou námitku k metodice výpočtu nebo konkrétní částce,
          kontaktujte nás prostřednictvím stránky{" "}
          <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
            Právní rámec a kontakt
          </a>
          .
        </p>
        <p className="text-slate-900 mt-2">
          Po prověření provedeme opravu nebo upřesníme metodiku výpočtu.
        </p>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-slate-700 to-slate-800">
        <h3 className="text-xl font-bold text-white mb-4">
          Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            Celková evidovaná škoda činí 2.045.635 Kč podle podkladů, které spolek má k dispozici.
          </p>
          <p>
            Nejvýznamnější položkou jsou neodvedené oddílové příspěvky (59,4%), následují
            neplacené energie (14,7%) a ostatní kategorie.
          </p>
          <p>
            Výpočet je konzervativní a nezahrnuje ušlé zisky ani nemateriální újmu.
          </p>
          <p>
            Námitky k výpočtu jsou vítány a budou po prověření zapracovány.
          </p>
        </div>
      </section>
    </div>
  );
}
