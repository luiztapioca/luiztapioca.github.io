<script lang="ts">
    import { toggleMode } from "mode-watcher";
    import { SunMoon } from '@lucide/svelte';
</script>

<button onclick={ toggleMode } class="p-1 hover:opacity-80 transition-opacity">
    <SunMoon
      class="
        h-5 w-5 sm:h-[1.2rem] sm:w-[1.2rem]
        text-[#657b83] dark:text-[#839496]
        hover:text-[#268bd2] dark:hover:text-[#268bd2]
        ml-2 sm:ml-0 mt-2"/>
</button>
