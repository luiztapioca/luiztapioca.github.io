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
    text-lg sm:text-xl
  "
    aria-label="Toggle theme"
>
    <i class="nf nf-md-theme_light_dark"></i>
</button>
