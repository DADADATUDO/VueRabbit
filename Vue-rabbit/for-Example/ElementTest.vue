<template>
    <div class="test-container">
        <h2>Element Plus 按需引入测试</h2>

        <!-- 使用多个不同类型的组件 -->
        <div class="component-group">
            <!-- 按钮组件 -->
            <el-button type="primary" @click="showDialog = true">打开对话框</el-button>
            <el-button type="success" plain>成功按钮</el-button>

            <!-- 输入框组件 -->
            <el-input v-model="inputValue" placeholder="请输入内容" style="width: 300px; margin: 10px 0;" />

            <!-- 复选框组件 -->
            <el-checkbox v-model="checked">同意协议</el-checkbox>
        </div>

        <!-- 表格组件 -->
        <el-table :data="tableData" border style="width: 100%; margin: 20px 0;">
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="address" label="地址" />
        </el-table>

        <!-- 对话框组件 -->
        <el-dialog title="测试对话框" v-model="showDialog" width="50%">
            <p>如果能看到这个对话框，说明按需引入配置成功！</p>
            <template #footer>
                <el-button @click="showDialog = false">取消</el-button>
                <el-button type="primary" @click="showDialog = false">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 测试数据
const inputValue = ref('')
const checked = ref(false)
const showDialog = ref(false)
const tableData = ref([
    { date: '2023-05-01', name: '张三', address: '北京市朝阳区' },
    { date: '2023-05-02', name: '李四', address: '上海市浦东新区' }
])
</script>

<style scoped>
.test-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
}

.component-group {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}
</style>
