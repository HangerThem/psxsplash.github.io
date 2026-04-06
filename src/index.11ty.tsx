import { App } from "@/pages/App.11ty"

export const data = {
  title: "psxsplash — Build PS1 Games in Unity",
  description:
    'Build PlayStation 1 games using Unity as your scene editor. Design levels, write Lua scripts, export to real hardware or emulator with one click."',
}

export default function Page({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="description"
          content="Build PlayStation 1 games using Unity as your scene editor. Design levels, write Lua scripts, export to real hardware or emulator with one click."
        />
        <meta
          name="keywords"
          content="PlayStation 1, PS1, PSX, game engine, Unity, Lua, homebrew, retro gaming, psxsplash, splashedit, PS1 development"
        />
        <meta name="author" content="psxsplash" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7c3aed" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="psxsplash — Build PS1 Games in Unity"
        />
        <meta
          property="og:description"
          content="Design scenes in Unity, write Lua scripts, and export to real PlayStation 1 hardware or emulator with one click."
        />
        <meta
          property="og:image"
          content="https://psxsplash.github.io/website/img/logo.png"
        />
        <meta property="og:url" content="https://psxsplash.github.io" />
        <meta property="og:site_name" content="psxsplash" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="psxsplash — Build PS1 Games in Unity"
        />
        <meta
          name="twitter:description"
          content="Design scenes in Unity, write Lua scripts, and export to real PlayStation 1 hardware or emulator with one click."
        />
        <meta
          name="twitter:image"
          content="https://psxsplash.github.io/website/img/logo.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/style.css" />

        <link href="/css/global.css" rel="stylesheet" />
      </head>
      <body className="bg-white text-secondary antialiased">
        <div id="root" data-component="App">
          <App />
        </div>

        <script src="/assets/client.min.js"></script>
      </body>
    </html>
  )
}
