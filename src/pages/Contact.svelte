<script>
  import emailjs from "@emailjs/browser";

  let isSuccess, isError = false;

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      const result = await emailjs.send("INSERT_SERVICEID_HERE", "INSERT_TEMPLATEID_HERE", {
        from_name: formData.name,
        to_name: "Eliza Emilia Semeniuk",
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      }, {
        publicKey: "INSERT_PUBLIC_KEY_HERE",
      });
      isSuccess = true;
      setTimeout(() => {
        document.getElementById("success-alert").classList.remove("opacity-0");
        setTimeout(() => {
          document.getElementById("success-alert").classList.add("opacity-0");
        }, 2500);
      }, 100);
    } catch (exception) {
      isError = true;
      setTimeout(() => {
        document.getElementById("error-alert").classList.remove("opacity-0");
        setTimeout(() => {
          document.getElementById("error-alert").classList.add("opacity-0");
        }, 2500);
      }, 100);
    }
  }
</script>

<section id="contact" class="contact-form">
  <h2 class="contact-me text-center text-4xl">Contact <span>Me</h2>
  
  <form on:submit={sendEmail} class="text-center">
    <div class="input-box">
      <input bind:value={formData.name} type="text" placeholder="Name" required>
      <input bind:value={formData.email} type="email" placeholder="E-mail" required>
      <input bind:value={formData.subject} type="text" placeholder="Subject" required>
    </div>

    <textarea
      bind:value={formData.message}
      cols="30"
      rows="10"
      placeholder="Your Message"
      class="w-full text-lg text-black bg-white"
      required
    />
    <input type="submit" value="Send Message" class="btnSend">
  </form>
</section>

{#if isSuccess}
  <div
    role="alert"
    id="success-alert"
    class="overflow-x-auto overflow-y-auto fixed top-1/2 left-1/3 w-1/3 opacity-0 transition-opacity ease-in-out delay-150 duration-300"
  >
    <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">Success</div>
    <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
      Your message has been sent successfully!
    </div>
  </div>
{:else if isError}
  <div
    role="alert"
    id="error-alert"
    class="overflow-x-auto overflow-y-auto fixed top-1/2 left-1/3 w-1/3 opacity-0 transition-opacity ease-in-out delay-300 duration-500"
  >
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Error</div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      There was an error sending your message. Please try again later.
    </div>
  </div>
{/if}