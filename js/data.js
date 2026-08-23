/**
 * Explore The Globe - Master Country & Geography Dataset
 * Standardized ISO 3166-1 alpha-2, ISO 3166-1 alpha-3, and geographic metadata.
 */

export const CONTINENTS = [
    { id: 'all', name: 'All World', lat: 20, lng: 0 },
    { id: 'Europe', name: 'Europe', lat: 54, lng: 15 },
    { id: 'Asia', name: 'Asia', lat: 34, lng: 100 },
    { id: 'Americas', name: 'Americas', lat: 15, lng: -85 },
    { id: 'Africa', name: 'Africa', lat: 2, lng: 20 },
    { id: 'Oceania', name: 'Oceania', lat: -25, lng: 135 }
];

export const COUNTRIES = [
    // ── ASIA ─────────────────────────────────────────────────────────────
    {
        id: 'IND', iso2: 'IN', name: 'India', officialName: 'Republic of India', flag: '🇮🇳',
        region: 'Asia', subregion: 'Southern Asia', capital: 'New Delhi', lat: 20.5937, lng: 78.9629,
        population: '1,428,627,663', area: '3,287,263 km²', currency: 'Indian Rupee (INR)',
        languages: ['Hindi', 'English'], accentColor: '#ff9933',
        places: [
            { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80', description: 'Ivory-white marble mausoleum commissioned in 1632 by Mughal emperor Shah Jahan.', significance: 'UNESCO World Heritage Site & New 7 Wonders of the World.' },
            { name: 'Amber Fort', location: 'Jaipur, Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80', description: 'Princely palace known for its artistic Hindu style elements overlooking Maota Lake.', significance: 'Hill Fort of Rajasthan UNESCO site.' }
        ],
        foods: [
            { name: 'Hyderabadi Biryani', region: 'Telangana', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', description: 'Aromatic basmati rice cooked with marinated meat, saffron, and rich spices.' },
            { name: 'Masala Dosa', region: 'South India', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80', description: 'Crispy fermented rice and lentil crepe stuffed with spiced potato mash.' }
        ],
        cultureDetails: { traditions: 'Namaste greeting, hospitality (Atithi Devo Bhava), and reverence for elders.', festivals: 'Diwali (Festival of Lights), Holi, Dussehra, and Eid.', arts: 'Classical dance (Bharatanatyam, Kathak), Sitar music, and Bollywood.', lifestyle: 'Vibrant family community, street bazaars, and daily Chai rituals.' },
        historyTimeline: [
            { era: '2500 BCE', period: 'Indus Valley', title: 'Harappan Civilization', description: 'Pioneered advanced urban planning, metallurgy, and brick architecture.' },
            { era: '1947 CE', period: 'Independence', title: 'Sovereign Republic', description: 'Achieved independence from British colonial rule under Mahatma Gandhi.' }
        ],
        facts: ['Yoga originated in India more than 5,000 years ago.', 'Mawsynram in Meghalaya is the wettest inhabited place on Earth.', 'First country in the world to mine and cut diamonds.']
    },
    {
        id: 'JPN', iso2: 'JP', name: 'Japan', officialName: 'State of Japan', flag: '🇯🇵',
        region: 'Asia', subregion: 'Eastern Asia', capital: 'Tokyo', lat: 36.2048, lng: 138.2529,
        population: '124,516,650', area: '377,975 km²', currency: 'Japanese Yen (JPY)',
        languages: ['Japanese'], accentColor: '#ff2a6d',
        places: [
            { name: 'Mount Fuji', location: 'Honshu Island', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', description: 'Iconic snow-capped active stratovolcano rising 3,776 meters high.', significance: 'Sacred mountain, cultural icon, and UNESCO site.' },
            { name: 'Fushimi Inari-taisha', location: 'Kyoto', image: 'https://images.unsplash.com/photo-1478436127897-769e00d0c715?auto=format&fit=crop&w=600&q=80', description: 'Ancient Shinto shrine famous for its thousands of vermilion torii gates.', significance: 'Dedicated to Inari, the Shinto deity of agriculture and prosperity.' }
        ],
        foods: [
            { name: 'Edomae Sushi', region: 'Tokyo', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80', description: 'Masterfully prepared raw fresh fish seasoned over vinegared sushi rice.' },
            { name: 'Tonkotsu Ramen', region: 'Fukuoka / Kyushu', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', description: 'Rich, silky pork bone broth noodle soup with chashu and soft egg.' }
        ],
        cultureDetails: { traditions: 'Omotenashi hospitality, bowing etiquette, and seasonal appreciation.', festivals: 'Gion Matsuri, Cherry Blossom (Hanami), and Tanabata.', arts: 'Traditional Tea Ceremony (Chado), Origami, Ukiyo-e, Anime, and Manga.', lifestyle: 'Harmony (Wa), punctuality, cleanliness, and craftsmanship.' },
        historyTimeline: [
            { era: '1185 CE', period: 'Kamakura Era', title: 'Shogunate Rule', description: 'Samurai warrior class assumed political and military governance.' },
            { era: '1868 CE', period: 'Meiji Era', title: 'Modern Industrial Rise', description: 'Rapid transformation from feudal state into leading global technological power.' }
        ],
        facts: ['Japan consists of 6,852 islands across its archipelago.', 'Tokyo is the most populous metropolitan area on Earth.', 'The Shinkansen bullet train averages less than 1 minute of delay per year.']
    },
    {
        id: 'CHN', iso2: 'CN', name: 'China', officialName: 'People\'s Republic of China', flag: '🇨🇳',
        region: 'Asia', subregion: 'Eastern Asia', capital: 'Beijing', lat: 35.8617, lng: 104.1954,
        population: '1,411,750,000', area: '9,596,961 km²', currency: 'Renminbi Yuan (CNY)',
        languages: ['Standard Mandarin'], accentColor: '#e63946',
        places: [
            { name: 'Great Wall of China', location: 'Huairou, Beijing', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80', description: 'Ancient series of fortifications stretching over 21,000 km across northern borders.', significance: 'UNESCO World Heritage site & New 7 Wonders of the World.' },
            { name: 'Terracotta Army', location: 'Xi\'an, Shaanxi', image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=600&q=80', description: 'Thousands of life-sized terracotta sculptures buried with Emperor Qin Shi Huang.', significance: 'One of the greatest archaeological discoveries of the 20th century.' }
        ],
        foods: [
            { name: 'Peking Duck', region: 'Beijing', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', description: 'Crisp roasted duck sliced thin, wrapped in steamed pancakes with scallions.' },
            { name: 'Dim Sum', region: 'Guangdong / Hong Kong', image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80', description: 'Delicate steamed dumplings, buns, and rolls served in bamboo baskets.' }
        ],
        cultureDetails: { traditions: 'Filial piety, tea ceremony culture, and Lunar Calendar celebrations.', festivals: 'Spring Festival (Lunar New Year), Mid-Autumn Moon Festival, Dragon Boat.', arts: 'Calligraphy, traditional ink wash painting, Silk weaving, and Beijing Opera.', lifestyle: 'Rapid modern technological innovation blended with millennial heritage.' },
        historyTimeline: [
            { era: '221 BCE', period: 'Qin Dynasty', title: 'Unification of China', description: 'Qin Shi Huang unified the warring states and standardized scripts and weights.' },
            { era: '1949 CE', period: 'Modern Era', title: 'Republic Established', description: 'Proclamation of the People\'s Republic of China.' }
        ],
        facts: ['One of the four ancient cradles of human civilization.', 'Invented papermaking, movable type printing, gunpowder, and the compass.', 'Giant pandas are native only to south-central China.']
    },
    {
        id: 'SGP', iso2: 'SG', name: 'Singapore', officialName: 'Republic of Singapore', flag: '🇸🇬',
        region: 'Asia', subregion: 'South-Eastern Asia', capital: 'Singapore', lat: 1.3521, lng: 103.8198,
        population: '5,917,600', area: '728 km²', currency: 'Singapore Dollar (SGD)',
        languages: ['English', 'Malay', 'Mandarin', 'Tamil'], accentColor: '#ff2a6d',
        places: [
            { name: 'Marina Bay Sands & Gardens by the Bay', location: 'Downtown Core', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80', description: 'Futuristic architectural park featuring Supertree Grove and rooftop SkyPark.', significance: 'World-renowned symbol of green urban architecture.' }
        ],
        foods: [
            { name: 'Hainanese Chicken Rice', region: 'Hawker Centers', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Fragrant seasoned rice with poached chicken, chili, and dark ginger sauce.' }
        ],
        cultureDetails: { traditions: 'Multicultural harmony, Kiasu drive, and mutual respect among ethnicities.', festivals: 'Chinese New Year, Deepavali, Hari Raya Puasa, and National Day.', arts: 'Peranakan tilework, modern architectural design, and street murals.', lifestyle: 'Vibrant hawker culture, lush Garden City urban greenery, and clean living.' },
        historyTimeline: [
            { era: '1819 CE', period: 'Colonial Era', title: 'Trading Post Founded', description: 'Sir Stamford Raffles recognized Singapore as strategic maritime port.' },
            { era: '1965 CE', period: 'Independence', title: 'Sovereign Island Republic', description: 'Transformed into a premier global financial and logistics hub.' }
        ],
        facts: ['One of only three sovereign city-states in the modern world.', 'Over 40% of Singapore\'s land area is covered by lush green space.', 'Home to the world\'s largest indoor waterfall at Jewel Changi Airport.']
    },
    {
        id: 'KOR', iso2: 'KR', name: 'South Korea', officialName: 'Republic of Korea', flag: '🇰🇷',
        region: 'Asia', subregion: 'Eastern Asia', capital: 'Seoul', lat: 35.9078, lng: 127.7669,
        population: '51,745,000', area: '100,210 km²', currency: 'South Korean Won (KRW)',
        languages: ['Korean'], accentColor: '#3a86ff',
        places: [
            { name: 'Gyeongbokgung Palace', location: 'Jongno-gu, Seoul', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80', description: 'Primary royal palace of the Joseon dynasty built in 1395.', significance: 'Architectural and cultural heart of traditional Seoul.' }
        ],
        foods: [
            { name: 'Kimchi & Korean BBQ', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', description: 'Fermented spiced napa cabbage paired with grilled marinated meats and banchan.' }
        ],
        cultureDetails: { traditions: 'Respect for seniors (Jonbi-mar), Hanbok apparel, and communal dining.', festivals: 'Chuseok (Korean Thanksgiving), Seollal (Lunar New Year), Boryeong.', arts: 'K-Pop music phenomenon, world-class cinema (K-Drama), and Taekwondo.', lifestyle: 'Pali-pali fast-paced drive, cutting-edge 5G connectivity, and café culture.' },
        historyTimeline: [
            { era: '1443 CE', period: 'Joseon Dynasty', title: 'Hangul Invention', description: 'King Sejong the Great invented the phonetic Korean alphabet.' }
        ],
        facts: ['Consistently ranks among the world leaders in high-speed internet and tech innovation.', 'Jeju Island contains the world\'s longest lava tube system.']
    },
    {
        id: 'THA', iso2: 'TH', name: 'Thailand', officialName: 'Kingdom of Thailand', flag: '🇹🇭',
        region: 'Asia', subregion: 'South-Eastern Asia', capital: 'Bangkok', lat: 15.8700, lng: 100.9925,
        population: '71,697,000', area: '513,120 km²', currency: 'Thai Baht (THB)',
        languages: ['Thai'], accentColor: '#ffb703',
        places: [
            { name: 'Grand Palace & Wat Phra Kaew', location: 'Phra Nakhon, Bangkok', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80', description: 'Ornate gold-spired royal palace complex containing the sacred Emerald Buddha.', significance: 'Historic ceremonial center of the Thai monarchy.' }
        ],
        foods: [
            { name: 'Pad Thai & Tom Yum Goong', region: 'Bangkok / Central Thailand', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', description: 'Stir-fried rice noodles with tamarind, and spicy hot & sour lemongrass soup.' }
        ],
        cultureDetails: { traditions: 'The Wai greeting, respect for monks and the royal institution.', festivals: 'Songkran (Water Festival), Yi Peng (Lantern Festival), and Loy Krathong.', arts: 'Muay Thai kickboxing, traditional silk weaving, and classical dance drama.', lifestyle: 'Warm, hospitable culture universally known as the "Land of Smiles".' },
        historyTimeline: [
            { era: '1238 CE', period: 'Sukhothai Era', title: 'First Thai Kingdom', description: 'Flourishing of unique Thai art, writing, and Theravada Buddhism.' }
        ],
        facts: ['The only Southeast Asian nation never colonized by European powers.', 'Bangkok\'s ceremonial Thai name is 168 letters long, the longest place name in the world.']
    },
    {
        id: 'IDN', iso2: 'ID', name: 'Indonesia', officialName: 'Republic of Indonesia', flag: '🇮🇩',
        region: 'Asia', subregion: 'South-Eastern Asia', capital: 'Jakarta', lat: -0.7893, lng: 113.9213,
        population: '277,534,122', area: '1,904,569 km²', currency: 'Indonesian Rupiah (IDR)',
        languages: ['Indonesian (Bahasa Indonesia)'], accentColor: '#52b788',
        places: [
            { name: 'Borobudur Temple', location: 'Magelang, Central Java', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80', description: 'World\'s largest Buddhist temple complex decorated with 504 Buddha statues.', significance: '9th-century UNESCO World Heritage marvel.' }
        ],
        foods: [
            { name: 'Rendang & Nasi Goreng', region: 'Minangkabau / West Sumatra', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Slow-cooked beef stewed in coconut milk and rich spices until caramelized.' }
        ],
        cultureDetails: { traditions: 'Gotong Royong community mutual aid and Batik fabric heritage.', festivals: 'Bali Nyepi (Day of Silence), Waisak, and Independence Day.', arts: 'Wayang Kulit shadow puppetry, Gamelan orchestras, and wood carving.', lifestyle: 'Vibrant tropical island lifestyle blending ancient traditions with modernity.' },
        historyTimeline: [
            { era: '1293 CE', period: 'Majapahit Empire', title: 'Archipelago Empire', description: 'Unified island maritime trade network spanning the Malay Archipelago.' }
        ],
        facts: ['World\'s largest island nation, comprising over 17,500 islands.', 'The only natural habitat on Earth for the Komodo Dragon, the largest living lizard.']
    },
    {
        id: 'ARE', iso2: 'AE', name: 'United Arab Emirates', officialName: 'United Arab Emirates', flag: '🇦🇪',
        region: 'Asia', subregion: 'Western Asia', capital: 'Abu Dhabi', lat: 23.4241, lng: 53.8478,
        population: '9,441,129', area: '83,600 km²', currency: 'UAE Dirham (AED)',
        languages: ['Arabic', 'English'], accentColor: '#00d2ff',
        places: [
            { name: 'Burj Khalifa', location: 'Downtown Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', description: 'World\'s tallest skyscraper soaring 828 meters into the Arabian sky.', significance: 'Global symbol of groundbreaking architectural and engineering prowess.' }
        ],
        foods: [
            { name: 'Al Machboos & Harees', region: 'Gulf Region', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', description: 'Spiced aromatic basmati rice cooked with tender lamb or fish and dried lime.' }
        ],
        cultureDetails: { traditions: 'Bedouin hospitality, Majlis council gatherings, and gahwa coffee rituals.', festivals: 'UAE National Day, Dubai Shopping Festival, and Camel Racing Festivals.', arts: 'Falconry (UNESCO heritage), Arabic calligraphy, and pearl diving heritage.', lifestyle: 'Forward-looking futuristic metropolis blending Arabian heritage.' },
        historyTimeline: [
            { era: '1971 CE', period: 'Federation', title: 'Union of Emirates', description: 'Sheikh Zayed bin Sultan Al Nahyan united the seven sovereign emirates.' }
        ],
        facts: ['Burj Khalifa holds over six Guinness World Records.', 'Over 200 nationalities live and work together in harmony in the UAE.']
    },
    {
        id: 'MDV', iso2: 'MV', name: 'Maldives', officialName: 'Republic of Maldives', flag: '🇲🇻',
        region: 'Asia', subregion: 'Southern Asia', capital: 'Malé', lat: 3.2028, lng: 73.2207,
        population: '521,021', area: '300 km²', currency: 'Maldivian Rufiyaa (MVR)',
        languages: ['Dhivehi'], accentColor: '#00f2ff',
        places: [
            { name: 'Ari & Malé Atolls', location: 'Central Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', description: 'Idyllic turquoise lagoons, coral barrier reefs, and overwater bungalows.', significance: 'Premier global marine biodiversity sanctuary.' }
        ],
        foods: [
            { name: 'Garudhiya & Mas Huni', region: 'Island Tradition', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80', description: 'Fresh skipjack tuna cooked with lime, grated coconut, and roshi flatbread.' }
        ],
        cultureDetails: { traditions: 'Island seafaring lifestyle, Boduberu drumming, and coral stone carving.', festivals: 'Eid al-Fitr, National Day, and Huravee Day.', arts: 'Lacquerware (Liyelaa Jehun) and mat weaving (Thundu Kunaa).', lifestyle: 'Relaxed island rhythm focused on ocean sustainability.' },
        historyTimeline: [
            { era: '1153 CE', period: 'Conversion', title: 'Sultanate Established', description: 'King Kalaminja converted the kingdom to Islam.' }
        ],
        facts: ['The lowest-lying nation on Earth with an average elevation of 1.5 meters.', 'Formed of 1,192 coral islands grouped across 26 natural atolls.']
    },
    {
        id: 'BHR', iso2: 'BH', name: 'Bahrain', officialName: 'Kingdom of Bahrain', flag: '🇧🇭',
        region: 'Asia', subregion: 'Western Asia', capital: 'Manama', lat: 26.0667, lng: 50.5500,
        population: '1,501,635', area: '780 km²', currency: 'Bahraini Dinar (BHD)',
        languages: ['Arabic', 'English'], accentColor: '#ffb703',
        places: [
            { name: 'Qal\'at al-Bahrain (Bahrain Fort)', location: 'Northern Governorate', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', description: 'Ancient tell fortress occupied from 2300 BCE to 16th century.', significance: 'UNESCO World Heritage site and capital of ancient Dilmun.' }
        ],
        foods: [
            { name: 'Machboos & Halwa Bahraini', region: 'Manama', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', description: 'Spiced mutton rice followed by traditional sweet jelly halwa with cardamon.' }
        ],
        cultureDetails: { traditions: 'Pearl diving heritage, open majlis hospitality, and maritime trade.', festivals: 'Bahrain Grand Prix, National Day, and Spring of Culture.', arts: 'Traditional wooden dhow shipbuilding and pottery.', lifestyle: 'Historic cosmopolitan commercial crossroad of the Arabian Gulf.' },
        historyTimeline: [
            { era: '2300 BCE', period: 'Dilmun Empire', title: 'Bronze Age Trade Hub', description: 'Crucial maritime trading nexus between Mesopotamia and Indus Valley.' }
        ],
        facts: ['First country in the Arabian Gulf to discover oil in 1932.', 'Home to the Tree of Life, a 400-year-old tree thriving alone in the desert without surface water.']
    },

    // ── EUROPE ───────────────────────────────────────────────────────────
    {
        id: 'ITA', iso2: 'IT', name: 'Italy', officialName: 'Italian Republic', flag: '🇮🇹',
        region: 'Europe', subregion: 'Southern Europe', capital: 'Rome', lat: 41.8719, lng: 12.5674,
        population: '58,850,717', area: '301,340 km²', currency: 'Euro (EUR)',
        languages: ['Italian'], accentColor: '#00b4d8',
        places: [
            { name: 'Colosseum & Roman Forum', location: 'Rome, Lazio', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80', description: 'Monumental 1st-century amphitheater constructed under the Flavian emperors.', significance: 'Iconic symbol of the Roman Empire & New 7 Wonders of the World.' },
            { name: 'Duomo di Firenze', location: 'Florence, Tuscany', image: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=600&q=80', description: 'Gothic cathedral crowned by Brunelleschi\'s revolutionary brick dome.', significance: 'Birthplace of the Italian Renaissance.' }
        ],
        foods: [
            { name: 'Authentic Neapolitan Pizza', region: 'Naples, Campania', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80', description: 'Wood-fired crust with San Marzano tomatoes, buffalo mozzarella, and fresh basil.' },
            { name: 'Tagliatelle al Ragu & Gelato', region: 'Bologna & Rome', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80', description: 'Handmade egg pasta with slow-cooked meat sauce, followed by artisanal gelato.' }
        ],
        cultureDetails: { traditions: 'La Passeggiata evening stroll, family Sunday lunches, and espresso etiquette.', festivals: 'Venice Carnival, Palio di Siena, and Milan Fashion Week.', arts: 'Renaissance masterworks (Michelangelo, Da Vinci, Raphael), Opera, and haute couture.', lifestyle: 'La Dolce Vita — celebration of beauty, gastronomy, and historic architecture.' },
        historyTimeline: [
            { era: '753 BCE', period: 'Roman Kingdom & Republic', title: 'Foundation of Rome', description: 'Expansion from city-state into civilization spanning the Mediterranean.' },
            { era: '1861 CE', period: 'Risorgimento', title: 'Unification of Italy', description: 'Garibaldi and Cavour unified the Italian peninsula into a single nation.' }
        ],
        facts: ['Holds 59 UNESCO World Heritage Sites, the most of any country on Earth.', 'Encompasses two independent sovereign enclaves: San Marino and Vatican City.', 'Home to Europe\'s three active volcanoes: Etna, Stromboli, and Vesuvius.']
    },
    {
        id: 'FRA', iso2: 'FR', name: 'France', officialName: 'French Republic', flag: '🇫🇷',
        region: 'Europe', subregion: 'Western Europe', capital: 'Paris', lat: 46.2276, lng: 2.2137,
        population: '68,070,697', area: '643,801 km²', currency: 'Euro (EUR)',
        languages: ['French'], accentColor: '#7000ff',
        places: [
            { name: 'Eiffel Tower & Louvre Museum', location: 'Paris, Île-de-France', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80', description: 'Wrought-iron lattice tower standing beside the world\'s largest art museum.', significance: 'Universal emblem of French culture, art, and liberty.' },
            { name: 'Mont Saint-Michel', location: 'Normandy', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80', description: 'Medieval Benedictine abbey perched dramatically on a tidal island.', significance: 'UNESCO World Heritage gothic wonder.' }
        ],
        foods: [
            { name: 'Croissant & Baguette de Tradition', region: 'Paris', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', description: 'Flaky, butter-laminated morning pastries baked fresh daily.' },
            { name: 'Boeuf Bourguignon', region: 'Burgundy', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Slow-braised beef stewed in red wine, garlic, pearl onions, and mushrooms.' }
        ],
        cultureDetails: { traditions: 'Art de vivre, café terrace intellectual discussions, and terroir wine appreciation.', festivals: 'Bastille Day (14 July), Cannes Film Festival, and Fête de la Musique.', arts: 'Impressionist painting (Monet, Renoir), philosophy, literature, and haute couture.', lifestyle: 'Refined culinary appreciation, architectural preservation, and leisure.' },
        historyTimeline: [
            { era: '1789 CE', period: 'French Revolution', title: 'Liberty, Equality, Fraternity', description: 'Abolition of absolute monarchy and adoption of the Declaration of the Rights of Man.' }
        ],
        facts: ['The most visited destination in the world by international tourists.', 'Spans 12 time zones when including overseas territories across oceans.', 'French gastronomy is recognized as UNESCO Intangible Cultural Heritage.']
    },
    {
        id: 'DEU', iso2: 'DE', name: 'Germany', officialName: 'Federal Republic of Germany', flag: '🇩🇪',
        region: 'Europe', subregion: 'Western Europe', capital: 'Berlin', lat: 51.1657, lng: 10.4515,
        population: '84,358,845', area: '357,022 km²', currency: 'Euro (EUR)',
        languages: ['German'], accentColor: '#ffb703',
        places: [
            { name: 'Neuschwanstein Castle', location: 'Schwangau, Bavaria', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80', description: '19th-century historicist palace built by King Ludwig II on a rugged alpine hill.', significance: 'Inspiration for Disney\'s iconic Cinderella Castle.' },
            { name: 'Brandenburg Gate', location: 'Mitte, Berlin', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80', description: '18th-century neoclassical triumphal monument.', significance: 'Symbol of European peace and German reunification.' }
        ],
        foods: [
            { name: 'Sauerbraten & Currywurst', region: 'Rhineland & Berlin', image: 'https://images.unsplash.com/photo-1586805608485-aaa3365b315b?auto=format&fit=crop&w=600&q=80', description: 'Pot-roasted marinated meat served with potato dumplings, and iconic curry sausage.' }
        ],
        cultureDetails: { traditions: 'Feierabend work-life balance, precision engineering, and bread culture.', festivals: 'Oktoberfest in Munich, Christmas Markets (Weihnachtsmärkte), and Berlinale.', arts: 'Classical composers (Bach, Beethoven, Brahms), Bauhaus design, and philosophy.', lifestyle: 'Eco-conscious green living, outdoor hiking, and cycling culture.' },
        historyTimeline: [
            { era: '1989 CE', period: 'Modern Era', title: 'Fall of the Berlin Wall', description: 'Peaceful revolution leading to the historic reunification of East and West Germany.' }
        ],
        facts: ['Over 20,000 historic castles and fortresses dot the German countryside.', 'First country in the world to adopt Daylight Saving Time in 1916.']
    },
    {
        id: 'GBR', iso2: 'GB', name: 'United Kingdom', officialName: 'United Kingdom of Great Britain and Northern Ireland', flag: '🇬🇧',
        region: 'Europe', subregion: 'Northern Europe', capital: 'London', lat: 55.3781, lng: -3.4360,
        population: '67,736,802', area: '242,495 km²', currency: 'Pound Sterling (GBP)',
        languages: ['English'], accentColor: '#3a86ff',
        places: [
            { name: 'Palace of Westminster & Big Ben', location: 'London, England', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80', description: 'Iconic neo-Gothic parliamentary palace and Elizabeth Tower clock.', significance: 'Historic cradle of parliamentary democracy.' }
        ],
        foods: [
            { name: 'Fish and Chips & Sunday Roast', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1621236378699-8597fee6a81f?auto=format&fit=crop&w=600&q=80', description: 'Crispy battered fish with chunky chips and roast beef with Yorkshire puddings.' }
        ],
        cultureDetails: { traditions: 'Afternoon Tea, pub gatherings, queuing etiquette, and polite understatement.', festivals: 'Glastonbury, Notting Hill Carnival, and Highland Games.', arts: 'Literature (Shakespeare, Dickens), music (The Beatles, Queen), and theater.', lifestyle: 'Historic village countryside walks alongside dynamic global city life.' },
        historyTimeline: [
            { era: '1760 CE', period: 'Industrial Age', title: 'Industrial Revolution', description: 'Birthplace of modern steam power, mechanized manufacturing, and railways.' }
        ],
        facts: ['The London Underground is the world\'s oldest underground railway network (1863).', 'No point in the UK is further than 113 km (70 miles) from the sea.']
    },
    {
        id: 'ESP', iso2: 'ES', name: 'Spain', officialName: 'Kingdom of Spain', flag: '🇪🇸',
        region: 'Europe', subregion: 'Southern Europe', capital: 'Madrid', lat: 40.4637, lng: -3.7492,
        population: '47,519,628', area: '505,990 km²', currency: 'Euro (EUR)',
        languages: ['Spanish', 'Catalan', 'Galician', 'Basque'], accentColor: '#ff4d6d',
        places: [
            { name: 'Basílica de la Sagrada Família', location: 'Barcelona, Catalonia', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80', description: 'Antoni Gaudí\'s towering organic modernist masterpiece.', significance: 'UNESCO World Heritage architectural icon.' },
            { name: 'Alhambra', location: 'Granada, Andalusia', image: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&w=600&q=80', description: 'Stunning Moorish palace and fortress complex with reflecting pools.', significance: 'Apex of Islamic art and architecture in Europe.' }
        ],
        foods: [
            { name: 'Valencian Paella & Tapas', region: 'Valencia & Andalusia', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80', description: 'Saffron rice cooked with seafood or rabbit, and cured Jamón Ibérico.' }
        ],
        cultureDetails: { traditions: 'Siesta midday rest, Tapas bar-hopping, and late dinner social hours.', festivals: 'La Tomatina, Running of the Bulls (San Fermín), and Feria de Abril.', arts: 'Flamenco dance, guitar music, painting (Picasso, Dalí, Velázquez).', lifestyle: 'Passionate outdoor social living filled with sunshine and warmth.' },
        historyTimeline: [
            { era: '1492 CE', period: 'Golden Age', title: 'Spanish Empire Expansion', description: 'Unification under Catholic Monarchs and transatlantic exploration.' }
        ],
        facts: ['Spain is the world\'s largest producer of olive oil, producing over 40% of the global supply.', 'Home to the second-highest number of UNESCO biosphere reserves.']
    },
    {
        id: 'VAT', iso2: 'VA', name: 'Vatican City', officialName: 'Vatican City State', flag: '🇻🇦',
        region: 'Europe', subregion: 'Southern Europe', capital: 'Vatican City', lat: 41.9029, lng: 12.4534,
        population: '825', area: '0.49 km²', currency: 'Euro (EUR)',
        languages: ['Italian', 'Latin'], accentColor: '#ffb703',
        places: [
            { name: 'St. Peter\'s Basilica & Sistine Chapel', location: 'Vatican City', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80', description: 'Largest church in the world containing Michelangelo\'s ceiling frescoes.', significance: 'Spiritual epicenter of the Roman Catholic Church & UNESCO site.' }
        ],
        foods: [
            { name: 'Roman Pastries & Espresso', region: 'Borgo District', image: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?auto=format&fit=crop&w=600&q=80', description: 'Artisanal Maritozzo pastry filled with whipped cream.' }
        ],
        cultureDetails: { traditions: 'Papal audiences, Swiss Guard ceremonies, and solemn liturgical services.', festivals: 'Easter Sunday Mass, Christmas Midnight Vigil, and Canonization ceremonies.', arts: 'Sistine Chapel ceiling, Michelangelo\'s Pietà, and Raphael Rooms.', lifestyle: 'Sacred ecclesiastical monastic and diplomatic community.' },
        historyTimeline: [
            { era: '1929 CE', period: 'Lateran Treaty', title: 'Sovereignty Recognized', description: 'Treaty between the Holy See and the Kingdom of Italy creating the independent microstate.' }
        ],
        facts: ['The smallest sovereign country in the world by both area and population.', 'The only entire country to be designated as a single UNESCO World Heritage site.', 'Guarded by the Swiss Guard, the world\'s oldest active military unit (founded 1506).']
    },
    {
        id: 'MCO', iso2: 'MC', name: 'Monaco', officialName: 'Principality of Monaco', flag: '🇲🇨',
        region: 'Europe', subregion: 'Western Europe', capital: 'Monaco', lat: 43.7384, lng: 7.4246,
        population: '39,050', area: '2.02 km²', currency: 'Euro (EUR)',
        languages: ['French', 'Monégasque'], accentColor: '#e63946',
        places: [
            { name: 'Casino de Monte-Carlo & Port Hercules', location: 'Monte Carlo', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80', description: 'Beaux-Arts casino palace overlooking glamorous Mediterranean mega-yacht harbors.', significance: 'Global symbol of luxury, Riviera glamour, and motorsport.' }
        ],
        foods: [
            { name: 'Barbagiuan', region: 'National Dish', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', description: 'Crisp fried turnover stuffed with Swiss chard, ricotta, and parmesan.' }
        ],
        cultureDetails: { traditions: 'Grimaldi Princely House reverence and Mediterranean Riviera elegance.', festivals: 'Monaco Grand Prix Formula 1, Monaco Yacht Show, and Monte-Carlo Jazz Festival.', arts: 'Opéra de Monte-Carlo, Les Ballets de Monte-Carlo, and Oceanographic Museum.', lifestyle: 'High-end maritime yachting, fine dining, and Mediterranean coastal glamour.' },
        historyTimeline: [
            { era: '1297 CE', period: 'House of Grimaldi', title: 'Dynasty Founded', description: 'François Grimaldi seized the Rock of Monaco disguised as a Franciscan monk.' }
        ],
        facts: ['The second-smallest independent country in the world after Vatican City.', 'The Formula 1 Monaco Grand Prix is raced directly through the public streets.', 'Over 30% of Monaco\'s residents are millionaires.']
    },
    {
        id: 'SMR', iso2: 'SM', name: 'San Marino', officialName: 'Republic of San Marino', flag: '🇸🇲',
        region: 'Europe', subregion: 'Southern Europe', capital: 'San Marino', lat: 43.9424, lng: 12.4578,
        population: '33,660', area: '61.2 km²', currency: 'Euro (EUR)',
        languages: ['Italian'], accentColor: '#00f2ff',
        places: [
            { name: 'Three Towers of San Marino (Guaita, Cesta, Montale)', location: 'Mount Titano', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80', description: 'Medieval fortress towers crowning the limestone peaks of Mount Titano.', significance: 'National emblem depicted on the flag and UNESCO World Heritage site.' }
        ],
        foods: [
            { name: 'Torta Tre Monti', region: 'San Marino', image: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?auto=format&fit=crop&w=600&q=80', description: 'Crispy layered waffle cake filled with hazelnut cream and topped with chocolate.' }
        ],
        cultureDetails: { traditions: 'Crossbowmen heritage (Balestrieri) and dual Captains Regent governance.', festivals: 'Medieval Days Festival and National Day (3 September).', arts: 'Traditional commemorative philately (stamp collecting) and numismatics.', lifestyle: 'Peaceful mountain republic lifestyle overlooking the Adriatic coastline.' },
        historyTimeline: [
            { era: '301 CE', period: 'Foundation', title: 'Oldest Surviving Republic', description: 'Founded as a free monastic community on Mount Titano by Saint Marinus.' }
        ],
        facts: ['Claims the title of the oldest continuous constitutional republic in the world.', 'Has two heads of state (Captains Regent) elected every six months.', 'Completely surrounded by Italy on all borders.']
    },
    {
        id: 'LIE', iso2: 'LI', name: 'Liechtenstein', officialName: 'Principality of Liechtenstein', flag: '🇱🇮',
        region: 'Europe', subregion: 'Western Europe', capital: 'Vaduz', lat: 47.1410, lng: 9.5209,
        population: '39,584', area: '160 km²', currency: 'Swiss Franc (CHF)',
        languages: ['German'], accentColor: '#ffb703',
        places: [
            { name: 'Vaduz Castle', location: 'Vaduz Hilltop', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80', description: 'Historic 12th-century alpine palace and official residence of the Reigning Prince.', significance: 'Sovereign symbol overlooking the Rhine Valley.' }
        ],
        foods: [
            { name: 'Käsknöpfle', region: 'Alpine Region', image: 'https://images.unsplash.com/photo-1586805608485-aaa3365b315b?auto=format&fit=crop&w=600&q=80', description: 'Tender egg dough dumplings tossed in melted alpine cheese and crispy onions.' }
        ],
        cultureDetails: { traditions: 'Alpabfahrt cattle descents, Princely National Day celebrations, and viticulture.', festivals: 'Liechtenstein National Day (15 August).', arts: 'Princely Art Collections and traditional alpine woodworking.', lifestyle: 'Prosperous alpine valley community harmonized with pristine nature.' },
        historyTimeline: [
            { era: '1719 CE', period: 'Imperial Elevation', title: 'Principality Created', description: 'Elevated to an imperial sovereign principality by Holy Roman Emperor Charles VI.' }
        ],
        facts: ['One of only two double-landlocked countries in the world (surrounded only by landlocked states).', 'Has no standing army, having disbanded its military in 1868 without a single conflict.']
    },
    {
        id: 'MLT', iso2: 'MT', name: 'Malta', officialName: 'Republic of Malta', flag: '🇲🇹',
        region: 'Europe', subregion: 'Southern Europe', capital: 'Valletta', lat: 35.9375, lng: 14.3754,
        population: '533,286', area: '316 km²', currency: 'Euro (EUR)',
        languages: ['Maltese', 'English'], accentColor: '#ff4d6d',
        places: [
            { name: 'Valletta City & Grand Harbour', location: 'Grand Harbour', image: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?auto=format&fit=crop&w=600&q=80', description: 'Baroque fortified city founded by the Knights of St. John in 1566.', significance: 'One of the most concentrated historic areas in the world (UNESCO).' }
        ],
        foods: [
            { name: 'Pastizzi & Fenkata', region: 'National Specialties', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', description: 'Flaky diamond pastry filled with ricotta or peas, and traditional rabbit stew.' }
        ],
        cultureDetails: { traditions: 'Parish Festa celebrations with brass bands and spectacular aerial fireworks.', festivals: 'Malta International Fireworks Festival and Feast of St. Paul.', arts: 'Caravaggio master paintings and traditional luzzu fishing boat craft.', lifestyle: 'Sunny Mediterranean archipelago lifestyle with over 300 days of sunshine yearly.' },
        historyTimeline: [
            { era: '3600 BCE', period: 'Megalithic Era', title: 'Ġgantija Temples', description: 'Constructed freestanding stone temples older than the Egyptian Pyramids.' },
            { era: '1565 CE', period: 'Knights of St. John', title: 'Great Siege of Malta', description: 'Heroic defense of the island fortress against the Ottoman armada.' }
        ],
        facts: ['Home to some of the oldest freestanding religious stone structures on Earth.', 'The Maltese language is the only Semitic language officially written in the Latin alphabet.']
    },
    {
        id: 'ISL', iso2: 'IS', name: 'Iceland', officialName: 'Republic of Iceland', flag: '🇮🇸',
        region: 'Europe', subregion: 'Northern Europe', capital: 'Reykjavík', lat: 64.9631, lng: -19.0208,
        population: '382,003', area: '103,000 km²', currency: 'Icelandic Króna (ISK)',
        languages: ['Icelandic'], accentColor: '#38b000',
        places: [
            { name: 'Blue Lagoon & Gullfoss', location: 'Reykjanes & Golden Circle', image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=600&q=80', description: 'Geothermal mineral spa surrounded by volcanic lava fields.', significance: 'Iconic natural geothermal wonder.' }
        ],
        foods: [
            { name: 'Skyr & Arctic Char', region: 'Traditional', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80', description: 'High-protein cultured dairy dish enjoyed since Viking settlement.' }
        ],
        cultureDetails: { traditions: 'Thermal hot spring community bathing and Norse Saga story nights.', festivals: 'Iceland Airwaves and Midsummer Solstice festival.', arts: 'Viking literature, indie music, and knitted Lopapeysa wool sweaters.', lifestyle: 'Pioneering 100% renewable geothermal and hydro powered eco-living.' },
        historyTimeline: [
            { era: '930 CE', period: 'Althing Era', title: 'Oldest Parliament', description: 'Established the Althing assembly at Þingvellir, the world\'s oldest parliament.' }
        ],
        facts: ['Runs on 100% renewable energy for electricity and house heating.', 'Has zero mosquitoes and no standing military force.']
    },
    {
        id: 'NOR', iso2: 'NO', name: 'Norway', officialName: 'Kingdom of Norway', flag: '🇳🇴',
        region: 'Europe', subregion: 'Northern Europe', capital: 'Oslo', lat: 60.4720, lng: 8.4689,
        population: '5,514,042', area: '385,207 km²', currency: 'Norwegian Krone (NOK)',
        languages: ['Norwegian'], accentColor: '#48cae4',
        places: [
            { name: 'Geirangerfjord & Nærøyfjord', location: 'Møre og Romsdal', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80', description: 'Spectacular deep blue glacial fjords flanked by dramatic sheer cliff waterfalls.', significance: 'UNESCO World Heritage flagship fjords.' }
        ],
        foods: [
            { name: 'Norwegian Salmon & Brunost', region: 'Fjords & Countryside', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80', description: 'Sweet caramelized brown goat whey cheese served on crispbread.' }
        ],
        cultureDetails: { traditions: 'Friluftsliv (passionate outdoor life) and Bunad national folk costume.', festivals: 'Constitution Day (17 May) and Midnight Sun festivals.', arts: 'Expressionist master Edvard Munch, composer Edvard Grieg, and stave church architecture.', lifestyle: 'Skiing, fjord hiking, and progressive social equality.' },
        historyTimeline: [
            { era: '793 CE', period: 'Viking Age', title: 'Norse Exploration', description: 'Seafarers charted maritime trade and discovery routes reaching North America.' }
        ],
        facts: ['Over 1,700 named dramatic fjords carve Norway\'s extensive coastline.', 'Home to the Svalbard Global Seed Vault safeguarding humanity\'s crop biodiversity.']
    },

    // ── AMERICAS ─────────────────────────────────────────────────────────
    {
        id: 'USA', iso2: 'US', name: 'United States', officialName: 'United States of America', flag: '🇺🇸',
        region: 'Americas', subregion: 'Northern America', capital: 'Washington, D.C.', lat: 37.0902, lng: -95.7129,
        population: '335,893,238', area: '9,833,520 km²', currency: 'US Dollar (USD)',
        languages: ['English'], accentColor: '#00d2ff',
        places: [
            { name: 'Grand Canyon National Park', location: 'Arizona', image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=600&q=80', description: 'Immense 446 km long steep-sided gorge carved by the Colorado River.', significance: 'UNESCO World Heritage site and natural wonder of the world.' },
            { name: 'Statue of Liberty', location: 'New York City', image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=600&q=80', description: 'Colossal neoclassical copper sculpture on Liberty Island.', significance: 'Universal beacon of freedom and democracy.' }
        ],
        foods: [
            { name: 'Barbecue (Texas & Kansas City) & Clam Chowder', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80', description: 'Slow-smoked beef brisket, pork ribs, and creamy New England clam chowder.' }
        ],
        cultureDetails: { traditions: 'Thanksgiving family dinner, 4th of July fireworks, and road trips.', festivals: 'Independence Day, Super Bowl Sunday, and Mardi Gras.', arts: 'Cinema (Hollywood), Jazz, Blues, Rock & Roll, Hip Hop, and modern abstract art.', lifestyle: 'Entrepreneurial innovation, cultural diversity, and individual expression.' },
        historyTimeline: [
            { era: '1776 CE', period: 'Independence', title: 'Declaration of Independence', description: 'Thirteen colonies proclaimed sovereignty based on inalienable rights.' }
        ],
        facts: ['Yellowstone National Park was established in 1872 as the world\'s first national park.', 'The United States has the world\'s largest economy by nominal GDP.']
    },
    {
        id: 'CAN', iso2: 'CA', name: 'Canada', officialName: 'Canada', flag: '🇨🇦',
        region: 'Americas', subregion: 'Northern America', capital: 'Ottawa', lat: 56.1304, lng: -106.3468,
        population: '40,097,761', area: '9,984,670 km²', currency: 'Canadian Dollar (CAD)',
        languages: ['English', 'French'], accentColor: '#e63946',
        places: [
            { name: 'Banff National Park & Lake Louise', location: 'Alberta', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80', description: 'Turquoise glacial lakes framed by snow-dusted Canadian Rocky Mountains.', significance: 'Flagship national park of the Canadian Rockies.' }
        ],
        foods: [
            { name: 'Poutine & Pure Maple Syrup', region: 'Quebec', image: 'https://images.unsplash.com/photo-1586805608485-aaa3365b315b?auto=format&fit=crop&w=600&q=80', description: 'Crisp golden fries topped with fresh cheese curds and rich brown gravy.' }
        ],
        cultureDetails: { traditions: 'Multicultural mosaic, wilderness cabin trips, and politeness.', festivals: 'Quebec Winter Carnival, Calgary Stampede, and Montreal Jazz Festival.', arts: 'Indigenous First Nations totem carving, Group of Seven landscape art.', lifestyle: 'Ice hockey passion, wilderness canoe expeditions, and outdoor winter sports.' },
        historyTimeline: [
            { era: '1867 CE', period: 'Confederation', title: 'Dominion Established', description: 'British North America Act united the provinces into a federal dominion.' }
        ],
        facts: ['Has the longest coastline of any nation in the world at 243,042 km.', 'Contains over 60% of all the natural freshwater lakes on Earth.']
    },
    {
        id: 'BRA', iso2: 'BR', name: 'Brazil', officialName: 'Federative Republic of Brazil', flag: '🇧🇷',
        region: 'Americas', subregion: 'South America', capital: 'Brasília', lat: -14.2350, lng: -51.9253,
        population: '216,422,446', area: '8,515,767 km²', currency: 'Brazilian Real (BRL)',
        languages: ['Portuguese'], accentColor: '#00ff87',
        places: [
            { name: 'Christ the Redeemer & Sugarloaf', location: 'Rio de Janeiro', image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=600&q=80', description: 'Art Deco statue standing 30m atop Mount Corcovado overlooking Guanabara Bay.', significance: 'New 7 Wonders of the World icon.' },
            { name: 'Iguazu Falls', location: 'Paraná', image: 'https://images.unsplash.com/photo-1583855282680-6dbfc69b0933?auto=format&fit=crop&w=600&q=80', description: 'Immense system of 275 distinct waterfalls surrounded by tropical rainforest.', significance: 'UNESCO World Heritage natural wonder.' }
        ],
        foods: [
            { name: 'Feijoada & Pão de Queijo', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Hearty black bean stew with cuts of pork, paired with chewy cheese bread.' }
        ],
        cultureDetails: { traditions: 'Samba rhythm, Capoeira martial arts, and vibrant beach culture.', festivals: 'Rio Carnival (largest carnival in the world), Festa Junina, and Réveillon.', arts: 'Bossa Nova music (Tom Jobim), modern architecture (Oscar Niemeyer), and street art.', lifestyle: 'Joyful, warm interpersonal warmth, football fandom, and outdoor energy.' },
        historyTimeline: [
            { era: '1822 CE', period: 'Independence', title: 'Empire of Brazil', description: 'Dom Pedro I proclaimed independence from Portugal beside the Ipiranga Brook.' }
        ],
        facts: ['The Amazon Rainforest produces roughly 20% of Earth\'s freshwater runoff.', 'Brazil has won the FIFA World Cup five times, more than any other nation.']
    },
    {
        id: 'MEX', iso2: 'MX', name: 'Mexico', officialName: 'United Mexican States', flag: '🇲🇽',
        region: 'Americas', subregion: 'Central America', capital: 'Mexico City', lat: 23.6345, lng: -102.5528,
        population: '128,455,567', area: '1,964,375 km²', currency: 'Mexican Peso (MXN)',
        languages: ['Spanish'], accentColor: '#ff9933',
        places: [
            { name: 'Chichén Itzá', location: 'Yucatán Peninsula', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=600&q=80', description: 'Monumental Mayan step-pyramid temple of Kukulkan.', significance: 'New 7 Wonders of the World & UNESCO Site.' }
        ],
        foods: [
            { name: 'Tacos al Pastor & Mole Poblano', region: 'Puebla & Mexico City', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80', description: 'Marinated pork shaved onto corn tortillas, and rich complex chocolate-chili sauce.' }
        ],
        cultureDetails: { traditions: 'Día de los Muertos altars, Mariachi serenades, and extended family loyalty.', festivals: 'Day of the Dead (UNESCO), Independence Day (El Grito), and Guelaguetza.', arts: 'Muralism (Diego Rivera, Frida Kahlo), Talavera pottery, and folk textiles.', lifestyle: 'Rich gastronomic celebrations, warmth, and deep ancestral pride.' },
        historyTimeline: [
            { era: '1325 CE', period: 'Aztec Empire', title: 'Tenochtitlan Founded', description: 'Founded capital on an island in Lake Texcoco, now Mexico City.' }
        ],
        facts: ['Introduced chocolate, vanilla, and chili peppers to the global table.', 'Chichén Itzá creates an optical illusion of a serpent slithering down the stairs at the equinox.']
    },
    {
        id: 'ARG', iso2: 'AR', name: 'Argentina', officialName: 'Argentine Republic', flag: '🇦🇷',
        region: 'Americas', subregion: 'South America', capital: 'Buenos Aires', lat: -38.4161, lng: -63.6167,
        population: '46,044,703', area: '2,780,400 km²', currency: 'Argentine Peso (ARS)',
        languages: ['Spanish'], accentColor: '#3a86ff',
        places: [
            { name: 'Perito Moreno Glacier', location: 'Santa Cruz, Patagonia', image: 'https://images.unsplash.com/photo-1583855282680-6dbfc69b0933?auto=format&fit=crop&w=600&q=80', description: 'Massive advancing ice glacier with dramatic 70m calving ice walls.', significance: 'Patagonian Ice Field UNESCO site.' }
        ],
        foods: [
            { name: 'Asado Barbecue & Empanadas', region: 'Pampas', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Slow-grilled beef cuts over wood coals paired with Chimichurri and Malbec.' }
        ],
        cultureDetails: { traditions: 'Yerba Mate sharing ceremony, Gaucho horsemanship, and literary cafés.', festivals: 'Tango International Festival, National Grape Harvest, and Cosquín.', arts: 'Tango music and dance (Carlos Gardel, Astor Piazzolla), literature (Borges).', lifestyle: 'Passionate football culture, intellectual debate, and vibrant late-night dining.' },
        historyTimeline: [
            { era: '1816 CE', period: 'Independence', title: 'May Revolution', description: 'Congress of Tucumán declared independence from the Spanish Crown.' }
        ],
        facts: ['Home to Mount Aconcagua (6,961m), the highest mountain in both the Western and Southern Hemispheres.', 'Three-time champion of the FIFA World Cup.']
    },
    {
        id: 'PER', iso2: 'PE', name: 'Peru', officialName: 'Republic of Peru', flag: '🇵🇪',
        region: 'Americas', subregion: 'South America', capital: 'Lima', lat: -9.1900, lng: -75.0152,
        population: '34,049,588', area: '1,285,216 km²', currency: 'Peruvian Sol (PEN)',
        languages: ['Spanish', 'Quechua', 'Aymara'], accentColor: '#ff4d6d',
        places: [
            { name: 'Machu Picchu', location: 'Cusco Region', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80', description: '15th-century Inca citadel set dramatically between Andean peaks.', significance: 'New 7 Wonders of the World & UNESCO World Heritage Site.' }
        ],
        foods: [
            { name: 'Ceviche & Lomo Saltado', region: 'Pacific Coast & Lima', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80', description: 'Fresh raw fish cured in freshly squeezed lime juice, with red onion, cilantro, and ají.' }
        ],
        cultureDetails: { traditions: 'Pachamama (Mother Earth) offerings and colorful Quechua textile weaving.', festivals: 'Inti Raymi (Festival of the Sun) and Fiesta de la Candelaria.', arts: 'Andean panpipe music (zampoña), gold metallurgy, and pottery.', lifestyle: 'Harmonious blend of pre-Columbian Andean heritage and coastal modernity.' },
        historyTimeline: [
            { era: '1438 CE', period: 'Inca Empire', title: 'Tawantinsuyu Expansion', description: 'Pachacuti transformed the kingdom into the largest empire in pre-Columbian America.' }
        ],
        facts: ['Lake Titicaca is the highest navigable lake in the world at 3,812 meters altitude.', 'Contains over 3,000 distinct native varieties of potatoes.']
    },

    // ── AFRICA ───────────────────────────────────────────────────────────
    {
        id: 'EGY', iso2: 'EG', name: 'Egypt', officialName: 'Arab Republic of Egypt', flag: '🇪🇬',
        region: 'Africa', subregion: 'Northern Africa', capital: 'Cairo', lat: 26.8206, lng: 30.8025,
        population: '112,716,598', area: '1,010,408 km²', currency: 'Egyptian Pound (EGP)',
        languages: ['Arabic'], accentColor: '#ffb703',
        places: [
            { name: 'Great Pyramids of Giza & Sphinx', location: 'Giza, Greater Cairo', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', description: 'Monuments built for Pharaoh Khufu over 4,500 years ago.', significance: 'The oldest and only surviving wonder of the Ancient Seven Wonders of the World.' },
            { name: 'Valley of the Kings & Karnak', location: 'Luxor', image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=600&q=80', description: 'Ancient royal burial chambers and massive hypostyle hall temple complex.', significance: 'World\'s greatest open-air museum.' }
        ],
        foods: [
            { name: 'Koshary & Ful Medames', region: 'Cairo & Alexandria', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Traditional mix of rice, macaroni, lentils, spicy tomato sauce, and crispy onions.' }
        ],
        cultureDetails: { traditions: 'Nile agrarian heritage, Ahwa café culture, and Ramadan celebrations.', festivals: 'Sham el-Nessim (Spring festival since pharaonic times) and Eid.', arts: 'Hieroglyphic inscriptions, Arabic oud music, and alabaster craft.', lifestyle: 'Bustling historic souk trade blended with thousands of years of Nile culture.' },
        historyTimeline: [
            { era: '3100 BCE', period: 'Early Dynastic', title: 'Unification of Upper & Lower Egypt', description: 'King Narmer unified the two lands, establishing the first pharaonic dynasty.' }
        ],
        facts: ['The Great Pyramid of Giza was the tallest man-made structure on Earth for over 3,800 years.', 'The Nile River is historically recognized as the longest river in the world.']
    },
    {
        id: 'ZAF', iso2: 'ZA', name: 'South Africa', officialName: 'Republic of South Africa', flag: '🇿🇦',
        region: 'Africa', subregion: 'Southern Africa', capital: 'Pretoria', lat: -30.5595, lng: 22.9375,
        population: '60,414,495', area: '1,221,037 km²', currency: 'South African Rand (ZAR)',
        languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English', 'Northern Sotho'], accentColor: '#2a9d8f',
        places: [
            { name: 'Table Mountain & Cape Point', location: 'Cape Town, Western Cape', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80', description: 'Flat-topped sandstone mountain plateau overlooking the Atlantic ocean.', significance: 'New 7 Wonders of Nature & floral biodiversity hotspot.' },
            { name: 'Kruger National Park', location: 'Limpopo & Mpumalanga', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', description: 'Vast wildlife sanctuary home to the Big Five game animals.', significance: 'Premier African safari conservation reserve.' }
        ],
        foods: [
            { name: 'Braai Barbecue & Bobotie', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Wood-fired meats cooked on a braai and spiced minced meat bake topped with egg custard.' }
        ],
        cultureDetails: { traditions: 'Rainbow Nation multicultural unity, Ubuntu philosophy, and praise poetry.', festivals: 'Heritage Day (Braai Day), Cape Town Minstrel Carnival, and National Arts Festival.', arts: 'Zulu beadwork, Ndebele geometric house murals, and Ladysmith Black Mambazo vocal harmony.', lifestyle: 'Passionate rugby and football spirit, safari lifestyle, and coastal living.' },
        historyTimeline: [
            { era: '1994 CE', period: 'Democracy', title: 'Birth of the Rainbow Nation', description: 'First fully representative democratic election saw Nelson Mandela elected President.' }
        ],
        facts: ['The only sovereign country in the world with three official capital cities (Pretoria, Cape Town, Bloemfontein).', 'Table Mountain is one of the oldest mountains on Earth, estimated at 240 million years old.']
    },
    {
        id: 'NGA', iso2: 'NG', name: 'Nigeria', officialName: 'Federal Republic of Nigeria', flag: '🇳🇬',
        region: 'Africa', subregion: 'Western Africa', capital: 'Abuja', lat: 9.0820, lng: 8.6753,
        population: '223,804,632', area: '923,768 km²', currency: 'Nigerian Naira (NGN)',
        languages: ['English', 'Hausa', 'Yoruba', 'Igbo'], accentColor: '#00ff87',
        places: [
            { name: 'Zuma Rock', location: 'Niger State, near Abuja', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', description: 'Massive natural igneous monolith rising 725 meters above the surrounding savannah.', significance: 'Iconic natural landmark known as the Gateway to Abuja.' }
        ],
        foods: [
            { name: 'Jollof Rice & Suya', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', description: 'Aromatic seasoned rice cooked in rich tomato-pepper broth with spicy grilled beef skewers.' }
        ],
        cultureDetails: { traditions: 'Respect for traditional rulers, lavish Owambe celebrations, and entrepreneurial drive.', festivals: 'Argungu Fishing Festival, Durbar equestrian festival, and Calabar Carnival.', arts: 'Afrobeats global music (Burna Boy, Wizkid), Nollywood cinema, and Benin bronze casting.', lifestyle: 'Dynamic, high-energy commercial drive with rich cultural pride.' },
        historyTimeline: [
            { era: '1960 CE', period: 'Independence', title: 'Federal Republic', description: 'Gained full independence from British colonial rule.' }
        ],
        facts: ['The most populous country in Africa and the 6th most populous in the world.', 'Nollywood is the world\'s second-largest film industry by volume of productions.']
    },
    {
        id: 'KEN', iso2: 'KE', name: 'Kenya', officialName: 'Republic of Kenya', flag: '🇰🇪',
        region: 'Africa', subregion: 'Eastern Africa', capital: 'Nairobi', lat: -1.2921, lng: 36.8219,
        population: '55,100,586', area: '580,367 km²', currency: 'Kenyan Shilling (KES)',
        languages: ['Swahili', 'English'], accentColor: '#52b788',
        places: [
            { name: 'Maasai Mara National Reserve', location: 'Narok County', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', description: 'World-famous savannah wilderness hosting the annual Great Wildebeest Migration.', significance: 'One of the greatest wildlife spectacles on Earth.' }
        ],
        foods: [
            { name: 'Nyama Choma & Ugali', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Slow-roasted succulent goat meat served with cornmeal mash and spicy kachumbari salad.' }
        ],
        cultureDetails: { traditions: 'Harambee ("all pull together") community spirit and Maasai warrior customs.', festivals: 'Jamhuri Day, Rusinga Cultural Festival, and Safari Rally.', arts: 'Kikoi textiles, soapstone carving, and beaded Shúkà blankets.', lifestyle: 'World-leading marathon runners and innovative mobile money pioneer (M-Pesa).' },
        historyTimeline: [
            { era: '1963 CE', period: 'Independence', title: 'Sovereign Republic', description: 'Achieved independence led by Jomo Kenyatta.' }
        ],
        facts: ['Nairobi is the only global capital city featuring a free-roaming wildlife national park within city limits.', 'Dominates global middle- and long-distance athletics championships.']
    },
    {
        id: 'MAR', iso2: 'MA', name: 'Morocco', officialName: 'Kingdom of Morocco', flag: '🇲🇦',
        region: 'Africa', subregion: 'Northern Africa', capital: 'Rabat', lat: 31.7917, lng: -7.0926,
        population: '37,840,000', area: '446,550 km²', currency: 'Moroccan Dirham (MAD)',
        languages: ['Arabic', 'Berber (Tamazight)', 'French'], accentColor: '#ff9933',
        places: [
            { name: 'Jemaa el-Fnaa & Medina of Marrakech', location: 'Marrakech', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', description: 'Ancient marketplace bustling with storytellers, musicians, spice stalls, and souks.', significance: 'UNESCO Masterpiece of the Oral and Intangible Heritage.' }
        ],
        foods: [
            { name: 'Tagine & Couscous', region: 'Maghreb', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Slow-cooked stew of lamb, prunes, almonds, and saffron cooked in a conical earthenware pot.' }
        ],
        cultureDetails: { traditions: 'Maghrebi mint tea ceremony ("Berber whiskey") and Hammam steam baths.', festivals: 'Fes Festival of World Sacred Music, Rose Festival, and Gnaoua World Music Festival.', arts: 'Zellige geometric mosaic tilework, leather tanning, and handwoven Berber rugs.', lifestyle: 'Historic Medina communal trading traditions blended with Atlantic and Mediterranean coast life.' },
        historyTimeline: [
            { era: '789 CE', period: 'Idrisid Dynasty', title: 'First Moroccan State', description: 'Founded by Idris I, establishing Fes as the imperial capital.' }
        ],
        facts: ['The University of Al-Karaouine in Fes was founded in 859 CE, making it the oldest continually operating university in the world.', 'Chefchaouen is world-renowned for its striking powder-blue painted mountain streets.']
    },

    // ── OCEANIA ──────────────────────────────────────────────────────────
    {
        id: 'AUS', iso2: 'AU', name: 'Australia', officialName: 'Commonwealth of Australia', flag: '🇦🇺',
        region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Canberra', lat: -25.2744, lng: 133.7751,
        population: '26,638,544', area: '7,692,024 km²', currency: 'Australian Dollar (AUD)',
        languages: ['English'], accentColor: '#3a86ff',
        places: [
            { name: 'Sydney Opera House & Harbour Bridge', location: 'Sydney, New South Wales', image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&w=600&q=80', description: 'Jørn Utzon\'s expressionist sail-roof performing arts center.', significance: 'UNESCO World Heritage 20th-century architectural masterpiece.' },
            { name: 'Great Barrier Reef & Uluru', location: 'Queensland & Northern Territory', image: 'https://images.unsplash.com/photo-1507699622108-4be3afd695ad?auto=format&fit=crop&w=600&q=80', description: 'World\'s largest coral reef system and the sacred sandstone monolith of Uluru.', significance: 'World heritage wonders of immense ecological and spiritual significance.' }
        ],
        foods: [
            { name: 'Meat Pie & Pavlova', region: 'Nationwide', image: 'https://images.unsplash.com/photo-1621236378699-8597fee6a81f?auto=format&fit=crop&w=600&q=80', description: 'Flaky pastry filled with minced meat and gravy, followed by crisp meringue topped with fresh fruit.' }
        ],
        cultureDetails: { traditions: 'Surf lifesaving, "Fair Go" mateship values, and barbecue gatherings.', festivals: 'Sydney New Year\'s Eve Fireworks, Melbourne Cup, and Vivid Sydney.', arts: 'Aboriginal Dot Painting, didgeridoo music, cinema, and world-class coffee culture.', lifestyle: 'Active outdoor coastal and outback lifestyle.' },
        historyTimeline: [
            { era: '65,000 BCE', period: 'Indigenous Era', title: 'First Nations Heritage', description: 'Aboriginal and Torres Strait Islander peoples established continuous culture.' },
            { era: '1901 CE', period: 'Federation', title: 'Commonwealth of Australia', description: 'Six separate British self-governing colonies united into a single federal nation.' }
        ],
        facts: ['Over 80% of Australia\'s native wildlife (kangaroos, koalas, platypuses) exists nowhere else on Earth.', 'The Great Barrier Reef is so vast it can be seen from outer space.']
    },
    {
        id: 'NZL', iso2: 'NZ', name: 'New Zealand', officialName: 'New Zealand (Aotearoa)', flag: '🇳🇿',
        region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Wellington', lat: -40.9006, lng: 174.8860,
        population: '5,228,100', area: '268,021 km²', currency: 'New Zealand Dollar (NZD)',
        languages: ['English', 'Māori'], accentColor: '#00f2ff',
        places: [
            { name: 'Milford Sound (Piopiotahi)', location: 'Fiordland, South Island', image: 'https://images.unsplash.com/photo-1507699622108-4be3afd695ad?auto=format&fit=crop&w=600&q=80', description: 'Glacial fjord towering with Mitre Peak, cascading waterfalls, and rainforests.', significance: 'Described by Rudyard Kipling as the Eighth Wonder of the World.' }
        ],
        foods: [
            { name: 'Māori Hāngī & Lamb', region: 'Traditional', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80', description: 'Meats and root vegetables slow-steamed underground using heated volcanic rocks.' }
        ],
        cultureDetails: { traditions: 'The Haka ceremonial war dance, Hongi greeting, and Kaitiakitanga (guardianship of nature).', festivals: 'Waitangi Day, Matariki (Māori New Year), and Pasifika Festival.', arts: 'Tā moko traditional tattooing, Pounamu jade carving, and world-class filmmaking.', lifestyle: 'Kiwi adventure spirit, rugby reverence (All Blacks), and pristine eco-tourism.' },
        historyTimeline: [
            { era: '1893 CE', period: 'Universal Suffrage', title: 'First Country with Women\'s Vote', description: 'Became the first self-governing nation in the world where women won the right to vote.' }
        ],
        facts: ['First sovereign country in the world where all adult women won the right to vote in 1893.', 'Home to the flightless Kiwi bird and the prehistoric Tuatara reptile.']
    },
    {
        id: 'FJI', iso2: 'FJ', name: 'Fiji', officialName: 'Republic of Fiji', flag: '🇫🇯',
        region: 'Oceania', subregion: 'Melanesia', capital: 'Suva', lat: -17.7134, lng: 178.0650,
        population: '936,375', area: '18,274 km²', currency: 'Fijian Dollar (FJD)',
        languages: ['English', 'Fijian', 'Hindi'], accentColor: '#00f2ff',
        places: [
            { name: 'Mamanuca & Yasawa Islands', location: 'Western Division', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', description: 'Pristine volcanic archipelago with turquoise reefs, sea caves, and white sand atolls.', significance: 'World-renowned tropical scuba diving, coral reefs, and surfing.' }
        ],
        foods: [
            { name: 'Kokoda', region: 'Island Tradition', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80', description: 'Raw mahi-mahi fish cured in fresh lime juice and tossed with thick coconut cream.' }
        ],
        cultureDetails: { traditions: 'Kava (Yaqona) welcoming ceremony, Bula spirit, and Sevusevu protocol.', festivals: 'Bula Festival, Hibiscus Festival, and Diwali.', arts: 'Masi bark cloth painting, Lali drum music, and traditional wood carving.', lifestyle: 'Relaxed island time, village hospitality, and passionate rugby sevens culture.' },
        historyTimeline: [
            { era: '1970 CE', period: 'Independence', title: 'Sovereign Nation', description: 'Achieved independence from British rule.' }
        ],
        facts: ['Comprises an archipelago of more than 330 islands, of which 110 are permanently inhabited.', 'Won back-to-back Olympic Gold Medals in Men\'s Rugby Sevens.']
    }
];

/**
 * Standard ISO Alpha-3, Alpha-2, Name, and TopoJSON aliases mapping dictionary.
 * Maps any country name or alias from world-atlas to its canonical ISO-A3 code and metadata.
 */
export const COUNTRY_ALIASES = {
    'UNITED STATES OF AMERICA': 'USA',
    'UNITED STATES': 'USA',
    'US': 'USA',
    'USA': 'USA',
    'INDIA': 'IND',
    'IN': 'IND',
    'IND': 'IND',
    'JAPAN': 'JPN',
    'JP': 'JPN',
    'JPN': 'JPN',
    'CHINA': 'CHN',
    'PEOPLE\'S REPUBLIC OF CHINA': 'CHN',
    'CN': 'CHN',
    'CHN': 'CHN',
    'ITALY': 'ITA',
    'ITALIAN REPUBLIC': 'ITA',
    'IT': 'ITA',
    'ITA': 'ITA',
    'FRANCE': 'FRA',
    'FRENCH REPUBLIC': 'FRA',
    'FR': 'FRA',
    'FRA': 'FRA',
    'GERMANY': 'DEU',
    'FEDERAL REPUBLIC OF GERMANY': 'DEU',
    'DE': 'DEU',
    'DEU': 'DEU',
    'UNITED KINGDOM': 'GBR',
    'GREAT BRITAIN': 'GBR',
    'UK': 'GBR',
    'GB': 'GBR',
    'GBR': 'GBR',
    'SPAIN': 'ESP',
    'KINGDOM OF SPAIN': 'ESP',
    'ES': 'ESP',
    'ESP': 'ESP',
    'BRAZIL': 'BRA',
    'FEDERATIVE REPUBLIC OF BRAZIL': 'BRA',
    'BR': 'BRA',
    'BRA': 'BRA',
    'CANADA': 'CAN',
    'CA': 'CAN',
    'CAN': 'CAN',
    'MEXICO': 'MEX',
    'MX': 'MEX',
    'MEX': 'MEX',
    'ARGENTINA': 'ARG',
    'AR': 'ARG',
    'ARG': 'ARG',
    'PERU': 'PER',
    'PE': 'PER',
    'PER': 'PER',
    'EGYPT': 'EGY',
    'EG': 'EGY',
    'EGY': 'EGY',
    'SOUTH AFRICA': 'ZAF',
    'ZA': 'ZAF',
    'ZAF': 'ZAF',
    'NIGERIA': 'NGA',
    'NG': 'NGA',
    'NGA': 'NGA',
    'KENYA': 'KEN',
    'KE': 'KEN',
    'KEN': 'KEN',
    'MOROCCO': 'MAR',
    'MA': 'MAR',
    'MAR': 'MAR',
    'AUSTRALIA': 'AUS',
    'AU': 'AUS',
    'AUS': 'AUS',
    'NEW ZEALAND': 'NZL',
    'NZ': 'NZL',
    'NZL': 'NZL',
    'FIJI': 'FJI',
    'FJ': 'FJI',
    'FJI': 'FJI',
    'SINGAPORE': 'SGP',
    'SG': 'SGP',
    'SGP': 'SGP',
    'SOUTH KOREA': 'KOR',
    'KOREA, REPUBLIC OF': 'KOR',
    'KR': 'KOR',
    'KOR': 'KOR',
    'THAILAND': 'THA',
    'TH': 'THA',
    'THA': 'THA',
    'INDONESIA': 'IDN',
    'ID': 'IDN',
    'IDN': 'IDN',
    'UNITED ARAB EMIRATES': 'ARE',
    'UAE': 'ARE',
    'AE': 'ARE',
    'ARE': 'ARE',
    'MALDIVES': 'MDV',
    'MV': 'MDV',
    'MDV': 'MDV',
    'BAHRAIN': 'BHR',
    'BH': 'BHR',
    'BHR': 'BHR',
    'VATICAN CITY': 'VAT',
    'HOLY SEE': 'VAT',
    'VA': 'VAT',
    'VAT': 'VAT',
    'MONACO': 'MCO',
    'MC': 'MCO',
    'MCO': 'MCO',
    'SAN MARINO': 'SMR',
    'SM': 'SMR',
    'SMR': 'SMR',
    'LIECHTENSTEIN': 'LIE',
    'LI': 'LIE',
    'LIE': 'LIE',
    'MALTA': 'MLT',
    'MT': 'MLT',
    'MLT': 'MLT',
    'ICELAND': 'ISL',
    'IS': 'ISL',
    'ISL': 'ISL',
    'NORWAY': 'NOR',
    'NO': 'NOR',
    'NOR': 'NOR',
    'RUSSIA': 'RUS',
    'RUSSIAN FEDERATION': 'RUS',
    'RU': 'RUS',
    'RUS': 'RUS',
    'PAKISTAN': 'PAK',
    'PK': 'PAK',
    'PAK': 'PAK',
    'BANGLADESH': 'BGD',
    'BD': 'BGD',
    'BGD': 'BGD',
    'NEPAL': 'NPL',
    'NP': 'NPL',
    'NPL': 'NPL',
    'SRI LANKA': 'LKA',
    'LK': 'LKA',
    'LKA': 'LKA',
    'PORTUGAL': 'PRT',
    'PT': 'PRT',
    'PRT': 'PRT',
    'SWITZERLAND': 'CHE',
    'CH': 'CHE',
    'CHE': 'CHE',
    'NETHERLANDS': 'NLD',
    'NL': 'NLD',
    'NLD': 'NLD',
    'BELGIUM': 'BEL',
    'BE': 'BEL',
    'BEL': 'BEL',
    'SWEDEN': 'SWE',
    'SE': 'SWE',
    'SWE': 'SWE',
    'FINLAND': 'FIN',
    'FI': 'FIN',
    'FIN': 'FIN',
    'DENMARK': 'DNK',
    'DK': 'DNK',
    'DNK': 'DNK',
    'IRELAND': 'IRL',
    'IE': 'IRL',
    'IRL': 'IRL',
    'AUSTRIA': 'AUT',
    'AT': 'AUT',
    'AUT': 'AUT',
    'GREECE': 'GRC',
    'GR': 'GRC',
    'GRC': 'GRC',
    'TURKEY': 'TUR',
    'TÜRKIYE': 'TUR',
    'TR': 'TUR',
    'TUR': 'TUR',
    'POLAND': 'POL',
    'PL': 'POL',
    'POL': 'POL',
    'CZECH REPUBLIC': 'CZE',
    'CZECHIA': 'CZE',
    'CZ': 'CZE',
    'CZE': 'CZE',
    'CHILE': 'CHL',
    'CL': 'CHL',
    'CHL': 'CHL',
    'COLOMBIA': 'COL',
    'CO': 'COL',
    'COL': 'COL',
    'VIETNAM': 'VNM',
    'VIET NAM': 'VNM',
    'VN': 'VNM',
    'VNM': 'VNM',
    'PHILIPPINES': 'PHL',
    'PH': 'PHL',
    'PHL': 'PHL',
    'MALAYSIA': 'MYS',
    'MY': 'MYS',
    'MYS': 'MYS',
    'SAUDI ARABIA': 'SAU',
    'SA': 'SAU',
    'SAU': 'SAU'
};
