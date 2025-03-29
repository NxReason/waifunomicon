const isDev = import.meta.env.MODE;
const BASE_PATH = `${isDev ? 'http://localhost:3000' : ''}/genshin`;

const CHARACTERS_PATH = `${BASE_PATH}/characters`;
const characters = {
  async all() {
    try {
      const path = CHARACTERS_PATH;

      const res = await fetch(path);
      if (res.ok) {
        const data = await res.json();
        return data.characters;
      }
      console.error(`Error: get all genshin characters (status ${res.status})`);
      return null;
    } catch (err) {
      console.error(`Error: unable to get genshin characters (${err})`);
      return null;
    }
  },

  async find(id) {
    try {
      const path = `${CHARACTERS_PATH}/${id}`;

      const res = await fetch(path);
      if (res.ok) {
        const data = await res.json();
        return data.character;
      }
      console.error(
        `Error: can't find character with id ${id} (status ${res.status})`
      );
      return null;
    } catch (err) {
      console.error(`Error: fetching character with id ${id} failed (${err})`);
      return null;
    }
  },

  async create(character) {
    const path = `${CHARACTERS_PATH}`;
    const payload = {
      method: 'POST',
      body: JSON.stringify({ character }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await fetch(path, payload);
      if (res.ok) {
        const data = await res.json();
        return data.character;
      }
      console.error(`Error: creating character (status ${res.status})`);
    } catch (err) {
      console.error(`Error: creating character (${err})`);
    }
    return null;
  },

  async update(character) {
    const path = `${CHARACTERS_PATH}/${character.id}`;
    const payload = {
      method: 'PUT',
      body: JSON.stringify({ character }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await fetch(path, payload);
      if (res.ok) {
        const data = await res.json();
        return data.character;
      }
      console.error(`Error: updating character (status ${res.status})`);
    } catch (err) {
      console.error(`Error: updating character (${err})`);
    }
    return null;
  },

  async remove(id) {
    const path = `${CHARACTERS_PATH}/${id}`;
    const payload = {
      method: 'DELETE',
    };

    try {
      const res = await fetch(path, payload);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      console.error(`Error: removing character (status ${res.status})`);
    } catch (err) {
      console.error(`Error: removing character (${err})`);
    }
    return null;
  },
};

const ARTIFACT_PATH = `${BASE_PATH}/artifacts`;
const artifacts = {
  async all() {
    try {
      const path = ARTIFACT_PATH;

      const res = await fetch(path);
      if (res.ok) {
        const data = await res.json();
        return data.artifacts;
      }
      console.error(`Error: get all genshin artifacts (status ${res.status})`);
      return null;
    } catch (err) {
      console.error(`Error: unable to get genshin artifacts (${err})`);
      return null;
    }
  },
  async find() {},
  async create() {},
  async update() {},
  async remove() {},
};

export default { characters, artifacts };
