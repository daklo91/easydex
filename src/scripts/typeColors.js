import scssColor from '@/styles/_typeColor.scss'

function typeColor(type) {
  var coolVar = ''
  if (typeof type === 'object') {
    coolVar = type.type.name
  } else if (typeof type === 'string') {
    coolVar = type
  }
  switch (coolVar) {
    case 'normal':
      type = scssColor.normalColor
      break
    case 'fire':
      type = scssColor.fireColor
      break
    case 'water':
      type = scssColor.waterColor
      break
    case 'grass':
      type = scssColor.grassColor
      break
    case 'electric':
      type = scssColor.electricColor
      break
    case 'poison':
      type = scssColor.poisonColor
      break
    case 'ice':
      type = scssColor.iceColor
      break
    case 'fighting':
      type = scssColor.fightingColor
      break
    case 'ground':
      type = scssColor.groundColor
      break
    case 'flying':
      type = scssColor.flyingColor
      break
    case 'rock':
      type = scssColor.rockColor
      break
    case 'dark':
      type = scssColor.darkColor
      break
    case 'psychic':
      type = scssColor.psychicColor
      break
    case 'ghost':
      type = scssColor.ghostColor
      break
    case 'steel':
      type = scssColor.steelColor
      break
    case 'bug':
      type = scssColor.bugColor
      break
    case 'dragon':
      type = scssColor.dragonColor
      break
    case 'fairy':
      type = scssColor.fairyColor
      break
  }
  return type
}

export default typeColor
