<template>
    <div class="text-center" style="width: 100%">
        <v-menu :position-x="x" absolute>
            <template v-slot:activator="{ on, attrs }" style="width: 100%; height: 100%">
                <v-list-item v-bind="attrs" v-on="on" style="width: 100%; height: 100%">
                    <v-list-item-icon>
                        <v-icon color="#ffffff">{{ menu.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon color="#ffffff">mdi-chevron-right</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in menu.items" :key="index">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            x: 200,
        }
    }
}
</script>

<style>
</style>