<template>
    <div>
        <v-card class="adminAside">
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                permanent
            >
                <v-list-item class="px-2">

                    <!-- <v-btn icon @click.stop="mini = !mini"> -->
                    <v-btn icon>
                        <v-icon color="#ffffff">mdi-chevron-left</v-icon>
                    </v-btn>
                </v-list-item>

                <v-divider color="#62637d"></v-divider>

                <v-list dense>
                    <v-list-item v-for="[icon, title, href] in items_top" :key="icon" :href="href" link>
                        <v-list-item-icon>
                            <v-icon color="#ffffff">{{ icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ title }}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                            <v-icon color="#ffffff">mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>

                <v-divider color="#62637d"></v-divider>
                
                <v-list dense>
                    <v-list-item v-for="[icon, title, href] in items_middle" :key="icon" :href="href" link>
                        <v-list-item-icon>
                            <v-icon color="#ffffff">{{ icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ title }}</v-list-item-title>
                        </v-list-item-content>
                        
                        <v-list-item-icon>
                            <v-icon color="#ffffff">mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>

                <v-divider color="#62637d"></v-divider>

                <v-list dense>
                    <v-list-item v-for="[icon, title, href] in items_bottom" :key="icon" :href="href" link>
                        <v-list-item-icon>
                            <v-icon color="#ffffff">{{ icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ title }}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                            <v-icon color="#ffffff">mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "AdminAside",
    data () {
      return {
        drawer: true,
        mini: false,
        items_top: [
            //icon、title、router
          ['mdi-home', '首页', '/admin'],
          ['mdi-file-sign', '练习', '/admin/demo'],
          ['mdi-calendar-check-outline', '作业', '/admin/demo'],
          ['mdi-calendar-month-outline', '任务', '/admin/demo'],
          ['mdi-atom', '知识图谱', '/admin/demo'],
        ],
        items_middle: [
            // icon、title、router
          ['mdi-database', '课程题库', '/admin/demo'],
          ['mdi-text-box-plus-outline', '资源管理', '/admin/demo'],
          ['mdi-account-cog', '学生管理', '/admin/demo'],
          ['mdi-chart-areaspline-variant', '统计分析', '/admin/demo'],
          ['mdi-cog-outline', '系统管理', '/admin/demo'],
          ['mdi-chat-processing', '用户反馈', '/admin/demo'],
        ],
        items_bottom: [
            // icon、title、router
          ['mdi-help-circle', '帮助', '/admin/demo'],
          ['mdi-subdirectory-arrow-right', '进入学生系统', '/admin/demo'],
        ],
        
      }
    },
};
</script>

<style>
.v-navigation-drawer__content{
    background: #27274a !important;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
    color: #ffffff !important; 
}
.adminAside{
    width: 13vw;
    height: 90vh;
}
</style>
