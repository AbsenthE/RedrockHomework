
// 获取热歌榜歌单
fetch('http://localhost:3000/playlist/track/all?id=3778678')
    .then(res => res.json())
    .then(data => {
        const songs = data.songs || data.tracks || [];
        const songList = document.getElementById('song-list');
        songs.slice(0, 10).forEach(song => {
            const li = document.createElement('li');
            li.textContent = song.name;
            li.dataset.id = song.id;
            li.addEventListener('click', () => playSong(song.id));
            songList.appendChild(li);
        });
    });

function playSong(id) {
    fetch(`http://localhost:3000/song/url?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const url = data.data?.[0]?.url;
            if (url) {
                document.getElementById('audio-player').src = url;
                document.getElementById('audio-player').play();
            }
        });
}

