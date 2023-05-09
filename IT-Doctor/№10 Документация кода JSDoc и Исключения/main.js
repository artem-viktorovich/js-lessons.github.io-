/**
 * Функция преобразует строку с временем в минуты
 *
 * @param {string} time время в виде строки, напривер "02:08". Может быть в диапазоне
 * от "00:00" до "23:59".
 *@return {number} целое число в минутах, например time="02:08" вернет 128.
 * 
 */
function timeToMinute(time) {
    try {
        let hour = +time.split(":")[0]
        let minute =  +time.split(":")[1]
        if( !(hour>=0 && hour<=23) || !(minute>=0 && minute<=59))
    {
        throw new RangeError(`Аргумент должен быть в формате 'hh:mm' - 'hh' должен быть от 0 до 23, а 'mm' должен быть от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ":"`)
    }
        return hour*60+minute
    } catch (error) {
        console.log(error);
    }
   
}
console.log(timeToMinute("24:08")); 
