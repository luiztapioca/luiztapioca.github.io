<script lang="ts">
  import { experiences } from "@data/experiences";

  // Nova sequência de 3 comandos
  let commands = ["ls", "cat resume.md", "./experiences"];
  let currentCommandIndex = $state(0);
  let displayedCommand = $state("");

  // Controle de visibilidade dos resultados
  let showLsOutput = $state(false);
  let showResumeOutput = $state(false);
  let showExpOutput = $state(false);

  let expandedExps = $state<string[]>([]);

  let speed = 50;
  let delay = 600;
  let executeDelay = 400;

  $effect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const typeCommand = (charIndex: number) => {
      const command = commands[currentCommandIndex];

      if (charIndex < command.length) {
        displayedCommand += command[charIndex];
        timeout = setTimeout(() => typeCommand(charIndex + 1), speed);
      } else {
        timeout = setTimeout(() => {
          if (currentCommandIndex === 0) {
            // Fim do comando ls
            showLsOutput = true;
            currentCommandIndex++;
            displayedCommand = "";
            timeout = setTimeout(() => typeCommand(0), executeDelay * 2);
          } else if (currentCommandIndex === 1) {
            // Fim do comando cat resume.md
            showResumeOutput = true;
            currentCommandIndex++;
            displayedCommand = "";
            timeout = setTimeout(() => typeCommand(0), executeDelay * 2);
          } else if (currentCommandIndex === 2) {
            // Fim do comando ./experiences
            showExpOutput = true;
          }
        }, executeDelay);
      }
    };

    timeout = setTimeout(() => typeCommand(0), delay);

    return () => clearTimeout(timeout);
  });

  function toggleExp(id: string) {
    if (expandedExps.includes(id)) {
      expandedExps = expandedExps.filter(expId => expId !== id);
    } else {
      expandedExps = [...expandedExps, id];
    }
  }

  function formatDate(dateString?: string) {
    if (!dateString) return 'Atual';
    return dateString.substring(0, 7);
  }
</script>

