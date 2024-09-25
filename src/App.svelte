<script>
  import { onMount } from "svelte";
  import {
    Router,
    Route,
    Link,
  } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Interests from "./pages/Interests.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Blahaj from "./pages/portfolio/Blahaj.svelte";
  import Donate from "./pages/Donate.svelte";

  let currentLocation = "";

  onMount(() => {
    currentLocation = window.location.pathname;
  });

  const handleLinkClick = location => {
    currentLocation = location;
  }
</script>

<Router>
  <header class="header flex flex-1 bg-black/80 fixed top-0 left-0 backdrop-filter backdrop-blur-md items-center justify-between w-full z-100">
    <Link on:click={() => handleLinkClick("/")} to="/" class="logo text-white"><span>sec</span>h1p</Link>
    <nav class="navbar text-xl text-white">
      <Link
        to="/"
        on:click={() => handleLinkClick("/")}
        class="{currentLocation === '/' ? 'active' : ''} nav-link"
      >
        Home
      </Link>
      <Link
        to="/interests"
        on:click={() => handleLinkClick("/interests")}
        class="{currentLocation === '/interests' ? 'active' : ''} nav-link"
      >
        My interests
      </Link>
      <Link
        to="/portfolio"
        on:click={() => handleLinkClick("/portfolio")}
        class="{currentLocation === '/portfolio' ? 'active' : ''} nav-link"
      >
        Portfolio
      </Link>
      <Link
        to="/donations"
        on:click={() => handleLinkClick("/donations")}
        class="{currentLocation === '/donations' ? 'active' : ''} nav-link"
      >
        Donations
      </Link>
    </nav>
    <a href="#contact" class="{currentLocation === '/' ? '' : 'invisible'} contact bg-white text-black border-2 rounded-3xl text-base hover:text-white">Contact Me</a>
  </header>

  <main>
    <Route path="/" component={Home} />
    <Route path="/interests" component={Interests} />
    <Route path="/portfolio" component="{Portfolio}" />
    <Route path="/portfolio/blahaj" component="{Blahaj}" />
    <Route path="/donations" component="{Donate}" />
  </main>

  <footer class="footer relative bottom-0 w-full bg-black">
    <ul class="list mt-0 mb-0 p-0 text-lg text-center text-white">
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">My Card</a>
      </li>
      <li>
        <a href="#">Privacy Policy</a>
      </li>
      <li>
        <a href="#">Source code</a>
      </li>
    </ul>
    <p class="text-xs mt-15 text-white text-center">© 2024 Eliza Emilia "sech1p" Semeniuk. Licensed under Apache-2.0 license.</p>
  </footer>
</Router>