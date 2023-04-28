<template lang="">
  <div class="flex justify-around items-center">
    <div>
      <p class="text-3xl">Profile page</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores
        ipsa ut esse corrupti voluptatem! Accusamus maxime deleniti temporibus
        voluptatum, voluptatibus minima. Magni esse amet fuga voluptatibus,
        quasi est optio?
      </p>
    </div>
    <img src="../../../public/img/profile.svg" alt="" class="w-1/3" />
  </div>
  <div class="flex flex-col px-24 space-y-11">
    <div class="flex space-x-7">
      <button
        @click="store.methods.toggle(4)"
        :class="
          store.state.Profile
            ? 'bg-gradient-to-r from-blue-700 to-indigo-500 hover:from-blue-900 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-pulse'
            : 'text-medium'
        "
      >
        Profile
      </button>
      <button
        @click="store.methods.toggle(5)"
        :class="
          !store.state.Profile
            ? 'bg-gradient-to-r from-blue-700 to-indigo-500 hover:from-blue-900 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-pulse'
            : 'text-medium'
        "
      >
        Account Settings
      </button>
    </div>
    <ProfileForm />
  </div>
</template>
<script>
import ProfileForm from "../../components/forms/ProfileForm.vue";
import { inject } from "vue";
export default {
  name: "Profile",
  components: {
    ProfileForm,
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>
<style lang=""></style>
