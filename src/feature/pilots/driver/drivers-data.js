import { text } from "body-parser";
import { IS_PROD } from "../../../util/utils";

export const getDriverByNum = (num) => {
  return Object.assign(
    {
      imgUrl: images + "racer-icon.jpg",
    },
    driverMap[num]
  );
};

export const getDriverByKey = (driverKey) => {
  return Object.assign(
    {
      imgUrl: images + "racer-icon.jpg",
    },
    driverMap[driverKey]
  );
};

const images = IS_PROD ? "assets/images/" : "/docs/assets/images/";

export const DriverKey = {
  kimi_raikkonen: "kimi_raikkonen",
  lewis_hamilton: "lewis_hamilton",
  sebastian_vettel: "sebastian_vettel",
  sergio_perez: "sergio_perez",
  daniel_ricciardo: "daniel_ricciardo",
  romain_grosjean: "romain_grosjean",
  valtteri_bottas: "valtteri_bottas",
  kevin_magnussen: "kevin_magnussen",
  daniil_kvyat: "daniil_kvyat",
  max_verstappen: "max_verstappen",
  esteban_ocon: "esteban_ocon",
  stoffel_vandoorne: "stoffel_vandoorne",
  marcus_ericsson: "marcus_ericsson",
  lance_stroll: "lance_stroll",
  nico_rosberg: "nico_rosberg",
  charles_leclerc: "charles_leclerc",
  nicholas_latifi: "nicholas_latifi",
  george_russell: "george_russell",
  antonio_giovinazzi: "antonio_giovinazzi",
  pier_gasli: "pier_gasli",
  carlos_sainz: "carlos_sainz",
  lando_norris: "lando_norris",
  alexander_albon: "alexander_albon",
  nico_hulkenberg: "nico_hulkenberg",
  robert_kubica: "robert_kubica",
  fernando_alonso: "fernando_alonso",
  brendon_hartley: "brendon_hartley",
  sergey_sirotkin: "sergey_sirotkin",
};

const baseUrl = "#/drivers/driver/";

