<template>
    <section class="py-16 md:py-20 bg-white relative overflow-hidden" id="experience">
        
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div class="absolute top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-brand-lime/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto relative z-10">
        
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] uppercase text-slate-900 mb-3">
                Experiences
            </h2>
            <div class="h-1 w-16 md:w-20 bg-brand-purple mx-auto rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div 
                v-for="exp in experiences" 
                :key="exp.id" 
                class="bg-gradient-to-b from-[#6366F1] to-[#4F46E5] rounded-[2rem] p-6 md:p-8 text-white relative group hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 flex flex-col items-center text-center"
            >
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                
                <div class="w-12 h-3 md:w-16 md:h-4 bg-white/20 rounded-full mb-6 md:mb-8 backdrop-blur-sm shadow-inner group-hover:w-20 md:group-hover:w-24 transition-all duration-500"></div>

                <h3 class="font-bold text-xl md:text-2xl mb-2 leading-tight">{{ exp.role }}</h3>
                
                <p class="text-[10px] md:text-xs font-bold text-indigo-200 uppercase tracking-widest border-white/10 pb-2 w-full">
                    {{ exp.company }}
                </p>
                <p class="text-[10px] md:text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-4 md:mb-6 border-b border-white/10 pb-4 w-full">
                    {{ exp.period }}
                </p>
                
                <p class="text-xs md:text-sm text-indigo-50 leading-relaxed opacity-90 mb-6 md:mb-8 line-clamp-4 flex-grow">
                    {{ exp.desc }}
                </p>

                <button 
                    @click="openDetail(exp)"
                    class="bg-brand-lime text-brand-dark px-6 py-3 md:px-8 md:py-3 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-purple transition-all shadow-lg transform active:scale-95"
                >
                    Learn More
                </button>
            </div>
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
    import { ref, onMounted, onUnmounted } from 'vue'
    import type { ExperienceItem } from '~/types'
    import ExperienceDetail from './ExperienceDetail.vue'

    const selectedExperience = ref<ExperienceItem | null>(null)

    function openDetail(item: ExperienceItem) {
        selectedExperience.value = item
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden'
        }
        if (typeof window !== 'undefined') {
            window.history.pushState({ modalOpen: true }, '')
        }
    }

    function closeDetail() {
        selectedExperience.value = null
        if (typeof document !== 'undefined') {
            document.body.style.overflow = ''
        }
        if (typeof window !== 'undefined' && window.history.state?.modalOpen) {
            window.history.back()
        }
    }

    function handleBrowserBack() {
        if (selectedExperience.value) {
            selectedExperience.value = null
            if (typeof document !== 'undefined') {
                document.body.style.overflow = ''
            }
        }
    }

    onMounted(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('popstate', handleBrowserBack)
        }
    })

    onUnmounted(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('popstate', handleBrowserBack)
        }
    })

    const experiences: ExperienceItem[] = [
    { 
        id: 1, 
        role: 'Chairman', 
        company: 'OSIS SMKN 4 Bandung', 
        period: '2022 - 2023',
        desc: 'Led organizational events and managed 70+ team members with strategic planning.',
        details: 'I led and organized various school events and initiatives with 70 team members. Included managing council meetings, assigning tasks, and communicating with both students and school staff.',
        proofUrl: 'https://drive.google.com/file/d/1j2BmZECkhO57PgN-k7LL4_dCjMAa63gT/view?usp=sharing',
        keyContributions: [
        { icon: '🎯', colorClass: 'bg-purple-100', title: 'Strategic Event Planning', desc: 'Defined clear event objectives aligned with school regulations and student aspirations.' },
        { icon: '🤝', colorClass: 'bg-blue-100', title: 'Team Leadership & Coordination', desc: 'Led council meetings, delegated responsibilities, and ensured effective collaboration among members.' },
        { icon: '📢', colorClass: 'bg-pink-100', title: 'Operational Execution', desc: 'Oversaw end-to-end event implementation and managed communication with stakeholders.' },
        { icon: '📊', colorClass: 'bg-green-100', title: 'Performance Evaluation', desc: 'Conducted post-event evaluations and delivered structured reports to school administration.' }
        ]
    },
    { 
        id: 2, 
        role: 'Front-End Developer', 
        company: 'PT Jago Talenta Indonesia', 
        period: 'Oct - Des 2023',
        desc: 'Developed responsive user interfaces using Laravel and Tailwind CSS for client apps.',
        details: 'Collaborated with UI/UX designers to implement modern and responsive web designs. Worked closely with backend developers using RESTful APIs to integrate server-side logic and ensure seamless data flow between frontend and backend systems. Optimized application performance and ensured cross-browser compatibility for client projects.',
        proofUrl: 'https://drive.google.com/file/d/1_oUVUe_cOdVJ764dKSJ90QE7JJFZZJWt/view?usp=sharing',
        keyContributions: [
        { icon: '🎨', colorClass: 'bg-purple-100', title: 'UI Consistency Implementation', desc: 'Translated Figma designs into structured and reusable Laravel components with consistent styling.' },
        { icon: '💻', colorClass: 'bg-blue-100', title: 'Responsive Component Development', desc: 'Developed responsive UI components using Laravel and Tailwind CSS to ensure adaptability across devices.' },
        { icon: '🔗', colorClass: 'bg-pink-100', title: 'API Integration', desc: 'Integrated frontend components with backend APIs to enable dynamic and interactive features.' },
        { icon: '🛠️', colorClass: 'bg-green-100', title: 'Cross-Browser Optimization', desc: 'Performed UI testing and resolved compatibility issues to improve user experience.' }
        ]
    },
    { 
        id: 3, 
        role: 'Full-Stack Developer', 
        company: 'PT Padepokan Tujuh Sembilan', 
        period: 'Jan - Apr 2024',
        desc: 'Built end-to-end software solutions using Laravel and React with database integration.',
        details: 'Acted as a Full Stack Developer, System Analyst, and QA. Conducted requirement analysis and produced System Design Documentation (SDD) to define system architecture and technical specifications. Designed and optimized database schemas, developed RESTful APIs, and integrated them with dynamic frontend components. As part of QA responsibilities, created and maintained testing documentation to ensure system functionality, reliability, and compliance with project requirements.',
        proofUrl: 'https://drive.google.com/file/d/1iNWshIX4FE5iCZifJremk_LNsBTGan61/view?usp=sharing',
        keyContributions: [
        { icon: '🗂️', colorClass: 'bg-purple-100', title: 'Structured System Documentation', desc: 'Produced clear System Design Documentation (SDD) to align development with project requirements.' },
        { icon: '🛠️', colorClass: 'bg-blue-100', title: 'API & Database Implementation', desc: 'Designed relational database schemas and implemented RESTful APIs for core application features.' },
        { icon: '🔄', colorClass: 'bg-pink-100', title: 'Seamless Frontend Integration', desc: 'Integrated backend APIs with React components to ensure smooth data flow and user interaction.' },
        { icon: '🧪', colorClass: 'bg-green-100', title: 'Testing & Validation Support', desc: 'Created testing documentation and performed validation to ensure features met defined requirements.' }
        ]
    },
    { 
        id: 4, 
        role: 'Event Coordinator', 
        company: 'Legacy Graduate 4\'24', 
        period: '2024',
        desc: 'Orchestrated graduation event for 400+ attendees ensuring seamless execution.',
        details: 'Served as Event Coordinator for the school graduation ceremony, developing the overall event concept and designing a comprehensive timeline from preparation to execution day. Coordinated with internal committees, vendors, and school stakeholders to ensure clear task delegation and timely execution. Ensured smooth event operations through proactive planning and on-site problem solving.',
        proofUrl: 'https://drive.google.com/file/d/1gwzijhpUflVXDb8sJBV49nryT6bvAM2q/view?usp=sharing',
        keyContributions: [
        { icon: '🎯', colorClass: 'bg-purple-100', title: 'Event Concept Development', desc: 'Developed the graduation theme and structured a comprehensive event run-down from preparation to execution.' },
        { icon: '🤝', colorClass: 'bg-blue-100', title: 'Stakeholder & Vendor Coordination', desc: 'Coordinated with vendors and internal committees to align deliverables, timelines, and technical requirements.' },
        { icon: '🎤', colorClass: 'bg-pink-100', title: 'Execution Leadership', desc: 'Led on-site operations during the event, ensuring smooth flow and resolving issues in real time.' },
        { icon: '📊', colorClass: 'bg-green-100', title: 'Budget & Evaluation Oversight', desc: 'Managed budget reconciliation and facilitated post-event evaluation for continuous improvement.' }
        ]
    }
    ]
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.3s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
}
</style>