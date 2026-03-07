<script lang="ts">
  import { experiences } from "@data/experiences";

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
  <div class="flex items-center flex-wrap gap-1.5 sm:gap-2">
    <div class="flex items-center gap-1 sm:gap-1.5 shrink-0">
      <span class="font-bold flex-shrink-0">ヾ(*'▽'*)</span>
      <span class="text-[#268bd2] truncate">~/portfolio</span>
      <span class="whitespace-nowrap">master<span class="text-[#dc322f]">*</span></span>
      <span class="font-bold text-[#d33682] flex-shrink-0">λ</span>
    </div>
    <span class="break-all">{text}</span>
    {#if showCursor}
      <span class="animate-blink inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-current ml-0.5 sm:ml-1 align-middle flex-shrink-0"></span>
    {/if}
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
      <p class="leading-relaxed opacity-90">
        atualmente trabalho com pesquisas e faço estágio de meio período,
         ando buscando me aprofundar nas bases até o fim desse período de graduação.
         <br>
         <br>
        entendo que o aprendizado leva tempo e dedicação, então, ao menos durante esse
         período, eu ando reinventando muito a roda com o objetivo de aprender mais e mais
         sobre as ferramentas e os paradigmas que são usados mundo a fora.

      </p>
    </div>

    <div class="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
      {@render promptLine(
        currentCommandIndex === 2 ? displayedCommand : commands[2],
        currentCommandIndex === 2 && !showExpOutput
      )}
    </div>
  {/if}

  {#if showExpOutput}
    <div class="mt-3 flex flex-col w-full max-w-3xl border-t border-[#93a1a1]/30 dark:border-[#586e75]/30 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {#each experiences as exp}
        <div class="flex flex-col">
          <div
            class="flex items-start cursor-pointer py-1 px-1 hover:bg-[#eee8d5] hover:dark:bg-[#073642] select-none"
            onclick={() => toggleExp(exp.id)}
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleExp(exp.id);
              }
            }}
            role="button"
            tabindex="0"
          >
            <span class="text-[#b58900] font-bold w-8 shrink-0 pt-0.5">
              {expandedExps.includes(exp.id) ? '[-]' : '[+]'}
            </span>
            <div class="flex flex-col min-w-0">
              <span class="font-bold text-[#268bd2]">{exp.company}</span>
              <span class="text-[#2aa198]">
                {exp.position}
                <span class="text-[#cb4b16] opacity-90 font-semibold">
                  · [ {formatYYYYMM(exp.startDate)} :: {formatYYYYMM(exp.endDate)} ]
                </span>
              </span>
            </div>
          </div>

          {#if expandedExps.includes(exp.id)}
            <div class="flex flex-col pl-8 mt-1 mb-4 gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              {#each exp.bullets as bullet}
                <div class="flex items-start">
                  <span class="text-[#2aa198] font-bold mr-2 mt-0.5">></span>
                  <span class="leading-relaxed opacity-90">{bullet}</span>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}

      <div class="h-2"></div>
    </div>

    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-2 flex items-center py-1 px-1 font-semibold text-[#657b83] dark:text-[#839496] hover:bg-[#eee8d5] hover:dark:bg-[#073642] hover:text-[#d33682] dark:hover:text-[#d33682] [text-decoration:none] hover:[text-decoration:none]"
    >
      <span class="text-[#b58900] font-bold w-8 shrink-0">[↓]</span>
      Baixe meu currículo
    </a>
  {/if}

</div>
