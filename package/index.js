import { plugin } from 'vite-plugin-elm'

function getRenderer() {
  return {
    name: 'astro-elm',
    clientEntrypoint: 'astro-elm/client.js',
    serverEntrypoint: 'astro-elm/server.js'
  }
}

function getViteConfiguration() {
  const elmPlugin = plugin();

  // Monkey-patch the elm vite plugin
  // this is horrific in many ways but what can ya do
  const originalLoad = elmPlugin.load;
  elmPlugin.load = async function load(id) {
    const result = await originalLoad.call(elmPlugin, id);
    if (!result || !result.code) return result;

    const newCode = `
      ${result.code}
      export default {
        __elm: true,
        ...Elm[Object.keys(Elm)[0]]
      }
    `
    return { code: newCode, map: null }
  }

  return {
    plugins: [elmPlugin]
  };
}

export default function () {
  return {
    name: 'astro-elm',
    hooks: {
      'astro:config:setup': ({ addRenderer, updateConfig }) => {
        addRenderer(getRenderer());
        updateConfig({ vite: getViteConfiguration() });
      }
    }
  }
}