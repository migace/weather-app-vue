<template>
  <!-- <div v-if="error">failed to load</div> -->
  <div v-if="!data">loading...</div>
  <div v-else>
    <q-page
      class="row items-center justify-evenly bg-image"
      :style="{
        backgroundImage:
          'url(' +
          require(`../assets/images/${data.weather?.[0]?.description?.replaceAll(
            ' ',
            '-'
          )}.jpeg`) +
          ')',
      }"
    >
      <div class="row items-center">
        <h1 class="text-h1 q-mr-xl">{{ data.main.temp }}</h1>
        <h5 class="text-h5">{{ data.name }}</h5>
      </div>
      <!-- <pre>
    {{ JSON.stringify(data, null, 2) }}
    </pre
      > -->
      <example-component
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
      ></example-component>
    </q-page>
  </div>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';
import useCurrentWeather from 'src/composables/useCurrentWeather';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const { data } = useCurrentWeather();

    console.log('data', JSON.stringify(data, null, 2));

    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });

    const bgImage = '';

    return { todos, meta, data, bgImage };
  },
});
</script>

<style lang="scss">
.bg-image {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