const driverMap = {
  kimi_raikkonen: {
    link: baseUrl + DriverKey.kimi_raikkonen,
    number: 7,
    fullname: "Kimi-Matias Raikkonen | Кими Райкконен",
    name: "Kimi Raikkonen",
    flag: images + "flags/flagFin.gif",
    imgUrl: images + "driver.imeges/imgkr.jpg",
    country: "Финляндия",
    databirth: "17.10.1979",
    season: 17,
    champion:
      "2017, Дважды вице-чемпион мира: 2003, 2005; Трижды бронзовый призёр: 2008, 2012, 2018",
    debut: "2001, Австралия, Альберт-Парк",
    granprix: 315,
    victory: 21,
    first: "2003, Малайзия, Сепанг, № 36",
    pouls: 18,
    bestlap: 46,
    podiums: 103,
    startfirst: 44,
    bestfinish: 1,
    beststart: 1,
    take: 6,
    hattricks: 2,
    scores: 1859,
    granprixinscore: "213 из 315 (68%)",
    totallaps: 16480,
    info:
      "<p>Кими Райкконен родился гонщиком и уже с малых лет, катаясь на детском карте, проявлял не дюжую страсть к гонкам и скорости. Неважно, будь то автомобиль Формулы 1, собственный спорт кар, мотоцикл, снегоход или, даже, парочка лыж &ndash; у Кими всегда была одна цель &ndash; выжать максимум.</p>" +
      "<p>Восхождение гонщика к вершинам Формулы 1 началось в далеком 2000 году, когда он, доминируя в сезоне Формулы Рено, обеспечил свою дальнейшую карьеру в Ф1. С первого гран-при за Заубер, Райкконен начал набирать очки, завершив сезон на 10 месте, два раза финишировав на 4 позиции, на тот момент это было высшее достижение для команды за всю её историю. Финский гонщик произвел впечатление на представителей команды МакЛарен, и получил пятилетний контракт. В Макларен Кими дважды становится вице чемпионом, один раз завершает сезон на 5, 6, 7 местах соответственно.</p>" +
      "<p>В 2007 году Кими Райкконен переходит в Феррари. На последнем этапе сезона в Бразилии участвует в эпичном сражении за титул, соревнуясь с пилотами Макларен: Фернандо Алонсо и Льюисом Хэмилтоном. Перед стартом той гонки, для победы в чемпионате Кими требовалось одержать победу при финише Алонсо не выше 3-го места, а Хэмилтона &mdash; не выше 6-го, по итогу той гонки Алонсо финишировал 3-м, а Хэмилтон лишь 7-м, что обеспечило Кими победу в чемпионате с отрывом всего в 1 очко!</p>" +
      '<p style="text-align: center;"><iframe width="737" height="413" src="https://www.youtube.com/embed/o9prO7NNM-w" frameborder="0" allowfullscreen=""></iframe></p>' +
      '<p style="text-align: center;"><video style="width: 100%; height: auto;" class="tWeCl" controls="" controlslist="nodownload" playsinline="" poster="https://instagram.fhel4-1.fna.fbcdn.net/v/t51.2885-15/e35/90179730_140116357535701_6146790070061577404_n.jpg?_nc_ht=instagram.fhel4-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=W5SbvUkjPW4AX_1VdA9&amp;oh=53f9fa5e74c1be136c863e7fdc18f2f0&amp;oe=5E9328CC" preload="metadata" type="video/mp4" src="https://instagram.fhel4-1.fna.fbcdn.net/v/t50.16885-16/10000000_623434258438682_3781706163503701867_n.mp4?_nc_ht=instagram.fhel4-1.fna.fbcdn.net&amp;_nc_cat=102&amp;_nc_ohc=WI45wXeNMmMAX9iFSZ4&amp;oe=5E929F2B&amp;oh=a45b7df1d5b3b2882ad6893fe788a168"></video></p>' +
      "<p>В 2008 он завершает чемпионат на третьей строчке итогового протокола, в 2009 на 6-ом, одерживает историческую победу в Гран-при Бельгии, показывая, порой, удивительные результаты, на весьма медленной машине.</p>" +
      "<p>В 2010 Кими принимает волевое решение покинуть Формулу, и переходит в WRC, участвуя в двух сезонах Мирового Ралли - 9 стартов из 11, где лучшим результатом явилась 6-я позиция. В ноябре 2011 было объявлено, что Кими возвращается в Формулу 1, заключив двухлетний контракт с командой Лотус и в 2012 завершает чемпионат на третьем месте, несмотря на то, что его напарник по команде на восьмом. В 2013 Кими продолжает выступать за Лотус на высоком уровне и в середине сезона подписывает контракт с Феррари, в том же году пропускает две последние гонки из-за операции на спине.</p>" +
      "<p>В 2014-2016 уже на Феррари завершает сезон на 12-ом, 4-ом и 6-ом месте соответственно.</p>" +
      "<p>В 2017-2018 завершает сезон на 4-ом и 3-м месте соответственно и покидает Ferrari подписав двухлетний контракт с командой Sauber, в которой финн начинал карьеру в Ф1 в далёком 2001 году.</p>" +
      "<p>С самого начала карьеры Кими Райкконена, его тренером по фитнесу является Марк Арнелл, ранее работавший с двукратным чемпионом мира Микой Хаккиненом.</p>" +
      '<p>Журналисты называют финна "The IceMan", что означает ледяной человек, за его спокойствие и невозмутимость.</p>',
  },

  lewis_hamilton: {
    link: baseUrl + DriverKey.lewis_hamilton,
    number: 44,
    fullname: "Lewis Carl Davidson Hamilton | Льюис Хэмилтон",
    name: "Lewis Hamilton",
    flag: images + "flags/flagBrit.jpg",
    imgUrl: images + "driver.imeges/imglh.jpg",
    country: "Великобритания",
    databirth: "07.01.1985",
    season: 13,
    champion: "2008, 2014, 2015, 2017, 2018, 2019",
    debut: "2007, Австралия, Альберт-Парк",
    granprix: 20,
    victory: 84,
    first: "2007, Канада, Монреаль, № 6",
    pouls: 88,
    bestlap: 47,
    podiums: 151,
    startfirst: 145,
    bestfinish: 1,
    beststart: 1,
    take: 49,
    hattricks: 15,
    scores: 3431,
    granprixinscore: "213 из 250 (85%)",
    totallaps: 14144,
    info:
      "<p>&lsquo;Still I Rise&rsquo; &ndash; these are the words emblazoned across the back of Lewis Hamilton&rsquo;s helmet and tattooed across his shoulders, and ever since annihilating expectations with one of the greatest rookie performances in F1 history in 2007, that&rsquo;s literally all he&rsquo;s done: risen to the top of the all-time pole positions list ahead of his hero Ayrton Senna, surged into second place in the wins column behind only the inimitable Michael Schumacher, and surpassed the legendary Sir Jackie Stewart for the most championship titles by a British driver.</p>" +
      "<p>Could he be the G.O.A.T?&nbsp;Few would deny that he&rsquo;s in the conversation &ndash; and what&rsquo;s more he&rsquo;s got there his way, twinning his relentless speed with a refusal to conform to stereotypes for how a racing driver should think, dress or behave.</p>" +
      "<p>Respect is hard earned in F1, but Hamilton has it from every one of his peers.&nbsp;Why?&nbsp;Because they know that whatever the track, whatever the conditions, whatever the situation, when his visor goes down and the lights go out, it&rsquo;s Hammertime.</p>" +
      "<p>Льюис Хэмилтон&nbsp;&ndash; британский автогонщик. Первые выступления Льюиса относятся к 1993 году, когда в возрасте 8 лет он начал выступать в картинге и уже стал заметно выделяться своими победами. В 1998 году он выигрывает серию Super One и исполнительный директор команды Рон Деннис заключает с ним контракт поддержки молодых пилотов, который предусматривал опцион на место в Формуле-1, что делало британца самым молодым гонщиком в истории, заключившим контракт на место в Формуле-1.</p>" +
      "<p>После этого Льюис выступал в чемпионатах: Межконтинентальная А (в 1999), Формула-А (в 2000) и Формула Супер А (в 2001), где в 2000 году стал чемпионом Европы. В 2001 и 2003 годах Льюис выступает в британской серии Формулы-Рено UK, где в 2003 выигрывает чемпионат. В начале 2004 из-за натянутых отношений с McLaren его контракт был расторгнут, и он был исключен из программы поддержки молодых пилотов, позднее у Льюиса была возможность дебютировать в Ф1 за Williams уже в 2004, но BMW отказалась спонсировать британца. Он перезаключает контракт с Макларен и в 2004 стартует в Евросерии Формулы-3 за команду Manor, в 2005 переходит в ASM того же чемпионата и выигрывает серию. Журнал Autosport поставил его на 24 место в рейтинге &laquo;Топ-50 Пилотов 2005&raquo;. В 2006 он выступает в чемпионате GP2, где выигрывает чемпионат опередив Нельсиньо Пике и Тимо Глока.</p>" +
      "<p>В конце 2006 у команды Макларен появилась свободная вакансия в Ф1 и 30 сентября была подтверждена кандидатура Льюиса на место второго пилота, его напарником стал Фернандо Алонсо. И в 2007 состоялся дебют британца в Ф1, по итогам которого Хэмилтон оказался на втором месте в личном зачете, набрав одинаковое количество очков с его напарником Фернандо Алонсо (109 очков) и уступив Кими Райкконену всего одно очко. После выяснилось, что FIA проводит расследование связанное с температурой топлива в машинах Williams и Sauber, что может привести к их дисквалификации, в таком случае Льюис стал бы чемпионом мира уже в 2007, британец заявил, что такая победа ему не нужна и в итоге штраф не последовал и титул <em>достался Райкконену</em>.</p>" +
      "<p>Уже в 2008, на последнем круге последнего гран-при сезона, после эпических событий, титул всё же достался Льюису Хэмилтону, который чуть было не вырвал у него Фелипе Масса. На последнем круге той гонки Тимо Глок потерял темп и Хэмилтон смог его обойти на предпоследнем повороте, набрав тем самым необходимое для титула очко. В 2009-2012 года его выступления за Макларен продолжились, в каждом сезоне он одерживал победы, а по итогам занимал 4-5 места. В конце 2012 Льюис принял для себя решение покинуть Макларен и перейти в Mercedes, многие думали, что он совершает ошибку, но как выяснилось позже он не прогадал, так как в 2013 машина у Макларен получилась откровенно слабой. В 2014-2015 годах Льюис становится уже трёхкратным чемпионом мира вместе с Mercedes. В 2016 уступает титул Нико Росбергу, но в 2017 становится уже четырёхкратным чемпионом!</p>",
  },

  sebastian_vettel: {
    link: baseUrl + DriverKey.sebastian_vettel,
    number: 5,
    fullname: "Sebastian Vettel | Себастьян Феттель",
    name: "Sebastian Vettel",
    flag: images + "flags/flagGer.jpg",
    imgUrl: images + "driver.imeges/imgsv.jpg",
    country: "Германия",
    databirth: "03.07.1987",
    season: 13,
    champion: "2010, 2011, 2012, 2013",
    debut: "2007, США, Индианаполис",
    granprix: 241,
    victory: 53,
    first: "2008, Италия, Монца, № 22",
    pouls: 57,
    bestlap: 38,
    podiums: 120,
    startfirst: 101,
    bestfinish: 1,
    beststart: 1,
    take: 31,
    hattricks: 8,
    scores: 2985,
    granprixinscore: "195 из 241 (81%)",
    totallaps: 13077,
    info:
      "<p>Born and raised a Bull, but now very much a Prancing Horse, F1's poster boy of early achievement had won more than all but two drivers in history by the time he was just 26, including back-to-back world titles between 2010 and 2013.</p>" +
      "<p>Vettel&rsquo;s trademark is pure pace &ndash; and of course his one-finger victory salute. In the chase to the chequered flag, he likes to lead from the front and just like his hero, Michael Schumacher, Vettel has settled in as a race-winning leader at Ferrari.</p>" +
      "<p>But for all his competitive streak, Vettel has a playful side too and has been known to let loose with a spot of Beatles karaoke - and baby can he drive a car. Alongside his four world crowns he can boast more than 50 pole positions and race victories, ranking him &ndash; statistically - above many of the biggest names in F1 history. No wonder then that he was hand-picked to return Grand Prix racing&rsquo;s oldest team to glory.&nbsp;</p>" +
      "<p>Following his move to Maranello, Vettel&rsquo;s rivalry with Lewis Hamilton intensified. Opposites off track &ndash; Hamilton leading a glamorous public life while Vettel is a private family man &ndash; the duo have often been all too evenly matched on Sundays as they bid not just for more world titles, but to be hailed the best of their generation.&nbsp;&nbsp;</p>" +
      "<p>But now he faces an additional thorn in his side &ndash; young-gun team mate Charles Leclerc, the first man to outscore him over a season at the Scuderia - and Vettel will need to call on all his speed and experience if he&rsquo;s to reassert himself over the &lsquo;new boy&rsquo; in 2020.</p>",
  },

  sergio_perez: {
    link: baseUrl + DriverKey.sergio_perez,
    number: 11,
    fullname: "Sergio Perez | Серхио Перес",
    name: "Sergio Perez",
    flag: images + "flags/flagMex.jpg",
    imgUrl: images + "driver.imeges/imgsp.jpg",
    country: "Мексика",
    databirth: "26.12.1989",
    season: 9,
    champion: "-",
    debut: "2011, Австралия, Альберт-Парк",
    granprix: 178,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 4,
    podiums: 8,
    startfirst: 0,
    bestfinish: 2,
    beststart: 4,
    take: 0,
    hattricks: 0,
    scores: 581,
    granprixinscore: "103 из 178 (58%)",
    totallaps: 9692,
    info: "<p>...</p>" + "<p>...</p>",
  },

  daniel_ricciardo: {
    link: baseUrl + DriverKey.daniel_ricciardo,
    number: 3,
    fullname: "Daniel Ricciardo | Даниэль Риккардо",
    name: "Daniel Ricciardo",
    flag: images + "flags/flagAus.jpg",
    imgUrl: images + "driver.imeges/imgdr.jpg",
    country: "Австралия",
    databirth: "01.07.1989",
    season: 9,
    champion: "-",
    debut: "2011, Британия, Силверстоун",
    granprix: 171,
    victory: 7,
    first: "2014, Канада, Монреаль, № 57",
    pouls: 3,
    bestlap: 13,
    podiums: 29,
    startfirst: 9,
    bestfinish: 1,
    beststart: 1,
    take: 1,
    hattricks: 0,
    scores: 1040,
    granprixinscore: "97 из 171 (57%)",
    totallaps: 9205,
    info: "<p>...</p>" + "<p>...</p>",
  },

  romain_grosjean: {
    link: baseUrl + DriverKey.romain_grosjean,
    number: 8,
    fullname: "Romain Grosjean | Роман Грожан",
    name: "Romain Grosjean",
    flag: images + "flags/flagFra.gif",
    imgUrl: images + "driver.imeges/imgrg.jpg",
    country: "Франция",
    databirth: "17.04.1986",
    season: 9,
    champion: "-",
    debut: "2009, Европа, Валенсия",
    granprix: 166,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 1,
    podiums: 10,
    startfirst: 1,
    bestfinish: 2,
    beststart: 2,
    take: 0,
    hattricks: 0,
    scores: 389,
    granprixinscore: "58 из 166 (35%)",
    totallaps: 7979,
    info: "<p>...</p>" + "<p>...</p>",
  },

  valtteri_bottas: {
    link: baseUrl + DriverKey.valtteri_bottas,
    number: 77,
    fullname: "Valtteri Bottas | Вальттери Боттас",
    name: "Valtteri Bottas",
    flag: images + "flags/flagFin.gif",
    imgUrl: images + "driver.imeges/imgvb.jpg",
    country: "Финляндия",
    databirth: "28.08.1989",
    season: 7,
    champion: "-",
    debut: "2013, Австралия, Альберт-Парк",
    granprix: 140,
    victory: 7,
    first: "2017, Россия, Сочи, № 82",
    pouls: 11,
    bestlap: 13,
    podiums: 45,
    startfirst: 26,
    bestfinish: 1,
    beststart: 1,
    take: 4,
    hattricks: 1,
    scores: 1289,
    granprixinscore: "103 из 140 (74%)",
    totallaps: 7937,
    info: "<p>...</p>" + "<p>...</p>",
  },

  kevin_magnussen: {
    link: baseUrl + DriverKey.kevin_magnussen,
    number: 20,
    fullname: "Kevin Magnussen | Кевин Магнуссен",
    name: "Kevin Magnussen",
    flag: images + "flags/flagDan.jpg",
    imgUrl: images + "driver.imeges/imgkm.jpg",
    country: "Дания",
    databirth: "05.10.1992",
    season: 7,
    champion: "-",
    debut: "2014, Австралия, Альберт-Парк",
    granprix: 103,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 2,
    podiums: 1,
    startfirst: 0,
    bestfinish: 2,
    beststart: 4,
    take: 0,
    hattricks: 0,
    scores: 157,
    granprixinscore: "34 из 103 (33%)",
    totallaps: 5550,
    info: "<p>...</p>" + "<p>...</p>",
  },

  daniil_kvyat: {
    link: baseUrl + DriverKey.daniil_kvyat,
    number: 26,
    fullname: "Daniil Kvyat | Даниил Квят",
    name: "Daniil Kvyat",
    flag: images + "flags/flagRus.jpg",
    imgUrl: images + "driver.imeges/imgdk.jpg",
    country: "Россия",
    databirth: "26.04.1994",
    season: 5,
    champion: "-",
    debut: "2014, Австралия, Альберт-Парк",
    granprix: 95,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 1,
    podiums: 3,
    startfirst: 1,
    bestfinish: 2,
    beststart: 4,
    take: 0,
    hattricks: 0,
    scores: 170,
    granprixinscore: "37 из 95 (39%)",
    totallaps: 4774,
    info: "<p>...</p>" + "<p>...</p>",
  },

  max_verstappen: {
    link: baseUrl + DriverKey.max_verstappen,
    number: 33,
    fullname: "Max Verstappen | Макс Ферстаппен",
    name: "Max Verstappen",
    flag: images + "flags/flagGol.gif",
    imgUrl: images + "driver.imeges/imgmv.jpg",
    country: "Голландия",
    databirth: "30.09.1997",
    season: 5,
    champion: "-",
    debut: "2015, Австралия, Альберт-Парк",
    granprix: 102,
    victory: 8,
    first: "2016, Испания, Барселона-Каталунья, № 24",
    pouls: 2,
    bestlap: 7,
    podiums: 31,
    startfirst: 10,
    bestfinish: 1,
    beststart: 1,
    take: 1,
    hattricks: 0,
    scores: 948,
    granprixinscore: "76 из 102 (75%)",
    totallaps: 5257,
    info: "<p>...</p>" + "<p>...</p>",
  },

  esteban_ocon: {
    link: baseUrl + DriverKey.esteban_ocon,
    number: 31,
    fullname: "Esteban Ocon | Эстебан Окон",
    name: "Esteban Ocon",
    flag: images + "flags/flagFra.gif",
    imgUrl: images + "driver.imeges/imgeo.jpg",
    country: "Франция",
    databirth: "17.09.1996",
    season: 3,
    champion: "-",
    debut: "2016, Бельгия, Спа-Франкоршам",
    granprix: 50,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 0,
    startfirst: 0,
    bestfinish: 5,
    beststart: 3,
    take: 0,
    hattricks: 0,
    scores: 136,
    granprixinscore: "28 из 50 (56%)",
    totallaps: 2677,
    info: "<p>...</p>" + "<p>...</p>",
  },

  stoffel_vandoorne: {
    link: baseUrl + DriverKey.stoffel_vandoorne,
    number: 2,
    fullname: "Stoffel Vandoorne | Стоффель Вандорн",
    name: "Stoffel Vandoorne",
    flag: images + "flags/flagBel.jpg",
    imgUrl: images + "driver.imeges/imgstVan.jpg",
    country: "Бельгия",
    databirth: "26.03.1991",
    season: 3,
    champion: "-",
    debut: "2016, Бахрейн, Сахир",
    granprix: 42,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 0,
    startfirst: 0,
    bestfinish: 7,
    beststart: 7,
    take: 0,
    hattricks: 0,
    scores: 26,
    granprixinscore: "8 из 42 (19%)",
    totallaps: 2207,
    info: "<p>...</p>" + "<p>...</p>",
  },

  marcus_ericsson: {
    link: baseUrl + DriverKey.marcus_ericsson,
    number: 9,
    fullname: "Marcus Ericsson | Маркус Эриксон",
    name: "Marcus Ericsson",
    flag: images + "flags/flagBel.gif",
    imgUrl: images + "driver.imeges/imgme.jpg",
    country: "Швеция",
    databirth: "29.11.1989",
    season: 5,
    champion: "-",
    debut: "2014, Австралия, Альберт-Парк",
    granprix: 97,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 0,
    startfirst: 0,
    bestfinish: 8,
    beststart: 6,
    take: 0,
    hattricks: 0,
    scores: 18,
    granprixinscore: "11 из 97 (11%)",
    totallaps: 4834,
    info: "<p>...</p>" + "<p>...</p>",
  },

  lance_stroll: {
    link: baseUrl + DriverKey.lance_stroll,
    number: 18,
    fullname: "Lance Stroll | Лэнс Стролл",
    name: "Lance Stroll",
    flag: images + "flags/flagCan.jpg",
    imgUrl: images + "driver.imeges/imgls.jpg",
    country: "Канада",
    databirth: "29.10.1998",
    season: 2,
    champion: "-",
    debut: "2017, Австралия, Альберт-Парк",
    granprix: 62,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 1,
    startfirst: 1,
    bestfinish: 3,
    beststart: 2,
    take: 0,
    hattricks: 0,
    scores: 67,
    granprixinscore: "15 из 62 (24%)",
    totallaps: 3417,
    info: "<p>...</p>" + "<p>...</p>",
  },

  nico_rosberg: {
    link: baseUrl + DriverKey.nico_rosberg,
    number: 6,
    fullname: "Nico Rosberg | Нико Росберг",
    name: "Nico Rosberg",
    flag: images + "flags/flagGer.jpg",
    imgUrl: images + "driver.imeges/imgnr.jpg",
    country: "Германия",
    databirth: "27.06.1985",
    season: 11,
    champion: 2016,
    debut: "2006,	Бахрейн, Сахир",
    granprix: 206,
    victory: 23,
    first: "2012, Китай, Шанхай, 	№ 111",
    pouls: 30,
    bestlap: 20,
    podiums: 57,
    startfirst: 60,
    bestfinish: 1,
    beststart: 1,
    take: 15,
    hattricks: 3,
    scores: 1594,
    granprixinscore: "133 из 206 (65%)",
    totallaps: 11088,
    info: "<p>...</p>" + "<p>...</p>",
  },

  charles_leclerc: {
    link: baseUrl + DriverKey.charles_leclerc,
    number: 16,
    fullname: "Charles Leclerc | Шарль Леклер",
    name: "Charles Leclerc",
    flag: images + "flags/flagMon.jpg",
    imgUrl: images + "driver.imeges/imgcl.jpg",
    country: "Монако",
    databirth: "16.10.1997",
    season: 2,
    champion: "-",
    debut: "2018,	Австралия, Альберт-Парк",
    granprix: 42,
    victory: 2,
    first: "2019, Бельгия, Спа-Франкоршам, 	№ 34",
    pouls: 7,
    bestlap: 4,
    podiums: 10,
    startfirst: 8,
    bestfinish: 1,
    beststart: 1,
    take: 2,
    hattricks: 0,
    scores: 303,
    granprixinscore: "28 из 42 (67%)",
    totallaps: 2214,
    info: "<p>...</p>" + "<p>...</p>",
  },

  nicholas_latifi: {
    link: baseUrl + DriverKey.nicholas_latifi,
    number: 6,
    fullname: "Nicholas Latifi | Николас Латифи",
    name: "Nicholas Latifi",
    flag: images + "flags/flagCan.jpg",
    imgUrl: images + "driver.imeges/imgnl.jpg",
    country: "Канада",
    databirth: "29.06.1995",
    season: 0,
    champion: 0,
    debut: "-",
    granprix: 0,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 0,
    startfirst: 0,
    bestfinish: "-",
    beststart: "-",
    take: 0,
    hattricks: 0,
    scores: 0,
    granprixinscore: "-",
    totallaps: "-",
    info: "<p>...</p>" + "<p>...</p>",
  },

  george_russell: {
    link: baseUrl + DriverKey.george_russell,
    number: 63,
    fullname: "George Russell | Джордж Расселл",
    name: "George Russell",
    flag: images + "flags/flagEng.jpg",
    imgUrl: images + "driver.imeges/imggr.jpg",
    country: "Великобритания",
    databirth: "15.02.1998",
    season: 1,
    champion: 0,
    debut: "2019,	Австралия, Альберт-Парк",
    granprix: 21,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 0,
    startfirst: 0,
    bestfinish: 11,
    beststart: 14,
    take: 0,
    hattricks: 0,
    scores: 0,
    granprixinscore: "0 из 21 (0%)",
    totallaps: 1182,
    info: "<p>...</p>" + "<p>...</p>",
  },

  antonio_giovinazzi: {
    link: baseUrl + DriverKey.antonio_giovinazzi,
    number: 99,
    fullname: "Antonio Giovinazzi | Антонио Джовинацци",
    name: "Antonio Giovinazzi",
    flag: images + "flags/flagIta.jpg",
    imgUrl: images + "driver.imeges/imgag.jpg",
    country: "Италия",
    databirth: "14.12.1993",
    season: 2,
    champion: 0,
    debut: "2017,	Австралия, Альберт-Парк",
    granprix: 23,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 0,
    startfirst: 0,
    bestfinish: 5,
    beststart: 7,
    take: 0,
    hattricks: 0,
    scores: 14,
    granprixinscore: "4 из 23 (17%)",
    totallaps: 1269,
    info: "<p>...</p>" + "<p>...</p>",
  },

  pier_gasli: {
    link: baseUrl + DriverKey.pier_gasli,
    number: 10,
    fullname: "Pier Gasli | Пьер Гасли",
    name: "Pier Gasli",
    flag: images + "flags/flagFra.gif",
    imgUrl: images + "driver.imeges/imgpg.jpg",
    country: "Франция",
    databirth: "07.02.1996",
    season: 3,
    champion: 0,
    debut: "2017,	Малайзия, Сепанг",
    granprix: 47,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 2,
    podiums: 1,
    startfirst: 0,
    bestfinish: 2,
    beststart: 4,
    take: 0,
    hattricks: 0,
    scores: 124,
    granprixinscore: "19 из 47 (40%)",
    totallaps: 2567,
    info: "<p>...</p>" + "<p>...</p>",
  },

  carlos_sainz: {
    link: baseUrl + DriverKey.carlos_sainz,
    number: 55,
    fullname: "Carlos Sainz | Карлос Сайнс",
    name: "Carlos Sainz",
    flag: images + "flags/flagSpa.jpg",
    imgUrl: images + "driver.imeges/imgcs.jpg",
    country: "Испания",
    databirth: "01.09.1994",
    season: 5,
    champion: 0,
    debut: "2015,	Австралия, Альберт-Парк",
    granprix: 102,
    victory: 0,
    first: "-",
    pouls: 0,
    bestlap: 0,
    podiums: 1,
    startfirst: 0,
    bestfinish: 3,
    beststart: 5,
    take: 0,
    hattricks: 0,
    scores: 267,
    granprixinscore: "53 из 102 (52%)",
    totallaps: 5322,
    info: "<p>...</p>" + "<p>...</p>",
  },

  lando_norris: {
    link: baseUrl + DriverKey.lando_norris,
    number: 4,
    fullname: "Lando Norris | Ландо Норрис",
    name: "Lando Norris",
    flag: images + "flags/flagEng.jpg",
    imgUrl: images + "driver.imeges/imgln.jpg",
    country: "Великобритания",
    databirth: "13.11.1999",
    season: 1,
    champion: 0,
    debut: "2019,	Австралия, Альберт-Парк",
    granprix: 21,
    victory: 0,
    first: 0,
    pouls: 0,
    bestlap: 0,
    podiums: 1,
    startfirst: 0,
    bestfinish: 6,
    beststart: 5,
    take: 0,
    hattricks: 0,
    scores: 49,
    granprixinscore: "11 из 21 (52%)",
    totallaps: 1102,
    info: "<p>...</p>" + "<p>...</p>",
  },

  alexander_albon: {
    link: baseUrl + DriverKey.alexander_albon,
    number: 23,
    fullname: "Alexander Albon | Александр Албон",
    name: "Alexander Albon",
    flag: images + "flags/flagTha.png",
    imgUrl: images + "driver.imeges/imgaa.jpg",
    country: "Тайланд",
    databirth: "23.03.1996",
    season: 1,
    champion: 0,
    debut: "2019,	Австралия, Альберт-Парк",
    granprix: 21,
    victory: 0,
    first: 0,
    pouls: 0,
    bestlap: 0,
    podiums: 0,
    startfirst: 0,
    bestfinish: 4,
    beststart: 5,
    take: 0,
    hattricks: 0,
    scores: 92,
    granprixinscore: "13 из 21 (62%)",
    totallaps: 1245,
    info: "<p>...</p>" + "<p>...</p>",
  },

  nico_hulkenberg: {
    link: baseUrl + DriverKey.nico_hulkenberg,
    number: 27,
    fullname: "Nico Hulkenberg | Нико Хюлькенберг",
    name: "Nico Hulkenberg",
    flag: images + "flags/flagGer.jpg",
    imgUrl: images + "driver.imeges/imgnh.jpg",
    country: "Германия",
    databirth: "19.08.1987",
    season: 9,
    champion: 0,
    debut: "2010,	Бахрейн, Сахир",
    granprix: 179,
    victory: 0,
    first: 0,
    pouls: 1,
    bestlap: 2,
    podiums: 0,
    startfirst: 2,
    bestfinish: 4,
    beststart: 1,
    take: 0,
    hattricks: 0,
    scores: 511,
    granprixinscore: "95 из 179 (53%)",
    totallaps: 9038,
    info: "<p>...</p>" + "<p>...</p>",
  },

  robert_kubica: {
    link: baseUrl + DriverKey.robert_kubica,
    number: 88,
    fullname: "Robert Kubica | Роберт Кубица",
    name: "Robert Kubica",
    flag: images + "flags/flagPol.png",
    imgUrl: images + "driver.imeges/imgrk.jpg",
    country: "Польша",
    databirth: "07.12.1984",
    season: 6,
    champion: 0,
    debut: "2006,	Венгрия, Хунгароринг",
    granprix: 97,
    victory: 1,
    first: "2008, Канада, Монреаль, № 29",
    pouls: 1,
    bestlap: 1,
    podiums: 12,
    startfirst: 4,
    bestfinish: 1,
    beststart: 1,
    take: 0,
    hattricks: 0,
    scores: 274,
    granprixinscore: "47 из 97 (48%)",
    totallaps: 5382,
    info: "<p>...</p>" + "<p>...</p>",
  },

  fernando_alonso: {
    link: baseUrl + DriverKey.fernando_alonso,
    number: 14,
    fullname: "Fernando Alonso | Фернандо Алонсо",
    name: "Fernando Alonso",
    flag: images + "flags/flagSpa.jpg",
    imgUrl: images + "driver.imeges/imgfa.jpg",
    country: "Испания",
    databirth: "29.07.1981",
    season: 17,
    champion: "2005, 2006",
    debut: "2001,	Австралия, Альберт-Парк",
    granprix: 314,
    victory: 32,
    first: "2003, Венгрия, Хунгароринг, № 30",
    pouls: 22,
    bestlap: 23,
    podiums: 97,
    startfirst: 37,
    bestfinish: 1,
    beststart: 1,
    take: 14,
    hattricks: 5,
    scores: 1899,
    granprixinscore: "202 из 314 (64%)",
    totallaps: 16706,
    info: "<p>...</p>" + "<p>...</p>",
  },

  brendon_hartley: {
    link: baseUrl + DriverKey.brendon_hartley,
    number: 28,
    fullname: "Brendon Hartley | Фернандо Алонсо",
    name: "Brendon Hartley",
    // flag: images + "flags/flagSpa.jpg",
    // imgUrl: images + "driver.imeges/imgfa.jpg",
    // country: "Испания",
    // databirth: "29.07.1981",
    // season: 17,
    // champion: "2005, 2006",
    // debut: "2001,	Австралия, Альберт-Парк",
    // granprix: 314,
    // victory: 32,
    // first: "2003, Венгрия, Хунгароринг, № 30",
    // pouls: 22,
    // bestlap: 23,
    // podiums: 97,
    // startfirst: 37,
    // bestfinish: 1,
    // beststart: 1,
    // take: 14,
    // hattricks: 5,
    // scores: 1899,
    // granprixinscore: "202 из 314 (64%)",
    // totallaps: 16706,
    // info: "<p>...</p>" + "<p>...</p>",
  },

  sergey_sirotkin: {
    link: baseUrl + DriverKey.sergey_sirotkin,
    number: 35,
    fullname: "Sergey Sirotkin | Сергей Сироткин",
    name: "Sergey Sirotkin",
    // flag: images + "flags/flagSpa.jpg",
    // imgUrl: images + "driver.imeges/imgfa.jpg",
    // country: "Испания",
    // databirth: "29.07.1981",
    // season: 17,
    // champion: "2005, 2006",
    // debut: "2001,	Австралия, Альберт-Парк",
    // granprix: 314,
    // victory: 32,
    // first: "2003, Венгрия, Хунгароринг, № 30",
    // pouls: 22,
    // bestlap: 23,
    // podiums: 97,
    // startfirst: 37,
    // bestfinish: 1,
    // beststart: 1,
    // take: 14,
    // hattricks: 5,
    // scores: 1899,
    // granprixinscore: "202 из 314 (64%)",
    // totallaps: 16706,
    // info: "<p>...</p>" + "<p>...</p>",
  },
};
