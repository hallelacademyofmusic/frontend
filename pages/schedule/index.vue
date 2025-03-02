<script setup>

definePageMeta({
  middleware: 'auth'
})

</script>

<template>

    <Header />
    <div class="p-6">
        <BookingsCalendar />
    </div>

</template>