<div class="text-xs sm:text-sm md:text-base text-[#657b83] dark:text-[#839496] overflow-hidden">

  <div class="flex items-center flex-wrap gap-1.5 sm:gap-2">
    <div class="flex items-center gap-1 sm:gap-1.5 shrink-0">
        <span class="text-[#657b83] dark:text-[#839496] font-bold flex-shrink-0">ヾ(*'▽'*)</span>
        <span class="text-[#268bd2] dark:text-[#268bd2] truncate">~/portfolio</span>
        <span class="text-[#657b83] dark:text-[#839496] whitespace-nowrap">master<span class="text-[#dc322f] dark:text-[#dc322f]">*</span></span>
        <span class="font-bold text-[#d33682] dark:text-[#d33682] flex-shrink-0">λ</span>
    </div>

    <span class="break-all">{currentCommandIndex === 0 ? displayedCommand : commands[0]}</span>

    {#if currentCommandIndex === 0 && !showLsOutput}
        <span class="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-current ml-0.5 sm:ml-1 align-middle flex-shrink-0"></span>
    {/if}
  </div>

  {#if showLsOutput}
    <div class="mt-3 mb-3 sm:mt-4 sm:mb-4 flex flex-wrap gap-2 sm:gap-4 px-2 sm:px-0">
      <span class="text-[#657b83] dark:text-[#839496] text-xs sm:text-sm">experiences.go</span>
      <span class="text-[#657b83] dark:text-[#839496] text-xs sm:text-sm">resume.md</span>
      <span class="font-bold text-[#d33682] dark:text-[#d33682] text-xs sm:text-sm">experiences</span>
    </div>

    <div class="flex items-center flex-wrap gap-1.5 sm:gap-2">
      <div class="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <span class="text-[#657b83] dark:text-[#839496] font-bold flex-shrink-0">ヾ(*'▽'*)</span>
          <span class="text-[#268bd2] dark:text-[#268bd2] truncate">~/portfolio</span>
          <span class="text-[#657b83] dark:text-[#839496] whitespace-nowrap">master<span class="text-[#dc322f] dark:text-[#dc322f]">*</span></span>
          <span class="font-bold text-[#d33682] dark:text-[#d33682] flex-shrink-0">λ</span>
      </div>

      <span class="break-all">{currentCommandIndex === 1 ? displayedCommand : commands[1]}</span>

      {#if currentCommandIndex === 1 && !showResumeOutput}
          <span class="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-current ml-0.5 sm:ml-1 align-middle flex-shrink-0"></span>
      {/if}
    </div>
  {/if}

  {#if showResumeOutput}
    <div class="mt-4 mb-6 pl-2 sm:pl-4">
      <div class="flex flex-col gap-3 leading-relaxed opacity-90 text-[#657b83] dark:text-[#839496] text-xs sm:text-sm">
        <p>
          adoro reinventar a roda no meu tempo livre.
        </p>
      </div>
    </div>

    <div class="flex items-center flex-wrap gap-1.5 sm:gap-2">
      <div class="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <span class="text-[#657b83] dark:text-[#839496] font-bold flex-shrink-0">ヾ(*'▽'*)</span>
          <span class="text-[#268bd2] dark:text-[#268bd2] truncate">~/portfolio</span>
          <span class="text-[#657b83] dark:text-[#839496] whitespace-nowrap">master<span class="text-[#dc322f] dark:text-[#dc322f]">*</span></span>
          <span class="font-bold text-[#d33682] dark:text-[#d33682] flex-shrink-0">λ</span>
      </div>

      <span class="break-all">{currentCommandIndex === 2 ? displayedCommand : commands[2]}</span>

      {#if currentCommandIndex === 2 && !showExpOutput}
          <span class="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-current ml-0.5 sm:ml-1 align-middle flex-shrink-0"></span>
      {/if}
    </div>
  {/if}

  {#if showExpOutput}
    <div class="mt-4 mb-2 pl-1 sm:pl-2">

      <div class="flex flex-col gap-2 sm:gap-4 px-2 sm:px-0">
        {#each experiences as exp}
          <div
            class="border border-[#eee8d5] dark:border-[#073642] p-2 sm:p-3 cursor-pointer hover:bg-[#f5f5dc] hover:dark:bg-[#002b36] transition-colors"
            onclick={() => toggleExp(exp.id)}
          >
            <div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-1 sm:gap-2">
              <div class="flex items-center gap-1 sm:gap-2 min-w-0">
                <span class="text-[#dc322f] dark:text-[#dc322f] w-3 sm:w-4 text-center flex-shrink-0">
                  {expandedExps.includes(exp.id) ? '▼' : '▶'}
                </span>
                <span class="font-bold text-[#dc322f] dark:text-[#dc322f] truncate text-xs sm:text-sm">{exp.company}</span>
                <span class="opacity-60 flex-shrink-0">—</span>
                <span class="font-semibold text-[#268bd2] dark:text-[#268bd2] truncate text-xs sm:text-sm">{exp.position}</span>
              </div>
              <div class="text-xs text-[#cb4b16] dark:text-[#cb4b16] opacity-80 font-semibold tracking-wide">
                [{formatDate(exp.startDate)} → {formatDate(exp.endDate)}]
              </div>
            </div>

            {#if expandedExps.includes(exp.id)}
              <div class="mt-3 sm:mt-4 pl-4 sm:pl-6 animate-in slide-in-from-top-2 fade-in duration-200">
                <div class="italic opacity-90 pl-2 py-0.5 my-1 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </div>

                <ul class="flex flex-col gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                  {#each exp.bullets as bullet}
                    <li class="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
                      <span class="text-[#dc322f] dark:text-[#dc322f] flex-shrink-0 font-bold">&gt;</span>
                      <span class="leading-relaxed opacity-90">{bullet}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
        {/each}
      </div>

    </div>
  {/if}

</div>
