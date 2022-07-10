function pagination(c, m) {
    var current = c,
        last = m,
        //last = m = 20;
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;


    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || (i >= left && i < right)) {
                //current = 1: -1 - 4; => i = 1,2,3,20
                //current = 2: 0 - 5
                //current = 3: 1 - 6
                //current = 4: 2 - 7
                //current = 5: 3 - 8
                //current = 6: 4 - 9
                //current = 7: 5 - 10
            range.push(i);
            console.log("range", range);
        }
    }

    for (let i of range) {
        if (l) {
        // console.log("range",range);
        console.log("L", l);
        console.log("i", i);
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
                console.log("rangeWDots1", rangeWithDots);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
                console.log("rangeWDots2", rangeWithDots);
            }
        }
        rangeWithDots.push(i);
        l = i;
        console.log("i = L =", i);
        // console.log("rangeWDots3", rangeWithDots);
    }

    return rangeWithDots;
}



for (let i = 1, l = 20; i <= l; i++)
    console.log(`Selected page ${i}:`, pagination(i, l));

