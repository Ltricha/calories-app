import { useState } from "react"


export default function useRapportMultistepForm() {

    const [breakfast, setBreakfast] = useState({
        totalCalories: 0,
        food: {}
    });

    const [lunch, setLunch] = useState({
        totalCalories: 0,
        food: {}
    })

    const [dinner, setDinner] = useState({
        totalCalories: 0,
        food: {}
    })


    const [rapportInfo, setRapportInfo] = useState({
        diet: {
            breakfast: {},
            lunch: {},
            dinner: {}
        },
        exercise: {

        }
    });
    return (
        rapportInfo
    )
}

