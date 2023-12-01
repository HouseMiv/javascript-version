<script setup>
const vacation = [
  {
    NickName: 'HouseMiv',
    DateStart: '23.01.2023',
    DateEnd: '31.01.2023',
    Reason: 'Я люблю когда вылосатые мужики обмазываются маслом',
    Status: 'Одобрено',
  },
  {
    NickName: 'HouseMiv',
    DateStart: '23.01.2023',
    DateEnd: '31.01.2023',
    Reason: 'Я люблю когда вылосатые мужики обмазываются маслом',
    Status: 'Отклонено',
  },
  {
    NickName: 'HouseMiv',
    DateStart: '23.01.2023',
    DateEnd: '31.01.2023',
    Reason: 'Я люблю когда вылосатые мужики обмазываются маслом',
    Status: 'На рассмотрении',
  },
]
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase">
          NickName
        </th>
        <th>
          Дата начала отпуска
        </th>
        <th>
          Дата оконочания отпуска
        </th>
        <th>
          Причина отпуска
        </th>
        <th>
          Статус
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in vacation"
        :key="item.vacation"
      >
        <td>
          {{ item.NickName }}
        </td>
        <td class="text-center">
          {{ item.DateStart }}
        </td>
        <td class="text-center">
          {{ item.DateEnd }}
        </td>
        <td class="text-center">
          {{ item.Reason }}
        </td>
        <td class="text-center">
          {{ item.Status }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
