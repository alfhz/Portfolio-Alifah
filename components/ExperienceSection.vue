<template>
    <section class="py-24 bg-slate-50 relative overflow-hidden" id="experience">
        
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 -left-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 -right-20 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 mb-32 relative z-10">
        
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-slate-900 mb-4">
            Experiences
            </h2>
            <div class="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
            v-for="exp in experiences" 
            :key="exp.id" 
            class="bg-gradient-to-b from-[#6366F1] to-[#4F46E5] rounded-[2rem] p-8 text-white relative group hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 flex flex-col items-center text-center"
            >
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
            
            <div class="w-16 h-4 bg-white/20 rounded-full mb-8 backdrop-blur-sm shadow-inner group-hover:w-24 transition-all duration-500"></div>

            <h3 class="font-bold text-2xl mb-2 leading-tight">{{ exp.role }}</h3>
            <p class="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 w-full">
                {{ exp.company }}
            </p>
            
            <p class="text-sm text-indigo-50 leading-relaxed opacity-90 mb-8 line-clamp-4 flex-grow">
                {{ exp.desc }}
            </p>

            <button 
                @click="openDetail(exp)"
                class="bg-brand-lime text-brand-dark px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-purple transition-all shadow-lg transform active:scale-95"
            >
                Learn More
            </button>
            </div>
        </div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-slate-900 mb-4">
            Certifications
            </h2>
            <div class="h-1 w-20 bg-brand-lime mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
            v-for="cert in visibleCertifications" 
            :key="cert.id"
            class="bg-[#D9F99D] p-1 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300"
            >
            <div class="bg-gradient-to-br from-[#eecda3] to-[#ef629f] h-full rounded-[1.8rem] p-[2px]"> <div class="bg-[#e4f5ac] h-full rounded-[1.7rem] p-6 flex flex-col justify-between border-b-4 border-lime-600/20">
                    
                    <div class="flex justify-between items-start mb-4">
                    <div class="bg-white/50 p-3 rounded-2xl backdrop-blur-sm">
                        <span class="text-2xl">🏆</span>
                    </div>
                    <span class="text-xs font-black bg-slate-900 text-white px-3 py-1 rounded-full">
                        {{ cert.year }}
                    </span>
                    </div>
                    
                    <div>
                    <h4 class="font-black text-slate-900 text-lg uppercase leading-tight mb-2 tracking-tight">
                        {{ cert.name }}
                    </h4>
                    <p class="text-sm text-slate-600 font-bold uppercase tracking-wide mb-6">
                        {{ cert.issuer }}
                    </p>
                    </div>

                    <button class="w-full bg-[#6366F1] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-lg">
                    See Credential
                    </button>
                </div>
            </div>
            </div>
        </div>

        <div v-if="certifications.length > limit" class="text-center mt-16">
            <button 
            @click="toggleShowMore" 
            class="group inline-flex items-center gap-3 text-slate-500 font-bold uppercase text-sm tracking-widest hover:text-brand-purple transition-colors"
            >
            <span>{{ isExpanded ? 'Show Less' : 'More Certifications' }}</span>
            <div class="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                <span :class="{'rotate-180': isExpanded}" class="transition-transform duration-300 block">
                ▼
                </span>
            </div>
            </button>
        </div>
        </div>

        <Transition name="fade">
        <ExperienceDetail 
            v-if="selectedExperience" 
            :experience="selectedExperience" 
            @close="closeDetail" 
        />
        </Transition>

    </section>
    </template>

    <script setup lang="ts">
    import { ref, computed, watch } from 'vue'
    import type { ExperienceItem, CertificationItem } from '~/types'
    import ExperienceDetail from './ExperienceDetail.vue'

    // --- 1. LOGIC EXPERIENCE & MODAL ---
    const selectedExperience = ref<ExperienceItem | null>(null)

    // Fungsi Buka Modal
    function openDetail(item: ExperienceItem) {
    selectedExperience.value = item
    // Matikan scroll body saat modal muncul
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
    }
    }

    // Fungsi Tutup Modal
    function closeDetail() {
    selectedExperience.value = null
    // Nyalakan scroll body lagi
    if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
    }
    }

    // Data Dummy Experience
    const experiences: ExperienceItem[] = [
    { 
        id: 1, 
        role: 'Chairman', 
        company: 'OSIS SMKN 4 Bandung', 
        period: '2022 - 2023',
        desc: 'Led organizational events and managed 70+ team members with strategic planning.',
        details: 'I led and organized various school events and initiatives with 70 team members. Included managing council meetings, assigning tasks, and communicating with both students and school staff. I coordinated events like school meetings and charity drives, and represented student interests in meetings with school administration.'
    },
    { 
        id: 2, 
        role: 'Front-End Developer', 
        company: 'PT Jago Talenta Indonesia', 
        period: '2023',
        desc: 'Developed responsive user interfaces using Vue.js and Tailwind CSS for client apps.',
        details: 'Collaborated with UI/UX designers to implement modern web designs. Optimized application performance and ensured cross-browser compatibility for client projects. Translated Figma designs into clean, semantic code.'
    },
    { 
        id: 3, 
        role: 'Full-Stack Developer', 
        company: 'PT Padepokan Tujuh Sembilan', 
        period: '2024',
        desc: 'Built end-to-end web solutions using Laravel and React with complex database integration.',
        details: 'Designed database schemas, created RESTful APIs, and integrated them with dynamic frontend components. Managed deployment and server configuration. Handled authentication and role-based access control.'
    },
    { 
        id: 4, 
        role: 'Event Coordinator', 
        company: 'Legacy Graduate 4\'24', 
        period: '2024',
        desc: 'Orchestrated graduation event for 500+ attendees ensuring seamless execution.',
        details: 'Managed logistics, scheduling, and vendor coordination to ensure a smooth graduation ceremony. Handled budgeting and on-site troubleshooting. Coordinated with school officials and student committees.'
    }
    ]

    // --- 2. LOGIC CERTIFICATIONS ---
    const limit = ref(6)     // Jumlah kartu yang tampil awal
    const isExpanded = ref(false) // Status apakah sedang dibuka semua atau tidak

    // Data Dummy Certifications (Lebih dari 6 untuk mengetes tombol Show More)
    const certifications: CertificationItem[] = [
    { id: 1, name: 'ASEAN Data Science', issuer: 'ASEAN Foundation', year: '2021', link: '#' },
    { id: 2, name: 'Informatics Olympiad', issuer: 'Pusat Prestasi Nasional', year: '2022', link: '#' },
    { id: 3, name: 'Java Fundamental', issuer: 'Oracle', year: '2023', link: '#' },
    { id: 4, name: 'TOEIC English Test', issuer: 'International Test Center', year: '2023', link: '#' },
    { id: 5, name: 'Teaching Factory', issuer: 'PT Jago Talenta Indonesia', year: '2023', link: '#' },
    { id: 6, name: 'Competency Skills Test', issuer: 'PT Padepokan Tujuh Sembilan', year: '2024', link: '#' },
    // Data ke-7 dan seterusnya akan sembunyi dulu
    { id: 7, name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', link: '#' },
    { id: 8, name: 'Google UX Design', issuer: 'Coursera', year: '2024', link: '#' },
    ]

    // Computed: Menentukan data mana yang harus dirender
    const visibleCertifications = computed(() => {
    if (isExpanded.value) {
        return certifications // Tampilkan semua
    } else {
        return certifications.slice(0, limit.value) // Potong cuma 6
    }
    })

    // Fungsi Toggle Tombol Show More
    function toggleShowMore() {
    isExpanded.value = !isExpanded.value
    }
    </script>

    <style scoped>
    /* Animasi Fade untuk Modal */
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }
</style>