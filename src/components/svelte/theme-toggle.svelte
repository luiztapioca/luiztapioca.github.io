<script lang="ts">
    import { toggleMode } from "mode-watcher";
    import { SunMoon } from "@lucide/svelte";
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
    <SunMoon class="w-3 h-3 sm:w-5 sm:h-5"/>
</button>
