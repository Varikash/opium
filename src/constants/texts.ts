export const aboutText = {
    ru: {
        header: "О салоне",
        founder_name: "Цветана Курдова",
        founder: "вдохновитель и основатель салона красоты Opium, который стал для женщин местом душевного уюта. С 35-летним опытом в индустрии красоты и торговли, она и её команда дарят гармонию, заботу и уверенность в себе.",
        section: {
            masters: {
                header: 'Мастера',
                elena: {
                    name: 'Елена',
                    about: 'Профессионал в маникюре и педикюре с 2021 года. Работает в классической, аппаратной, европейской, комбинированной и SPA-технике. Специализируется на безопасном маникюре, укреплении ногтей, стильном дизайне и восстановлении ногтевой пластины. Гарантирует стерильность инструментов и комфортные процедуры.',
                    specialization: 'Мастер маникюра'
                },
                anastasia: {
                    name: 'Анастасия',
                    about: 'Косметолог с медицинским образованием, 15+ лет опыта. Эксперт в аппаратной и эстетической косметологии. Выполняет лифтинг CRIOLIFT, регенерацию кожи PLASMA Shower, удаление рубцов PLASMA Skin, мезотерапию HYDRA PEN, а также чистки, пилинги и массажи для здоровья и молодости кожи.',
                    specialization: 'Косметолог'
                },
                antonina: {
                    name: 'Антонина',
                    about: 'Индивидуальные стрижки для женщин, мужчин и детей, подбор стиля и уходовых средств. Современные техники укладки и осветления: Balayage, AirTouch, Melaj. Процедуры увлажнения с Nashi, Keune и CHI.',
                    specialization: 'Стилист по волосам'
                },
                alla: {
                    name: 'Алла',
                    about: '40 лет опыта. Специализируется на стрижках (мужские, женские, детские), укладках, химической завивке (bio permanent), окрашивании, тонировании и сложных техниках. Помогает клиентам подобрать идеальный образ, учитывая их индивидуальные особенности. В команде Opium уже 4 года.',
                    specialization: 'Парикмахер-стилист'
                }
            },
            services: {
                header: 'Услуги',
                accordion_1: {
                    title: 'Макияж',
                    description: 'Преобразите свой образ с помощью профессионального макияжа — от лёгкого дневного до выразительного вечернего и свадебного. Подчеркнём вашу естественную красоту и создадим идеальный лук для любого случая.',
                    services: [
                        { name: "Экспресс макияж", price: "600" },
                        { name: "Дневной/вечерний макияж", price: "850–1000" },
                        { name: "Свадебный макияж", price: "1500–2000" },
                    ],
                },
                accordion_2: {
                    title: 'Брови',
                    description: 'Формирование идеальных бровей: коррекция, окрашивание, биофиксация. Акцент на выразительность взгляда и точность линий.',
                    services: [
                        { name: "Моделирование и коррекция", price: "150" },
                        { name: "Окрашивание Brow Henna", price: "350" },
                        { name: "Биофиксация + окрашивание", price: "550" },
                    ]
                },
                accordion_3: {
                    title: 'Ногти',
                    description: 'Маникюр и педикюр от классики до геля с дизайном. Уход за руками и ногами, парафинотерапия, мужской сервис.',
                    services: [
                        { name: "Классический маникюр", price: "400" },
                        { name: "Классический + покрытие лаком", price: "450" },
                        { name: "Лак-гель + маникюр", price: "500" },
                        { name: "Гель + маникюр", price: "600" },
                        { name: "Дизайн / френч", price: "50/100" },
                        { name: "Парафинотерапия рук", price: "200" },
                        { name: "Парафинотерапия ног", price: "250" },
                        { name: "Педикюр + SPA", price: "500" },
                        { name: "Покрытие лаком (ноги)", price: "50/100" },
                        { name: "Педикюр гель / лак-гель", price: "600" },
                        { name: "Мужской маникюр", price: "500" },
                        { name: "Мужской педикюр", price: "700" },
                    ],
                },
                accordion_4: {
                    title: 'Волосы',
                    description: 'Стрижки, укладки и причёски для женщин и мужчин. Современные техники и индивидуальный подход к каждому.',
                    services: [
                        { name: "Стрижка + укладка (короткие)", price: "350/400" },
                        { name: "Стрижка + укладка (средние)", price: "500/550" },
                        { name: "Стрижка + укладка (длинные)", price: "650/750" },
                        { name: "Стрижка с укладкой (отдельно)", price: "300/600" },
                        { name: "Чёлка", price: "150" },
                        { name: "Причёска", price: "750/1500" },
                        { name: "Свадебная причёска", price: "1600/2200" },
                        { name: "Причёска пробная (50%)", price: "от 2200" },
                        { name: "Мужская стрижка", price: "300" },
                    ]
                },
                accordion_5: {
                    title: 'Уход',
                    description: 'Питательные и восстанавливающие процедуры для волос. Увлажнение, блеск и глубокое восстановление.',
                    services: [
                        { name: "Уход Nashi Argan Filer Therapy", price: "750/850" },
                        { name: "Keune Shining", price: "1000/1200" },
                        { name: "CHI Royal Treatment", price: "от 1000" },
                        { name: "Keune Vital Nutrition SPA Creambath", price: "100" },
                    ]
                },
            },
            gallery: {
                slide_one: {procedure: 'Уход за лицом', master: 'Алена'},
                slide_two: {procedure: 'Маникюр', master: 'Мария'},
                slide_three: {procedure: 'Макияж', master: 'Виктория'},
                slide_four: {procedure: 'Уход за волосами', master: 'Антонина'},
                slide_five: {procedure: 'Уход за волосами', master: 'Алла'}
            }
        }
    },
    ro: {
        header: "Despre salon",
        founder_name: "Țvetana Kurdova",
        founder: "este inspirația și fondatoarea salonului de înfrumusețare Opium, care a devenit un loc de confort sufletesc pentru femei. Cu o experiență de 35 de ani în industria frumuseții și comerțului, ea și echipa sa oferă armonie, grijă și încredere în sine, creând o atmosferă în care fiecare femeie se simte unică.",
        section: {
            masters: {
                header: 'Meșteri',
                elena: {
                    name: 'Elena',
                    about: 'Profesionistă în manichiură și pedichiură din 2021. Lucrează în tehnicile clasică, cu aparat, europeană, combinată și SPA. Specializată în manichiură sigură, întărirea unghiilor, design stilizat și restaurarea plăcii unghiale. Garantează sterilitatea instrumentelor și proceduri confortabile.',
                    specialization: 'Specialist în manichiură'
                },
                anastasia: {
                    name: 'Anastasia',
                    about: 'Cosmetolog cu studii medicale, peste 15 ani de experiență. Expertă în cosmetologie aparatologică și estetică. Realizează lifting CRIOLIFT, regenerare cutanată PLASMA Shower, eliminare cicatrici PLASMA Skin, mezoterapie HYDRA PEN, precum și curățare facială, peelinguri și masaje pentru sănătatea și frumusețea pielii.',
                    specialization: 'Cosmetolog'
                },
                antonina: {
                    name: 'Antonina',
                    about: 'Tunsori individuale pentru femei, bărbați și copii, alegerea stilului și a produselor de îngrijire. Tehnici moderne de coafare și decolorare: Balayage, AirTouch, Melaj. Proceduri de hidratare cu Nashi, Keune și CHI.',
                    specialization: 'Stilist pentru păr'
                },
                alla: {
                    name: 'Alla',
                    about: '40 de ani de experiență. Specializată în tunsori (bărbătești, femeiești, pentru copii), coafuri (permanent bio), vopsire, tonifiere și tehnici complexe. Ajută clienții să aleagă look-ul perfect, ținând cont de trăsăturile lor individuale. Face parte din echipa Opium de 4 ani.',
                    specialization: 'Frizer-stilist'
                }
            },
            services: {
                header: 'Servicii',
                accordion_1: {
                    title: 'Machiaj',
                    description: 'Transformă-ți imaginea cu ajutorul machiajului profesional - de la unul ușor de zi până la unul expresiv de seară și nuntă. Vom evidenția frumusețea ta naturală și vom crea un look ideal pentru orice ocazie.',
                    services: [
                        { name: "Machiaj express", price: "600" },
                        { name: "Machiaj de zi/seară", price: "850–1000" },
                        { name: "Machiaj de mireasă", price: "1500–2000" },
                    ],
                },
                accordion_2: {
                    title: 'Sprâncene',
                    description: 'Formarea sprâncenelor perfecte: corecție, vopsire, biofixare. Accent pe expresivitatea privirii și precizia liniilor.',
                    services: [
                        { name: "Modelare și corecție", price: "150" },
                        { name: "Vopsire Brow Henna", price: "350" },
                        { name: "Biofixare + vopsire", price: "550" },
                    ]
                },
                accordion_3: {
                    title: 'Unghii',
                    description: 'Manichiură și pedichiură de la clasică la gel cu design. Îngrijirea mâinilor și picioarelor, parafinterapie, servicii pentru bărbați.',
                    services: [
                        { name: "Manichiură clasică", price: "400" },
                        { name: "Clasică + acoperire cu lac", price: "450" },
                        { name: "Lac-gel + manichiură", price: "500" },
                        { name: "Gel + manichiură", price: "600" },
                        { name: "Design / french", price: "50/100" },
                        { name: "Parafinterapie mâini", price: "200" },
                        { name: "Parafinterapie picioare", price: "250" },
                        { name: "Pedichiură + SPA", price: "500" },
                        { name: "Acoperire cu lac (picioare)", price: "50/100" },
                        { name: "Pedichiură gel / lac-gel", price: "600" },
                        { name: "Manichiură pentru bărbați", price: "500" },
                        { name: "Pedichiură pentru bărbați", price: "700" },
                    ],
                },
                accordion_4: {
                    title: 'Păr',
                    description: 'Tunsori, coafuri și stilizări pentru femei și bărbați. Tehnici moderne și abordare individuală pentru fiecare.',
                    services: [
                        { name: "Tunsoare + coafare (scurt)", price: "350/400" },
                        { name: "Tunsoare + coafare (mediu)", price: "500/550" },
                        { name: "Tunsoare + coafare (lung)", price: "650/750" },
                        { name: "Tunsoare cu coafare (separat)", price: "300/600" },
                        { name: "Breton", price: "150" },
                        { name: "Coafură", price: "750/1500" },
                        { name: "Coafură de mireasă", price: "1600/2200" },
                        { name: "Coafură de probă (50%)", price: "de la 375" },
                        { name: "Tunsoare bărbătească", price: "300" },
                    ]
                },
                accordion_5: {
                    title: 'Îngrijire',
                    description: 'Proceduri nutritive și regenerante pentru păr. Hidratare, strălucire și restaurare profundă.',
                    services: [
                        { name: "Îngrijire Nashi Argan Filer Therapy", price: "750/850" },
                        { name: "Keune Shining", price: "1000/1200" },
                        { name: "CHI Royal Treatment", price: "de la 1000" },
                        { name: "Keune Vital Nutrition SPA Creambath", price: "100" },
                    ]
                },
            },
            gallery: {
                slide_one: {procedure: 'Îngrijirea feței', master: 'Alena'},
                slide_two: {procedure: 'Manichiură', master: 'Maria'},
                slide_three: {procedure: 'Machiaj', master: 'Victoria'},
                slide_four: {procedure: 'Îngrijirea părului', master: 'Antonina'},
                slide_five: {procedure: 'Îngrijirea părului', master: 'Alla'}
            }
        }
    }
}