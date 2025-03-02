<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const { find } = useStrapi()
const bookings = ref([])

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  selectable: true,
  slotMinTime: '09:00:00',
  slotMaxTime: '22:00:00',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay',
  },
  events: bookings.value.map(booking => ({
    id: booking.id,
    title: `${booking.student.firstName}'s ${booking.title}`,
    start: booking.start,
    end: booking.end,
    allDay: false,
    backgroundColor: booking.bookingStatus === 'Confirmed' ? 'blue' : 'red',
    borderColor: booking.bookingStatus === 'Confirmed' ? 'blue' : 'red',
    textColor: 'white',
    extendedProps: {
      bookingStatus: booking.bookingStatus,
    },
  })),
  eventContent: function (arg) {
    const isMonthView = arg.view.type === 'dayGridMonth';
    const bookingStatus = arg.event.extendedProps.bookingStatus
    return {
      html: `
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span>${arg.event.title}</span>
            ${
            !isMonthView
              ? `<span 
                  style="margin-left: 4px; margin-top:-9px; padding: 2px 6px; font-size: 10px; border-radius: 4px; 
                         color: white; background-color: transparent;">
                  ${bookingStatus}
                </span>`
              : ''
            }
        </div>
      `
    }
  },
  eventTimeFormat: {
    hour: 'numeric',
    minute: '2-digit',
    meridiem: 'short'
  }
}))

onMounted(async () => {
  const response = await find('class-bookings', {
    populate: {
      user: true,
      instructor: true,
      student: true,
    }
  })
  bookings.value = response.data
})
</script>

<template>
  <FullCalendar :options="calendarOptions" />
</template>

<style>
body {
  font-family: 'Helvetica', sans-serif;
  background-color: #f7f7f7;
}
</style>
