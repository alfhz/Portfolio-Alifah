<template>
    <section class="py-16 md:py-20 bg-slate-50 relative z-10" id="certifications">
        <div class="container w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto">
        
        <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] uppercase text-slate-900 mb-3">
                Certifications
            </h2>
            <div class="h-1 w-16 md:w-20 bg-brand-lime mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
            <div 
                v-for="cert in visibleCertifications" 
                :key="cert.id"
                class="h-full bg-gradient-to-b from-[#F7FEE7] via-[#E4F5AC] to-[#D9F99D] rounded-[2rem] p-5 md:p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 border border-lime-300/30 shadow-sm hover:shadow-lime-200"
            >
            
            <div class="mb-5 md:mb-6">
                <h4 class="font-bold text-slate-800 text-base md:text-lg uppercase leading-tight mb-2 tracking-tight">
                    {{ cert.name }}
                </h4>
                <div class="flex justify-between items-start mb-4">
                    <p class="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-wide pr-2">
                        {{ cert.issuer }}
                    </p>
                    <span class="text-xs font-bold text-slate-600 py-1 rounded-full whitespace-nowrap">
                        {{ cert.year }}
                    </span>
                </div>
            </div>

            <a 
                :href="cert.link" 
                target="_blank" 
                class="block w-full text-center bg-[#6366F1] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#371e88] transition-colors shadow-lg mt-auto"
            >
                See Credential
            </a>

            </div>
        </div>

        <div v-if="certifications.length > limit" class="text-center mt-12 md:mt-16">
            <button 
                @click="toggleShowMore" 
                class="group inline-flex items-center gap-2 md:gap-3 text-slate-500 font-bold uppercase text-xs md:text-sm tracking-widest hover:text-brand-purple transition-colors"
            >
                <span>{{ isExpanded ? 'Show Less' : 'More Certifications' }}</span>
                <div class="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                    <span :class="{'rotate-180': isExpanded}" class="transition-transform duration-300 block text-[10px] md:text-xs">
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
    // Pastikan path type ini sudah benar di project kamu
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