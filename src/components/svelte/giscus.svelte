<script>
  import { mode } from "mode-watcher";

  const BASE_URL = "https://luiztapioca.github.io";
  const themeUrl = (t) => t === "dark" ? "dark_dimmed" : "light";

  let container = $state(null);

  function loadGiscus(theme) {
    if (!container) return;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "luiztapioca/luiztapioca.github.io");
    script.setAttribute("data-repo-id", "R_kgDOQrW4bw");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOQrW4b84C35Q-");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", themeUrl(theme));
    script.setAttribute("data-lang", "pt");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;

    container.appendChild(script);
  }

  $effect(() => {
    const theme = $mode;
    if (container) {
      const iframe = container.querySelector("iframe.giscus-frame");
      if (iframe) {
        iframe.contentWindow?.postMessage(
          {
            giscus: {
              setConfig: {
                theme: themeUrl(theme),
              },
            },
          },
          "https://giscus.app"
        );
      } else {
        loadGiscus(theme);
      }
    }
  });
</script>

<div bind:this={container} class="mt-12 not-prose"></div>
