import { Pipe, PipeTransform } from '@angular/core';
import { Character, CharactersFilter, Film, Spiece } from '../../models';

@Pipe({
  name: 'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {

  transform(items: Character[], ...args: [CharactersFilter, Film[], Spiece[]]): Character[] {
    const [filter, films, species] = args;

    if (!filter || !films || !species) {
      return items;
    }

    const { film, spiece, birthYear } = filter;

    const filmNumber = films.findIndex(f => f.title === film) + 1;
    const spieceNumber = species.findIndex(s => s.name === spiece) + 1;

    return items
      .filter(item => {
        return filmNumber === 0 ? true : item.films.find(f => f.includes(`${filmNumber}`));
      })
      .filter(item => {
        return spieceNumber === 0 ? true : item.species.find(s => s.includes(`${spieceNumber}`));
      })
      .filter(item => {
        return parseInt(item.birth_year.replace('BBY', ''), 10) <= birthYear;
      });
  }
}
