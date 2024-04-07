<template>
  <div class="flex flex-col items-center justify-center min-h-screen ">
    <div v-if="!formSubmitted" class="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-4">Contact Me</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium">Your Name</label>
          <input type="text" id="name" v-model="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium">Your Address</label>
          <input type="email" id="email" v-model="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium">Your Email</label>
          <input type="email" id="email" v-model="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-medium">Message</label>
          <textarea id="message" v-model="message" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
        </div>
        <button type="submit" class="w-full bg-black  text-white font-semibold py-2 px-4 rounded-md transition duration-300">Send Message</button>
      </form>
    </div>
    <div v-if="formSubmitted" class="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
      <p class="text-xl font-semibold text-green-600">Message sent successfully!</p>
      <p class="mt-3 text-gray-600">Thank you for contacting me. I'll get back to you as soon as possible.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const formSubmitted = ref(false);

const submitForm = () => {
  // Here you can perform any client-side validation if needed
  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate form submission (no backend involved in this example)
  console.log('Form submitted:', { name: name.value, email: email.value, message: message.value });

  // Reset form fields and set formSubmitted to true
  name.value = '';
  email.value = '';
  message.value = '';
  formSubmitted.value = true;
};
</script>
