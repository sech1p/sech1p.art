<script>
  import { navigate } from "svelte-routing";

  const redirectToProject = project => {
    navigate(`/portfolio/${project}`);
  }

  export let isMobile;
</script>

<section class="my-portfolio flex w-full min-h-screen bg-white items-center gap-28">
  <div class="portfolio-menu-content {isMobile ? 'flex-col items-center mt-72 mb-2' : ''}">
    <div class="{isMobile ? 'mt-48 portfolio-item-mobile' : 'portfolio-item'} mb-8 overflow-hidden rounded-xl" on:click={() => redirectToProject("blahaj")}>
      <img src="assets/blahaj.webp" alt="Blahaj">
      <h3 class="text-3xl">blahaj</h3>
    </div>
    <div class="{isMobile ? 'mt-48 portfolio-item-mobile' : 'portfolio-item'} mb-8 overflow-hidden rounded-xl" on:click={() => redirectToProject("sapphify")}>
      <img src="assets/sapphify_logo.png" alt="Sapphify">
      <h3 class="text-3xl">Sapphify</h3>
    </div>
    <div class="{isMobile ? 'mt-48 portfolio-item-mobile' : 'portfolio-item'} mb-8 overflow-hidden rounded-xl" on:click={() => redirectToProject("website")}>
      <img src="assets/website.png" alt="Website">
      <h3 class="text-3xl">sech1p.art</h3>
    </div>
  </div>
</section>