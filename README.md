# Excalidraw without firebase

This is a fork from the [excalidraw project](https://github.com/excalidraw/excalidraw) with changes inspired and partly taken from [Kilian Decaderincourt](https://gitlab.com/kiliandeca/excalidraw-fork) to enable support for rooms without using firebase.<br />

## Setup with docker

Please copy the .env.development.default or .env.production.default file to .env (or with environment without default at the end) and change it according to your needs, see [react-scripts](https://create-react-app.dev/docs/adding-custom-environment-variables/).

### Development

```
docker-compose up -d
docker-compose exec excalidraw yarn install
docker-compose exec excalidraw yarn start
```

Hint: Collab mode requires a secure context (https). Localhost works as well, but not http over local network.

#### Commands

| Command            | Description                       |
| ------------------ | --------------------------------- |
| `yarn`             | Install the dependencies          |
| `yarn start`       | Run the project                   |
| `yarn fix`         | Reformat all files with Prettier  |
| `yarn test`        | Run tests                         |
| `yarn test:update` | Update test snapshots             |
| `yarn test:code`   | Test for formatting with Prettier |

### Production

```
docker-compose -f docker-compose-prod.yml up -d
```


## Additional licence

The excalidraw [logo](https://thenounproject.com/icon/2357486/) in this repo – created by [Verry](https://thenounproject.com/verry.dsign.creative) – is licenced under [CC BY 3.0 Unported](https://creativecommons.org/licenses/by/3.0/).
<div align="center" style="display:flex;flex-direction:column;"}>
  <a href="https://excalidraw.com">
    <img width="540" src="./public/og-image-sm.png" alt="Excalidraw logo: Sketch handrawn like diagrams."/>
  </a>
  <h3>Virtual whiteboard for sketching hand-drawn like diagrams.<br/>Collaborative and end-to-end encrypted.</h3>
  <p>
    <a href="https://twitter.com/excalidraw">
      <img alt="Follow Excalidraw on Twitter" src="https://img.shields.io/twitter/follow/excalidraw.svg?label=follow+@excalidraw&style=social&logo=twitter"/>
    </a>
    <a href="https://discord.gg/UexuTaE">
      <img alt="Chat with us on Discord" src="https://img.shields.io/discord/723672430744174682?color=738ad6&label=Chat%20on%20Discord&logo=discord&logoColor=ffffff&widge=false"/>
    </a>
  </p>
</div>

## Try now

Visit [excalidraw.com](https://excalidraw.com) to start sketching.

## Community

For latest updates, follow us on [twitter](https://twitter.com/excalidraw). If you need help or want to chat, join us on [Discord](https://discord.gg/UexuTaE). For releases and deep dives, check out our [blog](https://blog.excalidraw.com). Report bugs on [GitHub](https://github.com/excalidraw/excalidraw/issues).

## Supporting Excalidraw

If you like the project, you can become a sponsor at [Open Collective](https://opencollective.com/excalidraw).

[<img src="https://opencollective.com/excalidraw/tiers/sponsors/0/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/0/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/1/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/1/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/2/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/2/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/3/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/3/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/4/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/4/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/5/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/5/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/6/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/6/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/7/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/7/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/8/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/8/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/9/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/9/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/10/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/10/website)

<a href="https://opencollective.com/excalidraw#category-CONTRIBUTE" target="_blank"><img src="https://opencollective.com/excalidraw/tiers/backers.svg?avatarHeight=32"/></a>

Last but not least, we're thankful to these companies for offering their services for free:

[![Vercel](./.github/assets/vercel.svg)](https://vercel.com) [![Sentry](./.github/assets/sentry.svg)](https://sentry.io) [![Crowdin](./.github/assets/crowdin.svg)](https://crowdin.com)

## Developers

You can integrate Excalidraw into your app by installing our [npm component](https://npmjs.com/package/@excalidraw/excalidraw).

Visit our documentation on [https://docs.excalidraw.com](https://docs.excalidraw.com).

## Who's integrating Excalidraw

[Google Cloud](https://googlecloudcheatsheet.withgoogle.com/architecture) • [Meta](https://meta.com/) • [CodeSandbox](https://codesandbox.io/) • [Obsidian Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) • [Replit](https://replit.com/) • [Slite](https://slite.com/) • [Notion](https://notion.so/) • [HackerRank](https://www.hackerrank.com/)
```