<!-- RoflDialog.vue -->
<template>
  <VDialog
    v-model="dialog"
    max-width="500px"
    persistent
  >
    <VCard>
      <VCardTitle class="text-md-h5 text-primary">
        Majestic: Привет, ты стал частью большой команды! Ты рад этому?
      </VCardTitle>
      <VCardText>
        <VRow>
          <VCol
            v-for="(choice, index) in choices"
            :key="index"
            class="mb-2"
          >
            <VBtn @click="handleChoice(choice)">
              {{ choice }}
            </VBtn>
          </VCol>
        </VRow>
        <VRow v-if="selectedChoice">
          <VCol>
            <VCardTitle>{{ selectedChoice.text }}</VCardTitle>
            <VCardText>{{ selectedChoice.response }}</VCardText>
          </VCol>
        </VRow>
      </VCardText>
      <VCardActions>
        <VBtn @click="closeDialog">
          Закрыть
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const selectedChoice = ref(null)

const closeDialog = () => {
  dialog.value = false
  selectedChoice.value = null
}

const choices = [
  { text: 'Да', response: 'Это хорошо, а ты знаешь про 8 заповедей админа?' },
  { text: 'Нет', response: 'Ты, должно быть, шутник.' },
]

const handleChoice = choice => {
  selectedChoice.value = choices.find(c => c.text === choice)
}
</script>
