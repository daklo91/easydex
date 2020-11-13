import pokemonTypeColor from '@/styles/_pokemonTypeColor.scss'

function typeColor(type) {
  switch (type.type.name) {
    case 'normal':
      type = pokemonTypeColor.normalColor
      break
    case 'fire':
      type = pokemonTypeColor.fireColor
      break
    case 'water':
      type = pokemonTypeColor.waterColor
      break
    case 'grass':
      type = pokemonTypeColor.grassColor
      break
    case 'electric':
      type = pokemonTypeColor.electricColor
      break
    case 'poison':
      type = pokemonTypeColor.poisonColor
      break
    case 'ice':
      type = pokemonTypeColor.iceColor
      break
    case 'fighting':
      type = pokemonTypeColor.fightingColor
      break
    case 'ground':
      type = pokemonTypeColor.groundColor
      break
    case 'flying':
      type = pokemonTypeColor.flyingColor
      break
    case 'rock':
      type = pokemonTypeColor.rockColor
      break
    case 'dark':
      type = pokemonTypeColor.darkColor
      break
    case 'psychic':
      type = pokemonTypeColor.psychicColor
      break
    case 'ghost':
      type = pokemonTypeColor.ghostColor
      break
    case 'steel':
      type = pokemonTypeColor.steelColor
      break
    case 'bug':
      type = pokemonTypeColor.bugColor
      break
    case 'dragon':
      type = pokemonTypeColor.dragonColor
      break
    case 'fairy':
      type = pokemonTypeColor.fairyColor
      break
  }
  return type
}

export default typeColor
