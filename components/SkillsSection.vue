<template>
    <section>
        <div class="py-16 bg-gradient-to-br" id="skills" style="background: radial-gradient(70.71% 70.71% at 30% 30%, rgba(170, 124, 251, 0.2) 0%, rgba(170, 195, 255, 0.15) 77%, rgba(142, 72, 232, 0.05) 100%);">
            <div class="container w-[85%] md:w-[80%] max-w-6xl mx-auto text-center">
                <h3 class="text-xl md:text-2xl mb-3 font-bold uppercase tracking-wider text-slate-800">Skill & Interest</h3>
                <div class="h-1 w-20 mb-12 bg-brand-purple mx-auto rounded-full"></div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    <div 
                    v-for="(item, index) in skillsAndInterests" 
                    :key="index" 
                    class="flex flex-col items-center gap-4 group"
                    >
                    <div 
                        :class="[
                        'w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform',
                        item.bgClass,
                        item.textClass
                        ]"
                    >
                        {{ item.icon }}
                    </div>
                    <span 
                        class="font-bold text-slate-700 text-sm md:text-base text-center"
                        v-html="item.title"
                    ></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const skillsAndInterests = [
        {
            icon: '💻',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-500',
            title: 'Full Stack <br> Development'
        },
        {
            icon: '💡',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-500',
            title: 'Project <br> Management'
        },
        {
            icon: '🚀',
            bgClass: 'bg-green-100',
            textClass: 'text-green-500',
            title: 'Leadership and <br> Team Coordination'
        },
        {
            icon: '🧩',
            bgClass: 'bg-purple-100',
            textClass: 'text-purple-500',
            title: 'Communication and <br> Problem-Solving'
        }
    ]
</script>