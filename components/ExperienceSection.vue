<template>
    <section class="pt-24 pb-16 bg-slate-50 relative overflow-hidden" id="experience">
        
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 -left-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 -right-20 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 relative z-10">
        
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
    import { ref } from 'vue'
    import type { ExperienceItem } from '~/types'
    import ExperienceDetail from './ExperienceDetail.vue'

    const selectedExperience = ref<ExperienceItem | null>(null)

    function openDetail(item: ExperienceItem) {
    selectedExperience.value = item
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
    }
    }

    function closeDetail() {
    selectedExperience.value = null
    if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
    }
    }

    const experiences: ExperienceItem[] = [
    { 
        id: 1, 
        role: 'Chairman', 
        company: 'OSIS SMKN 4 Bandung', 
        period: '2022 - 2023',
        desc: 'Led organizational events and managed 70+ team members with strategic planning.',
        details: 'I led and organized various school events and initiatives with 70 team members. Included managing council meetings, assigning tasks, and communicating with both students and school staff.',
        proofUrl: 'https://drive.google.com/file/d/1j2BmZECkhO57PgN-k7LL4_dCjMAa63gT/view?usp=sharing',
        workflows: [
        { icon: '📝', colorClass: 'bg-purple-100', title: 'Planning & Research', desc: 'Understanding event requirements, school regulations, and gathering student aspirations.' },
        { icon: '📊', colorClass: 'bg-blue-100', title: 'Strategy & Coordination', desc: 'Formulating strategic plans, presiding over council meetings, and delegating tasks.' },
        { icon: '🎨', colorClass: 'bg-pink-100', title: 'Execution & Management', desc: 'Leading the day-to-day operations of school events and managing communications.' },
        { icon: '🚀', colorClass: 'bg-green-100', title: 'Quality Control', desc: 'Monitoring progress and delivering a final evaluation to the school administration.' }
        ]
    },
    { 
        id: 2, 
        role: 'Front-End Developer', 
        company: 'PT Jago Talenta Indonesia', 
        period: 'Oct - Des 2023',
        desc: 'Developed responsive user interfaces using Vue.js and Tailwind CSS for client apps.',
        details: 'Collaborated with UI/UX designers to implement modern web designs. Optimized application performance and ensured cross-browser compatibility for client projects.',
        proofUrl: 'https://drive.google.com/file/d/1_oUVUe_cOdVJ764dKSJ90QE7JJFZZJWt/view?usp=sharing',
        workflows: [
        { icon: '🔍', colorClass: 'bg-purple-100', title: 'UI/UX Review', desc: 'Analyzing Figma designs and planning the component structure before coding.' },
        { icon: '💻', colorClass: 'bg-blue-100', title: 'Development', desc: 'Slicing UI into responsive Vue components using Tailwind CSS.' },
        { icon: '⚙️', colorClass: 'bg-pink-100', title: 'Integration', desc: 'Connecting frontend components with backend APIs seamlessly.' },
        { icon: '✅', colorClass: 'bg-green-100', title: 'Testing', desc: 'Ensuring cross-browser compatibility and fixing UI bugs.' }
        ]
    },
    { 
        id: 3, 
        role: 'Full-Stack Developer', 
        company: 'PT Padepokan Tujuh Sembilan', 
        period: 'Jan - Apr 2024',
        desc: 'Built end-to-end web solutions using Laravel and React with complex database integration.',
        details: 'Designed database schemas, created RESTful APIs, and integrated them with dynamic frontend components. Managed deployment and server configuration.',
        proofUrl: 'https://drive.google.com/file/d/1iNWshIX4FE5iCZifJremk_LNsBTGan61/view?usp=sharing',
        workflows: [
        { icon: '📋', colorClass: 'bg-purple-100', title: 'Requirement Analysis', desc: 'Gathering business logic and designing database schema architecture.' },
        { icon: '🔗', colorClass: 'bg-blue-100', title: 'Backend Dev', desc: 'Building robust RESTful APIs using Laravel and managing server routes.' },
        { icon: '⚛️', colorClass: 'bg-pink-100', title: 'Frontend Dev', desc: 'Creating interactive user interfaces using React and state management.' },
        { icon: '🚢', colorClass: 'bg-green-100', title: 'Deployment', desc: 'Deploying the full application to production servers and monitoring health.' }
        ]
    },
    { 
        id: 4, 
        role: 'Event Coordinator', 
        company: 'Legacy Graduate 4\'24', 
        period: '2024',
        desc: 'Orchestrated graduation event for 500+ attendees ensuring seamless execution.',
        details: 'Managed logistics, scheduling, and vendor coordination to ensure a smooth graduation ceremony. Handled budgeting and on-site troubleshooting.',
        proofUrl: 'https://drive.google.com/file/d/1gwzijhpUflVXDb8sJBV49nryT6bvAM2q/view?usp=sharing',
        workflows: [
        { icon: '📅', colorClass: 'bg-purple-100', title: 'Concept Planning', desc: 'Drafting event run-down and determining the graduation theme.' },
        { icon: '🤝', colorClass: 'bg-blue-100', title: 'Vendor Sourcing', desc: 'Negotiating with catering, decoration, and sound system vendors.' },
        { icon: '🎤', colorClass: 'bg-pink-100', title: 'On-site Execution', desc: 'Directing the event flow on D-Day and handling emergency situations.' },
        { icon: '📈', colorClass: 'bg-green-100', title: 'Post-Event', desc: 'Managing budget wrap-up and collecting feedback from participants.' }
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