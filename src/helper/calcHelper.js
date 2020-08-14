module.exports = {

    getResArray(arr) {
        let result = [];
        for (let i = 0; i < arr.length; ++i) {
            let a = arr[i];
            if (result[a] != undefined)
                ++result[a];
            else
                result[a] = 1;
        }
        result.shift();
        result.shift();

        return result;
    },

    getAllowedBorders(num, FacesNumber) {
        let allowedBorders = [num / FacesNumber - num / FacesNumber * 0.025, num / FacesNumber + num / FacesNumber * 0.025];
        return allowedBorders;
    },

    checkResult(resArray, allowedBorders) {
        let counter = 0 ;

        for (let i = 0; i < resArray.length; i++) {
            if (allowedBorders[0] <= resArray[0] && resArray[0] <= allowedBorders[1]) {
                counter++;
            } else {
                break;
            }
        }
        console.log(counter);
        console.log(resArray.length);

        if( counter == resArray.length+1){return true}else{return false};
    },

};
