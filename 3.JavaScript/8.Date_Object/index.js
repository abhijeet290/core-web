// const d = new Date(); // it take time from our system
// console.log(d)
// console.log(Date.now())
// console.log(d.toDateString())
// console.log(d.toString())

// console.log(typeof date);

// the date object gives us date in milliseconds
// const d1=new Date(1000)
// console.log(d1)
// const d2=new Date(746453730000)
// console.log(d2)

// console.log(d.getDate());
// console.log(d.getDay());
// sun, mon, tue, wed, thu, fri, sat
// 0,   1,   2,   3,   4,   5,   6 // same indexing with month
// console.log(d.getMonth());
// console.log(d.getFullYear());

// console.log(d.getSeconds());
// console.log(d.getTime());

// const d=new Date("2025-04-13") // in this format indexing of month start from 1
// console.log(d)

// console.log(d.toDateString())
// Year / month / date / hour / minute / seconds / milliseconds
// number: 0 based indexing
// string: 1 based indexing
// const date=new Date(2025,3,13,22,1,10,490)
// console.log(date.toDateString())

// setting date components

// const d=new Date()
// d.setDate(13)
// d.setFullYear(2025)
// d.setMonth(3)
// console.log(d)

// date calculations

// const date1= new Date()
// const date2= new Date('2026-1-1')
// const diff=date2-date1

// const days=Math.floor(diff/(1000*60*60*24))
// const hour=Math.floor((diff/(1000*60*60))%24)
// const minute=Math.floor((diff/(1000*60*60))%60)
// const second=Math.floor((diff/(1000*60*60))%60)

// const d=document.getElementById('#day')
// d.appendChild(days)

function updateCountdown() {
    const date1 = new Date();
    const date2 = new Date('2026-01-01T00:00:00');
    const diff = date2 - date1;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('day').textContent = `Days: ${days}`;
    document.getElementById('hour').textContent = `Hours: ${hours}`;
    document.getElementById('minute').textContent = `Minutes: ${minutes}`;
    document.getElementById('seconds').textContent = `Seconds: ${seconds}`;
}

// Update every second
setInterval(updateCountdown, 1000);

// Call it once to avoid 1s delay
updateCountdown();
