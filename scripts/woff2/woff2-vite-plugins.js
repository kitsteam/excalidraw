// const OSS_FONTS_CDN =
//   "https://excalidraw.nyc3.cdn.digitaloceanspaces.com/fonts/oss/";

/**
 * Custom vite plugin to convert url woff2 imports into a text.
 * Other woff2 imports are automatically served and resolved as a file uri.
 *
 * @returns {import("vite").PluginOption}
 */
module.exports.woff2BrowserPlugin = () => {
  // for now limited to woff2 only, might be extended to any assets in the future
  const regex = /^https:\/\/.+?\.woff2$/;
  let isDev;

  return {
    name: "woff2BrowserPlugin",
    enforce: "pre",
    config(_, { command }) {
      isDev = command === "serve";
    },
    resolveId(source) {
      if (!regex.test(source)) {
        return null;
      }

      // getting the url to the dependency tree
      return source;
    },
    load(id) {
      if (!regex.test(id)) {
        return null;
      }

      // loading the url as string
      return `export default "${id}"`;
    },
    // necessary for dev as vite / rollup does skips https imports in serve (~dev) mode
    // aka dev mode equivalent of "export default x" above (resolveId + load)
    transform(code, id) {
      // treat https woff2 imports as a text
      if (isDev && id.endsWith("/excalidraw/fonts/index.ts")) {
        return code.replaceAll(
          /import\s+(\w+)\s+from\s+(["']https:\/\/.+?\.woff2["'])/g,
          `const $1 = $2`,
        );
      }

      // use CDN for Assistant
      if (!isDev && id.endsWith("/excalidraw/fonts/assets/fonts.css")) {
        return `/* WARN: The following content is generated during excalidraw-app build */

      @font-face {
        font-family: "Assistant";
        src: url(./Assistant-Regular-DVxZuzxb.woff2) format("woff2");
        font-weight: 400;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(./Assistant-Medium-DrcxCXg3.woff2) format("woff2");
        font-weight: 500;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(./Assistant-SemiBold-SCI4bEL9.woff2) format("woff2");
        font-weight: 600;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(./Assistant-Bold-gm-uSS1B.woff2) format("woff2");
        font-weight: 700;
        style: normal;
        display: swap;
      }`;
      }

      // using EXCALIDRAW_ASSET_PATH as a SSOT
      if (!isDev && id.endsWith("excalidraw-app/index.html")) {
        return code.replace(
          "<!-- PLACEHOLDER:EXCALIDRAW_APP_FONTS -->",
          `<script>
        // point into our CDN in prod, fallback to root (excalidraw.com) domain in case of issues
        window.EXCALIDRAW_ASSET_PATH = [
          "/",
        ];
      </script>

      <!-- Preload all default fonts and Virgil for backwards compatibility to avoid swap on init -->
      <link
        rel="preload"
        href="./Excalifont-Regular-C9eKQy_N.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="./Virgil-Regular-hO16qHwV.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="./ComicShanns-Regular-D0c8wzsC.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
    `,
        );
      }
    },
  };
};
