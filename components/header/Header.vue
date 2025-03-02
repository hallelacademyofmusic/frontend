<script setup>

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

</script>


<template>

    <div class="bg-gray-100 h-[80px] border-b flex items-center justify-center md:p-4 p-0 ">
        <div class="container flex items-center justify-between">
            <NuxtLink class="font-bold text-2xl" to="/">Hallel Academy</NuxtLink>
            <nav>
                <ul class="hidden md:flex gap-6 items-center">
                    <li>
                        <NuxtLink to="/book">Book a class</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/schedule">View schedule</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact us</NuxtLink>
                    </li>
                    <li>
                        <LoginLogout />
                    </li>
                </ul>
                <Sheet>
                    <SheetTrigger as-child>
                        <button class="md:hidden flex">
                            <img src="/assets/icons/hamburger.svg" height="30" width="30" />
                        </button>
                    </SheetTrigger>
                    <SheetContent>
                        <ul class="flex flex-col gap-6">
                            <li>
                                <NuxtLink to="/book">Book a class</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/schedule">View schedule</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about">About us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact us</NuxtLink>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    </div>

</template>