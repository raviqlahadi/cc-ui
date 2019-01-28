let cctv = document.getElementById('stuff');
let parag = document.querySelector('.text-center');
let video = document.querySelector('.detailimage');

let list = document.getElementById('list-cctv');

// var vidhistory = document.getElementById('history1');

let listH = document.getElementById('listhistory');
let b = parag.lastChild;


list.addEventListener('click', function (e) {

    let history = [];

    if (e.target.id == 'image1') {
        video.setAttribute('src', 'http://210.23.68.3:88/mjpg/video.mjpg');
        b.textContent = 'Jatiluhur CCTV, Jakarta';

        let newVid = document.createElement('img');
        newVid.setAttribute('src', 'http://210.23.68.3:88/mjpg/video.mjpg');
        newVid.setAttribute('id', 'history1');
        newVid.setAttribute('class', 'historyimage');
        history.push(newVid);

    } else if (e.target.id == 'image2') {
        video.setAttribute('src', 'http://115.124.86.172:8000/mjpg/video.mjpg');
        b.textContent = 'DCOST Banten, Tanggerang';

        let newVid2 = document.createElement('img');
        newVid2.setAttribute('src', 'http://115.124.86.172:8000/mjpg/video.mjpg');
        newVid2.setAttribute('id', 'history1');
        newVid2.setAttribute('class', 'historyimage');
        history.push(newVid2);

    } else if (e.target.id == 'image3') {
        video.setAttribute('src', 'http://119.2.50.116:91/mjpg/video.mjpg');
        b.textContent = 'Jawa Tengah, Semarang';

        let newVid3 = document.createElement('img');
        newVid3.setAttribute('src', 'http://119.2.50.116:91/mjpg/video.mjpg');
        newVid3.setAttribute('id', 'history1');
        newVid3.setAttribute('class', 'historyimage');
        history.push(newVid3);

    } else if (e.target.id == 'image4') {
        video.setAttribute('src', 'http://210.23.68.3:81/mjpg/video.mjpg');
        b.textContent = 'Brexit, Jakarta';

        let newVid4 = document.createElement('img');
        newVid4.setAttribute('src', 'http://210.23.68.3:81/mjpg/video.mjpg');
        newVid4.setAttribute('id', 'history1');
        newVid4.setAttribute('class', 'historyimage');
        history.push(newVid4);

    } else if (e.target.id == 'image5') {
        video.setAttribute('src', 'http://116.68.252.222:83/mjpg/video.mjpg');
        b.textContent = 'Interchange, Surabaya';

        let newVid5 = document.createElement('img');
        newVid5.setAttribute('src', 'http://116.68.252.222:83/mjpg/video.mjpg');
        newVid5.setAttribute('id', 'history1');
        newVid5.setAttribute('class', 'historyimage');
        history.push(newVid5);

    } else {
        console.log('No Click Items');
    }

    console.log(history);

    for (let i = 0; i < history.length; i++) {
        // vidhistory.src = history[i].src;
        // console.log(history[i]);
        let col3 = document.createElement('div');
        col3.setAttribute('class', 'col-3 pl-0');

        let shadow = document.createElement('div');
        shadow.setAttribute('class', 'box p-3 bg-white rounded animated zoomIn');
        shadow.setAttribute('id', 'history');

        let stuff = document.createElement('div');
        stuff.setAttribute('id', 'stuff');

        let p = document.createElement('p');
        p.setAttribute('class', 'text-center mt-2');

        let bld = document.createElement('b');
        bld.textContent = b.textContent;

        p.appendChild(bld)

        stuff.appendChild(history[i]);
        stuff.appendChild(p);
        shadow.appendChild(stuff);
        col3.appendChild(shadow);

        listH.appendChild(col3);


        if (listH.childElementCount == 5) {
            listH.removeChild(listH.firstElementChild);
        }


    }

    // console.log(history.length);
    // if (history.length >= 4) {
    //     history.shift();
    // }
})
