import { Recipe } from '../types';

import milkyMoonImg from '../assets/images/flavour_milky_moon_1791293310602.jpg';
import chocoDreamImg from '../assets/images/flavour_choco_dream_1791293324689.jpg';
import mangoSunsetImg from '../assets/images/flavour_mango_sunset_1791293340114.jpg';
import pistachioGlowImg from '../assets/images/flavour_pistachio_glow_1791293351145.jpg';
import raspberryVelvetImg from '../assets/images/flavour_raspberry_velvet_1791293363922.jpg';

export const RECIPES: Recipe[] = [
  {
    id: 'fior-di-latte-mousse-affogato',
    title: {
      EN: 'Fior di Latte Mousse Affogato',
      DE: 'Fior di Latte Mousse Affogato',
    },
    flavourBase: 'milky-moon',
    prepTime: '5 mins',
    servings: 2,
    image: milkyMoonImg,
    ingredients: [
      { item: { EN: "Milky Moon Base", DE: "Milky Moon Basis" }, grams: '50g' },
      { item: { EN: "Cold Water or Skimmed Milk", DE: "Kaltes Wasser oder Magerpr. Milch" }, grams: '150ml' },
      { item: { EN: "Hot Fresh Espresso", DE: "Heißer frischer Espresso" }, grams: '2 shots (60ml)' },
      { item: { EN: "Dark Chocolate Shavings", DE: "Dunkle Schokoraspeln" }, grams: '5g' },
    ],
    steps: [
      {
        EN: 'Whip Milky Moon powder with cold water/milk using an electric handheld mixer for 2 minutes until voluminous and glossy.',
        DE: 'Milky Moon Pulver mit kaltem Wasser/Milch 2 Minuten mit dem Mixer zu einer fluffigen Schaummasse aufschlagen.',
      },
      {
        EN: 'Spoon the velvety mousse evenly into two chilled glass cups.',
        DE: 'Die Mousse gleichmäßig in zwei vorgekühlte Gläser füllen.',
      },
      {
        EN: 'Slowly pour 1 hot espresso shot down the inner wall of each glass so it pools gently under the mousse.',
        DE: 'Vorsichtig je einen heißen Espresso am inneren Glasrand hinabgießen.',
      },
      {
        EN: 'Garnish with dark chocolate shavings and serve immediately with a dessert spoon.',
        DE: 'Mit Raspelschokolade bestreuen und sofort genießen.',
      },
    ],
    macros: {
      protein: '24.5g',
      calories: '112 kcal',
      carbs: '7g',
      fat: '1.2g',
    },
    reelUrl: 'https://instagram.com/samazingnutrition',
  },
  {
    id: 'pistachio-ricotta-crunch-parfait',
    title: {
      EN: 'Pistachio Glow & Light Ricotta Parfait',
      DE: 'Pistazien-Ricotta-Crunch Parfait',
    },
    flavourBase: 'pistachio-glow',
    prepTime: '8 mins + 3h freeze',
    servings: 2,
    image: pistachioGlowImg,
    ingredients: [
      { item: { EN: "Pistachio Glow Base", DE: "Pistachio Glow Basis" }, grams: '50g' },
      { item: { EN: "Water or Protein Milk", DE: "Wasser oder Proteinmilch" }, grams: '150ml' },
      { item: { EN: "Whipped Light Ricotta (2% fat)", DE: "Mager-Ricotta aufgeschlagen" }, grams: '60g' },
      { item: { EN: "Chopped Bronte Pistachios", DE: "Gehackte Pistazien" }, grams: '10g' },
    ],
    steps: [
      {
        EN: 'Whip Pistachio Glow base with cold liquid for 2 minutes to create a lofty green cloud.',
        DE: 'Pistachio Glow mit gekühltem Wasser/Milch 2 Minuten steif aufschlagen.',
      },
      {
        EN: 'Fold in whipped light ricotta gently to create delicate marbled green and white swirls.',
        DE: 'Gefilterten Mager-Ricotta vorsichtig unterheben für eine Marmorstruktur.',
      },
      {
        EN: 'Layer in dessert cups and freeze for 3 hours for authentic Italian pistachio gelato firmness.',
        DE: 'In Dessertgläser füllen und 3 Stunden für cremige Gelato-Festigkeit einfrieren.',
      },
      {
        EN: 'Top with toasted chopped Bronte pistachios before serving.',
        DE: 'Vor dem Servieren mit gerösteten Pistazien bestreuen.',
      },
    ],
    macros: {
      protein: '28.0g',
      calories: '168 kcal',
      carbs: '8g',
      fat: '3.5g',
    },
    reelUrl: 'https://instagram.com/samazingnutrition',
  },
  {
    id: 'mango-passionfruit-protein-popsicles',
    title: {
      EN: 'Mango Sunset Tropical Protein Popsicles',
      DE: 'Mango Sunset Tropen-Popsicles',
    },
    flavourBase: 'mango-sunset',
    prepTime: '5 mins + 4h freeze',
    servings: 4,
    image: mangoSunsetImg,
    ingredients: [
      { item: { EN: "Mango Sunset Base", DE: "Mango Sunset Basis" }, grams: '50g' },
      { item: { EN: "Chilled Water", DE: "Eiskaltes Wasser" }, grams: '160ml' },
      { item: { EN: "Fresh Passionfruit Pulp", DE: "Frisches Passionsfruchtfleisch" }, grams: '30g' },
    ],
    steps: [
      {
        EN: 'Whip Mango Sunset powder with 160ml chilled water for 2 minutes until light and aerated.',
        DE: 'Mango Sunset Pulver mit 160ml eiskaltem Wasser 2 Minuten luftig aufschlagen.',
      },
      {
        EN: 'Spoon a teaspoon of passionfruit pulp into the tip of each silicone popsicle mould.',
        DE: 'Je einen Teelöffel Passionsfruchtfleisch in die Spitzen der Silikon-Formen geben.',
      },
      {
        EN: 'Pour the whipped mango mousse into the moulds, insert wooden sticks, and freeze for 4 hours.',
        DE: 'Die Mango-Mousse einfüllen, Holzstäbchen einsetzen und 4 Stunden einfrieren.',
      },
      {
        EN: 'Unmould directly onto a plate for an ultra-refreshing summer treat.',
        DE: 'Aus der Form lösen und genießen.',
      },
    ],
    macros: {
      protein: '11.8g (per pop)',
      calories: '55 kcal',
      carbs: '4.2g',
      fat: '0.3g',
    },
    reelUrl: 'https://instagram.com/samazingnutrition',
  },
  {
    id: 'choco-hazelnut-mousse-cloud',
    title: {
      EN: 'Choco-Hazelnut Silk Mousse Cloud',
      DE: 'Schoko-Haselnuss-Mousse Cloud',
    },
    flavourBase: 'choco-dream',
    prepTime: '6 mins',
    servings: 2,
    image: chocoDreamImg,
    ingredients: [
      { item: { EN: "Choco Dream Base", DE: "Choco Dream Basis" }, grams: '50g' },
      { item: { EN: "Unsweetened Hazelnut Milk", DE: "Ungesüßte Haselnussmilch" }, grams: '150ml' },
      { item: { EN: "Pure Hazelnut Butter", DE: "Reines Haselnussmus" }, grams: '10g' },
      { item: { EN: "Cacao Nibs", DE: "Kakaonibs" }, grams: '5g' },
    ],
    steps: [
      {
        EN: 'Combine Choco Dream powder with cold hazelnut milk.',
        DE: 'Choco Dream Pulver mit kalter Haselnussmilch mischen.',
      },
      {
        EN: 'Whip high-speed with a handheld mixer for 2.5 minutes until a dense velvety cloud forms.',
        DE: '2,5 Minuten auf höchster Stufe zu einem samtigen Schaum aufschlagen.',
      },
      {
        EN: 'Drizzle hazelnut butter inside glass bowls and spoon in the chocolate mousse.',
        DE: 'Etwas Haselnussmus in Gläser träufeln und die Schokomousse einfüllen.',
      },
      {
        EN: 'Sprinkle with cacao nibs and serve immediately.',
        DE: 'Mit Kakaonibs garnieren und direkt servieren.',
      },
    ],
    macros: {
      protein: '25.2g',
      calories: '154 kcal',
      carbs: '7.8g',
      fat: '4.1g',
    },
    reelUrl: 'https://instagram.com/samazingnutrition',
  },
  {
    id: 'raspberry-velvet-berry-layer-parfait',
    title: {
      EN: 'Raspberry Velvet Berry Layer Parfait',
      DE: 'Raspberry Velvet Schichten-Parfait',
    },
    flavourBase: 'raspberry-velvet',
    prepTime: '6 mins + 2h freeze',
    servings: 2,
    image: raspberryVelvetImg,
    ingredients: [
      { item: { EN: "Raspberry Velvet Base", DE: "Raspberry Velvet Basis" }, grams: '50g' },
      { item: { EN: "Cold Water", DE: "Kaltes Wasser" }, grams: '150ml' },
      { item: { EN: "Fresh Raspberries", DE: "Frische Himbeeren" }, grams: '50g' },
      { item: { EN: "High-Protein Vanilla Quark", DE: "Magerquark mit Vanille" }, grams: '60g' },
    ],
    steps: [
      {
        EN: 'Whip Raspberry Velvet powder with water for 2 minutes to create fluffy pink mousse.',
        DE: 'Raspberry Velvet mit Wasser 2 Minuten zu rosa Mousse aufschlagen.',
      },
      {
        EN: 'Crush fresh raspberries at the bottom of glass cups.',
        DE: 'Frische Himbeeren im Glas leicht zerdrücken.',
      },
      {
        EN: 'Alternate layers of vanilla quark and whipped raspberry mousse.',
        DE: 'Abwechselnd Vanille-Quark und Himbeer-Mousse schichten.',
      },
      {
        EN: 'Chill for 2 hours in the freezer for gelato mousse firmness.',
        DE: '2 Stunden einfrieren für lecker angefrorene Mousse-Textur.',
      },
    ],
    macros: {
      protein: '29.1g',
      calories: '148 kcal',
      carbs: '10.2g',
      fat: '0.8g',
    },
    reelUrl: 'https://instagram.com/samazingnutrition',
  },
];
