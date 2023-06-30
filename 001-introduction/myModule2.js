module.exports = {
    getCurrentTime() {
        return new Date();
    },
    formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
};