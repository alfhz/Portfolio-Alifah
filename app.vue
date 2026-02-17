<script setup lang="ts">
// --- SEO & META CONFIG ---
useHead({
  title: 'Alifah Zachra | Portfolio',
  meta: [
    { name: 'description', content: 'Professional Portfolio of Alifah Zachra - Software Engineering & Project Management.' }
  ],
  htmlAttrs: {
    class: 'scroll-smooth' // Agar scroll halaman terasa halus
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-brand-lime selection:text-slate-900">
    
    <AppNavbar />

    <main>
      <HeroSection />
      
      </main>

    <AppFooter />
    
  </div>
</template>