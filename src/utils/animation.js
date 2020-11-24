/**
 * @description 原生js函数animate动画效果
 * @param { obj } dom对象
 * @param { json } 键值对，形式{attr：”value”, attr: “value”}，在这里是指要动画对象的运动属性
 * @param { interval } 每执行一次改变的间隔，这里改变的是对象是属性值
 * @param { sp } 值变换的速度，使动画具有缓冲效果，而不只是匀速不变（sp为1）
 * @param { fn } 回调函数，执行完动画之后的行为
 * @example animation(this.$refs.dome, { height:200}, 10, 0.08);
 */
const animation = (obj, json, interval, sp, fn) => {
  clearInterval(obj.timer);
  function getStyle(obj, arr) {
    if (obj.currentStyle) {
      return obj.currentStyle[arr]; //针对ie
    } else {
      return document.defaultView.getComputedStyle(obj, null)[arr];
    }
  }
  obj.timer = setInterval(function () {
    var flag = true;
    for (var arr in json) {
      var icur = 0;
      if (arr == 'opacity') {
        icur = Math.round(parseFloat(getStyle(obj, arr)) * 100);
      } else {
        icur = parseInt(getStyle(obj, arr));
      }
      var speed = (json[arr] - icur) * sp;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (icur != json[arr]) {
        flag = false;
      }
      if (arr == 'opacity') {
        obj.style.filter = 'alpha(opacity : ' + (icur + speed) + ' )';
        obj.style.opacity = (icur + speed) / 100;
      } else {
        obj.style[arr] = icur + speed + 'px';
      }
    }

    if (flag) {
      clearInterval(obj.timer);
      if (fn) {
        fn();
      }
    }
  }, interval);
};
export { animation };
