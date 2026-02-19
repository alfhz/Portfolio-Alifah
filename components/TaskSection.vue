<template>
    <section class="py-20 bg-white" id="tasks">
        <div class="container mx-auto px-4 sm:px-6">
        
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-slate-900 mb-4">
            Assignments
            </h2>
            <div class="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
        </div>

        <div class="max-w-6xl mx-auto relative group">
            
            <button 
            @click="prevTask"
            class="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 bg-white text-slate-800 p-3 rounded-full shadow-lg border border-slate-100 hover:bg-brand-purple hover:text-white transition-all duration-300 hidden md:flex items-center justify-center group-hover:scale-110"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            </button>

            <div class="bg-gradient-to-br from-purple-100 via-white to-indigo-50 rounded-[2.5rem] shadow-xl border border-white/50 overflow-hidden relative min-h-[500px] flex flex-col md:flex-row transition-all duration-500">
            
            <div class="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center relative z-10 order-2 md:order-1">
                <Transition name="fade" mode="out-in">
                <div :key="activeTask!.id" class="space-y-4">
                    <h3 class="text-3xl font-extrabold text-slate-900 leading-tight">
                    {{ activeTask!.label }}
                    </h3>
                    <p class="text-xl font-bold text-brand-purple">
                    {{ activeTask!.title }}
                    </p>
                    <p class="text-slate-600 leading-relaxed text-sm md:text-base">
                    {{ activeTask!.desc }}
                    </p>
                </div>
                </Transition>
            </div>

            <div class="w-full md:w-7/12 bg-white/40 backdrop-blur-sm p-6 md:p-8 flex items-center justify-center relative order-1 md:order-2 min-h-[300px]">
                <Transition name="slide-fade" mode="out-in">
                <div :key="activeTask!.id" class="w-full h-full flex items-center justify-center relative rounded-2xl overflow-hidden bg-white shadow-inner border border-white/60 aspect-video">
                    
                    <div v-if="activeTask!.type === 'document'" class="flex flex-col items-center justify-center text-slate-400 gap-4 p-8 text-center h-full w-full bg-slate-50">
                    <div class="w-24 h-32 bg-white border-2 border-slate-200 rounded-lg shadow-sm flex items-center justify-center mb-2">
                        <span class="text-4xl">📄</span>
                    </div>
                    <div>
                        <p class="font-bold text-slate-700">Document Preview</p>
                        <p class="text-xs text-slate-500">{{ activeTask!.mediaName }}</p>
                    </div>
                    </div>

                    <img 
                    v-else-if="activeTask!.type === 'image'" 
                    :src="activeTask!.mediaUrl" 
                    alt="Infographic" 
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />

                    <div v-else-if="activeTask!.type === 'video'" class="w-full h-full">
                    <iframe 
                        class="w-full h-full"
                        :src="activeTask!.mediaUrl" 
                        title="Video Player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                    </div>
                </div>
                </Transition>

                <button class="absolute bottom-6 right-6 bg-brand-purple text-white px-8 py-2 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-slate-900 transition-all hover:scale-105 z-20">
                See
                </button>
            </div>
            </div>

            <button 
            @click="nextTask"
            class="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 bg-white text-slate-800 p-3 rounded-full shadow-lg border border-slate-100 hover:bg-brand-purple hover:text-white transition-all duration-300 hidden md:flex items-center justify-center group-hover:scale-110"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </button>

            <div class="flex justify-center gap-4 mt-8">
            <button 
                v-for="(task, index) in tasks" 
                :key="task.id"
                @click="activeIndex = index"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="activeIndex === index ? 'bg-brand-purple scale-150 ring-2 ring-purple-200' : 'bg-slate-300 hover:bg-brand-lime'"
            ></button>
            </div>

        </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// --- Definisi Tipe Data ---
interface Task {
    id: number;
    label: string;
    title: string;
    desc: string;
    type: 'document' | 'image' | 'video';
    mediaUrl: string;
    mediaName?: string;
}

// --- Data Tasks ---
const tasks: Task[] = [
    {
        id: 1,
        label: 'Penugasan 1',
        title: 'Analisis Dokumen & Persuratan',
        desc: 'Merancang konsep inovatif LKMM – TH berbasis simulasi organisasi dan praktik langsung, disertai penyusunan TOR serta RAB yang rasional untuk memastikan efektivitas kegiatan dan keberlanjutan implementasi program kerja.',
        type: 'document',
        mediaName: 'Laporan_Analisis_2024.pdf',
        mediaUrl: '' 
    },
    {
        id: 2,
        label: 'Penugasan 2',
        title: 'Infografis Data Statistik',
        desc: 'Menganalisis isu karier berbasis data dan merancang infografis informatif yang memuat statistik dari sumber kredibel, disusun secara visual, sistematis, dan komunikatif.',
        type: 'image',
        mediaUrl: 'https://placehold.co/600x400/png?text=Infographic'
    },
    {
        id: 3,
        label: 'Penugasan 3',
        title: 'Video Kreatif',
        desc: 'Menyusun dan menyampaikan analisis studi kasus organisasi dalam bentuk video kreatif, dengan pendekatan strategis terhadap negosiasi birokrasi, pengambilan keputusan adaptif, serta inovasi pengembangan program seni dan olahraga.',
        type: 'video',
        mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
]

// --- State & Logic ---
const activeIndex = ref(0)

// Computed dengan Tanda Seru (!) agar TypeScript tidak error
const activeTask = computed((): Task => tasks[activeIndex.value]!)

// Fungsi Tombol Next (Maju)
function nextTask() {
    if (activeIndex.value < tasks.length - 1) {
        activeIndex.value++
    } else {
        activeIndex.value = 0 // Balik ke awal
    }
}

// Fungsi Tombol Prev (Mundur)
function prevTask() {
  if (activeIndex.value > 0) {
        activeIndex.value--
    } else {
        activeIndex.value = tasks.length - 1 // Loncat ke akhir
    }
}
</script>

<style scoped>
/* Transisi Halus */
.fade-enter-active,
.fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.slide-fade-enter-active,
.slide-fade-leave-active { transition: all 0.4s ease; }
.slide-fade-enter-from { opacity: 0; transform: translateX(20px); }
.slide-fade-leave-to { opacity: 0; transform: translateX(-20px); }
</style>