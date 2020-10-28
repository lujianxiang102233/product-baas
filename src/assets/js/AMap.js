export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
    } else {
      // 动态创建script标签
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://webapi.amap.com/maps?v=1.4.9&callback=initAMap&key=bec255a8b7b5824371d78e94a43b061c&plugin=AMap.DistrictSearch,AMap.Circle,AMap.LngLat,AMap.Polyline,AMap.LngLat,AMap.Text,AMap.Geocoder";
      // plugin后的是需要的插件
      script.onerror = reject;
      document.head.appendChild(script);
    }
    window.initAMap = () => {
      resolve(window.AMap);
    };
  });
}
