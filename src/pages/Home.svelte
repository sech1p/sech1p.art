<script>
  import About from "./About.svelte";
</script>

<section class="home flex w-full min-h-screen bg-white items-center gap-28">
  <div class="home-content">
    <h3>Hi!</h3>
    <h1>I'm <span>Eliza<br></span>a Fullstack Developer</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="btns flex gap-8">
      <button class="btn1 bg-black text-white rounded-2xl text-lg tracking-widget hover:bg-white hover:text-black">Hire me!</button>
      <button
        on:click="{() => document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}"
        class="btn2 text-white rounded-2xl text-lg tracking-widget hover:bg-white hover:text-black"
      >
        About me
      </button>
    </div>
  </div>
</section>
<About />