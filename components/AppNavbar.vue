<template>
    <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div class="container w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto h-16 flex items-center justify-between">
        
            <div class="flex items-center cursor-pointer hover:opacity-80 transition">
                <img 
                    src="/logo.png" 
                    alt="Alifah Zachra Logo"
                    class="w-8 h-8 md:w-9 md:h-9 object-contain drop-shadow-sm"
                />
            </div>

            <div class="flex items-center gap-3 md:gap-8">
                <div class="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
                    <a href="#home" class="hover:text-brand-purple transition-colors">Home</a>
                    <a href="#about" class="hover:text-brand-purple transition-colors">Profile</a>
                    <a href="#skills" class="hover:text-brand-purple transition-colors">Skills</a>
                    <!-- <a href="#tasks" class="hover:text-brand-purple transition-colors">Tasks</a> -->
                    <a href="#portfolio" class="hover:text-brand-purple transition-colors">Portfolio</a>
                </div>
    
                <a 
                    href="#contact"
                    class="hidden md:inline-block bg-brand-lime text-black px-5 py-2 rounded-lg text-sm font-semibold hover:bg-lime-100 transition shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap"
                >
                    Contact
                </a>

                <button 
                    @click="toggleMenu"
                    class="md:hidden p-1 text-slate-800 hover:text-brand-purple transition-colors focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <Transition name="fade">
        <div 
            v-if="isMenuOpen" 
            @click="closeMenu"
            class="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
        ></div>
    </Transition>

    <Transition name="slide-right">
        <div 
            v-if="isMenuOpen" 
            class="md:hidden fixed top-0 right-0 bottom-0 w-64 bg-white z-[70] shadow-2xl flex flex-col py-6 px-8"
        >
            <div class="flex justify-end mb-8">
                <button @click="closeMenu" class="p-2 text-slate-500 hover:text-brand-purple hover:bg-slate-100 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="flex flex-col gap-6">
                <a href="#home" @click="closeMenu" class="text-lg font-bold text-slate-800 hover:text-brand-purple transition-colors border-b border-slate-100 pb-3">Home</a>
                <a href="#about" @click="closeMenu" class="text-lg font-bold text-slate-800 hover:text-brand-purple transition-colors border-b border-slate-100 pb-3">Profile</a>
                <a href="#skills" @click="closeMenu" class="text-lg font-bold text-slate-800 hover:text-brand-purple transition-colors border-b border-slate-100 pb-3">Skills</a>
                <!-- <a href="#tasks" @click="closeMenu" class="text-lg font-bold text-slate-800 hover:text-brand-purple transition-colors border-b border-slate-100 pb-3">Tasks</a> -->
                <a href="#portfolio" @click="closeMenu" class="text-lg font-bold text-slate-800 hover:text-brand-purple transition-colors border-b border-slate-100 pb-3">Portfolio</a>
            </div>

            <div class="mt-auto">
                <p class="text-xs text-slate-400 font-medium uppercase tracking-widest text-center mb-3">Get In Touch</p>
                <a 
                    href="#contact" 
                    @click="closeMenu"
                    class="block w-full text-center bg-brand-purple text-white px-4 py-3 rounded-xl font-bold hover:bg-[#371e88] transition-colors shadow-md"
                >
                    Contact
                </a>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    import { ref, watch, onMounted, onUnmounted } from 'vue'

    const isMenuOpen = ref(false)

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value
    }

    function closeMenu() {
        isMenuOpen.value = false
    }

    watch(isMenuOpen, (newVal) => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = newVal ? 'hidden' : ''
        }
    })

    function handleResize() {
        if (typeof window !== 'undefined' && window.innerWidth >= 768 && isMenuOpen.value) {
            closeMenu()
        }
    }

    onMounted(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)
        }
    })

    onUnmounted(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize)
            document.body.style.overflow = ''
        }
    })
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

    .slide-right-enter-active,
    .slide-right-leave-active {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .slide-right-enter-from,
    .slide-right-leave-to {
        transform: translateX(100%);
    }
</style>