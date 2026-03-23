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

            <div class="flex items-center gap-4 md:gap-8">
                
                <div class="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
                    <a href="#" class="hover:text-brand-purple transition-colors">Home</a>
                    <a href="#about" class="hover:text-brand-purple transition-colors">Profile</a>
                    <a href="#skills" class="hover:text-brand-purple transition-colors">Skills</a>
                    <a href="#tasks" class="hover:text-brand-purple transition-colors">Tasks</a>
                    <a href="#portfolio" class="hover:text-brand-purple transition-colors">Portfolio</a>
                </div>
    
                <a 
                    href="#contact"
                    class="bg-brand-lime text-black px-4 py-2 md:px-5 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-lime-100 transition shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap"
                >
                    Contact
                </a>
            </div>
            
        </div>
    </nav>
</template>