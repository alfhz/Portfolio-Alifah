<template>
    <section class="relative bg-[linear-gradient(to_right,#E7EEFE_0%,rgba(255,255,255,0.95)_35%,#FFFFFF_50%,#FFFFFF_75%,#F1F8DE_100%)]" id="portfolio">
        
        <div class="container w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto py-16 md:py-20">
        
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] uppercase text-slate-900 mb-3">
                    Portfolio
                </h2>
                <div class="h-1 w-16 md:w-20 bg-brand-lime mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                <div 
                    v-for="project in visibleProjects" 
                    :key="project.id"
                    class="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
                >
                <div class="relative h-48 md:h-56 overflow-hidden bg-slate-200">
                    <img 
                        :src="project.images[0]" 
                        :alt="project.title" 
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm">
                        {{ project.category }}
                    </div>
                </div>

                <div class="p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                    <div class="mb-3 md:mb-4">
                        <h3 class="text-lg md:text-xl font-bold text-slate-900 uppercase leading-tight mb-2">{{ project.title }}</h3>
                        <div class="flex flex-wrap gap-2 items-center mb-2">
                            <img 
                                v-for="t in project.techStack" 
                                :key="t" 
                                :src="getTechIcon(t)" 
                                :alt="t"
                                :title="t"
                                class="w-5 h-5 md:w-6 md:h-6 object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <p class="text-slate-500 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 line-clamp-3 flex-grow">
                        {{ project.shortDesc }}
                    </p>

                    <button 
                        @click="openDetail(project)"
                        class="w-full bg-[#6366F1] text-white py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#371e88] transition-colors shadow-md active:scale-95"
                    >
                        See Detail
                    </button>
                </div>
                </div>
            </div>

            <div v-if="projects.length > initialLimit" class="text-center">
                <button 
                    @click="toggleExpand" 
                    class="group inline-flex items-center gap-2 text-slate-800 font-bold uppercase text-xs md:text-sm tracking-widest hover:text-brand-purple transition"
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

    const selectedProject = ref<PortfolioItem | null>(null)
    const isExpanded = ref(false)
    const initialLimit = 6

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
        images: ['/portfolio_assets/canteen.png'],
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
        techStack: ['Java', 'Git'],
        images: ['/portfolio_assets/quiz.png'],
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
        images: ['/portfolio_assets/tokoopat1.png', '/portfolio_assets/tokoopat2.png', '/portfolio_assets/tokoopat3.png'],
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
        images: ['/portfolio_assets/laumart1.png', '/portfolio_assets/laumart2.png'],
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
        techStack: ['HTML', 'CSS', 'JS', 'PHP', 'Mysql', 'Git'],
        images: ['/portfolio_assets/hejoforest.png'],
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
        techStack: ['HTML', 'CSS', 'JS', 'Git'],
        images: ['/portfolio_assets/thebig5.png'],
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
        techStack: ['HTML', 'CSS', 'JS', 'Git'],
        images: ['/portfolio_assets/bookshelf2.png', '/portfolio_assets/bookshelf1.png'],
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
        techStack: ['HTML', 'JS', 'Tailwind', 'Git'],
        images: ['/portfolio_assets/utiket1.png', '/portfolio_assets/utiket2.png', '/portfolio_assets/utiket3.png'],
        sourceUrl: 'https://github.com/alfhz/U-TIKET'
    },
    {
        id: 9,
        title: 'Business CRM',
        category: 'Web Development',
        role: 'Frontend Developer',
        period: '2023',
        shortDesc: 'Customer Relationship Management system for managing customer interactions, tracking leads, and monitoring marketing campaigns.',
        projectDesc: 'A business-oriented CRM platform designed to manage customer interactions, track sales leads, monitor marketing campaigns, and analyze customer data with comprehensive reporting features.',
        jobDesc: 'Developed frontend interfaces using Laravel Blade and Tailwind CSS, focusing on dashboard visualization and data clarity.',
        techStack: ['HTML', 'JS', 'Laravel', 'Tailwind', 'Git'],
        images: ['/portfolio_assets/cms1.png', '/portfolio_assets/cms2.png', '/portfolio_assets/cms3.png'],
        sourceUrl: 'https://github.com/alfhz/CRM-Order'
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
        images: ['/portfolio_assets/landslide.png'],
        sourceUrl: 'https://www.figma.com/proto/bJpZLhSITRcALlcGKIKmrQ/Field-Survey?node-id=0-1&t=oe25ixQezn0o2lwt-1'
    },
    {
        id: 11,
        title: 'Aplikasi Keuangan Mahasiswa',
        category: 'Desktop Dev (Console-Based)',
        role: 'Full Stack Developer',
        period: '2025',
        shortDesc: 'Desktop application for managing student financial data.',
        projectDesc: 'A desktop application developed to help students manage their financial records, including income and expenses, , with a focus on simplicity and usability.',
        jobDesc: 'Developed the application using C, implementing data management features and a user-friendly interface.',
        techStack: ['C', 'Git'],
        images: ['/portfolio_assets/aplikasikeuangan.png'],
        sourceUrl: 'https://github.com/Dinesshh25/AplikasiKeuangan'
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
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden'
        }
    }

    function closeDetail() {
        selectedProject.value = null
        if (typeof document !== 'undefined') {
            document.body.style.overflow = ''
        }
    }

    function getTechIcon(name: string) {
        const icons: Record<string, string> = {
            'C': '/tools_assets/c.png', 
            'React': '/tools_assets/react.png', 
            'Laravel': '/tools_assets/laravel.png', 
            'Tailwind': '/tools_assets/tailwind.png', 
            'Figma': '/tools_assets/figma.png', 
            'Node': '/tools_assets/nodejs.png',
            'CSS': '/tools_assets/css.png',
            'HTML': '/tools_assets/html.png',
            'Git': '/tools_assets/git.png',
            'JS': '/tools_assets/js.png',
            'Mysql': '/tools_assets/mysql.png',
            'PHP': '/tools_assets/php.png',
            'Java': '/tools_assets/java.png' 
        }
        return icons[name] || '' 
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
    .fade-enter-from, .fade-leave-to { opacity: 0; }
</style>