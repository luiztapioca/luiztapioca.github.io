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

<div class="text-sm sm:text-base text-[#657b83] dark:text-[#839496]">

  <div class="flex items-center">
    <div class="mr-2 flex items-center gap-1.5 shrink-0">
        <span class="text-[#657b83] dark:text-[#839496] font-bold">ヾ(*'▽'*)</span>
        <span class="text-[#268bd2]">~/portfolio</span>
        <span class="text-[#657b83] dark:text-[#839496]">master<span class="text-pink-400 dark:text-pink-200">*</span></span>
        <span class="font-bold text-[#d33682]">λ</span>
    </div>

    <span>{currentCommandIndex === 0 ? displayedCommand : commands[0]}</span>

    {#if currentCommandIndex === 0 && !showLsOutput}
        <span class="inline-block w-2.5 h-5 bg-current ml-1 align-middle"></span>
    {/if}
  </div>

  {#if showLsOutput}
    <div class="mt-2 mb-4 flex flex-wrap gap-4">
      <span class="text-[#657b83] dark:text-[#839496]">experiences.go</span>
      <span class="text-[#657b83] dark:text-[#839496]">resume.md</span>
      <span class="font-bold text-[#d33682]">experiences</span>
    </div>

    <div class="flex items-center">
      <div class="mr-2 flex items-center gap-1.5 shrink-0">
          <span class="text-[#657b83] dark:text-[#839496] font-bold">ヾ(*'▽'*)</span>
          <span class="text-[#268bd2]">~/portfolio</span>
          <span class="text-[#657b83] dark:text-[#839496]">master<span class="text-pink-400 dark:text-pink-200">*</span></span>
          <span class="font-bold text-[#d33682]">λ</span>
      </div>

      <span>{currentCommandIndex === 1 ? displayedCommand : commands[1]}</span>

      {#if currentCommandIndex === 1 && !showResumeOutput}
          <span class="inline-block w-2.5 h-5 bg-current ml-1 align-middle"></span>
      {/if}
    </div>
  {/if}

  {#if showResumeOutput}
    <div class="mt-4 mb-6 pl-4 border-l-2 border-[#eee8d5] dark:border-[#073642]">
      <div class="flex flex-col gap-3 leading-relaxed opacity-90 text-[#6c71c4] dark:text-[#839496]">
        <p>
          adoro reinventar a roda no meu tempo livre.
        </p>
      </div>
    </div>

    <div class="flex items-center">
      <div class="mr-2 flex items-center gap-1.5 shrink-0">
          <span class="text-[#657b83] dark:text-[#839496] font-bold">ヾ(*'▽'*)</span>
          <span class="text-[#268bd2]">~/portfolio</span>
          <span class="text-[#657b83] dark:text-[#839496]">master<span class="text-pink-400 dark:text-pink-200">*</span></span>
          <span class="font-bold text-[#d33682]">λ</span>
      </div>

      <span>{currentCommandIndex === 2 ? displayedCommand : commands[2]}</span>

      {#if currentCommandIndex === 2 && !showExpOutput}
          <span class="inline-block w-2.5 h-5 bg-current ml-1 align-middle"></span>
      {/if}
    </div>
  {/if}

  {#if showExpOutput}
    <div class="mt-4 mb-2 pl-2 border-l-2 border-[#eee8d5] dark:border-[#073642]">

      <div class="flex flex-col gap-4">
        {#each experiences as exp}
          <div
            class="border border-[#eee8d5] dark:border-[#073642] p-3 cursor-pointer"
            onclick={() => toggleExp(exp.id)}
          >
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-[#2aa198] w-4 text-center">
                  {expandedExps.includes(exp.id) ? '▼' : '▶'}
                </span>
                <span class="font-bold text-[#6c71c4]">{exp.company}</span>
                <span class="opacity-60">—</span>
                <span class="font-semibold text-[#268bd2]">{exp.position}</span>
              </div>
              <div class="text-xs sm:text-sm text-[#cb4b16] opacity-80 font-semibold tracking-wide">
                [{formatDate(exp.startDate)} -> {formatDate(exp.endDate)}]
              </div>
            </div>

            {#if expandedExps.includes(exp.id)}
              <div class="mt-4 pl-6 animate-in slide-in-from-top-2 fade-in duration-200">
                <div class="italic opacity-90 border-l-2 border-[#d33682] pl-2 py-0.5 my-1">
                  {exp.description}
                </div>

                <ul class="flex flex-col gap-2 mt-3">
                  {#each exp.bullets as bullet}
                    <li class="flex items-start gap-2">
                      <span class="text-[#dc322f] shrink-0 font-bold">&gt;</span>
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
