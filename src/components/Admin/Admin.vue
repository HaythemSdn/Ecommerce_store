<template lang="">
  <div class="flex h-screen space-x-10 w-full fixed">
    <div v-if="toggle" class="pl-4">
      <button v-on:click="toggleSide" class="animate-bounce">
        <img
          src="../../assets/menu.png"
          alt=""
          class="w-7 h-7 relative right-4 top-4"
        />
      </button>
    </div>
    <div
      v-else
      class="flex flex-col space-y-5 bg-zinc-800 w-1/5 p-10 text-white h-full"
    >
      <div class="pro flex justify-between">
        <p class="text-2xl font-semibold uppercase">Pro sidebar</p>
        <button v-on:click="toggleSide" class="animate-bounce">
          <img
            src="../../assets/cross.jpg"
            alt=""
            class="w-5 h-5 self-center"
          />
        </button>
      </div>
      <hr />
      <div class="flex justify-between pr-10 py-5">
        <img
          src="../../assets/haythem.jpg"
          alt=""
          class="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <p class="mb-2 text-left">Jhon Smith</p>
          <p>{{userEmail}}</p>
          <div class="py-3 flex space-x-3 items-center">
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <p>online</p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-11/12 mx-auto">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-zinc-700 border border-gray-300 text-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
        </div>
      </div>
      <hr />
      <div class="">
        <p class="text-left text-zinc-500 text-medium font-semibold p-2">
          Menu
        </p>
        <div class="flex flex-col space-y-4 text-black uppercase">
          <router-link to="/Admin/OverView">
            <div class="flex space-x-5 p-3 bg-gray-100 rounded-sm">
              <img
                src="../../assets/business-analyst.png"
                alt=""
                class="w-6 h-5 self-center"
              />
              <p class="cursor-pointer">Overview</p>
            </div>
          </router-link>
          <router-link to="/Admin/Products">
            <div class="flex space-x-5 p-3 bg-gray-100 rounded-sm">
              <img
                src="../../assets/gift.png"
                alt=""
                class="w-6 h-5 self-center"
              />
              <p>Products</p>
            </div>
          </router-link>
          <router-link to="/Admin/Orders">
            <div class="flex space-x-5 p-3 bg-gray-100 rounded-sm">
              <img
                src="../../assets/checkout.png"
                alt=""
                class="w-6 h-5 self-center"
              />
              <p>Orders</p>
            </div>
          </router-link>
          <router-link to="/Admin/Profile">
            <div class="flex space-x-5 p-3 bg-gray-100 rounded-sm">
              <img
                src="../../assets/user.png"
                alt=""
                class="w-6 h-5 self-center"
              />
              <p>Profile</p>
            </div>
          </router-link>
          <button v-on:click="handleSubmit">
            <div class="flex space-x-5 p-3 bg-gray-100 rounded-sm">
              <img
                src="../../assets/log-out.png"
                alt=""
                class="w-6 h-5 self-center"
              />
              <p>Log out</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      class="p-10 overflow-y-scroll"
      :class="[toggle ? 'w-full' : 'w-4/5', errorClass]"
    >
      <Suspense>
        <router-view />
      </Suspense>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { Auth } from "@firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "@/firebase";
export default {
  name: "Admin",
  data() {
    return {
      toggle: false,
      error: "",
    };
  },
  methods: {
    toggleSide() {
      this.toggle = !this.toggle;
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const userEmail = auth.currentUser.email;
    const handleSubmit = async () => {
      try {
        await store.methods.logout();
        router.push("/");
      } catch (err) {
        this.error = err.message;
      }
    };
    return { handleSubmit, userEmail };
  },
};
</script>
<style lang=""></style>
