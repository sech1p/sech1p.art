<script>
  import { navigate } from "svelte-routing";

  const redirectToProject = project => {
    navigate(`/portfolio/${project}`);
  }
</script>

<section class="my-portfolio flex w-full min-h-screen bg-white items-center gap-28">
  <div class="portfolio-menu-content">
    <div class="portfolio-item mb-8 overflow-hidden rounded-xl" on:click={() => redirectToProject("blahaj")}>
      <img src="assets/blahaj.webp" alt="Blahaj">
      <h3 class="text-3xl">blahaj</h3>
    </div>
    <div class="portfolio-item mb-8 overflow-hidden rounded-xl" on:click={() => redirectToProject("website")}>
      <img src="assets/website.png" alt="Website">
      <h3 class="text-3xl">sech1p.ovh</h3>
    </div>
  </div>
</section>