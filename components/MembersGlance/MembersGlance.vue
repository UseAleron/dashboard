<script setup lang="ts">
const props = defineProps<{
  members: { id: number; name: string; picture?: string }[];
}>();

const firstFiveMembers = computed(() => props.members.slice(0, 5));
</script>

<template>
  <div class="symbol-group symbol-hover flex-nowrap">
    <MembersGlanceItem
      v-for="member in firstFiveMembers"
      :key="member.id"
      :name="member.name"
      :picture="member.picture"
    />
    <MembersGlanceOverflow
      v-if="members.length > 5"
      :additional="members.length - 5"
    />
  </div>
</template>
