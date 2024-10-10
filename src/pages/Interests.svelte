<script>
  export let isMobile;
</script>

<section class="my-interests flex w-full min-h-screen bg-white items-center gap-28 {isMobile ? 'mt-48' : ''}">
  <div class="interests-content">
    <h2 class="text-3xl font-bold text-gray-900 {isMobile ? 'mt-48' : ''}">My Interests</h2>
    <p class="text-gray-700">
      I'm always on the lookout for new experiences and learning new things. Here are a few of my favorite hobbies and interests:
    </p>
    <ul class="interests">
      <li>
        <p class="font-bold text-blue-600 hover:text-blue-800"><i class="fa fa-camera"></i> Photography</p>
        <p class="text-gray-700">
          I enjoy capturing the beauty and uniqueness of the natural world through my camera. I have a <a class="link" href="https://en.wikipedia.org/wiki/Kodak_EasyShare_DX4530">Kodak EasyShare DX4530</a> camera from 2003.
        </p>
      </li>
      <li>
        <p class="font-bold text-blue-600 hover:text-blue-800"><i class="fa fa-palette"></i> Computer Graphics/Drawing</p>
        <p class="text-gray-700">
          I enjoy creating both graphics and drawings digitally, offering everything from simple logos to full layouts. I work with Adobe Photoshop 2024 and paint.net for graphics, and Krita for illustrations. For drawing, I use a Wacom Bamboo MTE-450A tablet.
        </p>
      </li>
      <li>
        <p class="font-bold text-blue-600 hover:text-blue-800"><i class="fa fa-music"></i> Music production</p>
        <p class="text-gray-700">I love making music! I'm passionate about rave culture, and I create gabber, uptempo, and techno tracks. I use Ableton Live 11 for music production.</p>
      </li>
      <li>
        <p class="font-bold text-blue-600 hover:text-blue-800"><i class="fa fa-location-dot"></i> Traveling</p>
        <p class="text-gray-700">
          I love traveling, I traveled to the other end of Poland by train to visit various wonderful cities. I also traveled abroad, including the Czech Republic, Germany, Sweden, Switzerland, etc.
        </p>
      </li>
    </ul>
  </div>
</section>