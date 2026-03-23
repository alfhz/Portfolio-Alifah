<template>
    <section>
        <div class="py-16 md:py-20 bg-gradient-to-br" id="skills" style="background: radial-gradient(70.71% 70.71% at 30% 30%, rgba(170, 124, 251, 0.2) 0%, rgba(170, 195, 255, 0.15) 77%, rgba(142, 72, 232, 0.05) 100%);">
            
            <div class="container w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto text-center">
                
                <h2 class="text-2xl md:text-3xl lg:text-4xl mb-3 font-bold uppercase tracking-[0.2em] text-slate-800">
                    Skill & Interest
                </h2>
                <div class="h-1 w-16 md:w-20 mb-10 md:mb-12 bg-brand-purple mx-auto rounded-full"></div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                    <div 
                        v-for="(item, index) in skillsAndInterests" 
                        :key="index" 
                        class="flex flex-col items-center gap-3 md:gap-4 group"
                    >
                        <div 
                            :class="[
                            'w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center text-3xl md:text-4xl shadow-sm group-hover:scale-110 transition-transform',
                            item.bgClass,
                            item.textClass
                            ]"
                        >
                            {{ item.icon }}
                        </div>
                        
                        <span 
                            class="font-bold text-slate-700 text-xs md:text-sm lg:text-base text-center leading-relaxed"
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