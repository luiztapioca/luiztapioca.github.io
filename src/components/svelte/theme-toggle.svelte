<script lang="ts">
    import { toggleMode } from "mode-watcher";
    import { SunMoon } from '@lucide/svelte';
</script>

<button
  onclick={ toggleMode }
  class="
    group relative
    flex-shrink-0 flex items-center justify-center
    text-[#657b83] dark:text-[#839496]
    hover:text-[#d33682] dark:hover:text-[#d33682]
    active:scale-90
    transition-all duration-150
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d33682]
    cursor-pointer
    [-webkit-tap-highlight-color:transparent]
  ">
    <SunMoon class="h-3.5 w-3.5 sm:h-[1.1rem] sm:w-[1.1rem]" />
    <span class="
        absolute -bottom-5 left-1/2 -translate-x-1/2
        text-[0.6rem] whitespace-nowrap
        text-[#93a1a1] dark:text-[#586e75]
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        pointer-events-none select-none
    ">(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</span>
</button>
