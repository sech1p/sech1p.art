<script>
  import {
    Router,
    Route,
    Link,
  } from "svelte-routing";
  import Home from "./pages/Home.svelte";
</script>

<Router>
  <header class="header flex flex-1 bg-black/80 fixed top-0 left-0 backdrop-filter backdrop-blur-md items-center justify-between w-full z-100">
    <Link to="/" class="logo text-white"><span>sec</span>h1p</Link>
    <nav class="navbar text-xl text-white">
      <Link to="/" class="active nav-link">Home</Link>
      <a href="#" class="nav-link">My interests</a>
      <a href="#" class="nav-link">Portfolio</a>
      <a href="#" class="nav-link">Donations</a>
    </nav>
    <a href="#contact" class="contact bg-white text-black border-2 rounded-3xl text-base hover:text-white">Contact Me</a>
  </header>

  <main>
    <Route path="/" component={Home} />
  </main>
</Router>