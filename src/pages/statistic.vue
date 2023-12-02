<script setup>
import AnalyticsFinanceTabs from '@/views/dashboard/AnalyticsFinanceTab.vue'
import AnalyticsOrderStatistics from '@/views/dashboard/AnalyticsOrderStatistics.vue'
import AnalyticsProfitReport from '@/views/dashboard/AnalyticsProfitReport.vue'
</script>

<template>
  <div class="flex-container">
    <!-- 👉 Profit Report -->
    <div class="flex-item">
      <h6 class="text-h6 text-no-wrap mb-1">
        Статистика администратора
      </h6>
      <AnalyticsProfitReport />
    </div>

    <!-- 👉 Finance Tabs -->
    <div class="flex-item">
      <AnalyticsFinanceTabs />
    </div>

    <!-- 👉 Order Statistics -->
    <div class="flex-item">
      <AnalyticsOrderStatistics />
    </div>
  </div>
</template>

<style scoped>
  .flex-container {
    display: flex;
    flex-direction: column;
  }

  .flex-item {
    flex: 1;
    margin: 8px;
  }
</style>
