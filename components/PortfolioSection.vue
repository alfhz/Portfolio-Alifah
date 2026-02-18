<template>
    <section class="py-24 bg-slate-50 relative" id="portfolio">
        
        <div class="container mx-auto px-4 sm:px-6">
        
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-slate-900 mb-4">
            Portfolio
            </h2>
            <div class="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div 
            v-for="project in visibleProjects" 
            :key="project.id"
            class="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
            <div class="relative h-56 overflow-hidden bg-slate-200">
                <img 
                :src="project.images[0]" 
                :alt="project.title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm">
                {{ project.category }}
                </div>
            </div>

            <div class="p-8 flex flex-col flex-grow">
                <div class="mb-4">
                <h3 class="text-xl font-extrabold text-slate-900 uppercase leading-none mb-2">{{ project.title }}</h3>
                <div class="flex gap-2 text-sm opacity-60">
                    <span v-for="t in project.techStack" :key="t">{{ getTechIcon(t) }}</span>
                </div>
                </div>

                <p class="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {{ project.shortDesc }}
                </p>

                <button 
                @click="openDetail(project)"
                class="w-full bg-[#6366F1] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-md"
                >
                See
                </button>
            </div>
            </div>
        </div>

        <div v-if="projects.length > initialLimit" class="text-center">
            <button 
            @click="toggleExpand" 
            class="group inline-flex items-center gap-2 text-slate-800 font-bold uppercase text-sm tracking-widest hover:text-brand-purple transition"
            >
            {{ isExpanded ? 'Show Less' : 'More Portfolio' }}
            <span :class="{'rotate-180': isExpanded}" class="transition-transform duration-300">▼</span>
            </button>
        </div>

        </div>

        <Transition name="fade">
        <PortfolioDetail 
            v-if="selectedProject" 
            :project="selectedProject" 
            @close="closeDetail" 
        />
        </Transition>

    </section>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import type { PortfolioItem } from '~/types'
    import PortfolioDetail from './PortfolioDetail.vue'

    // --- STATE ---
    const selectedProject = ref<PortfolioItem | null>(null)
    const isExpanded = ref(false)
    const initialLimit = 6

    // --- DATA DUMMY ---
    // Tips: Ganti URL gambar dengan file di folder public kamu
    const projects: PortfolioItem[] = [
    {
        id: 1,
        title: 'Canteen',
        category: 'UI/UX Design',
        role: 'UI/UX Designer',
        period: 'July, 2024',
        shortDesc: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
        projectDesc: 'Canteen is a digital solution designed to modernize school cafeteria operations. The goal was to create a seamless ordering experience for students and an efficient management dashboard for staff. We focused on reducing queue times and minimizing food waste through better inventory tracking.',
        jobDesc: 'My role involved conducting user research with students and canteen staff to identify pain points. I created wireframes, low-fidelity prototypes, and the final high-fidelity UI using Figma. I also established a design system to ensure consistency across the mobile app and admin web panel.',
        techStack: ['Figma'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Canteen+Preview', 'https://placehold.co/800x450/png?text=Slide+2'],
        sourceUrl: '#'
    },
    {
        id: 2,
        title: '4SHARE',
        category: 'Mobile Dev',
        role: 'Frontend Dev',
        period: 'Aug, 2024',
        shortDesc: 'A file sharing mobile application built with React Native for fast and secure transfer.',
        projectDesc: '4SHARE is a cross-platform mobile application that allows users to share large files securely over local networks without internet access.',
        jobDesc: 'Implemented the UI using React Native and handled the state management using Redux. Integrated local Wi-Fi Direct APIs for file transfer.',
        techStack: ['React', 'Node'],
        images: ['https://placehold.co/800x450/10B981/white?text=4SHARE+App'],
        sourceUrl: '#'
    },
    {
        id: 3,
        title: 'CMS System',
        category: 'Web Dev',
        role: 'Full Stack',
        period: 'Sept, 2024',
        shortDesc: 'Content Management System for school administration to manage student data easily.',
        projectDesc: 'A comprehensive CMS built for educational institutions to manage student records, grades, and attendance in one place.',
        jobDesc: 'Built the backend REST API using Laravel and the frontend dashboard using Vue.js. Designed the database schema for scalability.',
        techStack: ['Laravel', 'Vue', 'Tailwind'],
        images: ['https://placehold.co/800x450/F59E0B/white?text=CMS+Dashboard'],
        sourceUrl: '#'
    },
    // Tambahkan data dummy sampai > 6 untuk tes tombol "More"
    { id: 4, title: 'MultiCase', category: 'Web Dev', role: 'Frontend', period: '2023', shortDesc: 'E-commerce platform case study.', projectDesc: 'Desc...', jobDesc: 'Job...', techStack: ['Vue', 'Tailwind'], images: ['https://placehold.co/800x450/EC4899/white'], sourceUrl: '#' },
    { id: 5, title: 'Top4T', category: 'UI/UX Design', role: 'Designer', period: '2023', shortDesc: 'Top up game platform design.', projectDesc: 'Desc...', jobDesc: 'Job...', techStack: ['Figma'], images: ['https://placehold.co/800x450/8B5CF6/white'], sourceUrl: '#' },
    { id: 6, title: 'Legacy', category: 'Event', role: 'Coordinator', period: '2024', shortDesc: 'Event website for school graduation.', projectDesc: 'Desc...', jobDesc: 'Job...', techStack: ['React'], images: ['https://placehold.co/800x450/3B82F6/white'], sourceUrl: '#' },
    { id: 7, title: 'Extra Project', category: 'Web Dev', role: 'Dev', period: '2024', shortDesc: 'Hidden project initially.', projectDesc: 'Desc...', jobDesc: 'Job...', techStack: ['Laravel'], images: ['https://placehold.co/800x450/000/white'], sourceUrl: '#' },
    ]

    // --- LOGIC ---
    const visibleProjects = computed(() => {
    return isExpanded.value ? projects : projects.slice(0, initialLimit)
    })

    function toggleExpand() {
    isExpanded.value = !isExpanded.value
    }

    function openDetail(item: PortfolioItem) {
    selectedProject.value = item
    document.body.style.overflow = 'hidden'
    }

    function closeDetail() {
    selectedProject.value = null
    document.body.style.overflow = ''
    }

    // Helper Icon (Copy dari component detail biar konsisten)
    function getTechIcon(name: string) {
    const icons: Record<string, string> = { 'Vue': '🟢', 'React': '🔵', 'Laravel': '🔴', 'Tailwind': '🌊', 'Figma': '🎨' }
    return icons[name] || '💻'
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
    .fade-enter-from, .fade-leave-to { opacity: 0; }
</style>