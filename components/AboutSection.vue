<template>
    <section class="py-16 md:py-20 bg-white">
        
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl md:text-3xl lg:text-4xl mb-3 font-extrabold tracking-[0.2em] uppercase text-slate-900">
                About Me
            </h2>
            <div class="h-1 w-16 md:w-20 bg-brand-lime mx-auto rounded-full"></div>
        </div>

        <div class="w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                
                <div class="flex gap-4 md:gap-6 h-full">
                    <div class="w-1.5 md:w-2 lg:w-3 bg-brand-purple shrink-0 rounded-full"></div>
                    <div class="py-1 md:py-2">
                        <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                            As a Tech & Project <br class="hidden md:block">
                            Management Enthusiast
                        </h3>
                        <p class="text-slate-600 leading-relaxed text-justify text-sm md:text-base">
                            I thrive on turning complex problems into user-friendly solutions and managing projects from inception to successful completion. 
                            <br><br>
                            Furthermore, have experience as a chairman of student council at school which sharpened my leadership skills also an significant experience in project management honed my ability to work with diverse groups of people.
                        </p>
                    </div>
                </div>

                <div class="flex gap-4 md:gap-6 h-full mt-4 lg:mt-0">
                    <div class="w-1.5 md:w-2 lg:w-3 bg-brand-purple shrink-0 rounded-full"></div>
                    <div class="w-full py-1 md:py-2">
                        <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">What I do?</h3>
                        <div class="space-y-3 md:space-y-4">
                            <div 
                                v-for="(item, i) in activities" 
                                :key="i" 
                                class="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition hover:-translate-x-1 duration-300"
                            >
                                <h4 class="font-semibold text-slate-900 mb-1 text-sm md:text-base">{{ item.title }}</h4>
                                <p class="text-xs md:text-sm text-slate-500 leading-relaxed">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const activities = [
        { title: 'Develop and Innovate', desc: 'Building websites both the client-side and server-side with best practice.' },
        { title: 'Lead and Manage', desc: 'Plan projects, lead teams, and allocate resources to ensure successful delivery.' },
        { title: 'Learn and Engage', desc: 'Enhance skills, pursue certifications, also connect with tech communities.' }
    ]
</script>