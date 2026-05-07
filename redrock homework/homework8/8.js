function fetchInformation() {
    const url = `https://api.github.com/users/AbsenthE`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("用户名：", data.login);
            //显示的地方
            const contentBox = document.getElementById("content")
            //显示的内容
            const showContent = `<h1>用户名：${data.login}</h1>`;
            //显示
            contentBox.innerHTML = showContent;


        })
}
