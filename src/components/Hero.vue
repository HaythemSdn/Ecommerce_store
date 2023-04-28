<template>
  <div class="grid grid-cols-2 p-10 h-screen">
    <div class="flex flex-col text-left px-36 py-36 justify-evenly">
      <p class="text-6xl font-thin leading-tight">Vue Shop For Developers</p>
      <p class="text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed magnam cum
        eius nam ut non atque pariatur iusto nostrum quis dolores, labore at.
        Doloribus aspernatur aut eligendi provident distinctio similique!
      </p>
      <div class="flex space-x-10">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore
        </button>

        <button
          type="button"
          class="py-3 px-12 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Products
        </button>
      </div>
    </div>
    <div class="">
      <img src="../../public/img/graphic.svg" alt="" class="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Hero",
};
</script>
<style lang=""></style>
