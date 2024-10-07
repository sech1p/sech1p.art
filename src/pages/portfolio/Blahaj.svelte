<script>
  export let isMobile;
</script>

<section class="my-portfolio flex w-full min-h-screen bg-white items-center gap-28">
  <div class="portfolio-content {isMobile ? 'mt-24' : ''}">
    <h3 class="text-4xl">blahaj</h3>
    <p class="text-lg">🦈 Beloved IKEA shark, now in your terminal!</p>
    <div class="portfolio-desc absolute inset-y-3/4 p-5 mt-2 {isMobile ? 'w-8/12' : 'w-4/12'} rounded-xl">
      <h4 class="text-2xl">Description</h4>
      <p>
        blahaj is a command-line tool that displays plushie images, colors your text with queer themes, and <i>will soon</i> feature pride flags in your terminal.
      </p>
      <a class="link" href="https://github.com/sech1p/blahaj/releases">💾 Download</a>
      <a class="link" href="https://github.com/sech1p/blahaj">📝 Source code</a>
    </div>
    <div class="portfolio-showcase {isMobile ? 'relative mt-48 left-[10%] w-64 h-64' : 'absolute'} text-white bg-black/75 w-4/12 p-5 rounded-xl">
      <img src="https://raw.githubusercontent.com/sech1p/blahaj/refs/heads/master/images/blahaj_showcase.gif" class="{isMobile ? 'w-full h-full' : ''}" alt="blahaj command-line program showcase">
    </div>
  </div>
</section>