<script>
  export let isMobile;
</script>

<section class="my-portfolio flex w-full min-h-screen bg-white items-center gap-28">
  <div class="portfolio-content {isMobile ? 'mt-24' : ''}">
    <h3 class="text-4xl {isMobile ? 'mt-48' : ''}">Sapphify</h3>
    <p class="text-lg">A modern meet/dating app for sapphics.</p>
    <div class="portfolio-desc absolute inset-y-3/4 p-5 mt-2 {isMobile ? 'w-8/12' : 'w-4/12'} rounded-xl">
      <h4 class="text-2xl {isMobile ? 'mt-48' : ''}">Description</h4>
      <p>
        Sapphify is a modern, user-friendly meet/dating app for sapphics. Users can create profiles, upload photos, and set up meet-and-greets. The app features a clean, modern design, and an intuitive interface. Currently Sapphify is in development and will be available soon.
      </p>
      <p class="link">🌐 Visit (coming soon)</p>
      <p class="link">📝 Source code (coming soon)</p>
      <div class="portfolio-showcase portfolio-sapphify {isMobile ? 'relative mt-48 left-[10%] w-64 h-64' : 'absolute'} text-white bg-black/75 w-full p-5 top-2/4 rounded-xl">
        <img src="https://github.com/sech1p/sech1p.art/raw/refs/heads/main/assets/sapphify.png" class="{isMobile ? 'w-full h-full' : ''}" alt="Sapphify showcase">
      </div>
    </div>
  </div>
</section>