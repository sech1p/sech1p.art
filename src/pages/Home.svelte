<script>
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
</script>

<section class="home flex w-full min-h-screen bg-white items-center gap-28">
  <div class="home-content">
    <h3>Hi!</h3>
    <h1>I'm <span>Eliza<br></span>a Fullstack Developer</h1>
    <p>
      I'm a passionate and dedicated software engineer. I specialize in building scalable and maintainable applications using modern technologies like TypeScript, WebSockets, and Svelte. I'm currently looking for opportunities to work on cutting-edge projects and contribute to the tech community.
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
<Contact />