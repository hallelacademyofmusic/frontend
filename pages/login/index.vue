<script setup>

definePageMeta({
  middleware: () => {
    const user = useStrapiUser()
    if (user.value) {
      return navigateTo('/')
    }
  }
})

const { login } = useStrapiAuth()
const router = useRouter()

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast/use-toast'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'

// Update schema to include password field
const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6, "Password must be at least 6 characters long."),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async(values) => {
  const { username, password } = values;
  try {
    await login({ identifier: username, password: password })

    router.push('/book')
  } catch (e) {}
})

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-1/3 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Hallel Academy of Music</h2>
      <form class="space-y-6" @submit="onSubmit">
        <!-- Username Field -->
        <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="text" placeholder="johndoe@gmail.com" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- Password Field -->
        <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="**********" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- Submit Button -->
        <Button type="submit" class="w-full bg-black text-white hover:bg-gray-800">
          Login
        </Button>
      </form>
    </div>
  </div>
</template>
