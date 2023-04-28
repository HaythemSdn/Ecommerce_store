<template lang="">
  <ProductModal v-if="store.state.togglePrdctModal"></ProductModal>
  <div class="flex justify-around items-center">
    <div>
      <p class="text-3xl">Product page</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores
        ipsa ut esse corrupti voluptatem! Accusamus maxime deleniti temporibus
        voluptatum, voluptatibus minima. Magni esse amet fuga voluptatibus,
        quasi est optio?
      </p>
    </div>
    <img src="../../../public/img/products.svg" alt="" class="w-1/2" />
  </div>

  <div
    class="relative w-10/12 overflow-x-auto shadow-md sm:rounded-lg mx-auto p-8 mt-32"
  >
    <div class="flex justify-between">
      <p class="self-center text-2xl font-semibold">Product List</p>
      <button
        v-on:click="store.methods.toggle(2)"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add Product
      </button>
    </div>
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      v-if="Products.length > 0"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="(Product, index) in Products"
          :key="index"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
          >
            {{ Product.data().name }}
          </th>
          <td class="px-6 py-4 text-black">{{ Product.data().price }}</td>
          <td class="px-6 py-4 text-right flex space-x-3">
            <a
              href="#"
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
              @click="Delete(Product.id)"
              >delete</a
            >
            <a
              @click="Edit(Product)"
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <NoProduct v-else></NoProduct>
  </div>
</template>
<script>
import ProductModal from "../../components/Models/ProductModal.vue";
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "@/firebase";
import { inject } from "vue";
import NoProduct from "@/components/others/NoProduct.vue";
export default {
  name: "Products",
  components: {
    ProductModal,
    NoProduct,
  },

  async setup() {
    const Products = [];
    const store = inject("store");
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      Products.push(doc);
    });
    const Delete = (dc) => {
      let confirmed = false;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(doc(db, "Products", dc));
          Swal.fire({
            title: "Deleted",
            text: "Your product has been deleted",
            icon: "success",
            showConfirmButton: false,
          });
          setTimeout(() => window.location.reload(true), 1000);
        }
      });
    };
    const Edit = (product) => {
      console.log("bb");
      store.methods.toggle(3);
      store.state.CurrentPrdct = product;
    };
    return {
      store,
      Products,
      Delete,
      Edit,
    };
  },
};
</script>
<style lang=""></style>
