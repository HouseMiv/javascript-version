<template>
  <VDialog
    v-model="dialog"
    max-width="600px"
    persistent
  >
    <VCard>
      <VCardText>
        <div v-if="currentIndex === 0">
          Привет, ты стал частью большой команды!<br>
          Сейчас я расскажу тебе про 8 заповедей админа:
        </div>
        <div v-if="currentIndex > 0">
          <div
            v-for="(message, index) in messages"
            :key="index"
          >
            {{ message }}
          </div>
        </div>
        <VBtn
          v-if="currentIndex === 0"
          @click="showNextText"
        >
          Далее
        </VBtn>
        <VBtn
          v-else
          @click="closeDialog"
        >
          Закрыть
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const currentIndex = ref(0)

const messages = [
  "1. Админ всегда прав.",
  "2. Админ не спит, админ отдыхает.",
  "3. Админ не ест, админ восстанавливает силы.",
  "4. Кто приходит со своими убеждениями, выходит с убеждениями админа.",
  "5. Админ не ошибается, админ принимает рискованные решения.",
  "6. Админ не трус, админ поступает предусмотрительно.",
  "7. Админ не любопытен, админ должен быть в курсе всех событий.",
  "8. Если ты думаешь, что админ не прав, то ты не прав.",
]

const showNextText = () => {
  currentIndex.value++
}

const closeDialog = () => {
  dialog.value = false
}
</script>

<style scoped>
  .v-dialog__content {
    background-color: #333;
  }
</style>
