<template>
    <section class="pt-8 pb-24 bg-slate-50 relative z-10" id="certifications">
        <div class="container mx-auto px-4 sm:px-6">
        
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-slate-900 mb-4">
            Certifications
            </h2>
            <div class="h-1 w-20 bg-brand-lime mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
            v-for="cert in visibleCertifications" 
            :key="cert.id"
            class="bg-[#D9F99D] p-1 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300"
            >
            <div class="bg-gradient-to-br from-[#eecda3] to-[#ef629f] h-full rounded-[1.8rem] p-[2px]"> 
                <div class="bg-[#e4f5ac] h-full rounded-[1.7rem] p-6 flex flex-col justify-between border-b-4 border-lime-600/20">
                
                <div class="flex justify-between items-start mb-4">
                    <div class="bg-white/50 p-3 rounded-2xl backdrop-blur-sm">
                    <span class="text-2xl">🏆</span>
                    </div>
                    <span class="text-xs font-black bg-slate-900 text-white px-3 py-1 rounded-full">
                    {{ cert.year }}
                    </span>
                </div>
                
                <div>
                    <h4 class="font-black text-slate-900 text-lg uppercase leading-tight mb-2 tracking-tight">
                    {{ cert.name }}
                    </h4>
                    <p class="text-sm text-slate-600 font-bold uppercase tracking-wide mb-6">
                    {{ cert.issuer }}
                    </p>
                </div>

                <button class="w-full bg-[#6366F1] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-lg">
                    <a :href="cert.link" target="_blank" class="block w-full h-full">See Credential</a>
                </button>
                </div>
            </div>
            </div>
        </div>

        <div v-if="certifications.length > limit" class="text-center mt-16">
            <button 
            @click="toggleShowMore" 
            class="group inline-flex items-center gap-3 text-slate-500 font-bold uppercase text-sm tracking-widest hover:text-brand-purple transition-colors"
            >
            <span>{{ isExpanded ? 'Show Less' : 'More Certifications' }}</span>
            <div class="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                <span :class="{'rotate-180': isExpanded}" class="transition-transform duration-300 block">
                ▼
                </span>
            </div>
            </button>
        </div>

        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import type { CertificationItem } from '~/types'

    const limit = ref(6)
    const isExpanded = ref(false)

    const certifications: CertificationItem[] = [
    { id: 1, name: 'Transform Geoscience Data with Deep Learning', issuer: 'Geosoftware.ID', year: '2025', link: 'https://drive.google.com/file/d/1O0q-ZhBQGNjkInRlSVBrnK2DLcLGDp6H/view' },
    { id: 2, name: 'Professional Web Developer Certification', issuer: 'BNSP', year: '2024', link: 'https://drive.google.com/file/d/12uiM3W2akwtbEd6l8ifg8qt38AsUs5sW/view?usp=sharing' },
    { id: 3, name: 'Junior Web Developer', issuer: 'KOMINFO', year: '2024', link: 'https://drive.google.com/file/d/1OjmNvjPdYYm2XXqV5kJNyUFnho6BmaLw/view?usp=drive_link' },
    { id: 4, name: 'Software Engineering Competency Assessment', issuer: 'PT Padepokan Tujuh Sembilan', year: '2024', link: 'https://drive.google.com/file/d/1iWqCg7l29hGYsJ9hc0fL_KVi0nq4abmP/view' },
    { id: 5, name: 'Basic JavaScript Programming', issuer: 'Dicoding', year: '2024', link: 'https://www.dicoding.com/certificates/EYX4JN24WZDL' },
    { id: 6, name: 'React Web Developer', issuer: 'Dicoding', year: '2024', link: 'https://www.dicoding.com/certificates/2VX3K61DNXYQ' },
    { id: 7, name: 'Kongres Kebangsaan Festival Niti Bukti Jabar Masagi', issuer: 'Dinas Pendidikan Provinsi Jawa Barat', year: '2023', link: 'https://drive.google.com/file/d/1uLDnIZZt9BgONlTTsg_K9y-nBla7hsWr/view' },
    { id: 8, name: 'Java Fundamental ', issuer: 'Oracle', year: '2023', link: 'https://drive.google.com/file/d/1xPrXa6ZQ3fBP44lHQGD7hHxlefQJtJ0v/view?usp=sharing' },
    { id: 9, name: 'ASEAN Data Science Explorers', issuer: 'ASEAN Foundation', year: '2022', link: 'https://drive.google.com/file/d/1pOkCPnOxtL7GIOaWUZA8MBx4MkLj9Fhn/view?usp=sharing' },
    ]

    const visibleCertifications = computed(() => {
    if (isExpanded.value) {
        return certifications 
    } else {
        return certifications.slice(0, limit.value) 
    }
    })

    function toggleShowMore() {
    isExpanded.value = !isExpanded.value
    }
</script>