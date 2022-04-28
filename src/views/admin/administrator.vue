<template>
  <div>
      <div>
      <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="addTerm"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
     
    </v-btn>
     添加学期
     </div>





     <v-card
     v-show="showTermWindow"
    class="mx-auto"
    max-width="800"
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
        
      ></v-avatar>
    </v-card-title>


    <v-window v-model="step"  >
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Term Name"
            v-model="termName"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            请输入学期名称
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
       <v-alert
       v-model="alert"
  color="red"
  dense
  outlined
  text
  type="error"
>结束时间必须大于开始时间</v-alert>


   <v-col
      cols="12"
      sm="6"
      md="4"
    >
    <div class ="d-flex justify-left">
      <v-menu
        ref="startMenu"
        v-model="startDateMenu"
        :close-on-content-click="false"
        :return-value.sync="termStartDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="termStartDate"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="termStartDate"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="startDateMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.startMenu.save(termStartDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="endMenu"
        v-model="endDateMenu"
        :close-on-content-click="false"
        :return-value.sync="termEndDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="termEndDate"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="termEndDate"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="endDateMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.endMenu.save(termEndDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      </div>
    </v-col>
    
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="../../assets/admin/img/admin_index/klee.jpg"
          ></v-img>
          <h3 class="text-h6 font-red mb-2">
            注意：添加学期后不能更改！
          </h3>
          
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-show="step <3"
        color="primary"
        depressed
        @click="checkTermDate"
      >
        Next
      </v-btn>
      <v-btn
        v-show="step === 3"
        color="primary"
        depressed
        @click="addTermInfo"
      >
        Confirm
      </v-btn>
    </v-card-actions>
  </v-card>
  <br>
<v-card>
    <v-card-title>
      学期名称
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="contents"
      :search="search"
      
    >
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="Into(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
    </v-data-table>
    
  </v-card>

  </div>
</template>

<script>
export default {
    methods:{
    addTerm:function() {
        this.showTermWindow = true;
        
    },
    addTermInfo:function(){
        this.step++;
        console.log(this.termName,this.termStartDate,this.termEndDate)
        this.h ={name:'',start:'',end:''};
        this.showTermWindow = false;
        this.h.name=this.termName;
        this.h.start=this.termStartDate;
        this.h.end=this.termEndDate;
        this.contents.push(this.h)
        console.log(this.contents)
        

    },
    checkTermDate:function(){
      if(this.termStartDate > this.termEndDate){
        this.alert=true;
      }
      else{
        this.step++;
        this.alert = false;
      }
    },
    Into(item) {
        this.$router.push({path:'/admin/administrator/',query:{term:item.name}});
        // this.$router.push({path:'/admin/demo'});
      },
    },
    
    data :() => ({
      showTermWindow:false,
      step: 0,
      termName:'',
      termStartDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      termEndDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      startDateMenu: false,
      endDateMenu: false,
      alert:false,
      search: '',
      h:{name:'',start:'',end:''},
        headers: [
          {
            text: '学期名称',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '开始时间', value: 'start' },
          { text: '结束时间', value: 'end' },
          { text: '进入查看', value: 'actions', sortable: false },
        ],
        contents: [
          {
            name: '2020年秋',
           start:'2020-09-01',
           end:'2021-01-14',
          },
          {
            name: '2020年春',
           start:'2021-03-01',
           end:'2021-06-30',
          },
          {
            name: '2021年秋',
           start:'2021-09-01',
           end:'2022-01-14',
          },
          {
            name: '2021年春',
           start:'2022-02-28',
           end:'2022-06-29',
          },
          ]
      

      
    }),
    
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return '添加学期名称'
          case 2: return '选择学期起止时间'
          case 3: return '确认添加学期'
          default: this.showTermWindow = false;
        }
      },
      
    
    },
  }


</script>

<style>

</style>