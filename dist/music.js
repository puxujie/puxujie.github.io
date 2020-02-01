const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "记念",
        artist: 'RAiNBOW计划 / 雷雨心',
        url: 'https://puxujie-1301186213.cos.ap-shanghai.myqcloud.com/RAiNBOW%E8%AE%A1%E5%88%92%20_%20%E9%9B%B7%E9%9B%A8%E5%BF%83%20-%20%E8%AE%B0%E5%BF%B5.mp3',
        cover: 'https://puxujie-1301186213.cos.ap-shanghai.myqcloud.com/psd10.jpg',
        lrc: '/'
      },
    ]
});