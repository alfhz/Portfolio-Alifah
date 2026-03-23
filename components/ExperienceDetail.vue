<template>
    <div class="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
        
        <div class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div class="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <button 
                    @click="$emit('close')" 
                    class="p-2 md:p-3 rounded-full hover:bg-slate-100 transition group border border-slate-200"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-5 w-5 md:h-6 md:w-6 text-slate-700 group-hover:-translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                
                <h2 class="text-base md:text-xl lg:text-2xl font-extrabold tracking-[0.2em] uppercase text-slate-900">
                    Experience Detail
                </h2>
                
                <div class="w-10 md:w-12"></div>
            </div>
        </div>

        <div class="container w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto py-8 md:py-12">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                <div class="lg:col-span-5 space-y-6 md:space-y-8">
                
                    <div>
                        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
                            {{ experience.role }}
                        </h1>
                        <div class="h-1.5 md:h-2 w-20 md:w-24 bg-brand-purple rounded-full"></div>
                    </div>

                    <div class="space-y-4 md:space-y-6 text-slate-700">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <p class="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Company / Organization</p>
                            <p class="text-lg md:text-xl font-semibold">{{ experience.company }}</p>
                        </div>
                        
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <p class="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Period</p>
                            <p class="text-base md:text-lg font-medium">{{ experience.period }}</p>
                        </div>

                        <div>
                            <p class="font-bold text-base md:text-lg mb-2 md:mb-3 underline decoration-brand-lime decoration-4 underline-offset-4">
                                Responsibilities:
                            </p>
                            <p class="leading-relaxed md:leading-loose text-justify text-slate-600 text-sm md:text-base lg:text-lg">
                                {{ experience.details }}
                            </p>
                        </div>
                    </div>

                    <a 
                        :href="experience.proofUrl" 
                        target="_blank"
                        class="block text-center w-full bg-brand-lime px-4 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold text-brand-dark uppercase tracking-widest hover:bg-lime-400 hover:-translate-y-1 transition-all shadow-xl border-2 border-brand-dark/5"
                    >
                        Get in Touch | Proof of Experience
                    </a>
                </div>

                <div class="lg:col-span-7 bg-indigo-50 rounded-3xl md:rounded-[3rem] p-6 md:p-8 lg:p-12 relative overflow-hidden mt-4 lg:mt-0">
                    <div class="absolute -top-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-brand-lime/20 rounded-full blur-3xl"></div>
                    
                    <h3 class="text-xl md:text-2xl font-bold text-slate-800 mb-6 md:mb-8 relative z-10">Contribution Overview</h3>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                        <div 
                            v-for="(step, index) in experience.keyContributions" 
                            :key="index" 
                            class="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition duration-300"
                        >
                            <div :class="['w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-3 md:mb-4', step.colorClass]">
                                {{ step.icon }}
                            </div>
                            
                            <h4 class="font-bold text-slate-900 text-base md:text-lg mb-1 md:mb-2">
                                {{ index + 1 }}. {{ step.title }}
                            </h4>
                            
                            <p class="text-slate-500 text-sm md:text-base leading-relaxed">
                                {{ step.desc }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
    import type { ExperienceItem } from '~/types'

    defineProps<{
        experience: ExperienceItem
    }>()

    defineEmits(['close'])
</script>

<style scoped>
    .animate-fade-in {
        animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-fade-out {
        animation: fadeOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(40px); }
    }
</style>