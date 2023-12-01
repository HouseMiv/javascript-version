<script setup>
import { ref } from 'vue'

const startDate = ref('')
const endDate = ref('')
const reason = ref('')

const minEndDate = ref('')

const updateMinEndDate = () => {
  minEndDate.value = startDate.value || minEndDateFallback()

  // Если выбрана дата начала и дата окончания меньше даты начала, установим её равной дате начала
  if (startDate.value && endDate.value && endDate.value < startDate.value) {
    endDate.value = startDate.value
  }
}

const minEndDateFallback = () => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  return `${yyyy}-${mm}-${dd}`
}
</script>

<template>
  <VForm @submit.prevent="submitForm">
    <VCol cols="12">
      <VRow no-gutters>
        <VCol
          cols="12"
          md="3"
        >
          <label for="startDate">Дата начала отпуска</label>
        </VCol>
        <VCol
          cols="12"
          md="9"
        >
          <VTextField
            id="startDate"
            v-model="startDate"
            type="date"
            prepend-inner-icon="bx-time-five"
            placeholder="10.10.2023"
            persistent-placeholder
            @input="updateMinEndDate"
          />
        </VCol>
      </VRow>
    </VCol>

    <VCol cols="12">
      <VRow no-gutters>
        <VCol
          cols="12"
          md="3"
        >
          <label for="endDate">Дата окончания отпуска</label>
        </VCol>
        <VCol
          cols="12"
          md="9"
        >
          <VTextField
            id="endDate"
            v-model="endDate"
            type="date"
            :min="minEndDate"
            prepend-inner-icon="bxs-time-five"
            placeholder="25.10.2023"
            persistent-placeholder
          />
        </VCol>
      </VRow>
    </VCol>

    <VCol cols="12">
      <VRow no-gutters>
        <VCol
          cols="12"
          md="3"
        >
          <label for="mobileHorizontalIcons">Причина отпуска</label>
        </VCol>
        <VCol
          cols="12"
          md="9"
        >
          <VTextField
            id="mobileHorizontalIcons"
            v-model.lazy="reason"
            type="text"
            prepend-inner-icon="bx-notepad"
            placeholder="Уехал путешествовать по миру"
            persistent-placeholder
            @keydown="handleEnterKey"
          />
        </VCol>
      </VRow>
    </VCol>

    <VCol
      offset-md="3"
      cols="12"
      md="9"
      class="d-flex gap-4"
    >
      <VBtn type="submit">
        Отправить заявку
      </VBtn>
    </VCol>
  </VForm>
</template>
