<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

definePageMeta({
  middleware: 'auth'
})

const { findOne, create } = useStrapi()
const userWithStudents = ref(null)
const students = ref(null)
const { toast } = useToast()
const router = useRouter()
const selectedOffering = ref('') // Track the selected offering

const fetchUserWithStudents = async () => {
  try {
    const response = await findOne('users/me', { populate: 'students' })

    const uniqueStudents = response.students.reduce((acc, student) => {
      if (!acc.some(s => s.id === student.id || s.firstName === student.firstName)) {
        acc.push(student)
      }
      return acc
    }, [])

    userWithStudents.value = { ...response, students: uniqueStudents }
    students.value = userWithStudents.value.students;
  } catch (error) {
    console.error('Error fetching students:', error)
  }
}

onMounted(fetchUserWithStudents)

const formSchema = toTypedSchema(z.object({
  title: z.string().min(2),
  start: z.string(),
  end: z.string(),
  instructor: z.string(),
  offering: z.string(),
  location: z.string().min(2).optional(),
  student: z.string(),
}))

const { isFieldDirty, handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: 'Piano lesson',
  },
})

const onSubmit = handleSubmit(async (values) => {
  toast({ title: 'Booking Created', description: 'Your booking has been successfully created. Go to the schedule page to see your booking.' })
  await create('class-bookings', {
    title: values.title,
    start: values.start,
    end: values.end,
    instructor: values.instructor,
    user: userWithStudents.id,
    bookingStatus: 'Pending',
    location: values.offering === 'In-person' ? values.location : '',
    eventLink: '',
    offering: values.offering,
    student: values.student
  })

  resetForm({
    values: {
      title: 'Piano lesson',
    },
  })
  selectedOffering.value = ''
})
</script>

<template>
  <Header />

  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="w-1/3 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Book a Lesson</h2>
      <form class="space-y-4" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Lesson Title" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="start">
          <FormItem>
            <FormLabel>Start Time</FormLabel>
            <FormControl>
              <Input type="datetime-local" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="end">
          <FormItem>
            <FormLabel>End Time</FormLabel>
            <FormControl>
              <Input type="datetime-local" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="instructor">
          <FormItem>
            <FormLabel>Instructor</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
                <SelectTrigger>
                  <SelectValue placeholder="Select an instructor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Leighton</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="offering">
          <FormItem>
            <FormLabel>Offering</FormLabel>
            <FormControl>
              <Select v-bind="componentField" @update:modelValue="selectedOffering = $event">
                <SelectTrigger>
                  <SelectValue placeholder="Select an offering" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="In-person">In-person</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-if="selectedOffering === 'In-person'" v-slot="{ componentField }" name="location">
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Room 101" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="student">
          <FormItem>
            <FormLabel>Student</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
                <SelectTrigger>
                  <SelectValue placeholder="Select a student" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="student in students" :key="student.id" :value="student.documentId">
                    {{ student.firstName }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit" class="w-full bg-black text-white hover:bg-gray-800">Book Now</Button>
      </form>
    </div>
  </div>

  <Toaster />
</template>
