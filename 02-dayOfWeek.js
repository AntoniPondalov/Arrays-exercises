function dayOfWeek(weekDays){
    let days = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

    if((weekDays <= 0) || (weekDays > days.length)) {
        console.log(`Invalid day!`)
    } else {
        console.log(days[weekDays - 1])
    }

}
dayOfWeek(6)