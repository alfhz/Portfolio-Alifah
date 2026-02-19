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
        period: '2022',
        shortDesc: 'Mobile app design for school canteen digitalization enabling students and vendors to sell products efficiently.',
        projectDesc: 'Canteen is a mobile application designed to digitalize school canteen operations. The platform allows not only official vendors but also students to sell their products through the app. The goal was to improve transaction efficiency, reduce queue time, and help small student entrepreneurs manage and promote their products effectively.',
        jobDesc: 'I conducted user flow planning, created wireframes and high-fidelity prototypes in Figma, and designed the overall mobile experience focusing on usability, efficiency, and simple transaction flow.',
        techStack: ['Figma'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Canteen+Preview'],
        sourceUrl: 'https://www.figma.com/proto/Fp4z98umXZKxnoP8nAazdz/c4nteen--real-?node-id=2-372&p=f&t=YUvR1XtHNqXGicuA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A675&show-proto-sidebar=1'
    },
    {
        id: 2,
        title: 'Quiz Mobile',
        category: 'Mobile Development',
        role: 'Frontend Developer',
        period: '2022',
        shortDesc: 'Simple mathematics quiz mobile application built using Java.',
        projectDesc: 'Quiz Mobile is a mathematics quiz application designed to help users practice basic math problems interactively. The application focuses on simple UI structure and responsive question navigation.',
        jobDesc: 'Developed the mobile application using Java, implemented quiz logic, scoring system, and user interaction flow.',
        techStack: ['Java'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Quiz+Mobile'],
        sourceUrl: 'https://github.com/alfhz/Quiz-Mobile'
    },
    {
        id: 3,
        title: 'Toko Opat',
        category: 'UI/UX Design',
        role: 'UI/UX Designer',
        period: '2023',
        shortDesc: 'Mobile app design for school cooperative digitalization.',
        projectDesc: 'Toko Opat is a mobile application concept aimed at digitalizing school cooperatives. The app integrates product categories such as uniforms, school attributes, stationery, and snacks into one unified platform to simplify purchasing and inventory management.',
        jobDesc: 'Designed the complete mobile interface in Figma, including user flow, product categorization, and checkout process with a focus on clarity and accessibility.',
        techStack: ['Figma'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Toko+Opat'],
        sourceUrl: 'https://www.figma.com/proto/RhMgtpt7u2Fqmr5yZhrREH/TW---Mockup?node-id=0-1&t=crBTeMlg9OEfG6OS-1'
    },
    {
        id: 4,
        title: 'LauMart',
        category: 'UI/UX Design',
        role: 'UI/UX Designer',
        period: '2023',
        shortDesc: 'Luxury-themed mobile e-commerce design for exclusive products.',
        projectDesc: 'LauMart is a luxury marketplace mobile app concept focused on exclusive and high-quality products. The design emphasizes premium aesthetics, clean layout, and elegant visual hierarchy to reflect brand positioning.',
        jobDesc: 'Created high-fidelity UI designs in Figma, focusing on visual consistency, premium color palette, and intuitive user journey.',
        techStack: ['Figma'],
        images: ['https://placehold.co/800x450/6366F1/white?text=LauMart'],
        sourceUrl: 'https://www.figma.com/proto/D4dcYA7FixkxdHJdoDV8wb/LauMart?node-id=0-1&t=8XwVgYz8jbR5bucP-1'
    },
    {
        id: 5,
        title: 'Hejo Forest',
        category: 'Web Development',
        role: 'Full Stack Developer',
        period: '2024',
        shortDesc: 'Tourism and UMKM website for package management and booking system.',
        projectDesc: 'Hejo Forest is a web-based tourism management platform that allows users to book camping, campervan, glamping, and hot spring packages. The system also supports package management for administrators.',
        jobDesc: 'Developed both frontend and backend features including booking system, package management, and dynamic content handling using PHP and JavaScript.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Hejo+Forest'],
        sourceUrl: 'https://github.com/alfhz/VSGA-JWD/tree/main/tugas_pertemuan_13-14'
    },
    {
        id: 6,
        title: 'The Big 5 Traits',
        category: 'Web Development',
        role: 'Full Stack Developer',
        period: '2024',
        shortDesc: 'Educational website explaining The Big Five personality traits in psychology.',
        projectDesc: 'A web platform created to introduce and explain the Big Five personality traits model in psychology in a structured and accessible format.',
        jobDesc: 'Built the website structure, interactive elements, and responsive layout using HTML, CSS, and JavaScript.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Big+5+Traits'],
        sourceUrl: 'https://github.com/alfhz/The-Big-5-Traits'
    },
    {
        id: 7,
        title: 'Simple Bookshelf',
        category: 'Web Development',
        role: 'Full Stack Developer',
        period: '2024',
        shortDesc: 'Web application to manage personal book collections.',
        projectDesc: 'Simple Bookshelf is a web-based application that allows users to manage and organize their book collections efficiently.',
        jobDesc: 'Implemented CRUD functionality, dynamic book status management, and interactive UI components using JavaScript.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Simple+Bookshelf'],
        sourceUrl: 'https://github.com/alfhz/Simple-Bookshelf'
    },
    {
        id: 8,
        title: 'U-TIKET',
        category: 'Web Development',
        role: 'Full Stack Developer',
        period: '2024',
        shortDesc: 'Tourism ticket booking web application.',
        projectDesc: 'U-TIKET is a web-based platform that allows users to browse tourism destinations and book tickets efficiently.',
        jobDesc: 'Developed frontend interface using Tailwind CSS and implemented booking interaction logic with JavaScript.',
        techStack: ['HTML', 'JavaScript', 'Tailwind CSS'],
        images: ['https://placehold.co/800x450/6366F1/white?text=U-TIKET'],
        sourceUrl: 'https://github.com/alfhz/U-TIKET'
    },
    {
        id: 9,
        title: 'Business CMS',
        category: 'Web Development',
        role: 'Frontend Developer',
        period: '2023',
        shortDesc: 'Content Management System for managing products, customers, leads, and campaigns.',
        projectDesc: 'A business-oriented CMS designed to manage product performance, customer data, sales leads, and marketing campaigns with data monitoring features.',
        jobDesc: 'Developed frontend interfaces using Laravel Blade and Tailwind CSS, focusing on dashboard visualization and data clarity.',
        techStack: ['HTML', 'JavaScript', 'Laravel', 'Tailwind CSS'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Business+CMS'],
        sourceUrl: '#'
    },
    {
        id: 10,
        title: 'Landslide Survey',
        category: 'UI/UX Design',
        role: 'UI/UX Designer',
        period: '2025',
        shortDesc: 'Field survey mobile app design for geological landslide data collection.',
        projectDesc: 'Landslide Survey is a mobile application concept designed for geological field surveys. The app enables structured data input regarding landslide conditions and provides survey recap management for better monitoring and documentation.',
        jobDesc: 'Designed complete user flow, structured survey forms, and data recap interface in Figma with a focus on clarity and field usability.',
        techStack: ['Figma'],
        images: ['https://placehold.co/800x450/6366F1/white?text=Landslide+Survey'],
        sourceUrl: 'https://www.figma.com/proto/bJpZLhSITRcALlcGKIKmrQ/Field-Survey?node-id=0-1&t=oe25ixQezn0o2lwt-1'
    }

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