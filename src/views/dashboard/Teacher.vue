<script setup>
import statsCrime from '@images/cards/CrimeTeach.png'
import statsForum from '@images/cards/ForumTeach.png'
import statsLogs from '@images/cards/LogsTeach.png'
import statsMain from '@images/cards/MainTeach.png'
import statsState from '@images/cards/StateTeach.png'
import { hexToRgb } from '@layouts/utils'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const series = {
  Общее: [{
  }],
  State: [{
  }],
  Crime: [{
  }],
  Forum: [{
  }],
  Logs: [{
  }],
}

const currentTab = ref('Общее')

const tabData = computed(() => {
  const data = {
    Общее: {
      avatar: statsMain,
      stats: 'Привет, друга!',
      title: 'Ты попал на основую страницу AdminFAQ!',
      additionalText: 'Здесь, ты можешь найти информацию о Всех разделах.',
    },
    State: {
      avatar: statsState,
      stats: 'Приветствую, костюм не забыл?',
      title: 'Ты попал State Squad',
      additionalText: 'Здесь, ты можешь найти информацию/пояснение правил о Госудасртвенных структурах от своего Чифа.',
    },
    Crime: {
      avatar: statsCrime,
      stats: 'Здарова, ревик взял?',
      title: 'Ты попал в мир авторитетов',
      additionalText: 'Здесь, ты можешь найти информацию/пояснение правил о Криминальных структурах от своего Чифа.',
    },
    Forum: {
      avatar: statsForum,
      stats: 'Ооо, местный душнила',
      title: 'Ты попал в мир шизофрении',
      additionalText: 'Здесь, ты можешь найти информацию/пояснение правил/гайды от своего Чифа.',
    },
    Logs: {
      avatar: statsLogs,
      stats: 'Куда он дел оруиже? ',
      title: 'Ты теперь главный сыщик района',
      additionalText: 'Здесь, ты можешь найти информацию от своего Чифа.',
    },
  }
  
  return data[currentTab.value]
})

const chartConfig = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const disabledTextColor = `rgba(${ hexToRgb(String(currentTheme['on-surface'])) },${ variableTheme['disabled-opacity'] })`
  const borderColor = `rgba(${ hexToRgb(String(variableTheme['border-color'])) },${ variableTheme['border-opacity'] })`
})
</script>

<template>
  <VCard>
    <VCardItem>
      <VTabs
        v-model="currentTab"
        class="v-tabs-pill"
      >
        <VTab value="Общее">
          Общее
        </VTab>
        <VTab value="State">
          State
        </VTab>
        <VTab value="Crime">
          Crime
        </VTab>
        <VTab value="Forum">
          Forum
        </VTab>
        <VTab value="Logs">
          Logs
        </VTab>
      </VTabs>
    </VCardItem>

    <VCardText class="d-flex align-center gap-3">
      <VAvatar
        size="46"
        rounded
        :image="tabData.avatar"
      />

      <div>
        <h6 class="text-h6">
          {{ tabData.stats }}
        </h6>
        <div class="d-flex align-center gap-2">
          <p class="mb-0">
            {{ tabData.title }}
          </p>
        </div>
      </div>
    </VCardText>

    <VCardText>
      <!-- Main Content (VueApexCharts) goes here -->
      <VueApexCharts
        type="area"
        :height="241"
        :options="chartConfig"
        :series="series[currentTab]"
      />
    </VCardText>

    <VCardText>
      <!-- Additional Text Goes Here -->
      {{ tabData.additionalText }}
    </VCardText>
  </VCard>
</template>
