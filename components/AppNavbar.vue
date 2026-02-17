<template>
    <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div class="container mx-auto px-4 sm:px-32 h-16 flex items-center justify-between">
        
            <div class="flex items-center  cursor-pointer hover:opacity-80 transition">
                <img 
                src="/public/logo.png" 
                alt="Alifah Zachra Logo"
                class="w-8 h-8 flex items-center justify-centershadow-md">
                </img>
            </div>

            <div class="flex items-center gap-8">
                <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#" class="hover:text-brand-purple transition-colors">Home</a>
                    <a href="#" class="hover:text-brand-purple transition-colors">Profile</a>
                    <a href="#" class="hover:text-brand-purple transition-colors">Skills</a>
                    <a href="#" class="hover:text-brand-purple transition-colors">Tasks</a>
                    <a href="#" class="hover:text-brand-purple transition-colors">Portfolio</a>
                </div>
    
                <button class="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-700 transition shadow-lg hover:shadow-xl active:scale-95">
                    Contact
                </button>
            </div>
        </div>
    </nav>
</template>