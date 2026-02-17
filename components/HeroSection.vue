<template>
    <section class="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative px-4 sm:px-4 py-6">
        
        <div class="relative mb-0 group">
            <img 
            src="/profile.png" 
            alt="Alifah Zachra" 
            class="relative z-10 w-48 h-48 md:w-64 md:h-64 object-cover"
            />
        </div>
        
        
        <div class="mb-5">
            <span class="bg-brand-lime px-12 py-3 md:px-20 md:py-4 rounded-xl text-4xl md:text-2xl font-bold text-brand-dark shadow-lg inline-block tracking-tight">
                <p class="text-slate-500 font-medium mb-0 text-sm md:text-sm text-center tracking-wide">
                    Hello! I Am ..
                </p>
                Alifah Zachra S
            </span>
        </div>

        <div class="max-w-4xl text-center space-y-2 mb-8">
            <p class="text-base md:text-base text-slate-800 font-medium leading-relaxed">
                <span class="underline decoration-brand-purple decoration-2 underline-offset-4">Informatics Engineering Undergraduate</span> 
                with expertise in 
                <span class="font-bold text-slate-900">Project Management</span> 
                and 
                <span class="font-bold text-slate-900">Software Development</span>.
            </p>
            
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
                With a background in both technical and organizational aspects, I bridge the gap between software development and effective project execution, driving innovation at every turn.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl">
            <div 
                v-for="(stat, index) in stats" 
                :key="index" 
                class="bg-white p-3 md:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
                <span class="text-2xl font-medium text-slate-900 mb-0">{{ stat.value }}</span>
                <span class="text-slate-500 text-sm font-medium uppercase tracking-widest">{{ stat.label }}</span>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
    import type { StatItem } from '~/types'

    const stats: StatItem[] = [
    { value: '3+', label: 'Experience' },
    { value: '10+', label: 'Projects' },
    { value: '5+', label: 'Certifications' } 
    ]
</script>