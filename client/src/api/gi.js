const isDev = import.meta.env.MODE;
const BASE_PATH = `${isDev ? 'http://localhost:3000' : ''}/genshin`;

const characters = {
  async all() {
    try {
      const path = BASE_PATH;

      const res = await fetch(path);
      if (res.ok) {
        const data = await res.json();
        return data.characters;
      }
      console.error(`Get all genshin characters: ${res.status}`);
      return null;
    } catch (err) {
      console.error(`Error: unable to get genshin characters (${err})`);
      return null;
    }
  },
};

export { characters };
