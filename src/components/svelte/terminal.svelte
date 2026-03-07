<script lang="ts">
  import { experiences } from "@data/experiences";

  let { resumeHtml = '' }: { resumeHtml?: string } = $props();

  let commands = ["ls", "cat resume.md", "./experiences"];
  let currentCommandIndex = $state(0);
  let displayedCommand = $state("");

  let showLsOutput = $state(false);
  let showResumeOutput = $state(false);
  let showExpOutput = $state(false);

  let expandedExps = $state<string[]>([]);

  let speed = 50;
  let delay = 600;
  let executeDelay = 400;

  $effect(() => {
    let aborted = false;
    let timeout: ReturnType<typeof setTimeout>;

    const typeCommand = (charIndex: number) => {
      if (aborted) return;
      const command = commands[currentCommandIndex];

      if (charIndex < command.length) {
        displayedCommand += command[charIndex];
        timeout = setTimeout(() => typeCommand(charIndex + 1), speed);
      } else {
        timeout = setTimeout(() => {
          if (aborted) return;
          if (currentCommandIndex === 0) {
            showLsOutput = true;
            currentCommandIndex++;
            displayedCommand = "";
            timeout = setTimeout(() => typeCommand(0), executeDelay * 2);
          } else if (currentCommandIndex === 1) {
            showResumeOutput = true;
            currentCommandIndex++;
            displayedCommand = "";
            timeout = setTimeout(() => typeCommand(0), executeDelay * 2);
          } else if (currentCommandIndex === 2) {
            showExpOutput = true;
          }
        }, executeDelay);
      }
    };

    timeout = setTimeout(() => typeCommand(0), delay);

    return () => {
      aborted = true;
      clearTimeout(timeout);
    };
  });

  function toggleExp(id: string) {
    if (expandedExps.includes(id)) {
      expandedExps = expandedExps.filter(expId => expId !== id);
    } else {
      expandedExps = [...expandedExps, id];
    }
  }

  function formatYYYYMM(dateString?: string) {
    if (!dateString) return 'Atual';
    return dateString.substring(0, 7);
  }
</script>

<div class="text-xs sm:text-sm md:text-base text-[#657b83] dark:text-[#839496] overflow-hidden">

{#snippet promptLine(text: string, showCursor: boolean)}
  <div class="flex items-center gap-1.5 sm:gap-2">
    <div class="flex items-center gap-1 sm:gap-1.5 shrink-0">
      <span class="font-bold">ヾ(*'▽'*)</span>
      <span class="text-[#268bd2]">~/portfolio</span>
      <span class="whitespace-nowrap">master<span class="text-[#dc322f]">*</span></span>
      <span class="font-bold text-[#d33682]">λ</span>
    </div>
    <span class="break-all">{text}{#if showCursor}<span class="animate-blink inline-block w-1.5 sm:w-2 h-[0.8em] translate-y-[0.1em] bg-current ml-px"></span>{/if}</span>
  </div>
{/snippet}

  {@render promptLine(
    currentCommandIndex === 0 ? displayedCommand : commands[0],
    currentCommandIndex === 0
  )}

  {#if showLsOutput}
    <div class="my-2 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <span class="text-[#6c71c4]">experiences.go</span>
      <span>resume.md</span>
      <span class="font-bold text-[#2aa198]">experiences</span>
    </div>

    <div class="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
      {@render promptLine(
        currentCommandIndex === 1 ? displayedCommand : commands[1],
        currentCommandIndex === 1
      )}
    </div>
  {/if}

  {#if showResumeOutput}
    <div class="my-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div class="leading-relaxed opacity-90">
        {@html resumeHtml}
      </div>
    </div>

    <div class="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
      {@render promptLine(
        currentCommandIndex === 2 ? displayedCommand : commands[2],
        currentCommandIndex === 2 && !showExpOutput
      )}
    </div>
  {/if}

  {#if showExpOutput}
    <div class="mt-3 w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <!-- panel -->
      <div class="border border-[#93a1a1]/30 dark:border-[#586e75]/30 rounded-lg overflow-hidden">
        <!-- title bar -->
        <div class="px-3 py-1.5 border-b border-[#93a1a1]/30 dark:border-[#586e75]/30 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-[#d33682] font-bold">Experiências</span>
            <span class="text-[0.75em] text-[#93a1a1] dark:text-[#586e75] italic">clique para expandir</span>
          </div>
          <span class="text-[#93a1a1] dark:text-[#586e75] text-[0.8em]">{expandedExps.length}/{experiences.length}</span>
        </div>

        <!-- rows -->
        {#each experiences as exp (exp.id)}
          {@const isOpen = expandedExps.includes(exp.id)}
          <div class="border-b last:border-b-0 border-[#93a1a1]/15 dark:border-[#586e75]/15">
            <div
              class="flex items-center gap-2 px-3 py-1.5 cursor-pointer select-none
                {isOpen
                  ? 'bg-[#d33682]/10 dark:bg-[#d33682]/20'
                  : 'hover:bg-[#93a1a1]/10 dark:hover:bg-[#586e75]/10'
                }"
              onclick={() => toggleExp(exp.id)}
              onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExp(exp.id); } }}
              role="button"
              tabindex="0"
            >
              <span class="text-[#93a1a1] dark:text-[#586e75] shrink-0 text-[0.7em]">{isOpen ? '▼' : '▶'}</span>
              <span class="font-bold text-[#d33682] shrink-0">{exp.company}</span>
              <span class="text-[#93a1a1] dark:text-[#586e75]">·</span>
              <span class="text-[#2aa198] truncate">{exp.position}</span>
              <span class="text-[#93a1a1] dark:text-[#586e75] whitespace-nowrap shrink-0 ml-auto text-[0.85em]">{formatYYYYMM(exp.startDate)} → {formatYYYYMM(exp.endDate)}</span>
            </div>

            {#if isOpen}
              <div class="px-3 py-2 pl-8 flex flex-col gap-1 border-t border-[#93a1a1]/10 dark:border-[#586e75]/10 bg-[#eee8d5]/30 dark:bg-[#073642]/60">
                {#each exp.bullets as bullet}
                  <div class="flex items-start gap-1.5">
                    <span class="text-[#d33682] shrink-0 text-[0.7em] mt-[0.35em]">✦</span>
                    <span class="leading-relaxed opacity-90">{bullet}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        {/each}

        <!-- footer -->
        <div class="px-3 py-1.5 border-t border-[#93a1a1]/30 dark:border-[#586e75]/30 flex items-center text-[0.8em] text-[#93a1a1] dark:text-[#586e75]">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#657b83] dark:text-[#839496] hover:text-[#268bd2] dark:hover:text-[#268bd2] [text-decoration:none] hover:[text-decoration:none]"
          >
            <span class="text-[#b58900]">[↓]</span> Baixe meu currículo
          </a>
        </div>
      </div>
    </div>
  {/if}

</div>
