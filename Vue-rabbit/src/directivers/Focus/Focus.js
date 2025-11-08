// 该指令用于在元素挂载时自动聚焦到输入框元素上
export const InputFocus = {
  // 在绑定元素被插入到父节点时调用,此时可以访问到真实的 DOM 元素
  mounted(el) {
    // el：当前绑定的 DOM 元素
    // 判断当前元素是否为输入框或文本域元素
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      // 如果是输入框或文本域元素，直接聚焦
      el.focus();
    } else {
      // 如果不是输入框元素，则在该元素内部查找第一个输入框或文本域元素
      // 使用 querySelector 方法查找 input 或 textarea 元素
      const input = el.querySelector('input,textarea');
      // 如果找到了输入框元素
      if (input) {
        // 对找到的输入框元素进行聚焦
        input.focus();
      }
    }
  },
};
