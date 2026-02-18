<template>
    <div class="fixed inset-0 z-[100] bg-slate-50 overflow-y-auto animate-fade-in">
        
        <div class="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <button @click="$emit('close')" class="p-2 hover:bg-slate-100 rounded-full transition group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-slate-800 group-hover:-translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </button>
            <h1 class="text-2xl md:text-3xl font-extrabold tracking-[0.2em] uppercase text-slate-900">
            {{ project.title }}
            </h1>
            <div class="w-8"></div> </div>
        </div>

        <div class="container mx-auto px-4 md:px-6 py-8 pb-20">
        
        <div class="relative w-full max-w-5xl mx-auto aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-lg mb-8 group">
            <img 
            :src="project.images[activeImageIndex]" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            alt="Project Screenshot"
            />
            
            <div v-if="project.images.length > 1">
            <button @click="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-brand-lime hover:scale-110 transition shadow-md">
                ◀
            </button>
            <button @click="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-brand-lime hover:scale-110 transition shadow-md">
                ▶
            </button>
            </div>

            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span 
                v-for="(_, idx) in project.images" 
                :key="idx"
                class="w-2 h-2 rounded-full transition-all"
                :class="idx === activeImageIndex ? 'bg-brand-lime w-6' : 'bg-white/60'"
            ></span>
            </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 max-w-5xl mx-auto mb-10 flex flex-wrap gap-6 justify-between items-center">
            
            <div class="flex-1 min-w-[200px]">
            <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Category</p>
            <p class="font-bold text-slate-800">{{ project.category }}</p>
            </div>
            
            <div class="hidden md:block w-px h-10 bg-slate-200"></div>

            <div class="flex-1 min-w-[200px]">
            <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Role</p>
            <p class="font-bold text-slate-800">{{ project.role }}</p>
            </div>

            <div class="hidden md:block w-px h-10 bg-slate-200"></div>

            <div class="flex-1 min-w-[200px]">
            <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Period</p>
            <p class="font-bold text-slate-800">{{ project.period }}</p>
            </div>

            <div class="hidden md:block w-px h-10 bg-slate-200"></div>

            <div class="flex-1 min-w-[200px]">
            <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Technology</p>
            <div class="flex gap-2 text-xl">
                <span v-for="tech in project.techStack" :key="tech" class="grayscale hover:grayscale-0 transition cursor-help" :title="tech">
                {{ getTechIcon(tech) }}
                </span>
            </div>
            </div>
        </div>

        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start relative">
            
            <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-purple -translate-x-1/2 rounded-full"></div>

            <div>
            <h3 class="text-lg font-bold text-slate-900 underline decoration-2 decoration-brand-lime underline-offset-4 mb-4">
                Project Description:
            </h3>
            <p class="text-slate-600 leading-relaxed text-justify">
                {{ project.projectDesc }}
            </p>
            </div>

            <div>
            <h3 class="text-lg font-bold text-slate-900 underline decoration-2 decoration-brand-lime underline-offset-4 mb-4">
                Job Description:
            </h3>
            <p class="text-slate-600 leading-relaxed text-justify">
                {{ project.jobDesc }}
            </p>
            </div>
        </div>

        <div class="text-center mt-16">
            <a 
            :href="project.sourceUrl" 
            target="_blank"
            class="inline-block bg-brand-lime text-brand-dark font-black px-12 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-lime-400 transition-all uppercase tracking-widest text-sm"
            >
            View Source
            </a>
        </div>

        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import type { PortfolioItem } from '~/types'

    const props = defineProps<{
    project: PortfolioItem
    }>()

    defineEmits(['close'])

    // Logic Image Slider
    const activeImageIndex = ref(0)

    function nextImage() {
    if (activeImageIndex.value < props.project.images.length - 1) {
        activeImageIndex.value++
    } else {
        activeImageIndex.value = 0
    }
    }

    function prevImage() {
    if (activeImageIndex.value > 0) {
        activeImageIndex.value--
    } else {
        activeImageIndex.value = props.project.images.length - 1
    }
    }

    // Helper Simple buat Icon (Bisa diganti image asli nanti)
    function getTechIcon(name: string) {
    const icons: Record<string, string> = {
        'Vue': '🟢', 'React': '🔵', 'Laravel': '🔴', 'Tailwind': '🌊', 'Figma': '🎨', 'Node': '🟩'
    }
    return icons[name] || '💻'
    }
    </script>

    <style scoped>
    .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>