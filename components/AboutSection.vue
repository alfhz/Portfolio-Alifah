<template>
    <section class="py-20 px-32 bg-white" id="about">
        
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-2xl font-extrabold tracking-[0.2em] uppercase text-slate-900">About</h2>
        </div>

        <div class="container mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                <div class="flex gap-6 h-full">
                <div class="w-2 md:w-3 bg-brand-purple shrink-0 rounded-full"></div>
                
                <div class="py-2">
                    <h3 class="text-2xl md:text-xl font-bold text-slate-900 mb-6 leading-tight">
                    As a Tech & Project <br>
                    Management Enthusiast
                    </h3>
                    <p class="text-slate-600 leading-relaxed text-justify text-sm md:text-base">
                    I thrive on turning complex problems into user-friendly solutions and managing projects from inception to successful completion. 
                    <br><br>
                    Furthermore, have experience as a chairman of student council at school which sharpened my leadership skills also an significant experience in project management honed my ability to work with diverse groups of people.
                    </p>
                </div>
                </div>

                <div class="flex gap-6 h-full">
                <div class="w-2 md:w-3 bg-brand-purple shrink-0 rounded-full"></div>

                <div class="w-full py-2">
                    <h3 class="text-2xl md:text-xl font-bold text-slate-900 mb-8">What I do?</h3>
                    
                    <div class="space-y-4">
                    <div v-for="(item, i) in activities" :key="i" class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition hover:-translate-x-1 duration-300">
                        <h4 class="font-semibold text-slate-900 mb-1 text-base">{{ item.title }}</h4>
                        <p class="text-sm text-slate-500 leading-relaxed">{{ item.desc }}</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </div>

        <div class="mt-24 py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div class="container mx-auto px-4 text-center">
            <h3 class="text-xl md:text-2xl font-bold uppercase tracking-wider mb-12 text-slate-800">Skill & Interest</h3>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            
            <div class="flex flex-col items-center gap-4 group">
                <div class="w-20 h-20 bg-orange-100 text-orange-500 rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform">
                💻
                </div>
                <span class="font-bold text-slate-700 text-sm md:text-base">Full Stack <br> Development</span>
            </div>

            <div class="flex flex-col items-center gap-4 group">
                <div class="w-20 h-20 bg-blue-100 text-blue-500 rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform">
                💡
                </div>
                <span class="font-bold text-slate-700 text-sm md:text-base">Project <br> Management</span>
            </div>

            <div class="flex flex-col items-center gap-4 group">
                <div class="w-20 h-20 bg-green-100 text-green-500 rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform">
                🚀
                </div>
                <span class="font-bold text-slate-700 text-sm md:text-base">Leadership and <br> Team Coordination</span>
            </div>

            <div class="flex flex-col items-center gap-4 group">
                <div class="w-20 h-20 bg-purple-100 text-purple-500 rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform">
                🧩
                </div>
                <span class="font-bold text-slate-700 text-sm md:text-base">Communication and <br> Problem-Solving</span>
            </div>

            </div>
        </div>
        </div>
    </section>
    </template>

    <script setup>
    const activities = [
    { title: 'Develop and Innovate', desc: 'Building websites both the client-side and server-side with best practice.' },
    { title: 'Lead and Manage', desc: 'Plan projects, lead teams, and allocate resources to ensure successful delivery.' },
    { title: 'Learn and Engage', desc: 'Enhance skills, pursue certifications, also connect with tech communities.' }
]
</script>