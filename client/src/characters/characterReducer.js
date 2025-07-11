export default function characterReducer(characters, action) {
  switch (action.type) {
    case 'set':
      return action.characters;
    case 'added':
      return [...characters, action.character];
    case 'removed':
      return characters.filter(c => c.id !== action.id);
    case 'changed':
      return characters.map(c => {
        if (c.id !== action.character.id) return c;
        return action.character;
      });
    default:
      throw new Error('Invalid action type');
  }
}
