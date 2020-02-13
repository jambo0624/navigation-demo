// https://i.loli.net/2017/11/10/5a05afbc5e183.png

init()

let keyboards = init().keyboards;
let websites = init().websites;
for (let index = 0; index < keyboards.length; index++) {
    let div = $('<div>').appendTo('#wrap')
    for (let indexInner = 0; indexInner < keyboards[index].length; indexInner++) {
        let kbd = $('<kbd>').appendTo(div).html(keyboards[index][indexInner])

        let editButton = $('<button>').appendTo(kbd).html('E').attr('id', keyboards[index][indexInner])
        $(editButton).click((edit) => {
            let promptValue = prompt('Please Input The New WebSite')
            websites[edit.target.id] = promptValue
            localStorage.setItem('36start', JSON.stringify(websites))
        })

        let iconImg = $('<img>').appendTo(kbd);
        if (websites[keyboards[index][indexInner]]) {
            let src = 'http://' + websites[keyboards[index][indexInner]] + '/favicon.ico';
            $(iconImg).attr('src', src)
        } else {
            $(iconImg).attr('src', '//i.loli.net/2017/11/10/5a05afbc5e183.png')
        }
    }
}
$(window).keyup((kbd) => {
    let kbdKey = kbd.key;
    let website = websites[kbdKey]
    if (website) {
        window.open("http://" + website, "_blank")
    }
})


function init() {
    var keyboards = {
        0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        length: 3
    }
    var websites = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'ruanyifeng.com',
        't': 'twitter.com',
        'y': 'youtube.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'b': 'baidu.com',
        'd': 'taobao.com',
        'z': 'zhihu.com',
        'j': 'jd.com',
        'h': 'hupu.com',
    }
    let webInLocal = JSON.parse(localStorage.getItem('36start') || null)
    if (webInLocal) websites = webInLocal
    return {
        keyboards,
        websites
    }
}