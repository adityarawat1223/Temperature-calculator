export const Tempcalculator = ({ pureval, conunit, unit, setanswer, setanswerunit }) => {
    if (unit === "waiting") {

    }
    else {
        setanswerunit(conunit)
        if (unit === "celsius") {
            if (conunit === "kelvin") {
                
                let ans = pureval + 273.15
                setanswer(ans)


            }

            if (conunit === "fahrenheit") {

                let ans = (pureval * (9 / 5)) + 32;
                setanswer(ans)

            }

            if (conunit === "celsius") {
                setanswer(pureval)
            }

        }

        if (unit === "Kelvin") {

            if (conunit === "kelvin") {
                setanswer(pureval)

            }

            if (conunit === "celsius") {
                let ans = pureval - 273.15
                setanswer(ans)
            }
            if (conunit === "fahrenheit") {
                let ans = ((pureval - 273.15) * 1.8) + 32
                setanswer(ans)

            }

        }

        if (unit === "Fahrenheit") {

            if (conunit === "fahrenheit") {
                setanswer(pureval)
            }

            if (conunit === "celsius") {
                let ans = (pureval - 32) / 1.8
                setanswer(ans)
            }

            if (conunit === "kelvin") {
                let ans = ((pureval - 32) / 1.8) + 273.15
                setanswer(ans)
            }

        }
    }
}