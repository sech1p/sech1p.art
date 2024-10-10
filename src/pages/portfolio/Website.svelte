<script>
  export let isMobile;
</script>

<section class="my-portfolio flex w-full min-h-screen bg-white items-center gap-28">
  <div class="portfolio-content {isMobile ? 'mt-24' : ''}">
    <h3 class="text-4xl {isMobile ? 'mt-48' : ''}">sech1p.art</h3>
    <p class="text-lg">🌐 My personal website</p>
    <div class="portfolio-desc absolute inset-y-3/4 p-5 mt-2 {isMobile ? 'w-8/12' : 'w-4/12'} rounded-xl">
      <h4 class="text-2xl {isMobile ? 'mt-48' : ''}">Description</h4>
      <p>
        This is my personal website with my portfolio. It's built using Svelte, Tailwind, CSS and TypeScript.
      </p>
      <a class="link" href="https://github.com/sech1p/sech1p.art">📝 Source code</a>
    </div>
    <div class="portfolio-showcase {isMobile ? 'relative mt-48 left-[10%] w-64 h-64' : 'absolute'} text-white bg-black/75 w-4/12 p-5 top-2/4 rounded-xl">
      <img src="https://github.com/sech1p/sech1p.art/raw/refs/heads/main/assets/website.png" class="{isMobile ? 'w-full h-full' : ''}" alt="My website showcase">
    </div>
  </div>
</section>