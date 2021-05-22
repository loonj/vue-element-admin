<template>
  <div class="app-container">
    <!-- 查询框 双向绑定 keyword-->
    <el-input
      v-model="keyword"
      placeholder="请输入关键字"
      clearable
      style="width:500px"
    />
    <!-- 搜索按钮 绑定点击事件 -->
    <el-button type="primary" icon="el-icon-search" @click="getDataLog2()">搜索</el-button>
    <!-- data就是绑定数据用的 -->
    <el-table
      :data="dataLog"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="详细信息">
              <span>{{ props.row.log }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="服务单"
        prop="data"
      />
      <el-table-column
        label="时间"
        prop="time"
      />
      <el-table-column
        label="店铺地址"
        prop="shop"
      />
    </el-table>
    <!-- 分页 -->
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getDataLog2"
    />
    <!-- total总条数
     listQuery.page 当前页
     listQuery.limit 每页几条
     getDataLog 后买点击分页时候要回调的函数 -->

    <el-table :data="dataGoods" style="width:100%">
      <el-table-column
        label="商品名称"
        prop="name"
      />
      <el-table-column
        label="商品评论"
        prop="comment"
      />
      <el-table-column
        label="单价"
        prop="price"
      />
      <el-table-column
        label="商品分类"
        prop="category"
      />
    </el-table>
  </div>
</template>

<script>
// 这里要调用我使用的 api
// 括号里的是要使用的函数接口，多个的话逗号隔开
import { getDataLog, getDataLogTest } from '@/api/dataLog'
// 引入分页组件
import Pagination from '@/components/Pagination'

export default {
  // 这里需要把分页组件注册进来
  components: { Pagination },
  data() {
    return {
      // 搜索关键字
      keyword: '',
      // 数据条数
      total: 0,
      // 分页参数
      listQuery: {
        page: 1,
        limit: 10
      },
      // 列表数据
      dataLog: [],

      // 真实接口商品数据
      dataGoods: []
    }
  },
  // 这个是生命周期函数，这个时候是 data 和 methods 都初始化好了，具体看基础知识
  created() {
    this.getDataLog2()
    this.getDataLogTest2()
  },
  methods: {
    // 函数部分
    getDataLog2() {
      // 参数
      this.listQuery = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        object: this.keyword
      }
      console.log(this.listQuery)
      // 调用上面引入的 api 里的 getDataLog
      getDataLog(this.listQuery).then(response => {
        console.log(response)
        // 返回值处理
        this.dataLog = []
        this.total = response.data.total
        this.dataLog = response.data.items.slice(this.listQuery.limit * (this.listQuery.page - 1), this.listQuery.limit * this.listQuery.page)
        // 查询后要把关键字给清空
        this.keyword = ''
      })
    },
    getDataLogTest2() {
      getDataLogTest(null).then(response => {
        console.log(response)
        this.dataGoods = response.data
      })
    }
  }
}
</script>

