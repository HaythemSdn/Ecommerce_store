<template lang="">
  <div
    id="staticModal"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full flex bg-opacity-70 bg-white justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
  >
    <div class="relative w-full h-full max-w-6xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Product informations
          </h3>
          <button
            v-on:click="store.methods.toggle(2)"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="staticModal"
          >
            <svg
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
          </button>
        </div>
        <!-- Modal body -->
        <form
          @submit.prevent="
            store.state.modal == 'add' ? AddProduct() : EditProduct()
          "
        >
          <div class="flex w-full justify-evenly py-6">
            <div class="w-7/12 flex flex-col space-y-5">
              <input
                v-model="Product.name"
                type="text"
                name="text"
                id="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Product name"
                required
              />
              <QuillEditor
                v-model:content="Product.description"
                contentType="text"
                theme="snow"
              />
            </div>
            <div class="w-4/12 text-left flex flex-col space-y-1">
              <p class="text-2xl font-medium">Product Details</p>
              <hr />
              <input
                v-model="Product.price"
                type="number"
                name="ProductPrice"
                id="ProductPrice"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Product Price"
                required
              />
              <input
                v-model="tag"
                type="text"
                @keypress.,="addTag"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Product Tags"
              />
              <div class="flex w-full flex-wrap" v-if="Product.tags.length > 0">
                <span
                  v-for="(tag, index) in Product.tags"
                  :key="index"
                  class="tag inline-flex items-center px-2 py-1 mr-1 mb-1 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300"
                >
                  {{ tag }}
                  <button
                    v-on:click="removeTag(index)"
                    type="button"
                    class="inline-flex items-center p-0.5 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
                  >
                    <svg
                      class="w-3.5 h-3.5"
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
                    <span class="sr-only">Remove badge</span>
                  </button>
                </span>
              </div>
              <div
                v-else
                class="flex mb-5 text-sm text-blue-800 rounded-lg dark:bg-gray-800 dark:text-blue-400 justify-end"
              >
                <svg
                  class="flex-shrink-0 inline w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Info</span>
                <span>Separate tags with comma ","</span>
              </div>
              <label for="ProductImage " class="font-bold">Product Image</label>

              <input
                v-on:change="UploadImage"
                type="file"
                id="ProductImage"
                name="ProductImage"
                accept="image/png, image/jpeg"
                class="border-1 w-full mb-0"
              />
              <div
                class="flex w-full flex-wrap"
                v-if="Product.images.length > 0"
              >
                <div
                  v-for="(image, index) in Product.images"
                  :key="index"
                  class="bg-white relative mr-2 mb-1"
                >
                  <button
                    class="absolute -right-2 -top-1 text-red-400 font-bold"
                    v-on:click="removeImage(index, image)"
                  >
                    <svg
                      class="w-3.5 h-3.5 bg-white rounded-md"
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
                  </button>
                  <img :src="image" alt="" class="w-14 h-12 rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="AddingSeccessed"
            class="p-4 mb-4 flex space-x-3 w-8/12 mx-auto text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
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
            <span class="font-medium">{{ ModalText }}</span>
          </div>
          <!-- <div
            v-if="error"
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {{ error }}
          </div> -->
          <!-- Modal footer -->
          <div
            class="flex items-center flex-row-reverse p-6 space-x-reverse space-x-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="store.methods.toggle(2)"
              data-modal-hide="staticModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
            <button
              v-if="store.state.modal == 'add'"
              data-modal-hide="staticModal"
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Now
            </button>
            <button
              v-if="store.state.modal == 'edit'"
              data-modal-hide="staticModal"
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { inject, ref, reactive } from "vue";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { ref as storageRef } from "firebase/storage";
import { db } from "@/firebase";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "ProductModal",
  components: {
    QuillEditor,
  },

  setup() {
    const store = inject("store");
    const tag = ref();
    let file = null;
    const ModalText =
      store.state.modal == "add"
        ? "Adding product ..."
        : "Updating product ...";
    const AddingSeccessed = ref(false);
    // const error = ref();

    const Product =
      store.state.modal == "add"
        ? reactive({
            name: "",
            description: "",
            price: "",
            tags: [],
            images: [],
          })
        : reactive(store.state.CurrentPrdct.data());
    const AddProduct = async () => {
      console.log("yes");
      try {
        const docRef = await addDoc(collection(db, "Products"), {
          name: Product.name,
          description: Product.description,
          price: Product.price,
          tags: Product.tags,
          images: Product.images,
        });
        AddingSeccessed.value = true;
        setTimeout(() => store.methods.toggle(0), 1500);
        window.location.reload(true);
      } catch (e) {
        console.log(e);
      }
    };
    const EditProduct = async () => {
      // Add a new document in collection "cities"
      await setDoc(
        doc(db, "Products", store.state.CurrentPrdct.id),
        reactive({
          name: Product.name,
          description: Product.description,
          price: Product.price,
          tags: Product.tags,
          images: Product.images,
        })
      );
      AddingSeccessed.value = true;
      setTimeout(() => store.methods.toggle(0), 1500);
      window.location.reload(true);
    };
    const addTag = () => {
      Product.tags.push(tag.value);
      setTimeout(() => (tag.value = ""), 10);
    };

    const removeTag = (index) => {
      Product.tags.splice(index, 1);
      tag.value += " ";
      tag.value = "";
    };
    const removeImage = (index, image) => {
      Product.images.splice(index, 1);

      // Delete the file
      deleteObject(image)
        .then(() => {
          console.log("deleted");
        })
        .catch((error) => {
          console.log("err in deleting");
        });
    };
    const UploadImage = async (e) => {
      if (e.target.files[0]) {
        file = e.target.files[0];
        let OurUrl = "";
        const storage = getStorage();
        const ProductsRef = storageRef(storage, "Products/" + file.name);
        const uploadTask = uploadBytesResumable(ProductsRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              Product.images.push(downloadURL);
              OurUrl = downloadURL;
            });
          }
        );
      }
      if (!AddingSeccessed) {
        Product.images.pop();
        removeImage(_,OurUrl);
      }
    };
    return {
      store,
      removeImage,
      removeTag,
      AddProduct,
      Product,
      AddingSeccessed,
      EditProduct,
      ModalText,
      addTag,
      tag,
      UploadImage,
    };
  },
};
</script>
<style lang=""></style>
