import { text } from "body-parser";

export const getDriverByNum = (num) => {
  return Object.assign(
    {
      imgUrl: images + "car-racer-black-simple-icon.jpg",
    },
    driverMap[num]
  );
};

const images = "../../../../assets/images/";

const driverMap = {
  7: {
    number: 7,
    name: "Кими Райкконен | Kimi-Matias Raikkonen",
    flag: images + "flagFin.gif",
    imgUrl: images + "imgkr.jpg",
    country: "Финляндия",
    databirth: "17.10.1979",
    season: 17,
    champion: 2017,
    // дважды вице-чемпион мира (в 2003 и 2005 годах)
    // трижды бронзовый призёр (в 2008, 2012 и 2018 годах)
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

  44: {
    number: 44,
    name: "Льюис Хэмилтон | Lewis Carl Davidson Hamilton",
    flag: images + "flagBrit.jpg",
    imgUrl: images + "imglh.jpg",
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

  5: {
    number: 5,
    name: "Себастьян Феттель | Sebastian Vettel",
    flag: images + "flagGer.jpg",
    imgUrl: images + "imgsv.jpg",
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
};
