import { Product } from '../types';

import heroImg from '../assets/images/hero_samazing_box_1791293299051.jpg';
import milkyMoonImg from '../assets/images/flavour_milky_moon_1791293310602.jpg';
import chocoDreamImg from '../assets/images/flavour_choco_dream_1791293324689.jpg';
import mangoSunsetImg from '../assets/images/flavour_mango_sunset_1791293340114.jpg';
import pistachioGlowImg from '../assets/images/flavour_pistachio_glow_1791293351145.jpg';
import raspberryVelvetImg from '../assets/images/flavour_raspberry_velvet_1791293363922.jpg';
import completeKitImg from '../assets/images/complete_kit_bundle_1791293377123.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'milky-moon',
    name: 'Milky Moon',
    category: 'flavour',
    tagline: {
      EN: 'Soft, milky and creamy, inspired by Italian fior di latte.',
      DE: 'Weich, milchig und cremig, inspiriert von italienischem Fior di Latte.',
    },
    description: {
      EN: 'An elegant Fior di Latte base crafted with pure egg-white proteins and milk solids. Yields a pillowy, neutral creaminess that pairs exquisitely with dark chocolate chips, fresh berries, or raw espresso.',
      DE: 'Eine elegante Fior di Latte Basis mit reinen Eiklarproteinen und Milchtrockenmasse. Ergibt eine fluffige, samtige Creme, die perfekt mit Schokodrops, frischen Beeren oder Espresso harmoniert.',
    },
    price: 3.89,
    image: milkyMoonImg,
    galleryImages: [milkyMoonImg, heroImg],
    isFlavour: true,
    proteinGrams: 23,
    caloriesWater: 204,
    preparedVolume: '~400 ml',
    inStock: true,
    ingredients: {
      EN: 'Egg white protein powder, Milk protein concentrate, Erythritol, Natural dairy flavorings, Guar gum, Xanthan gum, Sea salt.',
      DE: 'Eiklarproteinpulver, Milchproteinkonzentrat, Erythrit, Natürliche Milcharomen, Guarkernmehl, Xanthangummi, Meersalz.',
    },
    allergens: {
      EN: 'Contains Egg and Milk. Produced in a facility that processes nuts.',
      DE: 'Enthält Ei und Milch. Kann Spuren von Schalenfrüchten enthalten.',
    },
    nutrition: {
      per100g: { energyKcal: 382, fat: 2.1, saturates: 0.9, carbs: 12.4, sugars: 4.1, protein: 78.2, salt: 0.8 },
      per50gWithWater: { energyKcal: 204, fat: 1.1, saturates: 0.5, carbs: 6.2, sugars: 2.1, protein: 23.1, salt: 0.4 },
      per50gWithProteinMilk: { energyKcal: 285, fat: 2.2, saturates: 1.1, carbs: 14.8, sugars: 10.5, protein: 38.5, salt: 0.7 },
    },
    prepSteps: [
      { title: { EN: '1. Fill', DE: '1. Einfüllen' }, desc: { EN: 'Add 150ml cold water or milk to 50g powder.', DE: '150ml kaltes Wasser oder Milch zu 50g Pulver geben.' } },
      { title: { EN: '2. Whip', DE: '2. Aufschlagen' }, desc: { EN: 'Whip for 2 minutes with a handheld mixer until airy peaks form.', DE: '2 Minuten mit dem Handrührgerät aufschlagen, bis luftiger Schaum entsteht.' } },
      { title: { EN: '3. Freeze', DE: '3. Einfrieren' }, desc: { EN: 'Freeze for 3 hours for gelato texture or enjoy immediately as mousse.', DE: '3 Stunden für Gelato-Textur einfrieren oder sofort als Mousse genießen.' } },
      { title: { EN: '4. Enjoy', DE: '4. Genießen' }, desc: { EN: 'Allow 5 mins to soften after overnight freezing.', DE: 'Nach dem Einfrieren über Nacht 5 Min. antauen lassen.' } },
    ]
  },
  {
    id: 'choco-dream',
    name: 'Choco Dream',
    category: 'flavour',
    tagline: {
      EN: 'Deep cocoa warmth with a silky velvet whipping texture.',
      DE: 'Tiefe Kakaowärme mit samtig-luftiger Aufschlagtextur.',
    },
    description: {
      EN: 'Formulated with premium Dutch processed dark cocoa and aerated egg-white structure for a cloud-like chocolate mousse experience without heavy cream.',
      DE: 'Hergestellt aus hochwertigem holländischem Kakao und aufgeschlagener Eiklarstruktur für ein feines Schokomousse-Erlebnis ohne schwere Sahne.',
    },
    price: 3.89,
    image: chocoDreamImg,
    galleryImages: [chocoDreamImg, heroImg],
    isFlavour: true,
    proteinGrams: 24,
    caloriesWater: 208,
    preparedVolume: '~400 ml',
    inStock: true,
    ingredients: {
      EN: 'Egg white protein powder, Low-fat cocoa powder (18%), Milk protein isolate, Erythritol, Natural dark cocoa flavor, Plant fiber, Sea salt.',
      DE: 'Eiklarproteinpulver, fettarmes Kakaopulver (18%), Milchproteinisolat, Erythrit, natürliches Kakaoaroma, Pflanzenfasern, Meersalz.',
    },
    allergens: {
      EN: 'Contains Egg and Milk.',
      DE: 'Enthält Ei und Milch.',
    },
    nutrition: {
      per100g: { energyKcal: 376, fat: 3.2, saturates: 1.8, carbs: 14.1, sugars: 2.8, protein: 76.5, salt: 0.9 },
      per50gWithWater: { energyKcal: 208, fat: 1.6, saturates: 0.9, carbs: 7.0, sugars: 1.4, protein: 24.2, salt: 0.45 },
      per50gWithProteinMilk: { energyKcal: 289, fat: 2.7, saturates: 1.5, carbs: 15.6, sugars: 9.8, protein: 39.6, salt: 0.75 },
    },
    prepSteps: [
      { title: { EN: '1. Fill', DE: '1. Einfüllen' }, desc: { EN: 'Add 150ml chilled liquid.', DE: '150ml gekühlte Flüssigkeit zugeben.' } },
      { title: { EN: '2. Whip', DE: '2. Aufschlagen' }, desc: { EN: 'Whip for 2 minutes to triple the volume.', DE: '2 Minuten aufschlagen bis dreifaches Volumen erreicht ist.' } },
      { title: { EN: '3. Freeze', DE: '3. Einfrieren' }, desc: { EN: 'Freeze for 3 hours for chocolate gelato.', DE: '3 Stunden für Schoko-Gelato einfrieren.' } },
      { title: { EN: '4. Enjoy', DE: '4. Genießen' }, desc: { EN: 'Top with crushed cocoa nibs.', DE: 'Mit Kakaonibs garnieren und genießen.' } },
    ]
  },
  {
    id: 'mango-sunset',
    name: 'Mango Sunset',
    category: 'flavour',
    tagline: {
      EN: 'Sun-ripened Alphonso mango brilliance in a airy frozen cream.',
      DE: 'Sonnengereifte Alphonso-Mango in einer luftigen Creme.',
    },
    description: {
      EN: 'A vibrant tropical indulgence capturing pure mango nectar combined with high-protein aerated meringue structure for a refreshing summer dessert.',
      DE: 'Ein tropischer Genuss aus rechtem Mangonektar kombiniert mit eiweißreicher Meringue-Struktur für ein erfrischendes Sommerdessert.',
    },
    price: 3.89,
    image: mangoSunsetImg,
    galleryImages: [mangoSunsetImg, heroImg],
    isFlavour: true,
    proteinGrams: 22,
    caloriesWater: 202,
    preparedVolume: '~400 ml',
    inStock: true,
    ingredients: {
      EN: 'Egg white protein powder, Mango juice extract, Milk protein concentrate, Erythritol, Natural tropical flavorings, Beta-carotene (color), Citrus fiber.',
      DE: 'Eiklarproteinpulver, Mangosaftextrakt, Milchproteinkonzentrat, Erythrit, natürliche tropische Aromen, Beta-Carotin (Farbstoff), Citrusfaser.',
    },
    allergens: {
      EN: 'Contains Egg and Milk.',
      DE: 'Enthält Ei und Milch.',
    },
    nutrition: {
      per100g: { energyKcal: 380, fat: 1.8, saturates: 0.6, carbs: 15.2, sugars: 5.8, protein: 75.0, salt: 0.7 },
      per50gWithWater: { energyKcal: 202, fat: 0.9, saturates: 0.3, carbs: 7.6, sugars: 2.9, protein: 22.5, salt: 0.35 },
      per50gWithProteinMilk: { energyKcal: 283, fat: 2.0, saturates: 0.9, carbs: 16.2, sugars: 11.3, protein: 37.9, salt: 0.65 },
    },
    prepSteps: [
      { title: { EN: '1. Fill', DE: '1. Einfüllen' }, desc: { EN: 'Add 150ml cold water.', DE: '150ml kaltes Wasser zugeben.' } },
      { title: { EN: '2. Whip', DE: '2. Aufschlagen' }, desc: { EN: 'Whip for 2 min into a glossy orange mousse.', DE: '2 Minuten zu einer glänzenden Mousse aufschlagen.' } },
      { title: { EN: '3. Freeze', DE: '3. Einfrieren' }, desc: { EN: 'Pour into popsicle molds or gelato tub.', DE: 'In Popsicle-Förmchen oder Eisbehälter füllen.' } },
      { title: { EN: '4. Enjoy', DE: '4. Genießen' }, desc: { EN: 'Pair with passionfruit seeds.', DE: 'Mit Passionsfrucht garnieren.' } },
    ]
  },
  {
    id: 'pistachio-glow',
    name: 'Pistachio Glow',
    category: 'flavour',
    tagline: {
      EN: 'Nutty Bronte pistachio sophistication with velvety finish.',
      DE: 'Nussiges Bronte-Pistazienaroma mit samtigem Abgang.',
    },
    description: {
      EN: 'Delicate roasted green pistachio notes crafted into an aerated protein dessert base that holds air without losing its nutty creaminess.',
      DE: 'Fein geröstete grüne Pistaziennoten in einer luftigen Protein-Basis, die ihr Aroma ohne schwere Fette entfaltet.',
    },
    price: 3.89,
    image: pistachioGlowImg,
    galleryImages: [pistachioGlowImg, heroImg],
    isFlavour: true,
    proteinGrams: 23,
    caloriesWater: 210,
    preparedVolume: '~400 ml',
    inStock: true,
    ingredients: {
      EN: 'Egg white protein powder, Milk protein concentrate, Finely ground Bronte pistachios (4%), Erythritol, Natural pistachio flavor, Chlorophyll extract (color), Sea salt.',
      DE: 'Eiklarproteinpulver, Milchproteinkonzentrat, fein gemahlene Bronte-Pistazien (4%), Erythrit, natürliches Pistazienaroma, Chlorophyll-Extrakt, Meersalz.',
    },
    allergens: {
      EN: 'Contains Egg, Milk, and Pistachio nuts.',
      DE: 'Enthält Ei, Milch und Pistazien.',
    },
    nutrition: {
      per100g: { energyKcal: 390, fat: 4.5, saturates: 1.2, carbs: 11.8, sugars: 3.2, protein: 76.0, salt: 0.8 },
      per50gWithWater: { energyKcal: 210, fat: 2.2, saturates: 0.6, carbs: 5.9, sugars: 1.6, protein: 23.0, salt: 0.4 },
      per50gWithProteinMilk: { energyKcal: 291, fat: 3.3, saturates: 1.2, carbs: 14.5, sugars: 10.0, protein: 38.4, salt: 0.7 },
    },
    prepSteps: [
      { title: { EN: '1. Fill', DE: '1. Einfüllen' }, desc: { EN: 'Add 150ml milk or water.', DE: '150ml Milch oder Wasser zugeben.' } },
      { title: { EN: '2. Whip', DE: '2. Aufschlagen' }, desc: { EN: 'Whip for 2 min to build lofty cloud peaks.', DE: '2 Minuten aufschlagen für maximale Luftigkeit.' } },
      { title: { EN: '3. Freeze', DE: '3. Einfrieren' }, desc: { EN: 'Freeze 3h for authentic Italian pistachio gelato.', DE: '3 Std. für italienisches Pistazieneis einfrieren.' } },
      { title: { EN: '4. Enjoy', DE: '4. Genießen' }, desc: { EN: 'Garnish with roasted chopped pistachios.', DE: 'Mit gehackten Pistazien garnieren.' } },
    ]
  },
  {
    id: 'raspberry-velvet',
    name: 'Raspberry Velvet',
    category: 'flavour',
    tagline: {
      EN: 'Lively wild raspberry tartness balanced with velvety egg-white cloud.',
      DE: 'Spritzige Waldhimbeere ausbalanciert mit samtigem Eiklar-Schaum.',
    },
    description: {
      EN: 'Tangy and aromatic red raspberry flavor infused with light egg-white foam for a guilt-free gourmet sorbet cream experience.',
      DE: 'Fruchtig-aromatische Himbeere infused mit leichtem Eiklarschaum für ein aromatisches Gourmet-Sorbet-Gefühl.',
    },
    price: 3.89,
    image: raspberryVelvetImg,
    galleryImages: [raspberryVelvetImg, heroImg],
    isFlavour: true,
    proteinGrams: 23,
    caloriesWater: 198,
    preparedVolume: '~400 ml',
    inStock: true,
    ingredients: {
      EN: 'Egg white protein powder, Freeze-dried raspberry powder (6%), Milk protein concentrate, Erythritol, Natural wild berry flavor, Beetroot extract (color), Pectin.',
      DE: 'Eiklarproteinpulver, gefriergetrocknetes Himbeerpulver (6%), Milchproteinkonzentrat, Erythrit, natürliches Beerenaroma, Rote-Bete-Extrakt, Pektin.',
    },
    allergens: {
      EN: 'Contains Egg and Milk.',
      DE: 'Enthält Ei und Milch.',
    },
    nutrition: {
      per100g: { energyKcal: 372, fat: 1.2, saturates: 0.4, carbs: 13.9, sugars: 4.8, protein: 77.1, salt: 0.75 },
      per50gWithWater: { energyKcal: 198, fat: 0.6, saturates: 0.2, carbs: 6.9, sugars: 2.4, protein: 23.2, salt: 0.38 },
      per50gWithProteinMilk: { energyKcal: 279, fat: 1.7, saturates: 0.8, carbs: 15.5, sugars: 10.8, protein: 38.6, salt: 0.68 },
    },
    prepSteps: [
      { title: { EN: '1. Fill', DE: '1. Einfüllen' }, desc: { EN: 'Add 150ml cold water.', DE: '150ml kaltes Wasser zugeben.' } },
      { title: { EN: '2. Whip', DE: '2. Aufschlagen' }, desc: { EN: 'Whip 2 min until silky pink peaks form.', DE: '2 Min. rosa Mousse aufschlagen.' } },
      { title: { EN: '3. Freeze', DE: '3. Einfrieren' }, desc: { EN: 'Freeze 3h or pour into popsicle molds.', DE: '3 Std. einfrieren oder in Förmchen füllen.' } },
      { title: { EN: '4. Enjoy', DE: '4. Genießen' }, desc: { EN: 'Decorate with fresh raspberries.', DE: 'Mit frischen Himbeeren servieren.' } },
    ]
  },
  {
    id: 'launch-box',
    name: 'Launch Box',
    category: 'bundle',
    tagline: {
      EN: 'Meet all five. The definitive tasting experience.',
      DE: 'Lerne alle fünf kennen. Das ultimative Probier-Set.',
    },
    description: {
      EN: 'Contains 1 full-size 50g pouch of all 5 signature flavours (Milky Moon, Choco Dream, Mango Sunset, Pistachio Glow, Raspberry Velvet) packaged in our custom dark luxury matte presentation box.',
      DE: 'Enthält je 1 Pouch (50g) aller 5 Sorten in unserer edlen dunkelbraunen Geschenkschatulle. Perfekt zum Entdecken.',
    },
    price: 19.00,
    image: heroImg,
    galleryImages: [heroImg, completeKitImg],
    inStock: true,
  },
  {
    id: 'monthly-box',
    name: 'Monthly Box / Subscription',
    category: 'subscription',
    tagline: {
      EN: 'Choose 10. Pay for 9. Every month.',
      DE: 'Wähle 10. Bezahle 9. Jeden Monat.',
    },
    description: {
      EN: 'Customize your monthly 10-pouch box with any mix of your favourite flavours. Recurring flexible box with pause, skip, or cancel controls anytime.',
      DE: 'Stelle dir deine monatliche 10er Box individuell zusammen. Jederzeit pausierbar, anpassbar oder kündbar.',
    },
    price: 35.00,
    originalPrice: 38.90,
    image: heroImg,
    galleryImages: [heroImg],
    inStock: true,
  },
  {
    id: 'samazing-scoop',
    name: "S'Amazing Scoop",
    category: 'accessory',
    tagline: {
      EN: 'Heavyweight brushed gold stainless gelato scoop.',
      DE: 'Schwerer gebürsteter Edelstahl-Eislöffel in Gold.',
    },
    description: {
      EN: 'Designed specifically for smooth gelato carving and dessert presentation. Ergonomic brass-gold weight. (Automatically added FREE to first 100 eligible paid orders over €19).',
      DE: 'Speziell geformt für die perfekte Gelato-Kugel. Ergonomischer Goldgriff. (Kostenlos für die ersten 100 Bestellungen ab €19).',
    },
    price: 6.90,
    image: completeKitImg,
    galleryImages: [completeKitImg],
    inStock: true,
  },
  {
    id: 'mixer',
    name: 'S\'Amazing Electric Mixer',
    category: 'accessory',
    tagline: {
      EN: 'High-torque handheld frother & whisk.',
      DE: 'Leistungsstarker Akku-Handaufschäumer.',
    },
    description: {
      EN: 'Optimal 14,000 RPM double-whisk attachment engineered to incorporate maximum air into S\'AMAZING protein powders within 120 seconds.',
      DE: 'Optimale 14.000 U/Min Doppelquirl-Technologie für maximale Aerierung in 120 Sekunden.',
    },
    price: 19.90,
    image: completeKitImg,
    galleryImages: [completeKitImg],
    inStock: true,
  },
  {
    id: 'protein-milk',
    name: 'Protein Milk UHT 1 L',
    category: 'accessory',
    tagline: {
      EN: 'Ultra-filtered high-protein skimmed milk (75g protein/L).',
      DE: 'Ultrafiltrierte Proteinmilch (75g Protein/L).',
    },
    description: {
      EN: 'Optional preparation liquid to double your dessert protein content to 38g+ per serving. Lactose-reduced with ultra-creamy texture.',
      DE: 'Optionale Zubereitungsbasis für doppelte Proteinpower (38g+ pro Portion). Laktosearm und extra cremig.',
    },
    price: 2.99,
    image: completeKitImg,
    galleryImages: [completeKitImg],
    inStock: true,
  },
  {
    id: 'popsicle-maker',
    name: 'Silicone Popsicle Maker Set',
    category: 'accessory',
    tagline: {
      EN: 'Food-grade pastel silicone ice pop moulds with wooden sticks.',
      DE: 'Pastell-Silikon-Eisformen aus lebensmittelechtem Silikon.',
    },
    description: {
      EN: '4-cavity flexible non-stick moulds with wooden sticks for making high-protein popsicles directly from whipped S\'AMAZING base.',
      DE: '4er-Silikonform zur einfachen Herstellung von Protein-Popsicles direkt aus der aufgeschlagenen Creme.',
    },
    price: 9.99,
    image: completeKitImg,
    galleryImages: [completeKitImg],
    inStock: true,
  },
  {
    id: 'complete-kit',
    name: 'S\'Amazing Complete Kit',
    category: 'bundle',
    tagline: {
      EN: '5 flavours + Electric Mixer + Gold Scoop + Popsicle Mould + Protein Milk.',
      DE: '5 Sorten + Handmixer + Gold-Löffel + Eisform + Proteinmilch.',
    },
    description: {
      EN: 'Everything you need for the complete S\'AMAZING experience. Includes the Launch Box (5 pouches), high-torque electric mixer, brushed gold scoop, silicone popsicle maker, and 1 L Protein Milk.',
      DE: 'Das Komplett-Paket für den perfekten Start: Launch Box (5 Sorten), Elektrischer Mixer, Gold-Löffel, Silikon-Eisform und 1L Proteinmilch.',
    },
    price: 52.90,
    originalPrice: 58.78,
    image: completeKitImg,
    galleryImages: [completeKitImg, heroImg],
    inStock: true,
  },
];
