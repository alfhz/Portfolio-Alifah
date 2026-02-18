<template>
    <div class="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
        
        <div class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div class="container mx-auto px-6 py-4 flex items-center justify-between">
                <button 
                    @click="$emit('close')" 
                    class="p-3 rounded-full hover:bg-slate-100 transition group border border-slate-200"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6 text-slate-700 group-hover:-translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                
                <h2 class="text-lg md:text-2xl font-extrabold tracking-[0.2em] uppercase text-slate-900">
                Experience Detail
                </h2>
                
                <div class="w-12"></div>
            </div>
        </div>

        <div class="container mx-auto px-6 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <div class="lg:col-span-5 space-y-8">
                
                    <div>
                        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                        {{ experience.role }}
                        </h1>
                        <div class="h-2 w-24 bg-brand-purple rounded-full"></div>
                    </div>

                    <div class="space-y-6 text-slate-700">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Company</p>
                        <p class="text-xl font-bold text-brand-purple">{{ experience.company }}</p>
                        </div>
                        
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Period</p>
                        <p class="text-lg font-medium">{{ experience.period }}</p>
                        </div>

                        <div>
                        <p class="font-bold text-lg mb-3 underline decoration-brand-lime decoration-4 underline-offset-4">
                            Responsibilities:
                        </p>
                        <p class="leading-loose text-justify text-slate-600 text-lg">
                            {{ experience.details }}
                        </p>
                        </div>
                    </div>

                    <button class="w-full bg-brand-lime px-8 py-5 rounded-2xl font-bold text-brand-dark uppercase tracking-widest hover:bg-lime-400 hover:-translate-y-1 transition-all shadow-xl border-2 border-brand-dark/5">
                        Get in Touch
                    </button>
                    </div>

                    <div class="lg:col-span-7 bg-indigo-50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                    <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-brand-lime/20 rounded-full blur-3xl"></div>

                    <h3 class="text-2xl font-bold text-slate-800 mb-8 relative z-10">Workflow Overview</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition duration-300">
                        <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-4">📝</div>
                        <h4 class="font-bold text-slate-900 text-lg mb-2">1. Research</h4>
                        <p class="text-slate-500 leading-relaxed">Understanding project requirements and user needs deeply.</p>
                        </div>
                        <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition duration-300">
                        <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4">📊</div>
                        <h4 class="font-bold text-slate-900 text-lg mb-2">2. Analyze</h4>
                        <p class="text-slate-500 leading-relaxed">Formulating strategic plans based on data analysis.</p>
                        </div>
                        <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition duration-300">
                        <div class="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-3xl mb-4">🎨</div>
                        <h4 class="font-bold text-slate-900 text-lg mb-2">3. Design</h4>
                        <p class="text-slate-500 leading-relaxed">Crafting intuitive designs and executing core tasks.</p>
                        </div>
                        <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition duration-300">
                        <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-4">🚀</div>
                        <h4 class="font-bold text-slate-900 text-lg mb-2">4. Launch</h4>
                        <p class="text-slate-500 leading-relaxed">Delivering final results and ensuring quality assurance.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
    import type { ExperienceItem } from '~/types'

    // Props: Data experience yang dikirim dari parent
    defineProps<{
    experience: ExperienceItem
    }>()

    // Emits: Sinyal ke parent untuk menutup modal
    defineEmits(['close'])
</script>

<style scoped>
    .animate-fade-in {
        animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>