<script setup>
const user = useStrapiUser()
const { logout } = useStrapiAuth()
const router = useRouter()
import { Button } from '@/components/ui/button'

const logoutUser = () => {
    logout()
    router.push('/')
}

const signInUser = () => {
    router.push('/login')
}

</script>

<template>

    <Button v-if="user" class="bg-white" @click="logoutUser">Log-out</Button>
    <Button v-else class="bg-white" @click="signInUser">Login</Button>

</template>

