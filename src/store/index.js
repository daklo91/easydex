import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonArray: [
      {
        id: 1,
        name: 'bulbasaur',
        types: ['grass', 'poison'],
        weight: 69,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        stats: {
          hp: 45,
          attack: 49,
          defense: 49,
          specialAttack: 65,
          specialDefense: 65,
          speed: 45
        }
      },
      {
        id: 2,
        name: 'ivysaur',
        types: ['grass', 'poison'],
        weight: 130,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        stats: {
          hp: 60,
          attack: 62,
          defense: 63,
          specialAttack: 80,
          specialDefense: 80,
          speed: 60
        }
      },
      {
        id: 3,
        name: 'venusaur',
        types: ['grass', 'poison'],
        weight: 1000,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        stats: {
          hp: 80,
          attack: 82,
          defense: 83,
          specialAttack: 100,
          specialDefense: 100,
          speed: 80
        }
      },
      {
        id: 4,
        name: 'charmander',
        types: ['fire'],
        weight: 85,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        stats: {
          hp: 39,
          attack: 52,
          defense: 43,
          specialAttack: 60,
          specialDefense: 50,
          speed: 65
        }
      },
      {
        id: 5,
        name: 'charmeleon',
        types: ['fire'],
        weight: 190,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        stats: {
          hp: 58,
          attack: 64,
          defense: 58,
          specialAttack: 80,
          specialDefense: 65,
          speed: 80
        }
      },
      {
        id: 6,
        name: 'charizard',
        types: ['fire', 'flying'],
        weight: 905,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        stats: {
          hp: 78,
          attack: 84,
          defense: 78,
          specialAttack: 109,
          specialDefense: 85,
          speed: 100
        }
      },
      {
        id: 7,
        name: 'squirtle',
        types: ['water'],
        weight: 90,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        stats: {
          hp: 44,
          attack: 48,
          defense: 65,
          specialAttack: 50,
          specialDefense: 64,
          speed: 43
        }
      },
      {
        id: 8,
        name: 'wartortle',
        types: ['water'],
        weight: 225,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        stats: {
          hp: 59,
          attack: 63,
          defense: 80,
          specialAttack: 65,
          specialDefense: 80,
          speed: 58
        }
      },
      {
        id: 9,
        name: 'blastoise',
        types: ['water'],
        weight: 855,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        stats: {
          hp: 79,
          attack: 83,
          defense: 100,
          specialAttack: 85,
          specialDefense: 105,
          speed: 78
        }
      },
      {
        id: 10,
        name: 'caterpie',
        types: ['bug'],
        weight: 29,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
        stats: {
          hp: 45,
          attack: 30,
          defense: 35,
          specialAttack: 20,
          specialDefense: 20,
          speed: 45
        }
      },
      {
        id: 11,
        name: 'metapod',
        types: ['bug'],
        weight: 99,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
        stats: {
          hp: 50,
          attack: 20,
          defense: 55,
          specialAttack: 25,
          specialDefense: 25,
          speed: 30
        }
      },
      {
        id: 12,
        name: 'butterfree',
        types: ['bug', 'flying'],
        weight: 320,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
        stats: {
          hp: 60,
          attack: 45,
          defense: 50,
          specialAttack: 90,
          specialDefense: 80,
          speed: 70
        }
      },
      {
        id: 13,
        name: 'weedle',
        types: ['bug', 'poison'],
        weight: 32,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
        stats: {
          hp: 40,
          attack: 35,
          defense: 30,
          specialAttack: 20,
          specialDefense: 20,
          speed: 50
        }
      },
      {
        id: 14,
        name: 'kakuna',
        types: ['bug', 'poison'],
        weight: 100,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
        stats: {
          hp: 45,
          attack: 25,
          defense: 50,
          specialAttack: 25,
          specialDefense: 25,
          speed: 35
        }
      },
      {
        id: 15,
        name: 'beedrill',
        types: ['bug', 'poison'],
        weight: 295,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
        stats: {
          hp: 65,
          attack: 90,
          defense: 40,
          specialAttack: 45,
          specialDefense: 80,
          speed: 75
        }
      },
      {
        id: 16,
        name: 'pidgey',
        types: ['normal', 'flying'],
        weight: 18,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 40,
          specialAttack: 35,
          specialDefense: 35,
          speed: 56
        }
      },
      {
        id: 17,
        name: 'pidgeotto',
        types: ['normal', 'flying'],
        weight: 300,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
        stats: {
          hp: 63,
          attack: 60,
          defense: 55,
          specialAttack: 50,
          specialDefense: 50,
          speed: 71
        }
      },
      {
        id: 18,
        name: 'pidgeot',
        types: ['normal', 'flying'],
        weight: 395,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
        stats: {
          hp: 83,
          attack: 80,
          defense: 75,
          specialAttack: 70,
          specialDefense: 70,
          speed: 101
        }
      },
      {
        id: 19,
        name: 'rattata',
        types: ['normal'],
        weight: 35,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
        stats: {
          hp: 30,
          attack: 56,
          defense: 35,
          specialAttack: 25,
          specialDefense: 35,
          speed: 72
        }
      },
      {
        id: 20,
        name: 'raticate',
        types: ['normal'],
        weight: 185,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
        stats: {
          hp: 55,
          attack: 81,
          defense: 60,
          specialAttack: 50,
          specialDefense: 70,
          speed: 97
        }
      },
      {
        id: 21,
        name: 'spearow',
        types: ['normal', 'flying'],
        weight: 20,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
        stats: {
          hp: 40,
          attack: 60,
          defense: 30,
          specialAttack: 31,
          specialDefense: 31,
          speed: 70
        }
      },
      {
        id: 22,
        name: 'fearow',
        types: ['normal', 'flying'],
        weight: 380,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
        stats: {
          hp: 65,
          attack: 90,
          defense: 65,
          specialAttack: 61,
          specialDefense: 61,
          speed: 100
        }
      },
      {
        id: 23,
        name: 'ekans',
        types: ['poison'],
        weight: 69,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
        stats: {
          hp: 35,
          attack: 60,
          defense: 44,
          specialAttack: 40,
          specialDefense: 54,
          speed: 55
        }
      },
      {
        id: 24,
        name: 'arbok',
        types: ['poison'],
        weight: 650,
        height: 35,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
        stats: {
          hp: 60,
          attack: 95,
          defense: 69,
          specialAttack: 65,
          specialDefense: 79,
          speed: 80
        }
      },
      {
        id: 25,
        name: 'pikachu',
        types: ['electric'],
        weight: 60,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        stats: {
          hp: 35,
          attack: 55,
          defense: 40,
          specialAttack: 50,
          specialDefense: 50,
          speed: 90
        }
      },
      {
        id: 26,
        name: 'raichu',
        types: ['electric'],
        weight: 300,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
        stats: {
          hp: 60,
          attack: 90,
          defense: 55,
          specialAttack: 90,
          specialDefense: 80,
          speed: 110
        }
      },
      {
        id: 27,
        name: 'sandshrew',
        types: ['ground'],
        weight: 120,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
        stats: {
          hp: 50,
          attack: 75,
          defense: 85,
          specialAttack: 20,
          specialDefense: 30,
          speed: 40
        }
      },
      {
        id: 28,
        name: 'sandslash',
        types: ['ground'],
        weight: 295,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
        stats: {
          hp: 75,
          attack: 100,
          defense: 110,
          specialAttack: 45,
          specialDefense: 55,
          speed: 65
        }
      },
      {
        id: 29,
        name: 'nidoran-f',
        types: ['poison'],
        weight: 70,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
        stats: {
          hp: 55,
          attack: 47,
          defense: 52,
          specialAttack: 40,
          specialDefense: 40,
          speed: 41
        }
      },
      {
        id: 30,
        name: 'nidorina',
        types: ['poison'],
        weight: 200,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
        stats: {
          hp: 70,
          attack: 62,
          defense: 67,
          specialAttack: 55,
          specialDefense: 55,
          speed: 56
        }
      },
      {
        id: 31,
        name: 'nidoqueen',
        types: ['poison', 'ground'],
        weight: 600,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
        stats: {
          hp: 90,
          attack: 92,
          defense: 87,
          specialAttack: 75,
          specialDefense: 85,
          speed: 76
        }
      },
      {
        id: 32,
        name: 'nidoran-m',
        types: ['poison'],
        weight: 90,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
        stats: {
          hp: 46,
          attack: 57,
          defense: 40,
          specialAttack: 40,
          specialDefense: 40,
          speed: 50
        }
      },
      {
        id: 33,
        name: 'nidorino',
        types: ['poison'],
        weight: 195,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
        stats: {
          hp: 61,
          attack: 72,
          defense: 57,
          specialAttack: 55,
          specialDefense: 55,
          speed: 65
        }
      },
      {
        id: 34,
        name: 'nidoking',
        types: ['poison', 'ground'],
        weight: 620,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
        stats: {
          hp: 81,
          attack: 102,
          defense: 77,
          specialAttack: 85,
          specialDefense: 75,
          speed: 85
        }
      },
      {
        id: 35,
        name: 'clefairy',
        types: ['fairy'],
        weight: 75,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
        stats: {
          hp: 70,
          attack: 45,
          defense: 48,
          specialAttack: 60,
          specialDefense: 65,
          speed: 35
        }
      },
      {
        id: 36,
        name: 'clefable',
        types: ['fairy'],
        weight: 400,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
        stats: {
          hp: 95,
          attack: 70,
          defense: 73,
          specialAttack: 95,
          specialDefense: 90,
          speed: 60
        }
      },
      {
        id: 37,
        name: 'vulpix',
        types: ['fire'],
        weight: 99,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
        stats: {
          hp: 38,
          attack: 41,
          defense: 40,
          specialAttack: 50,
          specialDefense: 65,
          speed: 65
        }
      },
      {
        id: 38,
        name: 'ninetales',
        types: ['fire'],
        weight: 199,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
        stats: {
          hp: 73,
          attack: 76,
          defense: 75,
          specialAttack: 81,
          specialDefense: 100,
          speed: 100
        }
      },
      {
        id: 39,
        name: 'jigglypuff',
        types: ['normal', 'fairy'],
        weight: 55,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
        stats: {
          hp: 115,
          attack: 45,
          defense: 20,
          specialAttack: 45,
          specialDefense: 25,
          speed: 20
        }
      },
      {
        id: 40,
        name: 'wigglytuff',
        types: ['normal', 'fairy'],
        weight: 120,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
        stats: {
          hp: 140,
          attack: 70,
          defense: 45,
          specialAttack: 85,
          specialDefense: 50,
          speed: 45
        }
      },
      {
        id: 41,
        name: 'zubat',
        types: ['poison', 'flying'],
        weight: 75,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 35,
          specialAttack: 30,
          specialDefense: 40,
          speed: 55
        }
      },
      {
        id: 42,
        name: 'golbat',
        types: ['poison', 'flying'],
        weight: 550,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
        stats: {
          hp: 75,
          attack: 80,
          defense: 70,
          specialAttack: 65,
          specialDefense: 75,
          speed: 90
        }
      },
      {
        id: 43,
        name: 'oddish',
        types: ['grass', 'poison'],
        weight: 54,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
        stats: {
          hp: 45,
          attack: 50,
          defense: 55,
          specialAttack: 75,
          specialDefense: 65,
          speed: 30
        }
      },
      {
        id: 44,
        name: 'gloom',
        types: ['grass', 'poison'],
        weight: 86,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
        stats: {
          hp: 60,
          attack: 65,
          defense: 70,
          specialAttack: 85,
          specialDefense: 75,
          speed: 40
        }
      },
      {
        id: 45,
        name: 'vileplume',
        types: ['grass', 'poison'],
        weight: 186,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
        stats: {
          hp: 75,
          attack: 80,
          defense: 85,
          specialAttack: 110,
          specialDefense: 90,
          speed: 50
        }
      },
      {
        id: 46,
        name: 'paras',
        types: ['bug', 'grass'],
        weight: 54,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
        stats: {
          hp: 35,
          attack: 70,
          defense: 55,
          specialAttack: 45,
          specialDefense: 55,
          speed: 25
        }
      },
      {
        id: 47,
        name: 'parasect',
        types: ['bug', 'grass'],
        weight: 295,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
        stats: {
          hp: 60,
          attack: 95,
          defense: 80,
          specialAttack: 60,
          specialDefense: 80,
          speed: 30
        }
      },
      {
        id: 48,
        name: 'venonat',
        types: ['bug', 'poison'],
        weight: 300,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
        stats: {
          hp: 60,
          attack: 55,
          defense: 50,
          specialAttack: 40,
          specialDefense: 55,
          speed: 45
        }
      },
      {
        id: 49,
        name: 'venomoth',
        types: ['bug', 'poison'],
        weight: 125,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
        stats: {
          hp: 70,
          attack: 65,
          defense: 60,
          specialAttack: 90,
          specialDefense: 75,
          speed: 90
        }
      },
      {
        id: 50,
        name: 'diglett',
        types: ['ground'],
        weight: 8,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
        stats: {
          hp: 10,
          attack: 55,
          defense: 25,
          specialAttack: 35,
          specialDefense: 45,
          speed: 95
        }
      },
      {
        id: 51,
        name: 'dugtrio',
        types: ['ground'],
        weight: 333,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
        stats: {
          hp: 35,
          attack: 100,
          defense: 50,
          specialAttack: 50,
          specialDefense: 70,
          speed: 120
        }
      },
      {
        id: 52,
        name: 'meowth',
        types: ['normal'],
        weight: 42,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 35,
          specialAttack: 40,
          specialDefense: 40,
          speed: 90
        }
      },
      {
        id: 53,
        name: 'persian',
        types: ['normal'],
        weight: 320,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
        stats: {
          hp: 65,
          attack: 70,
          defense: 60,
          specialAttack: 65,
          specialDefense: 65,
          speed: 115
        }
      },
      {
        id: 54,
        name: 'psyduck',
        types: ['water'],
        weight: 196,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
        stats: {
          hp: 50,
          attack: 52,
          defense: 48,
          specialAttack: 65,
          specialDefense: 50,
          speed: 55
        }
      },
      {
        id: 55,
        name: 'golduck',
        types: ['water'],
        weight: 766,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
        stats: {
          hp: 80,
          attack: 82,
          defense: 78,
          specialAttack: 95,
          specialDefense: 80,
          speed: 85
        }
      },
      {
        id: 56,
        name: 'mankey',
        types: ['fighting'],
        weight: 280,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
        stats: {
          hp: 40,
          attack: 80,
          defense: 35,
          specialAttack: 35,
          specialDefense: 45,
          speed: 70
        }
      },
      {
        id: 57,
        name: 'primeape',
        types: ['fighting'],
        weight: 320,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
        stats: {
          hp: 65,
          attack: 105,
          defense: 60,
          specialAttack: 60,
          specialDefense: 70,
          speed: 95
        }
      },
      {
        id: 58,
        name: 'growlithe',
        types: ['fire'],
        weight: 190,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
        stats: {
          hp: 55,
          attack: 70,
          defense: 45,
          specialAttack: 70,
          specialDefense: 50,
          speed: 60
        }
      },
      {
        id: 59,
        name: 'arcanine',
        types: ['fire'],
        weight: 1550,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
        stats: {
          hp: 90,
          attack: 110,
          defense: 80,
          specialAttack: 100,
          specialDefense: 80,
          speed: 95
        }
      },
      {
        id: 60,
        name: 'poliwag',
        types: ['water'],
        weight: 124,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
        stats: {
          hp: 40,
          attack: 50,
          defense: 40,
          specialAttack: 40,
          specialDefense: 40,
          speed: 90
        }
      },
      {
        id: 61,
        name: 'poliwhirl',
        types: ['water'],
        weight: 200,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
        stats: {
          hp: 65,
          attack: 65,
          defense: 65,
          specialAttack: 50,
          specialDefense: 50,
          speed: 90
        }
      },
      {
        id: 62,
        name: 'poliwrath',
        types: ['water', 'fighting'],
        weight: 540,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
        stats: {
          hp: 90,
          attack: 95,
          defense: 95,
          specialAttack: 70,
          specialDefense: 90,
          speed: 70
        }
      },
      {
        id: 63,
        name: 'abra',
        types: ['psychic'],
        weight: 195,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
        stats: {
          hp: 25,
          attack: 20,
          defense: 15,
          specialAttack: 105,
          specialDefense: 55,
          speed: 90
        }
      },
      {
        id: 64,
        name: 'kadabra',
        types: ['psychic'],
        weight: 565,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
        stats: {
          hp: 40,
          attack: 35,
          defense: 30,
          specialAttack: 120,
          specialDefense: 70,
          speed: 105
        }
      },
      {
        id: 65,
        name: 'alakazam',
        types: ['psychic'],
        weight: 480,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
        stats: {
          hp: 55,
          attack: 50,
          defense: 45,
          specialAttack: 135,
          specialDefense: 95,
          speed: 120
        }
      },
      {
        id: 66,
        name: 'machop',
        types: ['fighting'],
        weight: 195,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
        stats: {
          hp: 70,
          attack: 80,
          defense: 50,
          specialAttack: 35,
          specialDefense: 35,
          speed: 35
        }
      },
      {
        id: 67,
        name: 'machoke',
        types: ['fighting'],
        weight: 705,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
        stats: {
          hp: 80,
          attack: 100,
          defense: 70,
          specialAttack: 50,
          specialDefense: 60,
          speed: 45
        }
      },
      {
        id: 68,
        name: 'machamp',
        types: ['fighting'],
        weight: 1300,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
        stats: {
          hp: 90,
          attack: 130,
          defense: 80,
          specialAttack: 65,
          specialDefense: 85,
          speed: 55
        }
      },
      {
        id: 69,
        name: 'bellsprout',
        types: ['grass', 'poison'],
        weight: 40,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
        stats: {
          hp: 50,
          attack: 75,
          defense: 35,
          specialAttack: 70,
          specialDefense: 30,
          speed: 40
        }
      },
      {
        id: 70,
        name: 'weepinbell',
        types: ['grass', 'poison'],
        weight: 64,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
        stats: {
          hp: 65,
          attack: 90,
          defense: 50,
          specialAttack: 85,
          specialDefense: 45,
          speed: 55
        }
      },
      {
        id: 71,
        name: 'victreebel',
        types: ['grass', 'poison'],
        weight: 155,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
        stats: {
          hp: 80,
          attack: 105,
          defense: 65,
          specialAttack: 100,
          specialDefense: 70,
          speed: 70
        }
      },
      {
        id: 72,
        name: 'tentacool',
        types: ['water', 'poison'],
        weight: 455,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
        stats: {
          hp: 40,
          attack: 40,
          defense: 35,
          specialAttack: 50,
          specialDefense: 100,
          speed: 70
        }
      },
      {
        id: 73,
        name: 'tentacruel',
        types: ['water', 'poison'],
        weight: 550,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
        stats: {
          hp: 80,
          attack: 70,
          defense: 65,
          specialAttack: 80,
          specialDefense: 120,
          speed: 100
        }
      },
      {
        id: 74,
        name: 'geodude',
        types: ['rock', 'ground'],
        weight: 200,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
        stats: {
          hp: 40,
          attack: 80,
          defense: 100,
          specialAttack: 30,
          specialDefense: 30,
          speed: 20
        }
      },
      {
        id: 75,
        name: 'graveler',
        types: ['rock', 'ground'],
        weight: 1050,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
        stats: {
          hp: 55,
          attack: 95,
          defense: 115,
          specialAttack: 45,
          specialDefense: 45,
          speed: 35
        }
      },
      {
        id: 76,
        name: 'golem',
        types: ['rock', 'ground'],
        weight: 3000,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
        stats: {
          hp: 80,
          attack: 120,
          defense: 130,
          specialAttack: 55,
          specialDefense: 65,
          speed: 45
        }
      },
      {
        id: 77,
        name: 'ponyta',
        types: ['fire'],
        weight: 300,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
        stats: {
          hp: 50,
          attack: 85,
          defense: 55,
          specialAttack: 65,
          specialDefense: 65,
          speed: 90
        }
      },
      {
        id: 78,
        name: 'rapidash',
        types: ['fire'],
        weight: 950,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
        stats: {
          hp: 65,
          attack: 100,
          defense: 70,
          specialAttack: 80,
          specialDefense: 80,
          speed: 105
        }
      },
      {
        id: 79,
        name: 'slowpoke',
        types: ['water', 'psychic'],
        weight: 360,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
        stats: {
          hp: 90,
          attack: 65,
          defense: 65,
          specialAttack: 40,
          specialDefense: 40,
          speed: 15
        }
      },
      {
        id: 80,
        name: 'slowbro',
        types: ['water', 'psychic'],
        weight: 785,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
        stats: {
          hp: 95,
          attack: 75,
          defense: 110,
          specialAttack: 100,
          specialDefense: 80,
          speed: 30
        }
      },
      {
        id: 81,
        name: 'magnemite',
        types: ['electric', 'steel'],
        weight: 60,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
        stats: {
          hp: 25,
          attack: 35,
          defense: 70,
          specialAttack: 95,
          specialDefense: 55,
          speed: 45
        }
      },
      {
        id: 82,
        name: 'magneton',
        types: ['electric', 'steel'],
        weight: 600,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
        stats: {
          hp: 50,
          attack: 60,
          defense: 95,
          specialAttack: 120,
          specialDefense: 70,
          speed: 70
        }
      },
      {
        id: 83,
        name: 'farfetchd',
        types: ['normal', 'flying'],
        weight: 150,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
        stats: {
          hp: 52,
          attack: 90,
          defense: 55,
          specialAttack: 58,
          specialDefense: 62,
          speed: 60
        }
      },
      {
        id: 84,
        name: 'doduo',
        types: ['normal', 'flying'],
        weight: 392,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
        stats: {
          hp: 35,
          attack: 85,
          defense: 45,
          specialAttack: 35,
          specialDefense: 35,
          speed: 75
        }
      },
      {
        id: 85,
        name: 'dodrio',
        types: ['normal', 'flying'],
        weight: 852,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
        stats: {
          hp: 60,
          attack: 110,
          defense: 70,
          specialAttack: 60,
          specialDefense: 60,
          speed: 110
        }
      },
      {
        id: 86,
        name: 'seel',
        types: ['water'],
        weight: 900,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
        stats: {
          hp: 65,
          attack: 45,
          defense: 55,
          specialAttack: 45,
          specialDefense: 70,
          speed: 45
        }
      },
      {
        id: 87,
        name: 'dewgong',
        types: ['water', 'ice'],
        weight: 1200,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
        stats: {
          hp: 90,
          attack: 70,
          defense: 80,
          specialAttack: 70,
          specialDefense: 95,
          speed: 70
        }
      },
      {
        id: 88,
        name: 'grimer',
        types: ['poison'],
        weight: 300,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
        stats: {
          hp: 80,
          attack: 80,
          defense: 50,
          specialAttack: 40,
          specialDefense: 50,
          speed: 25
        }
      },
      {
        id: 89,
        name: 'muk',
        types: ['poison'],
        weight: 300,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
        stats: {
          hp: 105,
          attack: 105,
          defense: 75,
          specialAttack: 65,
          specialDefense: 100,
          speed: 50
        }
      },
      {
        id: 90,
        name: 'shellder',
        types: ['water'],
        weight: 40,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
        stats: {
          hp: 30,
          attack: 65,
          defense: 100,
          specialAttack: 45,
          specialDefense: 25,
          speed: 40
        }
      },
      {
        id: 91,
        name: 'cloyster',
        types: ['water', 'ice'],
        weight: 1325,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
        stats: {
          hp: 50,
          attack: 95,
          defense: 180,
          specialAttack: 85,
          specialDefense: 45,
          speed: 70
        }
      },
      {
        id: 92,
        name: 'gastly',
        types: ['ghost', 'poison'],
        weight: 1,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
        stats: {
          hp: 30,
          attack: 35,
          defense: 30,
          specialAttack: 100,
          specialDefense: 35,
          speed: 80
        }
      },
      {
        id: 93,
        name: 'haunter',
        types: ['ghost', 'poison'],
        weight: 1,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
        stats: {
          hp: 45,
          attack: 50,
          defense: 45,
          specialAttack: 115,
          specialDefense: 55,
          speed: 95
        }
      },
      {
        id: 94,
        name: 'gengar',
        types: ['ghost', 'poison'],
        weight: 405,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
        stats: {
          hp: 60,
          attack: 65,
          defense: 60,
          specialAttack: 130,
          specialDefense: 75,
          speed: 110
        }
      },
      {
        id: 95,
        name: 'onix',
        types: ['rock', 'ground'],
        weight: 2100,
        height: 88,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
        stats: {
          hp: 35,
          attack: 45,
          defense: 160,
          specialAttack: 30,
          specialDefense: 45,
          speed: 70
        }
      },
      {
        id: 96,
        name: 'drowzee',
        types: ['psychic'],
        weight: 324,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
        stats: {
          hp: 60,
          attack: 48,
          defense: 45,
          specialAttack: 43,
          specialDefense: 90,
          speed: 42
        }
      },
      {
        id: 97,
        name: 'hypno',
        types: ['psychic'],
        weight: 756,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
        stats: {
          hp: 85,
          attack: 73,
          defense: 70,
          specialAttack: 73,
          specialDefense: 115,
          speed: 67
        }
      },
      {
        id: 98,
        name: 'krabby',
        types: ['water'],
        weight: 65,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
        stats: {
          hp: 30,
          attack: 105,
          defense: 90,
          specialAttack: 25,
          specialDefense: 25,
          speed: 50
        }
      },
      {
        id: 99,
        name: 'kingler',
        types: ['water'],
        weight: 600,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
        stats: {
          hp: 55,
          attack: 130,
          defense: 115,
          specialAttack: 50,
          specialDefense: 50,
          speed: 75
        }
      },
      {
        id: 100,
        name: 'voltorb',
        types: ['electric'],
        weight: 104,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
        stats: {
          hp: 40,
          attack: 30,
          defense: 50,
          specialAttack: 55,
          specialDefense: 55,
          speed: 100
        }
      },
      {
        id: 101,
        name: 'electrode',
        types: ['electric'],
        weight: 666,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 70,
          specialAttack: 80,
          specialDefense: 80,
          speed: 150
        }
      },
      {
        id: 102,
        name: 'exeggcute',
        types: ['grass', 'psychic'],
        weight: 25,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
        stats: {
          hp: 60,
          attack: 40,
          defense: 80,
          specialAttack: 60,
          specialDefense: 45,
          speed: 40
        }
      },
      {
        id: 103,
        name: 'exeggutor',
        types: ['grass', 'psychic'],
        weight: 1200,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
        stats: {
          hp: 95,
          attack: 95,
          defense: 85,
          specialAttack: 125,
          specialDefense: 75,
          speed: 55
        }
      },
      {
        id: 104,
        name: 'cubone',
        types: ['ground'],
        weight: 65,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
        stats: {
          hp: 50,
          attack: 50,
          defense: 95,
          specialAttack: 40,
          specialDefense: 50,
          speed: 35
        }
      },
      {
        id: 105,
        name: 'marowak',
        types: ['ground'],
        weight: 450,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
        stats: {
          hp: 60,
          attack: 80,
          defense: 110,
          specialAttack: 50,
          specialDefense: 80,
          speed: 45
        }
      },
      {
        id: 106,
        name: 'hitmonlee',
        types: ['fighting'],
        weight: 498,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
        stats: {
          hp: 50,
          attack: 120,
          defense: 53,
          specialAttack: 35,
          specialDefense: 110,
          speed: 87
        }
      },
      {
        id: 107,
        name: 'hitmonchan',
        types: ['fighting'],
        weight: 502,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
        stats: {
          hp: 50,
          attack: 105,
          defense: 79,
          specialAttack: 35,
          specialDefense: 110,
          speed: 76
        }
      },
      {
        id: 108,
        name: 'lickitung',
        types: ['normal'],
        weight: 655,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
        stats: {
          hp: 90,
          attack: 55,
          defense: 75,
          specialAttack: 60,
          specialDefense: 75,
          speed: 30
        }
      },
      {
        id: 109,
        name: 'koffing',
        types: ['poison'],
        weight: 10,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
        stats: {
          hp: 40,
          attack: 65,
          defense: 95,
          specialAttack: 60,
          specialDefense: 45,
          speed: 35
        }
      },
      {
        id: 110,
        name: 'weezing',
        types: ['poison'],
        weight: 95,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
        stats: {
          hp: 65,
          attack: 90,
          defense: 120,
          specialAttack: 85,
          specialDefense: 70,
          speed: 60
        }
      },
      {
        id: 111,
        name: 'rhyhorn',
        types: ['ground', 'rock'],
        weight: 1150,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
        stats: {
          hp: 80,
          attack: 85,
          defense: 95,
          specialAttack: 30,
          specialDefense: 30,
          speed: 25
        }
      },
      {
        id: 112,
        name: 'rhydon',
        types: ['ground', 'rock'],
        weight: 1200,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
        stats: {
          hp: 105,
          attack: 130,
          defense: 120,
          specialAttack: 45,
          specialDefense: 45,
          speed: 40
        }
      },
      {
        id: 113,
        name: 'chansey',
        types: ['normal'],
        weight: 346,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
        stats: {
          hp: 250,
          attack: 5,
          defense: 5,
          specialAttack: 35,
          specialDefense: 105,
          speed: 50
        }
      },
      {
        id: 114,
        name: 'tangela',
        types: ['grass'],
        weight: 350,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
        stats: {
          hp: 65,
          attack: 55,
          defense: 115,
          specialAttack: 100,
          specialDefense: 40,
          speed: 60
        }
      },
      {
        id: 115,
        name: 'kangaskhan',
        types: ['normal'],
        weight: 800,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
        stats: {
          hp: 105,
          attack: 95,
          defense: 80,
          specialAttack: 40,
          specialDefense: 80,
          speed: 90
        }
      },
      {
        id: 116,
        name: 'horsea',
        types: ['water'],
        weight: 80,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
        stats: {
          hp: 30,
          attack: 40,
          defense: 70,
          specialAttack: 70,
          specialDefense: 25,
          speed: 60
        }
      },
      {
        id: 117,
        name: 'seadra',
        types: ['water'],
        weight: 250,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
        stats: {
          hp: 55,
          attack: 65,
          defense: 95,
          specialAttack: 95,
          specialDefense: 45,
          speed: 85
        }
      },
      {
        id: 118,
        name: 'goldeen',
        types: ['water'],
        weight: 150,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
        stats: {
          hp: 45,
          attack: 67,
          defense: 60,
          specialAttack: 35,
          specialDefense: 50,
          speed: 63
        }
      },
      {
        id: 119,
        name: 'seaking',
        types: ['water'],
        weight: 390,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
        stats: {
          hp: 80,
          attack: 92,
          defense: 65,
          specialAttack: 65,
          specialDefense: 80,
          speed: 68
        }
      },
      {
        id: 120,
        name: 'staryu',
        types: ['water'],
        weight: 345,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
        stats: {
          hp: 30,
          attack: 45,
          defense: 55,
          specialAttack: 70,
          specialDefense: 55,
          speed: 85
        }
      },
      {
        id: 121,
        name: 'starmie',
        types: ['water', 'psychic'],
        weight: 800,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
        stats: {
          hp: 60,
          attack: 75,
          defense: 85,
          specialAttack: 100,
          specialDefense: 85,
          speed: 115
        }
      },
      {
        id: 122,
        name: 'mr-mime',
        types: ['psychic', 'fairy'],
        weight: 545,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 65,
          specialAttack: 100,
          specialDefense: 120,
          speed: 90
        }
      },
      {
        id: 123,
        name: 'scyther',
        types: ['bug', 'flying'],
        weight: 560,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
        stats: {
          hp: 70,
          attack: 110,
          defense: 80,
          specialAttack: 55,
          specialDefense: 80,
          speed: 105
        }
      },
      {
        id: 124,
        name: 'jynx',
        types: ['ice', 'psychic'],
        weight: 406,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
        stats: {
          hp: 65,
          attack: 50,
          defense: 35,
          specialAttack: 115,
          specialDefense: 95,
          speed: 95
        }
      },
      {
        id: 125,
        name: 'electabuzz',
        types: ['electric'],
        weight: 300,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
        stats: {
          hp: 65,
          attack: 83,
          defense: 57,
          specialAttack: 95,
          specialDefense: 85,
          speed: 105
        }
      },
      {
        id: 126,
        name: 'magmar',
        types: ['fire'],
        weight: 445,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
        stats: {
          hp: 65,
          attack: 95,
          defense: 57,
          specialAttack: 100,
          specialDefense: 85,
          speed: 93
        }
      },
      {
        id: 127,
        name: 'pinsir',
        types: ['bug'],
        weight: 550,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
        stats: {
          hp: 65,
          attack: 125,
          defense: 100,
          specialAttack: 55,
          specialDefense: 70,
          speed: 85
        }
      },
      {
        id: 128,
        name: 'tauros',
        types: ['normal'],
        weight: 884,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
        stats: {
          hp: 75,
          attack: 100,
          defense: 95,
          specialAttack: 40,
          specialDefense: 70,
          speed: 110
        }
      },
      {
        id: 129,
        name: 'magikarp',
        types: ['water'],
        weight: 100,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
        stats: {
          hp: 20,
          attack: 10,
          defense: 55,
          specialAttack: 15,
          specialDefense: 20,
          speed: 80
        }
      },
      {
        id: 130,
        name: 'gyarados',
        types: ['water', 'flying'],
        weight: 2350,
        height: 65,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
        stats: {
          hp: 95,
          attack: 125,
          defense: 79,
          specialAttack: 60,
          specialDefense: 100,
          speed: 81
        }
      },
      {
        id: 131,
        name: 'lapras',
        types: ['water', 'ice'],
        weight: 2200,
        height: 25,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
        stats: {
          hp: 130,
          attack: 85,
          defense: 80,
          specialAttack: 85,
          specialDefense: 95,
          speed: 60
        }
      },
      {
        id: 132,
        name: 'ditto',
        types: ['normal'],
        weight: 40,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        stats: {
          hp: 48,
          attack: 48,
          defense: 48,
          specialAttack: 48,
          specialDefense: 48,
          speed: 48
        }
      },
      {
        id: 133,
        name: 'eevee',
        types: ['normal'],
        weight: 65,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        stats: {
          hp: 55,
          attack: 55,
          defense: 50,
          specialAttack: 45,
          specialDefense: 65,
          speed: 55
        }
      },
      {
        id: 134,
        name: 'vaporeon',
        types: ['water'],
        weight: 290,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
        stats: {
          hp: 130,
          attack: 65,
          defense: 60,
          specialAttack: 110,
          specialDefense: 95,
          speed: 65
        }
      },
      {
        id: 135,
        name: 'jolteon',
        types: ['electric'],
        weight: 245,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
        stats: {
          hp: 65,
          attack: 65,
          defense: 60,
          specialAttack: 110,
          specialDefense: 95,
          speed: 130
        }
      },
      {
        id: 136,
        name: 'flareon',
        types: ['fire'],
        weight: 250,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
        stats: {
          hp: 65,
          attack: 130,
          defense: 60,
          specialAttack: 95,
          specialDefense: 110,
          speed: 65
        }
      },
      {
        id: 137,
        name: 'porygon',
        types: ['normal'],
        weight: 365,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
        stats: {
          hp: 65,
          attack: 60,
          defense: 70,
          specialAttack: 85,
          specialDefense: 75,
          speed: 40
        }
      },
      {
        id: 138,
        name: 'omanyte',
        types: ['rock', 'water'],
        weight: 75,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
        stats: {
          hp: 35,
          attack: 40,
          defense: 100,
          specialAttack: 90,
          specialDefense: 55,
          speed: 35
        }
      },
      {
        id: 139,
        name: 'omastar',
        types: ['rock', 'water'],
        weight: 350,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
        stats: {
          hp: 70,
          attack: 60,
          defense: 125,
          specialAttack: 115,
          specialDefense: 70,
          speed: 55
        }
      },
      {
        id: 140,
        name: 'kabuto',
        types: ['rock', 'water'],
        weight: 115,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
        stats: {
          hp: 30,
          attack: 80,
          defense: 90,
          specialAttack: 55,
          specialDefense: 45,
          speed: 55
        }
      },
      {
        id: 141,
        name: 'kabutops',
        types: ['rock', 'water'],
        weight: 405,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
        stats: {
          hp: 60,
          attack: 115,
          defense: 105,
          specialAttack: 65,
          specialDefense: 70,
          speed: 80
        }
      },
      {
        id: 142,
        name: 'aerodactyl',
        types: ['rock', 'flying'],
        weight: 590,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
        stats: {
          hp: 80,
          attack: 105,
          defense: 65,
          specialAttack: 60,
          specialDefense: 75,
          speed: 130
        }
      },
      {
        id: 143,
        name: 'snorlax',
        types: ['normal'],
        weight: 4600,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
        stats: {
          hp: 160,
          attack: 110,
          defense: 65,
          specialAttack: 65,
          specialDefense: 110,
          speed: 30
        }
      },
      {
        id: 144,
        name: 'articuno',
        types: ['ice', 'flying'],
        weight: 554,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
        stats: {
          hp: 90,
          attack: 85,
          defense: 100,
          specialAttack: 95,
          specialDefense: 125,
          speed: 85
        }
      },
      {
        id: 145,
        name: 'zapdos',
        types: ['electric', 'flying'],
        weight: 526,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
        stats: {
          hp: 90,
          attack: 90,
          defense: 85,
          specialAttack: 125,
          specialDefense: 90,
          speed: 100
        }
      },
      {
        id: 146,
        name: 'moltres',
        types: ['fire', 'flying'],
        weight: 600,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
        stats: {
          hp: 90,
          attack: 100,
          defense: 90,
          specialAttack: 125,
          specialDefense: 85,
          speed: 90
        }
      },
      {
        id: 147,
        name: 'dratini',
        types: ['dragon'],
        weight: 33,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
        stats: {
          hp: 41,
          attack: 64,
          defense: 45,
          specialAttack: 50,
          specialDefense: 50,
          speed: 50
        }
      },
      {
        id: 148,
        name: 'dragonair',
        types: ['dragon'],
        weight: 165,
        height: 40,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
        stats: {
          hp: 61,
          attack: 84,
          defense: 65,
          specialAttack: 70,
          specialDefense: 70,
          speed: 70
        }
      },
      {
        id: 149,
        name: 'dragonite',
        types: ['dragon', 'flying'],
        weight: 2100,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
        stats: {
          hp: 91,
          attack: 134,
          defense: 95,
          specialAttack: 100,
          specialDefense: 100,
          speed: 80
        }
      },
      {
        id: 150,
        name: 'mewtwo',
        types: ['psychic'],
        weight: 1220,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
        stats: {
          hp: 106,
          attack: 110,
          defense: 90,
          specialAttack: 154,
          specialDefense: 90,
          speed: 130
        }
      },
      {
        id: 151,
        name: 'mew',
        types: ['psychic'],
        weight: 40,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          specialAttack: 100,
          specialDefense: 100,
          speed: 100
        }
      },
      {
        id: 152,
        name: 'chikorita',
        types: ['grass'],
        weight: 64,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
        stats: {
          hp: 45,
          attack: 49,
          defense: 65,
          specialAttack: 49,
          specialDefense: 65,
          speed: 45
        }
      },
      {
        id: 153,
        name: 'bayleef',
        types: ['grass'],
        weight: 158,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
        stats: {
          hp: 60,
          attack: 62,
          defense: 80,
          specialAttack: 63,
          specialDefense: 80,
          speed: 60
        }
      },
      {
        id: 154,
        name: 'meganium',
        types: ['grass'],
        weight: 1005,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png',
        stats: {
          hp: 80,
          attack: 82,
          defense: 100,
          specialAttack: 83,
          specialDefense: 100,
          speed: 80
        }
      },
      {
        id: 155,
        name: 'cyndaquil',
        types: ['fire'],
        weight: 79,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
        stats: {
          hp: 39,
          attack: 52,
          defense: 43,
          specialAttack: 60,
          specialDefense: 50,
          speed: 65
        }
      },
      {
        id: 156,
        name: 'quilava',
        types: ['fire'],
        weight: 190,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
        stats: {
          hp: 58,
          attack: 64,
          defense: 58,
          specialAttack: 80,
          specialDefense: 65,
          speed: 80
        }
      },
      {
        id: 157,
        name: 'typhlosion',
        types: ['fire'],
        weight: 795,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
        stats: {
          hp: 78,
          attack: 84,
          defense: 78,
          specialAttack: 109,
          specialDefense: 85,
          speed: 100
        }
      },
      {
        id: 158,
        name: 'totodile',
        types: ['water'],
        weight: 95,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
        stats: {
          hp: 50,
          attack: 65,
          defense: 64,
          specialAttack: 44,
          specialDefense: 48,
          speed: 43
        }
      },
      {
        id: 159,
        name: 'croconaw',
        types: ['water'],
        weight: 250,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png',
        stats: {
          hp: 65,
          attack: 80,
          defense: 80,
          specialAttack: 59,
          specialDefense: 63,
          speed: 58
        }
      },
      {
        id: 160,
        name: 'feraligatr',
        types: ['water'],
        weight: 888,
        height: 23,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
        stats: {
          hp: 85,
          attack: 105,
          defense: 100,
          specialAttack: 79,
          specialDefense: 83,
          speed: 78
        }
      },
      {
        id: 161,
        name: 'sentret',
        types: ['normal'],
        weight: 60,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png',
        stats: {
          hp: 35,
          attack: 46,
          defense: 34,
          specialAttack: 35,
          specialDefense: 45,
          speed: 20
        }
      },
      {
        id: 162,
        name: 'furret',
        types: ['normal'],
        weight: 325,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png',
        stats: {
          hp: 85,
          attack: 76,
          defense: 64,
          specialAttack: 45,
          specialDefense: 55,
          speed: 90
        }
      },
      {
        id: 163,
        name: 'hoothoot',
        types: ['normal', 'flying'],
        weight: 212,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png',
        stats: {
          hp: 60,
          attack: 30,
          defense: 30,
          specialAttack: 36,
          specialDefense: 56,
          speed: 50
        }
      },
      {
        id: 164,
        name: 'noctowl',
        types: ['normal', 'flying'],
        weight: 408,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png',
        stats: {
          hp: 100,
          attack: 50,
          defense: 50,
          specialAttack: 86,
          specialDefense: 96,
          speed: 70
        }
      },
      {
        id: 165,
        name: 'ledyba',
        types: ['bug', 'flying'],
        weight: 108,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png',
        stats: {
          hp: 40,
          attack: 20,
          defense: 30,
          specialAttack: 40,
          specialDefense: 80,
          speed: 55
        }
      },
      {
        id: 166,
        name: 'ledian',
        types: ['bug', 'flying'],
        weight: 356,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png',
        stats: {
          hp: 55,
          attack: 35,
          defense: 50,
          specialAttack: 55,
          specialDefense: 110,
          speed: 85
        }
      },
      {
        id: 167,
        name: 'spinarak',
        types: ['bug', 'poison'],
        weight: 85,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png',
        stats: {
          hp: 40,
          attack: 60,
          defense: 40,
          specialAttack: 40,
          specialDefense: 40,
          speed: 30
        }
      },
      {
        id: 168,
        name: 'ariados',
        types: ['bug', 'poison'],
        weight: 335,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
        stats: {
          hp: 70,
          attack: 90,
          defense: 70,
          specialAttack: 60,
          specialDefense: 70,
          speed: 40
        }
      },
      {
        id: 169,
        name: 'crobat',
        types: ['poison', 'flying'],
        weight: 750,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
        stats: {
          hp: 85,
          attack: 90,
          defense: 80,
          specialAttack: 70,
          specialDefense: 80,
          speed: 130
        }
      },
      {
        id: 170,
        name: 'chinchou',
        types: ['water', 'electric'],
        weight: 120,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
        stats: {
          hp: 75,
          attack: 38,
          defense: 38,
          specialAttack: 56,
          specialDefense: 56,
          speed: 67
        }
      },
      {
        id: 171,
        name: 'lanturn',
        types: ['water', 'electric'],
        weight: 225,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png',
        stats: {
          hp: 125,
          attack: 58,
          defense: 58,
          specialAttack: 76,
          specialDefense: 76,
          speed: 67
        }
      },
      {
        id: 172,
        name: 'pichu',
        types: ['electric'],
        weight: 20,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
        stats: {
          hp: 20,
          attack: 40,
          defense: 15,
          specialAttack: 35,
          specialDefense: 35,
          speed: 60
        }
      },
      {
        id: 173,
        name: 'cleffa',
        types: ['fairy'],
        weight: 30,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png',
        stats: {
          hp: 50,
          attack: 25,
          defense: 28,
          specialAttack: 45,
          specialDefense: 55,
          speed: 15
        }
      },
      {
        id: 174,
        name: 'igglybuff',
        types: ['normal', 'fairy'],
        weight: 10,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
        stats: {
          hp: 90,
          attack: 30,
          defense: 15,
          specialAttack: 40,
          specialDefense: 20,
          speed: 15
        }
      },
      {
        id: 175,
        name: 'togepi',
        types: ['fairy'],
        weight: 15,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png',
        stats: {
          hp: 35,
          attack: 20,
          defense: 65,
          specialAttack: 40,
          specialDefense: 65,
          speed: 20
        }
      },
      {
        id: 176,
        name: 'togetic',
        types: ['fairy', 'flying'],
        weight: 32,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png',
        stats: {
          hp: 55,
          attack: 40,
          defense: 85,
          specialAttack: 80,
          specialDefense: 105,
          speed: 40
        }
      },
      {
        id: 177,
        name: 'natu',
        types: ['psychic', 'flying'],
        weight: 20,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png',
        stats: {
          hp: 40,
          attack: 50,
          defense: 45,
          specialAttack: 70,
          specialDefense: 45,
          speed: 70
        }
      },
      {
        id: 178,
        name: 'xatu',
        types: ['psychic', 'flying'],
        weight: 150,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png',
        stats: {
          hp: 65,
          attack: 75,
          defense: 70,
          specialAttack: 95,
          specialDefense: 70,
          speed: 95
        }
      },
      {
        id: 179,
        name: 'mareep',
        types: ['electric'],
        weight: 78,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png',
        stats: {
          hp: 55,
          attack: 40,
          defense: 40,
          specialAttack: 65,
          specialDefense: 45,
          speed: 35
        }
      },
      {
        id: 180,
        name: 'flaaffy',
        types: ['electric'],
        weight: 133,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png',
        stats: {
          hp: 70,
          attack: 55,
          defense: 55,
          specialAttack: 80,
          specialDefense: 60,
          speed: 45
        }
      },
      {
        id: 181,
        name: 'ampharos',
        types: ['electric'],
        weight: 615,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
        stats: {
          hp: 90,
          attack: 75,
          defense: 85,
          specialAttack: 115,
          specialDefense: 90,
          speed: 55
        }
      },
      {
        id: 182,
        name: 'bellossom',
        types: ['grass'],
        weight: 58,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png',
        stats: {
          hp: 75,
          attack: 80,
          defense: 95,
          specialAttack: 90,
          specialDefense: 100,
          speed: 50
        }
      },
      {
        id: 183,
        name: 'marill',
        types: ['water', 'fairy'],
        weight: 85,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png',
        stats: {
          hp: 70,
          attack: 20,
          defense: 50,
          specialAttack: 20,
          specialDefense: 50,
          speed: 40
        }
      },
      {
        id: 184,
        name: 'azumarill',
        types: ['water', 'fairy'],
        weight: 285,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png',
        stats: {
          hp: 100,
          attack: 50,
          defense: 80,
          specialAttack: 60,
          specialDefense: 80,
          speed: 50
        }
      },
      {
        id: 185,
        name: 'sudowoodo',
        types: ['rock'],
        weight: 380,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png',
        stats: {
          hp: 70,
          attack: 100,
          defense: 115,
          specialAttack: 30,
          specialDefense: 65,
          speed: 30
        }
      },
      {
        id: 186,
        name: 'politoed',
        types: ['water'],
        weight: 339,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png',
        stats: {
          hp: 90,
          attack: 75,
          defense: 75,
          specialAttack: 90,
          specialDefense: 100,
          speed: 70
        }
      },
      {
        id: 187,
        name: 'hoppip',
        types: ['grass', 'flying'],
        weight: 5,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png',
        stats: {
          hp: 35,
          attack: 35,
          defense: 40,
          specialAttack: 35,
          specialDefense: 55,
          speed: 50
        }
      },
      {
        id: 188,
        name: 'skiploom',
        types: ['grass', 'flying'],
        weight: 10,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png',
        stats: {
          hp: 55,
          attack: 45,
          defense: 50,
          specialAttack: 45,
          specialDefense: 65,
          speed: 80
        }
      },
      {
        id: 189,
        name: 'jumpluff',
        types: ['grass', 'flying'],
        weight: 30,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png',
        stats: {
          hp: 75,
          attack: 55,
          defense: 70,
          specialAttack: 55,
          specialDefense: 95,
          speed: 110
        }
      },
      {
        id: 190,
        name: 'aipom',
        types: ['normal'],
        weight: 115,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
        stats: {
          hp: 55,
          attack: 70,
          defense: 55,
          specialAttack: 40,
          specialDefense: 55,
          speed: 85
        }
      },
      {
        id: 191,
        name: 'sunkern',
        types: ['grass'],
        weight: 18,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png',
        stats: {
          hp: 30,
          attack: 30,
          defense: 30,
          specialAttack: 30,
          specialDefense: 30,
          speed: 30
        }
      },
      {
        id: 192,
        name: 'sunflora',
        types: ['grass'],
        weight: 85,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png',
        stats: {
          hp: 75,
          attack: 75,
          defense: 55,
          specialAttack: 105,
          specialDefense: 85,
          speed: 30
        }
      },
      {
        id: 193,
        name: 'yanma',
        types: ['bug', 'flying'],
        weight: 380,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png',
        stats: {
          hp: 65,
          attack: 65,
          defense: 45,
          specialAttack: 75,
          specialDefense: 45,
          speed: 95
        }
      },
      {
        id: 194,
        name: 'wooper',
        types: ['water', 'ground'],
        weight: 85,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
        stats: {
          hp: 55,
          attack: 45,
          defense: 45,
          specialAttack: 25,
          specialDefense: 25,
          speed: 15
        }
      },
      {
        id: 195,
        name: 'quagsire',
        types: ['water', 'ground'],
        weight: 750,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png',
        stats: {
          hp: 95,
          attack: 85,
          defense: 85,
          specialAttack: 65,
          specialDefense: 65,
          speed: 35
        }
      },
      {
        id: 196,
        name: 'espeon',
        types: ['psychic'],
        weight: 265,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
        stats: {
          hp: 65,
          attack: 65,
          defense: 60,
          specialAttack: 130,
          specialDefense: 95,
          speed: 110
        }
      },
      {
        id: 197,
        name: 'umbreon',
        types: ['dark'],
        weight: 270,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
        stats: {
          hp: 95,
          attack: 65,
          defense: 110,
          specialAttack: 60,
          specialDefense: 130,
          speed: 65
        }
      },
      {
        id: 198,
        name: 'murkrow',
        types: ['dark', 'flying'],
        weight: 21,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png',
        stats: {
          hp: 60,
          attack: 85,
          defense: 42,
          specialAttack: 85,
          specialDefense: 42,
          speed: 91
        }
      },
      {
        id: 199,
        name: 'slowking',
        types: ['water', 'psychic'],
        weight: 795,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png',
        stats: {
          hp: 95,
          attack: 75,
          defense: 80,
          specialAttack: 100,
          specialDefense: 110,
          speed: 30
        }
      },
      {
        id: 200,
        name: 'misdreavus',
        types: ['ghost'],
        weight: 10,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 60,
          specialAttack: 85,
          specialDefense: 85,
          speed: 85
        }
      },
      {
        id: 201,
        name: 'unown',
        types: ['psychic'],
        weight: 50,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
        stats: {
          hp: 48,
          attack: 72,
          defense: 48,
          specialAttack: 72,
          specialDefense: 48,
          speed: 48
        }
      },
      {
        id: 202,
        name: 'wobbuffet',
        types: ['psychic'],
        weight: 285,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png',
        stats: {
          hp: 190,
          attack: 33,
          defense: 58,
          specialAttack: 33,
          specialDefense: 58,
          speed: 33
        }
      },
      {
        id: 203,
        name: 'girafarig',
        types: ['normal', 'psychic'],
        weight: 415,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png',
        stats: {
          hp: 70,
          attack: 80,
          defense: 65,
          specialAttack: 90,
          specialDefense: 65,
          speed: 85
        }
      },
      {
        id: 204,
        name: 'pineco',
        types: ['bug'],
        weight: 72,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
        stats: {
          hp: 50,
          attack: 65,
          defense: 90,
          specialAttack: 35,
          specialDefense: 35,
          speed: 15
        }
      },
      {
        id: 205,
        name: 'forretress',
        types: ['bug', 'steel'],
        weight: 1258,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
        stats: {
          hp: 75,
          attack: 90,
          defense: 140,
          specialAttack: 60,
          specialDefense: 60,
          speed: 40
        }
      },
      {
        id: 206,
        name: 'dunsparce',
        types: ['normal'],
        weight: 140,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
        stats: {
          hp: 100,
          attack: 70,
          defense: 70,
          specialAttack: 65,
          specialDefense: 65,
          speed: 45
        }
      },
      {
        id: 207,
        name: 'gligar',
        types: ['ground', 'flying'],
        weight: 648,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png',
        stats: {
          hp: 65,
          attack: 75,
          defense: 105,
          specialAttack: 35,
          specialDefense: 65,
          speed: 85
        }
      },
      {
        id: 208,
        name: 'steelix',
        types: ['steel', 'ground'],
        weight: 4000,
        height: 92,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
        stats: {
          hp: 75,
          attack: 85,
          defense: 200,
          specialAttack: 55,
          specialDefense: 65,
          speed: 30
        }
      },
      {
        id: 209,
        name: 'snubbull',
        types: ['fairy'],
        weight: 78,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png',
        stats: {
          hp: 60,
          attack: 80,
          defense: 50,
          specialAttack: 40,
          specialDefense: 40,
          speed: 30
        }
      },
      {
        id: 210,
        name: 'granbull',
        types: ['fairy'],
        weight: 487,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png',
        stats: {
          hp: 90,
          attack: 120,
          defense: 75,
          specialAttack: 60,
          specialDefense: 60,
          speed: 45
        }
      },
      {
        id: 211,
        name: 'qwilfish',
        types: ['water', 'poison'],
        weight: 39,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png',
        stats: {
          hp: 65,
          attack: 95,
          defense: 85,
          specialAttack: 55,
          specialDefense: 55,
          speed: 85
        }
      },
      {
        id: 212,
        name: 'scizor',
        types: ['bug', 'steel'],
        weight: 1180,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
        stats: {
          hp: 70,
          attack: 130,
          defense: 100,
          specialAttack: 55,
          specialDefense: 80,
          speed: 65
        }
      },
      {
        id: 213,
        name: 'shuckle',
        types: ['bug', 'rock'],
        weight: 205,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png',
        stats: {
          hp: 20,
          attack: 10,
          defense: 230,
          specialAttack: 10,
          specialDefense: 230,
          speed: 5
        }
      },
      {
        id: 214,
        name: 'heracross',
        types: ['bug', 'fighting'],
        weight: 540,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
        stats: {
          hp: 80,
          attack: 125,
          defense: 75,
          specialAttack: 40,
          specialDefense: 95,
          speed: 85
        }
      },
      {
        id: 215,
        name: 'sneasel',
        types: ['dark', 'ice'],
        weight: 280,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png',
        stats: {
          hp: 55,
          attack: 95,
          defense: 55,
          specialAttack: 35,
          specialDefense: 75,
          speed: 115
        }
      },
      {
        id: 216,
        name: 'teddiursa',
        types: ['normal'],
        weight: 88,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
        stats: {
          hp: 60,
          attack: 80,
          defense: 50,
          specialAttack: 50,
          specialDefense: 50,
          speed: 40
        }
      },
      {
        id: 217,
        name: 'ursaring',
        types: ['normal'],
        weight: 1258,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
        stats: {
          hp: 90,
          attack: 130,
          defense: 75,
          specialAttack: 75,
          specialDefense: 75,
          speed: 55
        }
      },
      {
        id: 218,
        name: 'slugma',
        types: ['fire'],
        weight: 350,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png',
        stats: {
          hp: 40,
          attack: 40,
          defense: 40,
          specialAttack: 70,
          specialDefense: 40,
          speed: 20
        }
      },
      {
        id: 219,
        name: 'magcargo',
        types: ['fire', 'rock'],
        weight: 550,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 120,
          specialAttack: 90,
          specialDefense: 80,
          speed: 30
        }
      },
      {
        id: 220,
        name: 'swinub',
        types: ['ice', 'ground'],
        weight: 65,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png',
        stats: {
          hp: 50,
          attack: 50,
          defense: 40,
          specialAttack: 30,
          specialDefense: 30,
          speed: 50
        }
      },
      {
        id: 221,
        name: 'piloswine',
        types: ['ice', 'ground'],
        weight: 558,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 80,
          specialAttack: 60,
          specialDefense: 60,
          speed: 50
        }
      },
      {
        id: 222,
        name: 'corsola',
        types: ['water', 'rock'],
        weight: 50,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png',
        stats: {
          hp: 65,
          attack: 55,
          defense: 95,
          specialAttack: 65,
          specialDefense: 95,
          speed: 35
        }
      },
      {
        id: 223,
        name: 'remoraid',
        types: ['water'],
        weight: 120,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
        stats: {
          hp: 35,
          attack: 65,
          defense: 35,
          specialAttack: 65,
          specialDefense: 35,
          speed: 65
        }
      },
      {
        id: 224,
        name: 'octillery',
        types: ['water'],
        weight: 285,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png',
        stats: {
          hp: 75,
          attack: 105,
          defense: 75,
          specialAttack: 105,
          specialDefense: 75,
          speed: 45
        }
      },
      {
        id: 225,
        name: 'delibird',
        types: ['ice', 'flying'],
        weight: 160,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
        stats: {
          hp: 45,
          attack: 55,
          defense: 45,
          specialAttack: 65,
          specialDefense: 45,
          speed: 75
        }
      },
      {
        id: 226,
        name: 'mantine',
        types: ['water', 'flying'],
        weight: 2200,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png',
        stats: {
          hp: 85,
          attack: 40,
          defense: 70,
          specialAttack: 80,
          specialDefense: 140,
          speed: 70
        }
      },
      {
        id: 227,
        name: 'skarmory',
        types: ['steel', 'flying'],
        weight: 505,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
        stats: {
          hp: 65,
          attack: 80,
          defense: 140,
          specialAttack: 40,
          specialDefense: 70,
          speed: 70
        }
      },
      {
        id: 228,
        name: 'houndour',
        types: ['dark', 'fire'],
        weight: 108,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png',
        stats: {
          hp: 45,
          attack: 60,
          defense: 30,
          specialAttack: 80,
          specialDefense: 50,
          speed: 65
        }
      },
      {
        id: 229,
        name: 'houndoom',
        types: ['dark', 'fire'],
        weight: 350,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png',
        stats: {
          hp: 75,
          attack: 90,
          defense: 50,
          specialAttack: 110,
          specialDefense: 80,
          speed: 95
        }
      },
      {
        id: 230,
        name: 'kingdra',
        types: ['water', 'dragon'],
        weight: 1520,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png',
        stats: {
          hp: 75,
          attack: 95,
          defense: 95,
          specialAttack: 95,
          specialDefense: 95,
          speed: 85
        }
      },
      {
        id: 231,
        name: 'phanpy',
        types: ['ground'],
        weight: 335,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png',
        stats: {
          hp: 90,
          attack: 60,
          defense: 60,
          specialAttack: 40,
          specialDefense: 40,
          speed: 40
        }
      },
      {
        id: 232,
        name: 'donphan',
        types: ['ground'],
        weight: 1200,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png',
        stats: {
          hp: 90,
          attack: 120,
          defense: 120,
          specialAttack: 60,
          specialDefense: 60,
          speed: 50
        }
      },
      {
        id: 233,
        name: 'porygon2',
        types: ['normal'],
        weight: 325,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png',
        stats: {
          hp: 85,
          attack: 80,
          defense: 90,
          specialAttack: 105,
          specialDefense: 95,
          speed: 60
        }
      },
      {
        id: 234,
        name: 'stantler',
        types: ['normal'],
        weight: 712,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png',
        stats: {
          hp: 73,
          attack: 95,
          defense: 62,
          specialAttack: 85,
          specialDefense: 65,
          speed: 85
        }
      },
      {
        id: 235,
        name: 'smeargle',
        types: ['normal'],
        weight: 580,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png',
        stats: {
          hp: 55,
          attack: 20,
          defense: 35,
          specialAttack: 20,
          specialDefense: 45,
          speed: 75
        }
      },
      {
        id: 236,
        name: 'tyrogue',
        types: ['fighting'],
        weight: 210,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png',
        stats: {
          hp: 35,
          attack: 35,
          defense: 35,
          specialAttack: 35,
          specialDefense: 35,
          speed: 35
        }
      },
      {
        id: 237,
        name: 'hitmontop',
        types: ['fighting'],
        weight: 480,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png',
        stats: {
          hp: 50,
          attack: 95,
          defense: 95,
          specialAttack: 35,
          specialDefense: 110,
          speed: 70
        }
      },
      {
        id: 238,
        name: 'smoochum',
        types: ['ice', 'psychic'],
        weight: 60,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png',
        stats: {
          hp: 45,
          attack: 30,
          defense: 15,
          specialAttack: 85,
          specialDefense: 65,
          speed: 65
        }
      },
      {
        id: 239,
        name: 'elekid',
        types: ['electric'],
        weight: 235,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png',
        stats: {
          hp: 45,
          attack: 63,
          defense: 37,
          specialAttack: 65,
          specialDefense: 55,
          speed: 95
        }
      },
      {
        id: 240,
        name: 'magby',
        types: ['fire'],
        weight: 214,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png',
        stats: {
          hp: 45,
          attack: 75,
          defense: 37,
          specialAttack: 70,
          specialDefense: 55,
          speed: 83
        }
      },
      {
        id: 241,
        name: 'miltank',
        types: ['normal'],
        weight: 755,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
        stats: {
          hp: 95,
          attack: 80,
          defense: 105,
          specialAttack: 40,
          specialDefense: 70,
          speed: 100
        }
      },
      {
        id: 242,
        name: 'blissey',
        types: ['normal'],
        weight: 468,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png',
        stats: {
          hp: 255,
          attack: 10,
          defense: 10,
          specialAttack: 75,
          specialDefense: 135,
          speed: 55
        }
      },
      {
        id: 243,
        name: 'raikou',
        types: ['electric'],
        weight: 1780,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png',
        stats: {
          hp: 90,
          attack: 85,
          defense: 75,
          specialAttack: 115,
          specialDefense: 100,
          speed: 115
        }
      },
      {
        id: 244,
        name: 'entei',
        types: ['fire'],
        weight: 1980,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
        stats: {
          hp: 115,
          attack: 115,
          defense: 85,
          specialAttack: 90,
          specialDefense: 75,
          speed: 100
        }
      },
      {
        id: 245,
        name: 'suicune',
        types: ['water'],
        weight: 1870,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png',
        stats: {
          hp: 100,
          attack: 75,
          defense: 115,
          specialAttack: 90,
          specialDefense: 115,
          speed: 85
        }
      },
      {
        id: 246,
        name: 'larvitar',
        types: ['rock', 'ground'],
        weight: 720,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png',
        stats: {
          hp: 50,
          attack: 64,
          defense: 50,
          specialAttack: 45,
          specialDefense: 50,
          speed: 41
        }
      },
      {
        id: 247,
        name: 'pupitar',
        types: ['rock', 'ground'],
        weight: 1520,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png',
        stats: {
          hp: 70,
          attack: 84,
          defense: 70,
          specialAttack: 65,
          specialDefense: 70,
          speed: 51
        }
      },
      {
        id: 248,
        name: 'tyranitar',
        types: ['rock', 'dark'],
        weight: 2020,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
        stats: {
          hp: 100,
          attack: 134,
          defense: 110,
          specialAttack: 95,
          specialDefense: 100,
          speed: 61
        }
      },
      {
        id: 249,
        name: 'lugia',
        types: ['psychic', 'flying'],
        weight: 2160,
        height: 52,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
        stats: {
          hp: 106,
          attack: 90,
          defense: 130,
          specialAttack: 90,
          specialDefense: 154,
          speed: 110
        }
      },
      {
        id: 250,
        name: 'ho-oh',
        types: ['fire', 'flying'],
        weight: 1990,
        height: 38,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
        stats: {
          hp: 106,
          attack: 130,
          defense: 90,
          specialAttack: 110,
          specialDefense: 154,
          speed: 90
        }
      },
      {
        id: 251,
        name: 'celebi',
        types: ['psychic', 'grass'],
        weight: 50,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          specialAttack: 100,
          specialDefense: 100,
          speed: 100
        }
      },
      {
        id: 252,
        name: 'treecko',
        types: ['grass'],
        weight: 50,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 35,
          specialAttack: 65,
          specialDefense: 55,
          speed: 70
        }
      },
      {
        id: 253,
        name: 'grovyle',
        types: ['grass'],
        weight: 216,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png',
        stats: {
          hp: 50,
          attack: 65,
          defense: 45,
          specialAttack: 85,
          specialDefense: 65,
          speed: 95
        }
      },
      {
        id: 254,
        name: 'sceptile',
        types: ['grass'],
        weight: 522,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
        stats: {
          hp: 70,
          attack: 85,
          defense: 65,
          specialAttack: 105,
          specialDefense: 85,
          speed: 120
        }
      },
      {
        id: 255,
        name: 'torchic',
        types: ['fire'],
        weight: 25,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
        stats: {
          hp: 45,
          attack: 60,
          defense: 40,
          specialAttack: 70,
          specialDefense: 50,
          speed: 45
        }
      },
      {
        id: 256,
        name: 'combusken',
        types: ['fire', 'fighting'],
        weight: 195,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png',
        stats: {
          hp: 60,
          attack: 85,
          defense: 60,
          specialAttack: 85,
          specialDefense: 60,
          speed: 55
        }
      },
      {
        id: 257,
        name: 'blaziken',
        types: ['fire', 'fighting'],
        weight: 520,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
        stats: {
          hp: 80,
          attack: 120,
          defense: 70,
          specialAttack: 110,
          specialDefense: 70,
          speed: 80
        }
      },
      {
        id: 258,
        name: 'mudkip',
        types: ['water'],
        weight: 76,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
        stats: {
          hp: 50,
          attack: 70,
          defense: 50,
          specialAttack: 50,
          specialDefense: 50,
          speed: 40
        }
      },
      {
        id: 259,
        name: 'marshtomp',
        types: ['water', 'ground'],
        weight: 280,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png',
        stats: {
          hp: 70,
          attack: 85,
          defense: 70,
          specialAttack: 60,
          specialDefense: 70,
          speed: 50
        }
      },
      {
        id: 260,
        name: 'swampert',
        types: ['water', 'ground'],
        weight: 819,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png',
        stats: {
          hp: 100,
          attack: 110,
          defense: 90,
          specialAttack: 85,
          specialDefense: 90,
          speed: 60
        }
      },
      {
        id: 261,
        name: 'poochyena',
        types: ['dark'],
        weight: 136,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png',
        stats: {
          hp: 35,
          attack: 55,
          defense: 35,
          specialAttack: 30,
          specialDefense: 30,
          speed: 35
        }
      },
      {
        id: 262,
        name: 'mightyena',
        types: ['dark'],
        weight: 370,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png',
        stats: {
          hp: 70,
          attack: 90,
          defense: 70,
          specialAttack: 60,
          specialDefense: 60,
          speed: 70
        }
      },
      {
        id: 263,
        name: 'zigzagoon',
        types: ['normal'],
        weight: 175,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png',
        stats: {
          hp: 38,
          attack: 30,
          defense: 41,
          specialAttack: 30,
          specialDefense: 41,
          speed: 60
        }
      },
      {
        id: 264,
        name: 'linoone',
        types: ['normal'],
        weight: 325,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png',
        stats: {
          hp: 78,
          attack: 70,
          defense: 61,
          specialAttack: 50,
          specialDefense: 61,
          speed: 100
        }
      },
      {
        id: 265,
        name: 'wurmple',
        types: ['bug'],
        weight: 36,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png',
        stats: {
          hp: 45,
          attack: 45,
          defense: 35,
          specialAttack: 20,
          specialDefense: 30,
          speed: 20
        }
      },
      {
        id: 266,
        name: 'silcoon',
        types: ['bug'],
        weight: 100,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png',
        stats: {
          hp: 50,
          attack: 35,
          defense: 55,
          specialAttack: 25,
          specialDefense: 25,
          speed: 15
        }
      },
      {
        id: 267,
        name: 'beautifly',
        types: ['bug', 'flying'],
        weight: 284,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png',
        stats: {
          hp: 60,
          attack: 70,
          defense: 50,
          specialAttack: 100,
          specialDefense: 50,
          speed: 65
        }
      },
      {
        id: 268,
        name: 'cascoon',
        types: ['bug'],
        weight: 115,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png',
        stats: {
          hp: 50,
          attack: 35,
          defense: 55,
          specialAttack: 25,
          specialDefense: 25,
          speed: 15
        }
      },
      {
        id: 269,
        name: 'dustox',
        types: ['bug', 'poison'],
        weight: 316,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 70,
          specialAttack: 50,
          specialDefense: 90,
          speed: 65
        }
      },
      {
        id: 270,
        name: 'lotad',
        types: ['water', 'grass'],
        weight: 26,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png',
        stats: {
          hp: 40,
          attack: 30,
          defense: 30,
          specialAttack: 40,
          specialDefense: 50,
          speed: 30
        }
      },
      {
        id: 271,
        name: 'lombre',
        types: ['water', 'grass'],
        weight: 325,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 50,
          specialAttack: 60,
          specialDefense: 70,
          speed: 50
        }
      },
      {
        id: 272,
        name: 'ludicolo',
        types: ['water', 'grass'],
        weight: 550,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png',
        stats: {
          hp: 80,
          attack: 70,
          defense: 70,
          specialAttack: 90,
          specialDefense: 100,
          speed: 70
        }
      },
      {
        id: 273,
        name: 'seedot',
        types: ['grass'],
        weight: 40,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png',
        stats: {
          hp: 40,
          attack: 40,
          defense: 50,
          specialAttack: 30,
          specialDefense: 30,
          speed: 30
        }
      },
      {
        id: 274,
        name: 'nuzleaf',
        types: ['grass', 'dark'],
        weight: 280,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png',
        stats: {
          hp: 70,
          attack: 70,
          defense: 40,
          specialAttack: 60,
          specialDefense: 40,
          speed: 60
        }
      },
      {
        id: 275,
        name: 'shiftry',
        types: ['grass', 'dark'],
        weight: 596,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png',
        stats: {
          hp: 90,
          attack: 100,
          defense: 60,
          specialAttack: 90,
          specialDefense: 60,
          speed: 80
        }
      },
      {
        id: 276,
        name: 'taillow',
        types: ['normal', 'flying'],
        weight: 23,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png',
        stats: {
          hp: 40,
          attack: 55,
          defense: 30,
          specialAttack: 30,
          specialDefense: 30,
          speed: 85
        }
      },
      {
        id: 277,
        name: 'swellow',
        types: ['normal', 'flying'],
        weight: 198,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png',
        stats: {
          hp: 60,
          attack: 85,
          defense: 60,
          specialAttack: 75,
          specialDefense: 50,
          speed: 125
        }
      },
      {
        id: 278,
        name: 'wingull',
        types: ['water', 'flying'],
        weight: 95,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png',
        stats: {
          hp: 40,
          attack: 30,
          defense: 30,
          specialAttack: 55,
          specialDefense: 30,
          speed: 85
        }
      },
      {
        id: 279,
        name: 'pelipper',
        types: ['water', 'flying'],
        weight: 280,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 100,
          specialAttack: 95,
          specialDefense: 70,
          speed: 65
        }
      },
      {
        id: 280,
        name: 'ralts',
        types: ['psychic', 'fairy'],
        weight: 66,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png',
        stats: {
          hp: 28,
          attack: 25,
          defense: 25,
          specialAttack: 45,
          specialDefense: 35,
          speed: 40
        }
      },
      {
        id: 281,
        name: 'kirlia',
        types: ['psychic', 'fairy'],
        weight: 202,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png',
        stats: {
          hp: 38,
          attack: 35,
          defense: 35,
          specialAttack: 65,
          specialDefense: 55,
          speed: 50
        }
      },
      {
        id: 282,
        name: 'gardevoir',
        types: ['psychic', 'fairy'],
        weight: 484,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
        stats: {
          hp: 68,
          attack: 65,
          defense: 65,
          specialAttack: 125,
          specialDefense: 115,
          speed: 80
        }
      },
      {
        id: 283,
        name: 'surskit',
        types: ['bug', 'water'],
        weight: 17,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png',
        stats: {
          hp: 40,
          attack: 30,
          defense: 32,
          specialAttack: 50,
          specialDefense: 52,
          speed: 65
        }
      },
      {
        id: 284,
        name: 'masquerain',
        types: ['bug', 'flying'],
        weight: 36,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png',
        stats: {
          hp: 70,
          attack: 60,
          defense: 62,
          specialAttack: 100,
          specialDefense: 82,
          speed: 80
        }
      },
      {
        id: 285,
        name: 'shroomish',
        types: ['grass'],
        weight: 45,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png',
        stats: {
          hp: 60,
          attack: 40,
          defense: 60,
          specialAttack: 40,
          specialDefense: 60,
          speed: 35
        }
      },
      {
        id: 286,
        name: 'breloom',
        types: ['grass', 'fighting'],
        weight: 392,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
        stats: {
          hp: 60,
          attack: 130,
          defense: 80,
          specialAttack: 60,
          specialDefense: 60,
          speed: 70
        }
      },
      {
        id: 287,
        name: 'slakoth',
        types: ['normal'],
        weight: 240,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 60,
          specialAttack: 35,
          specialDefense: 35,
          speed: 30
        }
      },
      {
        id: 288,
        name: 'vigoroth',
        types: ['normal'],
        weight: 465,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png',
        stats: {
          hp: 80,
          attack: 80,
          defense: 80,
          specialAttack: 55,
          specialDefense: 55,
          speed: 90
        }
      },
      {
        id: 289,
        name: 'slaking',
        types: ['normal'],
        weight: 1305,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png',
        stats: {
          hp: 150,
          attack: 160,
          defense: 100,
          specialAttack: 95,
          specialDefense: 65,
          speed: 100
        }
      },
      {
        id: 290,
        name: 'nincada',
        types: ['bug', 'ground'],
        weight: 55,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png',
        stats: {
          hp: 31,
          attack: 45,
          defense: 90,
          specialAttack: 30,
          specialDefense: 30,
          speed: 40
        }
      },
      {
        id: 291,
        name: 'ninjask',
        types: ['bug', 'flying'],
        weight: 120,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png',
        stats: {
          hp: 61,
          attack: 90,
          defense: 45,
          specialAttack: 50,
          specialDefense: 50,
          speed: 160
        }
      },
      {
        id: 292,
        name: 'shedinja',
        types: ['bug', 'ghost'],
        weight: 12,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png',
        stats: {
          hp: 1,
          attack: 90,
          defense: 45,
          specialAttack: 30,
          specialDefense: 30,
          speed: 40
        }
      },
      {
        id: 293,
        name: 'whismur',
        types: ['normal'],
        weight: 163,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png',
        stats: {
          hp: 64,
          attack: 51,
          defense: 23,
          specialAttack: 51,
          specialDefense: 23,
          speed: 28
        }
      },
      {
        id: 294,
        name: 'loudred',
        types: ['normal'],
        weight: 405,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png',
        stats: {
          hp: 84,
          attack: 71,
          defense: 43,
          specialAttack: 71,
          specialDefense: 43,
          speed: 48
        }
      },
      {
        id: 295,
        name: 'exploud',
        types: ['normal'],
        weight: 840,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png',
        stats: {
          hp: 104,
          attack: 91,
          defense: 63,
          specialAttack: 91,
          specialDefense: 73,
          speed: 68
        }
      },
      {
        id: 296,
        name: 'makuhita',
        types: ['fighting'],
        weight: 864,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png',
        stats: {
          hp: 72,
          attack: 60,
          defense: 30,
          specialAttack: 20,
          specialDefense: 30,
          speed: 25
        }
      },
      {
        id: 297,
        name: 'hariyama',
        types: ['fighting'],
        weight: 2538,
        height: 23,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png',
        stats: {
          hp: 144,
          attack: 120,
          defense: 60,
          specialAttack: 40,
          specialDefense: 60,
          speed: 50
        }
      },
      {
        id: 298,
        name: 'azurill',
        types: ['normal', 'fairy'],
        weight: 20,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png',
        stats: {
          hp: 50,
          attack: 20,
          defense: 40,
          specialAttack: 20,
          specialDefense: 40,
          speed: 20
        }
      },
      {
        id: 299,
        name: 'nosepass',
        types: ['rock'],
        weight: 970,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png',
        stats: {
          hp: 30,
          attack: 45,
          defense: 135,
          specialAttack: 45,
          specialDefense: 90,
          speed: 30
        }
      },
      {
        id: 300,
        name: 'skitty',
        types: ['normal'],
        weight: 110,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png',
        stats: {
          hp: 50,
          attack: 45,
          defense: 45,
          specialAttack: 35,
          specialDefense: 35,
          speed: 50
        }
      },
      {
        id: 301,
        name: 'delcatty',
        types: ['normal'],
        weight: 326,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png',
        stats: {
          hp: 70,
          attack: 65,
          defense: 65,
          specialAttack: 55,
          specialDefense: 55,
          speed: 90
        }
      },
      {
        id: 302,
        name: 'sableye',
        types: ['dark', 'ghost'],
        weight: 110,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png',
        stats: {
          hp: 50,
          attack: 75,
          defense: 75,
          specialAttack: 65,
          specialDefense: 65,
          speed: 50
        }
      },
      {
        id: 303,
        name: 'mawile',
        types: ['steel', 'fairy'],
        weight: 115,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png',
        stats: {
          hp: 50,
          attack: 85,
          defense: 85,
          specialAttack: 55,
          specialDefense: 55,
          speed: 50
        }
      },
      {
        id: 304,
        name: 'aron',
        types: ['steel', 'rock'],
        weight: 600,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png',
        stats: {
          hp: 50,
          attack: 70,
          defense: 100,
          specialAttack: 40,
          specialDefense: 40,
          speed: 30
        }
      },
      {
        id: 305,
        name: 'lairon',
        types: ['steel', 'rock'],
        weight: 1200,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png',
        stats: {
          hp: 60,
          attack: 90,
          defense: 140,
          specialAttack: 50,
          specialDefense: 50,
          speed: 40
        }
      },
      {
        id: 306,
        name: 'aggron',
        types: ['steel', 'rock'],
        weight: 3600,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
        stats: {
          hp: 70,
          attack: 110,
          defense: 180,
          specialAttack: 60,
          specialDefense: 60,
          speed: 50
        }
      },
      {
        id: 307,
        name: 'meditite',
        types: ['fighting', 'psychic'],
        weight: 112,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png',
        stats: {
          hp: 30,
          attack: 40,
          defense: 55,
          specialAttack: 40,
          specialDefense: 55,
          speed: 60
        }
      },
      {
        id: 308,
        name: 'medicham',
        types: ['fighting', 'psychic'],
        weight: 315,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 75,
          specialAttack: 60,
          specialDefense: 75,
          speed: 80
        }
      },
      {
        id: 309,
        name: 'electrike',
        types: ['electric'],
        weight: 152,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 40,
          specialAttack: 65,
          specialDefense: 40,
          speed: 65
        }
      },
      {
        id: 310,
        name: 'manectric',
        types: ['electric'],
        weight: 402,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png',
        stats: {
          hp: 70,
          attack: 75,
          defense: 60,
          specialAttack: 105,
          specialDefense: 60,
          speed: 105
        }
      },
      {
        id: 311,
        name: 'plusle',
        types: ['electric'],
        weight: 42,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 40,
          specialAttack: 85,
          specialDefense: 75,
          speed: 95
        }
      },
      {
        id: 312,
        name: 'minun',
        types: ['electric'],
        weight: 42,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png',
        stats: {
          hp: 60,
          attack: 40,
          defense: 50,
          specialAttack: 75,
          specialDefense: 85,
          speed: 95
        }
      },
      {
        id: 313,
        name: 'volbeat',
        types: ['bug'],
        weight: 177,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png',
        stats: {
          hp: 65,
          attack: 73,
          defense: 75,
          specialAttack: 47,
          specialDefense: 85,
          speed: 85
        }
      },
      {
        id: 314,
        name: 'illumise',
        types: ['bug'],
        weight: 177,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png',
        stats: {
          hp: 65,
          attack: 47,
          defense: 75,
          specialAttack: 73,
          specialDefense: 85,
          speed: 85
        }
      },
      {
        id: 315,
        name: 'roselia',
        types: ['grass', 'poison'],
        weight: 20,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png',
        stats: {
          hp: 50,
          attack: 60,
          defense: 45,
          specialAttack: 100,
          specialDefense: 80,
          speed: 65
        }
      },
      {
        id: 316,
        name: 'gulpin',
        types: ['poison'],
        weight: 103,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png',
        stats: {
          hp: 70,
          attack: 43,
          defense: 53,
          specialAttack: 43,
          specialDefense: 53,
          speed: 40
        }
      },
      {
        id: 317,
        name: 'swalot',
        types: ['poison'],
        weight: 800,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png',
        stats: {
          hp: 100,
          attack: 73,
          defense: 83,
          specialAttack: 73,
          specialDefense: 83,
          speed: 55
        }
      },
      {
        id: 318,
        name: 'carvanha',
        types: ['water', 'dark'],
        weight: 208,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png',
        stats: {
          hp: 45,
          attack: 90,
          defense: 20,
          specialAttack: 65,
          specialDefense: 20,
          speed: 65
        }
      },
      {
        id: 319,
        name: 'sharpedo',
        types: ['water', 'dark'],
        weight: 888,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png',
        stats: {
          hp: 70,
          attack: 120,
          defense: 40,
          specialAttack: 95,
          specialDefense: 40,
          speed: 95
        }
      },
      {
        id: 320,
        name: 'wailmer',
        types: ['water'],
        weight: 1300,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png',
        stats: {
          hp: 130,
          attack: 70,
          defense: 35,
          specialAttack: 70,
          specialDefense: 35,
          speed: 60
        }
      },
      {
        id: 321,
        name: 'wailord',
        types: ['water'],
        weight: 3980,
        height: 145,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png',
        stats: {
          hp: 170,
          attack: 90,
          defense: 45,
          specialAttack: 90,
          specialDefense: 45,
          speed: 60
        }
      },
      {
        id: 322,
        name: 'numel',
        types: ['fire', 'ground'],
        weight: 240,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 40,
          specialAttack: 65,
          specialDefense: 45,
          speed: 35
        }
      },
      {
        id: 323,
        name: 'camerupt',
        types: ['fire', 'ground'],
        weight: 2200,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png',
        stats: {
          hp: 70,
          attack: 100,
          defense: 70,
          specialAttack: 105,
          specialDefense: 75,
          speed: 40
        }
      },
      {
        id: 324,
        name: 'torkoal',
        types: ['fire'],
        weight: 804,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png',
        stats: {
          hp: 70,
          attack: 85,
          defense: 140,
          specialAttack: 85,
          specialDefense: 70,
          speed: 20
        }
      },
      {
        id: 325,
        name: 'spoink',
        types: ['psychic'],
        weight: 306,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png',
        stats: {
          hp: 60,
          attack: 25,
          defense: 35,
          specialAttack: 70,
          specialDefense: 80,
          speed: 60
        }
      },
      {
        id: 326,
        name: 'grumpig',
        types: ['psychic'],
        weight: 715,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png',
        stats: {
          hp: 80,
          attack: 45,
          defense: 65,
          specialAttack: 90,
          specialDefense: 110,
          speed: 80
        }
      },
      {
        id: 327,
        name: 'spinda',
        types: ['normal'],
        weight: 50,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 60,
          specialAttack: 60,
          specialDefense: 60,
          speed: 60
        }
      },
      {
        id: 328,
        name: 'trapinch',
        types: ['ground'],
        weight: 150,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png',
        stats: {
          hp: 45,
          attack: 100,
          defense: 45,
          specialAttack: 45,
          specialDefense: 45,
          speed: 10
        }
      },
      {
        id: 329,
        name: 'vibrava',
        types: ['ground', 'dragon'],
        weight: 153,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png',
        stats: {
          hp: 50,
          attack: 70,
          defense: 50,
          specialAttack: 50,
          specialDefense: 50,
          speed: 70
        }
      },
      {
        id: 330,
        name: 'flygon',
        types: ['ground', 'dragon'],
        weight: 820,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png',
        stats: {
          hp: 80,
          attack: 100,
          defense: 80,
          specialAttack: 80,
          specialDefense: 80,
          speed: 100
        }
      },
      {
        id: 331,
        name: 'cacnea',
        types: ['grass'],
        weight: 513,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png',
        stats: {
          hp: 50,
          attack: 85,
          defense: 40,
          specialAttack: 85,
          specialDefense: 40,
          speed: 35
        }
      },
      {
        id: 332,
        name: 'cacturne',
        types: ['grass', 'dark'],
        weight: 774,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png',
        stats: {
          hp: 70,
          attack: 115,
          defense: 60,
          specialAttack: 115,
          specialDefense: 60,
          speed: 55
        }
      },
      {
        id: 333,
        name: 'swablu',
        types: ['normal', 'flying'],
        weight: 12,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png',
        stats: {
          hp: 45,
          attack: 40,
          defense: 60,
          specialAttack: 40,
          specialDefense: 75,
          speed: 50
        }
      },
      {
        id: 334,
        name: 'altaria',
        types: ['dragon', 'flying'],
        weight: 206,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png',
        stats: {
          hp: 75,
          attack: 70,
          defense: 90,
          specialAttack: 70,
          specialDefense: 105,
          speed: 80
        }
      },
      {
        id: 335,
        name: 'zangoose',
        types: ['normal'],
        weight: 403,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png',
        stats: {
          hp: 73,
          attack: 115,
          defense: 60,
          specialAttack: 60,
          specialDefense: 60,
          speed: 90
        }
      },
      {
        id: 336,
        name: 'seviper',
        types: ['poison'],
        weight: 525,
        height: 27,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png',
        stats: {
          hp: 73,
          attack: 100,
          defense: 60,
          specialAttack: 100,
          specialDefense: 60,
          speed: 65
        }
      },
      {
        id: 337,
        name: 'lunatone',
        types: ['rock', 'psychic'],
        weight: 1680,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png',
        stats: {
          hp: 90,
          attack: 55,
          defense: 65,
          specialAttack: 95,
          specialDefense: 85,
          speed: 70
        }
      },
      {
        id: 338,
        name: 'solrock',
        types: ['rock', 'psychic'],
        weight: 1540,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png',
        stats: {
          hp: 90,
          attack: 95,
          defense: 85,
          specialAttack: 55,
          specialDefense: 65,
          speed: 70
        }
      },
      {
        id: 339,
        name: 'barboach',
        types: ['water', 'ground'],
        weight: 19,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png',
        stats: {
          hp: 50,
          attack: 48,
          defense: 43,
          specialAttack: 46,
          specialDefense: 41,
          speed: 60
        }
      },
      {
        id: 340,
        name: 'whiscash',
        types: ['water', 'ground'],
        weight: 236,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png',
        stats: {
          hp: 110,
          attack: 78,
          defense: 73,
          specialAttack: 76,
          specialDefense: 71,
          speed: 60
        }
      },
      {
        id: 341,
        name: 'corphish',
        types: ['water'],
        weight: 115,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png',
        stats: {
          hp: 43,
          attack: 80,
          defense: 65,
          specialAttack: 50,
          specialDefense: 35,
          speed: 35
        }
      },
      {
        id: 342,
        name: 'crawdaunt',
        types: ['water', 'dark'],
        weight: 328,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png',
        stats: {
          hp: 63,
          attack: 120,
          defense: 85,
          specialAttack: 90,
          specialDefense: 55,
          speed: 55
        }
      },
      {
        id: 343,
        name: 'baltoy',
        types: ['ground', 'psychic'],
        weight: 215,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png',
        stats: {
          hp: 40,
          attack: 40,
          defense: 55,
          specialAttack: 40,
          specialDefense: 70,
          speed: 55
        }
      },
      {
        id: 344,
        name: 'claydol',
        types: ['ground', 'psychic'],
        weight: 1080,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png',
        stats: {
          hp: 60,
          attack: 70,
          defense: 105,
          specialAttack: 70,
          specialDefense: 120,
          speed: 75
        }
      },
      {
        id: 345,
        name: 'lileep',
        types: ['rock', 'grass'],
        weight: 238,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png',
        stats: {
          hp: 66,
          attack: 41,
          defense: 77,
          specialAttack: 61,
          specialDefense: 87,
          speed: 23
        }
      },
      {
        id: 346,
        name: 'cradily',
        types: ['rock', 'grass'],
        weight: 604,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png',
        stats: {
          hp: 86,
          attack: 81,
          defense: 97,
          specialAttack: 81,
          specialDefense: 107,
          speed: 43
        }
      },
      {
        id: 347,
        name: 'anorith',
        types: ['rock', 'bug'],
        weight: 125,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
        stats: {
          hp: 45,
          attack: 95,
          defense: 50,
          specialAttack: 40,
          specialDefense: 50,
          speed: 75
        }
      },
      {
        id: 348,
        name: 'armaldo',
        types: ['rock', 'bug'],
        weight: 682,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png',
        stats: {
          hp: 75,
          attack: 125,
          defense: 100,
          specialAttack: 70,
          specialDefense: 80,
          speed: 45
        }
      },
      {
        id: 349,
        name: 'feebas',
        types: ['water'],
        weight: 74,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png',
        stats: {
          hp: 20,
          attack: 15,
          defense: 20,
          specialAttack: 10,
          specialDefense: 55,
          speed: 80
        }
      },
      {
        id: 350,
        name: 'milotic',
        types: ['water'],
        weight: 1620,
        height: 62,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
        stats: {
          hp: 95,
          attack: 60,
          defense: 79,
          specialAttack: 100,
          specialDefense: 125,
          speed: 81
        }
      },
      {
        id: 351,
        name: 'castform',
        types: ['normal'],
        weight: 8,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png',
        stats: {
          hp: 70,
          attack: 70,
          defense: 70,
          specialAttack: 70,
          specialDefense: 70,
          speed: 70
        }
      },
      {
        id: 352,
        name: 'kecleon',
        types: ['normal'],
        weight: 220,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png',
        stats: {
          hp: 60,
          attack: 90,
          defense: 70,
          specialAttack: 60,
          specialDefense: 120,
          speed: 40
        }
      },
      {
        id: 353,
        name: 'shuppet',
        types: ['ghost'],
        weight: 23,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png',
        stats: {
          hp: 44,
          attack: 75,
          defense: 35,
          specialAttack: 63,
          specialDefense: 33,
          speed: 45
        }
      },
      {
        id: 354,
        name: 'banette',
        types: ['ghost'],
        weight: 125,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png',
        stats: {
          hp: 64,
          attack: 115,
          defense: 65,
          specialAttack: 83,
          specialDefense: 63,
          speed: 65
        }
      },
      {
        id: 355,
        name: 'duskull',
        types: ['ghost'],
        weight: 150,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png',
        stats: {
          hp: 20,
          attack: 40,
          defense: 90,
          specialAttack: 30,
          specialDefense: 90,
          speed: 25
        }
      },
      {
        id: 356,
        name: 'dusclops',
        types: ['ghost'],
        weight: 306,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png',
        stats: {
          hp: 40,
          attack: 70,
          defense: 130,
          specialAttack: 60,
          specialDefense: 130,
          speed: 25
        }
      },
      {
        id: 357,
        name: 'tropius',
        types: ['grass', 'flying'],
        weight: 1000,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png',
        stats: {
          hp: 99,
          attack: 68,
          defense: 83,
          specialAttack: 72,
          specialDefense: 87,
          speed: 51
        }
      },
      {
        id: 358,
        name: 'chimecho',
        types: ['psychic'],
        weight: 10,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png',
        stats: {
          hp: 75,
          attack: 50,
          defense: 80,
          specialAttack: 95,
          specialDefense: 90,
          speed: 65
        }
      },
      {
        id: 359,
        name: 'absol',
        types: ['dark'],
        weight: 470,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png',
        stats: {
          hp: 65,
          attack: 130,
          defense: 60,
          specialAttack: 75,
          specialDefense: 60,
          speed: 75
        }
      },
      {
        id: 360,
        name: 'wynaut',
        types: ['psychic'],
        weight: 140,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png',
        stats: {
          hp: 95,
          attack: 23,
          defense: 48,
          specialAttack: 23,
          specialDefense: 48,
          speed: 23
        }
      },
      {
        id: 361,
        name: 'snorunt',
        types: ['ice'],
        weight: 168,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png',
        stats: {
          hp: 50,
          attack: 50,
          defense: 50,
          specialAttack: 50,
          specialDefense: 50,
          speed: 50
        }
      },
      {
        id: 362,
        name: 'glalie',
        types: ['ice'],
        weight: 2565,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png',
        stats: {
          hp: 80,
          attack: 80,
          defense: 80,
          specialAttack: 80,
          specialDefense: 80,
          speed: 80
        }
      },
      {
        id: 363,
        name: 'spheal',
        types: ['ice', 'water'],
        weight: 395,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png',
        stats: {
          hp: 70,
          attack: 40,
          defense: 50,
          specialAttack: 55,
          specialDefense: 50,
          speed: 25
        }
      },
      {
        id: 364,
        name: 'sealeo',
        types: ['ice', 'water'],
        weight: 876,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png',
        stats: {
          hp: 90,
          attack: 60,
          defense: 70,
          specialAttack: 75,
          specialDefense: 70,
          speed: 45
        }
      },
      {
        id: 365,
        name: 'walrein',
        types: ['ice', 'water'],
        weight: 1506,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png',
        stats: {
          hp: 110,
          attack: 80,
          defense: 90,
          specialAttack: 95,
          specialDefense: 90,
          speed: 65
        }
      },
      {
        id: 366,
        name: 'clamperl',
        types: ['water'],
        weight: 525,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png',
        stats: {
          hp: 35,
          attack: 64,
          defense: 85,
          specialAttack: 74,
          specialDefense: 55,
          speed: 32
        }
      },
      {
        id: 367,
        name: 'huntail',
        types: ['water'],
        weight: 270,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png',
        stats: {
          hp: 55,
          attack: 104,
          defense: 105,
          specialAttack: 94,
          specialDefense: 75,
          speed: 52
        }
      },
      {
        id: 368,
        name: 'gorebyss',
        types: ['water'],
        weight: 226,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png',
        stats: {
          hp: 55,
          attack: 84,
          defense: 105,
          specialAttack: 114,
          specialDefense: 75,
          speed: 52
        }
      },
      {
        id: 369,
        name: 'relicanth',
        types: ['water', 'rock'],
        weight: 234,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png',
        stats: {
          hp: 100,
          attack: 90,
          defense: 130,
          specialAttack: 45,
          specialDefense: 65,
          speed: 55
        }
      },
      {
        id: 370,
        name: 'luvdisc',
        types: ['water'],
        weight: 87,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png',
        stats: {
          hp: 43,
          attack: 30,
          defense: 55,
          specialAttack: 40,
          specialDefense: 65,
          speed: 97
        }
      },
      {
        id: 371,
        name: 'bagon',
        types: ['dragon'],
        weight: 421,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png',
        stats: {
          hp: 45,
          attack: 75,
          defense: 60,
          specialAttack: 40,
          specialDefense: 30,
          speed: 50
        }
      },
      {
        id: 372,
        name: 'shelgon',
        types: ['dragon'],
        weight: 1105,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png',
        stats: {
          hp: 65,
          attack: 95,
          defense: 100,
          specialAttack: 60,
          specialDefense: 50,
          speed: 50
        }
      },
      {
        id: 373,
        name: 'salamence',
        types: ['dragon', 'flying'],
        weight: 1026,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
        stats: {
          hp: 95,
          attack: 135,
          defense: 80,
          specialAttack: 110,
          specialDefense: 80,
          speed: 100
        }
      },
      {
        id: 374,
        name: 'beldum',
        types: ['steel', 'psychic'],
        weight: 952,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png',
        stats: {
          hp: 40,
          attack: 55,
          defense: 80,
          specialAttack: 35,
          specialDefense: 60,
          speed: 30
        }
      },
      {
        id: 375,
        name: 'metang',
        types: ['steel', 'psychic'],
        weight: 2025,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png',
        stats: {
          hp: 60,
          attack: 75,
          defense: 100,
          specialAttack: 55,
          specialDefense: 80,
          speed: 50
        }
      },
      {
        id: 376,
        name: 'metagross',
        types: ['steel', 'psychic'],
        weight: 5500,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
        stats: {
          hp: 80,
          attack: 135,
          defense: 130,
          specialAttack: 95,
          specialDefense: 90,
          speed: 70
        }
      },
      {
        id: 377,
        name: 'regirock',
        types: ['rock'],
        weight: 2300,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png',
        stats: {
          hp: 80,
          attack: 100,
          defense: 200,
          specialAttack: 50,
          specialDefense: 100,
          speed: 50
        }
      },
      {
        id: 378,
        name: 'regice',
        types: ['ice'],
        weight: 1750,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png',
        stats: {
          hp: 80,
          attack: 50,
          defense: 100,
          specialAttack: 100,
          specialDefense: 200,
          speed: 50
        }
      },
      {
        id: 379,
        name: 'registeel',
        types: ['steel'],
        weight: 2050,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png',
        stats: {
          hp: 80,
          attack: 75,
          defense: 150,
          specialAttack: 75,
          specialDefense: 150,
          speed: 50
        }
      },
      {
        id: 380,
        name: 'latias',
        types: ['dragon', 'psychic'],
        weight: 400,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png',
        stats: {
          hp: 80,
          attack: 80,
          defense: 90,
          specialAttack: 110,
          specialDefense: 130,
          speed: 110
        }
      },
      {
        id: 381,
        name: 'latios',
        types: ['dragon', 'psychic'],
        weight: 600,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png',
        stats: {
          hp: 80,
          attack: 90,
          defense: 80,
          specialAttack: 130,
          specialDefense: 110,
          speed: 110
        }
      },
      {
        id: 382,
        name: 'kyogre',
        types: ['water'],
        weight: 3520,
        height: 45,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 90,
          specialAttack: 150,
          specialDefense: 140,
          speed: 90
        }
      },
      {
        id: 383,
        name: 'groudon',
        types: ['ground'],
        weight: 9500,
        height: 35,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
        stats: {
          hp: 100,
          attack: 150,
          defense: 140,
          specialAttack: 100,
          specialDefense: 90,
          speed: 90
        }
      },
      {
        id: 384,
        name: 'rayquaza',
        types: ['dragon', 'flying'],
        weight: 2065,
        height: 70,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
        stats: {
          hp: 105,
          attack: 150,
          defense: 90,
          specialAttack: 150,
          specialDefense: 90,
          speed: 95
        }
      },
      {
        id: 385,
        name: 'jirachi',
        types: ['steel', 'psychic'],
        weight: 11,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          specialAttack: 100,
          specialDefense: 100,
          speed: 100
        }
      },
      {
        id: 386,
        name: 'deoxys-normal',
        types: ['psychic'],
        weight: 608,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png',
        stats: {
          hp: 50,
          attack: 150,
          defense: 50,
          specialAttack: 150,
          specialDefense: 50,
          speed: 150
        }
      },
      {
        id: 387,
        name: 'turtwig',
        types: ['grass'],
        weight: 102,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png',
        stats: {
          hp: 55,
          attack: 68,
          defense: 64,
          specialAttack: 45,
          specialDefense: 55,
          speed: 31
        }
      },
      {
        id: 388,
        name: 'grotle',
        types: ['grass'],
        weight: 970,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png',
        stats: {
          hp: 75,
          attack: 89,
          defense: 85,
          specialAttack: 55,
          specialDefense: 65,
          speed: 36
        }
      },
      {
        id: 389,
        name: 'torterra',
        types: ['grass', 'ground'],
        weight: 3100,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
        stats: {
          hp: 95,
          attack: 109,
          defense: 105,
          specialAttack: 75,
          specialDefense: 85,
          speed: 56
        }
      },
      {
        id: 390,
        name: 'chimchar',
        types: ['fire'],
        weight: 62,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
        stats: {
          hp: 44,
          attack: 58,
          defense: 44,
          specialAttack: 58,
          specialDefense: 44,
          speed: 61
        }
      },
      {
        id: 391,
        name: 'monferno',
        types: ['fire', 'fighting'],
        weight: 220,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png',
        stats: {
          hp: 64,
          attack: 78,
          defense: 52,
          specialAttack: 78,
          specialDefense: 52,
          speed: 81
        }
      },
      {
        id: 392,
        name: 'infernape',
        types: ['fire', 'fighting'],
        weight: 550,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
        stats: {
          hp: 76,
          attack: 104,
          defense: 71,
          specialAttack: 104,
          specialDefense: 71,
          speed: 108
        }
      },
      {
        id: 393,
        name: 'piplup',
        types: ['water'],
        weight: 52,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png',
        stats: {
          hp: 53,
          attack: 51,
          defense: 53,
          specialAttack: 61,
          specialDefense: 56,
          speed: 40
        }
      },
      {
        id: 394,
        name: 'prinplup',
        types: ['water'],
        weight: 230,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png',
        stats: {
          hp: 64,
          attack: 66,
          defense: 68,
          specialAttack: 81,
          specialDefense: 76,
          speed: 50
        }
      },
      {
        id: 395,
        name: 'empoleon',
        types: ['water', 'steel'],
        weight: 845,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
        stats: {
          hp: 84,
          attack: 86,
          defense: 88,
          specialAttack: 111,
          specialDefense: 101,
          speed: 60
        }
      },
      {
        id: 396,
        name: 'starly',
        types: ['normal', 'flying'],
        weight: 20,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png',
        stats: {
          hp: 40,
          attack: 55,
          defense: 30,
          specialAttack: 30,
          specialDefense: 30,
          speed: 60
        }
      },
      {
        id: 397,
        name: 'staravia',
        types: ['normal', 'flying'],
        weight: 155,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png',
        stats: {
          hp: 55,
          attack: 75,
          defense: 50,
          specialAttack: 40,
          specialDefense: 40,
          speed: 80
        }
      },
      {
        id: 398,
        name: 'staraptor',
        types: ['normal', 'flying'],
        weight: 249,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
        stats: {
          hp: 85,
          attack: 120,
          defense: 70,
          specialAttack: 50,
          specialDefense: 60,
          speed: 100
        }
      },
      {
        id: 399,
        name: 'bidoof',
        types: ['normal'],
        weight: 200,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png',
        stats: {
          hp: 59,
          attack: 45,
          defense: 40,
          specialAttack: 35,
          specialDefense: 40,
          speed: 31
        }
      },
      {
        id: 400,
        name: 'bibarel',
        types: ['normal', 'water'],
        weight: 315,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png',
        stats: {
          hp: 79,
          attack: 85,
          defense: 60,
          specialAttack: 55,
          specialDefense: 60,
          speed: 71
        }
      },
      {
        id: 401,
        name: 'kricketot',
        types: ['bug'],
        weight: 22,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png',
        stats: {
          hp: 37,
          attack: 25,
          defense: 41,
          specialAttack: 25,
          specialDefense: 41,
          speed: 25
        }
      },
      {
        id: 402,
        name: 'kricketune',
        types: ['bug'],
        weight: 255,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png',
        stats: {
          hp: 77,
          attack: 85,
          defense: 51,
          specialAttack: 55,
          specialDefense: 51,
          speed: 65
        }
      },
      {
        id: 403,
        name: 'shinx',
        types: ['electric'],
        weight: 95,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
        stats: {
          hp: 45,
          attack: 65,
          defense: 34,
          specialAttack: 40,
          specialDefense: 34,
          speed: 45
        }
      },
      {
        id: 404,
        name: 'luxio',
        types: ['electric'],
        weight: 305,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png',
        stats: {
          hp: 60,
          attack: 85,
          defense: 49,
          specialAttack: 60,
          specialDefense: 49,
          speed: 60
        }
      },
      {
        id: 405,
        name: 'luxray',
        types: ['electric'],
        weight: 420,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
        stats: {
          hp: 80,
          attack: 120,
          defense: 79,
          specialAttack: 95,
          specialDefense: 79,
          speed: 70
        }
      },
      {
        id: 406,
        name: 'budew',
        types: ['grass', 'poison'],
        weight: 12,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png',
        stats: {
          hp: 40,
          attack: 30,
          defense: 35,
          specialAttack: 50,
          specialDefense: 70,
          speed: 55
        }
      },
      {
        id: 407,
        name: 'roserade',
        types: ['grass', 'poison'],
        weight: 145,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
        stats: {
          hp: 60,
          attack: 70,
          defense: 65,
          specialAttack: 125,
          specialDefense: 105,
          speed: 90
        }
      },
      {
        id: 408,
        name: 'cranidos',
        types: ['rock'],
        weight: 315,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png',
        stats: {
          hp: 67,
          attack: 125,
          defense: 40,
          specialAttack: 30,
          specialDefense: 30,
          speed: 58
        }
      },
      {
        id: 409,
        name: 'rampardos',
        types: ['rock'],
        weight: 1025,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png',
        stats: {
          hp: 97,
          attack: 165,
          defense: 60,
          specialAttack: 65,
          specialDefense: 50,
          speed: 58
        }
      },
      {
        id: 410,
        name: 'shieldon',
        types: ['rock', 'steel'],
        weight: 570,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png',
        stats: {
          hp: 30,
          attack: 42,
          defense: 118,
          specialAttack: 42,
          specialDefense: 88,
          speed: 30
        }
      },
      {
        id: 411,
        name: 'bastiodon',
        types: ['rock', 'steel'],
        weight: 1495,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png',
        stats: {
          hp: 60,
          attack: 52,
          defense: 168,
          specialAttack: 47,
          specialDefense: 138,
          speed: 30
        }
      },
      {
        id: 412,
        name: 'burmy',
        types: ['bug'],
        weight: 34,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png',
        stats: {
          hp: 40,
          attack: 29,
          defense: 45,
          specialAttack: 29,
          specialDefense: 45,
          speed: 36
        }
      },
      {
        id: 413,
        name: 'wormadam-plant',
        types: ['bug', 'grass'],
        weight: 65,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png',
        stats: {
          hp: 60,
          attack: 59,
          defense: 85,
          specialAttack: 79,
          specialDefense: 105,
          speed: 36
        }
      },
      {
        id: 414,
        name: 'mothim',
        types: ['bug', 'flying'],
        weight: 233,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png',
        stats: {
          hp: 70,
          attack: 94,
          defense: 50,
          specialAttack: 94,
          specialDefense: 50,
          speed: 66
        }
      },
      {
        id: 415,
        name: 'combee',
        types: ['bug', 'flying'],
        weight: 55,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png',
        stats: {
          hp: 30,
          attack: 30,
          defense: 42,
          specialAttack: 30,
          specialDefense: 42,
          speed: 70
        }
      },
      {
        id: 416,
        name: 'vespiquen',
        types: ['bug', 'flying'],
        weight: 385,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png',
        stats: {
          hp: 70,
          attack: 80,
          defense: 102,
          specialAttack: 80,
          specialDefense: 102,
          speed: 40
        }
      },
      {
        id: 417,
        name: 'pachirisu',
        types: ['electric'],
        weight: 39,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png',
        stats: {
          hp: 60,
          attack: 45,
          defense: 70,
          specialAttack: 45,
          specialDefense: 90,
          speed: 95
        }
      },
      {
        id: 418,
        name: 'buizel',
        types: ['water'],
        weight: 295,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png',
        stats: {
          hp: 55,
          attack: 65,
          defense: 35,
          specialAttack: 60,
          specialDefense: 30,
          speed: 85
        }
      },
      {
        id: 419,
        name: 'floatzel',
        types: ['water'],
        weight: 335,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
        stats: {
          hp: 85,
          attack: 105,
          defense: 55,
          specialAttack: 85,
          specialDefense: 50,
          speed: 115
        }
      },
      {
        id: 420,
        name: 'cherubi',
        types: ['grass'],
        weight: 33,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png',
        stats: {
          hp: 45,
          attack: 35,
          defense: 45,
          specialAttack: 62,
          specialDefense: 53,
          speed: 35
        }
      },
      {
        id: 421,
        name: 'cherrim',
        types: ['grass'],
        weight: 93,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png',
        stats: {
          hp: 70,
          attack: 60,
          defense: 70,
          specialAttack: 87,
          specialDefense: 78,
          speed: 85
        }
      },
      {
        id: 422,
        name: 'shellos',
        types: ['water'],
        weight: 63,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png',
        stats: {
          hp: 76,
          attack: 48,
          defense: 48,
          specialAttack: 57,
          specialDefense: 62,
          speed: 34
        }
      },
      {
        id: 423,
        name: 'gastrodon',
        types: ['water', 'ground'],
        weight: 299,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
        stats: {
          hp: 111,
          attack: 83,
          defense: 68,
          specialAttack: 92,
          specialDefense: 82,
          speed: 39
        }
      },
      {
        id: 424,
        name: 'ambipom',
        types: ['normal'],
        weight: 203,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png',
        stats: {
          hp: 75,
          attack: 100,
          defense: 66,
          specialAttack: 60,
          specialDefense: 66,
          speed: 115
        }
      },
      {
        id: 425,
        name: 'drifloon',
        types: ['ghost', 'flying'],
        weight: 12,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png',
        stats: {
          hp: 90,
          attack: 50,
          defense: 34,
          specialAttack: 60,
          specialDefense: 44,
          speed: 70
        }
      },
      {
        id: 426,
        name: 'drifblim',
        types: ['ghost', 'flying'],
        weight: 150,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png',
        stats: {
          hp: 150,
          attack: 80,
          defense: 44,
          specialAttack: 90,
          specialDefense: 54,
          speed: 80
        }
      },
      {
        id: 427,
        name: 'buneary',
        types: ['normal'],
        weight: 55,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png',
        stats: {
          hp: 55,
          attack: 66,
          defense: 44,
          specialAttack: 44,
          specialDefense: 56,
          speed: 85
        }
      },
      {
        id: 428,
        name: 'lopunny',
        types: ['normal'],
        weight: 333,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png',
        stats: {
          hp: 65,
          attack: 76,
          defense: 84,
          specialAttack: 54,
          specialDefense: 96,
          speed: 105
        }
      },
      {
        id: 429,
        name: 'mismagius',
        types: ['ghost'],
        weight: 44,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 60,
          specialAttack: 105,
          specialDefense: 105,
          speed: 105
        }
      },
      {
        id: 430,
        name: 'honchkrow',
        types: ['dark', 'flying'],
        weight: 273,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png',
        stats: {
          hp: 100,
          attack: 125,
          defense: 52,
          specialAttack: 105,
          specialDefense: 52,
          speed: 71
        }
      },
      {
        id: 431,
        name: 'glameow',
        types: ['normal'],
        weight: 39,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png',
        stats: {
          hp: 49,
          attack: 55,
          defense: 42,
          specialAttack: 42,
          specialDefense: 37,
          speed: 85
        }
      },
      {
        id: 432,
        name: 'purugly',
        types: ['normal'],
        weight: 438,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png',
        stats: {
          hp: 71,
          attack: 82,
          defense: 64,
          specialAttack: 64,
          specialDefense: 59,
          speed: 112
        }
      },
      {
        id: 433,
        name: 'chingling',
        types: ['psychic'],
        weight: 6,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png',
        stats: {
          hp: 45,
          attack: 30,
          defense: 50,
          specialAttack: 65,
          specialDefense: 50,
          speed: 45
        }
      },
      {
        id: 434,
        name: 'stunky',
        types: ['poison', 'dark'],
        weight: 192,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png',
        stats: {
          hp: 63,
          attack: 63,
          defense: 47,
          specialAttack: 41,
          specialDefense: 41,
          speed: 74
        }
      },
      {
        id: 435,
        name: 'skuntank',
        types: ['poison', 'dark'],
        weight: 380,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png',
        stats: {
          hp: 103,
          attack: 93,
          defense: 67,
          specialAttack: 71,
          specialDefense: 61,
          speed: 84
        }
      },
      {
        id: 436,
        name: 'bronzor',
        types: ['steel', 'psychic'],
        weight: 605,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png',
        stats: {
          hp: 57,
          attack: 24,
          defense: 86,
          specialAttack: 24,
          specialDefense: 86,
          speed: 23
        }
      },
      {
        id: 437,
        name: 'bronzong',
        types: ['steel', 'psychic'],
        weight: 1870,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png',
        stats: {
          hp: 67,
          attack: 89,
          defense: 116,
          specialAttack: 79,
          specialDefense: 116,
          speed: 33
        }
      },
      {
        id: 438,
        name: 'bonsly',
        types: ['rock'],
        weight: 150,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png',
        stats: {
          hp: 50,
          attack: 80,
          defense: 95,
          specialAttack: 10,
          specialDefense: 45,
          speed: 10
        }
      },
      {
        id: 439,
        name: 'mime-jr',
        types: ['psychic', 'fairy'],
        weight: 130,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png',
        stats: {
          hp: 20,
          attack: 25,
          defense: 45,
          specialAttack: 70,
          specialDefense: 90,
          speed: 60
        }
      },
      {
        id: 440,
        name: 'happiny',
        types: ['normal'],
        weight: 244,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png',
        stats: {
          hp: 100,
          attack: 5,
          defense: 5,
          specialAttack: 15,
          specialDefense: 65,
          speed: 30
        }
      },
      {
        id: 441,
        name: 'chatot',
        types: ['normal', 'flying'],
        weight: 19,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png',
        stats: {
          hp: 76,
          attack: 65,
          defense: 45,
          specialAttack: 92,
          specialDefense: 42,
          speed: 91
        }
      },
      {
        id: 442,
        name: 'spiritomb',
        types: ['ghost', 'dark'],
        weight: 1080,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png',
        stats: {
          hp: 50,
          attack: 92,
          defense: 108,
          specialAttack: 92,
          specialDefense: 108,
          speed: 35
        }
      },
      {
        id: 443,
        name: 'gible',
        types: ['dragon', 'ground'],
        weight: 205,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png',
        stats: {
          hp: 58,
          attack: 70,
          defense: 45,
          specialAttack: 40,
          specialDefense: 45,
          speed: 42
        }
      },
      {
        id: 444,
        name: 'gabite',
        types: ['dragon', 'ground'],
        weight: 560,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png',
        stats: {
          hp: 68,
          attack: 90,
          defense: 65,
          specialAttack: 50,
          specialDefense: 55,
          speed: 82
        }
      },
      {
        id: 445,
        name: 'garchomp',
        types: ['dragon', 'ground'],
        weight: 950,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
        stats: {
          hp: 108,
          attack: 130,
          defense: 95,
          specialAttack: 80,
          specialDefense: 85,
          speed: 102
        }
      },
      {
        id: 446,
        name: 'munchlax',
        types: ['normal'],
        weight: 1050,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png',
        stats: {
          hp: 135,
          attack: 85,
          defense: 40,
          specialAttack: 40,
          specialDefense: 85,
          speed: 5
        }
      },
      {
        id: 447,
        name: 'riolu',
        types: ['fighting'],
        weight: 202,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png',
        stats: {
          hp: 40,
          attack: 70,
          defense: 40,
          specialAttack: 35,
          specialDefense: 40,
          speed: 60
        }
      },
      {
        id: 448,
        name: 'lucario',
        types: ['fighting', 'steel'],
        weight: 540,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
        stats: {
          hp: 70,
          attack: 110,
          defense: 70,
          specialAttack: 115,
          specialDefense: 70,
          speed: 90
        }
      },
      {
        id: 449,
        name: 'hippopotas',
        types: ['ground'],
        weight: 495,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png',
        stats: {
          hp: 68,
          attack: 72,
          defense: 78,
          specialAttack: 38,
          specialDefense: 42,
          speed: 32
        }
      },
      {
        id: 450,
        name: 'hippowdon',
        types: ['ground'],
        weight: 3000,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png',
        stats: {
          hp: 108,
          attack: 112,
          defense: 118,
          specialAttack: 68,
          specialDefense: 72,
          speed: 47
        }
      },
      {
        id: 451,
        name: 'skorupi',
        types: ['poison', 'bug'],
        weight: 120,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png',
        stats: {
          hp: 40,
          attack: 50,
          defense: 90,
          specialAttack: 30,
          specialDefense: 55,
          speed: 65
        }
      },
      {
        id: 452,
        name: 'drapion',
        types: ['poison', 'dark'],
        weight: 615,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png',
        stats: {
          hp: 70,
          attack: 90,
          defense: 110,
          specialAttack: 60,
          specialDefense: 75,
          speed: 95
        }
      },
      {
        id: 453,
        name: 'croagunk',
        types: ['poison', 'fighting'],
        weight: 230,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png',
        stats: {
          hp: 48,
          attack: 61,
          defense: 40,
          specialAttack: 61,
          specialDefense: 40,
          speed: 50
        }
      },
      {
        id: 454,
        name: 'toxicroak',
        types: ['poison', 'fighting'],
        weight: 444,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png',
        stats: {
          hp: 83,
          attack: 106,
          defense: 65,
          specialAttack: 86,
          specialDefense: 65,
          speed: 85
        }
      },
      {
        id: 455,
        name: 'carnivine',
        types: ['grass'],
        weight: 270,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png',
        stats: {
          hp: 74,
          attack: 100,
          defense: 72,
          specialAttack: 90,
          specialDefense: 72,
          speed: 46
        }
      },
      {
        id: 456,
        name: 'finneon',
        types: ['water'],
        weight: 70,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png',
        stats: {
          hp: 49,
          attack: 49,
          defense: 56,
          specialAttack: 49,
          specialDefense: 61,
          speed: 66
        }
      },
      {
        id: 457,
        name: 'lumineon',
        types: ['water'],
        weight: 240,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png',
        stats: {
          hp: 69,
          attack: 69,
          defense: 76,
          specialAttack: 69,
          specialDefense: 86,
          speed: 91
        }
      },
      {
        id: 458,
        name: 'mantyke',
        types: ['water', 'flying'],
        weight: 650,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png',
        stats: {
          hp: 45,
          attack: 20,
          defense: 50,
          specialAttack: 60,
          specialDefense: 120,
          speed: 50
        }
      },
      {
        id: 459,
        name: 'snover',
        types: ['grass', 'ice'],
        weight: 505,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png',
        stats: {
          hp: 60,
          attack: 62,
          defense: 50,
          specialAttack: 62,
          specialDefense: 60,
          speed: 40
        }
      },
      {
        id: 460,
        name: 'abomasnow',
        types: ['grass', 'ice'],
        weight: 1355,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
        stats: {
          hp: 90,
          attack: 92,
          defense: 75,
          specialAttack: 92,
          specialDefense: 85,
          speed: 60
        }
      },
      {
        id: 461,
        name: 'weavile',
        types: ['dark', 'ice'],
        weight: 340,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png',
        stats: {
          hp: 70,
          attack: 120,
          defense: 65,
          specialAttack: 45,
          specialDefense: 85,
          speed: 125
        }
      },
      {
        id: 462,
        name: 'magnezone',
        types: ['electric', 'steel'],
        weight: 1800,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png',
        stats: {
          hp: 70,
          attack: 70,
          defense: 115,
          specialAttack: 130,
          specialDefense: 90,
          speed: 60
        }
      },
      {
        id: 463,
        name: 'lickilicky',
        types: ['normal'],
        weight: 1400,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png',
        stats: {
          hp: 110,
          attack: 85,
          defense: 95,
          specialAttack: 80,
          specialDefense: 95,
          speed: 50
        }
      },
      {
        id: 464,
        name: 'rhyperior',
        types: ['ground', 'rock'],
        weight: 2828,
        height: 24,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png',
        stats: {
          hp: 115,
          attack: 140,
          defense: 130,
          specialAttack: 55,
          specialDefense: 55,
          speed: 40
        }
      },
      {
        id: 465,
        name: 'tangrowth',
        types: ['grass'],
        weight: 1286,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 125,
          specialAttack: 110,
          specialDefense: 50,
          speed: 50
        }
      },
      {
        id: 466,
        name: 'electivire',
        types: ['electric'],
        weight: 1386,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
        stats: {
          hp: 75,
          attack: 123,
          defense: 67,
          specialAttack: 95,
          specialDefense: 85,
          speed: 95
        }
      },
      {
        id: 467,
        name: 'magmortar',
        types: ['fire'],
        weight: 680,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
        stats: {
          hp: 75,
          attack: 95,
          defense: 67,
          specialAttack: 125,
          specialDefense: 95,
          speed: 83
        }
      },
      {
        id: 468,
        name: 'togekiss',
        types: ['fairy', 'flying'],
        weight: 380,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
        stats: {
          hp: 85,
          attack: 50,
          defense: 95,
          specialAttack: 120,
          specialDefense: 115,
          speed: 80
        }
      },
      {
        id: 469,
        name: 'yanmega',
        types: ['bug', 'flying'],
        weight: 515,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png',
        stats: {
          hp: 86,
          attack: 76,
          defense: 86,
          specialAttack: 116,
          specialDefense: 56,
          speed: 95
        }
      },
      {
        id: 470,
        name: 'leafeon',
        types: ['grass'],
        weight: 255,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
        stats: {
          hp: 65,
          attack: 110,
          defense: 130,
          specialAttack: 60,
          specialDefense: 65,
          speed: 95
        }
      },
      {
        id: 471,
        name: 'glaceon',
        types: ['ice'],
        weight: 259,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
        stats: {
          hp: 65,
          attack: 60,
          defense: 110,
          specialAttack: 130,
          specialDefense: 95,
          speed: 65
        }
      },
      {
        id: 472,
        name: 'gliscor',
        types: ['ground', 'flying'],
        weight: 425,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png',
        stats: {
          hp: 75,
          attack: 95,
          defense: 125,
          specialAttack: 45,
          specialDefense: 75,
          speed: 95
        }
      },
      {
        id: 473,
        name: 'mamoswine',
        types: ['ice', 'ground'],
        weight: 2910,
        height: 25,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png',
        stats: {
          hp: 110,
          attack: 130,
          defense: 80,
          specialAttack: 70,
          specialDefense: 60,
          speed: 80
        }
      },
      {
        id: 474,
        name: 'porygon-z',
        types: ['normal'],
        weight: 340,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png',
        stats: {
          hp: 85,
          attack: 80,
          defense: 70,
          specialAttack: 135,
          specialDefense: 75,
          speed: 90
        }
      },
      {
        id: 475,
        name: 'gallade',
        types: ['psychic', 'fighting'],
        weight: 520,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
        stats: {
          hp: 68,
          attack: 125,
          defense: 65,
          specialAttack: 65,
          specialDefense: 115,
          speed: 80
        }
      },
      {
        id: 476,
        name: 'probopass',
        types: ['rock', 'steel'],
        weight: 3400,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png',
        stats: {
          hp: 60,
          attack: 55,
          defense: 145,
          specialAttack: 75,
          specialDefense: 150,
          speed: 40
        }
      },
      {
        id: 477,
        name: 'dusknoir',
        types: ['ghost'],
        weight: 1066,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png',
        stats: {
          hp: 45,
          attack: 100,
          defense: 135,
          specialAttack: 65,
          specialDefense: 135,
          speed: 45
        }
      },
      {
        id: 478,
        name: 'froslass',
        types: ['ice', 'ghost'],
        weight: 266,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png',
        stats: {
          hp: 70,
          attack: 80,
          defense: 70,
          specialAttack: 80,
          specialDefense: 70,
          speed: 110
        }
      },
      {
        id: 479,
        name: 'rotom',
        types: ['electric', 'ghost'],
        weight: 3,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
        stats: {
          hp: 50,
          attack: 50,
          defense: 77,
          specialAttack: 95,
          specialDefense: 77,
          speed: 91
        }
      },
      {
        id: 480,
        name: 'uxie',
        types: ['psychic'],
        weight: 3,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png',
        stats: {
          hp: 75,
          attack: 75,
          defense: 130,
          specialAttack: 75,
          specialDefense: 130,
          speed: 95
        }
      },
      {
        id: 481,
        name: 'mesprit',
        types: ['psychic'],
        weight: 3,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png',
        stats: {
          hp: 80,
          attack: 105,
          defense: 105,
          specialAttack: 105,
          specialDefense: 105,
          speed: 80
        }
      },
      {
        id: 482,
        name: 'azelf',
        types: ['psychic'],
        weight: 3,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png',
        stats: {
          hp: 75,
          attack: 125,
          defense: 70,
          specialAttack: 125,
          specialDefense: 70,
          speed: 115
        }
      },
      {
        id: 483,
        name: 'dialga',
        types: ['steel', 'dragon'],
        weight: 6830,
        height: 54,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
        stats: {
          hp: 100,
          attack: 120,
          defense: 120,
          specialAttack: 150,
          specialDefense: 100,
          speed: 90
        }
      },
      {
        id: 484,
        name: 'palkia',
        types: ['water', 'dragon'],
        weight: 3360,
        height: 42,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
        stats: {
          hp: 90,
          attack: 120,
          defense: 100,
          specialAttack: 150,
          specialDefense: 120,
          speed: 100
        }
      },
      {
        id: 485,
        name: 'heatran',
        types: ['fire', 'steel'],
        weight: 4300,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png',
        stats: {
          hp: 91,
          attack: 90,
          defense: 106,
          specialAttack: 130,
          specialDefense: 106,
          speed: 77
        }
      },
      {
        id: 486,
        name: 'regigigas',
        types: ['normal'],
        weight: 4200,
        height: 37,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png',
        stats: {
          hp: 110,
          attack: 160,
          defense: 110,
          specialAttack: 80,
          specialDefense: 110,
          speed: 100
        }
      },
      {
        id: 487,
        name: 'giratina-altered',
        types: ['ghost', 'dragon'],
        weight: 7500,
        height: 45,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
        stats: {
          hp: 150,
          attack: 100,
          defense: 120,
          specialAttack: 100,
          specialDefense: 120,
          speed: 90
        }
      },
      {
        id: 488,
        name: 'cresselia',
        types: ['psychic'],
        weight: 856,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png',
        stats: {
          hp: 120,
          attack: 70,
          defense: 120,
          specialAttack: 75,
          specialDefense: 130,
          speed: 85
        }
      },
      {
        id: 489,
        name: 'phione',
        types: ['water'],
        weight: 31,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png',
        stats: {
          hp: 80,
          attack: 80,
          defense: 80,
          specialAttack: 80,
          specialDefense: 80,
          speed: 80
        }
      },
      {
        id: 490,
        name: 'manaphy',
        types: ['water'],
        weight: 14,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          specialAttack: 100,
          specialDefense: 100,
          speed: 100
        }
      },
      {
        id: 491,
        name: 'darkrai',
        types: ['dark'],
        weight: 505,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
        stats: {
          hp: 70,
          attack: 90,
          defense: 90,
          specialAttack: 135,
          specialDefense: 90,
          speed: 125
        }
      },
      {
        id: 492,
        name: 'shaymin-land',
        types: ['grass'],
        weight: 21,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          specialAttack: 100,
          specialDefense: 100,
          speed: 100
        }
      },
      {
        id: 493,
        name: 'arceus',
        types: ['normal'],
        weight: 3200,
        height: 32,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
        stats: {
          hp: 120,
          attack: 120,
          defense: 120,
          specialAttack: 120,
          specialDefense: 120,
          speed: 120
        }
      },
      {
        id: 494,
        name: 'victini',
        types: ['psychic', 'fire'],
        weight: 40,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png',
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          specialAttack: 100,
          specialDefense: 100,
          speed: 100
        }
      },
      {
        id: 495,
        name: 'snivy',
        types: ['grass'],
        weight: 81,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png',
        stats: {
          hp: 45,
          attack: 45,
          defense: 55,
          specialAttack: 45,
          specialDefense: 55,
          speed: 63
        }
      },
      {
        id: 496,
        name: 'servine',
        types: ['grass'],
        weight: 160,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 75,
          specialAttack: 60,
          specialDefense: 75,
          speed: 83
        }
      },
      {
        id: 497,
        name: 'serperior',
        types: ['grass'],
        weight: 630,
        height: 33,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png',
        stats: {
          hp: 75,
          attack: 75,
          defense: 95,
          specialAttack: 75,
          specialDefense: 95,
          speed: 113
        }
      },
      {
        id: 498,
        name: 'tepig',
        types: ['fire'],
        weight: 99,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png',
        stats: {
          hp: 65,
          attack: 63,
          defense: 45,
          specialAttack: 45,
          specialDefense: 45,
          speed: 45
        }
      },
      {
        id: 499,
        name: 'pignite',
        types: ['fire', 'fighting'],
        weight: 555,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png',
        stats: {
          hp: 90,
          attack: 93,
          defense: 55,
          specialAttack: 70,
          specialDefense: 55,
          speed: 55
        }
      },
      {
        id: 500,
        name: 'emboar',
        types: ['fire', 'fighting'],
        weight: 1500,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
        stats: {
          hp: 110,
          attack: 123,
          defense: 65,
          specialAttack: 100,
          specialDefense: 65,
          speed: 65
        }
      },
      {
        id: 501,
        name: 'oshawott',
        types: ['water'],
        weight: 59,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png',
        stats: {
          hp: 55,
          attack: 55,
          defense: 45,
          specialAttack: 63,
          specialDefense: 45,
          speed: 45
        }
      },
      {
        id: 502,
        name: 'dewott',
        types: ['water'],
        weight: 245,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png',
        stats: {
          hp: 75,
          attack: 75,
          defense: 60,
          specialAttack: 83,
          specialDefense: 60,
          speed: 60
        }
      },
      {
        id: 503,
        name: 'samurott',
        types: ['water'],
        weight: 946,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
        stats: {
          hp: 95,
          attack: 100,
          defense: 85,
          specialAttack: 108,
          specialDefense: 70,
          speed: 70
        }
      },
      {
        id: 504,
        name: 'patrat',
        types: ['normal'],
        weight: 116,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png',
        stats: {
          hp: 45,
          attack: 55,
          defense: 39,
          specialAttack: 35,
          specialDefense: 39,
          speed: 42
        }
      },
      {
        id: 505,
        name: 'watchog',
        types: ['normal'],
        weight: 270,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png',
        stats: {
          hp: 60,
          attack: 85,
          defense: 69,
          specialAttack: 60,
          specialDefense: 69,
          speed: 77
        }
      },
      {
        id: 506,
        name: 'lillipup',
        types: ['normal'],
        weight: 41,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png',
        stats: {
          hp: 45,
          attack: 60,
          defense: 45,
          specialAttack: 25,
          specialDefense: 45,
          speed: 55
        }
      },
      {
        id: 507,
        name: 'herdier',
        types: ['normal'],
        weight: 147,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png',
        stats: {
          hp: 65,
          attack: 80,
          defense: 65,
          specialAttack: 35,
          specialDefense: 65,
          speed: 60
        }
      },
      {
        id: 508,
        name: 'stoutland',
        types: ['normal'],
        weight: 610,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
        stats: {
          hp: 85,
          attack: 110,
          defense: 90,
          specialAttack: 45,
          specialDefense: 90,
          speed: 80
        }
      },
      {
        id: 509,
        name: 'purrloin',
        types: ['dark'],
        weight: 101,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png',
        stats: {
          hp: 41,
          attack: 50,
          defense: 37,
          specialAttack: 50,
          specialDefense: 37,
          speed: 66
        }
      },
      {
        id: 510,
        name: 'liepard',
        types: ['dark'],
        weight: 375,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png',
        stats: {
          hp: 64,
          attack: 88,
          defense: 50,
          specialAttack: 88,
          specialDefense: 50,
          speed: 106
        }
      },
      {
        id: 511,
        name: 'pansage',
        types: ['grass'],
        weight: 105,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png',
        stats: {
          hp: 50,
          attack: 53,
          defense: 48,
          specialAttack: 53,
          specialDefense: 48,
          speed: 64
        }
      },
      {
        id: 512,
        name: 'simisage',
        types: ['grass'],
        weight: 305,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png',
        stats: {
          hp: 75,
          attack: 98,
          defense: 63,
          specialAttack: 98,
          specialDefense: 63,
          speed: 101
        }
      },
      {
        id: 513,
        name: 'pansear',
        types: ['fire'],
        weight: 110,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png',
        stats: {
          hp: 50,
          attack: 53,
          defense: 48,
          specialAttack: 53,
          specialDefense: 48,
          speed: 64
        }
      },
      {
        id: 514,
        name: 'simisear',
        types: ['fire'],
        weight: 280,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png',
        stats: {
          hp: 75,
          attack: 98,
          defense: 63,
          specialAttack: 98,
          specialDefense: 63,
          speed: 101
        }
      },
      {
        id: 515,
        name: 'panpour',
        types: ['water'],
        weight: 135,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png',
        stats: {
          hp: 50,
          attack: 53,
          defense: 48,
          specialAttack: 53,
          specialDefense: 48,
          speed: 64
        }
      },
      {
        id: 516,
        name: 'simipour',
        types: ['water'],
        weight: 290,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
        stats: {
          hp: 75,
          attack: 98,
          defense: 63,
          specialAttack: 98,
          specialDefense: 63,
          speed: 101
        }
      },
      {
        id: 517,
        name: 'munna',
        types: ['psychic'],
        weight: 233,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png',
        stats: {
          hp: 76,
          attack: 25,
          defense: 45,
          specialAttack: 67,
          specialDefense: 55,
          speed: 24
        }
      },
      {
        id: 518,
        name: 'musharna',
        types: ['psychic'],
        weight: 605,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png',
        stats: {
          hp: 116,
          attack: 55,
          defense: 85,
          specialAttack: 107,
          specialDefense: 95,
          speed: 29
        }
      },
      {
        id: 519,
        name: 'pidove',
        types: ['normal', 'flying'],
        weight: 21,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png',
        stats: {
          hp: 50,
          attack: 55,
          defense: 50,
          specialAttack: 36,
          specialDefense: 30,
          speed: 43
        }
      },
      {
        id: 520,
        name: 'tranquill',
        types: ['normal', 'flying'],
        weight: 150,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png',
        stats: {
          hp: 62,
          attack: 77,
          defense: 62,
          specialAttack: 50,
          specialDefense: 42,
          speed: 65
        }
      },
      {
        id: 521,
        name: 'unfezant',
        types: ['normal', 'flying'],
        weight: 290,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png',
        stats: {
          hp: 80,
          attack: 115,
          defense: 80,
          specialAttack: 65,
          specialDefense: 55,
          speed: 93
        }
      },
      {
        id: 522,
        name: 'blitzle',
        types: ['electric'],
        weight: 298,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png',
        stats: {
          hp: 45,
          attack: 60,
          defense: 32,
          specialAttack: 50,
          specialDefense: 32,
          speed: 76
        }
      },
      {
        id: 523,
        name: 'zebstrika',
        types: ['electric'],
        weight: 795,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png',
        stats: {
          hp: 75,
          attack: 100,
          defense: 63,
          specialAttack: 80,
          specialDefense: 63,
          speed: 116
        }
      },
      {
        id: 524,
        name: 'roggenrola',
        types: ['rock'],
        weight: 180,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png',
        stats: {
          hp: 55,
          attack: 75,
          defense: 85,
          specialAttack: 25,
          specialDefense: 25,
          speed: 15
        }
      },
      {
        id: 525,
        name: 'boldore',
        types: ['rock'],
        weight: 1020,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png',
        stats: {
          hp: 70,
          attack: 105,
          defense: 105,
          specialAttack: 50,
          specialDefense: 40,
          speed: 20
        }
      },
      {
        id: 526,
        name: 'gigalith',
        types: ['rock'],
        weight: 2600,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
        stats: {
          hp: 85,
          attack: 135,
          defense: 130,
          specialAttack: 60,
          specialDefense: 80,
          speed: 25
        }
      },
      {
        id: 527,
        name: 'woobat',
        types: ['psychic', 'flying'],
        weight: 21,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png',
        stats: {
          hp: 65,
          attack: 45,
          defense: 43,
          specialAttack: 55,
          specialDefense: 43,
          speed: 72
        }
      },
      {
        id: 528,
        name: 'swoobat',
        types: ['psychic', 'flying'],
        weight: 105,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png',
        stats: {
          hp: 67,
          attack: 57,
          defense: 55,
          specialAttack: 77,
          specialDefense: 55,
          speed: 114
        }
      },
      {
        id: 529,
        name: 'drilbur',
        types: ['ground'],
        weight: 85,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png',
        stats: {
          hp: 60,
          attack: 85,
          defense: 40,
          specialAttack: 30,
          specialDefense: 45,
          speed: 68
        }
      },
      {
        id: 530,
        name: 'excadrill',
        types: ['ground', 'steel'],
        weight: 404,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
        stats: {
          hp: 110,
          attack: 135,
          defense: 60,
          specialAttack: 50,
          specialDefense: 65,
          speed: 88
        }
      },
      {
        id: 531,
        name: 'audino',
        types: ['normal'],
        weight: 310,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png',
        stats: {
          hp: 103,
          attack: 60,
          defense: 86,
          specialAttack: 60,
          specialDefense: 86,
          speed: 50
        }
      },
      {
        id: 532,
        name: 'timburr',
        types: ['fighting'],
        weight: 125,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png',
        stats: {
          hp: 75,
          attack: 80,
          defense: 55,
          specialAttack: 25,
          specialDefense: 35,
          speed: 35
        }
      },
      {
        id: 533,
        name: 'gurdurr',
        types: ['fighting'],
        weight: 400,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png',
        stats: {
          hp: 85,
          attack: 105,
          defense: 85,
          specialAttack: 40,
          specialDefense: 50,
          speed: 40
        }
      },
      {
        id: 534,
        name: 'conkeldurr',
        types: ['fighting'],
        weight: 870,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png',
        stats: {
          hp: 105,
          attack: 140,
          defense: 95,
          specialAttack: 55,
          specialDefense: 65,
          speed: 45
        }
      },
      {
        id: 535,
        name: 'tympole',
        types: ['water'],
        weight: 45,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png',
        stats: {
          hp: 50,
          attack: 50,
          defense: 40,
          specialAttack: 50,
          specialDefense: 40,
          speed: 64
        }
      },
      {
        id: 536,
        name: 'palpitoad',
        types: ['water', 'ground'],
        weight: 170,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png',
        stats: {
          hp: 75,
          attack: 65,
          defense: 55,
          specialAttack: 65,
          specialDefense: 55,
          speed: 69
        }
      },
      {
        id: 537,
        name: 'seismitoad',
        types: ['water', 'ground'],
        weight: 620,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png',
        stats: {
          hp: 105,
          attack: 95,
          defense: 75,
          specialAttack: 85,
          specialDefense: 75,
          speed: 74
        }
      },
      {
        id: 538,
        name: 'throh',
        types: ['fighting'],
        weight: 555,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png',
        stats: {
          hp: 120,
          attack: 100,
          defense: 85,
          specialAttack: 30,
          specialDefense: 85,
          speed: 45
        }
      },
      {
        id: 539,
        name: 'sawk',
        types: ['fighting'],
        weight: 510,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png',
        stats: {
          hp: 75,
          attack: 125,
          defense: 75,
          specialAttack: 30,
          specialDefense: 75,
          speed: 85
        }
      },
      {
        id: 540,
        name: 'sewaddle',
        types: ['bug', 'grass'],
        weight: 25,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png',
        stats: {
          hp: 45,
          attack: 53,
          defense: 70,
          specialAttack: 40,
          specialDefense: 60,
          speed: 42
        }
      },
      {
        id: 541,
        name: 'swadloon',
        types: ['bug', 'grass'],
        weight: 73,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png',
        stats: {
          hp: 55,
          attack: 63,
          defense: 90,
          specialAttack: 50,
          specialDefense: 80,
          speed: 42
        }
      },
      {
        id: 542,
        name: 'leavanny',
        types: ['bug', 'grass'],
        weight: 205,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png',
        stats: {
          hp: 75,
          attack: 103,
          defense: 80,
          specialAttack: 70,
          specialDefense: 80,
          speed: 92
        }
      },
      {
        id: 543,
        name: 'venipede',
        types: ['bug', 'poison'],
        weight: 53,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png',
        stats: {
          hp: 30,
          attack: 45,
          defense: 59,
          specialAttack: 30,
          specialDefense: 39,
          speed: 57
        }
      },
      {
        id: 544,
        name: 'whirlipede',
        types: ['bug', 'poison'],
        weight: 585,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png',
        stats: {
          hp: 40,
          attack: 55,
          defense: 99,
          specialAttack: 40,
          specialDefense: 79,
          speed: 47
        }
      },
      {
        id: 545,
        name: 'scolipede',
        types: ['bug', 'poison'],
        weight: 2005,
        height: 25,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png',
        stats: {
          hp: 60,
          attack: 100,
          defense: 89,
          specialAttack: 55,
          specialDefense: 69,
          speed: 112
        }
      },
      {
        id: 546,
        name: 'cottonee',
        types: ['grass', 'fairy'],
        weight: 6,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png',
        stats: {
          hp: 40,
          attack: 27,
          defense: 60,
          specialAttack: 37,
          specialDefense: 50,
          speed: 66
        }
      },
      {
        id: 547,
        name: 'whimsicott',
        types: ['grass', 'fairy'],
        weight: 66,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png',
        stats: {
          hp: 60,
          attack: 67,
          defense: 85,
          specialAttack: 77,
          specialDefense: 75,
          speed: 116
        }
      },
      {
        id: 548,
        name: 'petilil',
        types: ['grass'],
        weight: 66,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png',
        stats: {
          hp: 45,
          attack: 35,
          defense: 50,
          specialAttack: 70,
          specialDefense: 50,
          speed: 30
        }
      },
      {
        id: 549,
        name: 'lilligant',
        types: ['grass'],
        weight: 163,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
        stats: {
          hp: 70,
          attack: 60,
          defense: 75,
          specialAttack: 110,
          specialDefense: 75,
          speed: 90
        }
      },
      {
        id: 550,
        name: 'basculin-red-striped',
        types: ['water'],
        weight: 180,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png',
        stats: {
          hp: 70,
          attack: 92,
          defense: 65,
          specialAttack: 80,
          specialDefense: 55,
          speed: 98
        }
      },
      {
        id: 551,
        name: 'sandile',
        types: ['ground', 'dark'],
        weight: 152,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png',
        stats: {
          hp: 50,
          attack: 72,
          defense: 35,
          specialAttack: 35,
          specialDefense: 35,
          speed: 65
        }
      },
      {
        id: 552,
        name: 'krokorok',
        types: ['ground', 'dark'],
        weight: 334,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png',
        stats: {
          hp: 60,
          attack: 82,
          defense: 45,
          specialAttack: 45,
          specialDefense: 45,
          speed: 74
        }
      },
      {
        id: 553,
        name: 'krookodile',
        types: ['ground', 'dark'],
        weight: 963,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png',
        stats: {
          hp: 95,
          attack: 117,
          defense: 80,
          specialAttack: 65,
          specialDefense: 70,
          speed: 92
        }
      },
      {
        id: 554,
        name: 'darumaka',
        types: ['fire'],
        weight: 375,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png',
        stats: {
          hp: 70,
          attack: 90,
          defense: 45,
          specialAttack: 15,
          specialDefense: 45,
          speed: 50
        }
      },
      {
        id: 555,
        name: 'darmanitan-standard',
        types: ['fire'],
        weight: 929,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png',
        stats: {
          hp: 105,
          attack: 140,
          defense: 55,
          specialAttack: 30,
          specialDefense: 55,
          speed: 95
        }
      },
      {
        id: 556,
        name: 'maractus',
        types: ['grass'],
        weight: 280,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png',
        stats: {
          hp: 75,
          attack: 86,
          defense: 67,
          specialAttack: 106,
          specialDefense: 67,
          speed: 60
        }
      },
      {
        id: 557,
        name: 'dwebble',
        types: ['bug', 'rock'],
        weight: 145,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png',
        stats: {
          hp: 50,
          attack: 65,
          defense: 85,
          specialAttack: 35,
          specialDefense: 35,
          speed: 55
        }
      },
      {
        id: 558,
        name: 'crustle',
        types: ['bug', 'rock'],
        weight: 2000,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png',
        stats: {
          hp: 70,
          attack: 105,
          defense: 125,
          specialAttack: 65,
          specialDefense: 75,
          speed: 45
        }
      },
      {
        id: 559,
        name: 'scraggy',
        types: ['dark', 'fighting'],
        weight: 118,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png',
        stats: {
          hp: 50,
          attack: 75,
          defense: 70,
          specialAttack: 35,
          specialDefense: 70,
          speed: 48
        }
      },
      {
        id: 560,
        name: 'scrafty',
        types: ['dark', 'fighting'],
        weight: 300,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
        stats: {
          hp: 65,
          attack: 90,
          defense: 115,
          specialAttack: 45,
          specialDefense: 115,
          speed: 58
        }
      },
      {
        id: 561,
        name: 'sigilyph',
        types: ['psychic', 'flying'],
        weight: 140,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
        stats: {
          hp: 72,
          attack: 58,
          defense: 80,
          specialAttack: 103,
          specialDefense: 80,
          speed: 97
        }
      },
      {
        id: 562,
        name: 'yamask',
        types: ['ghost'],
        weight: 15,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png',
        stats: {
          hp: 38,
          attack: 30,
          defense: 85,
          specialAttack: 55,
          specialDefense: 65,
          speed: 30
        }
      },
      {
        id: 563,
        name: 'cofagrigus',
        types: ['ghost'],
        weight: 765,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png',
        stats: {
          hp: 58,
          attack: 50,
          defense: 145,
          specialAttack: 95,
          specialDefense: 105,
          speed: 30
        }
      },
      {
        id: 564,
        name: 'tirtouga',
        types: ['water', 'rock'],
        weight: 165,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png',
        stats: {
          hp: 54,
          attack: 78,
          defense: 103,
          specialAttack: 53,
          specialDefense: 45,
          speed: 22
        }
      },
      {
        id: 565,
        name: 'carracosta',
        types: ['water', 'rock'],
        weight: 810,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png',
        stats: {
          hp: 74,
          attack: 108,
          defense: 133,
          specialAttack: 83,
          specialDefense: 65,
          speed: 32
        }
      },
      {
        id: 566,
        name: 'archen',
        types: ['rock', 'flying'],
        weight: 95,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png',
        stats: {
          hp: 55,
          attack: 112,
          defense: 45,
          specialAttack: 74,
          specialDefense: 45,
          speed: 70
        }
      },
      {
        id: 567,
        name: 'archeops',
        types: ['rock', 'flying'],
        weight: 320,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
        stats: {
          hp: 75,
          attack: 140,
          defense: 65,
          specialAttack: 112,
          specialDefense: 65,
          speed: 110
        }
      },
      {
        id: 568,
        name: 'trubbish',
        types: ['poison'],
        weight: 310,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png',
        stats: {
          hp: 50,
          attack: 50,
          defense: 62,
          specialAttack: 40,
          specialDefense: 62,
          speed: 65
        }
      },
      {
        id: 569,
        name: 'garbodor',
        types: ['poison'],
        weight: 1073,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png',
        stats: {
          hp: 80,
          attack: 95,
          defense: 82,
          specialAttack: 60,
          specialDefense: 82,
          speed: 75
        }
      },
      {
        id: 570,
        name: 'zorua',
        types: ['dark'],
        weight: 125,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png',
        stats: {
          hp: 40,
          attack: 65,
          defense: 40,
          specialAttack: 80,
          specialDefense: 40,
          speed: 65
        }
      },
      {
        id: 571,
        name: 'zoroark',
        types: ['dark'],
        weight: 811,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png',
        stats: {
          hp: 60,
          attack: 105,
          defense: 60,
          specialAttack: 120,
          specialDefense: 60,
          speed: 105
        }
      },
      {
        id: 572,
        name: 'minccino',
        types: ['normal'],
        weight: 58,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png',
        stats: {
          hp: 55,
          attack: 50,
          defense: 40,
          specialAttack: 40,
          specialDefense: 40,
          speed: 75
        }
      },
      {
        id: 573,
        name: 'cinccino',
        types: ['normal'],
        weight: 75,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png',
        stats: {
          hp: 75,
          attack: 95,
          defense: 60,
          specialAttack: 65,
          specialDefense: 60,
          speed: 115
        }
      },
      {
        id: 574,
        name: 'gothita',
        types: ['psychic'],
        weight: 58,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png',
        stats: {
          hp: 45,
          attack: 30,
          defense: 50,
          specialAttack: 55,
          specialDefense: 65,
          speed: 45
        }
      },
      {
        id: 575,
        name: 'gothorita',
        types: ['psychic'],
        weight: 180,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png',
        stats: {
          hp: 60,
          attack: 45,
          defense: 70,
          specialAttack: 75,
          specialDefense: 85,
          speed: 55
        }
      },
      {
        id: 576,
        name: 'gothitelle',
        types: ['psychic'],
        weight: 440,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png',
        stats: {
          hp: 70,
          attack: 55,
          defense: 95,
          specialAttack: 95,
          specialDefense: 110,
          speed: 65
        }
      },
      {
        id: 577,
        name: 'solosis',
        types: ['psychic'],
        weight: 10,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png',
        stats: {
          hp: 45,
          attack: 30,
          defense: 40,
          specialAttack: 105,
          specialDefense: 50,
          speed: 20
        }
      },
      {
        id: 578,
        name: 'duosion',
        types: ['psychic'],
        weight: 80,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png',
        stats: {
          hp: 65,
          attack: 40,
          defense: 50,
          specialAttack: 125,
          specialDefense: 60,
          speed: 30
        }
      },
      {
        id: 579,
        name: 'reuniclus',
        types: ['psychic'],
        weight: 201,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
        stats: {
          hp: 110,
          attack: 65,
          defense: 75,
          specialAttack: 125,
          specialDefense: 85,
          speed: 30
        }
      },
      {
        id: 580,
        name: 'ducklett',
        types: ['water', 'flying'],
        weight: 55,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png',
        stats: {
          hp: 62,
          attack: 44,
          defense: 50,
          specialAttack: 44,
          specialDefense: 50,
          speed: 55
        }
      },
      {
        id: 581,
        name: 'swanna',
        types: ['water', 'flying'],
        weight: 242,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png',
        stats: {
          hp: 75,
          attack: 87,
          defense: 63,
          specialAttack: 87,
          specialDefense: 63,
          speed: 98
        }
      },
      {
        id: 582,
        name: 'vanillite',
        types: ['ice'],
        weight: 57,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png',
        stats: {
          hp: 36,
          attack: 50,
          defense: 50,
          specialAttack: 65,
          specialDefense: 60,
          speed: 44
        }
      },
      {
        id: 583,
        name: 'vanillish',
        types: ['ice'],
        weight: 410,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png',
        stats: {
          hp: 51,
          attack: 65,
          defense: 65,
          specialAttack: 80,
          specialDefense: 75,
          speed: 59
        }
      },
      {
        id: 584,
        name: 'vanilluxe',
        types: ['ice'],
        weight: 575,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png',
        stats: {
          hp: 71,
          attack: 95,
          defense: 85,
          specialAttack: 110,
          specialDefense: 95,
          speed: 79
        }
      },
      {
        id: 585,
        name: 'deerling',
        types: ['normal', 'grass'],
        weight: 195,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 50,
          specialAttack: 40,
          specialDefense: 50,
          speed: 75
        }
      },
      {
        id: 586,
        name: 'sawsbuck',
        types: ['normal', 'grass'],
        weight: 925,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png',
        stats: {
          hp: 80,
          attack: 100,
          defense: 70,
          specialAttack: 60,
          specialDefense: 70,
          speed: 95
        }
      },
      {
        id: 587,
        name: 'emolga',
        types: ['electric', 'flying'],
        weight: 50,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png',
        stats: {
          hp: 55,
          attack: 75,
          defense: 60,
          specialAttack: 75,
          specialDefense: 60,
          speed: 103
        }
      },
      {
        id: 588,
        name: 'karrablast',
        types: ['bug'],
        weight: 59,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png',
        stats: {
          hp: 50,
          attack: 75,
          defense: 45,
          specialAttack: 40,
          specialDefense: 45,
          speed: 60
        }
      },
      {
        id: 589,
        name: 'escavalier',
        types: ['bug', 'steel'],
        weight: 330,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png',
        stats: {
          hp: 70,
          attack: 135,
          defense: 105,
          specialAttack: 60,
          specialDefense: 105,
          speed: 20
        }
      },
      {
        id: 590,
        name: 'foongus',
        types: ['grass', 'poison'],
        weight: 10,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png',
        stats: {
          hp: 69,
          attack: 55,
          defense: 45,
          specialAttack: 55,
          specialDefense: 55,
          speed: 15
        }
      },
      {
        id: 591,
        name: 'amoonguss',
        types: ['grass', 'poison'],
        weight: 105,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png',
        stats: {
          hp: 114,
          attack: 85,
          defense: 70,
          specialAttack: 85,
          specialDefense: 80,
          speed: 30
        }
      },
      {
        id: 592,
        name: 'frillish',
        types: ['water', 'ghost'],
        weight: 330,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png',
        stats: {
          hp: 55,
          attack: 40,
          defense: 50,
          specialAttack: 65,
          specialDefense: 85,
          speed: 40
        }
      },
      {
        id: 593,
        name: 'jellicent',
        types: ['water', 'ghost'],
        weight: 1350,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png',
        stats: {
          hp: 100,
          attack: 60,
          defense: 70,
          specialAttack: 85,
          specialDefense: 105,
          speed: 60
        }
      },
      {
        id: 594,
        name: 'alomomola',
        types: ['water'],
        weight: 316,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png',
        stats: {
          hp: 165,
          attack: 75,
          defense: 80,
          specialAttack: 40,
          specialDefense: 45,
          speed: 65
        }
      },
      {
        id: 595,
        name: 'joltik',
        types: ['bug', 'electric'],
        weight: 6,
        height: 1,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
        stats: {
          hp: 50,
          attack: 47,
          defense: 50,
          specialAttack: 57,
          specialDefense: 50,
          speed: 65
        }
      },
      {
        id: 596,
        name: 'galvantula',
        types: ['bug', 'electric'],
        weight: 143,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png',
        stats: {
          hp: 70,
          attack: 77,
          defense: 60,
          specialAttack: 97,
          specialDefense: 60,
          speed: 108
        }
      },
      {
        id: 597,
        name: 'ferroseed',
        types: ['grass', 'steel'],
        weight: 188,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png',
        stats: {
          hp: 44,
          attack: 50,
          defense: 91,
          specialAttack: 24,
          specialDefense: 86,
          speed: 10
        }
      },
      {
        id: 598,
        name: 'ferrothorn',
        types: ['grass', 'steel'],
        weight: 1100,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
        stats: {
          hp: 74,
          attack: 94,
          defense: 131,
          specialAttack: 54,
          specialDefense: 116,
          speed: 20
        }
      },
      {
        id: 599,
        name: 'klink',
        types: ['steel'],
        weight: 210,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png',
        stats: {
          hp: 40,
          attack: 55,
          defense: 70,
          specialAttack: 45,
          specialDefense: 60,
          speed: 30
        }
      },
      {
        id: 600,
        name: 'klang',
        types: ['steel'],
        weight: 510,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png',
        stats: {
          hp: 60,
          attack: 80,
          defense: 95,
          specialAttack: 70,
          specialDefense: 85,
          speed: 50
        }
      },
      {
        id: 601,
        name: 'klinklang',
        types: ['steel'],
        weight: 810,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png',
        stats: {
          hp: 60,
          attack: 100,
          defense: 115,
          specialAttack: 70,
          specialDefense: 85,
          speed: 90
        }
      },
      {
        id: 602,
        name: 'tynamo',
        types: ['electric'],
        weight: 3,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png',
        stats: {
          hp: 35,
          attack: 55,
          defense: 40,
          specialAttack: 45,
          specialDefense: 40,
          speed: 60
        }
      },
      {
        id: 603,
        name: 'eelektrik',
        types: ['electric'],
        weight: 220,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png',
        stats: {
          hp: 65,
          attack: 85,
          defense: 70,
          specialAttack: 75,
          specialDefense: 70,
          speed: 40
        }
      },
      {
        id: 604,
        name: 'eelektross',
        types: ['electric'],
        weight: 805,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png',
        stats: {
          hp: 85,
          attack: 115,
          defense: 80,
          specialAttack: 105,
          specialDefense: 80,
          speed: 50
        }
      },
      {
        id: 605,
        name: 'elgyem',
        types: ['psychic'],
        weight: 90,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png',
        stats: {
          hp: 55,
          attack: 55,
          defense: 55,
          specialAttack: 85,
          specialDefense: 55,
          speed: 30
        }
      },
      {
        id: 606,
        name: 'beheeyem',
        types: ['psychic'],
        weight: 345,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png',
        stats: {
          hp: 75,
          attack: 75,
          defense: 75,
          specialAttack: 125,
          specialDefense: 95,
          speed: 40
        }
      },
      {
        id: 607,
        name: 'litwick',
        types: ['ghost', 'fire'],
        weight: 31,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png',
        stats: {
          hp: 50,
          attack: 30,
          defense: 55,
          specialAttack: 65,
          specialDefense: 55,
          speed: 20
        }
      },
      {
        id: 608,
        name: 'lampent',
        types: ['ghost', 'fire'],
        weight: 130,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png',
        stats: {
          hp: 60,
          attack: 40,
          defense: 60,
          specialAttack: 95,
          specialDefense: 60,
          speed: 55
        }
      },
      {
        id: 609,
        name: 'chandelure',
        types: ['ghost', 'fire'],
        weight: 343,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
        stats: {
          hp: 60,
          attack: 55,
          defense: 90,
          specialAttack: 145,
          specialDefense: 90,
          speed: 80
        }
      },
      {
        id: 610,
        name: 'axew',
        types: ['dragon'],
        weight: 180,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png',
        stats: {
          hp: 46,
          attack: 87,
          defense: 60,
          specialAttack: 30,
          specialDefense: 40,
          speed: 57
        }
      },
      {
        id: 611,
        name: 'fraxure',
        types: ['dragon'],
        weight: 360,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png',
        stats: {
          hp: 66,
          attack: 117,
          defense: 70,
          specialAttack: 40,
          specialDefense: 50,
          speed: 67
        }
      },
      {
        id: 612,
        name: 'haxorus',
        types: ['dragon'],
        weight: 1055,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
        stats: {
          hp: 76,
          attack: 147,
          defense: 90,
          specialAttack: 60,
          specialDefense: 70,
          speed: 97
        }
      },
      {
        id: 613,
        name: 'cubchoo',
        types: ['ice'],
        weight: 85,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png',
        stats: {
          hp: 55,
          attack: 70,
          defense: 40,
          specialAttack: 60,
          specialDefense: 40,
          speed: 40
        }
      },
      {
        id: 614,
        name: 'beartic',
        types: ['ice'],
        weight: 2600,
        height: 26,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png',
        stats: {
          hp: 95,
          attack: 130,
          defense: 80,
          specialAttack: 70,
          specialDefense: 80,
          speed: 50
        }
      },
      {
        id: 615,
        name: 'cryogonal',
        types: ['ice'],
        weight: 1480,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png',
        stats: {
          hp: 80,
          attack: 50,
          defense: 50,
          specialAttack: 95,
          specialDefense: 135,
          speed: 105
        }
      },
      {
        id: 616,
        name: 'shelmet',
        types: ['bug'],
        weight: 77,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png',
        stats: {
          hp: 50,
          attack: 40,
          defense: 85,
          specialAttack: 40,
          specialDefense: 65,
          speed: 25
        }
      },
      {
        id: 617,
        name: 'accelgor',
        types: ['bug'],
        weight: 253,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png',
        stats: {
          hp: 80,
          attack: 70,
          defense: 40,
          specialAttack: 100,
          specialDefense: 60,
          speed: 145
        }
      },
      {
        id: 618,
        name: 'stunfisk',
        types: ['ground', 'electric'],
        weight: 110,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png',
        stats: {
          hp: 109,
          attack: 66,
          defense: 84,
          specialAttack: 81,
          specialDefense: 99,
          speed: 32
        }
      },
      {
        id: 619,
        name: 'mienfoo',
        types: ['fighting'],
        weight: 200,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png',
        stats: {
          hp: 45,
          attack: 85,
          defense: 50,
          specialAttack: 55,
          specialDefense: 50,
          speed: 65
        }
      },
      {
        id: 620,
        name: 'mienshao',
        types: ['fighting'],
        weight: 355,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png',
        stats: {
          hp: 65,
          attack: 125,
          defense: 60,
          specialAttack: 95,
          specialDefense: 60,
          speed: 105
        }
      },
      {
        id: 621,
        name: 'druddigon',
        types: ['dragon'],
        weight: 1390,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png',
        stats: {
          hp: 77,
          attack: 120,
          defense: 90,
          specialAttack: 60,
          specialDefense: 90,
          speed: 48
        }
      },
      {
        id: 622,
        name: 'golett',
        types: ['ground', 'ghost'],
        weight: 920,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png',
        stats: {
          hp: 59,
          attack: 74,
          defense: 50,
          specialAttack: 35,
          specialDefense: 50,
          speed: 35
        }
      },
      {
        id: 623,
        name: 'golurk',
        types: ['ground', 'ghost'],
        weight: 3300,
        height: 28,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png',
        stats: {
          hp: 89,
          attack: 124,
          defense: 80,
          specialAttack: 55,
          specialDefense: 80,
          speed: 55
        }
      },
      {
        id: 624,
        name: 'pawniard',
        types: ['dark', 'steel'],
        weight: 102,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png',
        stats: {
          hp: 45,
          attack: 85,
          defense: 70,
          specialAttack: 40,
          specialDefense: 40,
          speed: 60
        }
      },
      {
        id: 625,
        name: 'bisharp',
        types: ['dark', 'steel'],
        weight: 700,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png',
        stats: {
          hp: 65,
          attack: 125,
          defense: 100,
          specialAttack: 60,
          specialDefense: 70,
          speed: 70
        }
      },
      {
        id: 626,
        name: 'bouffalant',
        types: ['normal'],
        weight: 946,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png',
        stats: {
          hp: 95,
          attack: 110,
          defense: 95,
          specialAttack: 40,
          specialDefense: 95,
          speed: 55
        }
      },
      {
        id: 627,
        name: 'rufflet',
        types: ['normal', 'flying'],
        weight: 105,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png',
        stats: {
          hp: 70,
          attack: 83,
          defense: 50,
          specialAttack: 37,
          specialDefense: 50,
          speed: 60
        }
      },
      {
        id: 628,
        name: 'braviary',
        types: ['normal', 'flying'],
        weight: 410,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png',
        stats: {
          hp: 100,
          attack: 123,
          defense: 75,
          specialAttack: 57,
          specialDefense: 75,
          speed: 80
        }
      },
      {
        id: 629,
        name: 'vullaby',
        types: ['dark', 'flying'],
        weight: 90,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png',
        stats: {
          hp: 70,
          attack: 55,
          defense: 75,
          specialAttack: 45,
          specialDefense: 65,
          speed: 60
        }
      },
      {
        id: 630,
        name: 'mandibuzz',
        types: ['dark', 'flying'],
        weight: 395,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png',
        stats: {
          hp: 110,
          attack: 65,
          defense: 105,
          specialAttack: 55,
          specialDefense: 95,
          speed: 80
        }
      },
      {
        id: 631,
        name: 'heatmor',
        types: ['fire'],
        weight: 580,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png',
        stats: {
          hp: 85,
          attack: 97,
          defense: 66,
          specialAttack: 105,
          specialDefense: 66,
          speed: 65
        }
      },
      {
        id: 632,
        name: 'durant',
        types: ['bug', 'steel'],
        weight: 330,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png',
        stats: {
          hp: 58,
          attack: 109,
          defense: 112,
          specialAttack: 48,
          specialDefense: 48,
          speed: 109
        }
      },
      {
        id: 633,
        name: 'deino',
        types: ['dark', 'dragon'],
        weight: 173,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png',
        stats: {
          hp: 52,
          attack: 65,
          defense: 50,
          specialAttack: 45,
          specialDefense: 50,
          speed: 38
        }
      },
      {
        id: 634,
        name: 'zweilous',
        types: ['dark', 'dragon'],
        weight: 500,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png',
        stats: {
          hp: 72,
          attack: 85,
          defense: 70,
          specialAttack: 65,
          specialDefense: 70,
          speed: 58
        }
      },
      {
        id: 635,
        name: 'hydreigon',
        types: ['dark', 'dragon'],
        weight: 1600,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png',
        stats: {
          hp: 92,
          attack: 105,
          defense: 90,
          specialAttack: 125,
          specialDefense: 90,
          speed: 98
        }
      },
      {
        id: 636,
        name: 'larvesta',
        types: ['bug', 'fire'],
        weight: 288,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png',
        stats: {
          hp: 55,
          attack: 85,
          defense: 55,
          specialAttack: 50,
          specialDefense: 55,
          speed: 60
        }
      },
      {
        id: 637,
        name: 'volcarona',
        types: ['bug', 'fire'],
        weight: 460,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
        stats: {
          hp: 85,
          attack: 60,
          defense: 65,
          specialAttack: 135,
          specialDefense: 105,
          speed: 100
        }
      },
      {
        id: 638,
        name: 'cobalion',
        types: ['steel', 'fighting'],
        weight: 2500,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png',
        stats: {
          hp: 91,
          attack: 90,
          defense: 129,
          specialAttack: 90,
          specialDefense: 72,
          speed: 108
        }
      },
      {
        id: 639,
        name: 'terrakion',
        types: ['rock', 'fighting'],
        weight: 2600,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png',
        stats: {
          hp: 91,
          attack: 129,
          defense: 90,
          specialAttack: 72,
          specialDefense: 90,
          speed: 108
        }
      },
      {
        id: 640,
        name: 'virizion',
        types: ['grass', 'fighting'],
        weight: 2000,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png',
        stats: {
          hp: 91,
          attack: 90,
          defense: 72,
          specialAttack: 90,
          specialDefense: 129,
          speed: 108
        }
      },
      {
        id: 641,
        name: 'tornadus-incarnate',
        types: ['flying'],
        weight: 630,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png',
        stats: {
          hp: 79,
          attack: 115,
          defense: 70,
          specialAttack: 125,
          specialDefense: 80,
          speed: 111
        }
      },
      {
        id: 642,
        name: 'thundurus-incarnate',
        types: ['electric', 'flying'],
        weight: 610,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png',
        stats: {
          hp: 79,
          attack: 115,
          defense: 70,
          specialAttack: 125,
          specialDefense: 80,
          speed: 111
        }
      },
      {
        id: 643,
        name: 'reshiram',
        types: ['dragon', 'fire'],
        weight: 3300,
        height: 32,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
        stats: {
          hp: 100,
          attack: 120,
          defense: 100,
          specialAttack: 150,
          specialDefense: 120,
          speed: 90
        }
      },
      {
        id: 644,
        name: 'zekrom',
        types: ['dragon', 'electric'],
        weight: 3450,
        height: 29,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
        stats: {
          hp: 100,
          attack: 150,
          defense: 120,
          specialAttack: 120,
          specialDefense: 100,
          speed: 90
        }
      },
      {
        id: 645,
        name: 'landorus-incarnate',
        types: ['ground', 'flying'],
        weight: 680,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png',
        stats: {
          hp: 89,
          attack: 125,
          defense: 90,
          specialAttack: 115,
          specialDefense: 80,
          speed: 101
        }
      },
      {
        id: 646,
        name: 'kyurem',
        types: ['dragon', 'ice'],
        weight: 3250,
        height: 30,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png',
        stats: {
          hp: 125,
          attack: 130,
          defense: 90,
          specialAttack: 130,
          specialDefense: 90,
          speed: 95
        }
      },
      {
        id: 647,
        name: 'keldeo-ordinary',
        types: ['water', 'fighting'],
        weight: 485,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png',
        stats: {
          hp: 91,
          attack: 72,
          defense: 90,
          specialAttack: 129,
          specialDefense: 90,
          speed: 108
        }
      },
      {
        id: 648,
        name: 'meloetta-aria',
        types: ['normal', 'psychic'],
        weight: 65,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png',
        stats: {
          hp: 100,
          attack: 77,
          defense: 77,
          specialAttack: 128,
          specialDefense: 128,
          speed: 90
        }
      },
      {
        id: 649,
        name: 'genesect',
        types: ['bug', 'steel'],
        weight: 825,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png',
        stats: {
          hp: 71,
          attack: 120,
          defense: 95,
          specialAttack: 120,
          specialDefense: 95,
          speed: 99
        }
      },
      {
        id: 650,
        name: 'chespin',
        types: ['grass'],
        weight: 90,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png',
        stats: {
          hp: 56,
          attack: 61,
          defense: 65,
          specialAttack: 48,
          specialDefense: 45,
          speed: 38
        }
      },
      {
        id: 651,
        name: 'quilladin',
        types: ['grass'],
        weight: 290,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png',
        stats: {
          hp: 61,
          attack: 78,
          defense: 95,
          specialAttack: 56,
          specialDefense: 58,
          speed: 57
        }
      },
      {
        id: 652,
        name: 'chesnaught',
        types: ['grass', 'fighting'],
        weight: 900,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png',
        stats: {
          hp: 88,
          attack: 107,
          defense: 122,
          specialAttack: 74,
          specialDefense: 75,
          speed: 64
        }
      },
      {
        id: 653,
        name: 'fennekin',
        types: ['fire'],
        weight: 94,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 40,
          specialAttack: 62,
          specialDefense: 60,
          speed: 60
        }
      },
      {
        id: 654,
        name: 'braixen',
        types: ['fire'],
        weight: 145,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png',
        stats: {
          hp: 59,
          attack: 59,
          defense: 58,
          specialAttack: 90,
          specialDefense: 70,
          speed: 73
        }
      },
      {
        id: 655,
        name: 'delphox',
        types: ['fire', 'psychic'],
        weight: 390,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png',
        stats: {
          hp: 75,
          attack: 69,
          defense: 72,
          specialAttack: 114,
          specialDefense: 100,
          speed: 104
        }
      },
      {
        id: 656,
        name: 'froakie',
        types: ['water'],
        weight: 70,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png',
        stats: {
          hp: 41,
          attack: 56,
          defense: 40,
          specialAttack: 62,
          specialDefense: 44,
          speed: 71
        }
      },
      {
        id: 657,
        name: 'frogadier',
        types: ['water'],
        weight: 109,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png',
        stats: {
          hp: 54,
          attack: 63,
          defense: 52,
          specialAttack: 83,
          specialDefense: 56,
          speed: 97
        }
      },
      {
        id: 658,
        name: 'greninja',
        types: ['water', 'dark'],
        weight: 400,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
        stats: {
          hp: 72,
          attack: 95,
          defense: 67,
          specialAttack: 103,
          specialDefense: 71,
          speed: 122
        }
      },
      {
        id: 659,
        name: 'bunnelby',
        types: ['normal'],
        weight: 50,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png',
        stats: {
          hp: 38,
          attack: 36,
          defense: 38,
          specialAttack: 32,
          specialDefense: 36,
          speed: 57
        }
      },
      {
        id: 660,
        name: 'diggersby',
        types: ['normal', 'ground'],
        weight: 424,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png',
        stats: {
          hp: 85,
          attack: 56,
          defense: 77,
          specialAttack: 50,
          specialDefense: 77,
          speed: 78
        }
      },
      {
        id: 661,
        name: 'fletchling',
        types: ['normal', 'flying'],
        weight: 17,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png',
        stats: {
          hp: 45,
          attack: 50,
          defense: 43,
          specialAttack: 40,
          specialDefense: 38,
          speed: 62
        }
      },
      {
        id: 662,
        name: 'fletchinder',
        types: ['fire', 'flying'],
        weight: 160,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png',
        stats: {
          hp: 62,
          attack: 73,
          defense: 55,
          specialAttack: 56,
          specialDefense: 52,
          speed: 84
        }
      },
      {
        id: 663,
        name: 'talonflame',
        types: ['fire', 'flying'],
        weight: 245,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png',
        stats: {
          hp: 78,
          attack: 81,
          defense: 71,
          specialAttack: 74,
          specialDefense: 69,
          speed: 126
        }
      },
      {
        id: 664,
        name: 'scatterbug',
        types: ['bug'],
        weight: 25,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png',
        stats: {
          hp: 38,
          attack: 35,
          defense: 40,
          specialAttack: 27,
          specialDefense: 25,
          speed: 35
        }
      },
      {
        id: 665,
        name: 'spewpa',
        types: ['bug'],
        weight: 84,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png',
        stats: {
          hp: 45,
          attack: 22,
          defense: 60,
          specialAttack: 27,
          specialDefense: 30,
          speed: 29
        }
      },
      {
        id: 666,
        name: 'vivillon',
        types: ['bug', 'flying'],
        weight: 170,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png',
        stats: {
          hp: 80,
          attack: 52,
          defense: 50,
          specialAttack: 90,
          specialDefense: 50,
          speed: 89
        }
      },
      {
        id: 667,
        name: 'litleo',
        types: ['fire', 'normal'],
        weight: 135,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png',
        stats: {
          hp: 62,
          attack: 50,
          defense: 58,
          specialAttack: 73,
          specialDefense: 54,
          speed: 72
        }
      },
      {
        id: 668,
        name: 'pyroar',
        types: ['fire', 'normal'],
        weight: 815,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png',
        stats: {
          hp: 86,
          attack: 68,
          defense: 72,
          specialAttack: 109,
          specialDefense: 66,
          speed: 106
        }
      },
      {
        id: 669,
        name: 'flabebe',
        types: ['fairy'],
        weight: 1,
        height: 1,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png',
        stats: {
          hp: 44,
          attack: 38,
          defense: 39,
          specialAttack: 61,
          specialDefense: 79,
          speed: 42
        }
      },
      {
        id: 670,
        name: 'floette',
        types: ['fairy'],
        weight: 9,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png',
        stats: {
          hp: 54,
          attack: 45,
          defense: 47,
          specialAttack: 75,
          specialDefense: 98,
          speed: 52
        }
      },
      {
        id: 671,
        name: 'florges',
        types: ['fairy'],
        weight: 100,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png',
        stats: {
          hp: 78,
          attack: 65,
          defense: 68,
          specialAttack: 112,
          specialDefense: 154,
          speed: 75
        }
      },
      {
        id: 672,
        name: 'skiddo',
        types: ['grass'],
        weight: 310,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png',
        stats: {
          hp: 66,
          attack: 65,
          defense: 48,
          specialAttack: 62,
          specialDefense: 57,
          speed: 52
        }
      },
      {
        id: 673,
        name: 'gogoat',
        types: ['grass'],
        weight: 910,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png',
        stats: {
          hp: 123,
          attack: 100,
          defense: 62,
          specialAttack: 97,
          specialDefense: 81,
          speed: 68
        }
      },
      {
        id: 674,
        name: 'pancham',
        types: ['fighting'],
        weight: 80,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png',
        stats: {
          hp: 67,
          attack: 82,
          defense: 62,
          specialAttack: 46,
          specialDefense: 48,
          speed: 43
        }
      },
      {
        id: 675,
        name: 'pangoro',
        types: ['fighting', 'dark'],
        weight: 1360,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png',
        stats: {
          hp: 95,
          attack: 124,
          defense: 78,
          specialAttack: 69,
          specialDefense: 71,
          speed: 58
        }
      },
      {
        id: 676,
        name: 'furfrou',
        types: ['normal'],
        weight: 280,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png',
        stats: {
          hp: 75,
          attack: 80,
          defense: 60,
          specialAttack: 65,
          specialDefense: 90,
          speed: 102
        }
      },
      {
        id: 677,
        name: 'espurr',
        types: ['psychic'],
        weight: 35,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png',
        stats: {
          hp: 62,
          attack: 48,
          defense: 54,
          specialAttack: 63,
          specialDefense: 60,
          speed: 68
        }
      },
      {
        id: 678,
        name: 'meowstic-male',
        types: ['psychic'],
        weight: 85,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png',
        stats: {
          hp: 74,
          attack: 48,
          defense: 76,
          specialAttack: 83,
          specialDefense: 81,
          speed: 104
        }
      },
      {
        id: 679,
        name: 'honedge',
        types: ['steel', 'ghost'],
        weight: 20,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png',
        stats: {
          hp: 45,
          attack: 80,
          defense: 100,
          specialAttack: 35,
          specialDefense: 37,
          speed: 28
        }
      },
      {
        id: 680,
        name: 'doublade',
        types: ['steel', 'ghost'],
        weight: 45,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png',
        stats: {
          hp: 59,
          attack: 110,
          defense: 150,
          specialAttack: 45,
          specialDefense: 49,
          speed: 35
        }
      },
      {
        id: 681,
        name: 'aegislash-shield',
        types: ['steel', 'ghost'],
        weight: 530,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 140,
          specialAttack: 50,
          specialDefense: 140,
          speed: 60
        }
      },
      {
        id: 682,
        name: 'spritzee',
        types: ['fairy'],
        weight: 5,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png',
        stats: {
          hp: 78,
          attack: 52,
          defense: 60,
          specialAttack: 63,
          specialDefense: 65,
          speed: 23
        }
      },
      {
        id: 683,
        name: 'aromatisse',
        types: ['fairy'],
        weight: 155,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png',
        stats: {
          hp: 101,
          attack: 72,
          defense: 72,
          specialAttack: 99,
          specialDefense: 89,
          speed: 29
        }
      },
      {
        id: 684,
        name: 'swirlix',
        types: ['fairy'],
        weight: 35,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png',
        stats: {
          hp: 62,
          attack: 48,
          defense: 66,
          specialAttack: 59,
          specialDefense: 57,
          speed: 49
        }
      },
      {
        id: 685,
        name: 'slurpuff',
        types: ['fairy'],
        weight: 50,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png',
        stats: {
          hp: 82,
          attack: 80,
          defense: 86,
          specialAttack: 85,
          specialDefense: 75,
          speed: 72
        }
      },
      {
        id: 686,
        name: 'inkay',
        types: ['dark', 'psychic'],
        weight: 35,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png',
        stats: {
          hp: 53,
          attack: 54,
          defense: 53,
          specialAttack: 37,
          specialDefense: 46,
          speed: 45
        }
      },
      {
        id: 687,
        name: 'malamar',
        types: ['dark', 'psychic'],
        weight: 470,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png',
        stats: {
          hp: 86,
          attack: 92,
          defense: 88,
          specialAttack: 68,
          specialDefense: 75,
          speed: 73
        }
      },
      {
        id: 688,
        name: 'binacle',
        types: ['rock', 'water'],
        weight: 310,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png',
        stats: {
          hp: 42,
          attack: 52,
          defense: 67,
          specialAttack: 39,
          specialDefense: 56,
          speed: 50
        }
      },
      {
        id: 689,
        name: 'barbaracle',
        types: ['rock', 'water'],
        weight: 960,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png',
        stats: {
          hp: 72,
          attack: 105,
          defense: 115,
          specialAttack: 54,
          specialDefense: 86,
          speed: 68
        }
      },
      {
        id: 690,
        name: 'skrelp',
        types: ['poison', 'water'],
        weight: 73,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png',
        stats: {
          hp: 50,
          attack: 60,
          defense: 60,
          specialAttack: 60,
          specialDefense: 60,
          speed: 30
        }
      },
      {
        id: 691,
        name: 'dragalge',
        types: ['poison', 'dragon'],
        weight: 815,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png',
        stats: {
          hp: 65,
          attack: 75,
          defense: 90,
          specialAttack: 97,
          specialDefense: 123,
          speed: 44
        }
      },
      {
        id: 692,
        name: 'clauncher',
        types: ['water'],
        weight: 83,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png',
        stats: {
          hp: 50,
          attack: 53,
          defense: 62,
          specialAttack: 58,
          specialDefense: 63,
          speed: 44
        }
      },
      {
        id: 693,
        name: 'clawitzer',
        types: ['water'],
        weight: 353,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png',
        stats: {
          hp: 71,
          attack: 73,
          defense: 88,
          specialAttack: 120,
          specialDefense: 89,
          speed: 59
        }
      },
      {
        id: 694,
        name: 'helioptile',
        types: ['electric', 'normal'],
        weight: 60,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png',
        stats: {
          hp: 44,
          attack: 38,
          defense: 33,
          specialAttack: 61,
          specialDefense: 43,
          speed: 70
        }
      },
      {
        id: 695,
        name: 'heliolisk',
        types: ['electric', 'normal'],
        weight: 210,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png',
        stats: {
          hp: 62,
          attack: 55,
          defense: 52,
          specialAttack: 109,
          specialDefense: 94,
          speed: 109
        }
      },
      {
        id: 696,
        name: 'tyrunt',
        types: ['rock', 'dragon'],
        weight: 260,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png',
        stats: {
          hp: 58,
          attack: 89,
          defense: 77,
          specialAttack: 45,
          specialDefense: 45,
          speed: 48
        }
      },
      {
        id: 697,
        name: 'tyrantrum',
        types: ['rock', 'dragon'],
        weight: 2700,
        height: 25,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png',
        stats: {
          hp: 82,
          attack: 121,
          defense: 119,
          specialAttack: 69,
          specialDefense: 59,
          speed: 71
        }
      },
      {
        id: 698,
        name: 'amaura',
        types: ['rock', 'ice'],
        weight: 252,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png',
        stats: {
          hp: 77,
          attack: 59,
          defense: 50,
          specialAttack: 67,
          specialDefense: 63,
          speed: 46
        }
      },
      {
        id: 699,
        name: 'aurorus',
        types: ['rock', 'ice'],
        weight: 2250,
        height: 27,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png',
        stats: {
          hp: 123,
          attack: 77,
          defense: 72,
          specialAttack: 99,
          specialDefense: 92,
          speed: 58
        }
      },
      {
        id: 700,
        name: 'sylveon',
        types: ['fairy'],
        weight: 235,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
        stats: {
          hp: 95,
          attack: 65,
          defense: 65,
          specialAttack: 110,
          specialDefense: 130,
          speed: 60
        }
      },
      {
        id: 701,
        name: 'hawlucha',
        types: ['fighting', 'flying'],
        weight: 215,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png',
        stats: {
          hp: 78,
          attack: 92,
          defense: 75,
          specialAttack: 74,
          specialDefense: 63,
          speed: 118
        }
      },
      {
        id: 702,
        name: 'dedenne',
        types: ['electric', 'fairy'],
        weight: 22,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png',
        stats: {
          hp: 67,
          attack: 58,
          defense: 57,
          specialAttack: 81,
          specialDefense: 67,
          speed: 101
        }
      },
      {
        id: 703,
        name: 'carbink',
        types: ['rock', 'fairy'],
        weight: 57,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png',
        stats: {
          hp: 50,
          attack: 50,
          defense: 150,
          specialAttack: 50,
          specialDefense: 150,
          speed: 50
        }
      },
      {
        id: 704,
        name: 'goomy',
        types: ['dragon'],
        weight: 28,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png',
        stats: {
          hp: 45,
          attack: 50,
          defense: 35,
          specialAttack: 55,
          specialDefense: 75,
          speed: 40
        }
      },
      {
        id: 705,
        name: 'sliggoo',
        types: ['dragon'],
        weight: 175,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png',
        stats: {
          hp: 68,
          attack: 75,
          defense: 53,
          specialAttack: 83,
          specialDefense: 113,
          speed: 60
        }
      },
      {
        id: 706,
        name: 'goodra',
        types: ['dragon'],
        weight: 1505,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png',
        stats: {
          hp: 90,
          attack: 100,
          defense: 70,
          specialAttack: 110,
          specialDefense: 150,
          speed: 80
        }
      },
      {
        id: 707,
        name: 'klefki',
        types: ['steel', 'fairy'],
        weight: 30,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png',
        stats: {
          hp: 57,
          attack: 80,
          defense: 91,
          specialAttack: 80,
          specialDefense: 87,
          speed: 75
        }
      },
      {
        id: 708,
        name: 'phantump',
        types: ['ghost', 'grass'],
        weight: 70,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png',
        stats: {
          hp: 43,
          attack: 70,
          defense: 48,
          specialAttack: 50,
          specialDefense: 60,
          speed: 38
        }
      },
      {
        id: 709,
        name: 'trevenant',
        types: ['ghost', 'grass'],
        weight: 710,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png',
        stats: {
          hp: 85,
          attack: 110,
          defense: 76,
          specialAttack: 65,
          specialDefense: 82,
          speed: 56
        }
      },
      {
        id: 710,
        name: 'pumpkaboo-average',
        types: ['ghost', 'grass'],
        weight: 50,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png',
        stats: {
          hp: 49,
          attack: 66,
          defense: 70,
          specialAttack: 44,
          specialDefense: 55,
          speed: 51
        }
      },
      {
        id: 711,
        name: 'gourgeist-average',
        types: ['ghost', 'grass'],
        weight: 125,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png',
        stats: {
          hp: 65,
          attack: 90,
          defense: 122,
          specialAttack: 58,
          specialDefense: 75,
          speed: 84
        }
      },
      {
        id: 712,
        name: 'bergmite',
        types: ['ice'],
        weight: 995,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png',
        stats: {
          hp: 55,
          attack: 69,
          defense: 85,
          specialAttack: 32,
          specialDefense: 35,
          speed: 28
        }
      },
      {
        id: 713,
        name: 'avalugg',
        types: ['ice'],
        weight: 5050,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png',
        stats: {
          hp: 95,
          attack: 117,
          defense: 184,
          specialAttack: 44,
          specialDefense: 46,
          speed: 28
        }
      },
      {
        id: 714,
        name: 'noibat',
        types: ['flying', 'dragon'],
        weight: 80,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png',
        stats: {
          hp: 40,
          attack: 30,
          defense: 35,
          specialAttack: 45,
          specialDefense: 40,
          speed: 55
        }
      },
      {
        id: 715,
        name: 'noivern',
        types: ['flying', 'dragon'],
        weight: 850,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png',
        stats: {
          hp: 85,
          attack: 70,
          defense: 80,
          specialAttack: 97,
          specialDefense: 80,
          speed: 123
        }
      },
      {
        id: 716,
        name: 'xerneas',
        types: ['fairy'],
        weight: 2150,
        height: 30,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png',
        stats: {
          hp: 126,
          attack: 131,
          defense: 95,
          specialAttack: 131,
          specialDefense: 98,
          speed: 99
        }
      },
      {
        id: 717,
        name: 'yveltal',
        types: ['dark', 'flying'],
        weight: 2030,
        height: 58,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png',
        stats: {
          hp: 126,
          attack: 131,
          defense: 95,
          specialAttack: 131,
          specialDefense: 98,
          speed: 99
        }
      },
      {
        id: 718,
        name: 'zygarde',
        types: ['dragon', 'ground'],
        weight: 3050,
        height: 50,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png',
        stats: {
          hp: 108,
          attack: 100,
          defense: 121,
          specialAttack: 81,
          specialDefense: 95,
          speed: 95
        }
      },
      {
        id: 719,
        name: 'diancie',
        types: ['rock', 'fairy'],
        weight: 88,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png',
        stats: {
          hp: 50,
          attack: 100,
          defense: 150,
          specialAttack: 100,
          specialDefense: 150,
          speed: 50
        }
      },
      {
        id: 720,
        name: 'hoopa',
        types: ['psychic', 'ghost'],
        weight: 90,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png',
        stats: {
          hp: 80,
          attack: 110,
          defense: 60,
          specialAttack: 150,
          specialDefense: 130,
          speed: 70
        }
      },
      {
        id: 721,
        name: 'volcanion',
        types: ['fire', 'water'],
        weight: 1950,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png',
        stats: {
          hp: 80,
          attack: 110,
          defense: 120,
          specialAttack: 130,
          specialDefense: 90,
          speed: 70
        }
      },
      {
        id: 722,
        name: 'rowlet',
        types: ['grass', 'flying'],
        weight: 15,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png',
        stats: {
          hp: 68,
          attack: 55,
          defense: 55,
          specialAttack: 50,
          specialDefense: 50,
          speed: 42
        }
      },
      {
        id: 723,
        name: 'dartrix',
        types: ['grass', 'flying'],
        weight: 160,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png',
        stats: {
          hp: 78,
          attack: 75,
          defense: 75,
          specialAttack: 70,
          specialDefense: 70,
          speed: 52
        }
      },
      {
        id: 724,
        name: 'decidueye',
        types: ['grass', 'ghost'],
        weight: 366,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png',
        stats: {
          hp: 78,
          attack: 107,
          defense: 75,
          specialAttack: 100,
          specialDefense: 100,
          speed: 70
        }
      },
      {
        id: 725,
        name: 'litten',
        types: ['fire'],
        weight: 43,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png',
        stats: {
          hp: 45,
          attack: 65,
          defense: 40,
          specialAttack: 60,
          specialDefense: 40,
          speed: 70
        }
      },
      {
        id: 726,
        name: 'torracat',
        types: ['fire'],
        weight: 250,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png',
        stats: {
          hp: 65,
          attack: 85,
          defense: 50,
          specialAttack: 80,
          specialDefense: 50,
          speed: 90
        }
      },
      {
        id: 727,
        name: 'incineroar',
        types: ['fire', 'dark'],
        weight: 830,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png',
        stats: {
          hp: 95,
          attack: 115,
          defense: 90,
          specialAttack: 80,
          specialDefense: 90,
          speed: 60
        }
      },
      {
        id: 728,
        name: 'popplio',
        types: ['water'],
        weight: 75,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png',
        stats: {
          hp: 50,
          attack: 54,
          defense: 54,
          specialAttack: 66,
          specialDefense: 56,
          speed: 40
        }
      },
      {
        id: 729,
        name: 'brionne',
        types: ['water'],
        weight: 175,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png',
        stats: {
          hp: 60,
          attack: 69,
          defense: 69,
          specialAttack: 91,
          specialDefense: 81,
          speed: 50
        }
      },
      {
        id: 730,
        name: 'primarina',
        types: ['water', 'fairy'],
        weight: 440,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png',
        stats: {
          hp: 80,
          attack: 74,
          defense: 74,
          specialAttack: 126,
          specialDefense: 116,
          speed: 60
        }
      },
      {
        id: 731,
        name: 'pikipek',
        types: ['normal', 'flying'],
        weight: 12,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png',
        stats: {
          hp: 35,
          attack: 75,
          defense: 30,
          specialAttack: 30,
          specialDefense: 30,
          speed: 65
        }
      },
      {
        id: 732,
        name: 'trumbeak',
        types: ['normal', 'flying'],
        weight: 148,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png',
        stats: {
          hp: 55,
          attack: 85,
          defense: 50,
          specialAttack: 40,
          specialDefense: 50,
          speed: 75
        }
      },
      {
        id: 733,
        name: 'toucannon',
        types: ['normal', 'flying'],
        weight: 260,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png',
        stats: {
          hp: 80,
          attack: 120,
          defense: 75,
          specialAttack: 75,
          specialDefense: 75,
          speed: 60
        }
      },
      {
        id: 734,
        name: 'yungoos',
        types: ['normal'],
        weight: 60,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png',
        stats: {
          hp: 48,
          attack: 70,
          defense: 30,
          specialAttack: 30,
          specialDefense: 30,
          speed: 45
        }
      },
      {
        id: 735,
        name: 'gumshoos',
        types: ['normal'],
        weight: 142,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png',
        stats: {
          hp: 88,
          attack: 110,
          defense: 60,
          specialAttack: 55,
          specialDefense: 60,
          speed: 45
        }
      },
      {
        id: 736,
        name: 'grubbin',
        types: ['bug'],
        weight: 44,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png',
        stats: {
          hp: 47,
          attack: 62,
          defense: 45,
          specialAttack: 55,
          specialDefense: 45,
          speed: 46
        }
      },
      {
        id: 737,
        name: 'charjabug',
        types: ['bug', 'electric'],
        weight: 105,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png',
        stats: {
          hp: 57,
          attack: 82,
          defense: 95,
          specialAttack: 55,
          specialDefense: 75,
          speed: 36
        }
      },
      {
        id: 738,
        name: 'vikavolt',
        types: ['bug', 'electric'],
        weight: 450,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png',
        stats: {
          hp: 77,
          attack: 70,
          defense: 90,
          specialAttack: 145,
          specialDefense: 75,
          speed: 43
        }
      },
      {
        id: 739,
        name: 'crabrawler',
        types: ['fighting'],
        weight: 70,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png',
        stats: {
          hp: 47,
          attack: 82,
          defense: 57,
          specialAttack: 42,
          specialDefense: 47,
          speed: 63
        }
      },
      {
        id: 740,
        name: 'crabominable',
        types: ['fighting', 'ice'],
        weight: 1800,
        height: 17,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png',
        stats: {
          hp: 97,
          attack: 132,
          defense: 77,
          specialAttack: 62,
          specialDefense: 67,
          speed: 43
        }
      },
      {
        id: 741,
        name: 'oricorio-baile',
        types: ['fire', 'flying'],
        weight: 34,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png',
        stats: {
          hp: 75,
          attack: 70,
          defense: 70,
          specialAttack: 98,
          specialDefense: 70,
          speed: 93
        }
      },
      {
        id: 742,
        name: 'cutiefly',
        types: ['bug', 'fairy'],
        weight: 2,
        height: 1,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 40,
          specialAttack: 55,
          specialDefense: 40,
          speed: 84
        }
      },
      {
        id: 743,
        name: 'ribombee',
        types: ['bug', 'fairy'],
        weight: 5,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png',
        stats: {
          hp: 60,
          attack: 55,
          defense: 60,
          specialAttack: 95,
          specialDefense: 70,
          speed: 124
        }
      },
      {
        id: 744,
        name: 'rockruff',
        types: ['rock'],
        weight: 92,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png',
        stats: {
          hp: 45,
          attack: 65,
          defense: 40,
          specialAttack: 30,
          specialDefense: 40,
          speed: 60
        }
      },
      {
        id: 745,
        name: 'lycanroc-midday',
        types: ['rock'],
        weight: 250,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png',
        stats: {
          hp: 75,
          attack: 115,
          defense: 65,
          specialAttack: 55,
          specialDefense: 65,
          speed: 112
        }
      },
      {
        id: 746,
        name: 'wishiwashi-solo',
        types: ['water'],
        weight: 3,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png',
        stats: {
          hp: 45,
          attack: 20,
          defense: 20,
          specialAttack: 25,
          specialDefense: 25,
          speed: 40
        }
      },
      {
        id: 747,
        name: 'mareanie',
        types: ['poison', 'water'],
        weight: 80,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png',
        stats: {
          hp: 50,
          attack: 53,
          defense: 62,
          specialAttack: 43,
          specialDefense: 52,
          speed: 45
        }
      },
      {
        id: 748,
        name: 'toxapex',
        types: ['poison', 'water'],
        weight: 145,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png',
        stats: {
          hp: 50,
          attack: 63,
          defense: 152,
          specialAttack: 53,
          specialDefense: 142,
          speed: 35
        }
      },
      {
        id: 749,
        name: 'mudbray',
        types: ['ground'],
        weight: 1100,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png',
        stats: {
          hp: 70,
          attack: 100,
          defense: 70,
          specialAttack: 45,
          specialDefense: 55,
          speed: 45
        }
      },
      {
        id: 750,
        name: 'mudsdale',
        types: ['ground'],
        weight: 9200,
        height: 25,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png',
        stats: {
          hp: 100,
          attack: 125,
          defense: 100,
          specialAttack: 55,
          specialDefense: 85,
          speed: 35
        }
      },
      {
        id: 751,
        name: 'dewpider',
        types: ['water', 'bug'],
        weight: 40,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png',
        stats: {
          hp: 38,
          attack: 40,
          defense: 52,
          specialAttack: 40,
          specialDefense: 72,
          speed: 27
        }
      },
      {
        id: 752,
        name: 'araquanid',
        types: ['water', 'bug'],
        weight: 820,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png',
        stats: {
          hp: 68,
          attack: 70,
          defense: 92,
          specialAttack: 50,
          specialDefense: 132,
          speed: 42
        }
      },
      {
        id: 753,
        name: 'fomantis',
        types: ['grass'],
        weight: 15,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png',
        stats: {
          hp: 40,
          attack: 55,
          defense: 35,
          specialAttack: 50,
          specialDefense: 35,
          speed: 35
        }
      },
      {
        id: 754,
        name: 'lurantis',
        types: ['grass'],
        weight: 185,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png',
        stats: {
          hp: 70,
          attack: 105,
          defense: 90,
          specialAttack: 80,
          specialDefense: 90,
          speed: 45
        }
      },
      {
        id: 755,
        name: 'morelull',
        types: ['grass', 'fairy'],
        weight: 15,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png',
        stats: {
          hp: 40,
          attack: 35,
          defense: 55,
          specialAttack: 65,
          specialDefense: 75,
          speed: 15
        }
      },
      {
        id: 756,
        name: 'shiinotic',
        types: ['grass', 'fairy'],
        weight: 115,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png',
        stats: {
          hp: 60,
          attack: 45,
          defense: 80,
          specialAttack: 90,
          specialDefense: 100,
          speed: 30
        }
      },
      {
        id: 757,
        name: 'salandit',
        types: ['poison', 'fire'],
        weight: 48,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png',
        stats: {
          hp: 48,
          attack: 44,
          defense: 40,
          specialAttack: 71,
          specialDefense: 40,
          speed: 77
        }
      },
      {
        id: 758,
        name: 'salazzle',
        types: ['poison', 'fire'],
        weight: 222,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png',
        stats: {
          hp: 68,
          attack: 64,
          defense: 60,
          specialAttack: 111,
          specialDefense: 60,
          speed: 117
        }
      },
      {
        id: 759,
        name: 'stufful',
        types: ['normal', 'fighting'],
        weight: 68,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png',
        stats: {
          hp: 70,
          attack: 75,
          defense: 50,
          specialAttack: 45,
          specialDefense: 50,
          speed: 50
        }
      },
      {
        id: 760,
        name: 'bewear',
        types: ['normal', 'fighting'],
        weight: 1350,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png',
        stats: {
          hp: 120,
          attack: 125,
          defense: 80,
          specialAttack: 55,
          specialDefense: 60,
          speed: 60
        }
      },
      {
        id: 761,
        name: 'bounsweet',
        types: ['grass'],
        weight: 32,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png',
        stats: {
          hp: 42,
          attack: 30,
          defense: 38,
          specialAttack: 30,
          specialDefense: 38,
          speed: 32
        }
      },
      {
        id: 762,
        name: 'steenee',
        types: ['grass'],
        weight: 82,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png',
        stats: {
          hp: 52,
          attack: 40,
          defense: 48,
          specialAttack: 40,
          specialDefense: 48,
          speed: 62
        }
      },
      {
        id: 763,
        name: 'tsareena',
        types: ['grass'],
        weight: 214,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png',
        stats: {
          hp: 72,
          attack: 120,
          defense: 98,
          specialAttack: 50,
          specialDefense: 98,
          speed: 72
        }
      },
      {
        id: 764,
        name: 'comfey',
        types: ['fairy'],
        weight: 3,
        height: 1,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png',
        stats: {
          hp: 51,
          attack: 52,
          defense: 90,
          specialAttack: 82,
          specialDefense: 110,
          speed: 100
        }
      },
      {
        id: 765,
        name: 'oranguru',
        types: ['normal', 'psychic'],
        weight: 760,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png',
        stats: {
          hp: 90,
          attack: 60,
          defense: 80,
          specialAttack: 90,
          specialDefense: 110,
          speed: 60
        }
      },
      {
        id: 766,
        name: 'passimian',
        types: ['fighting'],
        weight: 828,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png',
        stats: {
          hp: 100,
          attack: 120,
          defense: 90,
          specialAttack: 40,
          specialDefense: 60,
          speed: 80
        }
      },
      {
        id: 767,
        name: 'wimpod',
        types: ['bug', 'water'],
        weight: 120,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png',
        stats: {
          hp: 25,
          attack: 35,
          defense: 40,
          specialAttack: 20,
          specialDefense: 30,
          speed: 80
        }
      },
      {
        id: 768,
        name: 'golisopod',
        types: ['bug', 'water'],
        weight: 1080,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png',
        stats: {
          hp: 75,
          attack: 125,
          defense: 140,
          specialAttack: 60,
          specialDefense: 90,
          speed: 40
        }
      },
      {
        id: 769,
        name: 'sandygast',
        types: ['ghost', 'ground'],
        weight: 700,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png',
        stats: {
          hp: 55,
          attack: 55,
          defense: 80,
          specialAttack: 70,
          specialDefense: 45,
          speed: 15
        }
      },
      {
        id: 770,
        name: 'palossand',
        types: ['ghost', 'ground'],
        weight: 2500,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png',
        stats: {
          hp: 85,
          attack: 75,
          defense: 110,
          specialAttack: 100,
          specialDefense: 75,
          speed: 35
        }
      },
      {
        id: 771,
        name: 'pyukumuku',
        types: ['water'],
        weight: 12,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png',
        stats: {
          hp: 55,
          attack: 60,
          defense: 130,
          specialAttack: 30,
          specialDefense: 130,
          speed: 5
        }
      },
      {
        id: 772,
        name: 'type-null',
        types: ['normal'],
        weight: 1205,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png',
        stats: {
          hp: 95,
          attack: 95,
          defense: 95,
          specialAttack: 95,
          specialDefense: 95,
          speed: 59
        }
      },
      {
        id: 773,
        name: 'silvally',
        types: ['normal'],
        weight: 1005,
        height: 23,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png',
        stats: {
          hp: 95,
          attack: 95,
          defense: 95,
          specialAttack: 95,
          specialDefense: 95,
          speed: 95
        }
      },
      {
        id: 774,
        name: 'minior-red-meteor',
        types: ['rock', 'flying'],
        weight: 400,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png',
        stats: {
          hp: 60,
          attack: 60,
          defense: 100,
          specialAttack: 60,
          specialDefense: 100,
          speed: 60
        }
      },
      {
        id: 775,
        name: 'komala',
        types: ['normal'],
        weight: 199,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png',
        stats: {
          hp: 65,
          attack: 115,
          defense: 65,
          specialAttack: 75,
          specialDefense: 95,
          speed: 65
        }
      },
      {
        id: 776,
        name: 'turtonator',
        types: ['fire', 'dragon'],
        weight: 2120,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png',
        stats: {
          hp: 60,
          attack: 78,
          defense: 135,
          specialAttack: 91,
          specialDefense: 85,
          speed: 36
        }
      },
      {
        id: 777,
        name: 'togedemaru',
        types: ['electric', 'steel'],
        weight: 33,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png',
        stats: {
          hp: 65,
          attack: 98,
          defense: 63,
          specialAttack: 40,
          specialDefense: 73,
          speed: 96
        }
      },
      {
        id: 778,
        name: 'mimikyu-disguised',
        types: ['ghost', 'fairy'],
        weight: 7,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
        stats: {
          hp: 55,
          attack: 90,
          defense: 80,
          specialAttack: 50,
          specialDefense: 105,
          speed: 96
        }
      },
      {
        id: 779,
        name: 'bruxish',
        types: ['water', 'psychic'],
        weight: 190,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png',
        stats: {
          hp: 68,
          attack: 105,
          defense: 70,
          specialAttack: 70,
          specialDefense: 70,
          speed: 92
        }
      },
      {
        id: 780,
        name: 'drampa',
        types: ['normal', 'dragon'],
        weight: 1850,
        height: 30,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png',
        stats: {
          hp: 78,
          attack: 60,
          defense: 85,
          specialAttack: 135,
          specialDefense: 91,
          speed: 36
        }
      },
      {
        id: 781,
        name: 'dhelmise',
        types: ['ghost', 'grass'],
        weight: 2100,
        height: 39,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png',
        stats: {
          hp: 70,
          attack: 131,
          defense: 100,
          specialAttack: 86,
          specialDefense: 90,
          speed: 40
        }
      },
      {
        id: 782,
        name: 'jangmo-o',
        types: ['dragon'],
        weight: 297,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png',
        stats: {
          hp: 45,
          attack: 55,
          defense: 65,
          specialAttack: 45,
          specialDefense: 45,
          speed: 45
        }
      },
      {
        id: 783,
        name: 'hakamo-o',
        types: ['dragon', 'fighting'],
        weight: 470,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png',
        stats: {
          hp: 55,
          attack: 75,
          defense: 90,
          specialAttack: 65,
          specialDefense: 70,
          speed: 65
        }
      },
      {
        id: 784,
        name: 'kommo-o',
        types: ['dragon', 'fighting'],
        weight: 782,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png',
        stats: {
          hp: 75,
          attack: 110,
          defense: 125,
          specialAttack: 100,
          specialDefense: 105,
          speed: 85
        }
      },
      {
        id: 785,
        name: 'tapu-koko',
        types: ['electric', 'fairy'],
        weight: 205,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png',
        stats: {
          hp: 70,
          attack: 115,
          defense: 85,
          specialAttack: 95,
          specialDefense: 75,
          speed: 130
        }
      },
      {
        id: 786,
        name: 'tapu-lele',
        types: ['psychic', 'fairy'],
        weight: 186,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png',
        stats: {
          hp: 70,
          attack: 85,
          defense: 75,
          specialAttack: 130,
          specialDefense: 115,
          speed: 95
        }
      },
      {
        id: 787,
        name: 'tapu-bulu',
        types: ['grass', 'fairy'],
        weight: 455,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png',
        stats: {
          hp: 70,
          attack: 130,
          defense: 115,
          specialAttack: 85,
          specialDefense: 95,
          speed: 75
        }
      },
      {
        id: 788,
        name: 'tapu-fini',
        types: ['water', 'fairy'],
        weight: 212,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png',
        stats: {
          hp: 70,
          attack: 75,
          defense: 115,
          specialAttack: 95,
          specialDefense: 130,
          speed: 85
        }
      },
      {
        id: 789,
        name: 'cosmog',
        types: ['psychic'],
        weight: 1,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png',
        stats: {
          hp: 43,
          attack: 29,
          defense: 31,
          specialAttack: 29,
          specialDefense: 31,
          speed: 37
        }
      },
      {
        id: 790,
        name: 'cosmoem',
        types: ['psychic'],
        weight: 9999,
        height: 1,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png',
        stats: {
          hp: 43,
          attack: 29,
          defense: 131,
          specialAttack: 29,
          specialDefense: 131,
          speed: 37
        }
      },
      {
        id: 791,
        name: 'solgaleo',
        types: ['psychic', 'steel'],
        weight: 2300,
        height: 34,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png',
        stats: {
          hp: 137,
          attack: 137,
          defense: 107,
          specialAttack: 113,
          specialDefense: 89,
          speed: 97
        }
      },
      {
        id: 792,
        name: 'lunala',
        types: ['psychic', 'ghost'],
        weight: 1200,
        height: 40,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png',
        stats: {
          hp: 137,
          attack: 113,
          defense: 89,
          specialAttack: 137,
          specialDefense: 107,
          speed: 97
        }
      },
      {
        id: 793,
        name: 'nihilego',
        types: ['rock', 'poison'],
        weight: 555,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png',
        stats: {
          hp: 109,
          attack: 53,
          defense: 47,
          specialAttack: 127,
          specialDefense: 131,
          speed: 103
        }
      },
      {
        id: 794,
        name: 'buzzwole',
        types: ['bug', 'fighting'],
        weight: 3336,
        height: 24,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png',
        stats: {
          hp: 107,
          attack: 139,
          defense: 139,
          specialAttack: 53,
          specialDefense: 53,
          speed: 79
        }
      },
      {
        id: 795,
        name: 'pheromosa',
        types: ['bug', 'fighting'],
        weight: 250,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png',
        stats: {
          hp: 71,
          attack: 137,
          defense: 37,
          specialAttack: 137,
          specialDefense: 37,
          speed: 151
        }
      },
      {
        id: 796,
        name: 'xurkitree',
        types: ['electric'],
        weight: 1000,
        height: 38,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png',
        stats: {
          hp: 83,
          attack: 89,
          defense: 71,
          specialAttack: 173,
          specialDefense: 71,
          speed: 83
        }
      },
      {
        id: 797,
        name: 'celesteela',
        types: ['steel', 'flying'],
        weight: 9999,
        height: 92,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png',
        stats: {
          hp: 97,
          attack: 101,
          defense: 103,
          specialAttack: 107,
          specialDefense: 101,
          speed: 61
        }
      },
      {
        id: 798,
        name: 'kartana',
        types: ['grass', 'steel'],
        weight: 1,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png',
        stats: {
          hp: 59,
          attack: 181,
          defense: 131,
          specialAttack: 59,
          specialDefense: 31,
          speed: 109
        }
      },
      {
        id: 799,
        name: 'guzzlord',
        types: ['dark', 'dragon'],
        weight: 8880,
        height: 55,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png',
        stats: {
          hp: 223,
          attack: 101,
          defense: 53,
          specialAttack: 97,
          specialDefense: 53,
          speed: 43
        }
      },
      {
        id: 800,
        name: 'necrozma',
        types: ['psychic'],
        weight: 2300,
        height: 24,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png',
        stats: {
          hp: 97,
          attack: 107,
          defense: 101,
          specialAttack: 127,
          specialDefense: 89,
          speed: 79
        }
      },
      {
        id: 801,
        name: 'magearna',
        types: ['steel', 'fairy'],
        weight: 805,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png',
        stats: {
          hp: 80,
          attack: 95,
          defense: 115,
          specialAttack: 130,
          specialDefense: 115,
          speed: 65
        }
      },
      {
        id: 802,
        name: 'marshadow',
        types: ['fighting', 'ghost'],
        weight: 222,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png',
        stats: {
          hp: 90,
          attack: 125,
          defense: 80,
          specialAttack: 90,
          specialDefense: 90,
          speed: 125
        }
      },
      {
        id: 803,
        name: 'poipole',
        types: ['poison'],
        weight: 18,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png',
        stats: {
          hp: 67,
          attack: 73,
          defense: 67,
          specialAttack: 73,
          specialDefense: 67,
          speed: 73
        }
      },
      {
        id: 804,
        name: 'naganadel',
        types: ['poison', 'dragon'],
        weight: 1500,
        height: 36,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png',
        stats: {
          hp: 73,
          attack: 73,
          defense: 73,
          specialAttack: 127,
          specialDefense: 73,
          speed: 121
        }
      },
      {
        id: 805,
        name: 'stakataka',
        types: ['rock', 'steel'],
        weight: 8200,
        height: 55,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png',
        stats: {
          hp: 61,
          attack: 131,
          defense: 211,
          specialAttack: 53,
          specialDefense: 101,
          speed: 13
        }
      },
      {
        id: 806,
        name: 'blacephalon',
        types: ['fire', 'ghost'],
        weight: 130,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png',
        stats: {
          hp: 53,
          attack: 127,
          defense: 53,
          specialAttack: 151,
          specialDefense: 79,
          speed: 107
        }
      },
      {
        id: 807,
        name: 'zeraora',
        types: ['electric'],
        weight: 445,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png',
        stats: {
          hp: 88,
          attack: 112,
          defense: 75,
          specialAttack: 102,
          specialDefense: 80,
          speed: 143
        }
      },
      {
        id: 808,
        name: 'meltan',
        types: ['steel'],
        weight: 80,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png',
        stats: {
          hp: 46,
          attack: 65,
          defense: 65,
          specialAttack: 55,
          specialDefense: 35,
          speed: 34
        }
      },
      {
        id: 809,
        name: 'melmetal',
        types: ['steel'],
        weight: 8000,
        height: 25,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png',
        stats: {
          hp: 135,
          attack: 143,
          defense: 143,
          specialAttack: 80,
          specialDefense: 65,
          speed: 34
        }
      },
      {
        id: 810,
        name: 'grookey',
        types: ['grass'],
        weight: 50,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png',
        stats: {
          hp: 50,
          attack: 65,
          defense: 50,
          specialAttack: 40,
          specialDefense: 40,
          speed: 65
        }
      },
      {
        id: 811,
        name: 'thwackey',
        types: ['grass'],
        weight: 140,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png',
        stats: {
          hp: 70,
          attack: 85,
          defense: 70,
          specialAttack: 55,
          specialDefense: 60,
          speed: 80
        }
      },
      {
        id: 812,
        name: 'rillaboom',
        types: ['grass'],
        weight: 900,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png',
        stats: {
          hp: 100,
          attack: 125,
          defense: 90,
          specialAttack: 60,
          specialDefense: 70,
          speed: 85
        }
      },
      {
        id: 813,
        name: 'scorbunny',
        types: ['fire'],
        weight: 45,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png',
        stats: {
          hp: 50,
          attack: 71,
          defense: 40,
          specialAttack: 40,
          specialDefense: 40,
          speed: 69
        }
      },
      {
        id: 814,
        name: 'raboot',
        types: ['fire'],
        weight: 90,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png',
        stats: {
          hp: 65,
          attack: 86,
          defense: 60,
          specialAttack: 55,
          specialDefense: 60,
          speed: 94
        }
      },
      {
        id: 815,
        name: 'cinderace',
        types: ['fire'],
        weight: 330,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png',
        stats: {
          hp: 80,
          attack: 116,
          defense: 75,
          specialAttack: 65,
          specialDefense: 75,
          speed: 119
        }
      },
      {
        id: 816,
        name: 'sobble',
        types: ['water'],
        weight: 40,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png',
        stats: {
          hp: 50,
          attack: 40,
          defense: 40,
          specialAttack: 70,
          specialDefense: 40,
          speed: 70
        }
      },
      {
        id: 817,
        name: 'drizzile',
        types: ['water'],
        weight: 115,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png',
        stats: {
          hp: 65,
          attack: 60,
          defense: 55,
          specialAttack: 95,
          specialDefense: 55,
          speed: 90
        }
      },
      {
        id: 818,
        name: 'inteleon',
        types: ['water'],
        weight: 452,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png',
        stats: {
          hp: 70,
          attack: 85,
          defense: 65,
          specialAttack: 125,
          specialDefense: 65,
          speed: 120
        }
      },
      {
        id: 819,
        name: 'skwovet',
        types: ['normal'],
        weight: 25,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png',
        stats: {
          hp: 70,
          attack: 55,
          defense: 55,
          specialAttack: 35,
          specialDefense: 35,
          speed: 25
        }
      },
      {
        id: 820,
        name: 'greedent',
        types: ['normal'],
        weight: 60,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png',
        stats: {
          hp: 120,
          attack: 95,
          defense: 95,
          specialAttack: 55,
          specialDefense: 75,
          speed: 20
        }
      },
      {
        id: 821,
        name: 'rookidee',
        types: ['flying'],
        weight: 18,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png',
        stats: {
          hp: 38,
          attack: 47,
          defense: 35,
          specialAttack: 33,
          specialDefense: 35,
          speed: 57
        }
      },
      {
        id: 822,
        name: 'corvisquire',
        types: ['flying'],
        weight: 160,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png',
        stats: {
          hp: 68,
          attack: 67,
          defense: 55,
          specialAttack: 43,
          specialDefense: 55,
          speed: 77
        }
      },
      {
        id: 823,
        name: 'corviknight',
        types: ['flying', 'steel'],
        weight: 750,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
        stats: {
          hp: 98,
          attack: 87,
          defense: 105,
          specialAttack: 53,
          specialDefense: 85,
          speed: 67
        }
      },
      {
        id: 824,
        name: 'blipbug',
        types: ['bug'],
        weight: 80,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png',
        stats: {
          hp: 25,
          attack: 20,
          defense: 20,
          specialAttack: 25,
          specialDefense: 45,
          speed: 45
        }
      },
      {
        id: 825,
        name: 'dottler',
        types: ['bug', 'psychic'],
        weight: 195,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png',
        stats: {
          hp: 50,
          attack: 35,
          defense: 80,
          specialAttack: 50,
          specialDefense: 90,
          speed: 30
        }
      },
      {
        id: 826,
        name: 'orbeetle',
        types: ['bug', 'psychic'],
        weight: 408,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png',
        stats: {
          hp: 60,
          attack: 45,
          defense: 110,
          specialAttack: 80,
          specialDefense: 120,
          speed: 90
        }
      },
      {
        id: 827,
        name: 'nickit',
        types: ['dark'],
        weight: 89,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png',
        stats: {
          hp: 40,
          attack: 28,
          defense: 28,
          specialAttack: 47,
          specialDefense: 52,
          speed: 50
        }
      },
      {
        id: 828,
        name: 'thievul',
        types: ['dark'],
        weight: 199,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png',
        stats: {
          hp: 70,
          attack: 58,
          defense: 58,
          specialAttack: 87,
          specialDefense: 92,
          speed: 90
        }
      },
      {
        id: 829,
        name: 'gossifleur',
        types: ['grass'],
        weight: 22,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png',
        stats: {
          hp: 40,
          attack: 40,
          defense: 60,
          specialAttack: 40,
          specialDefense: 60,
          speed: 10
        }
      },
      {
        id: 830,
        name: 'eldegoss',
        types: ['grass'],
        weight: 25,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png',
        stats: {
          hp: 60,
          attack: 50,
          defense: 90,
          specialAttack: 80,
          specialDefense: 120,
          speed: 60
        }
      },
      {
        id: 831,
        name: 'wooloo',
        types: ['normal'],
        weight: 60,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png',
        stats: {
          hp: 42,
          attack: 40,
          defense: 55,
          specialAttack: 40,
          specialDefense: 45,
          speed: 48
        }
      },
      {
        id: 832,
        name: 'dubwool',
        types: ['normal'],
        weight: 430,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png',
        stats: {
          hp: 72,
          attack: 80,
          defense: 100,
          specialAttack: 60,
          specialDefense: 90,
          speed: 88
        }
      },
      {
        id: 833,
        name: 'chewtle',
        types: ['water'],
        weight: 85,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png',
        stats: {
          hp: 50,
          attack: 64,
          defense: 50,
          specialAttack: 38,
          specialDefense: 38,
          speed: 44
        }
      },
      {
        id: 834,
        name: 'drednaw',
        types: ['water', 'rock'],
        weight: 1155,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png',
        stats: {
          hp: 90,
          attack: 115,
          defense: 90,
          specialAttack: 48,
          specialDefense: 68,
          speed: 74
        }
      },
      {
        id: 835,
        name: 'yamper',
        types: ['electric'],
        weight: 135,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png',
        stats: {
          hp: 59,
          attack: 45,
          defense: 50,
          specialAttack: 40,
          specialDefense: 50,
          speed: 26
        }
      },
      {
        id: 836,
        name: 'boltund',
        types: ['electric'],
        weight: 340,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png',
        stats: {
          hp: 69,
          attack: 90,
          defense: 60,
          specialAttack: 90,
          specialDefense: 60,
          speed: 121
        }
      },
      {
        id: 837,
        name: 'rolycoly',
        types: ['rock'],
        weight: 120,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png',
        stats: {
          hp: 30,
          attack: 40,
          defense: 50,
          specialAttack: 40,
          specialDefense: 50,
          speed: 30
        }
      },
      {
        id: 838,
        name: 'carkol',
        types: ['rock', 'fire'],
        weight: 780,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png',
        stats: {
          hp: 80,
          attack: 60,
          defense: 90,
          specialAttack: 60,
          specialDefense: 70,
          speed: 50
        }
      },
      {
        id: 839,
        name: 'coalossal',
        types: ['rock', 'fire'],
        weight: 3105,
        height: 28,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png',
        stats: {
          hp: 110,
          attack: 80,
          defense: 120,
          specialAttack: 80,
          specialDefense: 90,
          speed: 30
        }
      },
      {
        id: 840,
        name: 'applin',
        types: ['grass', 'dragon'],
        weight: 5,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png',
        stats: {
          hp: 40,
          attack: 40,
          defense: 80,
          specialAttack: 40,
          specialDefense: 40,
          speed: 20
        }
      },
      {
        id: 841,
        name: 'flapple',
        types: ['grass', 'dragon'],
        weight: 10,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png',
        stats: {
          hp: 70,
          attack: 110,
          defense: 80,
          specialAttack: 95,
          specialDefense: 60,
          speed: 70
        }
      },
      {
        id: 842,
        name: 'appletun',
        types: ['grass', 'dragon'],
        weight: 130,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
        stats: {
          hp: 110,
          attack: 85,
          defense: 80,
          specialAttack: 100,
          specialDefense: 80,
          speed: 30
        }
      },
      {
        id: 843,
        name: 'silicobra',
        types: ['ground'],
        weight: 76,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png',
        stats: {
          hp: 52,
          attack: 57,
          defense: 75,
          specialAttack: 35,
          specialDefense: 50,
          speed: 46
        }
      },
      {
        id: 844,
        name: 'sandaconda',
        types: ['ground'],
        weight: 655,
        height: 38,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png',
        stats: {
          hp: 72,
          attack: 107,
          defense: 125,
          specialAttack: 65,
          specialDefense: 70,
          speed: 71
        }
      },
      {
        id: 845,
        name: 'cramorant',
        types: ['flying', 'water'],
        weight: 180,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png',
        stats: {
          hp: 70,
          attack: 85,
          defense: 55,
          specialAttack: 85,
          specialDefense: 95,
          speed: 85
        }
      },
      {
        id: 846,
        name: 'arrokuda',
        types: ['water'],
        weight: 10,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png',
        stats: {
          hp: 41,
          attack: 63,
          defense: 40,
          specialAttack: 40,
          specialDefense: 30,
          speed: 66
        }
      },
      {
        id: 847,
        name: 'barraskewda',
        types: ['water'],
        weight: 300,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png',
        stats: {
          hp: 61,
          attack: 123,
          defense: 60,
          specialAttack: 60,
          specialDefense: 50,
          speed: 136
        }
      },
      {
        id: 848,
        name: 'toxel',
        types: ['electric', 'poison'],
        weight: 110,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png',
        stats: {
          hp: 40,
          attack: 38,
          defense: 35,
          specialAttack: 54,
          specialDefense: 35,
          speed: 40
        }
      },
      {
        id: 849,
        name: 'toxtricity-amped',
        types: ['electric', 'poison'],
        weight: 400,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',
        stats: {
          hp: 75,
          attack: 98,
          defense: 70,
          specialAttack: 114,
          specialDefense: 70,
          speed: 75
        }
      },
      {
        id: 850,
        name: 'sizzlipede',
        types: ['fire', 'bug'],
        weight: 10,
        height: 7,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png',
        stats: {
          hp: 50,
          attack: 65,
          defense: 45,
          specialAttack: 50,
          specialDefense: 50,
          speed: 45
        }
      },
      {
        id: 851,
        name: 'centiskorch',
        types: ['fire', 'bug'],
        weight: 1200,
        height: 30,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png',
        stats: {
          hp: 100,
          attack: 115,
          defense: 65,
          specialAttack: 90,
          specialDefense: 90,
          speed: 65
        }
      },
      {
        id: 852,
        name: 'clobbopus',
        types: ['fighting'],
        weight: 40,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png',
        stats: {
          hp: 50,
          attack: 68,
          defense: 60,
          specialAttack: 50,
          specialDefense: 50,
          speed: 32
        }
      },
      {
        id: 853,
        name: 'grapploct',
        types: ['fighting'],
        weight: 390,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png',
        stats: {
          hp: 80,
          attack: 118,
          defense: 90,
          specialAttack: 70,
          specialDefense: 80,
          speed: 42
        }
      },
      {
        id: 854,
        name: 'sinistea',
        types: ['ghost'],
        weight: 2,
        height: 1,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png',
        stats: {
          hp: 40,
          attack: 45,
          defense: 45,
          specialAttack: 74,
          specialDefense: 54,
          speed: 50
        }
      },
      {
        id: 855,
        name: 'polteageist',
        types: ['ghost'],
        weight: 4,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png',
        stats: {
          hp: 60,
          attack: 65,
          defense: 65,
          specialAttack: 134,
          specialDefense: 114,
          speed: 70
        }
      },
      {
        id: 856,
        name: 'hatenna',
        types: ['psychic'],
        weight: 34,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png',
        stats: {
          hp: 42,
          attack: 30,
          defense: 45,
          specialAttack: 56,
          specialDefense: 53,
          speed: 39
        }
      },
      {
        id: 857,
        name: 'hattrem',
        types: ['psychic'],
        weight: 48,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png',
        stats: {
          hp: 57,
          attack: 40,
          defense: 65,
          specialAttack: 86,
          specialDefense: 73,
          speed: 49
        }
      },
      {
        id: 858,
        name: 'hatterene',
        types: ['psychic', 'fairy'],
        weight: 51,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png',
        stats: {
          hp: 57,
          attack: 90,
          defense: 95,
          specialAttack: 136,
          specialDefense: 103,
          speed: 29
        }
      },
      {
        id: 859,
        name: 'impidimp',
        types: ['dark', 'fairy'],
        weight: 55,
        height: 4,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png',
        stats: {
          hp: 45,
          attack: 45,
          defense: 30,
          specialAttack: 55,
          specialDefense: 40,
          speed: 50
        }
      },
      {
        id: 860,
        name: 'morgrem',
        types: ['dark', 'fairy'],
        weight: 125,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png',
        stats: {
          hp: 65,
          attack: 60,
          defense: 45,
          specialAttack: 75,
          specialDefense: 55,
          speed: 70
        }
      },
      {
        id: 861,
        name: 'grimmsnarl',
        types: ['dark', 'fairy'],
        weight: 610,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png',
        stats: {
          hp: 95,
          attack: 120,
          defense: 65,
          specialAttack: 95,
          specialDefense: 75,
          speed: 60
        }
      },
      {
        id: 862,
        name: 'obstagoon',
        types: ['dark', 'normal'],
        weight: 460,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png',
        stats: {
          hp: 93,
          attack: 90,
          defense: 101,
          specialAttack: 60,
          specialDefense: 81,
          speed: 95
        }
      },
      {
        id: 863,
        name: 'perrserker',
        types: ['steel'],
        weight: 280,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png',
        stats: {
          hp: 70,
          attack: 110,
          defense: 100,
          specialAttack: 50,
          specialDefense: 60,
          speed: 50
        }
      },
      {
        id: 864,
        name: 'cursola',
        types: ['ghost'],
        weight: 4,
        height: 10,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png',
        stats: {
          hp: 60,
          attack: 95,
          defense: 50,
          specialAttack: 145,
          specialDefense: 130,
          speed: 30
        }
      },
      {
        id: 865,
        name: 'sirfetchd',
        types: ['fighting'],
        weight: 1170,
        height: 8,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png',
        stats: {
          hp: 62,
          attack: 135,
          defense: 95,
          specialAttack: 68,
          specialDefense: 82,
          speed: 65
        }
      },
      {
        id: 866,
        name: 'mr-rime',
        types: ['ice', 'psychic'],
        weight: 582,
        height: 15,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png',
        stats: {
          hp: 80,
          attack: 85,
          defense: 75,
          specialAttack: 110,
          specialDefense: 100,
          speed: 70
        }
      },
      {
        id: 867,
        name: 'runerigus',
        types: ['ground', 'ghost'],
        weight: 666,
        height: 16,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png',
        stats: {
          hp: 58,
          attack: 95,
          defense: 145,
          specialAttack: 50,
          specialDefense: 105,
          speed: 30
        }
      },
      {
        id: 868,
        name: 'milcery',
        types: ['fairy'],
        weight: 3,
        height: 2,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png',
        stats: {
          hp: 45,
          attack: 40,
          defense: 40,
          specialAttack: 50,
          specialDefense: 61,
          speed: 34
        }
      },
      {
        id: 869,
        name: 'alcremie',
        types: ['fairy'],
        weight: 5,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png',
        stats: {
          hp: 65,
          attack: 60,
          defense: 75,
          specialAttack: 110,
          specialDefense: 121,
          speed: 64
        }
      },
      {
        id: 870,
        name: 'falinks',
        types: ['fighting'],
        weight: 620,
        height: 30,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png',
        stats: {
          hp: 65,
          attack: 100,
          defense: 100,
          specialAttack: 70,
          specialDefense: 60,
          speed: 75
        }
      },
      {
        id: 871,
        name: 'pincurchin',
        types: ['electric'],
        weight: 10,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png',
        stats: {
          hp: 48,
          attack: 101,
          defense: 95,
          specialAttack: 91,
          specialDefense: 85,
          speed: 15
        }
      },
      {
        id: 872,
        name: 'snom',
        types: ['ice', 'bug'],
        weight: 38,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png',
        stats: {
          hp: 30,
          attack: 25,
          defense: 35,
          specialAttack: 45,
          specialDefense: 30,
          speed: 20
        }
      },
      {
        id: 873,
        name: 'frosmoth',
        types: ['ice', 'bug'],
        weight: 420,
        height: 13,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png',
        stats: {
          hp: 70,
          attack: 65,
          defense: 60,
          specialAttack: 125,
          specialDefense: 90,
          speed: 65
        }
      },
      {
        id: 874,
        name: 'stonjourner',
        types: ['rock'],
        weight: 5200,
        height: 25,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png',
        stats: {
          hp: 100,
          attack: 125,
          defense: 135,
          specialAttack: 20,
          specialDefense: 20,
          speed: 70
        }
      },
      {
        id: 875,
        name: 'eiscue-ice',
        types: ['ice'],
        weight: 890,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png',
        stats: {
          hp: 75,
          attack: 80,
          defense: 110,
          specialAttack: 65,
          specialDefense: 90,
          speed: 50
        }
      },
      {
        id: 876,
        name: 'indeedee-male',
        types: ['psychic', 'normal'],
        weight: 280,
        height: 9,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png',
        stats: {
          hp: 60,
          attack: 65,
          defense: 55,
          specialAttack: 105,
          specialDefense: 95,
          speed: 95
        }
      },
      {
        id: 877,
        name: 'morpeko',
        types: ['electric', 'dark'],
        weight: 30,
        height: 3,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png',
        stats: {
          hp: 58,
          attack: 95,
          defense: 58,
          specialAttack: 70,
          specialDefense: 58,
          speed: 97
        }
      },
      {
        id: 878,
        name: 'cufant',
        types: ['steel'],
        weight: 1000,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png',
        stats: {
          hp: 72,
          attack: 80,
          defense: 49,
          specialAttack: 40,
          specialDefense: 49,
          speed: 40
        }
      },
      {
        id: 879,
        name: 'copperajah',
        types: ['steel'],
        weight: 6500,
        height: 30,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png',
        stats: {
          hp: 122,
          attack: 130,
          defense: 69,
          specialAttack: 80,
          specialDefense: 69,
          speed: 30
        }
      },
      {
        id: 880,
        name: 'dracozolt',
        types: ['electric', 'dragon'],
        weight: 1900,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png',
        stats: {
          hp: 90,
          attack: 100,
          defense: 90,
          specialAttack: 80,
          specialDefense: 70,
          speed: 75
        }
      },
      {
        id: 881,
        name: 'arctozolt',
        types: ['electric', 'ice'],
        weight: 1500,
        height: 23,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png',
        stats: {
          hp: 90,
          attack: 100,
          defense: 90,
          specialAttack: 90,
          specialDefense: 80,
          speed: 55
        }
      },
      {
        id: 882,
        name: 'dracovish',
        types: ['water', 'dragon'],
        weight: 2150,
        height: 23,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png',
        stats: {
          hp: 90,
          attack: 90,
          defense: 100,
          specialAttack: 70,
          specialDefense: 80,
          speed: 75
        }
      },
      {
        id: 883,
        name: 'arctovish',
        types: ['water', 'ice'],
        weight: 1750,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png',
        stats: {
          hp: 90,
          attack: 90,
          defense: 100,
          specialAttack: 80,
          specialDefense: 90,
          speed: 55
        }
      },
      {
        id: 884,
        name: 'duraludon',
        types: ['steel', 'dragon'],
        weight: 400,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png',
        stats: {
          hp: 70,
          attack: 95,
          defense: 115,
          specialAttack: 120,
          specialDefense: 50,
          speed: 85
        }
      },
      {
        id: 885,
        name: 'dreepy',
        types: ['dragon', 'ghost'],
        weight: 20,
        height: 5,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png',
        stats: {
          hp: 28,
          attack: 60,
          defense: 30,
          specialAttack: 40,
          specialDefense: 30,
          speed: 82
        }
      },
      {
        id: 886,
        name: 'drakloak',
        types: ['dragon', 'ghost'],
        weight: 110,
        height: 14,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png',
        stats: {
          hp: 68,
          attack: 80,
          defense: 50,
          specialAttack: 60,
          specialDefense: 50,
          speed: 102
        }
      },
      {
        id: 887,
        name: 'dragapult',
        types: ['dragon', 'ghost'],
        weight: 500,
        height: 30,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
        stats: {
          hp: 88,
          attack: 120,
          defense: 75,
          specialAttack: 100,
          specialDefense: 75,
          speed: 142
        }
      },
      {
        id: 888,
        name: 'zacian-hero',
        types: ['fairy'],
        weight: 1100,
        height: 28,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png',
        stats: {
          hp: 92,
          attack: 130,
          defense: 115,
          specialAttack: 80,
          specialDefense: 115,
          speed: 138
        }
      },
      {
        id: 889,
        name: 'zamazenta-hero',
        types: ['fighting'],
        weight: 2100,
        height: 29,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png',
        stats: {
          hp: 92,
          attack: 130,
          defense: 115,
          specialAttack: 80,
          specialDefense: 115,
          speed: 138
        }
      },
      {
        id: 890,
        name: 'eternatus',
        types: ['poison', 'dragon'],
        weight: 9500,
        height: 200,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png',
        stats: {
          hp: 140,
          attack: 85,
          defense: 95,
          specialAttack: 145,
          specialDefense: 95,
          speed: 130
        }
      },
      {
        id: 891,
        name: 'kubfu',
        types: ['fighting'],
        weight: 120,
        height: 6,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png',
        stats: {
          hp: 60,
          attack: 90,
          defense: 60,
          specialAttack: 53,
          specialDefense: 50,
          speed: 72
        }
      },
      {
        id: 892,
        name: 'urshifu-single-strike',
        types: ['fighting', 'dark'],
        weight: 1050,
        height: 19,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png',
        stats: {
          hp: 100,
          attack: 130,
          defense: 100,
          specialAttack: 63,
          specialDefense: 60,
          speed: 97
        }
      },
      {
        id: 893,
        name: 'zarude',
        types: ['dark', 'grass'],
        weight: 700,
        height: 18,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png',
        stats: {
          hp: 105,
          attack: 120,
          defense: 105,
          specialAttack: 70,
          specialDefense: 95,
          speed: 105
        }
      },
      {
        id: 894,
        name: 'regieleki',
        types: ['electric'],
        weight: 1450,
        height: 12,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png',
        stats: {
          hp: 80,
          attack: 100,
          defense: 50,
          specialAttack: 100,
          specialDefense: 50,
          speed: 200
        }
      },
      {
        id: 895,
        name: 'regidrago',
        types: ['dragon'],
        weight: 2000,
        height: 21,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png',
        stats: {
          hp: 200,
          attack: 100,
          defense: 50,
          specialAttack: 100,
          specialDefense: 50,
          speed: 80
        }
      },
      {
        id: 896,
        name: 'glastrier',
        types: ['ice'],
        weight: 8000,
        height: 22,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png',
        stats: {
          hp: 100,
          attack: 145,
          defense: 130,
          specialAttack: 65,
          specialDefense: 110,
          speed: 30
        }
      },
      {
        id: 897,
        name: 'spectrier',
        types: ['ghost'],
        weight: 445,
        height: 20,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png',
        stats: {
          hp: 100,
          attack: 65,
          defense: 60,
          specialAttack: 145,
          specialDefense: 80,
          speed: 130
        }
      },
      {
        id: 898,
        name: 'calyrex',
        types: ['psychic', 'grass'],
        weight: 77,
        height: 11,
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png',
        stats: {
          hp: 100,
          attack: 80,
          defense: 80,
          specialAttack: 80,
          specialDefense: 80,
          speed: 80
        }
      }
    ],
    idForModal: '',
    loadingNumber: 1,
    // count: 0,
    genListWindow: false,
    menuIsOpen: false
  },
  mutations: {
    ADD_POKEMON(state, data) {
      // state.count++
      // if (state.count === 9) {
      //   state.count = 0
      //   state.loadingNumber++
      // }
      state.pokemonArray.push(data)
      if (state.pokemonArray.length <= 850) {
        state.pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1))
      }
    },
    ADD_ADDITIONAL_DATA(state, object) {
      Vue.set(
        state.pokemonArray[object.tempId - 1],
        'lore',
        object.lore.flavor_text
      )
    }
  },
  actions: {
    fetchPokemon({ commit }) {
      for (var i = 1; i <= 898; i++) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + i)
          .then(resp => resp.json())
          .then(function(data) {
            var object = {
              id: data.id,
              name: data.name,
              types: [data.types[0].type.name],
              weight: data.weight,
              height: data.height,
              sprite: data.sprites.front_default,
              stats: {
                hp: data.stats.find(x => x.stat.name == 'hp').base_stat,
                attack: data.stats.find(x => x.stat.name == 'attack').base_stat,
                defense: data.stats.find(x => x.stat.name == 'defense')
                  .base_stat,
                specialAttack: data.stats.find(
                  x => x.stat.name == 'special-attack'
                ).base_stat,
                specialDefense: data.stats.find(
                  x => x.stat.name == 'special-defense'
                ).base_stat,
                speed: data.stats.find(x => x.stat.name == 'speed').base_stat
              }
            }

            if (data.types.length > 1) {
              object.types.push(data.types[1].type.name)
            }

            commit('ADD_POKEMON', object)
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    },
    fetchModalData({ commit }, pokemonId) {
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemonId)
        .then(resp => resp.json())
        .then(function(data) {
          var object = {
            tempId: pokemonId,
            lore: data.flavor_text_entries
              .reverse()
              .find(x => x.language.name == 'en')
          }
          commit('ADD_ADDITIONAL_DATA', object)
        })
        .catch(function(error) {
          console.log(
            'Error at fetchModalData action. ID: ' + pokemonId + ' ' + error
          )
        })
    }
  },
  getters: {
    gen1Array: state => {
      return state.pokemonArray.slice(0, 151)
    },
    gen2Array: state => {
      return state.pokemonArray.slice(151, 251)
    },
    gen3Array: state => {
      return state.pokemonArray.slice(251, 386)
    },
    gen4Array: state => {
      return state.pokemonArray.slice(386, 493)
    },
    gen5Array: state => {
      return state.pokemonArray.slice(493, 649)
    },
    gen6Array: state => {
      return state.pokemonArray.slice(649, 721)
    },
    gen7Array: state => {
      return state.pokemonArray.slice(721, 809)
    },
    gen8Array: state => {
      return state.pokemonArray.slice(809, 898)
    }
  }
})
