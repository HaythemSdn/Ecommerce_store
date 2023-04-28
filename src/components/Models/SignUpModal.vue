<template lang="">
  <!--Sign up Modal content -->
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 text-left"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
      <button
        v-on:click="store.methods.toggle"
        type="button"
        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        data-modal-hide="authentication-modal"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
      <h1
        class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Create and account
      </h1>
      <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >Your name</label
          >
          <input
            type="text"
            v-model="name"
            name="name"
            id="name"
            placeholder="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create an account
        </button>
        <div
          v-if="SignUpSeccessed"
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">You have signed up seccessfully !!</span>
        </div>
        <p
          class="text-sm font-light text-gray-500 dark:text-gray-400 cursor-pointer"
        >
          Already have an account?
          <a
            v-on:click="store.methods.toLogin"
            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >Login here</a
          >
        </p>
      </form>
      <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>
<script>
import { ref, inject } from "vue";

export default {
  name: "SignUpModal",
  data() {
    return {
      name: "",
    };
  },

  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const store = inject("store");
    const SignUpSeccessed = ref(false);

    const handleSubmit = async () => {
      try {
        await store.methods.signup({
          email: email.value,
          password: password.value,
        });
        SignUpSeccessed.value = true;
        setTimeout(store.methods.toLogin, 3000);
      } catch (err) {
        error.value = err.message;
      }
    };

    return { handleSubmit, email, password, error, store, SignUpSeccessed };
  },
};
</script>
<style lang=""></style>
