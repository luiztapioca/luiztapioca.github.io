<script lang="ts">
    import { toggleMode } from "mode-watcher";
    import { SunMoon } from '@lucide/svelte';
</script>

<button onclick={ toggleMode } class="flex-shrink-0 flex items-center justify-center w-8 h-8 hover:opacity-80 transition-opacity">
    <SunMoon
      class="
        h-5 w-5
        text-[#657b83] dark:text-[#839496]
        hover:text-[#268bd2] dark:hover:text-[#268bd2]"/>
</button>
