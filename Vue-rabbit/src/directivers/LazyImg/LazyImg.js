// 引入 @vueuse/core 中的 useIntersectionObserver 方法，用于监听元素是否进入视口
// useIntersectionObserver 是一个 Vue 组合式 API，可以观察元素与视口的交叉情况
import { useIntersectionObserver } from '@vueuse/core';
// 引入默认的加载占位图，当图片未加载完成时显示此占位图
import Loading from '@/assets/images/200.png';

// 懒加载原理：只有当图片元素即将进入用户可视区域时才开始加载真实图片
export const LazyImg = {
  // Vue 指令的生命周期钩子函数，在绑定元素被插入到父节点时调用
  // 此时可以访问到真实的 DOM 元素
  mounted(el, binding) {
    // el：当前绑定的 DOM 元素（即使用 v-lazy-img 指令的 <img> 标签）
    // binding：一个对象，包含指令相关的属性
    // binding.value：指令传入的值（即图片的真实 URL 地址）
    // binding.arg：指令的参数（如果有的话）
    // binding.modifiers：指令的修饰符（如果有的话）

    // 设置图片的 src 属性为默认的加载占位图，避免出现破裂图片图标
    el.src = Loading;
    // 设置图片的 object-fit 属性为 cover，确保占位图和真实图片的显示方式一致
    el.style.objectFit = 'cover';

    // 2. 创建 Intersection Observer 实例来监听元素是否进入视口
    // useIntersectionObserver 返回一个对象，其中包含 stop 方法用于停止监听
    const { stop } = useIntersectionObserver(
      // 第一个参数：需要观察的目标元素（即当前的 img 元素）
      el,
      // 第二个参数：回调函数，当目标元素与视口的交叉状态发生变化时触发
      // entries 是一个数组，包含所有观察目标的信息
      // 我们只观察一个元素，所以取第一个元素 [entry]
      ([entry]) => {
        // entry.isIntersecting 是一个布尔值，表示目标元素是否与视口相交
        if (entry.isIntersecting) {
          // 3. 当元素进入视口时，开始加载真实的图片
          el.src = binding.value;

          // 4. 处理图片加载结果：成功或失败
          el.onload = () => {
            // 加载成功后调用 stop 方法停止监听，避免重复触发
            stop();
          };

          // 图片加载失败的事件处理函数
          el.onerror = () => {
            // 加载失败时重新显示占位图
            el.src = Loading;
            // 同样停止监听，避免重复触发
            stop();
            // 可以在这里添加其他加载失败的处理逻辑
            console.error('图片加载失败，已显示默认占位图');
          };
        }
      },
      // 第三个参数：配置选项对象
      {
        // threshold 表示触发回调函数的阈值
        // 0.01 表示当目标元素有 1% 进入视口时就触发回调
        // 这样可以实现提前加载，提升用户体验
        threshold: 0.01,
        // 可选配置：
        // root: null, // 默认为浏览器视口，也可指定特定的祖先元素
        // rootMargin: '0px', // 可以扩大或缩小视口边界
      },
    );

    // 5. 将 stop 方法存储在元素的自定义属性上
    // 这样可以在组件销毁时通过 unmounted 钩子清理监听器，避免内存泄漏
    el._lazyImgStop = stop;
  },

  // Vue 指令的生命周期钩子函数，在绑定元素的父组件卸载前调用
  // 用于清理工作，比如取消事件监听等
  unmounted(el) {
    // 在组件销毁前检查并调用 stop 方法停止监听
    // 可选链操作符 ?. 确保在 _lazyImgStop 不存在时不报错
    el._lazyImgStop?.();
  },
};
