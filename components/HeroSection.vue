<template>
    <section id="home" class="relative w-full overflow-hidden min-h-screen flex flex-col items-center pt-16 md:pt-20 bg-[linear-gradient(to_right,#E7EEFE_0%,rgba(255,255,255,0.95)_35%,#FFFFFF_50%,#FFFFFF_75%,#F1F8DE_100%)]">
        
        <div class="relative mb-6 md:mb-8 group">
            <img 
                src="/profile.png" 
                alt="Alifah Zachra" 
                class="relative z-10 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover"
            />
        </div>
        
        <div class="mb-6 md:mb-8 px-4 w-full text-center flex justify-center">
            <span class="bg-brand-lime hover:bg-lime-100 px-6 py-3 md:px-12 md:py-4 lg:px-20 rounded-xl text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark shadow-lg inline-block tracking-tight hover:-translate-y-1 transition-transform duration-500">
                <p class="text-slate-500 font-medium mb-1 text-xs md:text-sm text-center tracking-wide">
                    Hello! I Am ..
                </p>
                Alifah Zachra S
            </span>
        </div>

        <div class="max-w-4xl text-center space-y-3 mb-10 px-6 md:px-8">
            <p class="text-sm md:text-base lg:text-lg text-slate-800 font-medium leading-relaxed">
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

        <div class="grid grid-cols-3 gap-2 md:gap-4 w-[90%] md:w-full max-w-xl px-2 md:px-0">
            <div 
                v-for="(stat, index) in stats" 
                :key="index" 
                class="bg-white p-2 md:p-5 rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
                <span class="text-lg md:text-2xl font-medium text-slate-900 mb-0 md:mb-1">{{ stat.value }}</span>
                <span class="text-slate-500 text-[8px] md:text-xs lg:text-sm font-medium uppercase tracking-widest">{{ stat.label }}</span>
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