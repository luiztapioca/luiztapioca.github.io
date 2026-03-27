<script lang="ts">
    import { toggleMode } from "mode-watcher";
</script>

<button
    onclick={toggleMode}
    class="
    shrink-0 flex items-center justify-center
    text-[#657b83] dark:text-[#839496]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d33682]
    cursor-pointer
    [-webkit-tap-highlight-color:transparent]
    text-xs sm:text-sm font-semibold
  "
    aria-label="Toggle theme"
>
    <span class="block dark:hidden"><strong>luminoso</strong> / <span class="opacity-50">noturno</span></span>
    <span class="hidden dark:block"><span class="opacity-50">luminoso</span> / <strong>noturno</strong></span>
</button>
