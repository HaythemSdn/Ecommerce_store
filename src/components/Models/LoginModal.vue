<template lang="">
  <div class="relative w-full h-full max-w-md md:h-auto text-left">
    <!--Sign in Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <button
        v-on:click="store.methods.toggle(1)"
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
      <div class="px-6 py-6 lg:px-8">
        <h1
          class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white py-5"
        >
          Sign in to our platform
        </h1>
        <form class="space-y-6" @submit.prevent="handleSubmit">
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >Your password</label
            >
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <!-- <div class="flex justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Remember me</label
              >
            </div>
            <a
              href="#"
              class="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >Lost Password?</a
            >
          </div> -->
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div
            v-if="LoginSeccessed"
            class="p-4 mb-4 flex space-x-3 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-5 h-5 mr-3 text-green-900 font-semibold animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            <span class="font-medium">Login ...</span>
          </div>
          <div
            v-if="error"
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {{ error }}
          </div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <a
              v-on:click="store.methods.toSignUp"
              class="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
              >Create account</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginModal",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const store = inject("store");
    const router = useRouter();
    const LoginSeccessed = ref(false);
    const handleSubmit = async () => {
      try {
        await store.methods.login({
          email: email.value,
          password: password.value,
        });
        error.value = null;
        LoginSeccessed.value = true;
        setTimeout(() => router.push("/Admin/OverView"), 2000);
      } catch (err) {
        console.log(err);
        if (
          err == "FirebaseError: Firebase: Error (auth/network-request-failed)."
        ) {
          error.value = "Please Check your network and try again ";
        } else {
          error.value = "Email or password invalid , Try again ... ";
        }
      }
    };
    return { handleSubmit, email, password, error, store, LoginSeccessed };
  },
};
</script>
<style lang=""></style>
