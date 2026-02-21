<script setup lang="ts">
useHead({
  title: 'Alifah Zachra | Portfolio',
  meta: [
    { name: 'description', content: 'Professional Portfolio of Alifah Zachra - Software Engineering & Project Management.' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ],
  htmlAttrs: {
    class: 'scroll-smooth' 
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-brand-lime selection:text-slate-900">
    
    <AppNavbar />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationSection />
      <TaskSection />
      <PortfolioSection />
    </main>

    <AppFooter />
    
  </div>
</template>