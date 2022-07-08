export const filter = (obj, options) => {
    let arr = Object.values(obj);
    options = createCopy(options);
    arr = applyFilterDifficulty(arr, options.difficulty);
    arr = applyFilterLength(arr, options.length);
    arr = applyFilterGain(arr, options.gain);
    arr = applyFilterTime(arr, options.time);
    arr = applyFilterCategory(arr, options.category);
    arr = applyFilterRating(arr, options.rating);
    return arr;
};

const createCopy = options => {
    return Object.assign(
        {}, 
        options, 
        { difficulty: Object.assign({}, options.difficulty) },
        { length: Object.assign({}, options.length) },
        { gain: Object.assign({}, options.gain) },
        { time: Object.assign({}, options.time) },
        { category: Object.assign({}, options.category) },
        { rating: Object.assign({}, options.rating) }
    );
};

const applyFilterDifficulty = (arr, { easy, moderate, hard }) => {
    if(!easy && !moderate && !hard) {
        easy = true;
        moderate = true;
        hard = true;
    }
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        const trail = arr[i];
        if((easy && trail.difficulty === "easy") ||
            (moderate && trail.difficulty === "moderate") ||
            (hard && trail.difficulty === "hard")) {
            result.push(trail);
        }
    }
    return result;
};

const applyFilterLength = (arr, { min, max }) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        const trail = arr[i];
        if(min <= trail.length && trail.length <= max) {
            result.push(trail);
        }
    }
    return result;
};

const applyFilterGain = (arr, { min, max }) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        const trail = arr[i];
        if(min <= trail.gain && trail.gain <= max) {
            result.push(trail);
        }
    }
    return result;
};

const applyFilterTime = (arr, { min, max }) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        const trail = arr[i];
        const time = calcMinFromLength(trail.length);
        if(min <= time && time <= max) {
            result.push(trail);
        }
    }
    return result;
};

const calcMinFromLength = length => {
    const mi = length;
    const mph = 3;
    const min = Math.ceil((mi / mph) * 60);
    return min;
};

const applyFilterCategory = (arr, category) => {
    if(!category["Loop"] && !category["Out & Back"] && !category["Point to Point"]) {
        category["Loop"] = true;
        category["Out & Back"] = true;
        category["Point to Point"] = true;
    }
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        const trail = arr[i];
        if((category["Loop"] && trail.category === "Loop") ||
            (category["Out & Back"] && trail.category === "Out & Back") ||
            (category["Point to Point"] && trail.category === "Point to Point")) {
            result.push(trail);
        }
    }
    return result;
};

const applyFilterRating = (arr, rating) => {
    const result = [];
    const one = rating[1];
    const two = rating[2];
    const three = rating[3];
    const four = rating[4];
    const five = rating[5];
    let all = false;
    if((!one && !two && !three && !four && !five) ||
        (one && two && three && four && five)) {
        all = true;
    }
    for(let i = 0; i < arr.length; i++) {
        const trail = arr[i];
        if((all) ||
            (one && trail.avg_rating < 2) ||
            (two && 2 <= trail.avg_rating && trail.avg_rating < 3) ||
            (three && 3 <= trail.avg_rating && trail.avg_rating < 4) ||
            (four && 4 <= trail.avg_rating && trail.avg_rating < 5) ||
            (five && trail.avg_rating === 5)){
            result.push(trail);
        }
    }
    return result;
};